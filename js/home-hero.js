/* Sakura Atelier home interaction.
 * Fluid solver structure follows the referenced Three.js r128 implementation;
 * lifecycle handling and blog controls are adapted for Minos route swaps.
 */
// Suminagashi (墨流し) — GPU fluid ink simulation, hero background.
// Stable-fluids (Jos Stam) solver: advection, curl/vorticity,
// divergence, jacobi pressure solve, gradient subtraction —
// run on ping-pong WebGLRenderTargets via Three.js r128.
// Scoped to #hero only: it is a background layer for the existing
// scroll site, not a standalone page, so the render loop is gated
// by IntersectionObserver (pause when hero is off-screen) and the
// canvas never blocks page scroll.
// ============================================================
(function(){
  'use strict';
  const heroEl = document.querySelector('.home-hero');
  if(!heroEl) return;
  const scope = window.MinosPage.scope;
  const timers = [];
  const later = (callback, delay) => { const id = window.setTimeout(callback, delay); timers.push(id); return id; };

  // Keep the original nine-petal system: random position, scale, duration and delay.
  const petals = [];
  for(let i=0;i<9;i++){
    const petal=document.createElement('span');
    petal.className='home-petal';
    petal.style.left=Math.random()*100+'%';
    petal.style.animationDuration=(8+Math.random()*10)+'s';
    petal.style.animationDelay=(-Math.random()*10)+'s';
    petal.style.width=petal.style.height=(8+Math.random()*10)+'px';
    petal.setAttribute('aria-hidden','true');
    heroEl.appendChild(petal);
    petals.push(petal);
  }

  if(!window.THREE){ console.warn('Three.js unavailable — suminagashi background disabled.'); return; }
  const canvas = heroEl.querySelector('#home-suminagashi');
  if(!canvas) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- config (per spec) ----------
  const SIM_RES = 256;
  const DYE_RES = 1280;
  const PRESSURE_ITER = 28;
  const PRESSURE_DECAY = 0.8; // stability: mild decay before each solve
  const VEL_DISSIPATION = 0.16;
  const DYE_DISSIPATION = 0.07;
  const CURL = 14;
  const SPLAT_RADIUS = 0.0026;
  const SPLAT_FORCE = 5200;
  const PAPER_HEX = 0xf4efe6; // matches --paper, so it blends into the rest of the page

  const INK_HEX = 0x1a1a1f;

  function hexToRGB01(hex){ return [((hex>>16)&255)/255, ((hex>>8)&255)/255, (hex&255)/255]; }
  const PAPER_RGB = hexToRGB01(PAPER_HEX);
  function computeAbsorption(hex){
    const rgb = hexToRGB01(hex);
    return rgb.map((c,i)=> Math.max(0, -Math.log(Math.max(c,0.015)/PAPER_RGB[i])));
  }
  const ABSORPTION = computeAbsorption(INK_HEX);

  // ---------- three.js core ----------
  const renderer = new THREE.WebGLRenderer({canvas, alpha:false, antialias:false, preserveDrawingBuffer:false, powerPreference:'low-power'});
  renderer.autoClear = false;
  renderer.setPixelRatio(1); // sim resolution is already controlled explicitly; avoid extra DPR cost

  const gl = renderer.getContext();
  function getSupportedType(){
    const isWebGL2 = renderer.capabilities.isWebGL2;
    if(isWebGL2 && gl.getExtension('EXT_color_buffer_float')){
      return THREE.FloatType;
    }
    if(gl.getExtension('OES_texture_half_float') && gl.getExtension('OES_texture_half_float_linear')){
      return THREE.HalfFloatType;
    }
    return THREE.UnsignedByteType;
  }
  const TEX_TYPE = getSupportedType();

  const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
  const scene = new THREE.Scene();
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2,2));
  scene.add(quad);
  function blit(material, target){
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
  }

  function createFBO(w,h){
    return new THREE.WebGLRenderTarget(w,h,{
      wrapS:THREE.ClampToEdgeWrapping, wrapT:THREE.ClampToEdgeWrapping,
      minFilter:THREE.LinearFilter, magFilter:THREE.LinearFilter,
      type:TEX_TYPE, format:THREE.RGBAFormat, depthBuffer:false, stencilBuffer:false
    });
  }
  function createDoubleFBO(w,h){
    let a = createFBO(w,h), b = createFBO(w,h);
    return {
      get read(){ return a; }, get write(){ return b; },
      swap(){ const t=a; a=b; b=t; }
    };
  }
  function getResolution(res, w, h){
    let ar = w/h; if(ar<1) ar = 1/ar;
    const min = Math.round(res), max = Math.round(res*ar);
    return (w>h) ? {w:max,h:min} : {w:min,h:max};
  }

  let velocity, dye, curlFBO, divergenceFBO, pressure;
  let simW, simH, dyeW, dyeH;

  const VERT = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }`;

  const splatMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uTarget; uniform float aspectRatio;
      uniform vec3 color; uniform vec2 point; uniform float radius;
      void main(){
        vec2 p = vUv - point; p.x *= aspectRatio;
        float splat = exp(-dot(p,p)/radius);
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat*color, 1.0);
      }`,
    uniforms:{ uTarget:{value:null}, aspectRatio:{value:1}, color:{value:new THREE.Vector3()}, point:{value:new THREE.Vector2()}, radius:{value:SPLAT_RADIUS} }
  });

  const advectionMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uVelocity; uniform sampler2D uSource;
      uniform vec2 texelSize; uniform float dt; uniform float dissipation;
      void main(){
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
      }`,
    uniforms:{ uVelocity:{value:null}, uSource:{value:null}, texelSize:{value:new THREE.Vector2()}, dt:{value:0.016}, dissipation:{value:1} }
  });

  const curlMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uVelocity; uniform vec2 texelSize;
      void main(){
        float L=texture2D(uVelocity,vUv-vec2(texelSize.x,0.0)).y;
        float R=texture2D(uVelocity,vUv+vec2(texelSize.x,0.0)).y;
        float B=texture2D(uVelocity,vUv-vec2(0.0,texelSize.y)).x;
        float T=texture2D(uVelocity,vUv+vec2(0.0,texelSize.y)).x;
        gl_FragColor = vec4(0.5*((R-L)-(T-B)),0.0,0.0,1.0);
      }`,
    uniforms:{ uVelocity:{value:null}, texelSize:{value:new THREE.Vector2()} }
  });

  const vorticityMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uVelocity; uniform sampler2D uCurl;
      uniform float curlStrength; uniform vec2 texelSize; uniform float dt;
      void main(){
        float L=texture2D(uCurl,vUv-vec2(texelSize.x,0.0)).x;
        float R=texture2D(uCurl,vUv+vec2(texelSize.x,0.0)).x;
        float B=texture2D(uCurl,vUv-vec2(0.0,texelSize.y)).x;
        float T=texture2D(uCurl,vUv+vec2(0.0,texelSize.y)).x;
        float C=texture2D(uCurl,vUv).x;
        vec2 force = 0.5*vec2(abs(T)-abs(B), abs(R)-abs(L));
        force /= length(force)+0.0001;
        force *= curlStrength*C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity,vUv).xy;
        gl_FragColor = vec4(vel+force*dt, 0.0, 1.0);
      }`,
    uniforms:{ uVelocity:{value:null}, uCurl:{value:null}, curlStrength:{value:CURL}, texelSize:{value:new THREE.Vector2()}, dt:{value:0.016} }
  });

  const divergenceMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uVelocity; uniform vec2 texelSize;
      void main(){
        float L=texture2D(uVelocity,vUv-vec2(texelSize.x,0.0)).x;
        float R=texture2D(uVelocity,vUv+vec2(texelSize.x,0.0)).x;
        float B=texture2D(uVelocity,vUv-vec2(0.0,texelSize.y)).y;
        float T=texture2D(uVelocity,vUv+vec2(0.0,texelSize.y)).y;
        gl_FragColor = vec4(0.5*((R-L)+(T-B)),0.0,0.0,1.0);
      }`,
    uniforms:{ uVelocity:{value:null}, texelSize:{value:new THREE.Vector2()} }
  });

  const clearMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uTexture; uniform float value;
      void main(){ gl_FragColor = value * texture2D(uTexture, vUv); }`,
    uniforms:{ uTexture:{value:null}, value:{value:1} }
  });

  const pressureMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uPressure; uniform sampler2D uDivergence; uniform vec2 texelSize;
      void main(){
        float L=texture2D(uPressure,vUv-vec2(texelSize.x,0.0)).x;
        float R=texture2D(uPressure,vUv+vec2(texelSize.x,0.0)).x;
        float B=texture2D(uPressure,vUv-vec2(0.0,texelSize.y)).x;
        float T=texture2D(uPressure,vUv+vec2(0.0,texelSize.y)).x;
        float div=texture2D(uDivergence,vUv).x;
        gl_FragColor = vec4((L+R+B+T-div)*0.25,0.0,0.0,1.0);
      }`,
    uniforms:{ uPressure:{value:null}, uDivergence:{value:null}, texelSize:{value:new THREE.Vector2()} }
  });

  const gradientMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uPressure; uniform sampler2D uVelocity; uniform vec2 texelSize;
      void main(){
        float L=texture2D(uPressure,vUv-vec2(texelSize.x,0.0)).x;
        float R=texture2D(uPressure,vUv+vec2(texelSize.x,0.0)).x;
        float B=texture2D(uPressure,vUv-vec2(0.0,texelSize.y)).x;
        float T=texture2D(uPressure,vUv+vec2(0.0,texelSize.y)).x;
        vec2 vel = texture2D(uVelocity,vUv).xy;
        vel -= vec2(R-L, T-B)*0.5;
        gl_FragColor = vec4(vel,0.0,1.0);
      }`,
    uniforms:{ uPressure:{value:null}, uVelocity:{value:null}, texelSize:{value:new THREE.Vector2()} }
  });

  const displayMat = new THREE.ShaderMaterial({
    vertexShader:VERT,
    fragmentShader:`
      precision highp float; varying vec2 vUv;
      uniform sampler2D uDye; uniform vec3 paperColor; uniform vec2 resolution;
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        float a=hash(i), b=hash(i+vec2(1.0,0.0)), c=hash(i+vec2(0.0,1.0)), d=hash(i+vec2(1.0,1.0));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
      }
      void main(){
        vec3 absorption = texture2D(uDye, vUv).rgb;
        vec3 col = paperColor * exp(-absorption);
        vec2 px = vUv*resolution;
        float nHigh = noise(px*0.9)-0.5;
        float nMid  = noise(px*0.18+11.0)-0.5;
        float nLow  = noise(px*0.03+37.0)-0.5;
        col += nHigh*0.025 + nMid*0.02 + nLow*0.03;
        vec2 c = vUv-0.5;
        float vig = smoothstep(0.78,0.2,length(c));
        col = mix(col*0.88, col, vig);
        gl_FragColor = vec4(col,1.0);
      }`,
    uniforms:{ uDye:{value:null}, paperColor:{value:new THREE.Vector3(PAPER_RGB[0],PAPER_RGB[1],PAPER_RGB[2])}, resolution:{value:new THREE.Vector2()} }
  });

  function initFramebuffers(w,h){
    const sim = getResolution(SIM_RES, w, h);
    const dyeRes = getResolution(DYE_RES, w, h);
    simW=sim.w; simH=sim.h; dyeW=dyeRes.w; dyeH=dyeRes.h;
    velocity = createDoubleFBO(simW, simH);
    curlFBO = createFBO(simW, simH);
    divergenceFBO = createFBO(simW, simH);
    pressure = createDoubleFBO(simW, simH);
    dye = createDoubleFBO(dyeW, dyeH);
  }

  function resize(){
    const w = Math.max(1, Math.floor(heroEl.clientWidth));
    const h = Math.max(1, Math.floor(heroEl.clientHeight || window.innerHeight));
    renderer.setSize(w,h,false);
    displayMat.uniforms.resolution.value.set(w,h);
    initFramebuffers(w,h);
  }

  // ---------- simulation step ----------
  function step(dt){
    const simTexel = new THREE.Vector2(1/simW, 1/simH);

    curlMat.uniforms.uVelocity.value = velocity.read.texture;
    curlMat.uniforms.texelSize.value = simTexel;
    blit(curlMat, curlFBO);

    vorticityMat.uniforms.uVelocity.value = velocity.read.texture;
    vorticityMat.uniforms.uCurl.value = curlFBO.texture;
    vorticityMat.uniforms.texelSize.value = simTexel;
    vorticityMat.uniforms.dt.value = dt;
    blit(vorticityMat, velocity.write); velocity.swap();

    divergenceMat.uniforms.uVelocity.value = velocity.read.texture;
    divergenceMat.uniforms.texelSize.value = simTexel;
    blit(divergenceMat, divergenceFBO);

    clearMat.uniforms.uTexture.value = pressure.read.texture;
    clearMat.uniforms.value.value = PRESSURE_DECAY;
    blit(clearMat, pressure.write); pressure.swap();

    for(let i=0;i<PRESSURE_ITER;i++){
      pressureMat.uniforms.uPressure.value = pressure.read.texture;
      pressureMat.uniforms.uDivergence.value = divergenceFBO.texture;
      pressureMat.uniforms.texelSize.value = simTexel;
      blit(pressureMat, pressure.write); pressure.swap();
    }

    gradientMat.uniforms.uPressure.value = pressure.read.texture;
    gradientMat.uniforms.uVelocity.value = velocity.read.texture;
    gradientMat.uniforms.texelSize.value = simTexel;
    blit(gradientMat, velocity.write); velocity.swap();

    const velDecay = Math.pow(0.02, dt*VEL_DISSIPATION);
    advectionMat.uniforms.uVelocity.value = velocity.read.texture;
    advectionMat.uniforms.uSource.value = velocity.read.texture;
    advectionMat.uniforms.texelSize.value = simTexel;
    advectionMat.uniforms.dt.value = dt;
    advectionMat.uniforms.dissipation.value = velDecay;
    blit(advectionMat, velocity.write); velocity.swap();

    const dyeTexel = new THREE.Vector2(1/dyeW, 1/dyeH);
    const dyeDecay = Math.pow(0.02, dt*DYE_DISSIPATION);
    advectionMat.uniforms.uVelocity.value = velocity.read.texture;
    advectionMat.uniforms.uSource.value = dye.read.texture;
    advectionMat.uniforms.texelSize.value = dyeTexel;
    advectionMat.uniforms.dt.value = dt;
    advectionMat.uniforms.dissipation.value = washing ? washDecay(dt) : dyeDecay;
    blit(advectionMat, dye.write); dye.swap();
  }

  // ---------- wash-away (洗い流す): fades over ~1.5s, framerate independent ----------
  let washing=false, washT=0;
  function washDecay(dt){ return Math.pow(0.02, dt/1.5); }
  function updateWash(dt){
    if(!washing) return;
    washT += dt;
    if(washT>1.6) washing=false;
  }

  // ---------- splats ----------
  function applySplat(px, py, dx, dy, paintDye){
    const aspect = simW/simH;
    splatMat.uniforms.uTarget.value = velocity.read.texture;
    splatMat.uniforms.aspectRatio.value = aspect;
    splatMat.uniforms.point.value.set(px,py);
    splatMat.uniforms.color.value.set(dx,dy,0);
    splatMat.uniforms.radius.value = SPLAT_RADIUS;
    blit(splatMat, velocity.write); velocity.swap();

    if(paintDye){
      const a = ABSORPTION;
      splatMat.uniforms.uTarget.value = dye.read.texture;
      splatMat.uniforms.color.value.set(a[0],a[1],a[2]);
      splatMat.uniforms.radius.value = SPLAT_RADIUS*1.4;
      blit(splatMat, dye.write); dye.swap();
    }
  }

  // ---------- pointer interaction ----------
  let lastInteraction = performance.now();
  function markInteraction(){ lastInteraction = performance.now(); }

  let activePointerId=null, lastPx=0.5, lastPy=0.5;
  function normFromEvent(e){
    const rect = canvas.getBoundingClientRect();
    return [ (e.clientX-rect.left)/rect.width, 1 - (e.clientY-rect.top)/rect.height ];
  }
  canvas.addEventListener('pointerdown', (e)=>{
    activePointerId = e.pointerId;
    try{ canvas.setPointerCapture(e.pointerId); }catch(err){}
    const [x,y] = normFromEvent(e);
    lastPx=x; lastPy=y;
    markInteraction();
    applySplat(x,y,(Math.random()-0.5)*SPLAT_FORCE*0.1,(Math.random()-0.5)*SPLAT_FORCE*0.1,true);
  });
  canvas.addEventListener('pointermove', (e)=>{
    const [x,y] = normFromEvent(e);
    const dx=(x-lastPx)*SPLAT_FORCE, dy=(y-lastPy)*SPLAT_FORCE;
    const painting = e.pointerId===activePointerId && (e.buttons & 1);
    if(painting){
      applySplat(x,y,dx,dy,true);
      markInteraction();
    } else {
      applySplat(x,y,dx*0.5,dy*0.5,false);
    }
    lastPx=x; lastPy=y;
  });
  ['pointerup','pointercancel','pointerleave'].forEach(evt=>{
    scope.listen(window, evt, (e)=>{ if(e.pointerId===activePointerId) activePointerId=null; });
  });

  scope.listen(window, 'keydown', (e)=>{
    if(!heroVisible) return;
    if(e.code==='Space'){
      e.preventDefault(); markInteraction();
      applySplat(Math.random(),Math.random(),(Math.random()-0.5)*SPLAT_FORCE,(Math.random()-0.5)*SPLAT_FORCE,true);
    } else if(e.key==='x' || e.key==='X'){
      washing=true; washT=0; markInteraction();
    }
  });

  // ---------- autoplay: idle drift + occasional drops ----------
  let lastAutoSplat=0, lastFlow=0;
  function updateAutoplay(now){
    const idleFor = now-lastInteraction;
    const dropGap = reducedMotion ? 3200 : 1600;
    const flowGap = reducedMotion ? 1100 : 450;
    if(idleFor>3000 && now-lastAutoSplat>dropGap){
      lastAutoSplat=now;
      const x=Math.random(), y=Math.random();
      applySplat(x,y,(Math.random()-0.5)*SPLAT_FORCE*0.6,(Math.random()-0.5)*SPLAT_FORCE*0.6,true);
      if(!reducedMotion && Math.random()<0.5){
        later(()=>{
          applySplat(x+(Math.random()-0.5)*0.12, y+(Math.random()-0.5)*0.12, (Math.random()-0.5)*SPLAT_FORCE*0.4,(Math.random()-0.5)*SPLAT_FORCE*0.4, true);
        }, 180+Math.random()*260);
      }
    }
    if(now-lastFlow>flowGap){
      lastFlow=now;
      applySplat(Math.random(),Math.random(),(Math.random()-0.5)*SPLAT_FORCE*0.35,(Math.random()-0.5)*SPLAT_FORCE*0.35,false);
    }
  }

  // ---------- initial three-drop intro ----------
  function introSequence(){
    later(()=>applySplat(0.38,0.58,0,0,true), 0);
    later(()=>applySplat(0.62,0.42,0,0,true), 450);
    later(()=>applySplat(0.5,0.62,0,0,true), 950);
  }

  // ---------- render loop, gated by visibility ----------
  let heroVisible=true, rafId=null, lastFrameTime=performance.now();
  function loop(now){
    rafId = requestAnimationFrame(loop);
    let dt = (now-lastFrameTime)/1000; lastFrameTime=now;
    dt = Math.min(dt, 1/30);
    step(dt);
    updateAutoplay(now);
    updateWash(dt);
    displayMat.uniforms.uDye.value = dye.read.texture;
    blit(displayMat, null);
  }
  function startLoop(){ if(!rafId){ lastFrameTime=performance.now(); rafId=requestAnimationFrame(loop); } }
  function stopLoop(){ if(rafId){ cancelAnimationFrame(rafId); rafId=null; } }

  const heroObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      heroVisible = entry.isIntersecting;
      if(heroVisible) startLoop(); else stopLoop();
    });
  },{threshold:0.05});
  heroObserver.observe(heroEl);

  scope.listen(document, 'visibilitychange', ()=>{
    if(document.hidden) stopLoop(); else if(heroVisible) startLoop();
  });

  let resizeTimer=null;
  scope.listen(window, 'resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer=later(resize, 200);
  });

  // ---------- boot ----------
  resize();
  startLoop();
  introSequence();

  heroEl.classList.add('has-suminagashi');
  scope.cleanup(()=>{
    stopLoop();
    heroObserver.disconnect();
    clearTimeout(resizeTimer);
    timers.forEach(clearTimeout);
    petals.forEach(petal=>petal.remove());
    [velocity && velocity.read, velocity && velocity.write, dye && dye.read, dye && dye.write,
      curlFBO, divergenceFBO, pressure && pressure.read, pressure && pressure.write]
      .filter(Boolean).forEach(target=>target.dispose());
    [splatMat, advectionMat, curlMat, vorticityMat, divergenceMat, clearMat,
      pressureMat, gradientMat, displayMat].forEach(material=>material.dispose());
    quad.geometry.dispose();
    renderer.dispose();
  });
})();
