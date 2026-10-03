(()=>{var Em=0,Vh=1,wm=2;var zh=1,Am=2,yi=3,ai=0,$t=1,pn=2,ji=0,Fr=1,Gh=2,Wh=3,Xh=4,Rm=5,dr=100,Cm=101,Pm=102,Im=103,Lm=104,Dm=200,Um=201,Nm=202,Om=203,Ul=204,Nl=205,Fm=206,Bm=207,km=208,Hm=209,Vm=210,zm=211,Gm=212,Wm=213,Xm=214,$l=0,ec=1,tc=2,Br=3,nc=4,ic=5,rc=6,sc=7,qh=0,qm=1,Ym=2,Ki=0,jm=1,Km=2,Jm=3,Zm=4,Qm=5,$m=6,eg=7,Lh="attached",tg="detached",Yh=300,Yr=301,jr=302,oc=303,ac=304,Aa=306,fr=1e3,mi=1001,Os=1002,Zt=1003,lc=1004;var Kr=1005;var dn=1006,Qs=1007;var ci=1008;var ui=1009,jh=1010,Kh=1011,$s=1012,cc=1013,gr=1014,jn=1015,eo=1016,uc=1017,hc=1018,to=1020,Jh=35902,Zh=35899,Qh=1021,$h=1022,Nn=1023,Fs=1026,no=1027,dc=1028,fc=1029,ed=1030,pc=1031;var mc=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,gc=35840,_c=35841,xc=35842,vc=35843,bc=36196,yc=37492,Mc=37496,Sc=37808,Tc=37809,Ec=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,Uc=37819,Nc=37820,Oc=37821,Fc=36492,Bc=36494,kc=36495,Hc=36283,Vc=36284,zc=36285,Gc=36286,La=2200,Wc=2201,ng=2202,kr=2300,Hr=2301,Dl=2302,Nr=2400,Or=2401,$o=2402,Xc=2500,ig=2501,td=0,Da=1,io=2,rg=3200,sg=3201;var Ua=0,og=1,Ji="",Ot="srgb",Qt="srgb-linear",ea="linear",bt="srgb";var Ur=7680;var Dh=519,ag=512,lg=513,cg=514,nd=515,ug=516,hg=517,dg=518,fg=519,Ol=35044,id=35048;var rd="300 es",si=2e3,ta=2001;var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vp=1234567,Zo=Math.PI/180,Vr=180/Math.PI;function oi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Qe(r,e,t){return Math.max(e,Math.min(t,r))}function sd(r,e){return(r%e+e)%e}function qx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Yx(r,e,t){return r!==e?(t-r)/(e-r):0}function Qo(r,e,t){return(1-t)*r+t*e}function jx(r,e,t,n){return Qo(r,e,1-Math.exp(-t*n))}function Kx(r,e=1){return e-Math.abs(sd(r,e*2)-e)}function Jx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $x(r,e){return r+Math.random()*(e-r)}function ev(r){return r*(.5-Math.random())}function tv(r){r!==void 0&&(Vp=r);let e=Vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nv(r){return r*Zo}function iv(r){return r*Vr}function rv(r){return(r&r-1)===0&&r!==0}function sv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ov(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function av(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var $e={DEG2RAD:Zo,RAD2DEG:Vr,generateUUID:oi,clamp:Qe,euclideanModulo:sd,mapLinear:qx,inverseLerp:Yx,lerp:Qo,damp:jx,pingpong:Kx,smoothstep:Jx,smootherstep:Zx,randInt:Qx,randFloat:$x,randFloatSpread:ev,seededRandom:tv,degToRad:nv,radToDeg:iv,isPowerOfTwo:rv,ceilPowerOfTwo:sv,floorPowerOfTwo:ov,setQuaternionFromProperEuler:av,normalize:vt,denormalize:ri},je=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ee=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*_,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let S=Math.sqrt(b),T=Math.atan2(S,m*v);g=Math.sin(g*T)/S,a=Math.sin(a*T)/S}let x=a*v;if(l=l*g+d*x,c=c*g+f*x,u=u*g+p*x,h=h*g+_*x,g===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new P,zp=new Ee,Oe=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],b=i[4],x=i[7],S=i[2],T=i[5],w=i[8];return s[0]=o*_+a*v+l*S,s[3]=o*g+a*b+l*T,s[6]=o*m+a*x+l*w,s[1]=c*_+u*v+h*S,s[4]=c*g+u*b+h*T,s[7]=c*m+u*x+h*w,s[2]=d*_+f*v+p*S,s[5]=d*g+f*b+p*T,s[8]=d*m+f*x+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oh.makeScale(e,t)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oh=new Oe;function od(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pg(){let r=Bs("canvas");return r.style.display="block",r}var Gp={};function ks(r){r in Gp||(Gp[r]=!0,console.warn(r))}function mg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Wp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){let r={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qt]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}var it=lv();function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ys,Fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Bs("canvas")),ys.width=e.width,ys.height=e.height;let i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cv=0,Hs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ah(i[o].image)):s.push(ah(i[o]))}else s=ah(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uv=0,lh=new P,jt=class r extends _i{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=mi,i=mi,s=dn,o=ci,a=Nn,l=ui,c=r.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=oi(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Yh;jt.DEFAULT_ANISOTROPY=1;var pt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,S=(m+1)/2,T=(u+d)/4,w=(h+_)/4,R=(p+g)/4;return b>x&&b>S?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=w/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=R/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new jt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),ul.subVectors(this.max,Go),Ms.subVectors(e.a,Go),Ss.subVectors(e.b,Go),Ts.subVectors(e.c,Go),sr.subVectors(Ss,Ms),or.subVectors(Ts,Ss),Pr.subVectors(Ms,Ts);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Pr.z,Pr.y,sr.z,0,-sr.x,or.z,0,-or.x,Pr.z,0,-Pr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Pr.y,Pr.x,0];return!ch(t,Ms,Ss,Ts,ul)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Ms,Ss,Ts,ul))?!1:(hl.crossVectors(sr,or),t=[hl.x,hl.y,hl.z],ch(t,Ms,Ss,Ts,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new P,new P,new P,new P,new P,new P,new P,new P],ti=new P,cl=new Dn,Ms=new P,Ss=new P,Ts=new P,sr=new P,or=new P,Pr=new P,Go=new P,ul=new P,hl=new P,Ir=new P;function ch(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ir.fromArray(r,s);let a=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var hv=new Dn,Wo=new P,uh=new P,bn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(uh)),this.expandByPoint(Wo.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oi=new P,hh=new P,dl=new P,ar=new P,dh=new P,fl=new P,fh=new P,pr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hh.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(hh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=ar.dot(this.direction),l=-ar.dot(dl),c=ar.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hh).addScaledVector(dl,d),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){dh.subVectors(t,e),fl.subVectors(n,e),fh.crossVectors(dh,fl);let o=this.direction.dot(fh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);let l=a*this.direction.dot(fl.crossVectors(ar,fl));if(l<0)return null;let c=a*this.direction.dot(dh.cross(ar));if(c<0||l+c>o)return null;let u=-a*ar.dot(fh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class r{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dv,e,fv)}lookAt(e,t,n){let i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),lr.crossVectors(n,In),lr.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),lr.crossVectors(n,In)),lr.normalize(),pl.crossVectors(In,lr),i[0]=lr.x,i[4]=pl.x,i[8]=In.x,i[1]=lr.y,i[5]=pl.y,i[9]=In.y,i[2]=lr.z,i[6]=pl.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],b=n[7],x=n[11],S=n[15],T=i[0],w=i[4],R=i[8],M=i[12],y=i[1],C=i[5],N=i[9],B=i[13],O=i[2],V=i[6],L=i[10],j=i[14],G=i[3],se=i[7],$=i[11],ue=i[15];return s[0]=o*T+a*y+l*O+c*G,s[4]=o*w+a*C+l*V+c*se,s[8]=o*R+a*N+l*L+c*$,s[12]=o*M+a*B+l*j+c*ue,s[1]=u*T+h*y+d*O+f*G,s[5]=u*w+h*C+d*V+f*se,s[9]=u*R+h*N+d*L+f*$,s[13]=u*M+h*B+d*j+f*ue,s[2]=p*T+_*y+g*O+m*G,s[6]=p*w+_*C+g*V+m*se,s[10]=p*R+_*N+g*L+m*$,s[14]=p*M+_*B+g*j+m*ue,s[3]=v*T+b*y+x*O+S*G,s[7]=v*w+b*C+x*V+S*se,s[11]=v*R+b*N+x*L+S*$,s[15]=v*M+b*B+x*j+S*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=h*g*c-_*d*c+_*l*f-a*g*f-h*l*m+a*d*m,b=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,x=u*_*c-p*h*c+p*a*f-o*_*f-u*a*m+o*h*m,S=p*h*l-u*_*l-p*a*d+o*_*d+u*a*g-o*h*g,T=t*v+n*b+i*x+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=v*w,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*m-n*d*m)*w,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*m+n*l*m)*w,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=b*w,e[5]=(u*g*s-p*d*s+p*i*f-t*g*f-u*i*m+t*d*m)*w,e[6]=(p*l*s-o*g*s-p*i*c+t*g*c+o*i*m-t*l*m)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=x*w,e[9]=(p*h*s-u*_*s-p*n*f+t*_*f+u*n*m-t*h*m)*w,e[10]=(o*_*s-p*a*s+p*n*c-t*_*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=S*w,e[13]=(u*_*i-p*h*i+p*n*d-t*_*d-u*n*g+t*h*g)*w,e[14]=(p*a*i-o*_*i-p*n*l+t*_*l+o*n*g-t*a*g)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,_=o*u,g=o*h,m=a*h,v=l*c,b=l*u,x=l*h,S=n.x,T=n.y,w=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+x)*S,i[2]=(p-b)*S,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+m))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(p+b)*w,i[9]=(g-v)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Es.set(i[0],i[1],i[2]).length(),o=Es.set(i[4],i[5],i[6]).length(),a=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);let c=1/s,u=1/o,h=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=si,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===si)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ta)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=si,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===si)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===ta)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new P,ni=new De,dv=new P(0,0,0),fv=new P(1,1,1),lr=new P,pl=new P,In=new P,qp=new De,Yp=new Ee,Kt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pv=0,jp=new P,ws=new Ee,Fi=new De,ml=new P,Xo=new P,mv=new P,gv=new Ee,Kp=new P(1,0,0),Jp=new P(0,1,0),Zp=new P(0,0,1),Qp={type:"added"},_v={type:"removed"},As={type:"childadded",child:null},ph={type:"childremoved",child:null},lt=class r extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new Kt,n=new Ee,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Oe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ml.copy(e):ml.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Xo,ml,this.up):Fi.lookAt(ml,Xo,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(Fi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_v),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};lt.DEFAULT_UP=new P(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new P,Bi=new P,mh=new P,ki=new P,Rs=new P,Cs=new P,$p=new P,gh=new P,_h=new P,xh=new P,vh=new pt,bh=new pt,yh=new pt,hr=class r{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ii.subVectors(i,t),Bi.subVectors(n,t),mh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Bi),l=ii.dot(mh),c=Bi.dot(Bi),u=Bi.dot(mh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return vh.setScalar(0),bh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vh,s.x),o.addScaledVector(bh,s.y),o.addScaledVector(yh,s.z),o}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),Bi.subVectors(e,t),ii.cross(Bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ii.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Rs.subVectors(i,n),Cs.subVectors(s,n),gh.subVectors(e,n);let l=Rs.dot(gh),c=Cs.dot(gh);if(l<=0&&c<=0)return t.copy(n);_h.subVectors(e,i);let u=Rs.dot(_h),h=Cs.dot(_h);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Rs,o);xh.subVectors(e,s);let f=Rs.dot(xh),p=Cs.dot(xh);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Cs,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return $p.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector($p,a);let m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Mh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=sd(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Mh(o,s,e+1/3),this.g=Mh(o,s,e),this.b=Mh(o,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return it.workingToColorSpace(rn.copy(this),e),Math.round(Qe(rn.r*255,0,255))*65536+Math.round(Qe(rn.g*255,0,255))*256+Math.round(Qe(rn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ot){it.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,i=rn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(gl);let n=Qo(cr.h,gl.h,t),i=Qo(cr.s,gl.s,t),s=Qo(cr.l,gl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ce;Ce.NAMES=gg;var xv=0,sn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Fr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yn=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new P,_l=new je,vv=0,Ke=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}};var ia=class extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ra=class extends Ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var hn=class extends Ke{constructor(e,t,n){super(new Float32Array(e),t,n)}},bv=0,Wn=new De,Sh=new lt,Ps=new P,Ln=new Dn,qo=new Dn,Yt=new P,mt=class r extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?ra:ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Ln.min,qo.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,qo.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(qo.min),Ln.expandByPoint(qo.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Yt.add(Ps)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,u=new P,h=new P,d=new je,f=new je,p=new je,_=new P,g=new P;function m(R,M,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(C),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),a[R].add(_),a[M].add(_),a[y].add(_),l[R].add(g),l[M].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){let y=v[R],C=y.start,N=y.count;for(let B=C,O=C+N;B<O;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new P,x=new P,S=new P,T=new P;function w(R){S.fromBufferAttribute(i,R),T.copy(S);let M=a[R];b.copy(M),b.sub(S.multiplyScalar(S.dot(M))).normalize(),x.crossVectors(T,M);let C=x.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,M=v.length;R<M;++R){let y=v[R],C=y.start,N=y.count;for(let B=C,O=C+N;B<O;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Ke(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},em=new De,Lr=new pr,xl=new bn,tm=new P,vl=new P,bl=new P,yl=new P,Th=new P,Ml=new P,nm=new P,Sl=new P,Vt=class extends lt{constructor(e=new mt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Th.fromBufferAttribute(h,e),o?Ml.addScaledVector(Th,u):Ml.addScaledVector(Th.sub(t),u))}t.add(Ml)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(xl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(xl,tm)===null||Lr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(em),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,S=b;x<S;x+=3){let T=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);i=Tl(this,m,e,n,c,u,h,T,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);i=Tl(this,o,e,n,c,u,h,v,b,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,S=b;x<S;x+=3){let T=x,w=x+1,R=x+2;i=Tl(this,m,e,n,c,u,h,T,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=g,b=g+1,x=g+2;i=Tl(this,o,e,n,c,u,h,v,b,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function yv(r,e,t,n,i,s,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ai,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Sl);return c<t.near||c>t.far?null:{distance:c,point:Sl.clone(),object:r}}function Tl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,vl),r.getVertexPosition(l,bl),r.getVertexPosition(c,yl);let u=yv(r,e,t,n,vl,bl,yl,nm);if(u){let h=new P;hr.getBarycoord(nm,vl,bl,yl,h),i&&(u.uv=hr.getInterpolatedAttribute(i,a,l,c,h,new je)),s&&(u.uv1=hr.getInterpolatedAttribute(s,a,l,c,h,new je)),o&&(u.normal=hr.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};hr.getNormal(vl,bl,yl,d.normal),u.face=d,u.barycoord=h}return u}var zs=class r extends mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(h,2));function p(_,g,m,v,b,x,S,T,w,R,M){let y=x/w,C=S/R,N=x/2,B=S/2,O=T/2,V=w+1,L=R+1,j=0,G=0,se=new P;for(let $=0;$<L;$++){let ue=$*C-B;for(let Re=0;Re<V;Re++){let Ne=Re*y-N;se[_]=Ne*v,se[g]=ue*b,se[m]=O,c.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[m]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(Re/w),h.push(1-$/R),j+=1}}for(let $=0;$<R;$++)for(let ue=0;ue<w;ue++){let Re=d+ue+V*$,Ne=d+ue+V*($+1),Fe=d+(ue+1)+V*($+1),Ye=d+(ue+1)+V*$;l.push(Re,Ne,Ye),l.push(Ne,Fe,Ye),G+=6}a.addGroup(f,G,M),f+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(r){let e={};for(let t=0;t<r.length;t++){let n=Jr(r[t]);for(let i in n)e[i]=n[i]}return e}function Mv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ad(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var qc={clone:Jr,merge:on},Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=Mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sa=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ur=new P,im=new je,rm=new je,Ht=class extends sa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,im,rm),t.subVectors(rm,im)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,Hl=class extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Is,Ls,e,t);i.layers=this.layers,this.add(i);let s=new Ht(Is,Ls,e,t);s.layers=this.layers,this.add(s);let o=new Ht(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oa=class extends jt{constructor(e=[],t=Yr,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zs(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ji});s.uniforms.tEquirect.value=t;let o=new Vt(i,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=dn),new Hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Lt=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ev={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var aa=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new P,Xs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var sm=new P,om=new pt,am=new pt,wv=new P,lm=new De,El=new P,Eh=new bn,cm=new De,wh=new pr,zr=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,El),this.boundingBox.expandByPoint(El)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,El),this.boundingSphere.expandByPoint(El)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eh.copy(this.boundingSphere),Eh.applyMatrix4(i),e.ray.intersectsSphere(Eh)!==!1&&(cm.copy(i).invert(),wh.copy(e.ray).applyMatrix4(cm),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;om.fromBufferAttribute(i.attributes.skinIndex,e),am.fromBufferAttribute(i.attributes.skinWeight,e),sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=am.getComponent(s);if(o!==0){let a=om.getComponent(s);lm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wv.copy(sm).applyMatrix4(lm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},qs=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},la=class extends jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Zt,u=Zt,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},um=new De,Av=new De,li=class r{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:Av;um.multiplyMatrices(a,t[s]),um.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new la(t,e,e,Nn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new qs),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},mr=class extends Ke{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new De,hm=new De,wl=[],dm=new Dn,Rv=new De,Yo=new Vt,jo=new bn,ca=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),dm.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(dm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),jo.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),hm.multiplyMatrices(n,Ds),Yo.matrixWorld=hm,Yo.raycast(e,wl);for(let o=0,a=wl.length;o<a;o++){let l=wl[o];l.instanceId=s,l.object=this,t.push(l)}wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(i*this.count),i,this.count,dc,jn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ah=new P,Cv=new P,Pv=new Oe,pi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ah.subVectors(n,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ah),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pv.getNormalMatrix(e),i=this.coplanarPoint(Ah).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new bn,Iv=new je(.5,.5),Al=new P,Ys=class{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],b=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-o,f-u,m-p,S-v).normalize(),i[1].setComponents(c+o,f+u,m+p,S+v).normalize(),i[2].setComponents(c+a,f+h,m+_,S+b).normalize(),i[3].setComponents(c-a,f-h,m-_,S-b).normalize(),n)i[4].setComponents(l,d,g,x).normalize(),i[5].setComponents(c-l,f-d,m-g,S-x).normalize();else if(i[4].setComponents(c-l,f-d,m-g,S-x).normalize(),t===si)i[5].setComponents(c+l,f+d,m+g,S+x).normalize();else if(t===ta)i[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);let t=Iv.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fn=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zl=new P,Gl=new P,fm=new De,Ko=new pr,Rl=new bn,Rh=new P,pm=new P,zi=class extends lt{constructor(e=new mt,t=new fn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zl.fromBufferAttribute(t,i-1),Gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zl.distanceTo(Gl);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;fm.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(fm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=u.getX(_),v=u.getX(_+1),b=Cl(this,e,Ko,l,m,v,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(p-1),g=u.getX(f),m=Cl(this,e,Ko,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Cl(this,e,Ko,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Cl(this,e,Ko,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Cl(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(zl.fromBufferAttribute(a,i),Gl.fromBufferAttribute(a,s),t.distanceSqToSegment(zl,Gl,Rh,pm)>n)return;Rh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Rh);if(!(c<e.near||c>e.far))return{distance:c,point:pm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var mm=new P,gm=new P,Xn=class extends zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mm.fromBufferAttribute(t,i),gm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mm.distanceTo(gm);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},js=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_m=new De,Uh=new pr,Pl=new bn,Il=new P,ha=class extends lt{constructor(e=new mt,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(i),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;_m.copy(i).invert(),Uh.copy(e.ray).applyMatrix4(_m);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Il.fromBufferAttribute(h,g),xm(Il,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Il.fromBufferAttribute(h,p),xm(Il,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xm(r,e,t,n,i,s,o){let a=Uh.distanceSqToPoint(r);if(a<t){let l=new P;Uh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var da=class extends jt{constructor(e,t,n=gr,i,s,o,a=Zt,l=Zt,c,u=Fs,h=1){if(u!==Fs&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fa=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var pa=class r extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let v=m*d-o;for(let b=0;b<c;b++){let x=b*h-s;p.push(x,-v,0),_.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,x=v+c*(m+1),S=v+1+c*(m+1),T=v+1+c*m;f.push(b,x,T),f.push(x,S,T)}this.setIndex(f),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gr=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends Gr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wl=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ll(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Lv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dv(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vm(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function _g(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var Gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends Gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nr,endingEnd:Nr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Or:s=e,a=2*t-n;break;case $o:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Or:o=e,l=2*n-t;break;case $o:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let S=0;S!==a;++S)s[S]=m*o[u+S]+v*o[c+S]+b*o[l+S]+x*o[h+S];return s}},ma=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Yl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ll(t,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ll(e.times,Array),values:Ll(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Lv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Hr;var Wi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=kr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};ga.prototype.ValueTypeName="color";var qn=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};qn.prototype.ValueTypeName="number";var jl=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ee.slerpFlat(s,0,o,c-a,o,c,l);return s}},Yn=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}};Yn.prototype.ValueTypeName="quaternion";Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=kr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};vi.prototype.ValueTypeName="vector";var qi=class{constructor(e="",t=-1,n=[],i=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Nv(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=Dv(l);l=vm(l,1,u),c=vm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new qn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,_){if(f.length!==0){let g=[],m=[];_g(f,g,m,p),g.length!==0&&_.push(new h(d,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(let _ in f){let g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){let b=d[p];g.push(b.time),m.push(b.morphTarget===_?1:0)}i.push(new qn(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(vi,f+".position",d,"pos",i),n(Yn,f+".quaternion",d,"rot",i),n(vi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Uv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qn;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return ga;case"quaternion":return Yn;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Nv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Uv(r.type);if(r.times===void 0){let t=[],n=[];_g(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var gi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Kl=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xg=new Kl,bi=class{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},Nh=class extends Error{constructor(e,t){super(e),this.response=t}},Ks=class extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=gi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:i});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,g=new ReadableStream({start(m){v();function v(){h.read().then(({done:b,value:x})=>{if(b)m.close();else{_+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,w=u.length;T<w;T++){let R=u[T];R.onProgress&&R.onProgress(S)}m.enqueue(x),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new Nh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{gi.add(`file:${e}`,c);let u=Hi[e];delete Hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=new WeakMap,Js=class extends bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=gi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Us.get(o);h===void 0&&(h=[],Us.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Bs("img");function l(){u(),t&&t(this);let h=Us.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Us.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),gi.remove(`image:${e}`);let d=Us.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var _a=class extends bi{constructor(e){super(e)}load(e,t,n,i){let s=new jt,o=new Js(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Wr=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Ch=new De,bm=new P,ym=new P,xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(bm),ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ym),t.updateMatrixWorld(),Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oh=class extends xa{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},va=class extends Wr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Oh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mm=new De,Jo=new P,Ph=new P,Fh=class extends xa{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jo),Ph.copy(n.position),Ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ph),n.updateMatrixWorld(),i.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Mm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mm,n.coordinateSystem,n.reversedDepth)}},ba=class extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xr=class extends sa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bh=class extends xa{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ya=class extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ih=new WeakMap,Ma=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=gi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Ih.has(o)===!0)i&&i(Ih.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ih.set(l,c),gi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Jl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Zl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ee.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;Ee.multiplyQuaternionsFlat(e,o,e,t,e,n),Ee.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},ld="\\[\\]\\.:\\/",Ov=new RegExp("["+ld+"]","g"),cd="[^"+ld+"]",Fv="[^"+ld.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",cd),kv=/(WCOD+)?/.source.replace("WCOD",Fv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cd),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cd),zv=new RegExp("^"+Bv+kv+Hv+Vv+"$"),Gv=["material","materials","bones","map"],kh=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(e){let t=zv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Gv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=kh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ql=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Nr,endingEnd:Nr};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ig:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Xc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===ng;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===La){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Or,i.endingEnd=Or):(e?i.endingStart=this.zeroSlopeAtStart?Or:Nr:i.endingStart=$o,t?i.endingEnd=this.zeroSlopeAtEnd?Or:Nr:i.endingEnd=$o)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},Wv=new Float32Array(1),Ta=class extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;p=new Zl(St.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ma(new Float32Array(2),new Float32Array(2),1,Wv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?qi.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xc),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ql(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?qi.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Zs=class{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Sm=new De,Ea=class{constructor(e,t,n=0,i=1/0){this.ray=new pr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sm),this}intersectObject(e,t=!0,n=[]){return Hh(e,this,n,t),n.sort(Tm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hh(e[i],this,n,t);return n.sort(Tm),n}};function Tm(r,e){return r.distance-e.distance}function Hh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Hh(s[o],e,t,!0)}}var wa=class extends Xn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new mt;i.setAttribute("position",new hn(t,3)),i.setAttribute("color",new hn(n,3));let s=new fn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){let i=new Ce,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function ud(r,e,t,n){let i=Xv(n);switch(t){case Qh:return r*e;case dc:return r*e/i.components*i.byteLength;case fc:return r*e/i.components*i.byteLength;case ed:return r*e*2/i.components*i.byteLength;case pc:return r*e*2/i.components*i.byteLength;case $h:return r*e*3/i.components*i.byteLength;case Nn:return r*e*4/i.components*i.byteLength;case mc:return r*e*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(r,16)*Math.max(e,8)/4;case gc:case xc:return Math.max(r,8)*Math.max(e,8)/2;case bc:case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Bc:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hc:case Vc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zc:case Gc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xv(r){switch(r){case ui:case jh:return{byteLength:1,components:1};case $s:case Kh:case eo:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case gr:case cc:case jn:return{byteLength:4,components:1};case Jh:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qv(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ob=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_M=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Yv,alphahash_pars_fragment:jv,alphamap_fragment:Kv,alphamap_pars_fragment:Jv,alphatest_fragment:Zv,alphatest_pars_fragment:Qv,aomap_fragment:$v,aomap_pars_fragment:eb,batching_pars_vertex:tb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:rb,bsdfs:sb,iridescence_fragment:ob,bumpmap_pars_fragment:ab,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:hb,color_fragment:db,color_pars_fragment:fb,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:xb,displacementmap_pars_vertex:vb,displacementmap_vertex:bb,emissivemap_fragment:yb,emissivemap_pars_fragment:Mb,colorspace_fragment:Sb,colorspace_pars_fragment:Tb,envmap_fragment:Eb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Ab,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:kb,envmap_vertex:Cb,fog_vertex:Pb,fog_pars_vertex:Ib,fog_fragment:Lb,fog_pars_fragment:Db,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Nb,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Fb,lights_pars_begin:Bb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Vb,lights_phong_fragment:zb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Wb,lights_physical_pars_fragment:Xb,lights_fragment_begin:qb,lights_fragment_maps:Yb,lights_fragment_end:jb,logdepthbuf_fragment:Kb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Qb,map_fragment:$b,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:ry,morphinstance_vertex:sy,morphcolor_vertex:oy,morphnormal_vertex:ay,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:uy,normal_fragment_maps:hy,normal_pars_fragment:dy,normal_pars_vertex:fy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:xy,iridescence_pars_fragment:vy,opaque_fragment:by,packing:yy,premultiplied_alpha_fragment:My,project_vertex:Sy,dithering_fragment:Ty,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Cy,shadowmap_vertex:Py,shadowmask_pars_fragment:Iy,skinbase_vertex:Ly,skinning_pars_vertex:Dy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Oy,specularmap_pars_fragment:Fy,tonemapping_fragment:By,tonemapping_pars_fragment:ky,transmission_fragment:Hy,transmission_pars_fragment:Vy,uv_pars_fragment:zy,uv_pars_vertex:Gy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:qy,background_frag:Yy,backgroundCube_vert:jy,backgroundCube_frag:Ky,cube_vert:Jy,cube_frag:Zy,depth_vert:Qy,depth_frag:$y,distanceRGBA_vert:eM,distanceRGBA_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:oM,meshbasic_frag:aM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:xM,meshtoon_frag:vM,points_vert:bM,points_frag:yM,shadow_vert:MM,shadow_frag:SM,sprite_vert:TM,sprite_frag:EM},fe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Mi={basic:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:on([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:on([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:on([fe.points,fe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:on([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:on([fe.common,fe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:on([fe.sprite,fe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:on([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:on([fe.lights,fe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mi.physical={uniforms:on([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Yc={r:0,b:0,g:0},Zr=new Kt,wM=new De;function AM(r,e,t,n,i,s,o){let a=new Ce(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function p(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1,S=p(b);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(b,x){let S=p(x);S&&(S.isCubeTexture||S.mapping===Aa)?(u===void 0&&(u=new Vt(new zs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Jr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Zr.copy(x.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Zr)),u.material.toneMapped=it.getTransfer(S.colorSpace)!==bt,(h!==S||d!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Vt(new pa(2,2),new Un({name:"BackgroundMaterial",uniforms:Jr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(Yc,ad(r)),n.buffers.color.setClear(Yc.r,Yc.g,Yc.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:_,addToRenderList:g,dispose:v}}function RM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(y,C,N,B,O){let V=!1,L=h(B,N,C);s!==L&&(s=L,c(s.object)),V=f(y,B,N,O),V&&p(y,B,N,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(y,C,N,B),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,C,N){let B=N.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let V=O[C.id];V===void 0&&(V={},O[C.id]=V);let L=V[B];return L===void 0&&(L=d(l()),V[B]=L),L}function d(y){let C=[],N=[],B=[];for(let O=0;O<t;O++)C[O]=0,N[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,C,N,B){let O=s.attributes,V=C.attributes,L=0,j=N.getAttributes();for(let G in j)if(j[G].location>=0){let $=O[G],ue=V[G];if(ue===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),$===void 0||$.attribute!==ue||ue&&$.data!==ue.data)return!0;L++}return s.attributesNum!==L||s.index!==B}function p(y,C,N,B){let O={},V=C.attributes,L=0,j=N.getAttributes();for(let G in j)if(j[G].location>=0){let $=V[G];$===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&($=y.instanceColor));let ue={};ue.attribute=$,$&&$.data&&(ue.data=$.data),O[G]=ue,L++}s.attributes=O,s.attributesNum=L,s.index=B}function _(){let y=s.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function g(y){m(y,0)}function m(y,C){let N=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;N[y]=1,B[y]===0&&(r.enableVertexAttribArray(y),B[y]=1),O[y]!==C&&(r.vertexAttribDivisor(y,C),O[y]=C)}function v(){let y=s.newAttributes,C=s.enabledAttributes;for(let N=0,B=C.length;N<B;N++)C[N]!==y[N]&&(r.disableVertexAttribArray(N),C[N]=0)}function b(y,C,N,B,O,V,L){L===!0?r.vertexAttribIPointer(y,C,N,O,V):r.vertexAttribPointer(y,C,N,B,O,V)}function x(y,C,N,B){_();let O=B.attributes,V=N.getAttributes(),L=C.defaultAttributeValues;for(let j in V){let G=V[j];if(G.location>=0){let se=O[j];if(se===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){let $=se.normalized,ue=se.itemSize,Re=e.get(se);if(Re===void 0)continue;let Ne=Re.buffer,Fe=Re.type,Ye=Re.bytesPerElement,X=Fe===r.INT||Fe===r.UNSIGNED_INT||se.gpuType===cc;if(se.isInterleavedBufferAttribute){let ee=se.data,he=ee.stride,we=se.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve,ee.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<G.locationSize;ve++)g(G.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ve=0;ve<G.locationSize;ve++)b(G.location+ve,ue/G.locationSize,Fe,$,he*Ye,(we+ue/G.locationSize*ve)*Ye,X)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee,se.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<G.locationSize;ee++)g(G.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ee=0;ee<G.locationSize;ee++)b(G.location+ee,ue/G.locationSize,Fe,$,ue*Ye,ue/G.locationSize*ee*Ye,X)}}else if(L!==void 0){let $=L[j];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(G.location,$);break;case 3:r.vertexAttrib3fv(G.location,$);break;case 4:r.vertexAttrib4fv(G.location,$);break;default:r.vertexAttrib1fv(G.location,$)}}}}v()}function S(){R();for(let y in n){let C=n[y];for(let N in C){let B=C[N];for(let O in B)u(B[O].object),delete B[O];delete C[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let N in C){let B=C[N];for(let O in B)u(B[O].object),delete B[O];delete C[N]}delete n[y.id]}function w(y){for(let C in n){let N=n[C];if(N[y.id]===void 0)continue;let B=N[y.id];for(let O in B)u(B[O].object),delete B[O];delete N[y.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function CM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Nn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ui&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==jn&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:S,maxSamples:T}}function IM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new pi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{let v=s?0:n,b=v*4,x=m.clippingState||null;l.value=x,x=u(p,d,b,f);for(let S=0;S!==b;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function LM(r){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=Yr:a===ac&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var so=4,vg=[.125,.215,.35,.446,.526,.582],es=20,hd=new Xr,bg=new Ce,dd=null,fd=0,pd=0,md=!1,$r=(1+Math.sqrt(5))/2,ro=1/$r,yg=[new P(-$r,ro,0),new P($r,ro,0),new P(-ro,0,$r),new P(ro,0,$r),new P(0,$r,-ro),new P(0,$r,ro),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],DM=new P,Jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=DM}=s;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:eo,format:Nn,colorSpace:Qt,depthBuffer:!1},i=Mg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(s)),this._blurMaterial=NM(s,e,t)}return i}_compileMaterial(e){let t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,hd)}_sceneToCubeUV(e,t,n,i,s){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(bg),h.toneMapping=Ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let _=new yn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new Vt(new zs,_),m=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,m=!0):(_.color.copy(bg),m=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let S=this._cubeSize;jc(i,x*S,b>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Yr||e.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;jc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yg[(i-s-1)%yg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):es;g>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let m=[],v=0;for(let w=0;w<es;++w){let R=w/_,M=Math.exp(-R*R/2);m.push(M),w===0?v+=M:w<g&&(v+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-n;let x=this._sizeLods[i],S=3*x*(i>b-so?i-b+so:0),T=4*(this._cubeSize-x);jc(t,S,T,3*x,2*x),l.setRenderTarget(t),l.render(h,hd)}};function UM(r){let e=[],t=[],n=[],i=r,s=r-so+1+vg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-so?l=vg[o-r+so-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),b=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,R=T>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];v.set(M,_*p*T),b.set(d,g*p*T);let y=[T,T,T,T,T,T];x.set(y,m*p*T)}let S=new mt;S.setAttribute("position",new Ke(v,_)),S.setAttribute("uv",new Ke(b,g)),S.setAttribute("faceIndex",new Ke(x,m)),e.push(S),i>so&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mg(r,e,t){let n=new xi(r,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function NM(r,e,t){let n=new Float32Array(es),i=new P(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Sg(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Tg(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oc||l===ac,u=l===Yr||l===jr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Jc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function FM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function BM(r,e,t,n){let i={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let b=0,x=v.length;b<x;b+=3){let S=v[b+0],T=v[b+1],w=v[b+2];d.push(S,T,T,w,w,S)}}else if(p!==void 0){let v=p.array;_=p.version;for(let b=0,x=v.length/3-1;b<x;b+=3){let S=b+0,T=b+1,w=b+2;d.push(S,T,T,w,w,S)}}else return;let g=new(od(d)?ra:ia)(d,1);g.version=_;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function kM(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,_){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function HM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VM(r,e,t){let n=new WeakMap,i=new pt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*S*4*h),w=new na(T,x,S,h);w.type=jn,w.needsUpdate=!0;let R=b*4;for(let y=0;y<h;y++){let C=g[y],N=m[y],B=v[y],O=x*S*4*y;for(let V=0;V<C.count;V++){let L=V*R;f===!0&&(i.fromBufferAttribute(C,V),T[O+L+0]=i.x,T[O+L+1]=i.y,T[O+L+2]=i.z,T[O+L+3]=0),p===!0&&(i.fromBufferAttribute(N,V),T[O+L+4]=i.x,T[O+L+5]=i.y,T[O+L+6]=i.z,T[O+L+7]=0),_===!0&&(i.fromBufferAttribute(B,V),T[O+L+8]=i.x,T[O+L+9]=i.y,T[O+L+10]=i.z,T[O+L+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new je(x,S)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function zM(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Gg=new jt,Eg=new da(1,1),Wg=new na,Xg=new kl,qg=new oa,wg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),Pg=new Float32Array(4);function lo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=wg[i];if(s===void 0&&(s=new Float32Array(i),wg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qc(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function GM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function XM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function YM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),Xt(t,n)}}function jM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Cg.set(n),r.uniformMatrix3fv(this.addr,!1,Cg),Xt(t,n)}}function KM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Rg.set(n),r.uniformMatrix4fv(this.addr,!1,Rg),Xt(t,n)}}function JM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function QM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function $M(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function eS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function nS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function iS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function rS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eg.compareFunction=nd,s=Eg):s=Gg,t.setTexture2D(e||s,i)}function sS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xg,i)}function oS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qg,i)}function aS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wg,i)}function lS(r){switch(r){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return jM;case 35676:return KM;case 5124:case 35670:return JM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return $M;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(r,e){r.uniform1fv(this.addr,e)}function uS(r,e){let t=lo(e,this.size,2);r.uniform2fv(this.addr,t)}function hS(r,e){let t=lo(e,this.size,3);r.uniform3fv(this.addr,t)}function dS(r,e){let t=lo(e,this.size,4);r.uniform4fv(this.addr,t)}function fS(r,e){let t=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pS(r,e){let t=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mS(r,e){let t=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gS(r,e){r.uniform1iv(this.addr,e)}function _S(r,e){r.uniform2iv(this.addr,e)}function xS(r,e){r.uniform3iv(this.addr,e)}function vS(r,e){r.uniform4iv(this.addr,e)}function bS(r,e){r.uniform1uiv(this.addr,e)}function yS(r,e){r.uniform2uiv(this.addr,e)}function MS(r,e){r.uniform3uiv(this.addr,e)}function SS(r,e){r.uniform4uiv(this.addr,e)}function TS(r,e,t){let n=this.cache,i=e.length,s=Qc(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gg,s[o])}function ES(r,e,t){let n=this.cache,i=e.length,s=Qc(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xg,s[o])}function wS(r,e,t){let n=this.cache,i=e.length,s=Qc(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qg,s[o])}function AS(r,e,t){let n=this.cache,i=e.length,s=Qc(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wg,s[o])}function RS(r){switch(r){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return dS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return bS;case 36294:return yS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return AS}}var _d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}},xd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}},vd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},gd=/(\w+)(\])?(\[|\.)?/g;function Ig(r,e){r.seq.push(e),r.map[e.id]=e}function CS(r,e,t){let n=r.name,i=n.length;for(gd.lastIndex=0;;){let s=gd.exec(n),o=gd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ig(t,c===void 0?new _d(a,r,e):new xd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new vd(a),Ig(t,h)),t=h}}}var oo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);CS(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var PS=37297,IS=0;function LS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Dg=new Oe;function DS(r){it._getMatrix(Dg,it.workingColorSpace,r);let e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case ea:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ug(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+LS(r.getShaderSource(e),a)}else return s}function US(r,e){let t=DS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NS(r,e){let t;switch(e){case jm:t="Linear";break;case Km:t="Reinhard";break;case Jm:t="Cineon";break;case Zm:t="ACESFilmic";break;case $m:t="AgX";break;case eg:t="Neutral";break;case Qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new P;function OS(){it.getLuminanceCoefficients(Kc);let r=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function BS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Na(r){return r!==""}function Ng(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(r){return r.replace(HS,zS)}var VS=new Map;function zS(r,e){let t=Ze[e];if(t===void 0){let n=VS.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bd(t)}var GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(r){return r.replace(GS,WS)}function WS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function qS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YS(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===jr&&(e="ENVMAP_MODE_REFRACTION"),e}function jS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case qm:e="ENVMAP_BLENDING_MIX";break;case Ym:e="ENVMAP_BLENDING_ADD";break}return e}function KS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function JS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=XS(t),c=qS(t),u=YS(t),h=jS(t),d=KS(t),f=FS(t),p=BS(s),_=i.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Na).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Na).join(`
`),m.length>0&&(m+=`
`)):(g=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),m=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ki?NS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),OS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=bd(o),o=Ng(o,t),o=Og(o,t),a=bd(a),a=Ng(a,t),a=Og(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+g+o,x=v+m+a,S=Lg(i,i.VERTEX_SHADER,b),T=Lg(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(S)||"",O=i.getShaderInfoLog(T)||"",V=N.trim(),L=B.trim(),j=O.trim(),G=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{let $=Ug(i,S,"vertex"),ue=Ug(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+$+`
`+ue)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||j==="")&&(se=!1);se&&(C.diagnostics={runnable:G,programLog:V,vertexShader:{log:L,prefix:g},fragmentShader:{log:j,prefix:m}})}i.deleteShader(S),i.deleteShader(T),R=new oo(i,_),M=kS(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,PS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var ZS=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Md(e),t.set(e,n)),n}},Md=class{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}};function QS(r,e,t,n,i,s,o){let a=new Vs,l=new yd,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,C,N,B){let O=N.fog,V=B.geometry,L=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||L),G=j&&j.mapping===Aa?j.image.height:null,se=p[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=$!==void 0?$.length:0,Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let Ne,Fe,Ye,X;if(se){let k=Mi[se];Ne=k.vertexShader,Fe=k.fragmentShader}else Ne=M.vertexShader,Fe=M.fragmentShader,l.update(M),Ye=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);let ee=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Ve=!!M.map,dt=!!M.matcap,D=!!j,tt=!!M.aoMap,Ue=!!M.lightMap,Le=!!M.bumpMap,me=!!M.normalMap,ot=!!M.displacementMap,ye=!!M.emissiveMap,ze=!!M.metalnessMap,yt=!!M.roughnessMap,ut=M.anisotropy>0,I=M.clearcoat>0,E=M.dispersion>0,z=M.iridescence>0,J=M.sheen>0,ie=M.transmission>0,Y=ut&&!!M.anisotropyMap,Se=I&&!!M.clearcoatMap,re=I&&!!M.clearcoatNormalMap,be=I&&!!M.clearcoatRoughnessMap,ge=z&&!!M.iridescenceMap,ae=z&&!!M.iridescenceThicknessMap,pe=J&&!!M.sheenColorMap,Pe=J&&!!M.sheenRoughnessMap,Me=!!M.specularMap,oe=!!M.specularColorMap,_e=!!M.specularIntensityMap,U=ie&&!!M.transmissionMap,te=ie&&!!M.thicknessMap,Q=!!M.gradientMap,le=!!M.alphaMap,Z=M.alphaTest>0,K=!!M.alphaHash,de=!!M.extensions,Ae=Ki;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=r.toneMapping);let ke={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:Fe,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qt,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:dt,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:Ue,bumpMap:Le,normalMap:me,displacementMap:d&&ot,emissiveMap:ye,normalMapObjectSpace:me&&M.normalMapType===og,normalMapTangentSpace:me&&M.normalMapType===Ua,metalnessMap:ze,roughnessMap:yt,anisotropy:ut,anisotropyMap:Y,clearcoat:I,clearcoatMap:Se,clearcoatNormalMap:re,clearcoatRoughnessMap:be,dispersion:E,iridescence:z,iridescenceMap:ge,iridescenceThicknessMap:ae,sheen:J,sheenColorMap:pe,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:oe,specularIntensityMap:_e,transmission:ie,transmissionMap:U,thicknessMap:te,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Fr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Z,alphaHash:K,combine:M.combine,mapUv:Ve&&_(M.map.channel),aoMapUv:tt&&_(M.aoMap.channel),lightMapUv:Ue&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:me&&_(M.normalMap.channel),displacementMapUv:ot&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:ze&&_(M.metalnessMap.channel),roughnessMapUv:yt&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:oe&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:le&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||ut),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ve||le),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:de&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function m(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(v(y,M),b(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let y=p[M.type],C;if(y){let N=Mi[y];C=qc.clone(N.uniforms)}else C=M.uniforms;return C}function S(M,y){let C;for(let N=0,B=u.length;N<B;N++){let O=u[N];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new JS(r,y,M,s),u.push(C)),C}function T(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:R}}function $S(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function eT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,p,_,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),e++,m}function a(h,d,f,p,_,g){let m=o(h,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,p,_,g){let m=o(h,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||eT),n.length>1&&n.sort(d||kg),i.length>1&&i.sort(d||kg)}function u(){for(let h=e,d=r.length;h<d;h++){let f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function tT(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Hg,r.set(n,[o])):i>=s.length?(o=new Hg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function nT(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function iT(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var rT=0;function sT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oT(r){let e=new nT,t=iT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,s=new De,o=new De;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,b=0,x=0,S=0,T=0,w=0;c.sort(sT);for(let M=0,y=c.length;M<y;M++){let C=c[M],N=C.color,B=C.intensity,O=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],B);w++}else if(C.isDirectionalLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=L,f++}else if(C.isSpotLight){let L=e.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(N).multiplyScalar(B),L.distance=O,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[_]=L;let j=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,j.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,x++}_++}else if(C.isRectAreaLight){let L=e.get(C);L.color.copy(N).multiplyScalar(B),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=L,g++}else if(C.isPointLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=L,p++}else if(C.isHemisphereLight){let L=e.get(C);L.skyColor.copy(C.color).multiplyScalar(B),L.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[m]=L,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==v||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==S||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=f,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=v,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=S,R.numLightProbes=w,n.version=rT++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(b.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Vg(r){let e=new oT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aT(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Vg(r),e.set(i,[a])):s>=o.length?(a=new Vg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var lT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uT(r,e,t){let n=new Ys,i=new je,s=new je,o=new pt,a=new Wl({depthPacking:sg}),l=new Xl,c={},u=t.maxTextureSize,h={[ai]:$t,[$t]:ai,[pn]:pn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:lT,fragmentShader:cT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new mt;p.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Vt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let m=this.type;this.render=function(T,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ji),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=m!==yi&&this.type===yi,O=m===yi&&this.type!==yi;for(let V=0,L=T.length;V<L;V++){let j=T[V],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let se=G.getFrameExtents();if(i.multiply(se),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||B===!0||O===!0){let ue=this.type!==yi?{minFilter:Zt,magFilter:Zt}:{};G.map!==null&&G.map.dispose(),G.map=new xi(i.x,i.y,ue),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let $=G.getViewportCount();for(let ue=0;ue<$;ue++){let Re=G.getViewport(ue);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),N.viewport(o),G.updateMatrices(j,ue),n=G.getFrustum(),x(w,R,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===yi&&v(G,R),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,y,C)};function v(T,w){let R=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,R,f,_,null)}function b(T,w,R,M){let y=null,C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=y.uuid,B=w.uuid,O=c[N];O===void 0&&(O={},c[N]=O);let V=O[B];V===void 0&&(V=y.clone(),O[B]=V,w.addEventListener("dispose",S)),y=V}if(y.visible=w.visible,y.wireframe=w.wireframe,M===yi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=r.properties.get(y);N.light=R}return y}function x(T,w,R,M,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let B=e.update(T),O=T.material;if(Array.isArray(O)){let V=B.groups;for(let L=0,j=V.length;L<j;L++){let G=V[L],se=O[G.materialIndex];if(se&&se.visible){let $=b(T,se,M,y);T.onBeforeShadow(r,T,w,R,B,$,G),r.renderBufferDirect(R,null,B,$,T,G),T.onAfterShadow(r,T,w,R,B,$,G)}}}else if(O.visible){let V=b(T,O,M,y);T.onBeforeShadow(r,T,w,R,B,V,null),r.renderBufferDirect(R,null,B,V,T,null),T.onAfterShadow(r,T,w,R,B,V,null)}}let N=T.children;for(let B=0,O=N.length;B<O;B++)x(N[B],w,R,M,y)}function S(T){T.target.removeEventListener("dispose",S);for(let R in c){let M=c[R],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var hT={[$l]:ec,[tc]:rc,[nc]:sc,[Br]:ic,[ec]:$l,[rc]:tc,[sc]:nc,[ic]:Br};function dT(r,e){function t(){let U=!1,te=new pt,Q=null,le=new pt(0,0,0,0);return{setMask:function(Z){Q!==Z&&!U&&(r.colorMask(Z,Z,Z,Z),Q=Z)},setLocked:function(Z){U=Z},setClear:function(Z,K,de,Ae,ke){ke===!0&&(Z*=Ae,K*=Ae,de*=Ae),te.set(Z,K,de,Ae),le.equals(te)===!1&&(r.clearColor(Z,K,de,Ae),le.copy(te))},reset:function(){U=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let U=!1,te=!1,Q=null,le=null,Z=null;return{setReversed:function(K){if(te!==K){let de=e.get("EXT_clip_control");K?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),te=K;let Ae=Z;Z=null,this.setClear(Ae)}},getReversed:function(){return te},setTest:function(K){K?ee(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(K){Q!==K&&!U&&(r.depthMask(K),Q=K)},setFunc:function(K){if(te&&(K=hT[K]),le!==K){switch(K){case $l:r.depthFunc(r.NEVER);break;case ec:r.depthFunc(r.ALWAYS);break;case tc:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case nc:r.depthFunc(r.EQUAL);break;case ic:r.depthFunc(r.GEQUAL);break;case rc:r.depthFunc(r.GREATER);break;case sc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=K}},setLocked:function(K){U=K},setClear:function(K){Z!==K&&(te&&(K=1-K),r.clearDepth(K),Z=K)},reset:function(){U=!1,Q=null,le=null,Z=null,te=!1}}}function i(){let U=!1,te=null,Q=null,le=null,Z=null,K=null,de=null,Ae=null,ke=null;return{setTest:function(k){U||(k?ee(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(k){te!==k&&!U&&(r.stencilMask(k),te=k)},setFunc:function(k,ne,Je){(Q!==k||le!==ne||Z!==Je)&&(r.stencilFunc(k,ne,Je),Q=k,le=ne,Z=Je)},setOp:function(k,ne,Je){(K!==k||de!==ne||Ae!==Je)&&(r.stencilOp(k,ne,Je),K=k,de=ne,Ae=Je)},setLocked:function(k){U=k},setClear:function(k){ke!==k&&(r.clearStencil(k),ke=k)},reset:function(){U=!1,te=null,Q=null,le=null,Z=null,K=null,de=null,Ae=null,ke=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,b=null,x=null,S=null,T=null,w=new Ce(0,0,0),R=0,M=!1,y=null,C=null,N=null,B=null,O=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,j=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=j>=2);let se=null,$={},ue=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Ne=new pt().fromArray(ue),Fe=new pt().fromArray(Re);function Ye(U,te,Q,le){let Z=new Uint8Array(4),K=r.createTexture();r.bindTexture(U,K),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<Q;de++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,le,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(te+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return K}let X={};X[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(Br),Le(!1),me(Vh),ee(r.CULL_FACE),tt(ji);function ee(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function he(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function we(U,te){return h[U]!==te?(r.bindFramebuffer(U,te),h[U]=te,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=te),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=te),!0):!1}function ve(U,te){let Q=f,le=!1;if(U){Q=d.get(te),Q===void 0&&(Q=[],d.set(te,Q));let Z=U.textures;if(Q.length!==Z.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let K=0,de=Z.length;K<de;K++)Q[K]=r.COLOR_ATTACHMENT0+K;Q.length=Z.length,le=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,le=!0);le&&r.drawBuffers(Q)}function Ve(U){return p!==U?(r.useProgram(U),p=U,!0):!1}let dt={[dr]:r.FUNC_ADD,[Cm]:r.FUNC_SUBTRACT,[Pm]:r.FUNC_REVERSE_SUBTRACT};dt[Im]=r.MIN,dt[Lm]=r.MAX;let D={[Dm]:r.ZERO,[Um]:r.ONE,[Nm]:r.SRC_COLOR,[Ul]:r.SRC_ALPHA,[Vm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Fm]:r.DST_ALPHA,[Om]:r.ONE_MINUS_SRC_COLOR,[Nl]:r.ONE_MINUS_SRC_ALPHA,[Hm]:r.ONE_MINUS_DST_COLOR,[Bm]:r.ONE_MINUS_DST_ALPHA,[zm]:r.CONSTANT_COLOR,[Gm]:r.ONE_MINUS_CONSTANT_COLOR,[Wm]:r.CONSTANT_ALPHA,[Xm]:r.ONE_MINUS_CONSTANT_ALPHA};function tt(U,te,Q,le,Z,K,de,Ae,ke,k){if(U===ji){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(ee(r.BLEND),_=!0),U!==Rm){if(U!==g||k!==M){if((m!==dr||x!==dr)&&(r.blendEquation(r.FUNC_ADD),m=dr,x=dr),k)switch(U){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFunc(r.ONE,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,b=null,S=null,T=null,w.set(0,0,0),R=0,g=U,M=k}return}Z=Z||te,K=K||Q,de=de||le,(te!==m||Z!==x)&&(r.blendEquationSeparate(dt[te],dt[Z]),m=te,x=Z),(Q!==v||le!==b||K!==S||de!==T)&&(r.blendFuncSeparate(D[Q],D[le],D[K],D[de]),v=Q,b=le,S=K,T=de),(Ae.equals(w)===!1||ke!==R)&&(r.blendColor(Ae.r,Ae.g,Ae.b,ke),w.copy(Ae),R=ke),g=U,M=!1}function Ue(U,te){U.side===pn?he(r.CULL_FACE):ee(r.CULL_FACE);let Q=U.side===$t;te&&(Q=!Q),Le(Q),U.blending===Fr&&U.transparent===!1?tt(ji):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let le=U.stencilWrite;a.setTest(le),le&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function me(U){U!==Em?(ee(r.CULL_FACE),U!==C&&(U===Vh?r.cullFace(r.BACK):U===wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),C=U}function ot(U){U!==N&&(L&&r.lineWidth(U),N=U)}function ye(U,te,Q){U?(ee(r.POLYGON_OFFSET_FILL),(B!==te||O!==Q)&&(r.polygonOffset(te,Q),B=te,O=Q)):he(r.POLYGON_OFFSET_FILL)}function ze(U){U?ee(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function yt(U){U===void 0&&(U=r.TEXTURE0+V-1),se!==U&&(r.activeTexture(U),se=U)}function ut(U,te,Q){Q===void 0&&(se===null?Q=r.TEXTURE0+V-1:Q=se);let le=$[Q];le===void 0&&(le={type:void 0,texture:void 0},$[Q]=le),(le.type!==U||le.texture!==te)&&(se!==Q&&(r.activeTexture(Q),se=Q),r.bindTexture(U,te||X[U]),le.type=U,le.texture=te)}function I(){let U=$[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(U){Ne.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function Pe(U){Fe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function Me(U,te){let Q=c.get(te);Q===void 0&&(Q=new WeakMap,c.set(te,Q));let le=Q.get(U);le===void 0&&(le=r.getUniformBlockIndex(te,U.name),Q.set(U,le))}function oe(U,te){let le=c.get(te).get(U);l.get(te)!==le&&(r.uniformBlockBinding(te,le,U.__bindingPointIndex),l.set(te,le))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,$={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,b=null,x=null,S=null,T=null,w=new Ce(0,0,0),R=0,M=!1,y=null,C=null,N=null,B=null,O=null,Ne.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:he,bindFramebuffer:we,drawBuffers:ve,useProgram:Ve,setBlending:tt,setMaterial:Ue,setFlipSided:Le,setCullFace:me,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:ze,activeTexture:yt,bindTexture:ut,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:ge,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:re,texStorage3D:be,texSubImage2D:J,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Se,scissor:pe,viewport:Pe,reset:_e}}function fT(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):Bs("canvas")}function _(I,E,z){let J=1,ie=ut(I);if((ie.width>z||ie.height>z)&&(J=z/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Y=Math.floor(J*ie.width),Se=Math.floor(J*ie.height);h===void 0&&(h=p(Y,Se));let re=E?p(Y,Se):h;return re.width=Y,re.height=Se,re.getContext("2d").drawImage(I,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Se+")."),re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(I,E,z,J,ie=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=E;if(E===r.RED&&(z===r.FLOAT&&(Y=r.R32F),z===r.HALF_FLOAT&&(Y=r.R16F),z===r.UNSIGNED_BYTE&&(Y=r.R8)),E===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.R8UI),z===r.UNSIGNED_SHORT&&(Y=r.R16UI),z===r.UNSIGNED_INT&&(Y=r.R32UI),z===r.BYTE&&(Y=r.R8I),z===r.SHORT&&(Y=r.R16I),z===r.INT&&(Y=r.R32I)),E===r.RG&&(z===r.FLOAT&&(Y=r.RG32F),z===r.HALF_FLOAT&&(Y=r.RG16F),z===r.UNSIGNED_BYTE&&(Y=r.RG8)),E===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RG8UI),z===r.UNSIGNED_SHORT&&(Y=r.RG16UI),z===r.UNSIGNED_INT&&(Y=r.RG32UI),z===r.BYTE&&(Y=r.RG8I),z===r.SHORT&&(Y=r.RG16I),z===r.INT&&(Y=r.RG32I)),E===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),z===r.UNSIGNED_INT&&(Y=r.RGB32UI),z===r.BYTE&&(Y=r.RGB8I),z===r.SHORT&&(Y=r.RGB16I),z===r.INT&&(Y=r.RGB32I)),E===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),z===r.UNSIGNED_INT&&(Y=r.RGBA32UI),z===r.BYTE&&(Y=r.RGBA8I),z===r.SHORT&&(Y=r.RGBA16I),z===r.INT&&(Y=r.RGBA32I)),E===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),E===r.RGBA){let Se=ie?ea:it.getTransfer(J);z===r.FLOAT&&(Y=r.RGBA32F),z===r.HALF_FLOAT&&(Y=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Y=Se===bt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(I,E){let z;return I?E===null||E===gr||E===to?z=r.DEPTH24_STENCIL8:E===jn?z=r.DEPTH32F_STENCIL8:E===$s&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gr||E===to?z=r.DEPTH_COMPONENT24:E===jn?z=r.DEPTH_COMPONENT32F:E===$s&&(z=r.DEPTH_COMPONENT16),z}function S(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){let E=I.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E)}function w(I){let E=I.target;E.removeEventListener("dispose",w),y(E)}function R(I){let E=n.get(I);if(E.__webglInit===void 0)return;let z=I.source,J=d.get(z);if(J){let ie=J[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(I),Object.keys(J).length===0&&d.delete(z)}n.remove(I)}function M(I){let E=n.get(I);r.deleteTexture(E.__webglTexture);let z=I.source,J=d.get(z);delete J[E.__cacheKey],o.memory.textures--}function y(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ie=0;ie<E.__webglFramebuffer[J].length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[J][ie]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let z=I.textures;for(let J=0,ie=z.length;J<ie;J++){let Y=n.get(z[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(I)}let C=0;function N(){C=0}function B(){let I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function O(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function V(I,E){let z=n.get(I);if(I.isVideoTexture&&ze(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,I,E);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+E)}function L(I,E){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){X(z,I,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+E)}function j(I,E){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){X(z,I,E);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+E)}function G(I,E){let z=n.get(I);if(I.version>0&&z.__version!==I.version){ee(z,I,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+E)}let se={[fr]:r.REPEAT,[mi]:r.CLAMP_TO_EDGE,[Os]:r.MIRRORED_REPEAT},$={[Zt]:r.NEAREST,[lc]:r.NEAREST_MIPMAP_NEAREST,[Kr]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[Qs]:r.LINEAR_MIPMAP_NEAREST,[ci]:r.LINEAR_MIPMAP_LINEAR},ue={[ag]:r.NEVER,[fg]:r.ALWAYS,[lg]:r.LESS,[nd]:r.LEQUAL,[cg]:r.EQUAL,[dg]:r.GEQUAL,[ug]:r.GREATER,[hg]:r.NOTEQUAL};function Re(I,E){if(E.type===jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===Qs||E.magFilter===Kr||E.magFilter===ci||E.minFilter===dn||E.minFilter===Qs||E.minFilter===Kr||E.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,se[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,se[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,se[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,$[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==Kr&&E.minFilter!==ci||E.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(I,E){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));let Y=O(E);if(Y!==I.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[Y].usedTimes++;let Se=ie[I.__cacheKey];Se!==void 0&&(ie[I.__cacheKey].usedTimes--,Se.usedTimes===0&&M(E)),I.__cacheKey=Y,I.__webglTexture=ie[Y].texture}return z}function Fe(I,E,z){return Math.floor(Math.floor(I/z)/E)}function Ye(I,E,z,J){let Y=I.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,z,J,E.data);else{Y.sort((ae,pe)=>ae.start-pe.start);let Se=0;for(let ae=1;ae<Y.length;ae++){let pe=Y[Se],Pe=Y[ae],Me=pe.start+pe.count,oe=Fe(Pe.start,E.width,4),_e=Fe(pe.start,E.width,4);Pe.start<=Me+1&&oe===_e&&Fe(Pe.start+Pe.count-1,E.width,4)===oe?pe.count=Math.max(pe.count,Pe.start+Pe.count-pe.start):(++Se,Y[Se]=Pe)}Y.length=Se+1;let re=r.getParameter(r.UNPACK_ROW_LENGTH),be=r.getParameter(r.UNPACK_SKIP_PIXELS),ge=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ae=0,pe=Y.length;ae<pe;ae++){let Pe=Y[ae],Me=Math.floor(Pe.start/4),oe=Math.ceil(Pe.count/4),_e=Me%E.width,U=Math.floor(Me/E.width),te=oe,Q=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,_e,U,te,Q,z,J,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,be),r.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function X(I,E,z){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);let ie=Ne(I,E),Y=E.source;t.bindTexture(J,I.__webglTexture,r.TEXTURE0+z);let Se=n.get(Y);if(Y.version!==Se.__version||ie===!0){t.activeTexture(r.TEXTURE0+z);let re=it.getPrimaries(it.workingColorSpace),be=E.colorSpace===Ji?null:it.getPrimaries(E.colorSpace),ge=E.colorSpace===Ji||re===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ae=_(E.image,!1,i.maxTextureSize);ae=yt(E,ae);let pe=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),Me=b(E.internalFormat,pe,Pe,E.colorSpace,E.isVideoTexture);Re(J,E);let oe,_e=E.mipmaps,U=E.isVideoTexture!==!0,te=Se.__version===void 0||ie===!0,Q=Y.dataReady,le=S(E,ae);if(E.isDepthTexture)Me=x(E.format===no,E.type),te&&(U?t.texStorage2D(r.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Me,ae.width,ae.height,0,pe,Pe,null));else if(E.isDataTexture)if(_e.length>0){U&&te&&t.texStorage2D(r.TEXTURE_2D,le,Me,_e[0].width,_e[0].height);for(let Z=0,K=_e.length;Z<K;Z++)oe=_e[Z],U?Q&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,pe,Pe,oe.data):t.texImage2D(r.TEXTURE_2D,Z,Me,oe.width,oe.height,0,pe,Pe,oe.data);E.generateMipmaps=!1}else U?(te&&t.texStorage2D(r.TEXTURE_2D,le,Me,ae.width,ae.height),Q&&Ye(E,ae,pe,Pe)):t.texImage2D(r.TEXTURE_2D,0,Me,ae.width,ae.height,0,pe,Pe,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Me,_e[0].width,_e[0].height,ae.depth);for(let Z=0,K=_e.length;Z<K;Z++)if(oe=_e[Z],E.format!==Nn)if(pe!==null)if(U){if(Q)if(E.layerUpdates.size>0){let de=ud(oe.width,oe.height,E.format,E.type);for(let Ae of E.layerUpdates){let ke=oe.data.subarray(Ae*de/oe.data.BYTES_PER_ELEMENT,(Ae+1)*de/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Ae,oe.width,oe.height,1,pe,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,ae.depth,pe,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Me,oe.width,oe.height,ae.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,ae.depth,pe,Pe,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Me,oe.width,oe.height,ae.depth,0,pe,Pe,oe.data)}else{U&&te&&t.texStorage2D(r.TEXTURE_2D,le,Me,_e[0].width,_e[0].height);for(let Z=0,K=_e.length;Z<K;Z++)oe=_e[Z],E.format!==Nn?pe!==null?U?Q&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Q&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,pe,Pe,oe.data):t.texImage2D(r.TEXTURE_2D,Z,Me,oe.width,oe.height,0,pe,Pe,oe.data)}else if(E.isDataArrayTexture)if(U){if(te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Me,ae.width,ae.height,ae.depth),Q)if(E.layerUpdates.size>0){let Z=ud(ae.width,ae.height,E.format,E.type);for(let K of E.layerUpdates){let de=ae.data.subarray(K*Z/ae.data.BYTES_PER_ELEMENT,(K+1)*Z/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ae.width,ae.height,1,pe,Pe,de)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,Pe,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,pe,Pe,ae.data);else if(E.isData3DTexture)U?(te&&t.texStorage3D(r.TEXTURE_3D,le,Me,ae.width,ae.height,ae.depth),Q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,Pe,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,pe,Pe,ae.data);else if(E.isFramebufferTexture){if(te)if(U)t.texStorage2D(r.TEXTURE_2D,le,Me,ae.width,ae.height);else{let Z=ae.width,K=ae.height;for(let de=0;de<le;de++)t.texImage2D(r.TEXTURE_2D,de,Me,Z,K,0,pe,Pe,null),Z>>=1,K>>=1}}else if(_e.length>0){if(U&&te){let Z=ut(_e[0]);t.texStorage2D(r.TEXTURE_2D,le,Me,Z.width,Z.height)}for(let Z=0,K=_e.length;Z<K;Z++)oe=_e[Z],U?Q&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,pe,Pe,oe):t.texImage2D(r.TEXTURE_2D,Z,Me,pe,Pe,oe);E.generateMipmaps=!1}else if(U){if(te){let Z=ut(ae);t.texStorage2D(r.TEXTURE_2D,le,Me,Z.width,Z.height)}Q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Pe,ae)}else t.texImage2D(r.TEXTURE_2D,0,Me,pe,Pe,ae);g(E)&&m(J),Se.__version=Y.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ee(I,E,z){if(E.image.length!==6)return;let J=Ne(I,E),ie=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+z);let Y=n.get(ie);if(ie.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+z);let Se=it.getPrimaries(it.workingColorSpace),re=E.colorSpace===Ji?null:it.getPrimaries(E.colorSpace),be=E.colorSpace===Ji||Se===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!ge&&!ae?pe[K]=_(E.image[K],!0,i.maxCubemapSize):pe[K]=ae?E.image[K].image:E.image[K],pe[K]=yt(E,pe[K]);let Pe=pe[0],Me=s.convert(E.format,E.colorSpace),oe=s.convert(E.type),_e=b(E.internalFormat,Me,oe,E.colorSpace),U=E.isVideoTexture!==!0,te=Y.__version===void 0||J===!0,Q=ie.dataReady,le=S(E,Pe);Re(r.TEXTURE_CUBE_MAP,E);let Z;if(ge){U&&te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,_e,Pe.width,Pe.height);for(let K=0;K<6;K++){Z=pe[K].mipmaps;for(let de=0;de<Z.length;de++){let Ae=Z[de];E.format!==Nn?Me!==null?U?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,Ae.width,Ae.height,Me,oe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,_e,Ae.width,Ae.height,0,Me,oe,Ae.data)}}}else{if(Z=E.mipmaps,U&&te){Z.length>0&&le++;let K=ut(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,_e,K.width,K.height)}for(let K=0;K<6;K++)if(ae){U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Me,oe,pe[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,_e,pe[K].width,pe[K].height,0,Me,oe,pe[K].data);for(let de=0;de<Z.length;de++){let ke=Z[de].image[K].image;U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,ke.width,ke.height,Me,oe,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,_e,ke.width,ke.height,0,Me,oe,ke.data)}}else{U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,oe,pe[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,_e,Me,oe,pe[K]);for(let de=0;de<Z.length;de++){let Ae=Z[de];U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Me,oe,Ae.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,_e,Me,oe,Ae.image[K])}}}g(E)&&m(r.TEXTURE_CUBE_MAP),Y.__version=ie.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function he(I,E,z,J,ie,Y){let Se=s.convert(z.format,z.colorSpace),re=s.convert(z.type),be=b(z.internalFormat,Se,re,z.colorSpace),ge=n.get(E),ae=n.get(z);if(ae.__renderTarget=E,!ge.__hasExternalTextures){let pe=Math.max(1,E.width>>Y),Pe=Math.max(1,E.height>>Y);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,be,pe,Pe,E.depth,0,Se,re,null):t.texImage2D(ie,Y,be,pe,Pe,0,Se,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ie,ae.__webglTexture,0,ot(E)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ie,ae.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(I,E,z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){let J=E.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Y=x(E.stencilBuffer,ie),Se=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=ot(E);ye(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,Y,E.width,E.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,I)}else{let J=E.textures;for(let ie=0;ie<J.length;ie++){let Y=J[ie],Se=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),be=b(Y.internalFormat,Se,re,Y.colorSpace),ge=ot(E);z&&ye(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,be,E.width,E.height):ye(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,be,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,be,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);let ie=J.__webglTexture,Y=ot(E);if(E.depthTexture.format===Fs)ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(E.depthTexture.format===no)ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ve(I){let E=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=J}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=I.texture.mipmaps;J&&J.length>0?ve(E.__webglFramebuffer[0],I):ve(E.__webglFramebuffer,I)}else if(z){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),we(E.__webglDepthbuffer[J],I,!1);else{let ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Y)}}else{let J=I.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,I,!1);else{let ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(I,E,z){let J=n.get(I);E!==void 0&&he(J.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ve(I)}function D(I){let E=I.texture,z=n.get(I),J=n.get(E);I.addEventListener("dispose",w);let ie=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let be=0;be<E.mipmaps.length;be++)z.__webglFramebuffer[re][be]=r.createFramebuffer()}else z.__webglFramebuffer[re]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)z.__webglFramebuffer[re]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Se)for(let re=0,be=ie.length;re<be;re++){let ge=n.get(ie[re]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&ye(I)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<ie.length;re++){let be=ie[re];z.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let ge=s.convert(be.format,be.colorSpace),ae=s.convert(be.type),pe=b(be.internalFormat,ge,ae,be.colorSpace,I.isXRRenderTarget===!0),Pe=ot(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,z.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),we(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Re(r.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)he(z.__webglFramebuffer[re][be],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,be);else he(z.__webglFramebuffer[re],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,be=ie.length;re<be;re++){let ge=ie[re],ae=n.get(ge),pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Re(pe,ge),he(z.__webglFramebuffer,I,ge,r.COLOR_ATTACHMENT0+re,pe,0),g(ge)&&m(pe)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),Re(re,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)he(z.__webglFramebuffer[be],I,E,r.COLOR_ATTACHMENT0,re,be);else he(z.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,re,0);g(E)&&m(re),t.unbindTexture()}I.depthBuffer&&Ve(I)}function tt(I){let E=I.textures;for(let z=0,J=E.length;z<J;z++){let ie=E[z];if(g(ie)){let Y=v(I),Se=n.get(ie).__webglTexture;t.bindTexture(Y,Se),m(Y),t.unbindTexture()}}}let Ue=[],Le=[];function me(I){if(I.samples>0){if(ye(I)===!1){let E=I.textures,z=I.width,J=I.height,ie=r.COLOR_BUFFER_BIT,Y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(I),re=E.length>1;if(re)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let be=I.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let ae=n.get(E[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,z,J,0,0,z,J,ie,r.NEAREST),l===!0&&(Ue.length=0,Le.length=0,Ue.push(r.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ue.push(Y),Le.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let ae=n.get(E[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ot(I){return Math.min(i.maxSamples,I.samples)}function ye(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function yt(I,E){let z=I.colorSpace,J=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Qt&&z!==Ji&&(it.getTransfer(z)===bt?(J!==Nn||ie!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=L,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=dt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ye}function pT(r,e){function t(n,i=Ji){let s,o=it.getTransfer(i);if(n===ui)return r.UNSIGNED_BYTE;if(n===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return r.BYTE;if(n===Kh)return r.SHORT;if(n===$s)return r.UNSIGNED_SHORT;if(n===cc)return r.INT;if(n===gr)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===eo)return r.HALF_FLOAT;if(n===Qh)return r.ALPHA;if(n===$h)return r.RGB;if(n===Nn)return r.RGBA;if(n===Fs)return r.DEPTH_COMPONENT;if(n===no)return r.DEPTH_STENCIL;if(n===dc)return r.RED;if(n===fc)return r.RED_INTEGER;if(n===ed)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===yc||n===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bc||n===yc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fc)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Vc||n===zc||n===Gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Un({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Td=class extends _i{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Sd,m={},v=t.getContextAttributes(),b=null,x=null,S=[],T=[],w=new je,R=null,M=new Ht;M.viewport=new pt;let y=new Ht;y.viewport=new pt;let C=[M,y],N=new Jl,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=S[X];return ee===void 0&&(ee=new Gs,S[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=S[X];return ee===void 0&&(ee=new Gs,S[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=S[X];return ee===void 0&&(ee=new Gs,S[X]=ee),ee.getHandSpace()};function V(X){let ee=T.indexOf(X.inputSource);if(ee===-1)return;let he=S[ee];he!==void 0&&(he.update(X.inputSource,X.frame,c||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",j);for(let X=0;X<S.length;X++){let ee=T[X];ee!==null&&(T[X]=null,S[X].disconnect(ee))}B=null,O=null,g.reset();for(let X in m)delete m[X];e.setRenderTarget(b),f=null,d=null,h=null,i=null,x=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",L),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,we=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?no:Fs,we=v.stencil?to:gr);let Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new xi(d.textureWidth,d.textureHeight,{format:Nn,type:ui,depthTexture:new da(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new xi(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){let he=X.removed[ee],we=T.indexOf(he);we>=0&&(T[we]=null,S[we].disconnect(he))}for(let ee=0;ee<X.added.length;ee++){let he=X.added[ee],we=T.indexOf(he);if(we===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=T.length){T.push(he),we=Ve;break}else if(T[Ve]===null){T[Ve]=he,we=Ve;break}if(we===-1)break}let ve=S[we];ve&&ve.connect(he)}}let G=new P,se=new P;function $(X,ee,he){G.setFromMatrixPosition(ee.matrixWorld),se.setFromMatrixPosition(he.matrixWorld);let we=G.distanceTo(se),ve=ee.projectionMatrix.elements,Ve=he.projectionMatrix.elements,dt=ve[14]/(ve[10]-1),D=ve[14]/(ve[10]+1),tt=(ve[9]+1)/ve[5],Ue=(ve[9]-1)/ve[5],Le=(ve[8]-1)/ve[0],me=(Ve[8]+1)/Ve[0],ot=dt*Le,ye=dt*me,ze=we/(-Le+me),yt=ze*-Le;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(yt),X.translateZ(ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ut=dt+ze,I=D+ze,E=ot-yt,z=ye+(we-yt),J=tt*D/I*ut,ie=Ue*D/I*ut;X.projectionMatrix.makePerspective(E,z,J,ie,ut,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ue(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ee=X.near,he=X.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(he=g.depthFar)),N.near=y.near=M.near=ee,N.far=y.far=M.far=he,(B!==N.near||O!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,O=N.far),N.layers.mask=X.layers.mask|6,M.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;let we=X.parent,ve=N.cameras;ue(N,we);for(let Ve=0;Ve<ve.length;Ve++)ue(ve[Ve],we);ve.length===2?$(N,M,y):N.projectionMatrix.copy(M.projectionMatrix),Re(X,N,we)};function Re(X,ee,he){he===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(X){return m[X]};let Ne=null;function Fe(X,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){let he=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let we=!1;he.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let D=0;D<he.length;D++){let tt=he[D],Ue=null;if(f!==null)Ue=f.getViewport(tt);else{let me=h.getViewSubImage(d,tt);Ue=me.viewport,D===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let Le=C[D];Le===void 0&&(Le=new Ht,Le.layers.enable(D),Le.viewport=new pt,C[D]=Le),Le.matrix.fromArray(tt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(tt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),D===0&&(N.matrix.copy(Le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(Le)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let D=h.getDepthInformation(he[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<he.length;D++){let tt=he[D].camera;if(tt){let Ue=m[tt];Ue||(Ue=new fa,m[tt]=Ue);let Le=h.getCameraImage(tt);Ue.sourceTexture=Le}}}}for(let he=0;he<S.length;he++){let we=T[he],ve=S[he];we!==null&&ve!==void 0&&ve.update(we,ee,c||o)}Ne&&Ne(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let Ye=new zg;Ye.setAnimationLoop(Fe),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}},Qr=new Kt,_T=new De;function xT(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ad(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,x=v.envMapRotation;b&&(g.envMap.value=b,Qr.copy(x),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.envMapRotation.value.setFromMatrix4(_T.makeRotationFromEuler(Qr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vT(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let x=b.program;n.uniformBlockBinding(v,x)}function c(v,b){let x=i[v.id];x===void 0&&(p(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",g));let S=b.program;n.updateUBOMapping(v,S);let T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){let b=h();v.__bindingPointIndex=b;let x=r.createBuffer(),S=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=i[v.id],x=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let T=0,w=x.length;T<w;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,y=R.length;M<y;M++){let C=R[M];if(f(C,T,M,S)===!0){let N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],O=0;for(let V=0;V<B.length;V++){let L=B[V],j=_(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,N+O,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,b,x,S){let T=v.value,w=b+"_"+x;if(S[w]===void 0)return typeof T=="number"||typeof T=="boolean"?S[w]=T:S[w]=T.clone(),!0;{let R=S[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return S[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function p(v){let b=v.uniforms,x=0,S=16;for(let w=0,R=b.length;w<R;w++){let M=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,C=M.length;y<C;y++){let N=M[y],B=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=B.length;O<V;O++){let L=B[O],j=_(L),G=x%S,se=G%j.boundary,$=G+se;x+=se,$!==0&&S-$<j.storage&&(x+=S-$),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=j.storage}}}let T=x%S;return T>0&&(x+=S-T),v.__size=x,v.__cache={},this}function _(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var Zc=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=Ot;let T=0,w=0,R=null,M=-1,y=null,C=new pt,N=new pt,B=null,O=new Ce(0),V=0,L=t.width,j=t.height,G=1,se=null,$=null,ue=new pt(0,0,L,j),Re=new pt(0,0,L,j),Ne=!1,Fe=new Ys,Ye=!1,X=!1,ee=new De,he=new P,we=new pt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function dt(){return R===null?G:1}let D=n;function tt(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Z,!1),D===null){let F="webgl2";if(D=tt(F,A),D===null)throw tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ue,Le,me,ot,ye,ze,yt,ut,I,E,z,J,ie,Y,Se,re,be,ge,ae,pe,Pe,Me,oe,_e;function U(){Ue=new FM(D),Ue.init(),Me=new pT(D,Ue),Le=new PM(D,Ue,e,Me),me=new dT(D,Ue),Le.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),ot=new HM(D),ye=new $S,ze=new fT(D,Ue,me,ye,Le,Me,ot),yt=new LM(x),ut=new OM(x),I=new qv(D),oe=new RM(D,I),E=new BM(D,I,ot,oe),z=new zM(D,E,I,ot),ae=new VM(D,Le,ze),re=new IM(ye),J=new QS(x,yt,ut,Ue,Le,oe,re),ie=new xT(x,ye),Y=new tT,Se=new aT(Ue),ge=new AM(x,yt,ut,me,z,f,l),be=new uT(x,z,Le),_e=new vT(D,ot,Le,me),pe=new CM(D,Ue,ot),Pe=new kM(D,Ue,ot),ot.programs=J.programs,x.capabilities=Le,x.extensions=Ue,x.properties=ye,x.renderLists=Y,x.shadowMap=be,x.state=me,x.info=ot}U();let te=new Td(x,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(L,j,!1))},this.getSize=function(A){return A.set(L,j)},this.setSize=function(A,F,W=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,j=F,t.width=Math.floor(A*G),t.height=Math.floor(F*G),W===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(L*G,j*G).floor()},this.setDrawingBufferSize=function(A,F,W){L=A,j=F,G=W,t.width=Math.floor(A*W),t.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ue)},this.setViewport=function(A,F,W,q){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,F,W,q),me.viewport(C.copy(ue).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,F,W,q){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,F,W,q),me.scissor(N.copy(Re).multiplyScalar(G).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){me.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,W=!0){let q=0;if(A){let H=!1;if(R!==null){let ce=R.texture.format;H=ce===mc||ce===pc||ce===fc}if(H){let ce=R.texture.type,xe=ce===ui||ce===gr||ce===$s||ce===to||ce===uc||ce===hc,Ie=ge.getClearColor(),Te=ge.getClearAlpha(),Ge=Ie.r,qe=Ie.g,Be=Ie.b;xe?(p[0]=Ge,p[1]=qe,p[2]=Be,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ge,_[1]=qe,_[2]=Be,_[3]=Te,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}F&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ge.dispose(),Y.dispose(),Se.dispose(),ye.dispose(),yt.dispose(),ut.dispose(),z.dispose(),oe.dispose(),_e.dispose(),J.dispose(),te.dispose(),te.removeEventListener("sessionstart",Je),te.removeEventListener("sessionend",wt),Xe.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=ot.autoReset,F=be.enabled,W=be.autoUpdate,q=be.needsUpdate,H=be.type;U(),ot.autoReset=A,be.enabled=F,be.autoUpdate=W,be.needsUpdate=q,be.type=H}function Z(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function K(A){let F=A.target;F.removeEventListener("dispose",K),de(F)}function de(A){Ae(A),ye.remove(A)}function Ae(A){let F=ye.get(A).programs;F!==void 0&&(F.forEach(function(W){J.releaseProgram(W)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,q,H,ce){F===null&&(F=ve);let xe=H.isMesh&&H.matrixWorld.determinant()<0,Ie=Hp(A,F,W,q,H);me.setMaterial(q,xe);let Te=W.index,Ge=1;if(q.wireframe===!0){if(Te=E.getWireframeAttribute(W),Te===void 0)return;Ge=2}let qe=W.drawRange,Be=W.attributes.position,nt=qe.start*Ge,Mt=(qe.start+qe.count)*Ge;ce!==null&&(nt=Math.max(nt,ce.start*Ge),Mt=Math.min(Mt,(ce.start+ce.count)*Ge)),Te!==null?(nt=Math.max(nt,0),Mt=Math.min(Mt,Te.count)):Be!=null&&(nt=Math.max(nt,0),Mt=Math.min(Mt,Be.count));let Dt=Mt-nt;if(Dt<0||Dt===1/0)return;oe.setup(H,q,Ie,W,Te);let At,Tt=pe;if(Te!==null&&(At=I.get(Te),Tt=Pe,Tt.setIndex(At)),H.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*dt()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(H.isLine){let He=q.linewidth;He===void 0&&(He=1),me.setLineWidth(He*dt()),H.isLineSegments?Tt.setMode(D.LINES):H.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else H.isPoints?Tt.setMode(D.POINTS):H.isSprite&&Tt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let He=H._multiDrawStarts,Pt=H._multiDrawCounts,ft=H._multiDrawCount,Cn=Te?I.get(Te).bytesPerElement:1,bs=ye.get(q).currentProgram.getUniforms();for(let Pn=0;Pn<ft;Pn++)bs.setValue(D,"_gl_DrawID",Pn),Tt.render(He[Pn]/Cn,Pt[Pn])}else if(H.isInstancedMesh)Tt.renderInstances(nt,Dt,H.count);else if(W.isInstancedBufferGeometry){let He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,He);Tt.renderInstances(nt,Dt,Pt)}else Tt.render(nt,Dt)};function ke(A,F,W){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,Ui(A,F,W),A.side=ai,A.needsUpdate=!0,Ui(A,F,W),A.side=pn):Ui(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),m=Se.get(W),m.init(F),b.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let q=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ce=H.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){let Ie=ce[xe];ke(Ie,W,H),q.add(Ie)}else ke(ce,W,H),q.add(ce)}),m=b.pop(),q},this.compileAsync=function(A,F,W=null){let q=this.compile(A,F,W);return new Promise(H=>{function ce(){if(q.forEach(function(xe){ye.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){H(A);return}setTimeout(ce,10)}Ue.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let k=null;function ne(A){k&&k(A)}function Je(){Xe.stop()}function wt(){Xe.start()}let Xe=new zg;Xe.setAnimationLoop(ne),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){k=A,te.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},te.addEventListener("sessionstart",Je),te.addEventListener("sessionend",wt),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(F),F=te.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,R),m=Se.get(A,b.length),m.init(F),b.push(m),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(ee,si,F.reversedDepth),X=this.localClippingEnabled,Ye=re.init(this.clippingPlanes,X),g=Y.get(A,v.length),g.init(),v.push(g),te.enabled===!0&&te.isPresenting===!0){let ce=x.xr.getDepthSensingMesh();ce!==null&&xt(ce,F,-1/0,x.sortObjects)}xt(A,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(se,$),Ve=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ve&&ge.addToRenderList(g,A),this.info.render.frame++,Ye===!0&&re.beginShadows();let W=m.state.shadowsArray;be.render(W,A,F),Ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,H=g.transmissive;if(m.setupLights(),F.isArrayCamera){let ce=F.cameras;if(H.length>0)for(let xe=0,Ie=ce.length;xe<Ie;xe++){let Te=ce[xe];tn(q,H,A,Te)}Ve&&ge.render(A);for(let xe=0,Ie=ce.length;xe<Ie;xe++){let Te=ce[xe];at(g,A,Te,Te.viewport)}}else H.length>0&&tn(q,H,A,F),Ve&&ge.render(A),at(g,A,F);R!==null&&w===0&&(ze.updateMultisampleRenderTarget(R),ze.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,F),oe.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(m=b[b.length-1],Ye===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function xt(A,F,W,q){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){q&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);let xe=z.update(A),Ie=A.material;Ie.visible&&g.push(A,xe,Ie,W,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){let xe=z.update(A),Ie=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),we.copy(xe.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Ie)){let Te=xe.groups;for(let Ge=0,qe=Te.length;Ge<qe;Ge++){let Be=Te[Ge],nt=Ie[Be.materialIndex];nt&&nt.visible&&g.push(A,xe,nt,W,we.z,Be)}}else Ie.visible&&g.push(A,xe,Ie,W,we.z,null)}}let ce=A.children;for(let xe=0,Ie=ce.length;xe<Ie;xe++)xt(ce[xe],F,W,q)}function at(A,F,W,q){let H=A.opaque,ce=A.transmissive,xe=A.transparent;m.setupLightsView(W),Ye===!0&&re.setGlobalState(x.clippingPlanes,W),q&&me.viewport(C.copy(q)),H.length>0&&ht(H,F,W),ce.length>0&&ht(ce,F,W),xe.length>0&&ht(xe,F,W),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function tn(A,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new xi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?eo:ui,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ce=m.state.transmissionRenderTarget[q.id],xe=q.viewport||C;ce.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);let Ie=x.getRenderTarget(),Te=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(O),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&ge.render(W);let qe=x.toneMapping;x.toneMapping=Ki;let Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),Ye===!0&&re.setGlobalState(x.clippingPlanes,q),ht(A,W,q),ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Mt=0,Dt=F.length;Mt<Dt;Mt++){let At=F[Mt],Tt=At.object,He=At.geometry,Pt=At.material,ft=At.group;if(Pt.side===pn&&Tt.layers.test(q.layers)){let Cn=Pt.side;Pt.side=$t,Pt.needsUpdate=!0,ln(Tt,W,q,He,Pt,ft),Pt.side=Cn,Pt.needsUpdate=!0,nt=!0}}nt===!0&&(ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ie,Te,Ge),x.setClearColor(O,V),Be!==void 0&&(q.viewport=Be),x.toneMapping=qe}function ht(A,F,W){let q=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ce=A.length;H<ce;H++){let xe=A[H],Ie=xe.object,Te=xe.geometry,Ge=xe.group,qe=xe.material;qe.allowOverride===!0&&q!==null&&(qe=q),Ie.layers.test(W.layers)&&ln(Ie,F,W,Te,qe,Ge)}}function ln(A,F,W,q,H,ce){A.onBeforeRender(x,F,W,q,H,ce),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,F,W,q,A,ce),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=$t,H.needsUpdate=!0,x.renderBufferDirect(W,F,q,H,A,ce),H.side=ai,H.needsUpdate=!0,x.renderBufferDirect(W,F,q,H,A,ce),H.side=pn):x.renderBufferDirect(W,F,q,H,A,ce),A.onAfterRender(x,F,W,q,H,ce)}function Ui(A,F,W){F.isScene!==!0&&(F=ve);let q=ye.get(A),H=m.state.lights,ce=m.state.shadowsArray,xe=H.state.version,Ie=J.getParameters(A,H.state,ce,F,W),Te=J.getProgramCacheKey(Ie),Ge=q.programs;q.environment=A.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(A.isMeshStandardMaterial?ut:yt).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",K),Ge=new Map,q.programs=Ge);let qe=Ge.get(Te);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===xe)return al(A,Ie),qe}else Ie.uniforms=J.getUniforms(A),A.onBeforeCompile(Ie,x),qe=J.acquireProgram(Ie,Te),Ge.set(Te,qe),q.uniforms=Ie.uniforms;let Be=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=re.uniform),al(A,Ie),q.needsLights=ll(A),q.lightsStateVersion=xe,q.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function xs(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function al(A,F){let W=ye.get(A);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Hp(A,F,W,q,H){F.isScene!==!0&&(F=ve),ze.resetTextureUnits();let ce=F.fog,xe=q.isMeshStandardMaterial?F.environment:null,Ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qt,Te=(q.isMeshStandardMaterial?ut:yt).get(q.envMap||xe),Ge=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color,Dt=Ki;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Dt=x.toneMapping);let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=At!==void 0?At.length:0,He=ye.get(q),Pt=m.state.lights;if(Ye===!0&&(X===!0||A!==y)){let cn=A===y&&q.id===M;re.setState(q,A,cn)}let ft=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Pt.state.version||He.outputColorSpace!==Ie||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Te||q.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==re.numPlanes||He.numIntersection!==re.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==qe||He.morphTargets!==Be||He.morphNormals!==nt||He.morphColors!==Mt||He.toneMapping!==Dt||He.morphTargetsCount!==Tt)&&(ft=!0):(ft=!0,He.__version=q.version);let Cn=He.currentProgram;ft===!0&&(Cn=Ui(q,F,H));let bs=!1,Pn=!1,zo=!1,It=Cn.getUniforms(),zn=He.uniforms;if(me.useProgram(Cn.program)&&(bs=!0,Pn=!0,zo=!0),q.id!==M&&(M=q.id,Pn=!0),bs||y!==A){me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(D,"projectionMatrix",A.projectionMatrix),It.setValue(D,"viewMatrix",A.matrixWorldInverse);let vn=It.map.cameraPosition;vn!==void 0&&vn.setValue(D,he.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&It.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Pn=!0,zo=!0)}if(H.isSkinnedMesh){It.setOptional(D,H,"bindMatrix"),It.setOptional(D,H,"bindMatrixInverse");let cn=H.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),It.setValue(D,"boneTexture",cn.boneTexture,ze))}H.isBatchedMesh&&(It.setOptional(D,H,"batchingTexture"),It.setValue(D,"batchingTexture",H._matricesTexture,ze),It.setOptional(D,H,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",H._indirectTexture,ze),It.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",H._colorsTexture,ze));let Gn=W.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ae.update(H,W,Cn),(Pn||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,It.setValue(D,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(zn.envMap.value=Te,zn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(zn.envMapIntensity.value=F.environmentIntensity),Pn&&(It.setValue(D,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&th(zn,zo),ce&&q.fog===!0&&ie.refreshFogUniforms(zn,ce),ie.refreshMaterialUniforms(zn,q,G,j,m.state.transmissionRenderTarget[A.id]),oo.upload(D,xs(He),zn,ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(oo.upload(D,xs(He),zn,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&It.setValue(D,"center",H.center),It.setValue(D,"modelViewMatrix",H.modelViewMatrix),It.setValue(D,"normalMatrix",H.normalMatrix),It.setValue(D,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let cn=q.uniformsGroups;for(let vn=0,rh=cn.length;vn<rh;vn++){let Cr=cn[vn];_e.update(Cr,Cn),_e.bind(Cr,Cn)}}return Cn}function th(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,W){let q=ye.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ye.get(A.texture).__webglTexture=F,ye.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let W=ye.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};let nh=D.createFramebuffer();this.setRenderTarget=function(A,F=0,W=0){R=A,T=F,w=W;let q=!0,H=null,ce=!1,xe=!1;if(A){let Te=ye.get(A);if(Te.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Te.__webglFramebuffer===void 0)ze.setupRenderTarget(A);else if(Te.__hasExternalTextures)ze.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Be=A.depthTexture;if(Te.__boundDepthTexture!==Be){if(Be!==null&&ye.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(A)}}let Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);let qe=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?H=qe[F][W]:H=qe[F],ce=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?H=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[W]:H=qe,C.copy(A.viewport),N.copy(A.scissor),B=A.scissorTest}else C.copy(ue).multiplyScalar(G).floor(),N.copy(Re).multiplyScalar(G).floor(),B=Ne;if(W!==0&&(H=nh),me.bindFramebuffer(D.FRAMEBUFFER,H)&&q&&me.drawBuffers(A,H),me.viewport(C),me.scissor(N),me.setScissorTest(B),ce){let Te=ye.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,W)}else if(xe){let Te=F;for(let Ge=0;Ge<A.textures.length;Ge++){let qe=ye.get(A.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,W,Te)}}else if(A!==null&&W!==0){let Te=ye.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(A,F,W,q,H,ce,xe,Ie=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){me.bindFramebuffer(D.FRAMEBUFFER,Te);try{let Ge=A.textures[Ie],qe=Ge.format,Be=Ge.type;if(!Le.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-q&&W>=0&&W<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(F,W,q,H,Me.convert(qe),Me.convert(Be),ce))}finally{let Ge=R!==null?ye.get(R).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,F,W,q,H,ce,xe,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te)if(F>=0&&F<=A.width-q&&W>=0&&W<=A.height-H){me.bindFramebuffer(D.FRAMEBUFFER,Te);let Ge=A.textures[Ie],qe=Ge.format,Be=Ge.type;if(!Le.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(F,W,q,H,Me.convert(qe),Me.convert(Be),0);let Mt=R!==null?ye.get(R).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Mt);let Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mg(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(nt),D.deleteSync(Dt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,W=0){let q=Math.pow(2,-W),H=Math.floor(A.image.width*q),ce=Math.floor(A.image.height*q),xe=F!==null?F.x:0,Ie=F!==null?F.y:0;ze.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xe,Ie,H,ce),me.unbindTexture()};let ih=D.createFramebuffer(),vs=D.createFramebuffer();this.copyTextureToTexture=function(A,F,W=null,q=null,H=0,ce=null){ce===null&&(H!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let xe,Ie,Te,Ge,qe,Be,nt,Mt,Dt,At=A.isCompressedTexture?A.mipmaps[ce]:A.image;if(W!==null)xe=W.max.x-W.min.x,Ie=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,qe=W.min.y,Be=W.isBox3?W.min.z:0;else{let Gn=Math.pow(2,-H);xe=Math.floor(At.width*Gn),Ie=Math.floor(At.height*Gn),A.isDataArrayTexture?Te=At.depth:A.isData3DTexture?Te=Math.floor(At.depth*Gn):Te=1,Ge=0,qe=0,Be=0}q!==null?(nt=q.x,Mt=q.y,Dt=q.z):(nt=0,Mt=0,Dt=0);let Tt=Me.convert(F.format),He=Me.convert(F.type),Pt;F.isData3DTexture?(ze.setTexture3D(F,0),Pt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),Pt=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let ft=D.getParameter(D.UNPACK_ROW_LENGTH),Cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bs=D.getParameter(D.UNPACK_SKIP_PIXELS),Pn=D.getParameter(D.UNPACK_SKIP_ROWS),zo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);let It=A.isDataArrayTexture||A.isData3DTexture,zn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let Gn=ye.get(A),cn=ye.get(F),vn=ye.get(Gn.__renderTarget),rh=ye.get(cn.__renderTarget);me.bindFramebuffer(D.READ_FRAMEBUFFER,vn.__webglFramebuffer),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,rh.__webglFramebuffer);for(let Cr=0;Cr<Te;Cr++)It&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(A).__webglTexture,H,Be+Cr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,ce,Dt+Cr)),D.blitFramebuffer(Ge,qe,xe,Ie,nt,Mt,xe,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||ye.has(A)){let Gn=ye.get(A),cn=ye.get(F);me.bindFramebuffer(D.READ_FRAMEBUFFER,ih),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,vs);for(let vn=0;vn<Te;vn++)It?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gn.__webglTexture,H,Be+vn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gn.__webglTexture,H),zn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,ce,Dt+vn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,ce),H!==0?D.blitFramebuffer(Ge,qe,xe,Ie,nt,Mt,xe,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):zn?D.copyTexSubImage3D(Pt,ce,nt,Mt,Dt+vn,Ge,qe,xe,Ie):D.copyTexSubImage2D(Pt,ce,nt,Mt,Ge,qe,xe,Ie);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Pt,ce,nt,Mt,Dt,xe,Ie,Te,Tt,He,At.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,ce,nt,Mt,Dt,xe,Ie,Te,Tt,At.data):D.texSubImage3D(Pt,ce,nt,Mt,Dt,xe,Ie,Te,Tt,He,At):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,nt,Mt,xe,Ie,Tt,He,At.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,nt,Mt,At.width,At.height,Tt,At.data):D.texSubImage2D(D.TEXTURE_2D,ce,nt,Mt,xe,Ie,Tt,He,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zo),ce===0&&F.generateMipmaps&&D.generateMipmap(Pt),me.unbindTexture()},this.initRenderTarget=function(A){ye.get(A).__webglFramebuffer===void 0&&ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};function wd(r,e){if(e===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===io||e===Da){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===io)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var uo=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Yi.extractUrlBase(e);o=Yi.resolveURL(c,this.path)}else o=Yi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ks(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zg){try{o[et.KHR_BINARY_GLTF]=new jd(e)}catch(h){i&&i(h);return}s=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new tf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Id;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new Kd(s,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new Jd;break;case et.KHR_MESH_QUANTIZATION:o[h]=new Zd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function bT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Pd=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ba(u),c.distance=h;break;case"spot":c=new va(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Id=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}},Ld=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(s)}},Ud=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Nd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Hd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Wd=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Xd=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},qd=class{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Yd=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let _=new De,g=new P,m=new Ee,v=new P(1,1,1),b=new ca(p.geometry,p.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,_.compose(g,m,v));for(let x in l)if(x==="_COLOR_0"){let S=l[x];b.instanceColor=new mr(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);lt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Zg="glTF",Oa=12,Yg={JSON:1313821514,BIN:5130562},jd=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Oa,s=new DataView(e,Oa),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Yg.JSON){let c=new Uint8Array(e,Oa+o,a);this.content=n.decode(c)}else if(l===Yg.BIN){let c=Oa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=$d[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=$d[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=co[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let p in f.attributes){let _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(f)},a,c,Qt,d)})})}},Jd=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Zd=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},$c=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,v=1-g,b=m-d+h;for(let x=0;x!==a;x++){let S=o[_+x+a],T=o[_+x+l]*u,w=o[p+x+a],R=o[p+x]*u;s[x]=v*S+b*T+g*w+m*R}return s}},yT=new Ee,Qd=class extends $c{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return yT.fromArray(s).normalize().toArray(s),s}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jg={9728:Zt,9729:dn,9984:lc,9985:Qs,9986:Kr,9987:ci},Kg={33071:mi,33648:Os,10497:fr},Ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MT={CUBICSPLINE:void 0,LINEAR:Hr,STEP:kr},Rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ST(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),r.DefaultMaterial}function ts(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TT(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ET(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wT(r){let e,t=r.extensions&&r.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cd(t.attributes):e=r.indices+":"+Cd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Cd(r.targets[n]);return e}function Cd(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ef(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var RT=new De,tf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _a(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ts(s,a,i),Si(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Yi.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ad[i.type],a=co[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ke(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Ad[i.type],c=co[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,g;if(f&&f!==h){let m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,b=t.cache.get(v);b||(_=new c(a,m*f,i.count*f/u),b=new Ws(_,f/u),t.cache.add(v,b)),g=new Xs(b,l,d%f/u,p)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new Ke(_,l,p);if(i.sparse!==void 0){let m=Ad.SCALAR,v=co[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new v(o[1],b,i.sparse.count*m),T=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new Ke(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,R=S.length;w<R;w++){let M=S[w];if(g.setX(M,T[w*l]),l>=2&&g.setY(M,T[w*l+1]),l>=3&&g.setZ(M,T[w*l+2]),l>=4&&g.setW(M,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return u.magFilter=jg[d.magFilter]||dn,u.minFilter=jg[d.minFilter]||ci,u.wrapS=Kg[d.wrapS]||fr,u.wrapT=Kg[d.wrapT]||fr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==dn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){let g=new jt(_);g.needsUpdate=!0,d(g)}),t.load(Yi.resolveURL(h,s.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Si(h,o),h.userData.mimeType=o.mimeType||AT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new js,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new fn,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let h=i[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=pn);let u=s.alphaMode||Rd.OPAQUE;if(u===Rd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yn){let h=s.emissiveFactor;a.emissive=new Ce().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&o!==yn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Si(h,s),t.associations.set(h,{materials:e}),s.extensions&&ts(i,h,s),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=wT(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jg(new mt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?ST(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let _=u[f],g=o[f],m,v=c[f];if(g.mode===Kn.TRIANGLES||g.mode===Kn.TRIANGLE_STRIP||g.mode===Kn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new zr(_,v):new Vt(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Kn.TRIANGLE_STRIP?m.geometry=wd(m.geometry,Da):g.mode===Kn.TRIANGLE_FAN&&(m.geometry=wd(m.geometry,io));else if(g.mode===Kn.LINES)m=new Xn(_,v);else if(g.mode===Kn.LINE_STRIP)m=new zi(_,v);else if(g.mode===Kn.LINE_LOOP)m=new ua(_,v);else if(g.mode===Kn.POINTS)m=new ha(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ET(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Si(m,s),g.extensions&&ts(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ts(i,h[0],s),h[0];let d=new Lt;s.extensions&&ts(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht($e.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new De;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new li(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],p=i.samplers[f.sampler],_=f.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],_=h[3],g=h[4],m=[];for(let b=0,x=d.length;b<x;b++){let S=d[b],T=f[b],w=p[b],R=_[b],M=g[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let y=n._createAnimationTracks(S,T,w,R,M);if(y)for(let C=0;C<y.length;C++)m.push(y[C])}let v=new qi(s,void 0,m);return Si(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,RT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new qs:c.length>1?u=new Lt:c.length===1?u=c[0]:u=new lt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Si(u,s),s.extensions&&ts(n,u,s),s.matrix!==void 0){let h=new De;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Lt;n.name&&(s.name=i.createUniqueName(n.name)),Si(s,n),n.extensions&&ts(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof sn||d instanceof jt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];_r[s.path]===_r.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(_r[s.path]){case _r.weights:c=qn;break;case _r.rotation:c=Yn;break;case _r.translation:case _r.scale:c=vi;break;default:n.itemSize===1?c=qn:c=vi;break}let u=i.interpolation!==void 0?MT[i.interpolation]:Hr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+_r[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ef(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Yn?Qd:$c;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CT(r,e,t){let n=e.attributes,i=new Dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=ef(co[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=ef(co[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new bn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Jg(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=$d[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return it.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Si(r,e),CT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?TT(r,e.targets,t):r})}var Qg=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?a(e):a(r),s,o=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function a(m){for(var v=new Uint8Array(m.length),b=0;b<m.length;++b){var x=m.charCodeAt(b);v[b]=x>96?x-97:x>64?x-39:x+4}for(var S=0,b=0;b<m.length;++b)v[S++]=v[b]<60?n[v[b]]:(v[b]-60)*64+v[++b];return v.buffer.slice(0,S)}function l(m,v,b,x,S,T,w){var R=m.exports.sbrk,M=x+3&-4,y=R(M*S),C=R(T.length),N=new Uint8Array(m.exports.memory.buffer);N.set(T,C);var B=v(y,x,S,C,T.length);if(B==0&&w&&w(y,M,S),b.set(N.subarray(y,y+x*S)),R(y-R(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(m){var v={object:new Worker(m),pending:0,requests:{}};return v.object.onmessage=function(b){var x=b.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function p(m){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),b=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(b),S=h.length;S<m;++S)h[S]=f(x);for(var S=m;S<h.length;++S)h[S].object.postMessage({});h.length=m,URL.revokeObjectURL(x)}function _(m,v,b,x,S){for(var T=h[0],w=1;w<h.length;++w)h[w].pending<T.pending&&(T=h[w]);return new Promise(function(R,M){var y=new Uint8Array(b),C=++d;T.pending+=m,T.requests[C]={resolve:R,reject:M},T.object.postMessage({id:C,count:m,size:v,source:y,mode:x,filter:S},[y.buffer])})}function g(m){var v=m.data;if(!v.id)return self.close();self.ready.then(function(b){try{var x=new Uint8Array(v.count*v.size);l(b,b.exports[v.mode],x,v.count,v.size,v.source,b.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(S){self.postMessage({id:v.id,count:v.count,action:"reject",value:S})}})}return{ready:o,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,v,b,x,S){l(s,s.exports.meshopt_decodeVertexBuffer,m,v,b,x,s.exports[c[S]])},decodeIndexBuffer:function(m,v,b,x){l(s,s.exports.meshopt_decodeIndexBuffer,m,v,b,x)},decodeIndexSequence:function(m,v,b,x){l(s,s.exports.meshopt_decodeIndexSequence,m,v,b,x)},decodeGltfBuffer:function(m,v,b,x,S,T){l(s,s.exports[u[S]],m,v,b,x,s.exports[c[T]])},decodeGltfBufferAsync:function(m,v,b,x,S){return h.length>0?_(m,v,b,u[x],c[S]):o.then(function(){var T=new Uint8Array(m*v);return l(s,s.exports[u[x]],T,m,v,b,s.exports[c[S]]),T})}}})();var eu=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),gt=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),$g=class extends lt{constructor(r){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${r}`,this.expressionName=r,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(r){this._binds.push(r)}deleteBind(r){let e=this._binds.indexOf(r);e>=0&&this._binds.splice(e,1)}applyWeight(r){var e;let t=this.outputWeight;t*=(e=r?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(r=>r.clearAppliedWeight())}};function N_(r,e,t){var n,i;let s=r.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(i=s.meshes)==null?void 0:i[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function e_(r,e){return gt(this,null,function*(){let t=yield r.parser.getDependency("node",e);return N_(r,e,t)})}function t_(r){return gt(this,null,function*(){let e=yield r.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{let s=N_(r,i,n);s!=null&&t.set(i,s)}),t})}var mf={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function O_(r){return Math.max(Math.min(r,1),0)}var n_=class F_{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(mf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(mf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new F_().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=O_(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Fa={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},PT={_Color:Fa.Color,_EmissionColor:Fa.EmissionColor,_ShadeColor:Fa.ShadeColor,_RimColor:Fa.RimColor,_OutlineColor:Fa.OutlineColor},IT=new Ce,B_=class k_{constructor({material:e,type:t,targetValue:n,targetAlpha:i}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=i??1;let s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:i,deltaValue:s}=t,o=this.material[i];o?.add(IT.copy(s).multiplyScalar(e))}if(n!=null){let{propertyName:i,deltaValue:s}=n;this.material[i]!=null&&(this.material[i]+=s*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:i}=e,s=this.material[n];s?.copy(i)}if(t!=null){let{propertyName:n,initialValue:i}=t;this.material[n]!=null&&(this.material[n]=i)}}_initColorBindState(){var e,t,n;let{material:i,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;let u=i[l].clone(),h=new Ce(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;let{material:i,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=i[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(k_._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};B_._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var i_=B_,au=class{constructor({primitives:r,index:e,weight:t}){this.primitives=r,this.index=e,this.weight=t}applyWeight(r){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*r)})}clearAppliedWeight(){this.primitives.forEach(r=>{var e;((e=r.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(r.morphTargetInfluences[this.index]=0)})}},r_=new je,H_=class V_{constructor({material:e,scale:t,offset:n}){var i,s;this.material=e,this.scale=t,this.offset=n;let o=(i=Object.entries(V_._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:i[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(r_.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(r_.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};H_._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var s_=H_,LT=new Set(["1.0","1.0-beta"]),z_=class G_{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return gt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return gt(this,null,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){return gt(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!LT.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(mf)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});let h=new n_;return yield Promise.all(Array.from(u.entries()).map(d=>gt(this,[d],function*([f,p]){var _,g,m,v,b,x,S;let T=new $g(f);if(e.scene.add(T),T.isBinary=(_=p.isBinary)!=null?_:!1,T.overrideBlink=(g=p.overrideBlink)!=null?g:"none",T.overrideLookAt=(m=p.overrideLookAt)!=null?m:"none",T.overrideMouth=(v=p.overrideMouth)!=null?v:"none",(b=p.morphTargetBinds)==null||b.forEach(w=>gt(this,null,function*(){var R;if(w.node===void 0||w.index===void 0)return;let M=yield e_(e,w.node),y=w.index;if(!M.every(C=>Array.isArray(C.morphTargetInfluences)&&y<C.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${p.name} attempts to index morph #${y} but not found.`);return}T.addBind(new au({primitives:M,index:y,weight:(R=w.weight)!=null?R:1}))})),p.materialColorBinds||p.textureTransformBinds){let w=[];e.scene.traverse(R=>{let M=R.material;M&&(Array.isArray(M)?w.push(...M):w.push(M))}),(x=p.materialColorBinds)==null||x.forEach(R=>gt(this,null,function*(){w.filter(y=>{var C;let N=(C=this.parser.associations.get(y))==null?void 0:C.materials;return R.material===N}).forEach(y=>{T.addBind(new i_({material:y,type:R.type,targetValue:new Ce().fromArray(R.targetValue),targetAlpha:R.targetValue[3]}))})})),(S=p.textureTransformBinds)==null||S.forEach(R=>gt(this,null,function*(){w.filter(y=>{var C;let N=(C=this.parser.associations.get(y))==null?void 0:C.materials;return R.material===N}).forEach(y=>{var C,N;T.addBind(new s_({material:y,offset:new je().fromArray((C=R.offset)!=null?C:[0,0]),scale:new je().fromArray((N=R.scale)!=null?N:[1,1])}))})}))}h.registerExpression(T)}))),h})}_v0Import(e){return gt(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let s=i.blendShapeMaster;if(!s)return null;let o=new n_,a=s.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>gt(this,null,function*(){var u;let h=c.presetName,d=h!=null&&G_.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);let p=new $g(f);e.scene.add(p),p.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(g=>gt(this,null,function*(){var m;if(g.mesh===void 0||g.index===void 0)return;let v=[];(m=n.nodes)==null||m.forEach((x,S)=>{x.mesh===g.mesh&&v.push(S)});let b=g.index;yield Promise.all(v.map(x=>gt(this,null,function*(){var S;let T=yield e_(e,x);if(!T.every(w=>Array.isArray(w.morphTargetInfluences)&&b<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${b}th morph but not found.`);return}p.addBind(new au({primitives:T,index:b,weight:.01*((S=g.weight)!=null?S:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(g=>{if(g.materialName===void 0||g.propertyName===void 0||g.targetValue===void 0)return;let m=[];e.scene.traverse(b=>{if(b.material){let x=b.material;Array.isArray(x)?m.push(...x.filter(S=>(S.name===g.materialName||S.name===g.materialName+" (Outline)")&&m.indexOf(S)===-1)):x.name===g.materialName&&m.indexOf(x)===-1&&m.push(x)}});let v=g.propertyName;m.forEach(b=>{if(v==="_MainTex_ST"){let S=new je(g.targetValue[0],g.targetValue[1]),T=new je(g.targetValue[2],g.targetValue[3]);T.y=1-T.y-S.y,p.addBind(new s_({material:b,scale:S,offset:T}));return}let x=PT[v];if(x){p.addBind(new i_({material:b,type:x,targetValue:new Ce().fromArray(g.targetValue),targetAlpha:g.targetValue[3]}));return}console.warn(v+" is not supported")})}),o.registerExpression(p)}))),o})}};z_.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var DT=z_;var yf=class mo{constructor(e,t){this._firstPersonOnlyLayer=mo.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=mo.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new mo(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=mo.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=mo.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&i.includes(h[0])||u[1]>0&&i.includes(h[1])||u[2]>0&&i.includes(h[2])||u[3]>0&&i.includes(h[3]))continue;let d=t[l],f=n[l];if(d[0]>0&&i.includes(f[0])||d[1]>0&&i.includes(f[1])||d[2]>0&&i.includes(f[2])||d[3]>0&&i.includes(f[3]))continue;let p=t[c],_=n[c];p[0]>0&&i.includes(_[0])||p[1]>0&&i.includes(_[1])||p[2]>0&&i.includes(_[2])||p[3]>0&&i.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){let n=new zr(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let i=n.geometry,s=i.getAttribute("skinIndex"),o=s instanceof Zs?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=i.getAttribute("skinWeight"),c=l instanceof Zs?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);let h=i.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),p=[];for(let _=0;_<f;_++)p[_]=d[_];return i.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new li(e.skeleton.bones,e.skeleton.boneInverses),new De),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new Lt;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};yf.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;yf.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var o_=yf,UT=new Set(["1.0","1.0-beta"]),NT=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(r){this.parser=r}afterRoot(r){return gt(this,null,function*(){let e=r.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");r.userData.vrmFirstPerson=yield this._import(r,e)}})}_import(r,e){return gt(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(r,e);if(t)return t;let n=yield this._v0Import(r,e);return n||null})}_v1Import(r,e){return gt(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!UT.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],u=yield t_(r);return Array.from(u.entries()).forEach(([h,d])=>{var f,p;let _=(f=l?.meshAnnotations)==null?void 0:f.find(g=>g.node===h);c.push({meshes:d,type:(p=_?.type)!=null?p:"auto"})}),new o_(e,c)})}_v0Import(r,e){return gt(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let s=i.firstPerson;if(!s)return null;let o=[],a=yield t_(r);return Array.from(a.entries()).forEach(([l,c])=>{let u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new o_(e,o)})}_convertV0FlagToV1Type(r){return r==="FirstPersonOnly"?"firstPersonOnly":r==="ThirdPersonOnly"?"thirdPersonOnly":r==="Both"?"both":"auto"}};var a_=new P,l_=new P,OT=new Ee,c_=class extends Lt{constructor(r){super(),this.vrmHumanoid=r,this._boneAxesMap=new Map,Object.values(r.humanBones).forEach(e=>{let t=new wa(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(r=>{r.geometry.dispose(),r.material.dispose()})}updateMatrixWorld(r){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(a_,OT,l_);let n=a_.set(.1,.1,.1).divide(l_);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(r)}},nf=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var uu={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function W_(r){return r.invert?r.invert():r.inverse(),r}var ns=new P,is=new Ee,gf=class{constructor(r){this.humanBones=r,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let r={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(ns.copy(n.position),is.copy(n.quaternion),r[t]={position:ns.toArray(),rotation:is.toArray()})}),r}getPose(){let r={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;ns.set(0,0,0),is.identity();let i=this.restPose[t];i?.position&&ns.fromArray(i.position).negate(),i?.rotation&&W_(is.fromArray(i.rotation)),ns.add(n.position),is.premultiply(n.quaternion),r[t]={position:ns.toArray(),rotation:is.toArray()}}),r}setPose(r){Object.entries(r).forEach(([e,t])=>{let n=e,i=this.getBoneNode(n);if(!i)return;let s=this.restPose[n];s&&(t?.position&&(i.position.fromArray(t.position),s.position&&i.position.add(ns.fromArray(s.position))),t?.rotation&&(i.quaternion.fromArray(t.rotation),s.rotation&&i.quaternion.multiply(is.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([r,e])=>{let t=this.getBoneNode(r);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(r){var e;return(e=this.humanBones[r])!=null?e:void 0}getBoneNode(r){var e,t;return(t=(e=this.humanBones[r])==null?void 0:e.node)!=null?t:null}},rf=new P,FT=new Ee,BT=new P,u_=class X_ extends gf{static _setupTransforms(e){let t=new lt;t.name="VRMHumanoidRig";let n={},i={},s={},o={};nf.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=new P,d=new Ee;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(h,d,rf),n[l]=h,i[l]=d,s[l]=u.quaternion.clone();let f=new Ee;(c=u.parent)==null||c.matrixWorld.decompose(rf,f,rf),o[l]=f}});let a={};return nf.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=n[l],d=l,f;for(;f==null&&(d=uu[d],d!=null);)f=n[d];let p=new lt;p.name="Normalized_"+u.name,(d?(c=a[d])==null?void 0:c.node:t).add(p),p.position.copy(h),f&&p.position.sub(f),a[l]={node:p}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:s}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:i,boneRotations:s}=X_._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=s}update(){nf.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),i=this._parentWorldRotations[e],s=FT.copy(i).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(s).multiply(o),e==="hips"){let a=n.getWorldPosition(BT);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},h_=class q_{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new gf(e),this._normalizedHumanBones=new u_(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new gf(e.humanBones),this._normalizedHumanBones=new u_(this._rawHumanBones),this}clone(){return new q_(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},kT={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},HT=new Set(["1.0","1.0-beta"]),d_={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},VT=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(r){return gt(this,null,function*(){r.userData.vrmHumanoid=yield this._import(r)})}_import(r){return gt(this,null,function*(){let e=yield this._v1Import(r);if(e)return e;let t=yield this._v0Import(r);return t||null})}_v1Import(r){return gt(this,null,function*(){var e,t;let n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;let o=s.specVersion;if(!HT.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>gt(this,[h],function*([d,f]){let p=d,_=f.node;if(l){let m=d_[p];m!=null&&(p=m)}let g=yield this.parser.getDependency("node",_);if(g==null){console.warn(`A glTF node bound to the humanoid bone ${p} (index = ${_}) does not exist`);return}c[p]={node:g}}))));let u=new h_(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){let h=new c_(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(r){return gt(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.humanoid;if(!i)return null;let s={};i.humanBones!=null&&(yield Promise.all(i.humanBones.map(a=>gt(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;let u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let h=d_[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));let o=new h_(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new c_(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(r){let e=Object.values(kT).filter(t=>r[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return r}},f_=class extends mt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Ke(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,r=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let r=0;r<64;r++){let e=r/63*this._currentTheta;this._attrPos.setXYZ(r+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<63;r++)this._attrIndex.setXYZ(r*3,0,r+1,r+2);this._attrIndex.needsUpdate=!0}},zT=class extends mt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new P,this._currentTail=new P,this._attrPos=new Ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},tu=new Ee,p_=new Ee,Ba=new P,m_=new P,g_=Math.sqrt(2)/2,GT=new Ee(0,0,-g_,g_),WT=new P(0,1,0),XT=class extends Lt{constructor(r){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=r;{let e=new f_;e.radius=.5;let t=new yn({color:65280,transparent:!0,opacity:.5,side:pn,depthTest:!1,depthWrite:!1});this._meshPitch=new Vt(e,t),this.add(this._meshPitch)}{let e=new f_;e.radius=.5;let t=new yn({color:16711680,transparent:!0,opacity:.5,side:pn,depthTest:!1,depthWrite:!1});this._meshYaw=new Vt(e,t),this.add(this._meshYaw)}{let e=new zT;e.radius=.1;let t=new fn({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Xn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(r){let e=$e.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=$e.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Ba),this.vrmLookAt.getLookAtWorldQuaternion(tu),tu.multiply(this.vrmLookAt.getFaceFrontQuaternion(p_)),this._meshYaw.position.copy(Ba),this._meshYaw.quaternion.copy(tu),this._meshPitch.position.copy(Ba),this._meshPitch.quaternion.copy(tu),this._meshPitch.quaternion.multiply(p_.setFromAxisAngle(WT,e)),this._meshPitch.quaternion.multiply(GT);let{target:n,autoUpdate:i}=this.vrmLookAt;n!=null&&i&&(n.getWorldPosition(m_).sub(Ba),this._lineTarget.geometry.tail.copy(m_),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Ba)),super.updateMatrixWorld(r)}},qT=new P,YT=new P;function _f(r,e){return r.matrixWorld.decompose(qT,e,YT),e}function ru(r){return[Math.atan2(-r.z,r.x),Math.atan2(r.y,Math.sqrt(r.x*r.x+r.z*r.z))]}function __(r){let e=Math.round(r/2/Math.PI);return r-2*Math.PI*e}var x_=new P(0,0,1),jT=new P,KT=new P,JT=new P,ZT=new Ee,sf=new Ee,v_=new Ee,QT=new Ee,of=new Kt,Y_=class j_{constructor(e,t){this.offsetFromHeadBone=new P,this.autoUpdate=!0,this.faceFront=new P(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Ee)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Kt)}getEuler(e){return e.set($e.DEG2RAD*this._pitch,$e.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new j_(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return _f(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(x_)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=ru(this.faceFront);return of.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(of).premultiply(QT.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(sf),this.getFaceFrontQuaternion(v_),e.copy(x_).applyQuaternion(sf).applyQuaternion(v_).applyEuler(this.getEuler(of))}lookAt(e){let t=ZT.copy(this._restHeadWorldQuaternion).multiply(W_(this.getLookAtWorldQuaternion(sf))),n=this.getLookAtWorldPosition(KT),i=JT.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=ru(this.faceFront),[a,l]=ru(i),c=__(a-s),u=__(o-l);this._yaw=$e.RAD2DEG*c,this._pitch=$e.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(jT)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Y_.EULER_ORDER="YXZ";var hu=Y_,$T=new P(0,0,1),Ti=new Ee,ho=new Ee,Jn=new Kt(0,0,0,"YXZ"),su=class{constructor(r,e,t,n,i){this.humanoid=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i,this.faceFront=new P(0,0,1),this._restQuatLeftEye=new Ee,this._restQuatRightEye=new Ee,this._restLeftEyeParentWorldQuat=new Ee,this._restRightEyeParentWorldQuat=new Ee;let s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),_f(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),_f(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(r,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),i=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Jn.x=-$e.DEG2RAD*this.rangeMapVerticalDown.map(-e):Jn.x=$e.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Jn.y=-$e.DEG2RAD*this.rangeMapHorizontalInner.map(-r):Jn.y=$e.DEG2RAD*this.rangeMapHorizontalOuter.map(r),Ti.setFromEuler(Jn),this._getWorldFaceFrontQuat(ho),i.quaternion.copy(ho).multiply(Ti).multiply(ho.invert()),Ti.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(i.quaternion).multiply(Ti).premultiply(Ti.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Jn.x=-$e.DEG2RAD*this.rangeMapVerticalDown.map(-e):Jn.x=$e.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Jn.y=-$e.DEG2RAD*this.rangeMapHorizontalOuter.map(-r):Jn.y=$e.DEG2RAD*this.rangeMapHorizontalInner.map(r),Ti.setFromEuler(Jn),this._getWorldFaceFrontQuat(ho),s.quaternion.copy(ho).multiply(Ti).multiply(ho.invert()),Ti.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(Ti).premultiply(Ti.invert()).multiply(this._restQuatRightEye))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=$e.RAD2DEG*r.y,t=$e.RAD2DEG*r.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(r){if(this.faceFront.distanceToSquared($T)<.01)return r.identity();let[e,t]=ru(this.faceFront);return Jn.set(0,.5*Math.PI+e,t,"YZX"),r.setFromEuler(Jn)}};su.type="bone";var xf=class{constructor(r,e,t,n,i){this.expressions=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i}applyYawPitch(r,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),r<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-r))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(r)))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=$e.RAD2DEG*r.y,t=$e.RAD2DEG*r.x;this.applyYawPitch(e,t)}};xf.type="expression";var b_=class{constructor(r,e){this.inputMaxValue=r,this.outputScale=e}map(r){return this.outputScale*O_(r/this.inputMaxValue)}},eE=new Set(["1.0","1.0-beta"]),nu=.01,Mf=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot}afterRoot(r){return gt(this,null,function*(){let e=r.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=r.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");r.userData.vrmLookAt=yield this._import(r,e,t)}})}_import(r,e,t){return gt(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(r,e,t);if(n)return n;let i=yield this._v0Import(r,e,t);return i||null})}_v1Import(r,e,t){return gt(this,null,function*(){var n,i,s;let o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let l=(i=o.extensions)==null?void 0:i.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!eE.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let u=l.lookAt;if(!u)return null;let h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),p=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,h),g;u.type==="expression"?g=new xf(t,d,f,p,_):g=new su(e,d,f,p,_);let m=this._importLookAt(e,g);return m.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),m})}_v1ImportRangeMap(r,e){var t,n;let i=(t=r?.inputMaxValue)!=null?t:90,s=(n=r?.outputScale)!=null?n:e;return i<nu&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),i=nu),new b_(i,s)}_v0Import(r,e,t){return gt(this,null,function*(){var n,i,s,o;let l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),p=this._v0ImportDegreeMap(c.lookAtVerticalUp,u),_;c.lookAtTypeName==="BlendShape"?_=new xf(t,h,d,f,p):_=new su(e,h,d,f,p);let g=this._importLookAt(e,_);return c.firstPersonBoneOffset?g.offsetFromHeadBone.set((i=c.firstPersonBoneOffset.x)!=null?i:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):g.offsetFromHeadBone.set(0,.06,0),g.faceFront.set(0,0,-1),_ instanceof su&&_.faceFront.set(0,0,-1),g})}_v0ImportDegreeMap(r,e){var t,n;let i=r?.curve;JSON.stringify(i)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=r?.xRange)!=null?t:90,o=(n=r?.yRange)!=null?n:e;return s<nu&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=nu),new b_(s,o)}_importLookAt(r,e){let t=new hu(r,e);if(this.helperRoot){let n=new XT(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function tE(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}var nE=new Set(["1.0","1.0-beta"]),iE=class{get name(){return"VRMMetaLoaderPlugin"}constructor(r,e){var t,n,i;this.parser=r,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(i=e?.acceptV0Meta)!=null?i:!0}afterRoot(r){return gt(this,null,function*(){r.userData.vrmMeta=yield this._import(r)})}_import(r){return gt(this,null,function*(){let e=yield this._v1Import(r);if(e!=null)return e;let t=yield this._v0Import(r);return t??null})}_v1Import(r){return gt(this,null,function*(){var e,t,n;let i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!nE.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(r){return gt(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.meta;if(!i)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&i.texture!=null&&i.texture!==-1&&(s=yield this.parser.getDependency("texture",i.texture)),{metaVersion:"0",allowedUserName:i.allowedUserName,author:i.author,commercialUssageName:i.commercialUssageName,contactInformation:i.contactInformation,licenseName:i.licenseName,otherLicenseUrl:i.otherLicenseUrl,otherPermissionUrl:i.otherPermissionUrl,reference:i.reference,sexualUssageName:i.sexualUssageName,texture:s??void 0,title:i.title,version:i.version,violentUssageName:i.violentUssageName}})}_extractGLTFImage(r){return gt(this,null,function*(){var e;let n=(e=this.parser.json.images)==null?void 0:e[r];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image doesn't exist`),null;let i=n.uri;if(n.bufferView!=null){let o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});i=URL.createObjectURL(a)}return i==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Js().loadAsync(tE(i,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},rE=class{constructor(r){this.scene=r.scene,this.meta=r.meta,this.humanoid=r.humanoid,this.expressionManager=r.expressionManager,this.firstPerson=r.firstPerson,this.lookAt=r.lookAt}update(r){this.humanoid.update(),this.lookAt&&this.lookAt.update(r),this.expressionManager&&this.expressionManager.update()}};var sE=class extends rE{constructor(r){super(r),this.materials=r.materials,this.springBoneManager=r.springBoneManager,this.nodeConstraintManager=r.nodeConstraintManager}update(r){super.update(r),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(r),this.materials&&this.materials.forEach(e=>{e.update&&e.update(r)})}},oE=Object.defineProperty,y_=Object.getOwnPropertySymbols,aE=Object.prototype.hasOwnProperty,lE=Object.prototype.propertyIsEnumerable,M_=(r,e,t)=>e in r?oE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S_=(r,e)=>{for(var t in e||(e={}))aE.call(e,t)&&M_(r,t,e[t]);if(y_)for(var t of y_(e))lE.call(e,t)&&M_(r,t,e[t]);return r},ss=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),cE={"":3e3,srgb:3001};function uE(r,e){parseInt("180",10)>=152?r.colorSpace=e:r.encoding=cE[e]}var hE=class{get pending(){return Promise.all(this._pendings)}constructor(r,e){this._parser=r,this._materialParams=e,this._pendings=[]}assignPrimitive(r,e){e!=null&&(this._materialParams[r]=e)}assignColor(r,e,t){e!=null&&(this._materialParams[r]=new Ce().fromArray(e),t&&this._materialParams[r].convertSRGBToLinear())}assignTexture(r,e,t){return ss(this,null,function*(){let n=ss(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,r,e),t&&uE(this._materialParams[r],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(r,e,t){return ss(this,null,function*(){return this.assignTexture(r,e!=null?{index:e}:void 0,t)})}},dE=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,fE=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,pE={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},T_={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},mE={3e3:"",3001:"srgb"};function af(r){return parseInt("180",10)>=152?r.colorSpace:mE[r.encoding]}var gE=class extends Un{constructor(r={}){var e;super({vertexShader:dE,fragmentShader:fE}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Ua,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=pE.None,this._outlineWidthMode=T_.None,this._isOutline=!1,r.transparentWithZWrite&&(r.depthWrite=!0),delete r.transparentWithZWrite,r.fog=!0,r.lights=!0,r.clipping=!0,this.uniforms=qc.merge([fe.common,fe.normalmap,fe.emissivemap,fe.fog,fe.lights,{litFactor:{value:new Ce(1,1,1)},mapUvTransform:{value:new Oe},colorAlpha:{value:1},normalMapUvTransform:{value:new Oe},shadeColorFactor:{value:new Ce(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Oe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Oe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Ce(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Oe},parametricRimColorFactor:{value:new Ce(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Oe},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Ce(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Oe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Oe},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Ce(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Oe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=r.uniforms)!=null?e:{}]),this.setValues(r),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${af(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${af(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${af(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("180",10),i=Object.entries(S_(S_({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=i+t.vertexShader,t.fragmentShader=i+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(r){this.uniforms.litFactor.value=r}get map(){return this.uniforms.map.value}set map(r){this.uniforms.map.value=r}get normalMap(){return this.uniforms.normalMap.value}set normalMap(r){this.uniforms.normalMap.value=r}get normalScale(){return this.uniforms.normalScale.value}set normalScale(r){this.uniforms.normalScale.value=r}get emissive(){return this.uniforms.emissive.value}set emissive(r){this.uniforms.emissive.value=r}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(r){this.uniforms.emissiveIntensity.value=r}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(r){this.uniforms.emissiveMap.value=r}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(r){this.uniforms.shadeColorFactor.value=r}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(r){this.uniforms.shadeMultiplyTexture.value=r}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(r){this.uniforms.shadingShiftFactor.value=r}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(r){this.uniforms.shadingShiftTexture.value=r}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(r){this.uniforms.shadingShiftTextureScale.value=r}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(r){this.uniforms.shadingToonyFactor.value=r}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(r){this.uniforms.giEqualizationFactor.value=r}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(r){this.uniforms.matcapFactor.value=r}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(r){this.uniforms.matcapTexture.value=r}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(r){this.uniforms.parametricRimColorFactor.value=r}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(r){this.uniforms.rimMultiplyTexture.value=r}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(r){this.uniforms.rimLightingMixFactor.value=r}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(r){this.uniforms.parametricRimFresnelPowerFactor.value=r}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(r){this.uniforms.parametricRimLiftFactor.value=r}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(r){this.uniforms.outlineWidthMultiplyTexture.value=r}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(r){this.uniforms.outlineWidthFactor.value=r}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(r){this.uniforms.outlineColorFactor.value=r}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(r){this.uniforms.outlineLightingMixFactor.value=r}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(r){this.uniforms.uvAnimationMaskTexture.value=r}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(r){this.uniforms.uvAnimationScrollXOffset.value=r}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(r){this.uniforms.uvAnimationScrollYOffset.value=r}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(r){this.uniforms.uvAnimationRotationPhase.value=r}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(r){this._ignoreVertexColor=r,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(r){this._v0CompatShade=r,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(r){this._debugMode=r,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(r){this._outlineWidthMode=r,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(r){this._isOutline=r,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(r){this._uploadUniformsWorkaround(),this._updateUVAnimation(r)}copy(r){return super.copy(r),this.map=r.map,this.normalMap=r.normalMap,this.emissiveMap=r.emissiveMap,this.shadeMultiplyTexture=r.shadeMultiplyTexture,this.shadingShiftTexture=r.shadingShiftTexture,this.matcapTexture=r.matcapTexture,this.rimMultiplyTexture=r.rimMultiplyTexture,this.outlineWidthMultiplyTexture=r.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=r.uvAnimationMaskTexture,this.normalMapType=r.normalMapType,this.uvAnimationScrollXSpeedFactor=r.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=r.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=r.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=r.ignoreVertexColor,this.v0CompatShade=r.v0CompatShade,this.debugMode=r.debugMode,this.outlineWidthMode=r.outlineWidthMode,this.isOutline=r.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(r){this.uniforms.uvAnimationScrollXOffset.value+=r*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=r*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=r*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let r=parseInt("180",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:r,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===T_.ScreenCoordinates}}_updateTextureMatrix(r,e){r.value&&(r.value.matrixAutoUpdate&&r.value.updateMatrix(),e.value.copy(r.value.matrix))}},_E=new Set(["1.0","1.0-beta"]),K_=class ou{get name(){return ou.EXTENSION_NAME}constructor(e,t={}){var n,i,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:gE,this.renderOrderOffset=(i=t.renderOrderOffset)!=null?i:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return ss(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return ss(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return ss(this,null,function*(){var t;let n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((i,s)=>{var o;this._getMToonExtension(s)&&((o=i.extensions)!=null&&o.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[ou.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!_E.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${ou.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return ss(this,null,function*(){var n;delete t.metalness,delete t.roughness;let i=new hE(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof sn)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=$t,e.material.push(n);let i=e.geometry,s=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,s,0),i.addGroup(0,s,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(let i of n)this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};K_.EXTENSION_NAME="VRMC_materials_mtoon";var xE=K_,vE=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),J_=class vf{get name(){return vf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return vE(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[vf.EXTENSION_NAME];if(a!=null)return a}};J_.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var bE=J_,yE=Object.defineProperty,ME=Object.defineProperties,SE=Object.getOwnPropertyDescriptors,E_=Object.getOwnPropertySymbols,TE=Object.prototype.hasOwnProperty,EE=Object.prototype.propertyIsEnumerable,w_=(r,e,t)=>e in r?yE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ei=(r,e)=>{for(var t in e||(e={}))TE.call(e,t)&&w_(r,t,e[t]);if(E_)for(var t of E_(e))EE.call(e,t)&&w_(r,t,e[t]);return r},A_=(r,e)=>ME(r,SE(e)),wE=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});function fo(r){return Math.pow(r,2.2)}var AE=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(r){var e;this.parser=r,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return wE(this,null,function*(){var r;let e=this.parser.json,t=(r=e.extensions)==null?void 0:r.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((i,s)=>{var o,a;let l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(i.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(i,l);e.materials[s]=c}else if((a=i.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(i,l);e.materials[s]=c}else i.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${i.shader}`)}))})}_parseV0MToonProperties(r,e){var t,n,i,s,o,a,l,c,u,h,d,f,p,_,g,m,v,b,x,S,T,w,R,M,y,C,N,B,O,V,L,j,G,se,$,ue,Re,Ne,Fe,Ye,X,ee,he,we,ve,Ve,dt,D,tt,Ue,Le,me,ot,ye,ze;let yt=(n=(t=r.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,I=((i=r.floatProperties)==null?void 0:i._ZWrite)===1&&yt,E=this._v0ParseRenderQueue(r),z=(o=(s=r.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,J=yt?"BLEND":z?"MASK":"OPAQUE",ie=z?(l=(a=r.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Se=((u=(c=r.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,re=this._portTextureTransform(r),be=((d=(h=r.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((W,q)=>q===3?W:fo(W)),ge=(f=r.textureProperties)==null?void 0:f._MainTex,ae=ge!=null?{index:ge,extensions:Ei({},re)}:void 0,pe=(_=(p=r.floatProperties)==null?void 0:p._BumpScale)!=null?_:1,Pe=(g=r.textureProperties)==null?void 0:g._BumpMap,Me=Pe!=null?{index:Pe,scale:pe,extensions:Ei({},re)}:void 0,oe=((v=(m=r.vectorProperties)==null?void 0:m._EmissionColor)!=null?v:[0,0,0,1]).map(fo),_e=(b=r.textureProperties)==null?void 0:b._EmissionMap,U=_e!=null?{index:_e,extensions:Ei({},re)}:void 0,te=((S=(x=r.vectorProperties)==null?void 0:x._ShadeColor)!=null?S:[.97,.81,.86,1]).map(fo),Q=(T=r.textureProperties)==null?void 0:T._ShadeTexture,le=Q!=null?{index:Q,extensions:Ei({},re)}:void 0,Z=(R=(w=r.floatProperties)==null?void 0:w._ShadeShift)!=null?R:0,K=(y=(M=r.floatProperties)==null?void 0:M._ShadeToony)!=null?y:.9;K=$e.lerp(K,1,.5+.5*Z),Z=-Z-(1-K);let de=(N=(C=r.floatProperties)==null?void 0:C._IndirectLightIntensity)!=null?N:.1,Ae=de?1-de:void 0,ke=(B=r.textureProperties)==null?void 0:B._SphereAdd,k=ke!=null?[1,1,1]:void 0,ne=ke!=null?{index:ke}:void 0,Je=(V=(O=r.floatProperties)==null?void 0:O._RimLightingMix)!=null?V:0,wt=(L=r.textureProperties)==null?void 0:L._RimTexture,Xe=wt!=null?{index:wt,extensions:Ei({},re)}:void 0,xt=((G=(j=r.vectorProperties)==null?void 0:j._RimColor)!=null?G:[0,0,0,1]).map(fo),at=($=(se=r.floatProperties)==null?void 0:se._RimFresnelPower)!=null?$:1,tn=(Re=(ue=r.floatProperties)==null?void 0:ue._RimLift)!=null?Re:0,ht=["none","worldCoordinates","screenCoordinates"][(Fe=(Ne=r.floatProperties)==null?void 0:Ne._OutlineWidthMode)!=null?Fe:0],ln=(X=(Ye=r.floatProperties)==null?void 0:Ye._OutlineWidth)!=null?X:0;ln=.01*ln;let Ui=(ee=r.textureProperties)==null?void 0:ee._OutlineWidthTexture,xs=Ui!=null?{index:Ui,extensions:Ei({},re)}:void 0,al=((we=(he=r.vectorProperties)==null?void 0:he._OutlineColor)!=null?we:[0,0,0]).map(fo),th=((Ve=(ve=r.floatProperties)==null?void 0:ve._OutlineColorMode)!=null?Ve:0)===1?(D=(dt=r.floatProperties)==null?void 0:dt._OutlineLightingMix)!=null?D:1:0,ll=(tt=r.textureProperties)==null?void 0:tt._UvAnimMaskTexture,nh=ll!=null?{index:ll,extensions:Ei({},re)}:void 0,ih=(Le=(Ue=r.floatProperties)==null?void 0:Ue._UvAnimScrollX)!=null?Le:0,vs=(ot=(me=r.floatProperties)==null?void 0:me._UvAnimScrollY)!=null?ot:0;vs!=null&&(vs=-vs);let A=(ze=(ye=r.floatProperties)==null?void 0:ye._UvAnimRotation)!=null?ze:0,F={specVersion:"1.0",transparentWithZWrite:I,renderQueueOffsetNumber:E,shadeColorFactor:te,shadeMultiplyTexture:le,shadingShiftFactor:Z,shadingToonyFactor:K,giEqualizationFactor:Ae,matcapFactor:k,matcapTexture:ne,rimLightingMixFactor:Je,rimMultiplyTexture:Xe,parametricRimColorFactor:xt,parametricRimFresnelPowerFactor:at,parametricRimLiftFactor:tn,outlineWidthMode:ht,outlineWidthFactor:ln,outlineWidthMultiplyTexture:xs,outlineColorFactor:al,outlineLightingMixFactor:th,uvAnimationMaskTexture:nh,uvAnimationScrollXSpeedFactor:ih,uvAnimationScrollYSpeedFactor:vs,uvAnimationRotationSpeedFactor:A};return A_(Ei({},e),{pbrMetallicRoughness:{baseColorFactor:be,baseColorTexture:ae},normalTexture:Me,emissiveTexture:U,emissiveFactor:oe,alphaMode:J,alphaCutoff:ie,doubleSided:Se,extensions:{VRMC_materials_mtoon:F}})}_parseV0UnlitProperties(r,e){var t,n,i,s,o;let a=r.shader==="VRM/UnlitTransparentZWrite",l=r.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(r),u=r.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=r.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(r),p=((s=(i=r.vectorProperties)==null?void 0:i._Color)!=null?s:[1,1,1,1]).map(fo),_=(o=r.textureProperties)==null?void 0:o._MainTex,g=_!=null?{index:_,extensions:Ei({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:p,shadeMultiplyTexture:g};return A_(Ei({},e),{pbrMetallicRoughness:{baseColorFactor:p,baseColorTexture:g},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(r){var e,t,n,i,s;let o=(e=r.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(i=o?.[2])!=null?i:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(r){var e,t;let n=r.shader==="VRM/UnlitTransparentZWrite",i=((e=r.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||r.shader==="VRM/UnlitTransparent"||n,s=((t=r.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(i){let a=r.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(r){let e=new Set,t=new Set;r.forEach(n=>{var i,s;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((i=n.keywordMap)==null?void 0:i._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,i)=>{let s=Math.min(Math.max(i-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,i)=>{let s=Math.min(Math.max(i,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},R_=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),xr=new P,lf=class extends Lt{constructor(r){super(),this._attrPosition=new Ke(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(id);let e=new mt;e.setAttribute("position",this._attrPosition);let t=new fn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new zi(e,t),this.add(this._line),this.constraint=r}updateMatrixWorld(r){xr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,xr.x,xr.y,xr.z),this.constraint.source&&xr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,xr.x,xr.y,xr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(r)}};function C_(r,e){return e.set(r.elements[12],r.elements[13],r.elements[14])}var RE=new P,CE=new P;function PE(r,e){return r.decompose(RE,e,CE),e}function lu(r){return r.invert?r.invert():r.inverse(),r}var Sf=class{constructor(r,e){this.destination=r,this.source=e,this.weight=1}},IE=new P,LE=new P,DE=new P,UE=new Ee,NE=new Ee,OE=new Ee,FE=class extends Sf{get aimAxis(){return this._aimAxis}set aimAxis(r){this._aimAxis=r,this._v3AimAxis.set(r==="PositiveX"?1:r==="NegativeX"?-1:0,r==="PositiveY"?1:r==="NegativeY"?-1:0,r==="PositiveZ"?1:r==="NegativeZ"?-1:0)}get dependencies(){let r=new Set([this.source]);return this.destination.parent&&r.add(this.destination.parent),r}constructor(r,e){super(r,e),this._aimAxis="PositiveX",this._v3AimAxis=new P(1,0,0),this._dstRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let r=UE.identity(),e=NE.identity();this.destination.parent&&(PE(this.destination.parent.matrixWorld,r),lu(e.copy(r)));let t=IE.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(r),n=C_(this.source.matrixWorld,LE).sub(C_(this.destination.matrixWorld,DE)).normalize(),i=OE.setFromUnitVectors(t,n).premultiply(e).multiply(r).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function BE(r,e){let t=[r],n=r.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var kE=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(r){this._constraints.add(r);let e=this._objectConstraintsMap.get(r.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(r.destination,e)),e.add(r)}deleteConstraint(r){this._constraints.delete(r),this._objectConstraintsMap.get(r.destination).delete(r)}setInitState(){let r=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,r,e,n=>n.setInitState())}update(){let r=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,r,e,n=>n.update())}_processConstraint(r,e,t,n){if(t.has(r))return;if(e.has(r))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(r);let i=r.dependencies;for(let s of i)BE(s,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(r),t.add(r)}},HE=new Ee,VE=new Ee,zE=class extends Sf{get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._dstRestQuat=new Ee,this._invSrcRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lu(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let r=HE.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=VE.copy(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},GE=new P,WE=new Ee,XE=new Ee,qE=class extends Sf{get rollAxis(){return this._rollAxis}set rollAxis(r){this._rollAxis=r,this._v3RollAxis.set(r==="X"?1:0,r==="Y"?1:0,r==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._rollAxis="X",this._v3RollAxis=new P(1,0,0),this._dstRestQuat=new Ee,this._invDstRestQuat=new Ee,this._invSrcRestQuatMulDstRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lu(this._invDstRestQuat.copy(this._dstRestQuat)),lu(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let r=WE.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=GE.copy(this._v3RollAxis).applyQuaternion(r),n=XE.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},YE=new Set(["1.0","1.0-beta"]),Z_=class za{get name(){return za.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return R_(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return R_(this,null,function*(){var t;let n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(za.EXTENSION_NAME))!==-1))return null;let s=new kE,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[za.EXTENSION_NAME];if(h==null)return;let d=h.specVersion;if(!YE.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${za.EXTENSION_NAME} specVersion "${d}"`);return}let f=h.constraint;if(f.roll!=null){let p=this._importRollConstraint(a,o,f.roll);s.addConstraint(p)}else if(f.aim!=null){let p=this._importAimConstraint(a,o,f.aim);s.addConstraint(p)}else if(f.rotation!=null){let p=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(p)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){let{source:i,rollAxis:s,weight:o}=n,a=t[i],l=new qE(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new lf(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:i,aimAxis:s,weight:o}=n,a=t[i],l=new FE(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new lf(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:i,weight:s}=n,o=t[i],a=new zE(e,o);if(s!=null&&(a.weight=s),this.helperRoot){let l=new lf(a);this.helperRoot.add(l)}return a}};Z_.EXTENSION_NAME="VRMC_node_constraint";var jE=Z_,iu=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Tf=class{},cf=new P,rs=new P,Q_=class extends Tf{get type(){return"capsule"}constructor(r){var e,t,n,i;super(),this.offset=(e=r?.offset)!=null?e:new P(0,0,0),this.tail=(t=r?.tail)!=null?t:new P(0,0,0),this.radius=(n=r?.radius)!=null?n:0,this.inside=(i=r?.inside)!=null?i:!1}calculateCollision(r,e,t,n){cf.setFromMatrixPosition(r),rs.subVectors(this.tail,this.offset).applyMatrix4(r),rs.sub(cf);let i=rs.lengthSq();n.copy(e).sub(cf);let s=rs.dot(n);s<=0||(i<=s||rs.multiplyScalar(s/i),n.sub(rs));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},uf=new P,P_=new Oe,$_=class extends Tf{get type(){return"plane"}constructor(r){var e,t;super(),this.offset=(e=r?.offset)!=null?e:new P(0,0,0),this.normal=(t=r?.normal)!=null?t:new P(0,0,1)}calculateCollision(r,e,t,n){n.setFromMatrixPosition(r),n.negate().add(e),P_.getNormalMatrix(r),uf.copy(this.normal).applyNormalMatrix(P_).normalize();let i=n.dot(uf)-t;return n.copy(uf),i}},KE=new P,e0=class extends Tf{get type(){return"sphere"}constructor(r){var e,t,n;super(),this.offset=(e=r?.offset)!=null?e:new P(0,0,0),this.radius=(t=r?.radius)!=null?t:0,this.inside=(n=r?.inside)!=null?n:!1}calculateCollision(r,e,t,n){n.subVectors(e,KE.setFromMatrixPosition(r));let i=n.length(),s=this.inside?this.radius-t-i:i-t-this.radius;return s<0&&(n.multiplyScalar(1/i),this.inside&&n.negate()),s}},wi=new P,JE=class extends mt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new P,this._currentTail=new P,this._shape=r,this._attrPos=new Ke(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0);let t=wi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),r=!0),r&&this._buildPosition()}_buildPosition(){wi.copy(this._currentTail).sub(this._currentOffset);let r=wi.length()/this._currentRadius;for(let n=0;n<=16;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(i),-Math.cos(i),0),this._attrPos.setXYZ(17+n,r+Math.sin(i),Math.cos(i),0),this._attrPos.setXYZ(34+n,-Math.sin(i),0,-Math.cos(i)),this._attrPos.setXYZ(51+n,r+Math.sin(i),0,Math.cos(i))}for(let n=0;n<32;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(i),Math.cos(i)),this._attrPos.setXYZ(100+n,r,Math.sin(i),Math.cos(i))}let e=Math.atan2(wi.y,Math.sqrt(wi.x*wi.x+wi.z*wi.z)),t=-Math.atan2(wi.z,wi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<34;r++){let e=(r+1)%34;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(68+r*2,34+r,34+e)}for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(136+r*2,68+r,68+e),this._attrIndex.setXY(200+r*2,100+r,100+e)}this._attrIndex.needsUpdate=!0}},ZE=class extends mt{constructor(r){super(),this.worldScale=1,this._currentOffset=new P,this._currentNormal=new P,this._shape=r,this._attrPos=new Ke(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},QE=class extends mt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new P,this._shape=r,this._attrPos=new Ke(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.needsUpdate=!0}},$E=new P,hf=class extends Lt{constructor(r){if(super(),this.matrixAutoUpdate=!1,this.collider=r,this.collider.shape instanceof e0)this._geometry=new QE(this.collider.shape);else if(this.collider.shape instanceof Q_)this._geometry=new JE(this.collider.shape);else if(this.collider.shape instanceof $_)this._geometry=new ZE(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new fn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Xn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=$E.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},ew=class extends mt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new P,this._springBone=r,this._attrPos=new Ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},tw=new P,nw=class extends Lt{constructor(r){super(),this.matrixAutoUpdate=!1,this.springBone=r,this._geometry=new ew(this.springBone);let e=new fn({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Xn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=tw.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},df=class extends lt{constructor(r){super(),this.colliderMatrix=new De,this.shape=r}updateWorldMatrix(r,e){super.updateWorldMatrix(r,e),iw(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function iw(r,e,t){let n=e.elements;r.copy(e),t&&(r.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],r.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],r.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var rw=new De;function sw(r){return r.invert?r.invert():r.getInverse(rw.copy(r)),r}var ow=class{constructor(r){this._inverseCache=new De,this._shouldUpdateInverse=!0,this.matrix=r;let e={set:(t,n,i)=>(this._shouldUpdateInverse=!0,t[n]=i,!0)};this._originalElements=r.elements,r.elements=new Proxy(r.elements,e)}get inverse(){return this._shouldUpdateInverse&&(sw(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},ff=new De,po=new P,ka=new P,Ha=new P,Va=new P,aw=new De,lw=class{constructor(r,e,t={},n=[]){this._currentTail=new P,this._prevTail=new P,this._boneAxis=new P,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new De,this._initialLocalRotation=new Ee,this._initialLocalChildPosition=new P;var i,s,o,a,l,c;this.bone=r,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(i=t.hitRadius)!=null?i:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new P(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let r=new Set,e=this.bone.parent;e&&r.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)r.add(this.colliderGroups[t].colliders[n]);return r}get center(){return this._center}set center(r){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=r,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new ow(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:ff}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail)}update(r){if(r<=0)return;this._calcWorldSpaceBoneLength();let e=ka.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Va.copy(this._currentTail).add(po.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*r).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*r),Ha.setFromMatrixPosition(this.bone.matrixWorld),Va.sub(Ha).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ha),this._collision(Va),this._prevTail.copy(this._currentTail),this._currentTail.copy(Va).applyMatrix4(this._getMatrixWorldToCenter());let t=aw.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,po.copy(Va).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(r){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],i=n.shape.calculateCollision(n.colliderMatrix,r,this.settings.hitRadius,po);if(i<0){r.addScaledVector(po,-i),r.sub(Ha);let s=r.length();r.multiplyScalar(this._worldSpaceBoneLength/s).add(Ha)}}}_calcWorldSpaceBoneLength(){po.setFromMatrixPosition(this.bone.matrixWorld),this.child?ka.setFromMatrixPosition(this.child.matrixWorld):(ka.copy(this._initialLocalChildPosition),ka.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=po.sub(ka).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:ff}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:ff}};function cw(r,e){let t=[],n=r;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function bf(r,e){r.children.forEach(t=>{e(t)||bf(t,e)})}function uw(r){var e;let t=new Map;for(let n of r){let i=n;do{let s=((e=t.get(i))!=null?e:0)+1;if(s===r.size)return i;t.set(i,s),i=i.parent}while(i!==null)}return null}var I_=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let r=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{r.add(t)})}),Array.from(r)}get colliders(){let r=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{r.add(t)})}),Array.from(r)}addJoint(r){this._joints.add(r);let e=this._objectSpringBonesMap.get(r.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(r.bone,e)),e.add(r),this._isSortedJointsDirty=!0}addSpringBone(r){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(r)}deleteJoint(r){this._joints.delete(r),this._objectSpringBonesMap.get(r.bone).delete(r),this._isSortedJointsDirty=!0}deleteSpringBone(r){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(r)}setInitState(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){let e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){let e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(r){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(r),bf(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let r=[],e=new Set,t=new Set,n=new Set;for(let s of this._joints)this._insertJointSort(s,e,t,r,n);this._sortedJoints=r;let i=uw(n);this._ancestors=[],i&&(this._ancestors.push(i),bf(i,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(r,e,t,n,i){if(t.has(r))return;if(e.has(r)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(r);let s=r.dependencies;for(let o of s){let a=!1,l=null;cw(o,c=>{let u=this._objectSpringBonesMap.get(c);if(u)for(let h of u)a=!0,this._insertJointSort(h,e,t,n,i);else a||(l=c)}),l&&i.add(l)}n.push(r),t.add(r)}_relevantChildrenUpdated(r){var e,t;return((t=(e=this._objectSpringBonesMap.get(r))==null?void 0:e.size)!=null?t:0)>0?!0:(r.updateWorldMatrix(!1,!1),!1)}},L_="VRMC_springBone_extended_collider",hw=new Set(["1.0","1.0-beta"]),dw=new Set(["1.0"]),t0=class go{get name(){return go.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return iu(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return iu(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return iu(this,null,function*(){var t,n,i,s,o;let a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(go.EXTENSION_NAME))!==-1))return null;let c=new I_,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[go.EXTENSION_NAME];if(!h)return null;let d=h.specVersion;if(!hw.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${go.EXTENSION_NAME} specVersion "${d}"`),null;let f=(i=h.colliders)==null?void 0:i.map((_,g)=>{var m,v,b,x,S,T,w,R,M,y,C,N,B,O,V;let L=u[_.node];if(L==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${g} attempted to use the node #${_.node} but not found`),null;let j=_.shape,G=(m=_.extensions)==null?void 0:m[L_];if(this.useExtendedColliders&&G!=null){let se=G.specVersion;if(!dw.has(se))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${L_} specVersion "${se}". Fallbacking to the ${go.EXTENSION_NAME} definition`);else{let $=G.shape;if($.sphere)return this._importSphereCollider(L,{offset:new P().fromArray((v=$.sphere.offset)!=null?v:[0,0,0]),radius:(b=$.sphere.radius)!=null?b:0,inside:(x=$.sphere.inside)!=null?x:!1});if($.capsule)return this._importCapsuleCollider(L,{offset:new P().fromArray((S=$.capsule.offset)!=null?S:[0,0,0]),radius:(T=$.capsule.radius)!=null?T:0,tail:new P().fromArray((w=$.capsule.tail)!=null?w:[0,0,0]),inside:(R=$.capsule.inside)!=null?R:!1});if($.plane)return this._importPlaneCollider(L,{offset:new P().fromArray((M=$.plane.offset)!=null?M:[0,0,0]),normal:new P().fromArray((y=$.plane.normal)!=null?y:[0,0,1])})}}if(j.sphere)return this._importSphereCollider(L,{offset:new P().fromArray((C=j.sphere.offset)!=null?C:[0,0,0]),radius:(N=j.sphere.radius)!=null?N:0,inside:!1});if(j.capsule)return this._importCapsuleCollider(L,{offset:new P().fromArray((B=j.capsule.offset)!=null?B:[0,0,0]),radius:(O=j.capsule.radius)!=null?O:0,tail:new P().fromArray((V=j.capsule.tail)!=null?V:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${g} has no valid shape`)}),p=(s=h.colliderGroups)==null?void 0:s.map((_,g)=>{var m;return{colliders:((m=_.colliders)!=null?m:[]).flatMap(b=>{let x=f?.[b];return x??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${g} attempted to use a collider #${b} but not found`),[])}),name:_.name}});return(o=h.springs)==null||o.forEach((_,g)=>{var m;let v=_.joints,b=(m=_.colliderGroups)==null?void 0:m.map(T=>{let w=p?.[T];if(w==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${T} but not found`);return w}),x=_.center!=null?u[_.center]:void 0,S;v.forEach(T=>{if(S){let w=S.node,R=u[w],M=T.node,y=u[M],C={hitRadius:S.hitRadius,dragForce:S.dragForce,gravityPower:S.gravityPower,stiffness:S.stiffness,gravityDir:S.gravityDir!=null?new P().fromArray(S.gravityDir):void 0},N=this._importJoint(R,y,C,b);x&&(N.center=x),c.addJoint(N)}S=T})}),c.setInitState(),c})}_v0Import(e){return iu(this,null,function*(){var t,n,i;let s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=s.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let u=new I_,h=yield e.parser.getDependencies("node"),d=(i=l.colliderGroups)==null?void 0:i.map(f=>{var p;let _=h[f.node];return{colliders:((p=f.colliders)!=null?p:[]).map((m,v)=>{var b,x,S;let T=new P(0,0,0);return m.offset&&T.set((b=m.offset.x)!=null?b:0,(x=m.offset.y)!=null?x:0,m.offset.z?-m.offset.z:0),this._importSphereCollider(_,{offset:T,radius:(S=m.radius)!=null?S:0,inside:!1})})}});return c?.forEach((f,p)=>{let _=f.bones;_&&_.forEach(g=>{var m,v,b,x;let S=h[g],T=new P;f.gravityDir?T.set((m=f.gravityDir.x)!=null?m:0,(v=f.gravityDir.y)!=null?v:0,(b=f.gravityDir.z)!=null?b:0):T.set(0,-1,0);let w=f.center!=null?h[f.center]:void 0,R={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:T},M=(x=f.colliderGroups)==null?void 0:x.map(y=>{let C=d?.[y];if(C==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${y} but not found`);return C});S.traverse(y=>{var C;let N=(C=y.children[0])!=null?C:null,B=this._importJoint(y,N,R,M);w&&(B.center=w),u.addJoint(B)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,i){let s=new lw(e,t,n,i);if(this.jointHelperRoot){let o=new nw(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){let n=new e0(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importCapsuleCollider(e,t){let n=new Q_(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importPlaneCollider(e,t){let n=new $_(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}};t0.EXTENSION_NAME="VRMC_springBone";var fw=t0,n0=class{get name(){return"VRMLoaderPlugin"}constructor(r,e){var t,n,i,s,o,a,l,c,u,h;this.parser=r;let d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new DT(r),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new NT(r),this.humanoidPlugin=(i=e?.humanoidPlugin)!=null?i:new VT(r,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new Mf(r,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new iE(r),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new xE(r),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new bE(r),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new AE(r),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new fw(r,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new jE(r,{helperRoot:d})}beforeRoot(){return eu(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(r){return eu(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(r)})}getMaterialType(r){let e=this.mtoonMaterialPlugin.getMaterialType(r);return e??null}extendMaterialParams(r,e){return eu(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(r,e),yield this.mtoonMaterialPlugin.extendMaterialParams(r,e)})}afterRoot(r){return eu(this,null,function*(){yield this.metaPlugin.afterRoot(r),yield this.humanoidPlugin.afterRoot(r),yield this.expressionPlugin.afterRoot(r),yield this.lookAtPlugin.afterRoot(r),yield this.firstPersonPlugin.afterRoot(r),yield this.springBonePlugin.afterRoot(r),yield this.nodeConstraintPlugin.afterRoot(r),yield this.mtoonMaterialPlugin.afterRoot(r);let e=r.userData.vrmMeta,t=r.userData.vrmHumanoid;if(e&&t){let n=new sE({scene:r.scene,expressionManager:r.userData.vrmExpressionManager,firstPerson:r.userData.vrmFirstPerson,humanoid:t,lookAt:r.userData.vrmLookAt,meta:e,materials:r.userData.vrmMToonMaterials,springBoneManager:r.userData.vrmSpringBoneManager,nodeConstraintManager:r.userData.vrmNodeConstraintManager});r.userData.vrm=n}})}};function pw(r){let e=new Set;return r.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function D_(r,e,t){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return r[o.index]}let n=new Float32Array(r[0].count*3),i=0;if(t)i=1;else for(let o of e)i+=o.weight;for(let o of e){let a=r[o.index],l=o.weight/i;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Ke(n,3)}function mw(r){var e;let t=pw(r.scene),n=new Map,i=(e=r.expressionManager)==null?void 0:e.expressionMap;if(i!=null)for(let[s,o]of Object.entries(i)){let a=new Set;for(let l of o.binds)if(l instanceof au){if(l.weight!==0)for(let c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let s of t){let o=n.get(s);if(o==null)continue;let a=s.geometry.morphAttributes;s.geometry.morphAttributes={};let l=s.geometry.clone();s.geometry=l;let c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},p=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let _=0;for(let[g,m]of o)u&&(d.position[_]=D_(a.position,m,c)),h&&(d.normal[_]=D_(a.normal,m,c)),i?.[g].addBind(new au({index:_,weight:1,primitives:[s]})),f[g]=_,p.push(0),_++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=p}}function cu(r,e,t){if(r.getComponent)return r.getComponent(e,t);{let n=r.array[e*r.itemSize+t];return r.normalized&&(n=$e.denormalize(n,r.array)),n}}function i0(r,e,t,n){r.setComponent?r.setComponent(e,t,n):(r.normalized&&(n=$e.normalize(n,r.array)),r.array[e*r.itemSize+t]=n)}function gw(r){var e;let t=_w(r),n=new Set;for(let h of t)n.has(h.geometry)&&(h.geometry=Sw(h.geometry)),n.add(h.geometry);let i=new Map;for(let h of n){let d=h.getAttribute("skinIndex"),f=(e=i.get(d))!=null?e:new Map;i.set(d,f);let p=h.getAttribute("skinWeight"),_=xw(d,p);f.set(p,_)}let s=new Map;for(let h of t){let d=vw(h,i);s.set(h,d)}let o=[];for(let[h,d]of s){let f=!1;for(let p of o)if(bw(d,p.boneInverseMap)){f=!0,p.meshes.add(h);for(let[g,m]of d)p.boneInverseMap.set(g,m);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}let a=new Map,l=new pf,c=new pf,u=new pf;for(let h of o){let{boneInverseMap:d,meshes:f}=h,p=Array.from(d.keys()),_=Array.from(d.values()),g=new li(p,_),m=c.getOrCreate(g);for(let v of f){let b=v.geometry.getAttribute("skinIndex"),x=l.getOrCreate(b),S=v.skeleton.bones,T=S.map(M=>u.getOrCreate(M)).join(","),w=`${x};${m};${T}`,R=a.get(w);R==null&&(R=b.clone(),yw(R,S,p),a.set(w,R)),v.geometry.setAttribute("skinIndex",R)}for(let v of f)v.bind(g,new De)}}function _w(r){let e=new Set;return r.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function xw(r,e){let t=new Set;for(let n=0;n<r.count;n++)for(let i=0;i<r.itemSize;i++){let s=cu(r,n,i);cu(e,n,i)!==0&&t.add(s)}return t}function vw(r,e){let t=new Map,n=r.skeleton,i=r.geometry,s=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function bw(r,e){for(let[t,n]of r.entries()){let i=e.get(t);if(i!=null&&!Mw(n,i))return!1}return!0}function yw(r,e,t){let n=new Map;for(let s of e)n.set(s,n.size);let i=new Map;for(let[s,o]of t.entries()){let a=n.get(o);i.set(a,s)}for(let s=0;s<r.count;s++)for(let o=0;o<r.itemSize;o++){let a=cu(r,s,o),l=i.get(a);i0(r,s,o,l)}r.needsUpdate=!0}function Mw(r,e,t){if(t=t||1e-4,r.elements.length!=e.elements.length)return!1;for(let n=0,i=r.elements.length;n<i;n++)if(Math.abs(r.elements[n]-e.elements[n])>t)return!1;return!0}var pf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(r){return this._objectIndexMap.get(r)}getOrCreate(r){let e=this._objectIndexMap.get(r);return e==null&&(e=this._index,this._objectIndexMap.set(r,e),this._index++),e}};function Sw(r){var e,t,n,i;let s=new mt;s.name=r.name,s.setIndex(r.index);for(let[o,a]of Object.entries(r.attributes))s.setAttribute(o,a);for(let[o,a]of Object.entries(r.morphAttributes)){let l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=r.morphTargetsRelative,s.groups=[];for(let o of r.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=r.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(i=(n=r.boundingBox)==null?void 0:n.clone())!=null?i:null,s.drawRange.start=r.drawRange.start,s.drawRange.count=r.drawRange.count,s.userData=r.userData,s}function U_(r){if(Object.values(r).forEach(e=>{e?.isTexture&&e.dispose()}),r.isShaderMaterial){let e=r.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}r.dispose()}function Tw(r){let e=r.geometry;e&&e.dispose();let t=r.skeleton;t&&t.dispose();let n=r.material;n&&(Array.isArray(n)?n.forEach(i=>U_(i)):n&&U_(n))}function Ew(r){r.traverse(Tw)}function ww(r,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let i=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];r.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});let o=new Map,a=0;for(let l of s){let u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;let h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let p=0;p<u.itemSize;p++){let _=cu(u,f,p),g=h.get(_);g==null&&(g=h.size,h.set(_,g),d.set(g,_)),i0(u,f,p,g)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(let l of s){let u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],p=i?a:h.size;for(let g=0;g<p;g++){let m=(n=h.get(g))!=null?n:0;d.push(l.skeleton.bones[m]),f.push(l.skeleton.boneInverses[m])}let _=new li(d,f);l.bind(_,new De)}}function Aw(r){let e=new Map;r.traverse(t=>{var n,i,s,o;if(!t.isMesh)return;let a=t,l=a.geometry,c=l.index;if(c==null)return;let u=e.get(l);if(u!=null){a.geometry=u;return}let h=Object.values(l.attributes)[0].count,d=new Array(h),f=0,p=c.array;for(let x=0;x<p.length;x++){let S=p[x];d[S]||(d[S]=!0,f++)}if(f===h)return;let _=[],g=[],m=0;for(let x=0;x<d.length;x++)if(d[x]){let S=m++;_[x]=S,g[S]=x}let v=new mt;v.name=l.name,v.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(x=>{v.addGroup(x.start,x.count,x.materialIndex)}),v.boundingBox=(i=(n=l.boundingBox)==null?void 0:n.clone())!=null?i:null,v.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,v.setDrawRange(l.drawRange.start,l.drawRange.count),v.userData=l.userData,e.set(l,v);{let x=c.array,S=new x.constructor(x.length);for(let T=0;T<x.length;T++){let w=x[T],R=_[w];S[T]=R}v.setIndex(new Ke(S,1,!1))}Object.keys(l.attributes).forEach(x=>{let S=l.attributes[x];if(S.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let T=S.array,{itemSize:w,normalized:R}=S,M=new T.constructor(g.length*w);g.forEach((y,C)=>{for(let N=0;N<w;N++)M[C*w+N]=T[y*w+N]}),v.setAttribute(x,new Ke(M,w,R))});let b=!0;for(let[x,S]of Object.entries(l.morphAttributes)){let T=x;v.morphAttributes[T]=[];for(let w=0;w<S.length;w++){let R=S[w];if(R.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let M=R.array,{itemSize:y,normalized:C}=R,N=new M.constructor(g.length*y);g.forEach((B,O)=>{for(let V=0;V<y;V++)N[O*y+V]=M[B*y+V]}),b=b&&N.every(B=>B===0),v.morphAttributes[T][w]=new Ke(N,y,C)}}b&&(v.morphAttributes={}),a.geometry=v}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function Rw(r){var e;((e=r.meta)==null?void 0:e.metaVersion)==="0"&&(r.scene.rotation.y=Math.PI)}var Ai=class{constructor(){}};Ai.combineMorphs=mw;Ai.combineSkeletons=gw;Ai.deepDispose=Ew;Ai.removeUnnecessaryJoints=ww;Ai.removeUnnecessaryVertices=Aw;Ai.rotateVRM0=Rw;var du=new De,Cw=new P,r0=new Ee,s0=new Ee,Pw=new Ee;var o0=(r,e)=>{let t=[];for(let n=0;n<r.length;n+=e)t.push(Array.from(r.slice(n,n+e)));return t},Ef=class{constructor(){this.duration=0,this.restHipsPosition=new P,this.translationTracks=new Map,this.rotationTracks=new Map,this.expressionTracks=new Map,this.lookAtTrack=null}createAnimationClip(e){let t=[],n=e.humanoid,i=e.meta.metaVersion==="0";for(let[s,o]of this.rotationTracks){let a=n.getNormalizedBoneNode(s)?.name;if(!a)continue;let l=Array.from(o.values,(c,u)=>i&&u%2===0?-c:c);t.push(new Yn(`${a}.quaternion`,Array.from(o.times),l))}for(let[s,o]of this.translationTracks){let a=n.getNormalizedBoneNode(s)?.name;if(!a)continue;let l=n.normalizedRestPose.hips?.position?.[1]||1,c=this.restHipsPosition.y?l/this.restHipsPosition.y:1,u=o.clone(),h=n.normalizedRestPose.hips?.position||[0,l,0];u.values=u.values.map((d,f)=>{let p=f%3;return s==="hips"&&p!==1?h[p]:(i&&p!==1?-d:d)*c}),u.name=`${a}.position`,t.push(u)}if(e.expressionManager)for(let[s,o]of this.expressionTracks){let a=e.expressionManager.getExpressionTrackName(s);if(!a)continue;let l=o.clone();l.name=a,t.push(l)}if(e.lookAt&&this.lookAtTrack){let s=this.lookAtTrack.clone();s.name="lookAtTargetParent.quaternion",t.push(s)}return new qi("VRMAnimation",this.duration,t)}},wf=class{constructor(e){this.parser=e}get name(){return"VRMC_vrm_animation"}async afterRoot(e){let t=e.parser.json;if(!t.extensionsUsed?.includes(this.name))return;let n=t.extensions?.[this.name];if(!n)return;let i=this.createNodeMap(n),s=await this.createWorldMatrixMap(e,n),o=n.humanoid.humanBones.hips.node,l=(await e.parser.getDependency("node",o)).getWorldPosition(new P);e.userData.vrmAnimations=e.animations.map((c,u)=>{let h=this.parseAnimation(c,t.animations[u],i,s);return h.restHipsPosition.copy(l),h})}createNodeMap(e){let t=new Map,n=new Map;return Object.entries(e.humanoid?.humanBones||{}).forEach(([i,s])=>{t.set(s.node,i)}),Object.entries(e.expressions?.preset||{}).forEach(([i,s])=>{n.set(s.node,i)}),Object.entries(e.expressions?.custom||{}).forEach(([i,s])=>{n.set(s.node,i)}),{humanoid:t,expressions:n,lookAt:e.lookAt?.node??null}}async createWorldMatrixMap(e,t){e.scene.updateWorldMatrix(!1,!0);let n=await e.parser.getDependencies("node"),i=new Map;return Object.entries(t.humanoid.humanBones).forEach(([s,o])=>{let a=n[o.node];i.set(s,a.matrixWorld),s==="hips"&&i.set("hipsParent",a.parent?.matrixWorld||du)}),i}parseAnimation(e,t,n,i){let s=new Ef;return s.duration=e.duration,t.channels.forEach((o,a)=>{let l=o.target.node,c=o.target.path,u=e.tracks[a];if(l==null||!u)return;let h=n.humanoid.get(l);if(h){let f=uu[h];for(;f&&!i.has(f);)f=uu[f];if(f||(f="hipsParent"),c==="translation"){let p=i.get("hipsParent")||du,_=o0(u.values,3).flatMap(m=>Cw.fromArray(m).applyMatrix4(p).toArray()),g=u.clone();g.values=new Float32Array(_),s.translationTracks.set(h,g)}else if(c==="rotation"){let p=i.get(h)||du,_=i.get(f)||du;r0.setFromRotationMatrix(p).normalize().invert(),s0.setFromRotationMatrix(_).normalize();let g=o0(u.values,4).flatMap(v=>Pw.fromArray(v).premultiply(s0).multiply(r0).toArray()),m=u.clone();m.values=new Float32Array(g),s.rotationTracks.set(h,m)}return}let d=n.expressions.get(l);if(d&&c==="translation"){let f=new Float32Array(u.values.length/3);for(let p=0;p<f.length;p+=1)f[p]=u.values[p*3];s.expressionTracks.set(d,new qn(`${d}.weight`,u.times,f));return}l===n.lookAt&&c==="rotation"&&(s.lookAtTrack=u)}),s}},a0=new uo;a0.register(r=>new wf(r));async function Af(r){return(await a0.loadAsync(r)).userData.vrmAnimations?.[0]||null}var Iw=.5,Lw=.05,l0=5,c0=new P,u0=new Ee,h0=new Kt,Rf=class extends hu{constructor(e,t){super(e,t),this.smoothFactor=4,this.userLimitAngle=90,this.userTarget=null,this.enableSaccade=!0,this.saccadeYaw=0,this.saccadePitch=0,this.saccadeTimer=0,this.yawDamped=0,this.pitchDamped=0,this.tempHeadRotation=new Ee}reset(){super.reset(),this.yawDamped=0,this.pitchDamped=0,this.saccadeYaw=0,this.saccadePitch=0,this.saccadeTimer=0,this.userTarget=null}update(e){if(this.target&&this.autoUpdate){this.lookAt(this.target.getWorldPosition(c0));let t=this._yaw,n=this._pitch,i=t,s=n;if(this.userTarget){this.lookAt(this.userTarget.getWorldPosition(c0)),(this.userLimitAngle<Math.abs(this._yaw)||this.userLimitAngle<Math.abs(this._pitch))&&(this._yaw=t,this._pitch=n);let o=1-Math.exp(-this.smoothFactor*e);this.yawDamped+=(this._yaw-this.yawDamped)*o,this.pitchDamped+=(this._pitch-this.pitchDamped)*o;let a=1-$e.smoothstep(Math.sqrt(t**2+n**2),30,90);i=$e.lerp(t,.6*this.yawDamped,a),s=$e.lerp(n,.6*this.pitchDamped,a),h0.set(-this.pitchDamped*$e.DEG2RAD,this.yawDamped*$e.DEG2RAD,0,hu.EULER_ORDER),u0.setFromEuler(h0);let l=this.humanoid.getRawBoneNode("head");l&&(this.tempHeadRotation.copy(l.quaternion),l.quaternion.slerp(u0,.4),l.updateMatrixWorld())}this.enableSaccade&&(this.saccadeTimer>Iw&&Math.random()<Lw&&(this.saccadeYaw=(2*Math.random()-1)*l0,this.saccadePitch=(2*Math.random()-1)*l0,this.saccadeTimer=0),this.saccadeTimer+=e,i+=this.saccadeYaw,s+=this.saccadePitch,this.applier.applyYawPitch(i,s)),this._needsUpdate=!1}this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}revertFirstPersonBoneQuat(){if(!this.userTarget)return;let e=this.humanoid.getNormalizedBoneNode("head");e&&e.quaternion.copy(this.tempHeadRotation)}},fu=class extends Mf{get name(){return"VRMLookAtSmootherLoaderPlugin"}async afterRoot(e){await super.afterRoot(e);let t=e.userData.vrmHumanoid,n=e.userData.vrmLookAt;if(t&&n){let i=new Rf(t,n.applier);i.copy(n),e.userData.vrmLookAt=i}}};var Dw=.12,Uw=5,Cf=class{constructor(e){this.expressionManager=e,this.remainingTime=0,this.isOpen=!0,this.isAutoBlink=!0}setEnable(e){return this.isAutoBlink=e,this.isOpen?0:this.remainingTime}update(e){if(this.remainingTime>0){this.remainingTime-=e;return}this.isOpen&&this.isAutoBlink?this.close():this.open()}close(){this.isOpen=!1,this.remainingTime=Dw,this.expressionManager.setValue("blink",1)}open(){this.isOpen=!0,this.remainingTime=Uw,this.expressionManager.setValue("blink",0)}},Pf=class{constructor(e,t){this.lookAtTarget=new lt,t.add(this.lookAtTarget),e.lookAt&&(e.lookAt.target=this.lookAtTarget)}dispose(){this.lookAtTarget.removeFromParent()}},If=class{constructor(e,t){this.autoLookAt=new Pf(e,t),this.expressionManager=e.expressionManager||null,this.autoBlink=this.expressionManager?new Cf(this.expressionManager):null,this.currentEmotion="neutral",this.currentLipSync=null,this.emotionTimer=0}playEmotion(e){if(this.currentEmotion!=="neutral"&&this.expressionManager?.setValue(this.currentEmotion,0),e==="neutral"){this.autoBlink?.setEnable(!0),this.currentEmotion=e;return}let t=this.autoBlink?.setEnable(!1)||0;this.currentEmotion=e,window.clearTimeout(this.emotionTimer),this.emotionTimer=window.setTimeout(()=>this.expressionManager?.setValue(e,1),t*1e3)}lipSync(e,t){this.currentLipSync&&this.expressionManager?.setValue(this.currentLipSync.preset,0),this.currentLipSync={preset:e,value:t}}update(e){if(this.autoBlink?.update(e),this.currentLipSync){let t=this.currentEmotion==="neutral"?this.currentLipSync.value*.5:this.currentLipSync.value*.25;this.expressionManager?.setValue(this.currentLipSync.preset,t)}}dispose(){window.clearTimeout(this.emotionTimer),this.autoLookAt.dispose()}},pu=class{constructor(e,t){this.expressionController=new If(e,t)}playEmotion(e){this.expressionController.playEmotion(e)}lipSync(e,t){this.expressionController.lipSync(e,t)}update(e){this.expressionController.update(e)}dispose(){this.expressionController.dispose()}};var Nw=["talk","happy","sad","angry","fear","surprised"],d0=["neutral","happy","angry","sad","relaxed"],Ga={speakerX:3,speakerY:3},f0={A:{speakerX:4.5,speakerY:10},B:{speakerX:3,speakerY:3},C:{speakerX:-5.5,speakerY:-3},D:{speakerX:3.5,speakerY:-8}},mu=class{constructor(e){this.audio=e,this.analyser=e.createAnalyser(),this.timeDomainData=new Float32Array(2048),this.playing=!1}update(){this.analyser.getFloatTimeDomainData(this.timeDomainData);let e=0;for(let t=0;t<2048;t+=1)e=Math.max(e,Math.abs(this.timeDomainData[t]));return e=1/(1+Math.exp(-45*e+5)),e<.1&&(e=0),{volume:e}}async playFromArrayBuffer(e,t){this.audio.state==="suspended"&&await this.audio.resume();let n=await this.audio.decodeAudioData(e.slice(0)),i=this.audio.createBufferSource();return i.buffer=n,i.connect(this.audio.destination),i.connect(this.analyser),this.playing=!0,new Promise(s=>{i.addEventListener("ended",()=>{this.playing=!1,t?.(),s()},{once:!0}),i.start()})}async playFromURL(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`Audio unavailable: ${n.status}`);return this.playFromArrayBuffer(await n.arrayBuffer(),t)}close(){return this.audio.close()}},gu=r=>String(r).split(/(?<=[。．！？\n])/g).filter(Boolean),Ow=r=>r==="angry"||r==="happy"||r==="sad"?r:"talk",_u=(r,e=Ga)=>{let t="neutral";return r.map(n=>{let s=n.match(/\[(.*?)\]/)?.[1]||t,o=n.replace(/\[(.*?)\]/g,"");return d0.includes(s)&&(t=s),{expression:t,talk:{style:Ow(t),speakerX:e.speakerX,speakerY:e.speakerY,message:o}}})},Lf=r=>["talk","happy","sad"].includes(r)?r:"talk";async function Df(r,e,t,n){let i=await fetch("https://router.huggingface.co/fal-ai/fal-ai/kokoro/american-english",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,speaker_x:e,speaker_y:t,style:n})});if(!i.ok)throw new Error(`Voice synthesis failed: ${i.status}`);return{audio:(await i.json()).audio}}async function p0(r,e,t,n,i){let s=await fetch("https://router.huggingface.co/fal-ai/fal-ai/kokoro/american-english",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({text:r,speaker_x:e,speaker_y:t,style:n,output_format:"mp3"})});if(!s.ok)throw new Error(`Voice synthesis failed: ${s.status}`);return{audio:(await s.json()).audio}}async function m0(r,e,t,n){return Df(r,e,t,n)}async function Uf(r,e,t,n,i){let s=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r,speakerX:e,speakerY:t,style:Lf(n),apiKey:i})});if(!s.ok)throw new Error(`TTS endpoint unavailable: ${s.status}`);return{audio:(await s.json()).audio.url}}async function Nf(r,e){let t=await Uf(r.message,r.speakerX,r.speakerY,r.style,e);if(!t.audio)throw new Error("Voice synthesis returned no audio");let n=await fetch(t.audio);if(!n.ok)throw new Error(`Audio unavailable: ${n.status}`);return n.arrayBuffer()}function Fw(){let r=0,e=Promise.resolve(),t=Promise.resolve();return(n,i,s,o,a)=>{let l=e.then(async()=>{let c=Date.now()-r;c<1e3&&await new Promise(h=>setTimeout(h,1e3-c));let u=await Nf(n.talk,s).catch(()=>null);return r=Date.now(),u});return e=l,t=Promise.all([l,t]).then(([c])=>(o?.(),c?i.speak(c,n):void 0)),t.then(()=>a?.()),t}}var Of=Fw(),g0=Object.freeze([...Nw]),_0=Object.freeze([...d0]);function x0(r,e,t,n){let i=r.querySelector("[data-about-canvas]"),s=i?.closest(".about-avatar"),o=r.querySelector("[data-about-loader]"),a=r.querySelector("[data-about-load-error]"),l=r.querySelector("[data-about-load-retry]"),c=r.dataset.modelUrl,u={idle:r.dataset.idleUrl,greeting:r.dataset.greetingUrl,reload:r.dataset.reloadUrl},h=2.2,d={};try{d=JSON.parse(r.dataset.actionUrls||"{}")}catch{d={}}if(!i||!s||!c)return;let f=window.MinosAvatarAssets,p=f?.renderer;p?.getContext().isContextLost()&&(p.dispose(),p=null);try{p||(p=new Zc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}))}catch(k){s.classList.add("is-error"),a&&(a.hidden=!1,a.textContent="WebGL is unavailable. Enable hardware acceleration and reload."),console.warn("About WebGL unavailable.",k);return}p.domElement!==i&&(i.replaceWith(p.domElement),i=p.domElement),f&&(f.renderer=p),p.setClearColor(0,0),p.outputColorSpace=Ot;let _=new aa,g=1.8,m=new Ht(20,1,.1,20);m.name="lookAtTargetParent",m.position.set(0,1.3,g),_.add(m);let v=new qr(16777215,Math.PI*.6);v.position.set(1,1,1).normalize(),_.add(v),_.add(new ya(16777215,Math.PI*.4));let b=new lt,x=new P(0,0,-2.5),S=new Ea,T=new je;b.position.copy(x),m.add(b);let w=new Sa,R=new P,M=new P,y=new P,C=new Map,N=new Map,B=[null,{filename:"VRMA_01.vrma",start:.8,time:1.4},{filename:"VRMA_03.vrma",start:.35,time:1.4},{filename:"VRMA_06.vrma",start:1.35,time:2.2},{filename:"VRMA_06.vrma",start:3.3,time:4.05},{filename:"VRMA_07.vrma",start:5.3,time:6.1},{filename:"VRMA_04.vrma",start:.85,time:1.4}],O=null,V=null,L={},j=null,G=null,se=null,$=null,ue=0,Re=0,Ne=Number(r.dataset.aboutSectionIndex)||0,Fe=null,Ye=null,X=0,ee=!0,he=!1,we=!0,ve=6,Ve=!1,dt=0,D=.075,tt=-.04,Ue=0,Le="",me=!1,ot=(k,ne)=>f?f.parse(k,ne):ne(k),ye=window.MinosRouter?.whenRevealed?.()||Promise.resolve(),ze=Promise.resolve(ye).then(()=>new Promise(k=>{requestAnimationFrame(()=>requestAnimationFrame(k))}));f?.preload();let yt=()=>{s.classList.remove("is-ready"),s.classList.remove("is-error"),r.dataset.avatarState="loading",o?.classList.remove("is-hidden"),a&&(a.hidden=!0),l&&(l.hidden=!0)},ut=k=>{he||(r.dataset.avatarState="error",s.classList.remove("is-ready"),s.classList.add("is-error"),o?.classList.remove("is-hidden"),a&&(a.hidden=!1,a.textContent="Avatar could not load. Please try again."),l&&(l.hidden=!1),console.warn("About avatar loading failed.",k))},I=()=>{o?.classList.add("is-hidden"),s.classList.remove("is-error"),s.classList.add("is-ready"),r.dataset.avatarState="ready"},E=()=>{let k=s.getBoundingClientRect();if(!k.width||!k.height)return;p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),p.setSize(k.width,k.height,!1),m.aspect=k.width/k.height,m.position.z=g*Math.max(1,.8/m.aspect),m.position.x=dt+D,m.updateProjectionMatrix();let ne=O?.humanoid?.getNormalizedBoneNode("head");ne?ne.getWorldPosition(y):y.set(dt,m.position.y-tt,0),m.updateMatrixWorld(),y.project(m),o?.style.setProperty("--about-loader-center-x",`${(y.x+1)*50}%`),o?.style.setProperty("--about-loader-center-y",`${(1-y.y)*50}%`)},z=()=>{if(!O?.humanoid){dt=0;return}O.scene.updateMatrixWorld(!0);let ne=O.humanoid.getNormalizedBoneNode("head")?.getWorldPosition(new P),Je=O.scene.getWorldPosition(new P);dt=ne?.x??Je.x,ne&&(m.position.y=ne.y+tt),E()},J=k=>{if(!O?.humanoid)return;let ne=O.humanoid.getNormalizedBoneNode("head");if(!ne)return;ne.getWorldPosition(M);let Je=1-Math.exp(-k*10);dt=M.x;let wt=dt+D;m.position.x+=(wt-m.position.x)*Je,m.position.y+=(M.y+tt-m.position.y)*Je},ie=()=>{if(he||!ee){X=0;return}X=requestAnimationFrame(ie);let k=Math.min(w.getDelta(),.05);b.position.lerp(x,1-Math.exp(-k*ve)),Ye?.playing&&Fe?.lipSync("aa",Ye.update().volume),Fe?.update(k),V?.update(k),$&&$.time>=ue&&$.getEffectiveTimeScale()!==0&&($.time=ue,$.setEffectiveTimeScale(0),V.update(0)),O?.update(k),J(k),p.render(_,m)},Y=()=>{!X&&!he&&(w.start(),X=requestAnimationFrame(ie))},Se=()=>{X&&cancelAnimationFrame(X),X=0,w.stop()},re=()=>{N.forEach(clearTimeout),N.clear(),V?.stopAllAction(),Fe?.dispose(),O&&(_.remove(O.scene),me?(O.humanoid?.resetNormalizedPose(),O.expressionManager?.resetValues(),O.lookAt&&(O.lookAt.target=null,O.lookAt.reset()),O.update(0),O.springBoneManager?.reset()):Ai.deepDispose(O.scene)),me=!1,O=null,V=null,L={},j=null,G=null,se=null,$=null,C.clear(),Fe=null},be=k=>{N.has(k)&&(clearTimeout(N.get(k)),N.delete(k))},ge=(k,ne)=>{if(k){if(be(k),!ne){k.stop();return}k.fadeOut(ne),N.set(k,window.setTimeout(()=>{N.delete(k),k.stop()},ne*1e3+50))}},ae=k=>{if(!G)return;se&&V?.removeEventListener("finished",se);let ne=G;G=null,se=null,ge(ne,k)},pe=k=>{j&&(be(j),j.reset().setEffectiveWeight(1).play(),k&&j.fadeIn(k))},Pe=k=>{let ne=d[k];return ne?ot(ne,Af):Promise.resolve(null)},Me=()=>{let k=t?0:.45;Re+=1,ae(k);let ne=$;$=null,ge(ne,k),pe(k),we=!0,x.set(0,0,-2.5)},oe=async k=>{Ne=Math.max(0,Math.min(B.length-1,Number(k)||0));let ne=B[Ne];if(!ne)return Me(),!0;if(!O||!V)return!1;let Je=++Re,wt=O;try{let Xe=await Pe(ne.filename);if(he||Je!==Re||wt!==O)return!1;if(!Xe)return Me(),!1;let xt=C.get(ne);xt||(xt=Xe.createAnimationClip(O),C.set(ne,xt));let at=t?0:.45;ae(at);let tn=$,ht=V.clipAction(xt);return tn&&tn!==ht&&ge(tn,at),j?.fadeOut(at),be(ht),ht.reset(),ht.enabled=!0,ht.setLoop(La,1),ht.clampWhenFinished=!0,ue=Math.min(ne.time,Math.max(0,xt.duration-.001)),ht.time=t?ue:Math.min(ne.start,ue),ht.setEffectiveWeight(1).setEffectiveTimeScale(t?0:1).play(),at&&ht.fadeIn(at),$=ht,we=!0,x.set(0,0,-2.5),!0}catch(Xe){return console.warn(`About pose unavailable: ${ne.filename}`,Xe),!he&&Je===Re&&wt===O&&Me(),!1}},_e=(k,ne=.3,Je=0)=>{if(!k||!V||!O||G)return!1;Re+=1,we=!1,x.set(0,0,-2.5);let wt=$;$=null,ge(wt,ne),ne?j?.fadeOut(ne):j?.stop();let Xe=V.clipAction(k);be(Xe),G=Xe,Xe.setLoop(La,1),Xe.clampWhenFinished=!0,Xe.reset(),Xe.time=Math.min(Math.max(0,Je),Math.max(0,k.duration-.001)),Xe.setEffectiveWeight(1).setEffectiveTimeScale(1).play(),ne&&Xe.fadeIn(ne);let xt=at=>{at.action===Xe&&(V.removeEventListener("finished",xt),O.scene.position.copy(R),we=!0,se=null,Ne===0?Me():oe(Ne))};return se=xt,V.addEventListener("finished",xt),!0},U=async k=>{if(!d[k]||G||!O)return!1;try{let ne=await Pe(k);return ne&&!he?_e(ne.createAnimationClip(O)):!1}catch(ne){return console.warn(`About motion unavailable: ${k}`,ne),!1}},te=()=>{if(Ye)return Ye;let k=window.AudioContext||window.webkitAudioContext;if(!k)throw new Error("Web Audio is unavailable");return Ye=new mu(new k),Ye},Q=k=>ot(u[k],Af),le=()=>{let k=new uo;return k.setMeshoptDecoder(Qg),k.register(ne=>new n0(ne,{lookAtPlugin:new fu(ne)})),k};async function Z(k,ne={}){let Je=++Ue;yt(),re();let wt=ne.greeting&&!t?Q("greeting").catch(at=>(console.warn("About motion unavailable: greeting",at),null)):Promise.resolve(null),Xe=k===c&&!!f,xt=async at=>{let ht=(await le().loadAsync(at)).userData.vrm;if(!ht)throw new Error("No VRM model found");return Ai.rotateVRM0(ht),ht.scene.name="VRMRoot",ht.scene.traverse(ln=>{ln.frustumCulled=!1}),{model:ht,position:ht.scene.position.clone(),quaternion:ht.scene.quaternion.clone(),scale:ht.scene.scale.clone()}};try{let at=await(Xe?ot(k,xt):xt(k));if(he||Je!==Ue)return Xe||Ai.deepDispose(at.model.scene),!1;O=at.model,me=Xe,O.scene.position.copy(at.position),O.scene.quaternion.copy(at.quaternion),O.scene.scale.copy(at.scale),R.copy(O.scene.position),_.add(O.scene),V=new Ta(O.scene),Fe=new pu(O,m),O.lookAt&&(O.lookAt.target=b),z();let tn=await Q("idle");if(he||Je!==Ue)return!1;if(!tn)throw new Error("Idle animation unavailable");if(L={idle:tn.createAnimationClip(O),greeting:null,reload:null},L.idle&&(j=V.clipAction(L.idle),j.setLoop(Wc,1/0).play()),ne.greeting&&!t&&Ne===0){let ht=await new Promise(ln=>{let Ui=window.setTimeout(()=>ln(null),1500);wt.then(xs=>{clearTimeout(Ui),ln(xs)})});if(he||Je!==Ue)return!1;ht&&Ne===0&&(L.greeting=ht.createAnimationClip(O),_e(L.greeting,0,h))}return V.update(0),O.update(0),z(),p.render(_,m),I(),["greeting","reload"].forEach(ht=>{Q(ht).then(ln=>{!he&&Je===Ue&&(L[ht]=ln?.createAnimationClip(O)||null)}).catch(ln=>console.warn(`About motion unavailable: ${ht}`,ln))}),n(()=>{Promise.allSettled(Object.keys(d).map(Pe))},500),Ne!==0&&oe(Ne),ne.objectUrl&&(Le&&URL.revokeObjectURL(Le),Le=ne.objectUrl),!0}catch(at){throw console.warn("About avatar unavailable.",at),at}}let K={get model(){return O},get actions(){return Object.keys(d)},playAnimation:U,playGreeting:()=>_e(L.greeting,.3,h),playReload:()=>_e(L.reload),playEmotion:k=>Fe?.playEmotion(k),resetPosition:()=>O?.scene.position.copy(R),setLookAtEnabled:k=>{we=!!k,we||x.set(0,0,-2.5)},setLookAtSpeed:k=>{ve=Math.max(.1,Number(k)||.1)},lookAt:k=>{!we||!k||x.set(k.x||0,k.y||0,k.z??-2.5)},lookAtCamera:()=>x.set(0,0,-2.5),createScreenplay:(k,ne=Ga)=>_u(gu(k),ne),voice:{defaultParam:Ga,presets:f0,talkStyles:g0,emotions:_0,splitSentence:gu,textsToScreenplay:_u,reduceTalkStyle:Lf,synthesizeVoice:m0,synthesizeVoiceApi:Uf,koeiromapV0:Df,koeiromapFreeV1:p0,fetchAudio:Nf,speakCharacter:Of},speak:async(k,ne={expression:"neutral"})=>{O&&(Fe?.playEmotion(ne.expression||"neutral"),await te().playFromArrayBuffer(k))},speakFromURL:async(k,ne={expression:"neutral"})=>{O&&(Fe?.playEmotion(ne.expression||"neutral"),await te().playFromURL(k))},speakText:(k,ne,Je=Ga)=>{let wt=_u(gu(k),Je);return Promise.all(wt.map(Xe=>Of(Xe,K,ne)))},loadModel:k=>Z(k,{greeting:!1}),unloadModel:re};r.aboutCharacter=K;let de=new IntersectionObserver(k=>{ee=k.some(ne=>ne.isIntersecting),ee&&!document.hidden?Y():Se()},{threshold:.01});de.observe(r),e.listen(window,"resize",E,{passive:!0}),e.listen(document,"visibilitychange",()=>{document.hidden?Se():ee&&Y()}),e.listen(i,"webglcontextlost",k=>{k.preventDefault(),Se(),ut(new Error("WebGL context lost"))}),e.listen(i,"webglcontextrestored",()=>{O&&j&&I(),Y()}),e.listen(i,"pointerenter",()=>{Ve=!0}),e.listen(i,"pointermove",k=>{if(!we)return;let ne=i.getBoundingClientRect(),Je=(k.clientX-ne.left)/ne.width*2-1,wt=-((k.clientY-ne.top)/ne.height*2-1);x.set(Je*.72,wt*.5,-2.35)}),e.listen(i,"pointerleave",()=>{Ve=!1,x.set(0,0,-2.5)}),e.listen(i,"click",k=>{if(!O||G||!L.reload)return;let ne=i.getBoundingClientRect();T.set((k.clientX-ne.left)/ne.width*2-1,-((k.clientY-ne.top)/ne.height*2-1)),S.setFromCamera(T,m),S.intersectObject(O.scene,!0).length&&_e(L.reload)}),e.listen(i,"dragover",k=>k.preventDefault()),e.listen(i,"drop",k=>{k.preventDefault();let ne=k.dataTransfer?.files?.[0];if(!ne||ne.name.split(".").pop()?.toLowerCase()!=="vrm")return;let Je=URL.createObjectURL(new Blob([ne],{type:"application/octet-stream"}));Z(Je,{greeting:!1,objectUrl:Je}).catch(()=>URL.revokeObjectURL(Je))}),e.listen(r,"about:reply",()=>{G||(Fe?.playEmotion("happy"),n(()=>Fe?.playEmotion("neutral"),1100))}),e.listen(r,"about:motion",k=>{k.detail?.filename&&U(k.detail.filename)}),e.listen(r,"about:sectionchange",k=>{oe(k.detail?.index)}),e.listen(r,"about:emotion",k=>{k.detail?.expression&&Fe?.playEmotion(k.detail.expression)}),e.listen(r,"about:speak",k=>{let ne=k.detail||{};ne.buffer?K.speak(ne.buffer,ne.screenplay):ne.url&&K.speakFromURL(ne.url,ne.screenplay)});let Ae=()=>{n(()=>{!he&&we&&!Ve&&!G&&(x.set((Math.random()-.5)*.55,(Math.random()-.5)*.28,-2.5),n(()=>{!Ve&&!G&&x.set(0,0,-2.5)},1800+Math.random()*1700)),he||Ae()},3500+Math.random()*3500)};E(),Y(),Ae();let ke=()=>ze.then(()=>he?!1:Z(c,{greeting:!0})).catch(ut);l&&e.listen(l,"click",()=>{if(p.getContext().isContextLost()){location.reload();return}l.hidden=!0,ke()}),ke(),e.cleanup(()=>{he=!0,Ue+=1,Se(),de.disconnect(),re(),Le&&URL.revokeObjectURL(Le),Ye?.close().catch(()=>{}),r.aboutCharacter===K&&delete r.aboutCharacter,f?p.renderLists.dispose():p.dispose()})}function Zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function w0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},Pi=1e8,_t=1/Pi,Gf=Math.PI*2,Bw=Gf/4,kw=0,A0=Math.sqrt,Hw=Math.cos,Vw=Math.sin,en=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},hi=function(e){return typeof e=="number"},Eu=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},En=function(e){return e!==!1},R0=function(){return typeof window<"u"},v0=function(e){return Jt(e)||en(e)},C0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zn=Array.isArray,Wf=/(?:-?\.?\d|\.)+/gi,Jf=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ff=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,Zf=/[+-]=-?[\.\d]+/,P0=/[#\-+.]*\b[a-z\d-=+%.]+/gi,zt,Ri,Xf,I0,kn={},bu={},L0,D0=function(e){return(bu=yo(e,kn))&&$n},wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},U0=function(e,t){return!t&&console.warn(e)},N0=function(e,t){return e&&(kn[e]=t)&&bu&&(bu[e]=t)||kn},Ka=function(){return 0},Qf={},br=[],qf={},O0,Tn={},Bf={},b0=30,xu=[],$f="",ep=function(e){var t=e[0],n,i;if($i(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xu.length;i--&&!xu[i].targetTest(t););n=xu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sp(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||ep(Ci(e))[0]._gsap},tp=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():Eu(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},rt=function(e){return Math.round(e*1e5)/1e5||0},zw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},qa=function(e,t,n){var i=hi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o;n&&!("immediateRender"in a);)a=n.vars.defaults||{},n=En(n.vars.inherit)&&n.parent;o.immediateRender=En(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return o},yu=function(){var e=br.length,t=br.slice(0),n,i;for(qf={},br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},F0=function(e,t,n,i){br.length&&yu(),e.render(t,n,i),br.length&&yu()},B0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(P0).length<2?t:en(e)?e.trim():e},k0=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gw=function(e,t){for(var n in t)n in e||n==="duration"||n==="ease"||(e[n]=t[n])},yo=function(e,t){for(var n in t)e[n]=t[n];return e},y0=function r(e,t){for(var n in t)e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n];return e},Yf=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vu=function(e){var t=e.parent||zt,n=e.keyframes?Gw:Qn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ww=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Xw=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Au=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},os=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yw=function r(e){return!e||e._ts&&r(e.parent)},M0=function(e){return e._repeat?Mo(e._tTime,e=e.duration()+e._rDelay)*e:0},Mo=function(e,t){return(e/=t)&&~~e===e?~~e-1:~~e},Mu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},np=function(e){return e._end=rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},H0=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rt(e._dp._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),np(e),n._dirty||os(n,e)),e},ip=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Mu(e.rawTime(),t),(!t._dur||Ja(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),os(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},Qi=function(e,t,n,i){return t.parent&&Mr(t),t._start=rt(n+t._delay),t._end=rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xw(e,t,"_first","_last",e._sort?"_start":0),e._recent=t,i||ip(e,t),e},V0=function(e,t){return(kn.ScrollTrigger||wu("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},z0=function(e,t,n,i){if(pA(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&O0!==On.frame)return br.push(e),e._lazy=[t,i],1},jw=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&s&&!e._start&&e._zTime>_t&&!e._dp._lock||(e._ts<0||e._dp._ts<0)&&e.data!=="isFromStart"&&e.data!=="isStart"?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ja(0,e._tDur,t),u=Mo(l,a),h=Mo(e._tTime,a),u!==h&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&z0(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,n||Fn(e,"onStart"),c=e._pt;c;)c.r(o,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Mr(e,1),n||(Fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Kw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(!i._dur&&i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(!i._dur&&i.data==="isPause"&&i._start<t)return i;i=i._prev}},So=function(e,t,n,i){var s=e._repeat,o=rt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:rt(o*(s+1)+e._rDelay*s):o,a&&!i?H0(e,e._tTime=e._tDur*a):e.parent&&np(e),n||os(e.parent,e),e},S0=function(e){return e instanceof an?os(e):So(e,e._dur)},Jw={_start:0,endTime:Ka},mn=function r(e,t){var n=e.labels,i=e._recent||Jw,s=e.duration()>=Pi?i.endTime(!1):e._dur,o,a;return en(t)&&(isNaN(t)||t in n)?(o=t.charAt(0),o==="<"||o===">"?(o==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0):(o=t.indexOf("="),o<0?(t in n||(n[t]=s),n[t]):(a=+(t.charAt(o-1)+t.substr(o+1)),o>1?r(e,t.substr(0,o-1))+a:s+a))):t==null?s:+t},Sr=function(e,t){return e||e===0?t(e):t},Ja=function(e,t,n){return n<e?e:n>t?t:n},di=function(e){return(e=(e+"").substr((parseFloat(e)+"").length))&&isNaN(e)?e:""},Zw=function(e,t,n){return Sr(n,function(i){return Ja(e,t,i)})},jf=[].slice,G0=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Ri},Qw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return en(i)&&!t||G0(i,1)?(s=n).push.apply(s,Ci(i)):n.push(i)})||n},Ci=function(e,t){return en(e)&&!t&&(Xf||!To())?jf.call(I0.querySelectorAll(e),0):Zn(e)?Qw(e,t):G0(e)?jf.call(e,0):e?[e]:[]},W0=function(e){return e.sort(function(){return .5-Math.random()})},X0=function(e){if(Jt(e))return e;var t=$i(e)?e:{each:e},n=vo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,p){var _=(p||t).length,g=o[_],m,v,b,x,S,T,w,R,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!M){for(w=-Pi;w<(w=p[M++].getBoundingClientRect().left)&&M<_;);M--}for(g=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,v=l?_*h/M-.5:i/M|0,w=0,R=Pi,T=0;T<_;T++)b=T%M-m,x=v-(T/M|0),g[T]=S=c?Math.abs(c==="y"?x:b):A0(b*b+x*x),S>w&&(w=S),S<R&&(R=S);i==="random"&&W0(g),g.max=w-R,g.min=R,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=di(t.amount||t.each)||0,n=n&&_<0?Q0(n):n}return _=(g[d]-g.min)/g.max||0,rt(g.b+(n?n(_):_)*g.v)+g.u}},Kf=function(e){var t=e<1?Math.pow(10,(e+"").length-2):1;return function(n){return Math.floor(Math.round(parseFloat(n)/e)*e*t)/t+(hi(n)?0:di(n))}},q0=function(e,t){var n=Zn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||Pi,e.values?(e=Ci(e.values),(s=!hi(e[0]))&&(i*=i)):e=Kf(e.increment)),Sr(t,n?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||hi(o)?u:u+di(o)}:Kf(e))},Y0=function(e,t,n,i){return Sr(Zn(e)?!t:n===!0?!!(n=0):!i,function(){return Zn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e+Math.random()*(t-e))/n)*n*i)/i})},$w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},eA=function(e,t){return function(n){return e(parseFloat(n))+(t||di(n))}},tA=function(e,t,n){return K0(e,t,0,1,n)},j0=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},nA=function r(e,t,n){var i=t-e;return Zn(e)?j0(e,r(0,e.length),t):Sr(n,function(s){return(i+(s-e)%i)%i+e})},iA=function r(e,t,n){var i=t-e,s=i*2;return Zn(e)?j0(e,r(0,e.length-1),t):Sr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Za=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?P0:Wf),n+=e.substr(t,i-t)+Y0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},K0=function(e,t,n,i,s){var o=t-e,a=i-n;return Sr(s,function(l){return n+((l-e)/o*a||0)})},rA=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=en(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Zn(e)&&!Zn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var _=Math.min(d,~~p);return u[_](p-_)},n=t}else i||(e=yo(Zn(e)?[]:{},e));if(!u){for(l in t)op.call(a,e,l,"get",t[l]);s=function(p){return up(p,a)||(o?e.p:e)}}}return Sr(n,s)},T0=function(e,t,n){var i=e.labels,s=Pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(e,t,n){var i=e.vars,s=i[t],o,a;if(s)return o=i[t+"Params"],a=i.callbackScope||e,n&&br.length&&yu(),o?s.apply(a,o):s.call(a)},Wa=function(e){return Mr(e),e.progress()<1&&Fn(e,"onInterrupt"),e},_o,sA=function(e){e=!e.name&&e.default||e;var t=e.name,n=Jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ka,render:up,add:op,kill:yA,modifier:bA,rawVars:0},o={targetTest:0,get:0,getSetter:Ru,aliases:{},register:0};if(To(),e!==i){if(Tn[t])return;Qn(i,Qn(Yf(e,s),o)),yo(i.prototype,yo(s,Yf(e,o))),Tn[i.prop=t]=i,e.targetTest&&(xu.push(i),Qf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}N0(t,i),e.register&&e.register($n,i,gn)},Rt=255,Xa={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},kf=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},J0=function(e,t,n){var i=e?hi(e)?[e>>16,e>>8&Rt,e&Rt]:0:Xa.black,s,o,a,l,c,u,h,d,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xa[e])i=Xa[e];else if(e.charAt(0)==="#")e.length===4&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a),e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Rt,e&Rt];else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Wf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=kf(l+1/3,s,o),i[1]=kf(l,s,o),i[2]=kf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Jf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wf)||Xa.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Rt,o=i[1]/Rt,a=i[2]/Rt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Z0=function(e){var t=[],n=[],i=-1;return e.split(xo).forEach(function(s){var o=s.match(as)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},E0=function(e,t,n){var i="",s=(e+i).match(xo),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=J0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Z0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xo,"1").split(as),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xo),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},xo=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",e;for(e in Xa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),oA=/hsl[a]?\(/,rp=function(e){var t=e.join(" "),n;if(xo.lastIndex=0,xo.test(t))return n=oA.test(t),e[1]=E0(e[1],n),e[0]=E0(e[0],n,Z0(e[1])),!0},Su,On=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,p=function _(g){var m=r()-i,v=g===!0,b,x,S,T;if(m>e&&(n+=m-t),i+=m,S=i-n,b=S-o,(b>0||v)&&(T=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,o+=b+(b>=s?4:s-b),x=1),v||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](S,d,T,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){L0&&(!Xf&&R0()&&(Ri=Xf=window,I0=Ri.document||{},kn.gsap=$n,(Ri.gsapVersions||(Ri.gsapVersions=[])).push($n.version),D0(bu||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),u=Ri.requestAnimationFrame),l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Su=1,p(2))},sleep:function(){(u?Ri.cancelAnimationFrame:clearTimeout)(l),Su=0,c=Ka},lagSmoothing:function(g,m){e=g||1/_t,t=Math.min(m,e,0)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g){a.indexOf(g)<0&&a.push(g),To()},remove:function(g){var m;~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h})(),To=function(){return!Su&&On.wake()},ct={},aA=/^[\d.\-M][\d.\-,\s]/,lA=/["']/g,cA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(lA,"").trim():+c,i=l.substr(a+1).trim();return t},uA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},hA=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cA(t[1])]:uA(e).split(",").map(B0)):ct._CE&&aA.test(e)?ct._CE("",e):n},Q0=function(e){return function(t){return 1-e(1-t)}},$0=function r(e,t){for(var n=e._first,i;n;)n instanceof an?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vo=function(e,t){return e&&(Jt(e)?e:ct[e]||hA(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){ct[a]=kn[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},ex=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Vw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ex(a);return s=Gf/s,l.config=function(c,u){return r(e,c,u)},l},Vf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ex(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ls("Elastic",Hf("in"),Hf("out"),Hf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ls("Circ",function(r){return-(A0(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-Hw(r*Bw)+1});ls("Back",Vf("in"),Vf("out"),Vf());ct.SteppedEase=ct.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((i*Ja(0,o,a)|0)+s)*n}}};bo.ease=ct["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $f+=r+","+r+"Params,"});var sp=function(e,t){this.id=kw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tp,this.set=t?t.getSetter:Ru},ja=(function(){function r(t,n){var i=t.parent||zt;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,So(this,+t.duration,1,1),this.data=t.data,Su||On.wake(),i&&Qi(i,this,n||n===0?n:i._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(H0(this,n);s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),F0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+M0(this))%this._dur||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+M0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Mu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,qw(this.totalTime(Ja(-this._delay,this._tDur,i),!0))},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&(this._tTime-=_t)&&Math.abs(this._zTime)!==_t))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mu(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},e.repeat=function(n){return arguments.length?(this._repeat=n,S0(this)):this._repeat},e.repeatDelay=function(n){return arguments.length?(this._rDelay=n,S0(this)):this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Jt(n)?n:k0,a=function(){var c=i.then;i.then=null,Jt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Wa(this)},r})();Qn(ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var an=(function(r){w0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n,i)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),s.parent&&ip(s.parent,Zi(s)),n.scrollTrigger&&V0(Zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return new Ft(i,qa(arguments,0,this),mn(this,hi(s)?arguments[3]:o)),this},t.from=function(i,s,o){return new Ft(i,qa(arguments,1,this),mn(this,hi(s)?arguments[3]:o)),this},t.fromTo=function(i,s,o,a){return new Ft(i,qa(arguments,2,this),mn(this,hi(s)?arguments[4]:a)),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,vu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(i,s,mn(this,o),1),this},t.call=function(i,s,o){return Qi(this,Ft.delayedCall(0,i,s),mn(this,o))},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(i,o,mn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,vu(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,vu(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=this!==zt&&i>l-_t&&i>=0?l:i<_t?0:i,h=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,_,g,m,v,b,x,S,T,w;if(u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,b=this._ts,m=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat&&(T=this._yoyo,g=c+this._rDelay,d=rt(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===u/g&&(d=c,_--),d>c&&(d=c)),S=Mo(this._tTime,g),!a&&this._tTime&&S!==_&&(S=_),T&&_&1&&(d=c-d,w=1),_!==S&&!this._lock)){var R=T&&S&1,M=R===(T&&_&1);if(_<S&&(R=!R),a=R?0:c,this._lock=1,this.render(a||(w?0:rt(_*g)),s,!c)._lock=0,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a!==this._time||m!==!this._ts)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;$0(this,w)}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Kw(this,rt(a),rt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i),!a&&d&&!s&&Fn(this,"onStart"),d>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=-_t);break}}f=p}else{f=this._last;for(var y=i<0?i:d;f;){if(p=f._prev,(f._act||y<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=y?-_t:_t);break}}f=p}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-_t)._zTime=d>=a?1:-1,this._ts))return this._start=x,np(this),this.render(i,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!a)&&(u||a)&&(Fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(hi(s)||(s=mn(this,s)),!(i instanceof ja)){if(Zn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Jt(i))i=Ft.delayedCall(0,i);else return this}return this!==i?Qi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return en(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(Au(this,i),i===this._recent&&(this._recent=this._last),os(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=mn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ft.delayedCall(0,s||Ka,o);return a.data="isPause",this._hasPause=1,Qi(this,a,mn(this,i))},t.removePause=function(i){var s=this._first;for(i=mn(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)vr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ci(i),l=this._first,c=hi(s),u;l;)l instanceof Ft?zw(l._targets,a)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=mn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=Ft.to(o,Qn(s,{ease:"none",lazy:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_t,onStart:function(){o.pause();var p=s.duration||Math.abs((a-o._time)/o.timeScale());d._dur!==p&&So(d,p,0,1).render(d._time,!0,!0),u&&u.apply(d,h||[])}}));return d},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:mn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),T0(this,mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),T0(this,mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return os(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return r.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._time=this._tTime=this._pTime=0,i&&(this.labels={}),os(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Pi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Qi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;So(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(F0(zt,Mu(i,zt)),O0=On.frame),On.frame>=b0){b0+=Bn.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Bn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e})(ja);Qn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var dA=function(e,t,n,i,s,o,a){var l=new gn(this._pt,e,t,0,1,cp,null,s),c=0,u=0,h,d,f,p,_,g,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Za(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Ff)||[];h=Ff.exec(i);)p=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?parseFloat(p.substr(2))*(p.charAt(0)==="-"?-1:1):parseFloat(p)-g,m:f&&f<4?Math.round:0},c=Ff.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zf.test(i)||m)&&(l.e=0),this._pt=l,l},op=function(e,t,n,i,s,o,a,l,c){Jt(i)&&(i=i(s||0,e,o));var u=e[t],h=n!=="get"?n:Jt(u)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Jt(u)?c?_A:nx:lp,f;if(en(i)&&(~i.indexOf("random(")&&(i=Za(i)),i.charAt(1)==="="&&(i=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(di(h)||0))),h!==i)return isNaN(h*i)?(!u&&!(t in e)&&wu(t,i),dA.call(this,e,t,h,i,d,l||Bn.stringFilter,c)):(f=new gn(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?vA:ix,0,d),c&&(f.fp=c),a&&f.modifier(a,this,e),this._pt=f)},fA=function(e,t,n,i,s){if(Jt(e)&&(e=Ya(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Zn(e)||C0(e))return en(e)?Ya(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ya(e[a],s,t,n,i);return o},ap=function(e,t,n,i,s,o){var a,l,c,u;if(Tn[e]&&(a=new Tn[e]).init(s,a.rawVars?t[e]:fA(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new gn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==_o))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},vr,pA=function r(e,t){var n=e.vars,i=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,p=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,v=e.parent,b=v&&v.data==="nested"?v.parent._targets:m,x=e._overwrite==="auto",S=e.timeline,T,w,R,M,y,C,N,B,O,V,L,j,G;if(S&&(!f||!i)&&(i="none"),e._ease=vo(i,bo.ease),e._yEase=d?Q0(vo(d===!0?i:d,bo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),!S){if(B=m[0]?yr(m[0]).harness:0,j=B&&n[B.prop],T=Yf(n,Qf),g&&g.render(-1,!0).kill(),s){if(Mr(e._startAt=Ft.set(m,Qn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:En(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),o){if(t>0)p||(e._startAt=0);else if(_&&!(t<0&&g)){t&&(e._zTime=t);return}}}else if(h&&_){if(g)!p&&(e._startAt=0);else if(t&&(o=!1),R=Qn({overwrite:!1,data:"isFromStart",lazy:o&&En(a),immediateRender:o,stagger:0,parent:v},T),j&&(R[B.prop]=j),Mr(e._startAt=Ft.set(m,R)),!o)r(e._startAt,_t);else if(!t)return}for(e._pt=0,a=_&&En(a)||a&&!_,w=0;w<m.length;w++){if(y=m[w],N=y._gsap||ep(m)[w]._gsap,e._ptLookup[w]=V={},qf[N.id]&&br.length&&yu(),L=b===m?w:b.indexOf(y),B&&(O=new B).init(y,j||T,e,L,b)!==!1&&(e._pt=M=new gn(e._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(se){V[se]=M}),O.priority&&(C=1)),!B||j)for(R in T)Tn[R]&&(O=ap(R,T,e,L,y,b))?O.priority&&(C=1):V[R]=M=op.call(e,y,R,"get",T[R],L,b,0,n.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),x&&e._pt&&(vr=e,zt.killTweensOf(y,V,e.globalTime(0)),G=!e.parent,vr=0),e._pt&&a&&(qf[N.id]=1)}C&&hp(e),e._onInit&&e._onInit(e)}e._from=!S&&!!n.runBackwards,e._onUpdate=l,e._initted=(!e._op||e._pt)&&!G},mA=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=yo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ya=function(e,t,n,i,s){return Jt(e)?e.call(t,n,i,s):en(e)&&~e.indexOf("random(")?Za(e):e},tx=$f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",gA=(tx+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Ft=(function(r){w0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:vu(i),s)||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,v=a.parent,b=(Zn(n)||C0(n)?hi(n[0]):"length"in i)?[n]:Ci(n),x,S,T,w,R,M,y,C;if(a._targets=b.length?ep(b):U0("GSAP target "+n+" not found. https://greensock.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||v0(c)||v0(u)){if(i=a.vars,x=a.timeline=new an({data:"nested",defaults:_||{}}),x.kill(),x.parent=Zi(a),p)Qn(x.vars.defaults,{ease:"none"}),p.forEach(function(N){return x.to(b,N,">")});else{if(w=b.length,y=d?X0(d):Ka,$i(d))for(R in d)~tx.indexOf(R)&&(C||(C={}),C[R]=d[R]);for(S=0;S<w;S++){T={};for(R in i)gA.indexOf(R)<0&&(T[R]=i[R]);T.stagger=0,m&&(T.yoyoEase=m),C&&yo(T,C),M=b[S],T.duration=+Ya(c,Zi(a),S,M,b),T.delay=(+Ya(u,Zi(a),S,M,b)||0)-a._delay,!d&&w===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),x.to(M,T,y(S,M,b))}x.duration()?c=u=0:a.timeline=0}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&(vr=Zi(a),zt.killTweensOf(b),vr=0),v&&ip(v,Zi(a)),(h||!c&&!p&&a._start===rt(v._time)&&En(h)&&Yw(Zi(a))&&v.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-u))),g&&V0(Zi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i>l-_t&&i>=0?l:i<_t?0:i,h,d,f,p,_,g,m,v,b;if(!c)jw(this,i,s,o);else if(u!==this._tTime||!i||o||this._startAt&&this._zTime<0!=i<0){if(h=u,v=this.timeline,this._repeat){if(p=c+this._rDelay,h=rt(u%p),u===l?(f=this._repeat,h=c):(f=~~(u/p),f&&f===u/p&&(h=c,f--),h>c&&(h=c)),g=this._yoyo&&f&1,g&&(b=this._yEase,h=c-h),_=Mo(this._tTime,p),h===a&&!o&&this._initted)return this;f!==_&&(v&&this._yEase&&$0(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(rt(p*f),!0).invalidate()._lock=0))}if(!this._initted){if(z0(this,i<0?i:h,o,s))return this._tTime=0,this;if(c!==this._dur)return this.render(i,s,o)}for(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(b||this._ease)(h/c),this._from&&(this.ratio=m=1-m),h&&!a&&!s&&Fn(this,"onStart"),d=this._pt;d;)d.r(m,d.d),d=d._next;v&&v.render(i<0?i:!h&&g?-_t:v._dur*m,s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),Fn(this,"onUpdate")),this._repeat&&f!==_&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!a)&&(u||a)&&(Fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all")&&(this._lazy=0,this.parent))return Wa(this);if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vr&&vr.vars.overwrite!==!0)._first||Wa(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ci(i):a,c=this._ptLookup,u=this._pt,h,d,f,p,_,g,m;if((!s||s==="all")&&Ww(a,l))return s==="all"&&(this._pt=0),Wa(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},wn(s,function(v){return _[v]=1}),s=_),s=mA(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,p=d,f={}):(f=h[m]=h[m]||{},p=s);for(_ in p)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Au(this,g,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Wa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return new e(i,qa(arguments,1))},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return new e(i,qa(arguments,2))},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e})(ja);Qn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Ft[r]=function(){var e=new an,t=jf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var lp=function(e,t,n){return e[t]=n},nx=function(e,t,n){return e[t](n)},_A=function(e,t,n,i){return e[t](i.fp,n)},xA=function(e,t,n){return e.setAttribute(t,n)},Ru=function(e,t){return Jt(e[t])?nx:Eu(e[t])&&e.setAttribute?xA:lp},ix=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4,t)},vA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},up=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bA=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},yA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Au(this,t,"_pt"):t.dep||(n=1),t=i;return!n},MA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},gn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ix,this.d=l||this,this.set=c||lp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=MA,this.m=n,this.mt=s,this.tween=i},r})();wn($f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qf[r]=1});kn.TweenMax=kn.TweenLite=Ft;kn.TimelineLite=kn.TimelineMax=an;zt=new an({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=rp;var Tu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return sA(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=Ci(e)[0]);var s=yr(e||{}).get,o=n?k0:B0;return n==="native"&&(n=""),e&&(t?o((Tn[t]&&Tn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Tn[a]&&Tn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ci(e),e.length>1){var i=e.map(function(u){return $n.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Tn[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;_o._pt=0,h.init(e,n?u+n:u,_o,0,[e]),h.render(1,h),_o._pt&&up(1,_o)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vo(e.ease,bo.ease)),y0(bo,e||{})},config:function(e){return y0(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Tn[a]&&!kn[a]&&U0(t+" effect requires "+a+" plugin.")}),Bf[t]=function(a,l,c){return n(Ci(a),Qn(l||{},s),c)},o&&(an.prototype[t]=function(a,l,c){return this.add(Bf[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=vo(t)},parseEase:function(e,t){return arguments.length?vo(e,t):ct},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,s;for(n.smoothChildTiming=En(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=s;return Qi(zt,n,0),n},utils:{wrap:nA,wrapYoyo:iA,distribute:X0,random:Y0,snap:q0,normalize:tA,getUnit:di,clamp:Zw,splitColor:J0,toArray:Ci,mapRange:K0,pipe:$w,unitize:eA,interpolate:rA,shuffle:W0},install:D0,effects:Bf,ticker:On,updateRoot:an.updateRoot,plugins:Tn,globalTimeline:zt,core:{PropTween:gn,globals:N0,Tween:Ft,Timeline:an,Animation:ja,getCache:yr,_removeLinkedListItem:Au}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Tu[r]=Ft[r]});On.add(an.updateRoot);_o=Tu.to({},{duration:0});var SA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},TA=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=SA(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zf=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}TA(a,s)}}}},$n=Tu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a;for(o in t)a=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],i,s,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},zf("roundProps",Kf),zf("modifiers"),zf("snap",q0))||Tu;Ft.version=an.version=$n.version="3.5.1";L0=1;R0()&&To();var EA=ct.Power0,wA=ct.Power1,AA=ct.Power2,RA=ct.Power3,CA=ct.Power4,PA=ct.Linear,IA=ct.Quad,LA=ct.Cubic,DA=ct.Quart,UA=ct.Quint,NA=ct.Strong,OA=ct.Elastic,FA=ct.Back,BA=ct.SteppedEase,kA=ct.Bounce,HA=ct.Sine,VA=ct.Expo,zA=ct.Circ;var rx,Ii,wo,_p,ds,$a,sx,GA=function(){return typeof window<"u"},wr={},hs=180/Math.PI,Ao=Math.PI/180,Eo=Math.atan2,ox=1e8,dx=/([A-Z])/g,WA=/(?:left|right|width|margin|padding|x)/i,XA=/[\s,\(]\S/,Tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},px=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KA=function(e,t,n){return e.style[t]=n},JA=function(e,t,n){return e.style.setProperty(t,n)},ZA=function(e,t,n){return e._gsap[t]=n},QA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$A=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},eR=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Hn="transform",Ar=Hn+"Origin",gx,pp=function(e,t){var n=Ii.createElementNS?Ii.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ii.createElement(e);return n.style?n:Ii.createElement(e)},er=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(dx,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ro(t)||t,1)||""},ax="O,Moz,ms,Ms,Webkit".split(","),Ro=function(e,t,n){var i=t||ds,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ax[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ax[o]:"")+e},mp=function(){GA()&&window.document&&(rx=window,Ii=rx.document,wo=Ii.documentElement,ds=pp("div")||{style:{}},$a=pp("div"),Hn=Ro(Hn),Ar=Hn+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gx=!!Ro("perspective"),_p=1)},dp=function r(e){var t=pp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(wo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),wo.removeChild(t),this.style.cssText=s,o},lx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_x=function(e){var t;try{t=e.getBBox()}catch{t=dp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===dp||(t=dp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+lx(e,["x","cx","x1"])||0,y:+lx(e,["y","cy","y1"])||0,width:0,height:0}:t},xx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_x(e))},Cu=function(e,t){if(t){var n=e.style;t in wr&&t!==Ar&&(t=Hn),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(dx,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,i,s,o){var a=new gn(e._pt,t,n,0,1,o?mx:px);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},cx={deg:1,rad:1,turn:1},fs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ds.style,l=WA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",p,_,g,m;return i===o||!s||cx[i]||cx[o]?s:(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&xx(e),f&&(wr[t]||~t.indexOf("adius"))?rt(s/(m?e.getBBox()[l?"width":"height"]:e[u])*h):(a[l?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ii||!_.appendChild)&&(_=Ii.body),g=_._gsap,g&&f&&g.width&&l&&g.time===On.time?rt(s/g.width*h):((f||o==="%")&&(a.position=er(e,"position")),_===e&&(a.position="static"),_.appendChild(ds),p=ds[u],_.removeChild(ds),a.position="absolute",l&&f&&(g=yr(_),g.time=On.time,g.width=_[u]),rt(d?p*s/h:p&&s?h/p*s:0))))},el=function(e,t,n,i){var s;return _p||mp(),t in Tr&&t!=="transform"&&(t=Tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),wr[t]&&t!=="transform"?(s=Lu(e,i),s=t!=="transformOrigin"?s[t]:Iu(er(e,Ar))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pu[t]&&Pu[t](e,t,n)||er(e,t)||tp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").indexOf(" ")?fs(e,t,s,n)+n:s},tR=function(e,t,n,i){if(!n||n==="none"){var s=Ro(t,e,1),o=s&&er(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=er(e,"borderTopColor"))}var a=new gn(this._pt,e.style,t,0,1,cp),l=0,c=0,u,h,d,f,p,_,g,m,v,b,x,S,T;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=er(e,t)||i,e.style[t]=n),u=[n,i],rp(u),n=u[0],i=u[1],d=n.match(as)||[],T=i.match(as)||[],T.length){for(;h=as.exec(i);)g=h[0],v=i.substring(l,h.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),g!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),S=g.charAt(1)==="="?+(g.charAt(0)+"1"):0,S&&(g=g.substr(2)),m=parseFloat(g),b=g.substr((m+"").length),l=as.lastIndex-b.length,b||(b=b||Bn.units[t]||x,l===i.length&&(i+=b,a.e+=b)),x!==b&&(f=fs(e,t,_,b)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:S?S*m:m-f,m:p&&p<4?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?mx:px;return Zf.test(i)&&(a.e=0),this._pt=a,a},ux={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nR=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ux[n]||n,t[1]=ux[i]||i,t.join(" ")},iR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],wr[a]&&(l=1,a=a==="transformOrigin"?Ar:Hn),Cu(n,a);l&&(Cu(n,Hn),o&&(o.svg&&n.removeAttribute("transform"),Lu(n,1),o.uncache=1))}},Pu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new gn(e._pt,t,n,0,0,iR);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},tl=[1,0,0,1,0,0],vx={},bx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hx=function(e){var t=er(e,Hn);return bx(t)?tl:t.substr(7).match(Jf).map(rt)},xp=function(e,t){var n=e._gsap||yr(e),i=e.style,s=hx(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tl:s):(s===tl&&!e.offsetParent&&e!==wo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextSibling,wo.appendChild(e)),s=hx(e),l?i.display=l:Cu(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):wo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gp=function(e,t,n,i,s,o){var a=e._gsap,l=s||xp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],v=l[5],b=t.split(" "),x=parseFloat(b[0])||0,S=parseFloat(b[1])||0,T,w,R,M;n?l!==tl&&(w=f*g-p*_)&&(R=x*(g/w)+S*(-_/w)+(_*v-g*m)/w,M=x*(-p/w)+S*(f/w)-(f*v-p*m)/w,x=R,S=M):(T=_x(e),x=T.x+(~b[0].indexOf("%")?x/100*T.width:x),S=T.y+(~(b[1]||b[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(m=x-c,v=S-u,a.xOffset=h+(m*f+v*_)-m,a.yOffset=d+(m*p+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ar]="0px 0px",o&&(Er(o,a,"xOrigin",c,x),Er(o,a,"yOrigin",u,S),Er(o,a,"xOffset",h,a.xOffset),Er(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Lu=function(e,t){var n=e._gsap||new sp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=er(e,Ar)||"0",c,u,h,d,f,p,_,g,m,v,b,x,S,T,w,R,M,y,C,N,B,O,V,L,j,G,se,$,ue,Re,Ne,Fe;return c=u=h=p=_=g=m=v=b=0,d=f=1,n.svg=!!(e.getCTM&&xx(e)),T=xp(e,n.svg),n.svg&&(L=!n.uncache&&e.getAttribute("data-svg-origin"),gp(e,L||l,!!L||n.originIsAbsolute,n.smooth!==!1,T)),x=n.xOrigin||0,S=n.yOrigin||0,T!==tl&&(y=T[0],C=T[1],N=T[2],B=T[3],c=O=T[4],u=V=T[5],T.length===6?(d=Math.sqrt(y*y+C*C),f=Math.sqrt(B*B+N*N),p=y||C?Eo(C,y)*hs:0,m=N||B?Eo(N,B)*hs+p:0,m&&(f*=Math.cos(m*Ao)),n.svg&&(c-=x-(x*y+S*N),u-=S-(x*C+S*B))):(Fe=T[6],Re=T[7],se=T[8],$=T[9],ue=T[10],Ne=T[11],c=T[12],u=T[13],h=T[14],w=Eo(Fe,ue),_=w*hs,w&&(R=Math.cos(-w),M=Math.sin(-w),L=O*R+se*M,j=V*R+$*M,G=Fe*R+ue*M,se=O*-M+se*R,$=V*-M+$*R,ue=Fe*-M+ue*R,Ne=Re*-M+Ne*R,O=L,V=j,Fe=G),w=Eo(-N,ue),g=w*hs,w&&(R=Math.cos(-w),M=Math.sin(-w),L=y*R-se*M,j=C*R-$*M,G=N*R-ue*M,Ne=B*M+Ne*R,y=L,C=j,N=G),w=Eo(C,y),p=w*hs,w&&(R=Math.cos(w),M=Math.sin(w),L=y*R+C*M,j=O*R+V*M,C=C*R-y*M,V=V*R-O*M,y=L,O=j),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,g=180-g),d=rt(Math.sqrt(y*y+C*C+N*N)),f=rt(Math.sqrt(V*V+Fe*Fe)),w=Eo(O,V),m=Math.abs(w)>2e-4?w*hs:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(L=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bx(er(e,Hn)),L&&e.setAttribute("transform",L))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(d*=-1,m+=p<=0?180:-180,p+=p<=0?180:-180):(f*=-1,m+=m<=0?180:-180)),n.x=((n.xPercent=c&&Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)?0:c)+o,n.y=((n.yPercent=u&&Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)?0:u)+o,n.z=h+o,n.scaleX=rt(d),n.scaleY=rt(f),n.rotation=rt(p)+a,n.rotationX=rt(_)+a,n.rotationY=rt(g)+a,n.skewX=m+a,n.skewY=v+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ar]=Iu(l)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?sR:gx?yx:rR,n.uncache=0,n},Iu=function(e){return(e=e.split(" "))[0]+" "+e[1]},fp=function(e,t,n){var i=di(t);return rt(parseFloat(t)+parseFloat(fs(e,"x",n+"px",i)))+i},rR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yx(e,t)},cs="0deg",Qa="0px",us=") ",yx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,v=n.target,b=n.zOrigin,x="",S=m==="auto"&&e&&e!==1||m===!0;if(b&&(h!==cs||u!==cs)){var T=parseFloat(u)*Ao,w=Math.sin(T),R=Math.cos(T),M;T=parseFloat(h)*Ao,M=Math.cos(T),o=fp(v,o,w*M*-b),a=fp(v,a,-Math.sin(T)*-b),l=fp(v,l,R*M*-b+b)}g!==Qa&&(x+="perspective("+g+us),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(S||o!==Qa||a!==Qa||l!==Qa)&&(x+=l!==Qa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+us),c!==cs&&(x+="rotate("+c+us),u!==cs&&(x+="rotateY("+u+us),h!==cs&&(x+="rotateX("+h+us),(d!==cs||f!==cs)&&(x+="skew("+d+", "+f+us),(p!==1||_!==1)&&(x+="scale("+p+", "+_+us),v.style[Hn]=x||"translate(0, 0)"},sR=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,v=n.forceCSS,b=parseFloat(o),x=parseFloat(a),S,T,w,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ao,c*=Ao,S=Math.cos(l)*h,T=Math.sin(l)*h,w=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Ao,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,T*=M)),S=rt(S),T=rt(T),w=rt(w),R=rt(R)):(S=h,R=d,T=w=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=fs(f,"x",o,"px"),x=fs(f,"y",a,"px")),(p||_||g||m)&&(b=rt(b+p-(p*S+_*w)+g),x=rt(x+_-(p*T+_*R)+m)),(i||s)&&(M=f.getBBox(),b=rt(b+i/100*M.width),x=rt(x+s/100*M.height)),M="matrix("+S+","+T+","+w+","+R+","+b+","+x+")",f.setAttribute("transform",M),v&&(f.style[Hn]=M)},oR=function(e,t,n,i,s,o){var a=360,l=en(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?hs:1),u=o?c*o:c-i,h=i+u+"deg",d,f;return l&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*ox)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*ox)%a-~~(u/a)*a)),e._pt=f=new gn(e._pt,t,n,i,u,qA),f.e=h,f.u="deg",e._props.push(n),f},aR=function(e,t,n){var i=$a.style,s=n._gsap,o="perspective,force3D,transformOrigin,svgOrigin",a,l,c,u,h,d,f,p;i.cssText=getComputedStyle(n).cssText+";position:absolute;display:block;",i[Hn]=t,Ii.body.appendChild($a),a=Lu($a,1);for(l in wr)c=s[l],u=a[l],c!==u&&o.indexOf(l)<0&&(f=di(c),p=di(u),h=f!==p?fs(n,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new gn(e._pt,s,l,h,d-h,fx),e._pt.u=p||0,e._props.push(l));Ii.body.removeChild($a)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Pu[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(p){return el(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(p,_){return f[p]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var vp={name:"css",register:mp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l,c,u,h,d,f,p,_,g,m,v,b,x,S,T;_p||mp();for(p in t)if(p!=="autoRound"&&(c=t[p],!(Tn[p]&&ap(p,t,n,i,e,s)))){if(d=typeof c,f=Pu[p],d==="function"&&(c=c.call(n,i,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Za(c)),f)f(this,e,p,c,n)&&(T=1);else if(p.substr(0,2)==="--")this.add(a,"setProperty",getComputedStyle(e).getPropertyValue(p)+"",c+"",i,s,0,0,p);else if(d!=="undefined"){if(l=el(e,p),h=parseFloat(l),m=d==="string"&&c.charAt(1)==="="?+(c.charAt(0)+"1"):0,m&&(c=c.substr(2)),u=parseFloat(c),p in Tr&&(p==="autoAlpha"&&(h===1&&el(e,"visibility")==="hidden"&&u&&(h=0),Er(this,a,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=Tr[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in wr,v){if(b||(x=e._gsap,x.renderTransform||Lu(e),S=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new gn(this._pt,a,Hn,0,1,x.renderTransform,x,0,-1),b.dep=1),p==="scale")this._pt=new gn(this._pt,x,"scaleY",x.scaleY,m?m*u:u-x.scaleY),o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){c=nR(c),x.svg?gp(e,c,0,S,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==x.zOrigin&&Er(this,x,"zOrigin",x.zOrigin,g),Er(this,a,p,Iu(l),Iu(c)));continue}else if(p==="svgOrigin"){gp(e,c,1,S,0,this);continue}else if(p in vx){oR(this,x,p,h,c,m);continue}else if(p==="smoothOrigin"){Er(this,x,"smooth",x.smooth,c);continue}else if(p==="force3D"){x[p]=c;continue}else if(p==="transform"){aR(this,c,e);continue}}else p in a||(p=Ro(p)||p);if(v||(u||u===0)&&(h||h===0)&&!XA.test(c)&&p in a)_=(l+"").substr((h+"").length),u||(u=0),g=di(c)||(p in Bn.units?Bn.units[p]:_),_!==g&&(h=fs(e,p,l,g)),this._pt=new gn(this._pt,v?x:a,p,h,m?m*u:u-h,g==="px"&&t.autoRound!==!1&&!v?jA:fx),this._pt.u=g||0,_!==g&&(this._pt.b=l,this._pt.r=YA);else if(p in a)tR.call(this,e,p,l,c);else if(p in e)this.add(e,p,e[p],c,i,s);else{wu(p,c);continue}o.push(p)}}T&&hp(this)},get:el,aliases:Tr,getSetter:function(e,t,n){var i=Tr[t];return i&&i.indexOf(",")<0&&(t=i),t in wr&&t!==Ar&&(e._gsap.x||el(e,"x"))?n&&sx===n?t==="scale"?QA:ZA:(sx=n||{})&&(t==="scale"?$A:eR):e.style&&!Eu(e.style[t])?KA:~t.indexOf("-")?JA:Ru(e,t)},core:{_removeProperty:Cu,_getMatrix:xp}};$n.utils.checkPrefix=Ro;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){wr[s]=1});wn(e,function(s){Bn.units[s]="deg",vx[s]=1}),Tr[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");Tr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});$n.registerPlugin(vp);var tr=$n.registerPlugin(vp)||$n,SI=tr.core.Tween;var st,Du,Bt,_n,rr,qt,Fx,Np,Op,sl,Li,Uu,zu,bp,Vn,Gu,Cp,Nt,Mx,Sx,Co,Bx,yp,nl=1,Po=[],Nu=[],ms=Date.now,Mp=ms(),Di=0,Tx=1,Sp=function(e){return e},kx=function(){return typeof window<"u"},Hx=function(){return st||kx()&&(st=window.gsap)&&st.registerPlugin&&st},ko=function(e){return!!~Fx.indexOf(e)},Vo=function(e,t){return~Po.indexOf(e)&&Po[Po.indexOf(e)+1][t]},Ku=function(e,t){var n=t.s,i=t.sc,s=Nu.indexOf(e),o=i===xn.sc?1:2;return!~s&&(s=Nu.push(e)-1),Nu[s+o]||(Nu[s+o]=Vo(e,n)||(ko(e)?i:function(a){return arguments.length?e[n]=a:e[n]}))},Vx=function(e){return Vo(e,"getBoundingClientRect")||(ko(e)?function(){return ju.width=Bt.innerWidth,ju.height=Bt.innerHeight,ju}:function(){return gs(e)})},lR=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Vo(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Bt["inner"+s]:e["client"+s])||0}},cR=function(e,t){return!t||~Po.indexOf(e)?Vx(e):function(){return ju}},Pp=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return(n="scroll"+i)&&(o=Vo(e,n))?o()-Vx(e)()[s]:ko(e)?Math.max(rr[n],qt[n])-(Bt["inner"+i]||rr["client"+i]||qt["client"+i]):e[n]-e["offset"+i]},Tp=function(e,t){for(var n=0;n<Co.length;n+=3)(!t||~t.indexOf(Co[n+1]))&&e(Co[n],Co[n+1],Co[n+2])},ps=function(e){return typeof e=="string"},Rr=function(e){return typeof e=="function"},Ip=function(e){return typeof e=="number"},Ep=function(e){return typeof e=="object"},Ou=function(e){return Rr(e)&&e()},Ex=function(e,t){return function(){var n=Ou(e),i=Ou(t);return function(){Ou(n),Ou(i)}}},Fu=Math.abs,Bu="scrollLeft",ku="scrollTop",Fp="left",Bp="top",Qu="right",$u="bottom",Io="width",Lo="height",Do="Right",Uo="Left",No="Top",Oo="Bottom",Gt="padding",ei="margin",_s="Width",eh="Height",Rn="px",fi={s:Bu,p:Fp,p2:Uo,os:Qu,os2:Do,d:Io,d2:_s,a:"x",sc:function(e){return arguments.length?Bt.scrollTo(e,xn.sc()):Bt.pageXOffset||_n[Bu]||rr[Bu]||qt[Bu]||0}},xn={s:ku,p:Bp,p2:No,os:$u,os2:Oo,d:Lo,d2:eh,a:"y",op:fi,sc:function(e){return arguments.length?Bt.scrollTo(fi.sc(),e):Bt.pageYOffset||_n[ku]||rr[ku]||qt[ku]||0}},nr=function(e){return Bt.getComputedStyle(e)},uR=function(e){return e.style.position=nr(e).position==="absolute"?"absolute":"relative"},wx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gs=function(e,t){var n=t&&nr(e)[Cp]!=="matrix(1, 0, 0, 1, 0, 0)"&&st.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Lp=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},hR=function(e){return function(t){var n=[],i=e.labels,s=e.duration(),o;for(o in i)n.push(i[o]/s);return st.utils.snap(n,t)}},Ax=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},An=function(e,t,n){return e.addEventListener(t,n,{passive:!0})},il=function(e,t,n){return e.removeEventListener(t,n)},Rx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wp={toggleActions:"play",anticipatePin:0},Cx={top:0,left:0,center:.5,bottom:1,right:1},Wu=function(e,t){if(ps(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;i&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Cx?Cx[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hu=function(e,t,n,i,s,o,a){var l=s.startColor,c=s.endColor,u=s.fontSize,h=s.indent,d=s.fontWeight,f=_n.createElement("div"),p=ko(n)||Vo(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,g=p?qt:n,m=e.indexOf("start")!==-1,v=m?l:c,b="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(_&&p?"fixed;":"absolute;"),(_||!p)&&(b+=(i===xn?Qu:$u)+":"+(o+parseFloat(h))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),f._isStart=m,f.setAttribute("class","gsap-marker-"+e),f.style.cssText=b,f.innerText=t||t===0?e+"-"+t:e,g.insertBefore(f,g.children[0]),f._offset=f["offset"+i.op.d2],Xu(f,0,i,m),f},Xu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?1:0,s["border"+o+_s]=1,s["border"+a+_s]=0,s[n.p]=t,st.set(e,s)},Et=[],Dp={},Px=function(){return sl||(sl=Op(kp))},Vu=function(){sl||(sl=Op(kp),Di||Ho("scrollStart"),Di=ms())},rl=function(){return!Vn&&Np.restart(!0)},ol={},dR=[],Ut=[],Fo,Ix,Lx=function(e){var t=st.ticker.frame,n=[],i=0,s;if(Ix!==t||nl){for(Ju();i<Ut.length;i+=4)s=Bt.matchMedia(Ut[i]).matches,s!==Ut[i+3]&&(Ut[i+3]=s,s?n.push(i):Ju(1,Ut[i])||Rr(Ut[i+2])&&Ut[i+2]());for(Gx(),i=0;i<n.length;i++)s=n[i],Fo=Ut[s],Ut[s+2]=Ut[s+1](e);Fo=0,Bo(0,1),Ix=t,Ho("matchMedia")}},zx=function r(){return il(Ct,"scrollEnd",r)||Bo(!0)},Ho=function(e){return ol[e]&&ol[e].map(function(t){return t()})||dR},ir=[],Gx=function(e){for(var t=0;t<ir.length;t+=4)(!e||ir[t+3]===e)&&(ir[t].style.cssText=ir[t+1],ir[t+2].uncache=1)},Ju=function(e,t){var n;for(Nt=0;Nt<Et.length;Nt++)n=Et[Nt],(!t||n.media===t)&&(e?n.kill(1):(n.scroll.rec||(n.scroll.rec=n.scroll()),n.revert()));Gx(t),t||Ho("revert")},Bo=function(e,t){if(Di&&!e){An(Ct,"scrollEnd",zx);return}var n=Ho("refreshInit");for(Bx&&Ct.sort(),t||Ju(),Nt=0;Nt<Et.length;Nt++)Et[Nt].refresh();for(n.forEach(function(i){return i&&i.render&&i.render(-1)}),Nt=Et.length;Nt--;)Et[Nt].scroll.rec=0;Np.pause(),Ho("refresh")},Dx=0,qu=1,kp=function(){var e=Et.length,t=ms(),n=t-Mp>=50,i=e&&Et[0].scroll();if(qu=Dx>i?-1:1,Dx=i,n&&(Di&&!Gu&&t-Di>200&&(Di=0,Ho("scrollEnd")),zu=Mp,Mp=t),qu<0){for(Nt=e;Nt--;)Et[Nt]&&Et[Nt].update(0,n);qu=1}else for(Nt=0;Nt<e;Nt++)Et[Nt]&&Et[Nt].update(0,n);sl=0},Up=[Fp,Bp,$u,Qu,ei+Oo,ei+Do,ei+No,ei+Uo,"display","flexShrink","float"],Yu=Up.concat([Io,Lo,"boxSizing","max"+_s,"max"+eh,"position",ei,Gt,Gt+No,Gt+Do,Gt+Oo,Gt+Uo]),fR=function(e,t,n){if(Zu(n),e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}},Ap=function(e,t,n,i){if(e.parentNode!==t){for(var s=Up.length,o=t.style,a=e.style,l;s--;)l=Up[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$u]=a[Qu]="auto",o.overflow="visible",o.boxSizing="border-box",o[Io]=Lp(e,fi)+Rn,o[Lo]=Lp(e,xn)+Rn,o[Gt]=a[ei]=a[Bp]=a[Fp]="0",Zu(i),a[Io]=a["max"+_s]=n[Io],a[Lo]=a["max"+eh]=n[Lo],a[Gt]=n[Gt],e.parentNode.insertBefore(t,e),t.appendChild(e)}},pR=/([A-Z])/g,Zu=function(e){if(e)for(var t=e.t.style,n=e.length,i=0,s,o;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(pR,"-$1").toLowerCase())},Rp=function(e){for(var t=Yu.length,n=e.style,i=[],s=0;s<t;s++)i.push(Yu[s],n[Yu[s]]);return i.t=e,i},mR=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ju={left:0,top:0},Ux=function(e,t,n,i,s,o,a,l,c,u,h,d){if(Rr(e)&&(e=e(l)),ps(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Wu("0"+e.substr(3),n):0)),Ip(e))a&&Xu(a,n,i,!0);else{Rr(t)&&(t=t(l));var f=Li(t)[0]||qt,p=gs(f)||{},_=e.split(" "),g,m,v;(!p||!p.left&&!p.top)&&nr(f).display==="none"&&(v=f.style.display,f.style.display="block",p=gs(f),v?f.style.display=v:f.style.removeProperty("display")),g=Wu(_[0],p[i.d]),m=Wu(_[1]||"0",n),e=p[i.p]-c[i.p]-u+g+s-m,a&&Xu(a,m,i,n-m<20||a._isStart&&m>20),n-=n-m}if(o){var b=e+n,x=o._isStart;d="scroll"+i.d2,Xu(o,b,i,x&&b>20||!x&&(h?Math.max(qt[d],rr[d]):o.parentNode[d])<=b+1),h&&(c=gs(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Rn))}return Math.round(e)},gR=/(?:webkit|moz|length|cssText)/i,Nx=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===qt){e._stOrig=s.cssText,a=nr(e);for(o in a)!+o&&!gR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;st.core.getCache(e).uncache=1,t.appendChild(e)}},Ox=function(e,t){var n=Ku(e,t),i="_scroll"+t.p2,s,o,a=function l(c,u,h,d,f){var p=l.tween,_=u.onComplete,g={};return p&&p.kill(),s=Math.round(h),u[i]=c,u.modifiers=g,g[i]=function(m){return m=Math.round(n()),m!==s&&m!==o?(p.kill(),l.tween=0):m=h+d*p.ratio+f*p.ratio*p.ratio,o=s,s=Math.round(m)},u.onComplete=function(){l.tween=0,_&&_.call(p)},p=l.tween=st.to(e,u),p};return e[i]=n,a};fi.op=xn;var Ct=(function(){function r(t,n){Du||r.register(st)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=0,this.vars&&this.kill(1),!Tx){this.update=this.refresh=this.kill=Sp;return}n=wx(ps(n)||Ip(n)||n.nodeType?{trigger:n}:n,wp);var s=n.horizontal?fi:xn,o=n,a=o.onUpdate,l=o.toggleClass,c=o.id,u=o.onToggle,h=o.onRefresh,d=o.scrub,f=o.trigger,p=o.pin,_=o.pinSpacing,g=o.invalidateOnRefresh,m=o.anticipatePin,v=o.onScrubComplete,b=o.onSnapComplete,x=o.once,S=o.snap,T=o.pinReparent,w=!d&&d!==0,R=Li(n.scroller||Bt)[0],M=st.core.getCache(R),y=ko(R),C="pinType"in n?n.pinType==="fixed":y||Vo(R,"pinType")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=w&&n.toggleActions.split(" "),O="markers"in n?n.markers:wp.markers,V=y?0:parseFloat(nr(R)["border"+s.p2+_s])||0,L=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(L)},G=lR(R,y,s),se=cR(R,y),$,ue,Re,Ne,Fe,Ye,X,ee,he,we,ve,Ve,dt,D,tt,Ue,Le,me,ot,ye,ze,yt,ut,I,E,z,J,ie,Y,Se,re,be,ge,ae,pe,Pe,Me;L.media=Fo,m*=45,Et.push(L),L.scroller=R,L.scroll=Ku(R,s),Fe=L.scroll(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bx=1),M.tweenScroll=M.tweenScroll||{top:Ox(R,xn),left:Ox(R,fi)},L.tweenTo=$=M.tweenScroll[s.p],i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,be=Ip(d)&&d,be&&(re=st.to(i,{ease:"power3",duration:be,onComplete:function(){return v&&v(L)}})),Y=0,c||(c=i.vars.id)),S&&(Ep(S)||(S={snapTo:S}),st.set(y?[qt,rr]:R,{scrollBehavior:"auto"}),Re=Rr(S.snapTo)?S.snapTo:S.snapTo==="labels"?hR(i):st.utils.snap(S.snapTo),ge=S.duration||{min:.1,max:2},ge=Ep(ge)?Uu(ge.min,ge.max):Uu(ge,ge),ae=st.delayedCall(S.delay||be/2||.1,function(){if(Math.abs(L.getVelocity())<10&&!Gu){var oe=i&&!w?i.totalProgress():L.progress,_e=(oe-Se)/(ms()-zu)*1e3||0,U=Fu(_e/2)*_e/.185,te=oe+U,Q=Uu(0,1,Re(te,L)),le=L.scroll(),Z=Math.round(X+Q*D),K=$.tween;if(le<=ee&&le>=X&&Z!==le){if(K&&!K._initted&&K.data<=Math.abs(Z-le))return;$(Z,{duration:ge(Fu(Math.max(Fu(te-oe),Fu(Q-oe))*.185/_e/.05||0)),ease:S.ease||"power3",data:Math.abs(Z-le),onComplete:function(){Y=Se=i&&!w?i.totalProgress():L.progress,b&&b(L)}},le,U*D,Z-le-U*D)}}else L.isActive&&ae.restart(!0)}).pause()),c&&(Dp[c]=L),f=L.trigger=Li(f||p)[0],p=p===!0?f:Li(p)[0],ps(l)&&(l={targets:f,className:l}),p&&(_===!1||_===ei||(_=!_&&nr(p.parentNode).display==="flex"?!1:Gt),L.pin=p,n.force3D!==!1&&st.set(p,{force3D:!0}),ue=st.core.getCache(p),ue.spacer?tt=ue.pinState:(ue.spacer=me=_n.createElement("div"),me.setAttribute("class","pin-spacer"+(c?" pin-spacer-"+c:"")),ue.pinState=tt=Rp(p)),L.spacer=me=ue.spacer,ie=nr(p),I=ie[_+s.os2],ye=st.getProperty(p),ze=st.quickSetter(p,s.a,Rn),Ap(p,me,ie),Le=Rp(p)),O&&(dt=Ep(O)?wx(O,Rx):Rx,ve=Hu("scroller-start",c,R,s,dt,0),Ve=Hu("scroller-end",c,R,s,dt,0,ve),ot=ve["offset"+s.op.d2],he=Hu("start",c,R,s,dt,ot),we=Hu("end",c,R,s,dt,ot),C||(uR(R),st.set([ve,Ve],{force3D:!0}),z=st.quickSetter(ve,s.a,Rn),J=st.quickSetter(Ve,s.a,Rn))),L.revert=function(oe){var _e=oe!==!1||!L.enabled,U=Vn;_e!==Ne&&(_e&&(Pe=Math.max(L.scroll(),L.scroll.rec||0),pe=L.progress,Me=i&&i.progress()),he&&[he,we,ve,Ve].forEach(function(te){return te.style.display=_e?"none":"block"}),_e&&(Vn=1),L.update(_e),Vn=U,p&&(_e?fR(p,me,tt):(!T||!L.isActive)&&Ap(p,me,nr(p),E)),Ne=_e)},L.refresh=function(oe){if(!(Vn||!L.enabled)){if(p&&oe&&Di){An(r,"scrollEnd",zx);return}Vn=1,re&&re.kill(),g&&i&&i.progress(0).invalidate(),Ne||L.revert();for(var _e=G(),U=se(),te=Pp(R,s),Q=0,le=0,Z=n.end,K=n.endTrigger||f,de=n.start||(n.start===0?0:p||!f?"0 0":"0 100%"),Ae=f&&Math.max(0,Et.indexOf(L))||0,ke=Ae,k,ne,Je,wt,Xe,xt,at,tn;ke--;)at=Et[ke].pin,at&&(at===f||at===p)&&Et[ke].revert();for(X=Ux(de,f,_e,s,L.scroll(),he,ve,L,U,V,C,te)||(p?-.001:0),Rr(Z)&&(Z=Z(L)),ps(Z)&&!Z.indexOf("+=")&&(~Z.indexOf(" ")?Z=(ps(de)?de.split(" ")[0]:"")+Z:(Q=Wu(Z.substr(2),_e),Z=ps(de)?de:X+Q,K=f)),ee=Math.max(X,Ux(Z||(K?"100% 0":te),K,_e,s,L.scroll()+Q,we,Ve,L,U,V,C,te))||-.001,D=ee-X||(X-=.01)&&.001,Q=0,ke=Ae;ke--;)xt=Et[ke],at=xt.pin,at&&xt.start-xt._pinPush<X&&(k=xt.end-xt.start,at===f&&(Q+=k),at===p&&(le+=k));if(X+=Q,ee+=Q,L._pinPush=le,he&&Q&&(k={},k[s.a]="+="+Q,st.set([he,we],k)),p)k=nr(p),wt=s===xn,Je=L.scroll(),yt=parseFloat(ye(s.a))+le,!te&&ee>1&&((y?qt:R).style["overflow-"+s.a]="scroll"),Ap(p,me,k),Le=Rp(p),ne=gs(p,!0),tn=C&&Ku(R,wt?fi:xn)(),_&&(E=[_+s.os2,D+le+Rn],E.t=me,ke=_===Gt?Lp(p,s)+D+le:0,ke&&E.push(s.d,ke+Rn),Zu(E),C&&L.scroll(Pe)),C&&(Xe={top:ne.top+(wt?Je-X:tn)+Rn,left:ne.left+(wt?tn:Je-X)+Rn,boxSizing:"border-box",position:"fixed"},Xe[Io]=Xe["max"+_s]=Math.ceil(ne.width)+Rn,Xe[Lo]=Xe["max"+eh]=Math.ceil(ne.height)+Rn,Xe[ei]=Xe[ei+No]=Xe[ei+Do]=Xe[ei+Oo]=Xe[ei+Uo]="0",Xe[Gt]=k[Gt],Xe[Gt+No]=k[Gt+No],Xe[Gt+Do]=k[Gt+Do],Xe[Gt+Oo]=k[Gt+Oo],Xe[Gt+Uo]=k[Gt+Uo],Ue=mR(tt,Xe,T)),i?(i.progress(1,!0),ut=ye(s.a)-yt+D+le,D!==ut&&Ue.splice(Ue.length-2,2),i.progress(0,!0)):ut=D;else if(f&&L.scroll())for(ne=f.parentNode;ne&&ne!==qt;)ne._pinOffset&&(X-=ne._pinOffset,ee-=ne._pinOffset),ne=ne.parentNode;for(ke=0;ke<Ae;ke++)xt=Et[ke].pin,xt&&(xt===f||xt===p)&&Et[ke].revert(!1);L.start=X,L.end=ee,Fe=Ye=L.scroll(),Fe<Pe&&L.scroll(Pe),L.revert(!1),Vn=0,Me&&w&&i.progress(Me,!0),pe!==L.progress&&(re&&i.totalProgress(pe,!0),L.progress=pe,L.update()),p&&_&&(me._pinOffset=Math.round(L.progress*ut)),h&&h(L)}},L.getVelocity=function(){return(L.scroll()-Ye)/(ms()-zu)*1e3||0},L.update=function(oe,_e){var U=L.scroll(),te=oe?0:(U-X)/D,Q=te<0?0:te>1?1:te||0,le=L.progress,Z,K,de,Ae,ke,k;if(_e&&(Ye=Fe,Fe=U,S&&(Se=Y,Y=i&&!w?i.totalProgress():Q)),m&&!Q&&p&&!Vn&&!nl&&Di&&X<U+(U-Ye)/(ms()-zu)*m&&(Q=1e-4),Q!==le&&L.enabled){if(Z=L.isActive=!!Q&&Q<1,K=!!le&&le<1,k=Z!==K,ke=k||!!Q!=!!le,L.direction=Q>le?1:-1,L.progress=Q,w||(re&&!Vn&&!nl?(re.vars.totalProgress=Q,re.invalidate().restart()):i&&i.totalProgress(Q,!!Vn)),p){if(oe&&_&&(me.style[_+s.os2]=I),!C)ze(yt+ut*Q);else if(ke){if(Ae=!oe&&Q>le&&ee+1>U&&U+1>=Pp(R,s),T)if(!oe&&(Z||Ae)){var ne=gs(p,!0),Je=U-X;Nx(p,qt,ne.top+(s===xn?Je:0)+Rn,ne.left+(s===xn?0:Je)+Rn)}else Nx(p,me);Zu(Z||Ae?Ue:Le),ut!==D&&Q<1&&Z||ze(yt+(Q===1&&!Ae?ut:0))}}S&&!$.tween&&!Vn&&!nl&&ae.restart(!0),l&&(k||x&&Q&&(Q<1||!yp))&&Li(l.targets).forEach(function(wt){return wt.classList[Z||x?"add":"remove"](l.className)}),a&&!w&&!oe&&a(L),ke&&!Vn?(de=Q&&!le?0:Q===1?1:le===1?2:3,w&&(Ae=!k&&B[de+1]!=="none"&&B[de+1]||B[de],i&&(Ae==="complete"||Ae==="reset"||Ae in i)&&(Ae==="complete"?i.pause().totalProgress(1):Ae==="reset"?i.restart(!0).pause():i[Ae]()),a&&a(L)),(k||!yp)&&(u&&k&&u(L),N[de]&&N[de](L),x&&(Q===1?L.kill(!1,1):N[de]=0),k||(de=Q===1?1:3,N[de]&&N[de](L)))):w&&a&&!Vn&&a(L)}J&&(z(U+(ve._isFlipped?1:0)),J(U))},L.enable=function(){L.enabled||(L.enabled=!0,An(R,"resize",rl),An(R,"scroll",Vu),j&&An(r,"refreshInit",j),!i||!i.add?L.refresh():st.delayedCall(.01,function(){return X||ee||L.refresh()})&&(D=.01)&&(X=ee=0))},L.disable=function(oe,_e){if(L.enabled&&(oe!==!1&&L.revert(),L.enabled=L.isActive=!1,_e||re&&re.pause(),Pe=0,ue&&(ue.uncache=1),j&&il(r,"refreshInit",j),ae&&(ae.pause(),$.tween&&$.tween.kill()&&($.tween=0)),!y)){for(var U=Et.length;U--;)if(Et[U].scroller===R&&Et[U]!==L)return;il(R,"resize",rl),il(R,"scroll",Vu)}},L.kill=function(oe,_e){L.disable(oe,_e),c&&delete Dp[c];var U=Et.indexOf(L);Et.splice(U,1),U===Nt&&qu>0&&Nt--,i&&(i.scrollTrigger=null,oe&&i.render(-1),_e||i.kill()),he&&[he,we,ve,Ve].forEach(function(te){return te.parentNode.removeChild(te)}),ue&&(ue.uncache=1)},L.enable()},r.register=function(n){if(!Du&&(st=n||Hx(),kx()&&window.document&&(Bt=window,_n=document,rr=_n.documentElement,qt=_n.body),st&&(Li=st.utils.toArray,Uu=st.utils.clamp,st.core.globals("ScrollTrigger",r),qt))){Op=Bt.requestAnimationFrame||function(a){return setTimeout(a,16)},An(Bt,"mousewheel",Vu),Fx=[Bt,_n,rr,qt],An(_n,"scroll",Vu);var i=qt.style,s=i.borderTop,o;i.borderTop="1px solid #000",o=gs(qt),xn.m=Math.round(o.top+xn.sc())||0,fi.m=Math.round(o.left+fi.sc())||0,s?i.borderTop=s:i.removeProperty("border-top"),bp=setInterval(Px,200),st.delayedCall(.5,function(){return nl=0}),An(_n,"touchcancel",Sp),An(qt,"touchstart",Sp),Ax(An,_n,"pointerdown,touchstart,mousedown",function(){return Gu=1}),Ax(An,_n,"pointerup,touchend,mouseup",function(){return Gu=0}),Cp=st.utils.checkPrefix("transform"),Yu.push(Cp),Du=ms(),Np=st.delayedCall(.2,Bo).pause(),Co=[_n,"visibilitychange",function(){var a=Bt.innerWidth,l=Bt.innerHeight;_n.hidden?(Mx=a,Sx=l):(Mx!==a||Sx!==l)&&rl()},_n,"DOMContentLoaded",Bo,Bt,"load",function(){return Di||Bo()},Bt,"resize",rl],Tp(An)}return Du},r.defaults=function(n){for(var i in n)wp[i]=n[i]},r.kill=function(){Tx=0,Et.slice(0).forEach(function(n){return n.kill(1)})},r.config=function(n){"limitCallbacks"in n&&(yp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(bp)||(bp=i)&&setInterval(Px,i),"autoRefreshEvents"in n&&(Tp(il)||Tp(An,n.autoRefreshEvents||"none"))},r.scrollerProxy=function(n,i){var s=Li(n)[0];ko(s)?Po.unshift(Bt,i,qt,i,rr,i):Po.unshift(s,i)},r.matchMedia=function(n){var i,s,o,a,l;for(s in n)o=Ut.indexOf(s),a=n[s],Fo=s,s==="all"?a():(i=Bt.matchMedia(s),i&&(i.matches&&(l=a()),~o?(Ut[o+1]=Ex(Ut[o+1],a),Ut[o+2]=Ex(Ut[o+2],l)):(o=Ut.length,Ut.push(s,a,l),i.addListener?i.addListener(Lx):i.addEventListener("change",Lx)),Ut[o+3]=i.matches)),Fo=0;return Ut},r.clearMatchMedia=function(n){n||(Ut.length=0),n=Ut.indexOf(n),n>=0&&Ut.splice(n,4)},r})();Ct.version="3.5.1";Ct.saveStyles=function(r){return r?Li(r).forEach(function(e){var t=ir.indexOf(e);t>=0&&ir.splice(t,4),ir.push(e,e.style.cssText,st.core.getCache(e),Fo)}):ir};Ct.revert=function(r,e){return Ju(!r,e)};Ct.create=function(r,e){return new Ct(r,e)};Ct.refresh=function(r){return r?rl():Bo(!0)};Ct.update=kp;Ct.maxScroll=function(r,e){return Pp(r,e?fi:xn)};Ct.getScrollFunc=function(r,e){return Ku(Li(r)[0],e?fi:xn)};Ct.getById=function(r){return Dp[r]};Ct.getAll=function(){return Et.slice(0)};Ct.isScrolling=function(){return!!Di};Ct.addEventListener=function(r,e){var t=ol[r]||(ol[r]=[]);~t.indexOf(e)||t.push(e)};Ct.removeEventListener=function(r,e){var t=ol[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=st.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(p){h.length||f.restart(!0),h.push(p.trigger),d.push(p),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Rr(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Rr(s)&&(s=s(),An(Ct,"refresh",function(){return s=e.batchMax()})),Li(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ct.create(c))}),t};Ct.sort=function(r){return Et.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Hx()&&st.registerPlugin(Ct);tr.registerPlugin(Ct);function Wx(r,e,t){let n=r.querySelector("[data-about-stack]");if(!n)return;let i=Array.from(n.querySelectorAll("[data-about-stack-group]")),s=Array.from(n.querySelectorAll(".about-tech-item img")),o=[],a=0,l=()=>{o.forEach(h=>{h.scrollTrigger?.kill(),h.kill()}),o=[],i.forEach(h=>tr.set(h.querySelectorAll("h3, .about-tech-item"),{clearProps:"opacity,transform"}))},c=()=>{l(),!t&&(i.forEach(h=>{let d={trigger:h,scroller:r,start:"top 90%",end:"top 70%",scrub:.5};o.push(tr.fromTo(h.querySelector("h3"),{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:d})),o.push(tr.fromTo(h.querySelectorAll(".about-tech-item"),{opacity:0,y:30},{opacity:1,y:0,stagger:.05,duration:.6,ease:"power2.out",scrollTrigger:{...d}}))}),Ct.refresh())},u=()=>!t&&!window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: hover)").matches;s.forEach(h=>{e.listen(h.parentElement,"mouseenter",()=>{u()&&tr.to(h,{rotation:360,scale:1.1,duration:.6,ease:"power2.out",overwrite:"auto"})}),e.listen(h.parentElement,"mouseleave",()=>{u()&&tr.to(h,{rotation:0,scale:1,duration:.5,ease:"power2.inOut",overwrite:"auto"})})}),a=requestAnimationFrame(()=>{e.active&&c()}),e.cleanup(()=>{cancelAnimationFrame(a),l(),tr.killTweensOf(s)})}function Xx(r,e){let t=r.querySelector(".about-service-list"),n=t?Array.from(t.querySelectorAll(".about-service-card")):[];if(!n.length)return;let i=[],s=0,o=0,a=()=>{o=0;let h=r.scrollTop;i.forEach(({card:d,start:f})=>{let p=Math.max(0,Math.min(h,s)-f);d.style.transform=`translateY(${p}px)`})},l=()=>{n.forEach(_=>{_.style.transform=""});let h=getComputedStyle(t).getPropertyValue("--service-stack").trim()!=="0",d=r.getBoundingClientRect().top,p=parseFloat(getComputedStyle(document.documentElement).fontSize)*3.25;i=h?n.map(_=>{let g=_.getBoundingClientRect().top-d+r.scrollTop,m=_.querySelector("header"),v={card:_,start:g-p};return p+=m.offsetTop+m.offsetHeight,v}):[],p>r.clientHeight*.85&&(i=[]),s=i.length?i[i.length-1].start:0,a()},c=()=>{o||(o=requestAnimationFrame(a))},u=new ResizeObserver(l);u.observe(r),n.forEach(h=>u.observe(h)),e.listen(r,"scroll",c,{passive:!0}),document.fonts?.ready.then(()=>{e.active&&l()}),l(),e.cleanup(()=>{u.disconnect(),cancelAnimationFrame(o),n.forEach(h=>{h.style.transform=""})})}(function(){"use strict";let e=document.querySelector("[data-about-page]");if(!e||e.dataset.aboutMounted==="true")return;e.dataset.aboutMounted="true";let t=window.MinosPage&&window.MinosPage.scope;if(!t)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new Set,s=(p,_)=>{let g=window.setTimeout(()=>{i.delete(g),p()},_);return i.add(g),g};t.cleanup(()=>i.forEach(clearTimeout)),o(),a(),l(),c(),u(),x0(e,t,n,s);function o(){e.querySelectorAll("[data-about-dialog]").forEach(p=>{t.listen(p,"click",()=>{let _=e.querySelector("#"+p.dataset.aboutDialog);_&&!_.open&&_.showModal()})}),e.querySelectorAll(".about-dialog").forEach(p=>{t.listen(p,"click",_=>{_.target===p&&p.close()}),t.cleanup(()=>{p.open&&p.close()})})}function a(){let p=e.querySelector("[data-about-terminal]"),_=e.querySelector("[data-about-terminal-toggle]"),g=e.querySelector("[data-about-form]"),m=e.querySelector("[data-about-input]"),v=e.querySelector("[data-about-messages]"),b=e.querySelector("[data-terminal-knowledge]");if(!p||!_||!g||!m||!v||!b)return;let x=[];try{let y=JSON.parse(b.textContent);x=Array.isArray(y.commands)?y.commands:[]}catch{x=[]}let S=new Map(x.map(y=>[String(y.input||"").trim().toLowerCase(),String(y.output||"")]).filter(([y])=>y)),T=()=>new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date);e.querySelectorAll("[data-about-message-time]").forEach(y=>{y.textContent=T()}),t.listen(_,"click",y=>{y.preventDefault();let C=p.classList.toggle("is-collapsed");_.setAttribute("aria-expanded",String(!C))});let w=y=>S.get(y.trim().toLowerCase())||`Command not found: ${y}. Type help to list available commands.`,R=(y,C,N,B)=>{let O=document.createElement("div");O.className=`about-message is-${y}`,O.innerHTML=y==="user"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 7V3M8 3h8M8 16h.01M16 16h.01"></path></svg>';let V=document.createElement("div"),L=document.createElement("p"),j=document.createElement("strong"),G=document.createElement("time"),se=document.createElement("p"),$=document.createElement("span"),ue=document.createTextNode(B?"":` ${N}`);if(j.textContent=C,G.textContent=T(),$.textContent="$",L.append(j,G),se.append($,ue),V.append(L,se),O.append(V),v.appendChild(O),v.scrollTop=v.scrollHeight,!B||n){B&&(ue.nodeValue=` ${N}`);return}let Re=0,Ne=()=>{t.active&&(Re=Math.min(N.length,Re+2),ue.nodeValue=` ${N.slice(0,Re)}`,v.scrollTop=v.scrollHeight,Re<N.length&&s(Ne,13))};Ne()},M=y=>{let C=String(y||"").trim();C&&(p.classList.remove("is-collapsed"),_.setAttribute("aria-expanded","true"),R("user","user@terminal",C,!1),m.value="",s(()=>R("assistant","sa1ntchen@terminal",w(C),!0),n?0:180),e.dispatchEvent(new CustomEvent("about:reply")))};t.listen(g,"submit",y=>{y.preventDefault(),M(m.value)}),t.listen(m,"keydown",y=>{y.key!=="Enter"||y.shiftKey||(y.preventDefault(),M(m.value))})}function l(){e.querySelectorAll("[data-about-copy-contact]").forEach(p=>{let _=p.nextElementSibling,g=p.dataset.aboutCopyLabel,m=0,v=!1;t.listen(p,"click",async()=>{if(!v){v=!0,clearTimeout(m);try{await navigator.clipboard.writeText(p.dataset.aboutCopyContact),t.active&&_&&(_.textContent=`${g} copied`)}catch{t.active&&_&&(_.textContent="Unable to copy. Please try again.")}finally{v=!1,t.active&&_&&(m=s(()=>{_.textContent=`click to copy ${g}`},2500))}}})})}function c(){let p=e.querySelector("[data-about-profile]"),_=e.querySelector("[data-about-arc-menu]"),g=_?.querySelector(".about-arc-menu__items");if(!p||!_||!g)return;let m=Array.from(p.querySelectorAll("[data-about-menu-label][id]")).filter(T=>T.dataset.aboutMenuLabel.trim());if(!m.length)return;let v=m.map((T,w)=>{let R=`#${T.id}`,M=m.length>1?-90-180*w/(m.length-1):180,y=document.createElement("a");return y.href=R,y.dataset.aboutArcLink=R,y.textContent=T.dataset.aboutMenuLabel,y.style.setProperty("--arc-index",w),y.style.setProperty("--arc-angle",`${M}deg`),g.appendChild(y),y}),b=null,x=T=>{if(v.forEach((M,y)=>{let C=m[y]===T;M.classList.toggle("is-active",C),C?M.setAttribute("aria-current","location"):M.removeAttribute("aria-current")}),b===T)return;b=T;let w=m.indexOf(T),R=T.dataset.aboutMenuLabel;e.dataset.aboutSectionIndex=String(w),e.dataset.aboutSectionKey=R,e.dispatchEvent(new CustomEvent("about:sectionchange",{detail:{index:w,key:R}}))},S=()=>{let w=p.getBoundingClientRect().top+p.clientHeight*.34,R=m[0];m.forEach(M=>{M.getBoundingClientRect().top<=w&&(R=M)}),p.scrollHeight-p.scrollTop-p.clientHeight<3&&(R=m[m.length-1]),x(R)};v.forEach(T=>{t.listen(T,"click",w=>{w.preventDefault();let R=p.querySelector(T.dataset.aboutArcLink);s(()=>R?.scrollIntoView({behavior:n?"auto":"smooth",block:"start"}),0)})}),t.listen(p,"scroll",S,{passive:!0}),t.listen(window,"resize",S,{passive:!0}),requestAnimationFrame(S)}function u(){let p=e.querySelector("[data-about-profile]");if(!p)return;let _=p.querySelector("[data-about-progress]"),g=p.querySelector("[data-about-hero-inner]"),m=Array.from(p.querySelectorAll("[data-about-reveal], [data-about-animated-heading], [data-about-experience]")),v=Array.from(p.querySelectorAll(".about-word-reveal"));p.querySelectorAll("[data-about-animated-heading]").forEach(y=>{let C=0;y.querySelectorAll(".about-heading-word").forEach(N=>{if(N.dataset.aboutCharsReady==="true")return;let B=document.createDocumentFragment();Array.from(N.textContent||"").forEach(O=>{let V=document.createElement("i");V.style.setProperty("--heading-char-index",C++),V.textContent=O===" "?"\xA0":O,B.appendChild(V)}),N.textContent="",N.appendChild(B),N.dataset.aboutCharsReady="true"})});let b=y=>{y.classList.add("is-visible"),y.matches("[data-about-experience]")&&y.querySelectorAll("[data-about-animated-heading]").forEach(C=>C.classList.add("is-visible"))};if(n||!("IntersectionObserver"in window))m.forEach(b);else{let y=new IntersectionObserver(C=>{C.forEach(N=>{N.isIntersecting&&(b(N.target),y.unobserve(N.target))})},{root:p,rootMargin:"0px 0px -8% 0px",threshold:.08});m.forEach(C=>y.observe(C)),t.cleanup(()=>y.disconnect())}let x=y=>Math.max(0,Math.min(1,y)),S=()=>{let y=p.scrollHeight-p.clientHeight,C=y>0?p.scrollTop/y:0;if(_&&(_.style.width=`${C*100}%`),g&&!n){let V=x(p.scrollTop/Math.max(1,p.clientHeight));g.style.transform=`translate3d(0, ${V*-15}vh, 0)`}if(n)return;let B=p.getBoundingClientRect().top+p.clientHeight*.95,O=p.clientHeight*.4;v.forEach(V=>{let L=V.getBoundingClientRect(),j=x((B-L.top)/Math.max(1,O+L.height)),G=Array.from(V.children),se=Math.max(1,G.length*.05);G.forEach(($,ue)=>{let Re=x(j*(1+se)-ue*.05);$.style.opacity=String(.22+Re*.78),$.style.transform=`translateY(${(1-Re)*.5}rem) scale(${.94+Re*.06})`,$.style.color=V.closest(".is-dark")?`rgba(226,232,228,${.22+Re*.78})`:`rgba(17,17,17,${.22+Re*.78})`})})};t.listen(p,"scroll",S,{passive:!0}),S(),p.querySelectorAll("[data-about-scroll]").forEach(y=>{t.listen(y,"click",()=>{p.querySelector(y.dataset.aboutScroll)?.scrollIntoView({behavior:n?"auto":"smooth",block:"start"})})});let T=p.querySelector("[data-about-role-ticker]"),w=T?Array.from(T.children):[];if(w.length>1&&!n){let y=0,C=()=>{let B=w[y],O=(y+1)%w.length,V=w[O];B.classList.add("is-leaving"),V.classList.add("is-active"),s(()=>{B.classList.remove("is-active","is-leaving"),y=O},460)},N=window.setInterval(C,2600);t.cleanup(()=>clearInterval(N))}let R=p.querySelector(".about-profile-name"),M=R?Array.from(R.querySelectorAll("[data-about-hero-char]")):[];R&&M.length&&!n&&t.listen(R,"mouseenter",()=>{let y=(M.length-1)/2;M.forEach((C,N)=>{C.animate([{transform:"translateY(0)"},{transform:"translateY(-9%)",offset:.3},{transform:"translateY(0)"}],{duration:720,delay:Math.abs(N-y)*16,easing:"cubic-bezier(.25,.46,.45,.94)"})})}),Wx(p,t,n),Xx(p,t),h(p),d(p),f(p),requestAnimationFrame(()=>{t.active&&(p.classList.add("is-profile-ready"),S())})}function h(p){n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches||p.querySelectorAll(".about-motion-button").forEach(_=>{t.listen(_,"pointermove",g=>{let m=_.getBoundingClientRect(),v=g.clientX-m.left,b=g.clientY-m.top;_.style.translate=`${(v-m.width/2)*.22}px ${(b-m.height/2)*.22}px`}),t.listen(_,"pointerleave",()=>{_.animate([{translate:_.style.translate||"0 0"},{translate:"0 0"}],{duration:650,easing:"cubic-bezier(.34,1.56,.64,1)",fill:"forwards"}),_.style.translate="0 0"})})}function d(p){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let _=p.querySelector("[data-about-projects]"),g=p.querySelector("[data-about-project-preview]"),m=g?.querySelector("[data-about-project-reel]");if(!_||!g||!m)return;let v={x:0,y:0},b={x:0,y:0},x=!1,S=0,T=()=>{b.x+=(v.x-b.x)*.12,b.y+=(v.y-b.y)*.12,g.style.left=`${b.x}px`,g.style.top=`${b.y}px`,x||Math.abs(v.x-b.x)>.2||Math.abs(v.y-b.y)>.2?S=requestAnimationFrame(T):S=0};t.listen(_,"pointermove",w=>{v.x=w.clientX,v.y=w.clientY}),_.querySelectorAll("[data-about-project-index]").forEach(w=>{t.listen(w,"pointerenter",R=>{let M=Number(w.dataset.aboutProjectIndex)||0;v.x=b.x=R.clientX,v.y=b.y=R.clientY,m.style.transform=`translateY(${-M*100}%)`,g.classList.add("is-visible"),x=!0,S||(S=requestAnimationFrame(T))}),t.listen(w,"pointerleave",()=>{x=!1,g.classList.remove("is-visible")})}),t.cleanup(()=>{S&&cancelAnimationFrame(S)})}function f(p){let _=p.querySelector("[data-about-marquee-track]");if(!_||n)return;let g=0,m=0,v=0,b=p.scrollTop,x=0,S=()=>{v+=(m-v)*.08,m*=.93,g-=.85+v;let T=_.scrollWidth/2;T>0&&g<=-T&&(g+=T),T>0&&g>0&&(g-=T);let w=Math.max(-6,Math.min(6,v*.45));_.style.transform=`translate3d(${g}px,0,0) skewX(${w}deg)`,x=requestAnimationFrame(S)};t.listen(p,"scroll",()=>{let T=p.scrollTop-b;b=p.scrollTop,Math.abs(T)>.1&&(m=Math.max(-18,Math.min(18,T*.14)))},{passive:!0}),x=requestAnimationFrame(S),t.cleanup(()=>{x&&cancelAnimationFrame(x)})}})();})();
/*!
 * Stack interactions adapted from aitezazdev/Portfolio, TechStack.tsx.
 * MIT License. Copyright (c) 2026 Aitezaz Sikandar
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm v3.4.2
   * VRM file loader for three.js.
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm-core v3.4.2
   * The implementation of core features of VRM, for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-core is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-mtoon v3.4.2
   * MToon (toon material) module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.4.2
   * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-v0compat v3.4.2
   * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-node-constraint v3.4.2
   * Node constraint module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-node-constraint is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-springbone v3.4.2
   * Spring bone module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2025 pixiv Inc.
   * @pixiv/three-vrm-springbone is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.5.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.5.1
   * https://greensock.com
   *
   * Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.5.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
