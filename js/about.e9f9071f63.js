(()=>{var bm=0,Hh=1,wm=2;var zh=1,Am=2,xi=3,ri=0,$t=1,cn=2,Wi=0,Ur=1,Gh=2,Wh=3,Xh=4,Rm=5,cr=100,Cm=101,Pm=102,Im=103,Lm=104,Dm=200,Nm=201,Um=202,Om=203,Nl=204,Ul=205,Fm=206,Bm=207,km=208,Vm=209,Hm=210,zm=211,Gm=212,Wm=213,Xm=214,Ql=0,ec=1,tc=2,Or=3,nc=4,ic=5,rc=6,sc=7,qh=0,qm=1,Ym=2,Xi=0,Zm=1,$m=2,jm=3,Jm=4,Km=5,Qm=6,eg=7,Lh="attached",tg="detached",Yh=300,Xr=301,qr=302,oc=303,ac=304,wa=306,ur=1e3,di=1001,Us=1002,Yt=1003,lc=1004;var Yr=1005;var an=1006,Js=1007;var oi=1008;var ai=1009,Zh=1010,$h=1011,Ks=1012,cc=1013,fr=1014,Xn=1015,Qs=1016,uc=1017,hc=1018,eo=1020,jh=35902,Jh=35899,Kh=1021,Qh=1022,In=1023,Os=1026,to=1027,dc=1028,fc=1029,ed=1030,pc=1031;var mc=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,gc=35840,_c=35841,xc=35842,vc=35843,yc=36196,Mc=37492,Sc=37496,Tc=37808,Ec=37809,bc=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,Nc=37819,Uc=37820,Oc=37821,Fc=36492,Bc=36494,kc=36495,Vc=36283,Hc=36284,zc=36285,Gc=36286,Ia=2200,Wc=2201,ng=2202,Fr=2300,Br=2301,Dl=2302,Dr=2400,Nr=2401,Ko=2402,Xc=2500,ig=2501,td=0,La=1,no=2,rg=3200,sg=3201;var Da=0,og=1,qi="",It="srgb",Zt="srgb-linear",Qo="linear",mt="srgb";var Lr=7680;var Dh=519,ag=512,lg=513,cg=514,nd=515,ug=516,hg=517,dg=518,fg=519,Ol=35044,id=35048;var rd="300 es",ni=2e3,ea=2001;var pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hp=1234567,jo=Math.PI/180,kr=180/Math.PI;function ii(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function sd(r,e){return(r%e+e)%e}function Wx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Xx(r,e,t){return r!==e?(t-r)/(e-r):0}function Jo(r,e,t){return(1-t)*r+t*e}function qx(r,e,t,n){return Jo(r,e,1-Math.exp(-t*n))}function Yx(r,e=1){return e-Math.abs(sd(r,e*2)-e)}function Zx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $x(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function jx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Jx(r,e){return r+Math.random()*(e-r)}function Kx(r){return r*(.5-Math.random())}function Qx(r){r!==void 0&&(Hp=r);let e=Hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(r){return r*jo}function tv(r){return r*kr}function nv(r){return(r&r-1)===0&&r!==0}function iv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sv(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:jo,RAD2DEG:kr,generateUUID:ii,clamp:$e,euclideanModulo:sd,mapLinear:Wx,inverseLerp:Xx,lerp:Jo,damp:qx,pingpong:Yx,smoothstep:Zx,smootherstep:$x,randInt:jx,randFloat:Jx,randFloatSpread:Kx,seededRandom:Qx,degToRad:ev,radToDeg:tv,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:rv,setQuaternionFromProperEuler:sv,normalize:pt,denormalize:ti},Xe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a,p=l*d+c*f+u*m+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,p*M);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let x=a*M;if(l=l*g+d*x,c=c*g+f*x,u=u*g+m*x,h=h*g+_*x,g===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new I,zp=new we,Oe=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],y=i[4],x=i[7],T=i[2],E=i[5],w=i[8];return s[0]=o*_+a*M+l*T,s[3]=o*g+a*y+l*E,s[6]=o*p+a*x+l*w,s[1]=c*_+u*M+h*T,s[4]=c*g+u*y+h*E,s[7]=c*p+u*x+h*w,s[2]=d*_+f*M+m*T,s[5]=d*g+f*y+m*E,s[8]=d*p+f*x+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oh.makeScale(e,t)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oh=new Oe;function od(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pg(){let r=Fs("canvas");return r.style.display="block",r}var Gp={};function Bs(r){r in Gp||(Gp[r]=!0,console.warn(r))}function mg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Wp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ov(){let r={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?Qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zt]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),r}var Qe=ov();function Fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ys,Fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Fs("canvas")),ys.width=e.width,ys.height=e.height;let i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},av=0,ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ah(i[o].image)):s.push(ah(i[o]))}else s=ah(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lv=0,lh=new I,Wt=class r extends pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=di,i=di,s=an,o=oi,a=In,l=ai,c=r.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ii(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Yh;Wt.DEFAULT_ANISOTROPY=1;var lt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(f+1)/2,T=(p+1)/2,E=(u+d)/4,w=(h+_)/4,P=(m+g)/4;return y>x&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=w/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=P/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=P/s),this.set(n,i,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Wt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),ul.subVectors(this.max,zo),Ms.subVectors(e.a,zo),Ss.subVectors(e.b,zo),Ts.subVectors(e.c,zo),nr.subVectors(Ss,Ms),ir.subVectors(Ts,Ss),Rr.subVectors(Ms,Ts);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Rr.z,Rr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Rr.z,0,-Rr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Rr.y,Rr.x,0];return!ch(t,Ms,Ss,Ts,ul)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Ms,Ss,Ts,ul))?!1:(hl.crossVectors(nr,ir),t=[hl.x,hl.y,hl.z],ch(t,Ms,Ss,Ts,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new I,new I,new I,new I,new I,new I,new I,new I],Kn=new I,cl=new Cn,Ms=new I,Ss=new I,Ts=new I,nr=new I,ir=new I,Rr=new I,zo=new I,ul=new I,hl=new I,Cr=new I;function ch(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cr.fromArray(r,s);let a=i.x*Math.abs(Cr.x)+i.y*Math.abs(Cr.y)+i.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),u=n.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var cv=new Cn,Go=new I,uh=new I,mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);let t=Go.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Go,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(uh)),this.expandByPoint(Go.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new I,hh=new I,dl=new I,rr=new I,dh=new I,fl=new I,fh=new I,hr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hh.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(hh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=rr.dot(this.direction),l=-rr.dot(dl),c=rr.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hh).addScaledVector(dl,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,s){dh.subVectors(t,e),fl.subVectors(n,e),fh.crossVectors(dh,fl);let o=this.direction.dot(fh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);let l=a*this.direction.dot(fl.crossVectors(rr,fl));if(l<0)return null;let c=a*this.direction.dot(dh.cross(rr));if(c<0||l+c>o)return null;let u=-a*rr.dot(fh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,hv)}lookAt(e,t,n){let i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),sr.crossVectors(n,An),sr.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),sr.crossVectors(n,An)),sr.normalize(),pl.crossVectors(An,sr),i[0]=sr.x,i[4]=pl.x,i[8]=An.x,i[1]=sr.y,i[5]=pl.y,i[9]=An.y,i[2]=sr.z,i[6]=pl.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],T=n[15],E=i[0],w=i[4],P=i[8],v=i[12],S=i[1],C=i[5],U=i[9],O=i[13],V=i[2],H=i[6],D=i[10],Q=i[14],G=i[3],W=i[7],ee=i[11],se=i[15];return s[0]=o*E+a*S+l*V+c*G,s[4]=o*w+a*C+l*H+c*W,s[8]=o*P+a*U+l*D+c*ee,s[12]=o*v+a*O+l*Q+c*se,s[1]=u*E+h*S+d*V+f*G,s[5]=u*w+h*C+d*H+f*W,s[9]=u*P+h*U+d*D+f*ee,s[13]=u*v+h*O+d*Q+f*se,s[2]=m*E+_*S+g*V+p*G,s[6]=m*w+_*C+g*H+p*W,s[10]=m*P+_*U+g*D+p*ee,s[14]=m*v+_*O+g*Q+p*se,s[3]=M*E+y*S+x*V+T*G,s[7]=M*w+y*C+x*H+T*W,s[11]=M*P+y*U+x*D+T*ee,s[15]=M*v+y*O+x*Q+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],M=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,x=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,T=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,E=t*M+n*y+i*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=M*w,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*w,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*w,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=y*w,e[5]=(u*g*s-m*d*s+m*i*f-t*g*f-u*i*p+t*d*p)*w,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=x*w,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=T*w,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*w,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,M=l*c,y=l*u,x=l*h,T=n.x,E=n.y,w=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+x)*T,i[2]=(m-y)*T,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(m+y)*w,i[9]=(g-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Es.set(i[0],i[1],i[2]).length(),o=Es.set(i[4],i[5],i[6]).length(),a=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);let c=1/s,u=1/o,h=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ni,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===ni)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ea)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ni,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===ni)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ea)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new I,Qn=new Ie,uv=new I(0,0,0),hv=new I(1,1,1),sr=new I,pl=new I,An=new I,qp=new Ie,Yp=new we,Xt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xt.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dv=0,Zp=new I,bs=new we,Di=new Ie,ml=new I,Wo=new I,fv=new I,pv=new we,$p=new I(1,0,0),jp=new I(0,1,0),Jp=new I(0,0,1),Kp={type:"added"},mv={type:"removed"},ws={type:"childadded",child:null},ph={type:"childremoved",child:null},rt=class r extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new I,t=new Xt,n=new we,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Oe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,t){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ml.copy(e):ml.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Wo,ml,this.up):Di.lookAt(ml,Wo,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(Di),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};rt.DEFAULT_UP=new I(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new I,Ni=new I,mh=new I,Ui=new I,As=new I,Rs=new I,Qp=new I,gh=new I,_h=new I,xh=new I,vh=new lt,yh=new lt,Mh=new lt,lr=class r{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),Ni.subVectors(n,t),mh.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(Ni),l=ei.dot(mh),c=Ni.dot(Ni),u=Ni.dot(mh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return vh.setScalar(0),yh.setScalar(0),Mh.setScalar(0),vh.fromBufferAttribute(e,t),yh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vh,s.x),o.addScaledVector(yh,s.y),o.addScaledVector(Mh,s.z),o}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Ni.subVectors(e,t),ei.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ei.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;As.subVectors(i,n),Rs.subVectors(s,n),gh.subVectors(e,n);let l=As.dot(gh),c=Rs.dot(gh);if(l<=0&&c<=0)return t.copy(n);_h.subVectors(e,i);let u=As.dot(_h),h=Rs.dot(_h);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(As,o);xh.subVectors(e,s);let f=As.dot(xh),m=Rs.dot(xh);if(m>=0&&f<=m)return t.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Rs,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Qp.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Qp,a);let p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Sh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=sd(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sh(o,s,e+1/3),this.g=Sh(o,s,e),this.b=Sh(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round($e(Qt.r*255,0,255))*65536+Math.round($e(Qt.g*255,0,255))*256+Math.round($e(Qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,i=Qt.g,s=Qt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=It){Qe.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,i=Qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(gl);let n=Jo(or.h,gl.h,t),i=Jo(or.s,gl.s,t),s=Jo(or.l,gl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Re;Re.NAMES=gg;var gv=0,en=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ur,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gn=class extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new I,_l=new Xe,_v=0,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}};var na=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var on=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},xv=0,Hn=new Ie,Th=new rt,Cs=new I,Rn=new Cn,Xo=new Cn,Gt=new I,ct=class r extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Rn.min,Xo.min),Rn.expandByPoint(Gt),Gt.addVectors(Rn.max,Xo.max),Rn.expandByPoint(Gt)):(Rn.expandByPoint(Xo.min),Rn.expandByPoint(Xo.max))}Rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Gt.add(Cs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;let c=new I,u=new I,h=new I,d=new Xe,f=new Xe,m=new Xe,_=new I,g=new I;function p(P,v,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,v),m.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(C),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(C),a[P].add(_),a[v].add(_),a[S].add(_),l[P].add(g),l[v].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,v=M.length;P<v;++P){let S=M[P],C=S.start,U=S.count;for(let O=C,V=C+U;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new I,x=new I,T=new I,E=new I;function w(P){T.fromBufferAttribute(i,P),E.copy(T);let v=a[P];y.copy(v),y.sub(T.multiplyScalar(T.dot(v))).normalize(),x.crossVectors(E,v);let C=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,v=M.length;P<v;++P){let S=M[P],C=S.start,U=S.count;for(let O=C,V=C+U;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},em=new Ie,Pr=new hr,xl=new mn,tm=new I,vl=new I,yl=new I,Ml=new I,Eh=new I,Sl=new I,nm=new I,Tl=new I,Ot=class extends rt{constructor(e=new ct,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Eh.fromBufferAttribute(h,e),o?Sl.addScaledVector(Eh,u):Sl.addScaledVector(Eh.sub(t),u))}t.add(Sl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(xl.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(xl,tm)===null||Pr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(em),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,T=y;x<T;x+=3){let E=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);i=El(this,p,e,n,c,u,h,E,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=El(this,o,e,n,c,u,h,M,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,T=y;x<T;x+=3){let E=x,w=x+1,P=x+2;i=El(this,p,e,n,c,u,h,E,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=g,y=g+1,x=g+2;i=El(this,o,e,n,c,u,h,M,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function vv(r,e,t,n,i,s,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ri,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:r}}function El(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,vl),r.getVertexPosition(l,yl),r.getVertexPosition(c,Ml);let u=vv(r,e,t,n,vl,yl,Ml,nm);if(u){let h=new I;lr.getBarycoord(nm,vl,yl,Ml,h),i&&(u.uv=lr.getInterpolatedAttribute(i,a,l,c,h,new Xe)),s&&(u.uv1=lr.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(u.normal=lr.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};lr.getNormal(vl,yl,Ml,d.normal),u.face=d,u.barycoord=h}return u}var Hs=class r extends ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(h,2));function m(_,g,p,M,y,x,T,E,w,P,v){let S=x/w,C=T/P,U=x/2,O=T/2,V=E/2,H=w+1,D=P+1,Q=0,G=0,W=new I;for(let ee=0;ee<D;ee++){let se=ee*C-O;for(let xe=0;xe<H;xe++){let ye=xe*S-U;W[_]=ye*M,W[g]=se*y,W[p]=V,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[p]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(xe/w),h.push(1-ee/P),Q+=1}}for(let ee=0;ee<P;ee++)for(let se=0;se<w;se++){let xe=d+se+H*ee,ye=d+se+H*(ee+1),Le=d+(se+1)+H*(ee+1),Ye=d+(se+1)+H*ee;l.push(xe,ye,Ye),l.push(ye,Le,Ye),G+=6}a.addGroup(f,G,v),f+=G,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){let e={};for(let t=0;t<r.length;t++){let n=Zr(r[t]);for(let i in n)e[i]=n[i]}return e}function yv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ad(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var qc={clone:Zr,merge:tn},Mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ra=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ar=new I,im=new Xe,rm=new Xe,Ut=class extends ra{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,im,rm),t.subVectors(rm,im)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Is=1,Vl=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ut(Ps,Is,e,t);i.layers=this.layers,this.add(i);let s=new Ut(Ps,Is,e,t);s.layers=this.layers,this.add(s);let o=new Ut(Ps,Is,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Ps,Is,e,t);a.layers=this.layers,this.add(a);let l=new Ut(Ps,Is,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sa=class extends Wt{constructor(e=[],t=Xr,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hs(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Wi});s.uniforms.tEquirect.value=t;let o=new Ot(i,s),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=an),new Vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},At=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tv={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var oa=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new I,Ws=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var sm=new I,om=new lt,am=new lt,Ev=new I,lm=new Ie,bl=new I,bh=new mn,cm=new Ie,wh=new hr,Vr=class extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bh.copy(this.boundingSphere),bh.applyMatrix4(i),e.ray.intersectsSphere(bh)!==!1&&(cm.copy(i).invert(),wh.copy(e.ray).applyMatrix4(cm),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;om.fromBufferAttribute(i.attributes.skinIndex,e),am.fromBufferAttribute(i.attributes.skinWeight,e),sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=am.getComponent(s);if(o!==0){let a=om.getComponent(s);lm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ev.copy(sm).applyMatrix4(lm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},aa=class extends Wt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Yt,u=Yt,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},um=new Ie,bv=new Ie,si=class r{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:bv;um.multiplyMatrices(a,t[s]),um.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new aa(t,e,e,In,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Xs),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},dr=class extends qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new Ie,hm=new Ie,wl=[],dm=new Cn,wv=new Ie,qo=new Ot,Yo=new mn,la=class extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),dm.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(dm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Yo.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qo.geometry=this.geometry,qo.material=this.material,qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(n),e.ray.intersectsSphere(Yo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ls),hm.multiplyMatrices(n,Ls),qo.matrixWorld=hm,qo.raycast(e,wl);for(let o=0,a=wl.length;o<a;o++){let l=wl[o];l.instanceId=s,l.object=this,t.push(l)}wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(i*this.count),i,this.count,dc,Xn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ah=new I,Av=new I,Rv=new Oe,hi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ah.subVectors(n,t).cross(Av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ah),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rv.getNormalMatrix(e),i=this.coplanarPoint(Ah).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new mn,Cv=new Xe(.5,.5),Al=new I,qs=class{constructor(e=new hi,t=new hi,n=new hi,i=new hi,s=new hi,o=new hi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],M=s[12],y=s[13],x=s[14],T=s[15];if(i[0].setComponents(c-o,f-u,p-m,T-M).normalize(),i[1].setComponents(c+o,f+u,p+m,T+M).normalize(),i[2].setComponents(c+a,f+h,p+_,T+y).normalize(),i[3].setComponents(c-a,f-h,p-_,T-y).normalize(),n)i[4].setComponents(l,d,g,x).normalize(),i[5].setComponents(c-l,f-d,p-g,T-x).normalize();else if(i[4].setComponents(c-l,f-d,p-g,T-x).normalize(),t===ni)i[5].setComponents(c+l,f+d,p+g,T+x).normalize();else if(t===ea)i[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);let t=Cv.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ln=class extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zl=new I,Gl=new I,fm=new Ie,Zo=new hr,Rl=new mn,Rh=new I,pm=new I,Bi=class extends rt{constructor(e=new ct,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zl.fromBufferAttribute(t,i-1),Gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zl.distanceTo(Gl);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;fm.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(fm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=u.getX(_),M=u.getX(_+1),y=Cl(this,e,Zo,l,p,M,_);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(f),p=Cl(this,e,Zo,l,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=Cl(this,e,Zo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Cl(this,e,Zo,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Cl(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(zl.fromBufferAttribute(a,i),Gl.fromBufferAttribute(a,s),t.distanceSqToSegment(zl,Gl,Rh,pm)>n)return;Rh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Rh);if(!(c<e.near||c>e.far))return{distance:c,point:pm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var mm=new I,gm=new I,zn=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mm.fromBufferAttribute(t,i),gm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mm.distanceTo(gm);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ca=class extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_m=new Ie,Nh=new hr,Pl=new mn,Il=new I,ua=class extends rt{constructor(e=new ct,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(i),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;_m.copy(i).invert(),Nh.copy(e.ray).applyMatrix4(_m);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);Il.fromBufferAttribute(h,g),xm(Il,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Il.fromBufferAttribute(h,m),xm(Il,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xm(r,e,t,n,i,s,o){let a=Nh.distanceSqToPoint(r);if(a<t){let l=new I;Nh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ha=class extends Wt{constructor(e,t,n=fr,i,s,o,a=Yt,l=Yt,c,u=Os,h=1){if(u!==Os&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},da=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var fa=class r extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let M=p*d-o;for(let y=0;y<c;y++){let x=y*h-s;m.push(x,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),E=M+1+c*p;f.push(y,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hr=class extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends Hr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wl=class extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ll(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Pv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Iv(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vm(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function _g(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dr,endingEnd:Dr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nr:s=e,a=2*t-n;break;case Ko:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nr:o=e,l=2*n-t;break;case Ko:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+M*o[c+T]+y*o[l+T]+x*o[h+T];return s}},pa=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Yl=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ll(t,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ll(e.times,Array),values:Ll(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Pv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Br;var Vi=class extends xn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Fr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};ma.prototype.ValueTypeName="color";var Gn=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Gn.prototype.ValueTypeName="number";var Zl=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)we.slerpFlat(s,0,o,c-a,o,c,l);return s}},Wn=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};Wn.prototype.ValueTypeName="quaternion";Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends xn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Fr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};gi.prototype.ValueTypeName="vector";var zi=class{constructor(e="",t=-1,n=[],i=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dv(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=Iv(l);l=vm(l,1,u),c=vm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,_){if(f.length!==0){let g=[],p=[];_g(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){let y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Gn(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(gi,f+".position",d,"pos",i),n(Wn,f+".quaternion",d,"rot",i),n(gi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Lv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gn;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return ma;case"quaternion":return Wn;case"bool":case"boolean":return Vi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Dv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lv(r.type);if(r.times===void 0){let t=[],n=[];_g(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},$l=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xg=new $l,_i=class{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},Uh=class extends Error{constructor(e,t){super(e),this.response=t}},Zs=class extends _i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Oi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let E=0,w=u.length;E<w;E++){let P=u[E];P.onProgress&&P.onProgress(T)}p.enqueue(x),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{fi.add(`file:${e}`,c);let u=Oi[e];delete Oi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=new WeakMap,$s=class extends _i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Ds.get(o);h===void 0&&(h=[],Ds.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Fs("img");function l(){u(),t&&t(this);let h=Ds.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ds.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),fi.remove(`image:${e}`);let d=Ds.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Ds.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ga=class extends _i{constructor(e){super(e)}load(e,t,n,i){let s=new Wt,o=new $s(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},zr=class extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Ch=new Ie,ym=new I,Mm=new I,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),Mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mm),t.updateMatrixWorld(),Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oh=class extends _a{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=kr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xa=class extends zr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Oh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sm=new Ie,$o=new I,Ph=new I,Fh=class extends _a{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$o.setFromMatrixPosition(e.matrixWorld),n.position.copy($o),Ph.copy(n.position),Ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ph),n.updateMatrixWorld(),i.makeTranslation(-$o.x,-$o.y,-$o.z),Sm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sm,n.coordinateSystem,n.reversedDepth)}},va=class extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gr=class extends ra{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bh=class extends _a{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ya=class extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ih=new WeakMap,Ma=class extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=fi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Ih.has(o)===!0)i&&i(Ih.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ih.set(l,c),fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var jl=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Jl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){we.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;we.multiplyQuaternionsFlat(e,o,e,t,e,n),we.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},ld="\\[\\]\\.:\\/",Nv=new RegExp("["+ld+"]","g"),cd="[^"+ld+"]",Uv="[^"+ld.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",cd),Fv=/(WCOD+)?/.source.replace("WCOD",Uv),Bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cd),kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cd),Vv=new RegExp("^"+Ov+Fv+Bv+kv+"$"),Hv=["material","materials","bones","map"],kh=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nv,"")}static parseTrackName(e){let t=Vv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Hv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=kh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Dr,endingEnd:Dr};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ig:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Xc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===ng;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ia){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Nr,i.endingEnd=Nr):(e?i.endingStart=this.zeroSlopeAtStart?Nr:Dr:i.endingStart=Ko,t?i.endingEnd=this.zeroSlopeAtEnd?Nr:Dr:i.endingEnd=Ko)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},zv=new Float32Array(1),Ta=class extends pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;m=new Jl(xt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new pa(new Float32Array(2),new Float32Array(2),1,zv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?zi.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xc),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Kl(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?zi.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var js=class{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Tm=new Ie,Ea=class{constructor(e,t,n=0,i=1/0){this.ray=new hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tm),this}intersectObject(e,t=!0,n=[]){return Vh(e,this,n,t),n.sort(Em),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vh(e[i],this,n,t);return n.sort(Em),n}};function Em(r,e){return r.distance-e.distance}function Vh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Vh(s[o],e,t,!0)}}var ba=class extends zn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ct;i.setAttribute("position",new on(t,3)),i.setAttribute("color",new on(n,3));let s=new ln({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){let i=new Re,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function ud(r,e,t,n){let i=Gv(n);switch(t){case Kh:return r*e;case dc:return r*e/i.components*i.byteLength;case fc:return r*e/i.components*i.byteLength;case ed:return r*e*2/i.components*i.byteLength;case pc:return r*e*2/i.components*i.byteLength;case Qh:return r*e*3/i.components*i.byteLength;case In:return r*e*4/i.components*i.byteLength;case mc:return r*e*4/i.components*i.byteLength;case Aa:case Ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(r,16)*Math.max(e,8)/4;case gc:case xc:return Math.max(r,8)*Math.max(e,8)/2;case yc:case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Bc:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vc:case Hc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zc:case Gc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gv(r){switch(r){case ai:case Zh:return{byteLength:1,components:1};case Ks:case $h:case Qs:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case fr:case cc:case Xn:return{byteLength:4,components:1};case jh:case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wv(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qv=`#ifdef USE_ALPHAHASH
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
#endif`,Yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,sy=`#ifdef USE_BUMPMAP
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,Gy=`struct PhysicalMaterial {
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eM=`#if defined( USE_POINTS_UV )
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
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
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
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
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
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CM=`float getShadowMask() {
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
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
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
}`,JM=`#if DEPTH_PACKING == 3200
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
}`,KM=`#define DISTANCE
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
}`,QM=`#define DISTANCE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#define LAMBERT
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
}`,aS=`#define LAMBERT
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
}`,lS=`#define MATCAP
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
}`,cS=`#define MATCAP
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
}`,uS=`#define NORMAL
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
}`,hS=`#define NORMAL
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
}`,dS=`#define PHONG
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
}`,fS=`#define PHONG
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
}`,pS=`#define STANDARD
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
}`,mS=`#define STANDARD
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
}`,gS=`#define TOON
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
}`,_S=`#define TOON
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
}`,xS=`uniform float size;
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
}`,vS=`uniform vec3 diffuse;
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
}`,yS=`#include <common>
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
}`,MS=`uniform vec3 color;
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
}`,SS=`uniform float rotation;
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
}`,TS=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Xv,alphahash_pars_fragment:qv,alphamap_fragment:Yv,alphamap_pars_fragment:Zv,alphatest_fragment:$v,alphatest_pars_fragment:jv,aomap_fragment:Jv,aomap_pars_fragment:Kv,batching_pars_vertex:Qv,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:hy,color_pars_vertex:dy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:vy,emissivemap_pars_fragment:yy,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:Ty,envmap_common_pars_fragment:Ey,envmap_pars_fragment:by,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Iy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Uy,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:ky,lights_phong_fragment:Vy,lights_phong_pars_fragment:Hy,lights_physical_fragment:zy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:jy,map_fragment:Jy,map_pars_fragment:Ky,map_particle_fragment:Qy,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:hM,normal_vertex:dM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:xM,packing:vM,premultiplied_alpha_fragment:yM,project_vertex:MM,dithering_fragment:SM,dithering_pars_fragment:TM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:bM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:PM,skinning_pars_vertex:IM,skinning_vertex:LM,skinnormal_vertex:DM,specularmap_fragment:NM,specularmap_pars_fragment:UM,tonemapping_fragment:OM,tonemapping_pars_fragment:FM,transmission_fragment:BM,transmission_pars_fragment:kM,uv_pars_fragment:VM,uv_pars_vertex:HM,uv_vertex:zM,worldpos_vertex:GM,background_vert:WM,background_frag:XM,backgroundCube_vert:qM,backgroundCube_frag:YM,cube_vert:ZM,cube_frag:$M,depth_vert:jM,depth_frag:JM,distanceRGBA_vert:KM,distanceRGBA_frag:QM,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:rS,meshbasic_frag:sS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:uS,meshnormal_frag:hS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:xS,points_frag:vS,shadow_vert:yS,shadow_frag:MS,sprite_vert:SS,sprite_frag:TS},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},vi={basic:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:tn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:tn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:tn([ue.points,ue.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:tn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:tn([ue.common,ue.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:tn([ue.sprite,ue.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:tn([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:tn([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};vi.physical={uniforms:tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Yc={r:0,b:0,g:0},$r=new Xt,ES=new Ie;function bS(r,e,t,n,i,s,o){let a=new Re(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,T=m(y);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,x){let T=m(x);T&&(T.isCubeTexture||T.mapping===wa)?(u===void 0&&(u=new Ot(new Hs(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Zr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),$r.copy(x.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler($r)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==mt,(h!==T||d!==T.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ot(new fa(2,2),new Pn({name:"BackgroundMaterial",uniforms:Zr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==mt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Yc,ad(r)),n.buffers.color.setClear(Yc.r,Yc.g,Yc.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:M}}function wS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(S,C,U,O,V){let H=!1,D=h(O,U,C);s!==D&&(s=D,c(s.object)),H=f(S,O,U,V),H&&m(S,O,U,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,C,U,O),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,C,U){let O=U.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let H=V[C.id];H===void 0&&(H={},V[C.id]=H);let D=H[O];return D===void 0&&(D=d(l()),H[O]=D),D}function d(S){let C=[],U=[],O=[];for(let V=0;V<t;V++)C[V]=0,U[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,C,U,O){let V=s.attributes,H=C.attributes,D=0,Q=U.getAttributes();for(let G in Q)if(Q[G].location>=0){let ee=V[G],se=H[G];if(se===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;D++}return s.attributesNum!==D||s.index!==O}function m(S,C,U,O){let V={},H=C.attributes,D=0,Q=U.getAttributes();for(let G in Q)if(Q[G].location>=0){let ee=H[G];ee===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));let se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),V[G]=se,D++}s.attributes=V,s.attributesNum=D,s.index=O}function _(){let S=s.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){let U=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;U[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),V[S]!==C&&(r.vertexAttribDivisor(S,C),V[S]=C)}function M(){let S=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==S[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function y(S,C,U,O,V,H,D){D===!0?r.vertexAttribIPointer(S,C,U,V,H):r.vertexAttribPointer(S,C,U,O,V,H)}function x(S,C,U,O){_();let V=O.attributes,H=U.getAttributes(),D=C.defaultAttributeValues;for(let Q in H){let G=H[Q];if(G.location>=0){let W=V[Q];if(W===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){let ee=W.normalized,se=W.itemSize,xe=e.get(W);if(xe===void 0)continue;let ye=xe.buffer,Le=xe.type,Ye=xe.bytesPerElement,q=Le===r.INT||Le===r.UNSIGNED_INT||W.gpuType===cc;if(W.isInterleavedBufferAttribute){let te=W.data,fe=te.stride,De=W.offset;if(te.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)p(G.location+me,te.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let me=0;me<G.locationSize;me++)g(G.location+me);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let me=0;me<G.locationSize;me++)y(G.location+me,se/G.locationSize,Le,ee,fe*Ye,(De+se/G.locationSize*me)*Ye,q)}else{if(W.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,W.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<G.locationSize;te++)g(G.location+te);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let te=0;te<G.locationSize;te++)y(G.location+te,se/G.locationSize,Le,ee,se*Ye,se/G.locationSize*te*Ye,q)}}else if(D!==void 0){let ee=D[Q];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(G.location,ee);break;case 3:r.vertexAttrib3fv(G.location,ee);break;case 4:r.vertexAttrib4fv(G.location,ee);break;default:r.vertexAttrib1fv(G.location,ee)}}}}M()}function T(){P();for(let S in n){let C=n[S];for(let U in C){let O=C[U];for(let V in O)u(O[V].object),delete O[V];delete C[U]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let U in C){let O=C[U];for(let V in O)u(O[V].object),delete O[V];delete C[U]}delete n[S.id]}function w(S){for(let C in n){let U=n[C];if(U[S.id]===void 0)continue;let O=U[S.id];for(let V in O)u(O[V].object),delete O[V];delete U[S.id]}}function P(){v(),o=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function AS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==In&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xn&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function CS(r){let e=this,t=null,n=0,i=!1,s=!1,o=new hi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{let M=s?0:n,y=M*4,x=p.clippingState||null;l.value=x,x=u(m,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function PS(r){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=Xr:a===ac&&(o.mapping=qr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ro=4,vg=[.125,.215,.35,.446,.526,.582],Kr=20,hd=new Gr,yg=new Re,dd=null,fd=0,pd=0,md=!1,Jr=(1+Math.sqrt(5))/2,io=1/Jr,Mg=[new I(-Jr,io,0),new I(Jr,io,0),new I(-io,0,Jr),new I(io,0,Jr),new I(0,Jr,-io),new I(0,Jr,io),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],IS=new I,jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=IS}=s;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Qs,format:In,colorSpace:Zt,depthBuffer:!1},i=Sg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LS(s)),this._blurMaterial=DS(s,e,t)}return i}_compileMaterial(e){let t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,hd)}_sceneToCubeUV(e,t,n,i,s){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yg),h.toneMapping=Xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let _=new gn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new Ot(new Hs,_),p=!1,M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(yg),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));let T=this._cubeSize;Zc(i,x*T,y>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xr||e.mapping===qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Zc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mg[(i-s-1)%Mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ot(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Kr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Kr;g>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kr}`);let p=[],M=0;for(let w=0;w<Kr;++w){let P=w/_,v=Math.exp(-P*P/2);p.push(v),w===0?M+=v:w<g&&(M+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[i],T=3*x*(i>y-ro?i-y+ro:0),E=4*(this._cubeSize-x);Zc(t,T,E,3*x,2*x),l.setRenderTarget(t),l.render(h,hd)}};function LS(r){let e=[],t=[],n=[],i=r,s=r-ro+1+vg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ro?l=vg[o-r+ro-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,P=E>2?0:-1,v=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(v,_*m*E),y.set(d,g*m*E);let S=[E,E,E,E,E,E];x.set(S,p*m*E)}let T=new ct;T.setAttribute("position",new qe(M,_)),T.setAttribute("uv",new qe(y,g)),T.setAttribute("faceIndex",new qe(x,p)),e.push(T),i>ro&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sg(r,e,t){let n=new mi(r,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function DS(r,e,t){let n=new Float32Array(Kr),i=new I(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Tg(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Eg(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function NS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oc||l===ac,u=l===Xr||l===qr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new jc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function US(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function OS(r,e,t,n){let i={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){let T=M[y+0],E=M[y+1],w=M[y+2];d.push(T,E,E,w,w,T)}}else if(m!==void 0){let M=m.array;_=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let T=y+0,E=y+1,w=y+2;d.push(T,E,E,w,w,T)}}else return;let g=new(od(d)?ia:na)(d,1);g.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function FS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function BS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kS(r,e,t){let n=new WeakMap,i=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*T*4*h),w=new ta(E,x,T,h);w.type=Xn,w.needsUpdate=!0;let P=y*4;for(let S=0;S<h;S++){let C=g[S],U=p[S],O=M[S],V=x*T*4*S;for(let H=0;H<C.count;H++){let D=H*P;f===!0&&(i.fromBufferAttribute(C,H),E[V+D+0]=i.x,E[V+D+1]=i.y,E[V+D+2]=i.z,E[V+D+3]=0),m===!0&&(i.fromBufferAttribute(U,H),E[V+D+4]=i.x,E[V+D+5]=i.y,E[V+D+6]=i.z,E[V+D+7]=0),_===!0&&(i.fromBufferAttribute(O,H),E[V+D+8]=i.x,E[V+D+9]=i.y,E[V+D+10]=i.z,E[V+D+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new Xe(x,T)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function VS(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Gg=new Wt,bg=new ha(1,1),Wg=new ta,Xg=new kl,qg=new sa,wg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),Pg=new Float32Array(4);function ao(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=wg[i];if(s===void 0&&(s=new Float32Array(i),wg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Kc(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function GS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function WS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function XS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),Ht(t,n)}}function qS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Cg.set(n),r.uniformMatrix3fv(this.addr,!1,Cg),Ht(t,n)}}function YS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Rg.set(n),r.uniformMatrix4fv(this.addr,!1,Rg),Ht(t,n)}}function ZS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $S(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function jS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function JS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function KS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function QS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function eT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function tT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function nT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bg.compareFunction=nd,s=bg):s=Gg,t.setTexture2D(e||s,i)}function iT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xg,i)}function rT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qg,i)}function sT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wg,i)}function oT(r){switch(r){case 5126:return HS;case 35664:return zS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return qS;case 35676:return YS;case 5124:case 35670:return ZS;case 35667:case 35671:return $S;case 35668:case 35672:return jS;case 35669:case 35673:return JS;case 5125:return KS;case 36294:return QS;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(r,e){r.uniform1fv(this.addr,e)}function lT(r,e){let t=ao(e,this.size,2);r.uniform2fv(this.addr,t)}function cT(r,e){let t=ao(e,this.size,3);r.uniform3fv(this.addr,t)}function uT(r,e){let t=ao(e,this.size,4);r.uniform4fv(this.addr,t)}function hT(r,e){let t=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dT(r,e){let t=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fT(r,e){let t=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pT(r,e){r.uniform1iv(this.addr,e)}function mT(r,e){r.uniform2iv(this.addr,e)}function gT(r,e){r.uniform3iv(this.addr,e)}function _T(r,e){r.uniform4iv(this.addr,e)}function xT(r,e){r.uniform1uiv(this.addr,e)}function vT(r,e){r.uniform2uiv(this.addr,e)}function yT(r,e){r.uniform3uiv(this.addr,e)}function MT(r,e){r.uniform4uiv(this.addr,e)}function ST(r,e,t){let n=this.cache,i=e.length,s=Kc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gg,s[o])}function TT(r,e,t){let n=this.cache,i=e.length,s=Kc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xg,s[o])}function ET(r,e,t){let n=this.cache,i=e.length,s=Kc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qg,s[o])}function bT(r,e,t){let n=this.cache,i=e.length,s=Kc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wg,s[o])}function wT(r){switch(r){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return hT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return xT;case 36294:return vT;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}var _d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oT(t.type)}},xd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wT(t.type)}},vd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},gd=/(\w+)(\])?(\[|\.)?/g;function Ig(r,e){r.seq.push(e),r.map[e.id]=e}function AT(r,e,t){let n=r.name,i=n.length;for(gd.lastIndex=0;;){let s=gd.exec(n),o=gd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ig(t,c===void 0?new _d(a,r,e):new xd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new vd(a),Ig(t,h)),t=h}}}var so=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);AT(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var RT=37297,CT=0;function PT(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Dg=new Oe;function IT(r){Qe._getMatrix(Dg,Qe.workingColorSpace,r);let e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(r)){case Qo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ng(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+PT(r.getShaderSource(e),a)}else return s}function LT(r,e){let t=IT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DT(r,e){let t;switch(e){case Zm:t="Linear";break;case $m:t="Reinhard";break;case jm:t="Cineon";break;case Jm:t="ACESFilmic";break;case Qm:t="AgX";break;case eg:t="Neutral";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new I;function NT(){Qe.getLuminanceCoefficients($c);let r=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function OT(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FT(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Na(r){return r!==""}function Ug(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(r){return r.replace(BT,VT)}var kT=new Map;function VT(r,e){let t=Ze[e];if(t===void 0){let n=kT.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yd(t)}var HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(r){return r.replace(HT,zT)}function zT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function GT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===qr&&(e="ENVMAP_MODE_REFRACTION"),e}function qT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case qm:e="ENVMAP_BLENDING_MIX";break;case Ym:e="ENVMAP_BLENDING_ADD";break}return e}function YT(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZT(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GT(t),c=WT(t),u=XT(t),h=qT(t),d=YT(t),f=UT(t),m=OT(s),_=i.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Na).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(g=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Xi?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,LT("linearToOutputTexel",t.outputColorSpace),NT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=yd(o),o=Ug(o,t),o=Og(o,t),a=yd(a),a=Ug(a,t),a=Og(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+o,x=M+p+a,T=Lg(i,i.VERTEX_SHADER,y),E=Lg(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(E)||"",H=U.trim(),D=O.trim(),Q=V.trim(),G=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,E);else{let ee=Ng(i,T,"vertex"),se=Ng(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ee+`
`+se)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||Q==="")&&(W=!1);W&&(C.diagnostics={runnable:G,programLog:H,vertexShader:{log:D,prefix:g},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(T),i.deleteShader(E),P=new so(i,_),v=FT(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,RT)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var $T=0,Md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sd(e),t.set(e,n)),n}},Sd=class{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}};function jT(r,e,t,n,i,s,o){let a=new Vs,l=new Md,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,C,U,O){let V=U.fog,H=O.geometry,D=v.isMeshStandardMaterial?U.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||D),G=Q&&Q.mapping===wa?Q.image.height:null,W=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=ee!==void 0?ee.length:0,xe=0;H.morphAttributes.position!==void 0&&(xe=1),H.morphAttributes.normal!==void 0&&(xe=2),H.morphAttributes.color!==void 0&&(xe=3);let ye,Le,Ye,q;if(W){let Ue=vi[W];ye=Ue.vertexShader,Le=Ue.fragmentShader}else ye=v.vertexShader,Le=v.fragmentShader,l.update(v),Ye=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);let te=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Ve=!!v.map,ft=!!v.matcap,N=!!Q,nt=!!v.aoMap,Fe=!!v.lightMap,Ne=!!v.bumpMap,de=!!v.normalMap,ot=!!v.displacementMap,Se=!!v.emissiveMap,He=!!v.metalnessMap,ht=!!v.roughnessMap,it=v.anisotropy>0,L=v.clearcoat>0,b=v.dispersion>0,z=v.iridescence>0,K=v.sheen>0,ne=v.transmission>0,J=it&&!!v.anisotropyMap,Ee=L&&!!v.clearcoatMap,ie=L&&!!v.clearcoatNormalMap,Te=L&&!!v.clearcoatRoughnessMap,ge=z&&!!v.iridescenceMap,ae=z&&!!v.iridescenceThicknessMap,he=K&&!!v.sheenColorMap,Ce=K&&!!v.sheenRoughnessMap,Me=!!v.specularMap,oe=!!v.specularColorMap,ve=!!v.specularIntensityMap,A=ne&&!!v.transmissionMap,F=ne&&!!v.thicknessMap,X=!!v.gradientMap,re=!!v.alphaMap,j=v.alphaTest>0,Z=!!v.alphaHash,le=!!v.extensions,pe=Xi;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ae={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:ye,fragmentShader:Le,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Zt,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:ft,envMap:N,envMapMode:N&&Q.mapping,envMapCubeUVHeight:G,aoMap:nt,lightMap:Fe,bumpMap:Ne,normalMap:de,displacementMap:d&&ot,emissiveMap:Se,normalMapObjectSpace:de&&v.normalMapType===og,normalMapTangentSpace:de&&v.normalMapType===Da,metalnessMap:He,roughnessMap:ht,anisotropy:it,anisotropyMap:J,clearcoat:L,clearcoatMap:Ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:Te,dispersion:b,iridescence:z,iridescenceMap:ge,iridescenceThicknessMap:ae,sheen:K,sheenColorMap:he,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:oe,specularIntensityMap:ve,transmission:ne,transmissionMap:A,thicknessMap:F,gradientMap:X,opaque:v.transparent===!1&&v.blending===Ur&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:j,alphaHash:Z,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:nt&&_(v.aoMap.channel),lightMapUv:Fe&&_(v.lightMap.channel),bumpMapUv:Ne&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:ot&&_(v.displacementMap.channel),emissiveMapUv:Se&&_(v.emissiveMap.channel),metalnessMapUv:He&&_(v.metalnessMap.channel),roughnessMapUv:ht&&_(v.roughnessMap.channel),anisotropyMapUv:J&&_(v.anisotropyMap.channel),clearcoatMapUv:Ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:Me&&_(v.specularMap.channel),specularColorMapUv:oe&&_(v.specularColorMap.channel),specularIntensityMapUv:ve&&_(v.specularIntensityMap.channel),transmissionMapUv:A&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(de||it),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ve||re),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Se&&v.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(M(S,v),y(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let S=m[v.type],C;if(S){let U=vi[S];C=qc.clone(U.uniforms)}else C=v.uniforms;return C}function T(v,S){let C;for(let U=0,O=u.length;U<O;U++){let V=u[U];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new ZT(r,S,v,s),u.push(C)),C}function E(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function w(v){l.remove(v)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:P}}function JT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function KT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||KT),n.length>1&&n.sort(d||kg),i.length>1&&i.sort(d||kg)}function u(){for(let h=e,d=r.length;h<d;h++){let f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function QT(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Vg,r.set(n,[o])):i>=s.length?(o=new Vg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function eE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function tE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var nE=0;function iE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rE(r){let e=new eE,t=tE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new Ie,o=new Ie;function a(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,y=0,x=0,T=0,E=0,w=0;c.sort(iE);for(let v=0,S=c.length;v<S;v++){let C=c[v],U=C.color,O=C.intensity,V=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*O,h+=U.g*O,d+=U.b*O;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],O);w++}else if(C.isDirectionalLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=D,f++}else if(C.isSpotLight){let D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(U).multiplyScalar(O),D.distance=V,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[_]=D;let Q=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,Q.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=Q.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=H,x++}_++}else if(C.isRectAreaLight){let D=e.get(C);D.color.copy(U).multiplyScalar(O),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=D,g++}else if(C.isPointLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=D,m++}else if(C.isHemisphereLight){let D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(O),D.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=D,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=w,n.version=nE++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Hg(r){let e=new rE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sE(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Hg(r),e.set(i,[a])):s>=o.length?(a=new Hg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
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
}`;function lE(r,e,t){let n=new qs,i=new Xe,s=new Xe,o=new lt,a=new Wl({depthPacking:sg}),l=new Xl,c={},u=t.maxTextureSize,h={[ri]:$t,[$t]:ri,[cn]:cn},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ct;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let p=this.type;this.render=function(E,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let v=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Wi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=p!==xi&&this.type===xi,V=p===xi&&this.type!==xi;for(let H=0,D=E.length;H<D;H++){let Q=E[H],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let W=G.getFrameExtents();if(i.multiply(W),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,G.mapSize.y=s.y)),G.map===null||O===!0||V===!0){let se=this.type!==xi?{minFilter:Yt,magFilter:Yt}:{};G.map!==null&&G.map.dispose(),G.map=new mi(i.x,i.y,se),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let ee=G.getViewportCount();for(let se=0;se<ee;se++){let xe=G.getViewport(se);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),G.updateMatrices(Q,se),n=G.getFrustum(),x(w,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===xi&&M(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(v,S,C)};function M(E,w){let P=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,P,f,_,null)}function y(E,w,P,v){let S=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=S.uuid,O=w.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let H=V[O];H===void 0&&(H=S.clone(),V[O]=H,w.addEventListener("dispose",T)),S=H}if(S.visible=w.visible,S.wireframe=w.wireframe,v===xi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let U=r.properties.get(S);U.light=P}return S}function x(E,w,P,v,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let O=e.update(E),V=E.material;if(Array.isArray(V)){let H=O.groups;for(let D=0,Q=H.length;D<Q;D++){let G=H[D],W=V[G.materialIndex];if(W&&W.visible){let ee=y(E,W,v,S);E.onBeforeShadow(r,E,w,P,O,ee,G),r.renderBufferDirect(P,null,O,ee,E,G),E.onAfterShadow(r,E,w,P,O,ee,G)}}}else if(V.visible){let H=y(E,V,v,S);E.onBeforeShadow(r,E,w,P,O,H,null),r.renderBufferDirect(P,null,O,H,E,null),E.onAfterShadow(r,E,w,P,O,H,null)}}let U=E.children;for(let O=0,V=U.length;O<V;O++)x(U[O],w,P,v,S)}function T(E){E.target.removeEventListener("dispose",T);for(let P in c){let v=c[P],S=E.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}var cE={[Ql]:ec,[tc]:rc,[nc]:sc,[Or]:ic,[ec]:Ql,[rc]:tc,[sc]:nc,[ic]:Or};function uE(r,e){function t(){let A=!1,F=new lt,X=null,re=new lt(0,0,0,0);return{setMask:function(j){X!==j&&!A&&(r.colorMask(j,j,j,j),X=j)},setLocked:function(j){A=j},setClear:function(j,Z,le,pe,Ae){Ae===!0&&(j*=pe,Z*=pe,le*=pe),F.set(j,Z,le,pe),re.equals(F)===!1&&(r.clearColor(j,Z,le,pe),re.copy(F))},reset:function(){A=!1,X=null,re.set(-1,0,0,0)}}}function n(){let A=!1,F=!1,X=null,re=null,j=null;return{setReversed:function(Z){if(F!==Z){let le=e.get("EXT_clip_control");Z?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),F=Z;let pe=j;j=null,this.setClear(pe)}},getReversed:function(){return F},setTest:function(Z){Z?te(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Z){X!==Z&&!A&&(r.depthMask(Z),X=Z)},setFunc:function(Z){if(F&&(Z=cE[Z]),re!==Z){switch(Z){case Ql:r.depthFunc(r.NEVER);break;case ec:r.depthFunc(r.ALWAYS);break;case tc:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case nc:r.depthFunc(r.EQUAL);break;case ic:r.depthFunc(r.GEQUAL);break;case rc:r.depthFunc(r.GREATER);break;case sc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=Z}},setLocked:function(Z){A=Z},setClear:function(Z){j!==Z&&(F&&(Z=1-Z),r.clearDepth(Z),j=Z)},reset:function(){A=!1,X=null,re=null,j=null,F=!1}}}function i(){let A=!1,F=null,X=null,re=null,j=null,Z=null,le=null,pe=null,Ae=null;return{setTest:function(Ue){A||(Ue?te(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(Ue){F!==Ue&&!A&&(r.stencilMask(Ue),F=Ue)},setFunc:function(Ue,gt,kt){(X!==Ue||re!==gt||j!==kt)&&(r.stencilFunc(Ue,gt,kt),X=Ue,re=gt,j=kt)},setOp:function(Ue,gt,kt){(Z!==Ue||le!==gt||pe!==kt)&&(r.stencilOp(Ue,gt,kt),Z=Ue,le=gt,pe=kt)},setLocked:function(Ue){A=Ue},setClear:function(Ue){Ae!==Ue&&(r.clearStencil(Ue),Ae=Ue)},reset:function(){A=!1,F=null,X=null,re=null,j=null,Z=null,le=null,pe=null,Ae=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,T=null,E=null,w=new Re(0,0,0),P=0,v=!1,S=null,C=null,U=null,O=null,V=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Q=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=Q>=2);let W=null,ee={},se=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),ye=new lt().fromArray(se),Le=new lt().fromArray(xe);function Ye(A,F,X,re){let j=new Uint8Array(4),Z=r.createTexture();r.bindTexture(A,Z),r.texParameteri(A,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(A,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<X;le++)A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(F+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return Z}let q={};q[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(Or),Ne(!1),de(Hh),te(r.CULL_FACE),nt(Wi);function te(A){u[A]!==!0&&(r.enable(A),u[A]=!0)}function fe(A){u[A]!==!1&&(r.disable(A),u[A]=!1)}function De(A,F){return h[A]!==F?(r.bindFramebuffer(A,F),h[A]=F,A===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=F),A===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=F),!0):!1}function me(A,F){let X=f,re=!1;if(A){X=d.get(F),X===void 0&&(X=[],d.set(F,X));let j=A.textures;if(X.length!==j.length||X[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,le=j.length;Z<le;Z++)X[Z]=r.COLOR_ATTACHMENT0+Z;X.length=j.length,re=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,re=!0);re&&r.drawBuffers(X)}function Ve(A){return m!==A?(r.useProgram(A),m=A,!0):!1}let ft={[cr]:r.FUNC_ADD,[Cm]:r.FUNC_SUBTRACT,[Pm]:r.FUNC_REVERSE_SUBTRACT};ft[Im]=r.MIN,ft[Lm]=r.MAX;let N={[Dm]:r.ZERO,[Nm]:r.ONE,[Um]:r.SRC_COLOR,[Nl]:r.SRC_ALPHA,[Hm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Fm]:r.DST_ALPHA,[Om]:r.ONE_MINUS_SRC_COLOR,[Ul]:r.ONE_MINUS_SRC_ALPHA,[Vm]:r.ONE_MINUS_DST_COLOR,[Bm]:r.ONE_MINUS_DST_ALPHA,[zm]:r.CONSTANT_COLOR,[Gm]:r.ONE_MINUS_CONSTANT_COLOR,[Wm]:r.CONSTANT_ALPHA,[Xm]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(A,F,X,re,j,Z,le,pe,Ae,Ue){if(A===Wi){_===!0&&(fe(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),A!==Rm){if(A!==g||Ue!==v){if((p!==cr||x!==cr)&&(r.blendEquation(r.FUNC_ADD),p=cr,x=cr),Ue)switch(A){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFunc(r.ONE,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}M=null,y=null,T=null,E=null,w.set(0,0,0),P=0,g=A,v=Ue}return}j=j||F,Z=Z||X,le=le||re,(F!==p||j!==x)&&(r.blendEquationSeparate(ft[F],ft[j]),p=F,x=j),(X!==M||re!==y||Z!==T||le!==E)&&(r.blendFuncSeparate(N[X],N[re],N[Z],N[le]),M=X,y=re,T=Z,E=le),(pe.equals(w)===!1||Ae!==P)&&(r.blendColor(pe.r,pe.g,pe.b,Ae),w.copy(pe),P=Ae),g=A,v=!1}function Fe(A,F){A.side===cn?fe(r.CULL_FACE):te(r.CULL_FACE);let X=A.side===$t;F&&(X=!X),Ne(X),A.blending===Ur&&A.transparent===!1?nt(Wi):nt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let re=A.stencilWrite;a.setTest(re),re&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Se(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(A){S!==A&&(A?r.frontFace(r.CW):r.frontFace(r.CCW),S=A)}function de(A){A!==bm?(te(r.CULL_FACE),A!==C&&(A===Hh?r.cullFace(r.BACK):A===wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),C=A}function ot(A){A!==U&&(D&&r.lineWidth(A),U=A)}function Se(A,F,X){A?(te(r.POLYGON_OFFSET_FILL),(O!==F||V!==X)&&(r.polygonOffset(F,X),O=F,V=X)):fe(r.POLYGON_OFFSET_FILL)}function He(A){A?te(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function ht(A){A===void 0&&(A=r.TEXTURE0+H-1),W!==A&&(r.activeTexture(A),W=A)}function it(A,F,X){X===void 0&&(W===null?X=r.TEXTURE0+H-1:X=W);let re=ee[X];re===void 0&&(re={type:void 0,texture:void 0},ee[X]=re),(re.type!==A||re.texture!==F)&&(W!==X&&(r.activeTexture(X),W=X),r.bindTexture(A,F||q[A]),re.type=A,re.texture=F)}function L(){let A=ee[W];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{r.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{r.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{r.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{r.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{r.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{r.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{r.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(A){ye.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),ye.copy(A))}function Ce(A){Le.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Le.copy(A))}function Me(A,F){let X=c.get(F);X===void 0&&(X=new WeakMap,c.set(F,X));let re=X.get(A);re===void 0&&(re=r.getUniformBlockIndex(F,A.name),X.set(A,re))}function oe(A,F){let re=c.get(F).get(A);l.get(F)!==re&&(r.uniformBlockBinding(F,re,A.__bindingPointIndex),l.set(F,re))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},W=null,ee={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,T=null,E=null,w=new Re(0,0,0),P=0,v=!1,S=null,C=null,U=null,O=null,V=null,ye.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:fe,bindFramebuffer:De,drawBuffers:me,useProgram:Ve,setBlending:nt,setMaterial:Fe,setFlipSided:Ne,setCullFace:de,setLineWidth:ot,setPolygonOffset:Se,setScissorTest:He,activeTexture:ht,bindTexture:it,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:ge,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Te,texSubImage2D:K,texSubImage3D:ne,compressedTexSubImage2D:J,compressedTexSubImage3D:Ee,scissor:he,viewport:Ce,reset:ve}}function hE(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,b){return f?new OffscreenCanvas(L,b):Fs("canvas")}function _(L,b,z){let K=1,ne=it(L);if((ne.width>z||ne.height>z)&&(K=z/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let J=Math.floor(K*ne.width),Ee=Math.floor(K*ne.height);h===void 0&&(h=m(J,Ee));let ie=b?m(J,Ee):h;return ie.width=J,ie.height=Ee,ie.getContext("2d").drawImage(L,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ee+")."),ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,b,z,K,ne=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=b;if(b===r.RED&&(z===r.FLOAT&&(J=r.R32F),z===r.HALF_FLOAT&&(J=r.R16F),z===r.UNSIGNED_BYTE&&(J=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.R8UI),z===r.UNSIGNED_SHORT&&(J=r.R16UI),z===r.UNSIGNED_INT&&(J=r.R32UI),z===r.BYTE&&(J=r.R8I),z===r.SHORT&&(J=r.R16I),z===r.INT&&(J=r.R32I)),b===r.RG&&(z===r.FLOAT&&(J=r.RG32F),z===r.HALF_FLOAT&&(J=r.RG16F),z===r.UNSIGNED_BYTE&&(J=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RG8UI),z===r.UNSIGNED_SHORT&&(J=r.RG16UI),z===r.UNSIGNED_INT&&(J=r.RG32UI),z===r.BYTE&&(J=r.RG8I),z===r.SHORT&&(J=r.RG16I),z===r.INT&&(J=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RGB8UI),z===r.UNSIGNED_SHORT&&(J=r.RGB16UI),z===r.UNSIGNED_INT&&(J=r.RGB32UI),z===r.BYTE&&(J=r.RGB8I),z===r.SHORT&&(J=r.RGB16I),z===r.INT&&(J=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),z===r.UNSIGNED_INT&&(J=r.RGBA32UI),z===r.BYTE&&(J=r.RGBA8I),z===r.SHORT&&(J=r.RGBA16I),z===r.INT&&(J=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),b===r.RGBA){let Ee=ne?Qo:Qe.getTransfer(K);z===r.FLOAT&&(J=r.RGBA32F),z===r.HALF_FLOAT&&(J=r.RGBA16F),z===r.UNSIGNED_BYTE&&(J=Ee===mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(L,b){let z;return L?b===null||b===fr||b===eo?z=r.DEPTH24_STENCIL8:b===Xn?z=r.DEPTH32F_STENCIL8:b===Ks&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fr||b===eo?z=r.DEPTH_COMPONENT24:b===Xn?z=r.DEPTH_COMPONENT32F:b===Ks&&(z=r.DEPTH_COMPONENT16),z}function T(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Yt&&L.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function E(L){let b=L.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&u.delete(b)}function w(L){let b=L.target;b.removeEventListener("dispose",w),S(b)}function P(L){let b=n.get(L);if(b.__webglInit===void 0)return;let z=L.source,K=d.get(z);if(K){let ne=K[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(L),Object.keys(K).length===0&&d.delete(z)}n.remove(L)}function v(L){let b=n.get(L);r.deleteTexture(b.__webglTexture);let z=L.source,K=d.get(z);delete K[b.__cacheKey],o.memory.textures--}function S(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ne=0;ne<b.__webglFramebuffer[K].length;ne++)r.deleteFramebuffer(b.__webglFramebuffer[K][ne]);else r.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)r.deleteFramebuffer(b.__webglFramebuffer[K]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=L.textures;for(let K=0,ne=z.length;K<ne;K++){let J=n.get(z[K]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(L)}let C=0;function U(){C=0}function O(){let L=C;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function V(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function H(L,b){let z=n.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){let K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,L,b);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function D(L,b){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){q(z,L,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function Q(L,b){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){q(z,L,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function G(L,b){let z=n.get(L);if(L.version>0&&z.__version!==L.version){te(z,L,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}let W={[ur]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[Us]:r.MIRRORED_REPEAT},ee={[Yt]:r.NEAREST,[lc]:r.NEAREST_MIPMAP_NEAREST,[Yr]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[Js]:r.LINEAR_MIPMAP_NEAREST,[oi]:r.LINEAR_MIPMAP_LINEAR},se={[ag]:r.NEVER,[fg]:r.ALWAYS,[lg]:r.LESS,[nd]:r.LEQUAL,[cg]:r.EQUAL,[dg]:r.GEQUAL,[ug]:r.GREATER,[hg]:r.NOTEQUAL};function xe(L,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===Js||b.magFilter===Yr||b.magFilter===oi||b.minFilter===an||b.minFilter===Js||b.minFilter===Yr||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,W[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,W[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,W[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ee[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==Yr&&b.minFilter!==oi||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ye(L,b){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",E));let K=b.source,ne=d.get(K);ne===void 0&&(ne={},d.set(K,ne));let J=V(b);if(J!==L.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[J].usedTimes++;let Ee=ne[L.__cacheKey];Ee!==void 0&&(ne[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&v(b)),L.__cacheKey=J,L.__webglTexture=ne[J].texture}return z}function Le(L,b,z){return Math.floor(Math.floor(L/z)/b)}function Ye(L,b,z,K){let J=L.updateRanges;if(J.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,K,b.data);else{J.sort((ae,he)=>ae.start-he.start);let Ee=0;for(let ae=1;ae<J.length;ae++){let he=J[Ee],Ce=J[ae],Me=he.start+he.count,oe=Le(Ce.start,b.width,4),ve=Le(he.start,b.width,4);Ce.start<=Me+1&&oe===ve&&Le(Ce.start+Ce.count-1,b.width,4)===oe?he.count=Math.max(he.count,Ce.start+Ce.count-he.start):(++Ee,J[Ee]=Ce)}J.length=Ee+1;let ie=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),ge=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ae=0,he=J.length;ae<he;ae++){let Ce=J[ae],Me=Math.floor(Ce.start/4),oe=Math.ceil(Ce.count/4),ve=Me%b.width,A=Math.floor(Me/b.width),F=oe,X=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,A),t.texSubImage2D(r.TEXTURE_2D,0,ve,A,F,X,z,K,b.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function q(L,b,z){let K=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=r.TEXTURE_3D);let ne=ye(L,b),J=b.source;t.bindTexture(K,L.__webglTexture,r.TEXTURE0+z);let Ee=n.get(J);if(J.version!==Ee.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);let ie=Qe.getPrimaries(Qe.workingColorSpace),Te=b.colorSpace===qi?null:Qe.getPrimaries(b.colorSpace),ge=b.colorSpace===qi||ie===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ae=_(b.image,!1,i.maxTextureSize);ae=ht(b,ae);let he=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type),Me=y(b.internalFormat,he,Ce,b.colorSpace,b.isVideoTexture);xe(K,b);let oe,ve=b.mipmaps,A=b.isVideoTexture!==!0,F=Ee.__version===void 0||ne===!0,X=J.dataReady,re=T(b,ae);if(b.isDepthTexture)Me=x(b.format===to,b.type),F&&(A?t.texStorage2D(r.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Me,ae.width,ae.height,0,he,Ce,null));else if(b.isDataTexture)if(ve.length>0){A&&F&&t.texStorage2D(r.TEXTURE_2D,re,Me,ve[0].width,ve[0].height);for(let j=0,Z=ve.length;j<Z;j++)oe=ve[j],A?X&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,oe.width,oe.height,he,Ce,oe.data):t.texImage2D(r.TEXTURE_2D,j,Me,oe.width,oe.height,0,he,Ce,oe.data);b.generateMipmaps=!1}else A?(F&&t.texStorage2D(r.TEXTURE_2D,re,Me,ae.width,ae.height),X&&Ye(b,ae,he,Ce)):t.texImage2D(r.TEXTURE_2D,0,Me,ae.width,ae.height,0,he,Ce,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){A&&F&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Me,ve[0].width,ve[0].height,ae.depth);for(let j=0,Z=ve.length;j<Z;j++)if(oe=ve[j],b.format!==In)if(he!==null)if(A){if(X)if(b.layerUpdates.size>0){let le=ud(oe.width,oe.height,b.format,b.type);for(let pe of b.layerUpdates){let Ae=oe.data.subarray(pe*le/oe.data.BYTES_PER_ELEMENT,(pe+1)*le/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,pe,oe.width,oe.height,1,he,Ae)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ae.depth,he,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Me,oe.width,oe.height,ae.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ae.depth,he,Ce,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Me,oe.width,oe.height,ae.depth,0,he,Ce,oe.data)}else{A&&F&&t.texStorage2D(r.TEXTURE_2D,re,Me,ve[0].width,ve[0].height);for(let j=0,Z=ve.length;j<Z;j++)oe=ve[j],b.format!==In?he!==null?A?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?X&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,oe.width,oe.height,he,Ce,oe.data):t.texImage2D(r.TEXTURE_2D,j,Me,oe.width,oe.height,0,he,Ce,oe.data)}else if(b.isDataArrayTexture)if(A){if(F&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Me,ae.width,ae.height,ae.depth),X)if(b.layerUpdates.size>0){let j=ud(ae.width,ae.height,b.format,b.type);for(let Z of b.layerUpdates){let le=ae.data.subarray(Z*j/ae.data.BYTES_PER_ELEMENT,(Z+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ae.width,ae.height,1,he,Ce,le)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Ce,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,he,Ce,ae.data);else if(b.isData3DTexture)A?(F&&t.texStorage3D(r.TEXTURE_3D,re,Me,ae.width,ae.height,ae.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Ce,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,he,Ce,ae.data);else if(b.isFramebufferTexture){if(F)if(A)t.texStorage2D(r.TEXTURE_2D,re,Me,ae.width,ae.height);else{let j=ae.width,Z=ae.height;for(let le=0;le<re;le++)t.texImage2D(r.TEXTURE_2D,le,Me,j,Z,0,he,Ce,null),j>>=1,Z>>=1}}else if(ve.length>0){if(A&&F){let j=it(ve[0]);t.texStorage2D(r.TEXTURE_2D,re,Me,j.width,j.height)}for(let j=0,Z=ve.length;j<Z;j++)oe=ve[j],A?X&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,he,Ce,oe):t.texImage2D(r.TEXTURE_2D,j,Me,he,Ce,oe);b.generateMipmaps=!1}else if(A){if(F){let j=it(ae);t.texStorage2D(r.TEXTURE_2D,re,Me,j.width,j.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Ce,ae)}else t.texImage2D(r.TEXTURE_2D,0,Me,he,Ce,ae);g(b)&&p(K),Ee.__version=J.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function te(L,b,z){if(b.image.length!==6)return;let K=ye(L,b),ne=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+z);let J=n.get(ne);if(ne.version!==J.__version||K===!0){t.activeTexture(r.TEXTURE0+z);let Ee=Qe.getPrimaries(Qe.workingColorSpace),ie=b.colorSpace===qi?null:Qe.getPrimaries(b.colorSpace),Te=b.colorSpace===qi||Ee===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!ge&&!ae?he[Z]=_(b.image[Z],!0,i.maxCubemapSize):he[Z]=ae?b.image[Z].image:b.image[Z],he[Z]=ht(b,he[Z]);let Ce=he[0],Me=s.convert(b.format,b.colorSpace),oe=s.convert(b.type),ve=y(b.internalFormat,Me,oe,b.colorSpace),A=b.isVideoTexture!==!0,F=J.__version===void 0||K===!0,X=ne.dataReady,re=T(b,Ce);xe(r.TEXTURE_CUBE_MAP,b);let j;if(ge){A&&F&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,ve,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){j=he[Z].mipmaps;for(let le=0;le<j.length;le++){let pe=j[le];b.format!==In?Me!==null?A?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,pe.width,pe.height,Me,oe,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ve,pe.width,pe.height,0,Me,oe,pe.data)}}}else{if(j=b.mipmaps,A&&F){j.length>0&&re++;let Z=it(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){A?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Me,oe,he[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ve,he[Z].width,he[Z].height,0,Me,oe,he[Z].data);for(let le=0;le<j.length;le++){let Ae=j[le].image[Z].image;A?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ae.width,Ae.height,Me,oe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ve,Ae.width,Ae.height,0,Me,oe,Ae.data)}}else{A?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,oe,he[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ve,Me,oe,he[Z]);for(let le=0;le<j.length;le++){let pe=j[le];A?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Me,oe,pe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ve,Me,oe,pe.image[Z])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),J.__version=ne.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,z,K,ne,J){let Ee=s.convert(z.format,z.colorSpace),ie=s.convert(z.type),Te=y(z.internalFormat,Ee,ie,z.colorSpace),ge=n.get(b),ae=n.get(z);if(ae.__renderTarget=b,!ge.__hasExternalTextures){let he=Math.max(1,b.width>>J),Ce=Math.max(1,b.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,Te,he,Ce,b.depth,0,Ee,ie,null):t.texImage2D(ne,J,Te,he,Ce,0,Ee,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Se(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,ne,ae.__webglTexture,0,ot(b)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,ne,ae.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(L,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){let K=b.depthTexture,ne=K&&K.isDepthTexture?K.type:null,J=x(b.stencilBuffer,ne),Ee=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=ot(b);Se(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,J,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,L)}else{let K=b.textures;for(let ne=0;ne<K.length;ne++){let J=K[ne],Ee=s.convert(J.format,J.colorSpace),ie=s.convert(J.type),Te=y(J.internalFormat,Ee,ie,J.colorSpace),ge=ot(b);z&&Se(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Te,b.width,b.height):Se(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Te,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Te,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);let ne=K.__webglTexture,J=ot(b);if(b.depthTexture.format===Os)Se(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(b.depthTexture.format===to)Se(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ve(L){let b=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=K}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let K=L.texture.mipmaps;K&&K.length>0?me(b.__webglFramebuffer[0],L):me(b.__webglFramebuffer,L)}else if(z){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=r.createRenderbuffer(),De(b.__webglDepthbuffer[K],L,!1);else{let ne=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,J)}}else{let K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),De(b.__webglDepthbuffer,L,!1);else{let ne=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,J)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(L,b,z){let K=n.get(L);b!==void 0&&fe(K.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ve(L)}function N(L){let b=L.texture,z=n.get(L),K=n.get(b);L.addEventListener("dispose",w);let ne=L.textures,J=L.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=b.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ie]=[];for(let Te=0;Te<b.mipmaps.length;Te++)z.__webglFramebuffer[ie][Te]=r.createFramebuffer()}else z.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)z.__webglFramebuffer[ie]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let ie=0,Te=ne.length;ie<Te;ie++){let ge=n.get(ne[ie]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let Te=ne[ie];z.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);let ge=s.convert(Te.format,Te.colorSpace),ae=s.convert(Te.type),he=y(Te.internalFormat,ge,ae,Te.colorSpace,L.isXRRenderTarget===!0),Ce=ot(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,he,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),De(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),xe(r.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)fe(z.__webglFramebuffer[ie][Te],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te);else fe(z.__webglFramebuffer[ie],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ie=0,Te=ne.length;ie<Te;ie++){let ge=ne[ie],ae=n.get(ge),he=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,ae.__webglTexture),xe(he,ge),fe(z.__webglFramebuffer,L,ge,r.COLOR_ATTACHMENT0+ie,he,0),g(ge)&&p(he)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),xe(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)fe(z.__webglFramebuffer[Te],L,b,r.COLOR_ATTACHMENT0,ie,Te);else fe(z.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,ie,0);g(b)&&p(ie),t.unbindTexture()}L.depthBuffer&&Ve(L)}function nt(L){let b=L.textures;for(let z=0,K=b.length;z<K;z++){let ne=b[z];if(g(ne)){let J=M(L),Ee=n.get(ne).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}let Fe=[],Ne=[];function de(L){if(L.samples>0){if(Se(L)===!1){let b=L.textures,z=L.width,K=L.height,ne=r.COLOR_BUFFER_BIT,J=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(L),ie=b.length>1;if(ie)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Te=L.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let ae=n.get(b[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,ne,r.NEAREST),l===!0&&(Fe.length=0,Ne.length=0,Fe.push(r.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Fe.push(J),Ne.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let ae=n.get(b[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ot(L){return Math.min(i.maxSamples,L.samples)}function Se(L){let b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(L){let b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function ht(L,b){let z=L.colorSpace,K=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Zt&&z!==qi&&(Qe.getTransfer(z)===mt?(K!==In||ne!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function it(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=D,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ft,this.setupRenderTarget=N,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Se}function dE(r,e){function t(n,i=qi){let s,o=Qe.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return r.BYTE;if(n===$h)return r.SHORT;if(n===Ks)return r.UNSIGNED_SHORT;if(n===cc)return r.INT;if(n===fr)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===Qs)return r.HALF_FLOAT;if(n===Kh)return r.ALPHA;if(n===Qh)return r.RGB;if(n===In)return r.RGBA;if(n===Os)return r.DEPTH_COMPONENT;if(n===to)return r.DEPTH_STENCIL;if(n===dc)return r.RED;if(n===fc)return r.RED_INTEGER;if(n===ed)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===Sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yc||n===Mc)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===Ec||n===bc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Hc||n===zc||n===Gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pn({vertexShader:fE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ed=class extends pi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Td,p={},M=t.getContextAttributes(),y=null,x=null,T=[],E=[],w=new Xe,P=null,v=new Ut;v.viewport=new lt;let S=new Ut;S.viewport=new lt;let C=[v,S],U=new jl,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getGripSpace()},this.getHand=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getHandSpace()};function H(q){let te=E.indexOf(q.inputSource);if(te===-1)return;let fe=T[te];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<T.length;q++){let te=E[q];te!==null&&(E[q]=null,T[q].disconnect(te))}O=null,V=null,g.reset();for(let q in p)delete p[q];e.setRenderTarget(y),f=null,d=null,h=null,i=null,x=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",D),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?to:Os,De=M.stencil?eo:fr);let Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new mi(d.textureWidth,d.textureHeight,{format:In,type:ai,depthTexture:new ha(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new mi(f.framebufferWidth,f.framebufferHeight,{format:In,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(q){for(let te=0;te<q.removed.length;te++){let fe=q.removed[te],De=E.indexOf(fe);De>=0&&(E[De]=null,T[De].disconnect(fe))}for(let te=0;te<q.added.length;te++){let fe=q.added[te],De=E.indexOf(fe);if(De===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=E.length){E.push(fe),De=Ve;break}else if(E[Ve]===null){E[Ve]=fe,De=Ve;break}if(De===-1)break}let me=T[De];me&&me.connect(fe)}}let G=new I,W=new I;function ee(q,te,fe){G.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);let De=G.distanceTo(W),me=te.projectionMatrix.elements,Ve=fe.projectionMatrix.elements,ft=me[14]/(me[10]-1),N=me[14]/(me[10]+1),nt=(me[9]+1)/me[5],Fe=(me[9]-1)/me[5],Ne=(me[8]-1)/me[0],de=(Ve[8]+1)/Ve[0],ot=ft*Ne,Se=ft*de,He=De/(-Ne+de),ht=He*-Ne;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ht),q.translateZ(He),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let it=ft+He,L=N+He,b=ot-ht,z=Se+(De-ht),K=nt*N/L*it,ne=Fe*N/L*it;q.projectionMatrix.makePerspective(b,z,K,ne,it,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,fe=q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),U.near=S.near=v.near=te,U.far=S.far=v.far=fe,(O!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,V=U.far),U.layers.mask=q.layers.mask|6,v.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;let De=q.parent,me=U.cameras;se(U,De);for(let Ve=0;Ve<me.length;Ve++)se(me[Ve],De);me.length===2?ee(U,v,S):U.projectionMatrix.copy(v.projectionMatrix),xe(q,U,De)};function xe(q,te,fe){fe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let ye=null;function Le(q,te){if(u=te.getViewerPose(c||o),m=te,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let De=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let N=0;N<fe.length;N++){let nt=fe[N],Fe=null;if(f!==null)Fe=f.getViewport(nt);else{let de=h.getViewSubImage(d,nt);Fe=de.viewport,N===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let Ne=C[N];Ne===void 0&&(Ne=new Ut,Ne.layers.enable(N),Ne.viewport=new lt,C[N]=Ne),Ne.matrix.fromArray(nt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(nt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),N===0&&(U.matrix.copy(Ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(Ne)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let N=h.getDepthInformation(fe[0]);N&&N.isValid&&N.texture&&g.init(N,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let N=0;N<fe.length;N++){let nt=fe[N].camera;if(nt){let Fe=p[nt];Fe||(Fe=new da,p[nt]=Fe);let Ne=h.getCameraImage(nt);Fe.sourceTexture=Ne}}}}for(let fe=0;fe<T.length;fe++){let De=E[fe],me=T[fe];De!==null&&me!==void 0&&me.update(De,te,c||o)}ye&&ye(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Ye=new zg;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(q){ye=q},this.dispose=function(){}}},jr=new Xt,mE=new Ie;function gE(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ad(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,jr.copy(x),jr.x*=-1,jr.y*=-1,jr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.envMapRotation.value.setFromMatrix4(mE.makeRotationFromEuler(jr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _E(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(m(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(M,T);let E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){let y=h();M.__bindingPointIndex=y;let x=r.createBuffer(),T=M.__size,E=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=i[M.id],x=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,S=P.length;v<S;v++){let C=P[v];if(f(C,E,v,T)===!0){let U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],V=0;for(let H=0;H<O.length;H++){let D=O[H],Q=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,U+V,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,y,x,T){let E=M.value,w=y+"_"+x;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{let P=T[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(M){let y=M.uniforms,x=0,T=16;for(let w=0,P=y.length;w<P;w++){let v=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,C=v.length;S<C;S++){let U=v[S],O=Array.isArray(U.value)?U.value:[U.value];for(let V=0,H=O.length;V<H;V++){let D=O[V],Q=_(D),G=x%T,W=G%Q.boundary,ee=G+W;x+=W,ee!==0&&T-ee<Q.storage&&(x+=T-ee),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Q.storage}}}let E=x%T;return E>0&&(x+=T-E),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Jc=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=It;let E=0,w=0,P=null,v=-1,S=null,C=new lt,U=new lt,O=null,V=new Re(0),H=0,D=t.width,Q=t.height,G=1,W=null,ee=null,se=new lt(0,0,D,Q),xe=new lt(0,0,D,Q),ye=!1,Le=new qs,Ye=!1,q=!1,te=new Ie,fe=new I,De=new lt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function ft(){return P===null?G:1}let N=n;function nt(R,B){return t.getContext(R,B)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",j,!1),N===null){let B="webgl2";if(N=nt(B,R),N===null)throw nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ne,de,ot,Se,He,ht,it,L,b,z,K,ne,J,Ee,ie,Te,ge,ae,he,Ce,Me,oe,ve;function A(){Fe=new US(N),Fe.init(),Me=new dE(N,Fe),Ne=new RS(N,Fe,e,Me),de=new uE(N,Fe),Ne.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),ot=new BS(N),Se=new JT,He=new hE(N,Fe,de,Se,Ne,Me,ot),ht=new PS(x),it=new NS(x),L=new Wv(N),oe=new wS(N,L),b=new OS(N,L,ot,oe),z=new VS(N,b,L,ot),ae=new kS(N,Ne,He),ie=new CS(Se),K=new jT(x,ht,it,Fe,Ne,oe,ie),ne=new gE(x,Se),J=new QT,Ee=new sE(Fe),ge=new bS(x,ht,it,de,z,f,l),Te=new lE(x,z,Ne),ve=new _E(N,ot,Ne,de),he=new AS(N,Fe,ot),Ce=new FS(N,Fe,ot),ot.programs=K.programs,x.capabilities=Ne,x.extensions=Fe,x.properties=Se,x.renderLists=J,x.shadowMap=Te,x.state=de,x.info=ot}A();let F=new Ed(x,N);this.xr=F,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(D,Q,!1))},this.getSize=function(R){return R.set(D,Q)},this.setSize=function(R,B,Y=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,Q=B,t.width=Math.floor(R*G),t.height=Math.floor(B*G),Y===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(D*G,Q*G).floor()},this.setDrawingBufferSize=function(R,B,Y){D=R,Q=B,G=Y,t.width=Math.floor(R*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,B,Y,$){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,B,Y,$),de.viewport(C.copy(se).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,B,Y,$){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,B,Y,$),de.scissor(U.copy(xe).multiplyScalar(G).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){de.setScissorTest(ye=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,Y=!0){let $=0;if(R){let k=!1;if(P!==null){let ce=P.texture.format;k=ce===mc||ce===pc||ce===fc}if(k){let ce=P.texture.type,_e=ce===ai||ce===fr||ce===Ks||ce===eo||ce===uc||ce===hc,Pe=ge.getClearColor(),be=ge.getClearAlpha(),ze=Pe.r,We=Pe.g,Be=Pe.b;_e?(m[0]=ze,m[1]=We,m[2]=Be,m[3]=be,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=ze,_[1]=We,_[2]=Be,_[3]=be,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}B&&($|=N.DEPTH_BUFFER_BIT),Y&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",j,!1),ge.dispose(),J.dispose(),Ee.dispose(),Se.dispose(),ht.dispose(),it.dispose(),z.dispose(),oe.dispose(),ve.dispose(),K.dispose(),F.dispose(),F.removeEventListener("sessionstart",kt),F.removeEventListener("sessionend",Bn),Mt.stop()};function X(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=ot.autoReset,B=Te.enabled,Y=Te.autoUpdate,$=Te.needsUpdate,k=Te.type;A(),ot.autoReset=R,Te.enabled=B,Te.autoUpdate=Y,Te.needsUpdate=$,Te.type=k}function j(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Z(R){let B=R.target;B.removeEventListener("dispose",Z),le(B)}function le(R){pe(R),Se.remove(R)}function pe(R){let B=Se.get(R).programs;B!==void 0&&(B.forEach(function(Y){K.releaseProgram(Y)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Y,$,k,ce){B===null&&(B=me);let _e=k.isMesh&&k.matrixWorld.determinant()<0,Pe=Vp(R,B,Y,$,k);de.setMaterial($,_e);let be=Y.index,ze=1;if($.wireframe===!0){if(be=b.getWireframeAttribute(Y),be===void 0)return;ze=2}let We=Y.drawRange,Be=Y.attributes.position,Ke=We.start*ze,_t=(We.start+We.count)*ze;ce!==null&&(Ke=Math.max(Ke,ce.start*ze),_t=Math.min(_t,(ce.start+ce.count)*ze)),be!==null?(Ke=Math.max(Ke,0),_t=Math.min(_t,be.count)):Be!=null&&(Ke=Math.max(Ke,0),_t=Math.min(_t,Be.count));let Rt=_t-Ke;if(Rt<0||Rt===1/0)return;oe.setup(k,$,Pe,Y,be);let St,vt=he;if(be!==null&&(St=L.get(be),vt=Ce,vt.setIndex(St)),k.isMesh)$.wireframe===!0?(de.setLineWidth($.wireframeLinewidth*ft()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(k.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*ft()),k.isLineSegments?vt.setMode(N.LINES):k.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else k.isPoints?vt.setMode(N.POINTS):k.isSprite&&vt.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))vt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ke=k._multiDrawStarts,bt=k._multiDrawCounts,at=k._multiDrawCount,bn=be?L.get(be).bytesPerElement:1,vs=Se.get($).currentProgram.getUniforms();for(let wn=0;wn<at;wn++)vs.setValue(N,"_gl_DrawID",wn),vt.render(ke[wn]/bn,bt[wn])}else if(k.isInstancedMesh)vt.renderInstances(Ke,Rt,k.count);else if(Y.isInstancedBufferGeometry){let ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,ke);vt.renderInstances(Ke,Rt,bt)}else vt.render(Ke,Rt)};function Ae(R,B,Y){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,wr(R,B,Y),R.side=ri,R.needsUpdate=!0,wr(R,B,Y),R.side=cn):wr(R,B,Y)}this.compile=function(R,B,Y=null){Y===null&&(Y=R),p=Ee.get(Y),p.init(B),y.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==Y&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let $=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ce=k.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let Pe=ce[_e];Ae(Pe,Y,k),$.add(Pe)}else Ae(ce,Y,k),$.add(ce)}),p=y.pop(),$},this.compileAsync=function(R,B,Y=null){let $=this.compile(R,B,Y);return new Promise(k=>{function ce(){if($.forEach(function(_e){Se.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){k(R);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ue=null;function gt(R){Ue&&Ue(R)}function kt(){Mt.stop()}function Bn(){Mt.start()}let Mt=new zg;Mt.setAnimationLoop(gt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(R){Ue=R,F.setAnimationLoop(R),R===null?Mt.stop():Mt.start()},F.addEventListener("sessionstart",kt),F.addEventListener("sessionend",Bn),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(B),B=F.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,P),p=Ee.get(R,y.length),p.init(B),y.push(p),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Le.setFromProjectionMatrix(te,ni,B.reversedDepth),q=this.localClippingEnabled,Ye=ie.init(this.clippingPlanes,q),g=J.get(R,M.length),g.init(),M.push(g),F.enabled===!0&&F.isPresenting===!0){let ce=x.xr.getDepthSensingMesh();ce!==null&&Jt(ce,B,-1/0,x.sortObjects)}Jt(R,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,ee),Ve=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ve&&ge.addToRenderList(g,R),this.info.render.frame++,Ye===!0&&ie.beginShadows();let Y=p.state.shadowsArray;Te.render(Y,R,B),Ye===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){let ce=B.cameras;if(k.length>0)for(let _e=0,Pe=ce.length;_e<Pe;_e++){let be=ce[_e];tr($,k,R,be)}Ve&&ge.render(R);for(let _e=0,Pe=ce.length;_e<Pe;_e++){let be=ce[_e];En(g,R,be,be.viewport)}}else k.length>0&&tr($,k,R,B),Ve&&ge.render(R),En(g,R,B);P!==null&&w===0&&(He.updateMultisampleRenderTarget(P),He.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,B),oe.resetDefaultState(),v=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Ye===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Jt(R,B,Y,$){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Le.intersectsSprite(R)){$&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);let _e=z.update(R),Pe=R.material;Pe.visible&&g.push(R,_e,Pe,Y,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Le.intersectsObject(R))){let _e=z.update(R),Pe=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),De.copy(_e.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Pe)){let be=_e.groups;for(let ze=0,We=be.length;ze<We;ze++){let Be=be[ze],Ke=Pe[Be.materialIndex];Ke&&Ke.visible&&g.push(R,_e,Ke,Y,De.z,Be)}}else Pe.visible&&g.push(R,_e,Pe,Y,De.z,null)}}let ce=R.children;for(let _e=0,Pe=ce.length;_e<Pe;_e++)Jt(ce[_e],B,Y,$)}function En(R,B,Y,$){let k=R.opaque,ce=R.transmissive,_e=R.transparent;p.setupLightsView(Y),Ye===!0&&ie.setGlobalState(x.clippingPlanes,Y),$&&de.viewport(C.copy($)),k.length>0&&gs(k,B,Y),ce.length>0&&gs(ce,B,Y),_e.length>0&&gs(_e,B,Y),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function tr(R,B,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new mi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Qs:ai,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ce=p.state.transmissionRenderTarget[$.id],_e=$.viewport||C;ce.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);let Pe=x.getRenderTarget(),be=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(V),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&ge.render(Y);let We=x.toneMapping;x.toneMapping=Xi;let Be=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Ye===!0&&ie.setGlobalState(x.clippingPlanes,$),gs(R,Y,$),He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let _t=0,Rt=B.length;_t<Rt;_t++){let St=B[_t],vt=St.object,ke=St.geometry,bt=St.material,at=St.group;if(bt.side===cn&&vt.layers.test($.layers)){let bn=bt.side;bt.side=$t,bt.needsUpdate=!0,_s(vt,Y,$,ke,bt,at),bt.side=bn,bt.needsUpdate=!0,Ke=!0}}Ke===!0&&(He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce))}x.setRenderTarget(Pe,be,ze),x.setClearColor(V,H),Be!==void 0&&($.viewport=Be),x.toneMapping=We}function gs(R,B,Y){let $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ce=R.length;k<ce;k++){let _e=R[k],Pe=_e.object,be=_e.geometry,ze=_e.group,We=_e.material;We.allowOverride===!0&&$!==null&&(We=$),Pe.layers.test(Y.layers)&&_s(Pe,B,Y,be,We,ze)}}function _s(R,B,Y,$,k,ce){R.onBeforeRender(x,B,Y,$,k,ce),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(x,B,Y,$,R,ce),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=$t,k.needsUpdate=!0,x.renderBufferDirect(Y,B,$,k,R,ce),k.side=ri,k.needsUpdate=!0,x.renderBufferDirect(Y,B,$,k,R,ce),k.side=cn):x.renderBufferDirect(Y,B,$,k,R,ce),R.onAfterRender(x,B,Y,$,k,ce)}function wr(R,B,Y){B.isScene!==!0&&(B=me);let $=Se.get(R),k=p.state.lights,ce=p.state.shadowsArray,_e=k.state.version,Pe=K.getParameters(R,k.state,ce,B,Y),be=K.getProgramCacheKey(Pe),ze=$.programs;$.environment=R.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(R.isMeshStandardMaterial?it:ht).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",Z),ze=new Map,$.programs=ze);let We=ze.get(be);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===_e)return al(R,Pe),We}else Pe.uniforms=K.getUniforms(R),R.onBeforeCompile(Pe,x),We=K.acquireProgram(Pe,be),ze.set(be,We),$.uniforms=Pe.uniforms;let Be=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=ie.uniform),al(R,Pe),$.needsLights=ll(R),$.lightsStateVersion=_e,$.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function ol(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function al(R,B){let Y=Se.get(R);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Vp(R,B,Y,$,k){B.isScene!==!0&&(B=me),He.resetTextureUnits();let ce=B.fog,_e=$.isMeshStandardMaterial?B.environment:null,Pe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zt,be=($.isMeshStandardMaterial?it:ht).get($.envMap||_e),ze=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Y.morphAttributes.position,Ke=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color,Rt=Xi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=St!==void 0?St.length:0,ke=Se.get($),bt=p.state.lights;if(Ye===!0&&(q===!0||R!==S)){let rn=R===S&&$.id===v;ie.setState($,R,rn)}let at=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==bt.state.version||ke.outputColorSpace!==Pe||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==be||$.fog===!0&&ke.fog!==ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ie.numPlanes||ke.numIntersection!==ie.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==We||ke.morphTargets!==Be||ke.morphNormals!==Ke||ke.morphColors!==_t||ke.toneMapping!==Rt||ke.morphTargetsCount!==vt)&&(at=!0):(at=!0,ke.__version=$.version);let bn=ke.currentProgram;at===!0&&(bn=wr($,B,k));let vs=!1,wn=!1,Ho=!1,wt=bn.getUniforms(),kn=ke.uniforms;if(de.useProgram(bn.program)&&(vs=!0,wn=!0,Ho=!0),$.id!==v&&(v=$.id,wn=!0),vs||S!==R){de.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),wt.setValue(N,"projectionMatrix",R.projectionMatrix),wt.setValue(N,"viewMatrix",R.matrixWorldInverse);let pn=wt.map.cameraPosition;pn!==void 0&&pn.setValue(N,fe.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&wt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,wn=!0,Ho=!0)}if(k.isSkinnedMesh){wt.setOptional(N,k,"bindMatrix"),wt.setOptional(N,k,"bindMatrixInverse");let rn=k.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),wt.setValue(N,"boneTexture",rn.boneTexture,He))}k.isBatchedMesh&&(wt.setOptional(N,k,"batchingTexture"),wt.setValue(N,"batchingTexture",k._matricesTexture,He),wt.setOptional(N,k,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",k._indirectTexture,He),wt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",k._colorsTexture,He));let Vn=Y.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ae.update(k,Y,bn),(wn||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,wt.setValue(N,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(kn.envMap.value=be,kn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(kn.envMapIntensity.value=B.environmentIntensity),wn&&(wt.setValue(N,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&th(kn,Ho),ce&&$.fog===!0&&ne.refreshFogUniforms(kn,ce),ne.refreshMaterialUniforms(kn,$,G,Q,p.state.transmissionRenderTarget[R.id]),so.upload(N,ol(ke),kn,He)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(so.upload(N,ol(ke),kn,He),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&wt.setValue(N,"center",k.center),wt.setValue(N,"modelViewMatrix",k.modelViewMatrix),wt.setValue(N,"normalMatrix",k.normalMatrix),wt.setValue(N,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let rn=$.uniformsGroups;for(let pn=0,rh=rn.length;pn<rh;pn++){let Ar=rn[pn];ve.update(Ar,bn),ve.bind(Ar,bn)}}return bn}function th(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ll(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,B,Y){let $=Se.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Se.get(R.texture).__webglTexture=B,Se.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){let Y=Se.get(R);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};let nh=N.createFramebuffer();this.setRenderTarget=function(R,B=0,Y=0){P=R,E=B,w=Y;let $=!0,k=null,ce=!1,_e=!1;if(R){let be=Se.get(R);if(be.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(be.__webglFramebuffer===void 0)He.setupRenderTarget(R);else if(be.__hasExternalTextures)He.rebindTextures(R,Se.get(R.texture).__webglTexture,Se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Be=R.depthTexture;if(be.__boundDepthTexture!==Be){if(Be!==null&&Se.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(R)}}let ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);let We=Se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[B])?k=We[B][Y]:k=We[B],ce=!0):R.samples>0&&He.useMultisampledRTT(R)===!1?k=Se.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[Y]:k=We,C.copy(R.viewport),U.copy(R.scissor),O=R.scissorTest}else C.copy(se).multiplyScalar(G).floor(),U.copy(xe).multiplyScalar(G).floor(),O=ye;if(Y!==0&&(k=nh),de.bindFramebuffer(N.FRAMEBUFFER,k)&&$&&de.drawBuffers(R,k),de.viewport(C),de.scissor(U),de.setScissorTest(O),ce){let be=Se.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,Y)}else if(_e){let be=B;for(let ze=0;ze<R.textures.length;ze++){let We=Se.get(R.textures[ze]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ze,We.__webglTexture,Y,be)}}else if(R!==null&&Y!==0){let be=Se.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,be.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(R,B,Y,$,k,ce,_e,Pe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){de.bindFramebuffer(N.FRAMEBUFFER,be);try{let ze=R.textures[Pe],We=ze.format,Be=ze.type;if(!Ne.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-$&&Y>=0&&Y<=R.height-k&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(B,Y,$,k,Me.convert(We),Me.convert(Be),ce))}finally{let ze=P!==null?Se.get(P).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,B,Y,$,k,ce,_e,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be)if(B>=0&&B<=R.width-$&&Y>=0&&Y<=R.height-k){de.bindFramebuffer(N.FRAMEBUFFER,be);let ze=R.textures[Pe],We=ze.format,Be=ze.type;if(!Ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(B,Y,$,k,Me.convert(We),Me.convert(Be),0);let _t=P!==null?Se.get(P).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,_t);let Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mg(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(Ke),N.deleteSync(Rt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,Y=0){let $=Math.pow(2,-Y),k=Math.floor(R.image.width*$),ce=Math.floor(R.image.height*$),_e=B!==null?B.x:0,Pe=B!==null?B.y:0;He.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,_e,Pe,k,ce),de.unbindTexture()};let ih=N.createFramebuffer(),xs=N.createFramebuffer();this.copyTextureToTexture=function(R,B,Y=null,$=null,k=0,ce=null){ce===null&&(k!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=k,k=0):ce=0);let _e,Pe,be,ze,We,Be,Ke,_t,Rt,St=R.isCompressedTexture?R.mipmaps[ce]:R.image;if(Y!==null)_e=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,ze=Y.min.x,We=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{let Vn=Math.pow(2,-k);_e=Math.floor(St.width*Vn),Pe=Math.floor(St.height*Vn),R.isDataArrayTexture?be=St.depth:R.isData3DTexture?be=Math.floor(St.depth*Vn):be=1,ze=0,We=0,Be=0}$!==null?(Ke=$.x,_t=$.y,Rt=$.z):(Ke=0,_t=0,Rt=0);let vt=Me.convert(B.format),ke=Me.convert(B.type),bt;B.isData3DTexture?(He.setTexture3D(B,0),bt=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(He.setTexture2DArray(B,0),bt=N.TEXTURE_2D_ARRAY):(He.setTexture2D(B,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let at=N.getParameter(N.UNPACK_ROW_LENGTH),bn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vs=N.getParameter(N.UNPACK_SKIP_PIXELS),wn=N.getParameter(N.UNPACK_SKIP_ROWS),Ho=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Be);let wt=R.isDataArrayTexture||R.isData3DTexture,kn=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){let Vn=Se.get(R),rn=Se.get(B),pn=Se.get(Vn.__renderTarget),rh=Se.get(rn.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,pn.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,rh.__webglFramebuffer);for(let Ar=0;Ar<be;Ar++)wt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(R).__webglTexture,k,Be+Ar),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(B).__webglTexture,ce,Rt+Ar)),N.blitFramebuffer(ze,We,_e,Pe,Ke,_t,_e,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||R.isRenderTargetTexture||Se.has(R)){let Vn=Se.get(R),rn=Se.get(B);de.bindFramebuffer(N.READ_FRAMEBUFFER,ih),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,xs);for(let pn=0;pn<be;pn++)wt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vn.__webglTexture,k,Be+pn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vn.__webglTexture,k),kn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,ce,Rt+pn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,ce),k!==0?N.blitFramebuffer(ze,We,_e,Pe,Ke,_t,_e,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):kn?N.copyTexSubImage3D(bt,ce,Ke,_t,Rt+pn,ze,We,_e,Pe):N.copyTexSubImage2D(bt,ce,Ke,_t,ze,We,_e,Pe);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else kn?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(bt,ce,Ke,_t,Rt,_e,Pe,be,vt,ke,St.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,ce,Ke,_t,Rt,_e,Pe,be,vt,St.data):N.texSubImage3D(bt,ce,Ke,_t,Rt,_e,Pe,be,vt,ke,St):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ce,Ke,_t,_e,Pe,vt,ke,St.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ce,Ke,_t,St.width,St.height,vt,St.data):N.texSubImage2D(N.TEXTURE_2D,ce,Ke,_t,_e,Pe,vt,ke,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vs),N.pixelStorei(N.UNPACK_SKIP_ROWS,wn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ho),ce===0&&B.generateMipmaps&&N.generateMipmap(bt),de.unbindTexture()},this.initRenderTarget=function(R){Se.get(R).__webglFramebuffer===void 0&&He.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){E=0,w=0,P=null,de.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};function wd(r,e){if(e===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===no||e===La){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===no)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var co=class extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Gi.extractUrlBase(e);o=Gi.resolveURL(c,this.path)}else o=Gi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jg){try{o[Je.KHR_BINARY_GLTF]=new Zd(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new tf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new Id;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new $d(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new jd;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new Jd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function xE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Pd=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new va(u),c.distance=h;break;case"spot":c=new xa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Id=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(i)}},Ld=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}},Nd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Fd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Zt),Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Wd=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Xd=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},qd=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Yd=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let _=new Ie,g=new I,p=new we,M=new I(1,1,1),y=new la(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(g,p,M));for(let x in l)if(x==="_COLOR_0"){let T=l[x];y.instanceColor=new dr(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);rt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Jg="glTF",Ua=12,Yg={JSON:1313821514,BIN:5130562},Zd=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ua,s=new DataView(e,Ua),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Yg.JSON){let c=new Uint8Array(e,Ua+o,a);this.content=n.decode(c)}else if(l===Yg.BIN){let c=Ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$d=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Qd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Qd[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=lo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,Zt,d)})})}},jd=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jd=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Qc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,M=1-g,y=p-d+h;for(let x=0;x!==a;x++){let T=o[_+x+a],E=o[_+x+l]*u,w=o[m+x+a],P=o[m+x]*u;s[x]=M*T+y*E+g*w+p*P}return s}},vE=new we,Kd=class extends Qc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return vE.fromArray(s).normalize().toArray(s),s}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zg={9728:Yt,9729:an,9984:lc,9985:Js,9986:Yr,9987:oi},$g={33071:di,33648:Us,10497:ur},Ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yE={CUBICSPLINE:void 0,LINEAR:Br,STEP:Fr},Rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ME(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),r.DefaultMaterial}function Qr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function TE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EE(r){let e,t=r.extensions&&r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cd(t.attributes):e=r.indices+":"+Cd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Cd(r.targets[n]);return e}function Cd(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ef(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wE=new Ie,tf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ga(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Qr(s,a,i),yi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Gi.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ad[i.type],a=lo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qe(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Ad[i.type],c=lo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,g;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(M);y||(_=new c(a,p*f,i.count*f/u),y=new Gs(_,f/u),t.cache.add(M,y)),g=new Ws(y,l,d%f/u,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new qe(_,l,m);if(i.sparse!==void 0){let p=Ad.SCALAR,M=lo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new M(o[1],y,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new qe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,P=T.length;w<P;w++){let v=T[w];if(g.setX(v,E[w*l]),l>=2&&g.setY(v,E[w*l+1]),l>=3&&g.setZ(v,E[w*l+2]),l>=4&&g.setW(v,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Zg[d.magFilter]||an,u.minFilter=Zg[d.minFilter]||oi,u.wrapS=$g[d.wrapS]||ur,u.wrapT=$g[d.wrapT]||ur,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==an,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new Wt(_);g.needsUpdate=!0,d(g)}),t.load(Gi.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),yi(h,o),h.userData.mimeType=o.mimeType||bE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ys,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ln,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let h=i[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=cn);let u=s.alphaMode||Rd.OPAQUE;if(u===Rd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==gn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==gn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==gn){let h=s.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Zt)}return s.emissiveTexture!==void 0&&o!==gn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,It)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),yi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Qr(i,h,s),h})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=EE(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=jg(new ct,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?ME(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let _=u[f],g=o[f],p,M=c[f];if(g.mode===qn.TRIANGLES||g.mode===qn.TRIANGLE_STRIP||g.mode===qn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Vr(_,M):new Ot(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===qn.TRIANGLE_STRIP?p.geometry=wd(p.geometry,La):g.mode===qn.TRIANGLE_FAN&&(p.geometry=wd(p.geometry,no));else if(g.mode===qn.LINES)p=new zn(_,M);else if(g.mode===qn.LINE_STRIP)p=new Bi(_,M);else if(g.mode===qn.LINE_LOOP)p=new ca(_,M);else if(g.mode===qn.POINTS)p=new ua(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&TE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),yi(p,s),g.extensions&&Qr(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Qr(i,h[0],s),h[0];let d=new At;s.extensions&&Qr(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(je.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ie;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new si(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let y=0,x=d.length;y<x;y++){let T=d[y],E=f[y],w=m[y],P=_[y],v=g[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let S=n._createAnimationTracks(T,E,w,P,v);if(S)for(let C=0;C<S.length;C++)p.push(S[C])}let M=new zi(s,void 0,p);return yi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wE)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Xs:c.length>1?u=new At:c.length===1?u=c[0]:u=new rt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),yi(u,s),s.extensions&&Qr(n,u,s),s.matrix!==void 0){let h=new Ie;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new At;n.name&&(s.name=i.createUniqueName(n.name)),yi(s,n),n.extensions&&Qr(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof en||d instanceof Wt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];pr[s.path]===pr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(pr[s.path]){case pr.weights:c=Gn;break;case pr.rotation:c=Wn;break;case pr.translation:case pr.scale:c=gi;break;default:n.itemSize===1?c=Gn:c=gi;break}let u=i.interpolation!==void 0?yE[i.interpolation]:Br,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+pr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ef(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Wn?Kd:Qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function AE(r,e,t){let n=e.attributes,i=new Cn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=ef(lo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=ef(lo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function jg(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Qd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),yi(r,e),AE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SE(r,e.targets,t):r})}var eu=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),ut=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Kg=class extends rt{constructor(r){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${r}`,this.expressionName=r,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(r){this._binds.push(r)}deleteBind(r){let e=this._binds.indexOf(r);e>=0&&this._binds.splice(e,1)}applyWeight(r){var e;let t=this.outputWeight;t*=(e=r?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(r=>r.clearAppliedWeight())}};function N_(r,e,t){var n,i;let s=r.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(i=s.meshes)==null?void 0:i[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function Qg(r,e){return ut(this,null,function*(){let t=yield r.parser.getDependency("node",e);return N_(r,e,t)})}function e_(r){return ut(this,null,function*(){let e=yield r.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{let s=N_(r,i,n);s!=null&&t.set(i,s)}),t})}var mf={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function U_(r){return Math.max(Math.min(r,1),0)}var t_=class O_{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(mf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(mf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new O_().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=U_(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Oa={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},RE={_Color:Oa.Color,_EmissionColor:Oa.EmissionColor,_ShadeColor:Oa.ShadeColor,_RimColor:Oa.RimColor,_OutlineColor:Oa.OutlineColor},CE=new Re,F_=class B_{constructor({material:e,type:t,targetValue:n,targetAlpha:i}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=i??1;let s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:i,deltaValue:s}=t,o=this.material[i];o?.add(CE.copy(s).multiplyScalar(e))}if(n!=null){let{propertyName:i,deltaValue:s}=n;this.material[i]!=null&&(this.material[i]+=s*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:i}=e,s=this.material[n];s?.copy(i)}if(t!=null){let{propertyName:n,initialValue:i}=t;this.material[n]!=null&&(this.material[n]=i)}}_initColorBindState(){var e,t,n;let{material:i,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;let u=i[l].clone(),h=new Re(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;let{material:i,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=i[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(B_._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};F_._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var n_=F_,au=class{constructor({primitives:r,index:e,weight:t}){this.primitives=r,this.index=e,this.weight=t}applyWeight(r){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*r)})}clearAppliedWeight(){this.primitives.forEach(r=>{var e;((e=r.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(r.morphTargetInfluences[this.index]=0)})}},i_=new Xe,k_=class V_{constructor({material:e,scale:t,offset:n}){var i,s;this.material=e,this.scale=t,this.offset=n;let o=(i=Object.entries(V_._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:i[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(i_.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(i_.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};k_._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var r_=k_,PE=new Set(["1.0","1.0-beta"]),H_=class z_{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return ut(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return ut(this,null,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){return ut(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!PE.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(mf)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});let h=new t_;return yield Promise.all(Array.from(u.entries()).map(d=>ut(this,[d],function*([f,m]){var _,g,p,M,y,x,T;let E=new Kg(f);if(e.scene.add(E),E.isBinary=(_=m.isBinary)!=null?_:!1,E.overrideBlink=(g=m.overrideBlink)!=null?g:"none",E.overrideLookAt=(p=m.overrideLookAt)!=null?p:"none",E.overrideMouth=(M=m.overrideMouth)!=null?M:"none",(y=m.morphTargetBinds)==null||y.forEach(w=>ut(this,null,function*(){var P;if(w.node===void 0||w.index===void 0)return;let v=yield Qg(e,w.node),S=w.index;if(!v.every(C=>Array.isArray(C.morphTargetInfluences)&&S<C.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${m.name} attempts to index morph #${S} but not found.`);return}E.addBind(new au({primitives:v,index:S,weight:(P=w.weight)!=null?P:1}))})),m.materialColorBinds||m.textureTransformBinds){let w=[];e.scene.traverse(P=>{let v=P.material;v&&(Array.isArray(v)?w.push(...v):w.push(v))}),(x=m.materialColorBinds)==null||x.forEach(P=>ut(this,null,function*(){w.filter(S=>{var C;let U=(C=this.parser.associations.get(S))==null?void 0:C.materials;return P.material===U}).forEach(S=>{E.addBind(new n_({material:S,type:P.type,targetValue:new Re().fromArray(P.targetValue),targetAlpha:P.targetValue[3]}))})})),(T=m.textureTransformBinds)==null||T.forEach(P=>ut(this,null,function*(){w.filter(S=>{var C;let U=(C=this.parser.associations.get(S))==null?void 0:C.materials;return P.material===U}).forEach(S=>{var C,U;E.addBind(new r_({material:S,offset:new Xe().fromArray((C=P.offset)!=null?C:[0,0]),scale:new Xe().fromArray((U=P.scale)!=null?U:[1,1])}))})}))}h.registerExpression(E)}))),h})}_v0Import(e){return ut(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let s=i.blendShapeMaster;if(!s)return null;let o=new t_,a=s.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>ut(this,null,function*(){var u;let h=c.presetName,d=h!=null&&z_.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);let m=new Kg(f);e.scene.add(m),m.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(g=>ut(this,null,function*(){var p;if(g.mesh===void 0||g.index===void 0)return;let M=[];(p=n.nodes)==null||p.forEach((x,T)=>{x.mesh===g.mesh&&M.push(T)});let y=g.index;yield Promise.all(M.map(x=>ut(this,null,function*(){var T;let E=yield Qg(e,x);if(!E.every(w=>Array.isArray(w.morphTargetInfluences)&&y<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}m.addBind(new au({primitives:E,index:y,weight:.01*((T=g.weight)!=null?T:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(g=>{if(g.materialName===void 0||g.propertyName===void 0||g.targetValue===void 0)return;let p=[];e.scene.traverse(y=>{if(y.material){let x=y.material;Array.isArray(x)?p.push(...x.filter(T=>(T.name===g.materialName||T.name===g.materialName+" (Outline)")&&p.indexOf(T)===-1)):x.name===g.materialName&&p.indexOf(x)===-1&&p.push(x)}});let M=g.propertyName;p.forEach(y=>{if(M==="_MainTex_ST"){let T=new Xe(g.targetValue[0],g.targetValue[1]),E=new Xe(g.targetValue[2],g.targetValue[3]);E.y=1-E.y-T.y,m.addBind(new r_({material:y,scale:T,offset:E}));return}let x=RE[M];if(x){m.addBind(new n_({material:y,type:x,targetValue:new Re().fromArray(g.targetValue),targetAlpha:g.targetValue[3]}));return}console.warn(M+" is not supported")})}),o.registerExpression(m)}))),o})}};H_.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var IE=H_;var Mf=class po{constructor(e,t){this._firstPersonOnlyLayer=po.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=po.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new po(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=po.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=po.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&i.includes(h[0])||u[1]>0&&i.includes(h[1])||u[2]>0&&i.includes(h[2])||u[3]>0&&i.includes(h[3]))continue;let d=t[l],f=n[l];if(d[0]>0&&i.includes(f[0])||d[1]>0&&i.includes(f[1])||d[2]>0&&i.includes(f[2])||d[3]>0&&i.includes(f[3]))continue;let m=t[c],_=n[c];m[0]>0&&i.includes(_[0])||m[1]>0&&i.includes(_[1])||m[2]>0&&i.includes(_[2])||m[3]>0&&i.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){let n=new Vr(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let i=n.geometry,s=i.getAttribute("skinIndex"),o=s instanceof js?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=i.getAttribute("skinWeight"),c=l instanceof js?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);let h=i.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),m=[];for(let _=0;_<f;_++)m[_]=d[_];return i.setIndex(m),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new si(e.skeleton.bones,e.skeleton.boneInverses),new Ie),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new At;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Mf.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Mf.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var s_=Mf,LE=new Set(["1.0","1.0-beta"]),DE=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(r){this.parser=r}afterRoot(r){return ut(this,null,function*(){let e=r.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");r.userData.vrmFirstPerson=yield this._import(r,e)}})}_import(r,e){return ut(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(r,e);if(t)return t;let n=yield this._v0Import(r,e);return n||null})}_v1Import(r,e){return ut(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!LE.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],u=yield e_(r);return Array.from(u.entries()).forEach(([h,d])=>{var f,m;let _=(f=l?.meshAnnotations)==null?void 0:f.find(g=>g.node===h);c.push({meshes:d,type:(m=_?.type)!=null?m:"auto"})}),new s_(e,c)})}_v0Import(r,e){return ut(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let s=i.firstPerson;if(!s)return null;let o=[],a=yield e_(r);return Array.from(a.entries()).forEach(([l,c])=>{let u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new s_(e,o)})}_convertV0FlagToV1Type(r){return r==="FirstPersonOnly"?"firstPersonOnly":r==="ThirdPersonOnly"?"thirdPersonOnly":r==="Both"?"both":"auto"}};var o_=new I,a_=new I,NE=new we,l_=class extends At{constructor(r){super(),this.vrmHumanoid=r,this._boneAxesMap=new Map,Object.values(r.humanBones).forEach(e=>{let t=new ba(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(r=>{r.geometry.dispose(),r.material.dispose()})}updateMatrixWorld(r){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(o_,NE,a_);let n=o_.set(.1,.1,.1).divide(a_);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(r)}},nf=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var uu={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function G_(r){return r.invert?r.invert():r.inverse(),r}var es=new I,ts=new we,gf=class{constructor(r){this.humanBones=r,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let r={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(es.copy(n.position),ts.copy(n.quaternion),r[t]={position:es.toArray(),rotation:ts.toArray()})}),r}getPose(){let r={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;es.set(0,0,0),ts.identity();let i=this.restPose[t];i?.position&&es.fromArray(i.position).negate(),i?.rotation&&G_(ts.fromArray(i.rotation)),es.add(n.position),ts.premultiply(n.quaternion),r[t]={position:es.toArray(),rotation:ts.toArray()}}),r}setPose(r){Object.entries(r).forEach(([e,t])=>{let n=e,i=this.getBoneNode(n);if(!i)return;let s=this.restPose[n];s&&(t?.position&&(i.position.fromArray(t.position),s.position&&i.position.add(es.fromArray(s.position))),t?.rotation&&(i.quaternion.fromArray(t.rotation),s.rotation&&i.quaternion.multiply(ts.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([r,e])=>{let t=this.getBoneNode(r);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(r){var e;return(e=this.humanBones[r])!=null?e:void 0}getBoneNode(r){var e,t;return(t=(e=this.humanBones[r])==null?void 0:e.node)!=null?t:null}},rf=new I,UE=new we,OE=new I,c_=class W_ extends gf{static _setupTransforms(e){let t=new rt;t.name="VRMHumanoidRig";let n={},i={},s={},o={};nf.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=new I,d=new we;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(h,d,rf),n[l]=h,i[l]=d,s[l]=u.quaternion.clone();let f=new we;(c=u.parent)==null||c.matrixWorld.decompose(rf,f,rf),o[l]=f}});let a={};return nf.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=n[l],d=l,f;for(;f==null&&(d=uu[d],d!=null);)f=n[d];let m=new rt;m.name="Normalized_"+u.name,(d?(c=a[d])==null?void 0:c.node:t).add(m),m.position.copy(h),f&&m.position.sub(f),a[l]={node:m}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:s}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:i,boneRotations:s}=W_._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=s}update(){nf.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),i=this._parentWorldRotations[e],s=UE.copy(i).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(s).multiply(o),e==="hips"){let a=n.getWorldPosition(OE);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},u_=class X_{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new gf(e),this._normalizedHumanBones=new c_(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new gf(e.humanBones),this._normalizedHumanBones=new c_(this._rawHumanBones),this}clone(){return new X_(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},FE={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},BE=new Set(["1.0","1.0-beta"]),h_={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},kE=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(r){return ut(this,null,function*(){r.userData.vrmHumanoid=yield this._import(r)})}_import(r){return ut(this,null,function*(){let e=yield this._v1Import(r);if(e)return e;let t=yield this._v0Import(r);return t||null})}_v1Import(r){return ut(this,null,function*(){var e,t;let n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;let o=s.specVersion;if(!BE.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>ut(this,[h],function*([d,f]){let m=d,_=f.node;if(l){let p=h_[m];p!=null&&(m=p)}let g=yield this.parser.getDependency("node",_);if(g==null){console.warn(`A glTF node bound to the humanoid bone ${m} (index = ${_}) does not exist`);return}c[m]={node:g}}))));let u=new u_(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){let h=new l_(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(r){return ut(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.humanoid;if(!i)return null;let s={};i.humanBones!=null&&(yield Promise.all(i.humanBones.map(a=>ut(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;let u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let h=h_[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));let o=new u_(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new l_(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(r){let e=Object.values(FE).filter(t=>r[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return r}},d_=class extends ct{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new qe(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,r=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let r=0;r<64;r++){let e=r/63*this._currentTheta;this._attrPos.setXYZ(r+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<63;r++)this._attrIndex.setXYZ(r*3,0,r+1,r+2);this._attrIndex.needsUpdate=!0}},VE=class extends ct{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new I,this._currentTail=new I,this._attrPos=new qe(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},tu=new we,f_=new we,Fa=new I,p_=new I,m_=Math.sqrt(2)/2,HE=new we(0,0,-m_,m_),zE=new I(0,1,0),GE=class extends At{constructor(r){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=r;{let e=new d_;e.radius=.5;let t=new gn({color:65280,transparent:!0,opacity:.5,side:cn,depthTest:!1,depthWrite:!1});this._meshPitch=new Ot(e,t),this.add(this._meshPitch)}{let e=new d_;e.radius=.5;let t=new gn({color:16711680,transparent:!0,opacity:.5,side:cn,depthTest:!1,depthWrite:!1});this._meshYaw=new Ot(e,t),this.add(this._meshYaw)}{let e=new VE;e.radius=.1;let t=new ln({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new zn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(r){let e=je.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=je.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Fa),this.vrmLookAt.getLookAtWorldQuaternion(tu),tu.multiply(this.vrmLookAt.getFaceFrontQuaternion(f_)),this._meshYaw.position.copy(Fa),this._meshYaw.quaternion.copy(tu),this._meshPitch.position.copy(Fa),this._meshPitch.quaternion.copy(tu),this._meshPitch.quaternion.multiply(f_.setFromAxisAngle(zE,e)),this._meshPitch.quaternion.multiply(HE);let{target:n,autoUpdate:i}=this.vrmLookAt;n!=null&&i&&(n.getWorldPosition(p_).sub(Fa),this._lineTarget.geometry.tail.copy(p_),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Fa)),super.updateMatrixWorld(r)}},WE=new I,XE=new I;function _f(r,e){return r.matrixWorld.decompose(WE,e,XE),e}function ru(r){return[Math.atan2(-r.z,r.x),Math.atan2(r.y,Math.sqrt(r.x*r.x+r.z*r.z))]}function g_(r){let e=Math.round(r/2/Math.PI);return r-2*Math.PI*e}var __=new I(0,0,1),qE=new I,YE=new I,ZE=new I,$E=new we,sf=new we,x_=new we,jE=new we,of=new Xt,q_=class Y_{constructor(e,t){this.offsetFromHeadBone=new I,this.autoUpdate=!0,this.faceFront=new I(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new we)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Xt)}getEuler(e){return e.set(je.DEG2RAD*this._pitch,je.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Y_(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return _f(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(__)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=ru(this.faceFront);return of.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(of).premultiply(jE.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(sf),this.getFaceFrontQuaternion(x_),e.copy(__).applyQuaternion(sf).applyQuaternion(x_).applyEuler(this.getEuler(of))}lookAt(e){let t=$E.copy(this._restHeadWorldQuaternion).multiply(G_(this.getLookAtWorldQuaternion(sf))),n=this.getLookAtWorldPosition(YE),i=ZE.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=ru(this.faceFront),[a,l]=ru(i),c=g_(a-s),u=g_(o-l);this._yaw=je.RAD2DEG*c,this._pitch=je.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(qE)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};q_.EULER_ORDER="YXZ";var hu=q_,JE=new I(0,0,1),Mi=new we,uo=new we,Yn=new Xt(0,0,0,"YXZ"),su=class{constructor(r,e,t,n,i){this.humanoid=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i,this.faceFront=new I(0,0,1),this._restQuatLeftEye=new we,this._restQuatRightEye=new we,this._restLeftEyeParentWorldQuat=new we,this._restRightEyeParentWorldQuat=new we;let s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),_f(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),_f(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(r,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),i=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Yn.x=-je.DEG2RAD*this.rangeMapVerticalDown.map(-e):Yn.x=je.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Yn.y=-je.DEG2RAD*this.rangeMapHorizontalInner.map(-r):Yn.y=je.DEG2RAD*this.rangeMapHorizontalOuter.map(r),Mi.setFromEuler(Yn),this._getWorldFaceFrontQuat(uo),i.quaternion.copy(uo).multiply(Mi).multiply(uo.invert()),Mi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(i.quaternion).multiply(Mi).premultiply(Mi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Yn.x=-je.DEG2RAD*this.rangeMapVerticalDown.map(-e):Yn.x=je.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Yn.y=-je.DEG2RAD*this.rangeMapHorizontalOuter.map(-r):Yn.y=je.DEG2RAD*this.rangeMapHorizontalInner.map(r),Mi.setFromEuler(Yn),this._getWorldFaceFrontQuat(uo),s.quaternion.copy(uo).multiply(Mi).multiply(uo.invert()),Mi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(Mi).premultiply(Mi.invert()).multiply(this._restQuatRightEye))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=je.RAD2DEG*r.y,t=je.RAD2DEG*r.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(r){if(this.faceFront.distanceToSquared(JE)<.01)return r.identity();let[e,t]=ru(this.faceFront);return Yn.set(0,.5*Math.PI+e,t,"YZX"),r.setFromEuler(Yn)}};su.type="bone";var xf=class{constructor(r,e,t,n,i){this.expressions=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i}applyYawPitch(r,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),r<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-r))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(r)))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=je.RAD2DEG*r.y,t=je.RAD2DEG*r.x;this.applyYawPitch(e,t)}};xf.type="expression";var v_=class{constructor(r,e){this.inputMaxValue=r,this.outputScale=e}map(r){return this.outputScale*U_(r/this.inputMaxValue)}},KE=new Set(["1.0","1.0-beta"]),nu=.01,Sf=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot}afterRoot(r){return ut(this,null,function*(){let e=r.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=r.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");r.userData.vrmLookAt=yield this._import(r,e,t)}})}_import(r,e,t){return ut(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(r,e,t);if(n)return n;let i=yield this._v0Import(r,e,t);return i||null})}_v1Import(r,e,t){return ut(this,null,function*(){var n,i,s;let o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let l=(i=o.extensions)==null?void 0:i.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!KE.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let u=l.lookAt;if(!u)return null;let h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),m=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,h),g;u.type==="expression"?g=new xf(t,d,f,m,_):g=new su(e,d,f,m,_);let p=this._importLookAt(e,g);return p.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),p})}_v1ImportRangeMap(r,e){var t,n;let i=(t=r?.inputMaxValue)!=null?t:90,s=(n=r?.outputScale)!=null?n:e;return i<nu&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),i=nu),new v_(i,s)}_v0Import(r,e,t){return ut(this,null,function*(){var n,i,s,o;let l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),m=this._v0ImportDegreeMap(c.lookAtVerticalUp,u),_;c.lookAtTypeName==="BlendShape"?_=new xf(t,h,d,f,m):_=new su(e,h,d,f,m);let g=this._importLookAt(e,_);return c.firstPersonBoneOffset?g.offsetFromHeadBone.set((i=c.firstPersonBoneOffset.x)!=null?i:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):g.offsetFromHeadBone.set(0,.06,0),g.faceFront.set(0,0,-1),_ instanceof su&&_.faceFront.set(0,0,-1),g})}_v0ImportDegreeMap(r,e){var t,n;let i=r?.curve;JSON.stringify(i)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=r?.xRange)!=null?t:90,o=(n=r?.yRange)!=null?n:e;return s<nu&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=nu),new v_(s,o)}_importLookAt(r,e){let t=new hu(r,e);if(this.helperRoot){let n=new GE(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function QE(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}var eb=new Set(["1.0","1.0-beta"]),tb=class{get name(){return"VRMMetaLoaderPlugin"}constructor(r,e){var t,n,i;this.parser=r,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(i=e?.acceptV0Meta)!=null?i:!0}afterRoot(r){return ut(this,null,function*(){r.userData.vrmMeta=yield this._import(r)})}_import(r){return ut(this,null,function*(){let e=yield this._v1Import(r);if(e!=null)return e;let t=yield this._v0Import(r);return t??null})}_v1Import(r){return ut(this,null,function*(){var e,t,n;let i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!eb.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(r){return ut(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.meta;if(!i)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&i.texture!=null&&i.texture!==-1&&(s=yield this.parser.getDependency("texture",i.texture)),{metaVersion:"0",allowedUserName:i.allowedUserName,author:i.author,commercialUssageName:i.commercialUssageName,contactInformation:i.contactInformation,licenseName:i.licenseName,otherLicenseUrl:i.otherLicenseUrl,otherPermissionUrl:i.otherPermissionUrl,reference:i.reference,sexualUssageName:i.sexualUssageName,texture:s??void 0,title:i.title,version:i.version,violentUssageName:i.violentUssageName}})}_extractGLTFImage(r){return ut(this,null,function*(){var e;let n=(e=this.parser.json.images)==null?void 0:e[r];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image doesn't exist`),null;let i=n.uri;if(n.bufferView!=null){let o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});i=URL.createObjectURL(a)}return i==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new $s().loadAsync(QE(i,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},nb=class{constructor(r){this.scene=r.scene,this.meta=r.meta,this.humanoid=r.humanoid,this.expressionManager=r.expressionManager,this.firstPerson=r.firstPerson,this.lookAt=r.lookAt}update(r){this.humanoid.update(),this.lookAt&&this.lookAt.update(r),this.expressionManager&&this.expressionManager.update()}};var ib=class extends nb{constructor(r){super(r),this.materials=r.materials,this.springBoneManager=r.springBoneManager,this.nodeConstraintManager=r.nodeConstraintManager}update(r){super.update(r),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(r),this.materials&&this.materials.forEach(e=>{e.update&&e.update(r)})}},rb=Object.defineProperty,y_=Object.getOwnPropertySymbols,sb=Object.prototype.hasOwnProperty,ob=Object.prototype.propertyIsEnumerable,M_=(r,e,t)=>e in r?rb(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S_=(r,e)=>{for(var t in e||(e={}))sb.call(e,t)&&M_(r,t,e[t]);if(y_)for(var t of y_(e))ob.call(e,t)&&M_(r,t,e[t]);return r},is=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),ab={"":3e3,srgb:3001};function lb(r,e){parseInt("180",10)>=152?r.colorSpace=e:r.encoding=ab[e]}var cb=class{get pending(){return Promise.all(this._pendings)}constructor(r,e){this._parser=r,this._materialParams=e,this._pendings=[]}assignPrimitive(r,e){e!=null&&(this._materialParams[r]=e)}assignColor(r,e,t){e!=null&&(this._materialParams[r]=new Re().fromArray(e),t&&this._materialParams[r].convertSRGBToLinear())}assignTexture(r,e,t){return is(this,null,function*(){let n=is(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,r,e),t&&lb(this._materialParams[r],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(r,e,t){return is(this,null,function*(){return this.assignTexture(r,e!=null?{index:e}:void 0,t)})}},ub=`// #define PHONG

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

}`,hb=`// #define PHONG

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
`,db={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},T_={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},fb={3e3:"",3001:"srgb"};function af(r){return parseInt("180",10)>=152?r.colorSpace:fb[r.encoding]}var pb=class extends Pn{constructor(r={}){var e;super({vertexShader:ub,fragmentShader:hb}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Da,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=db.None,this._outlineWidthMode=T_.None,this._isOutline=!1,r.transparentWithZWrite&&(r.depthWrite=!0),delete r.transparentWithZWrite,r.fog=!0,r.lights=!0,r.clipping=!0,this.uniforms=qc.merge([ue.common,ue.normalmap,ue.emissivemap,ue.fog,ue.lights,{litFactor:{value:new Re(1,1,1)},mapUvTransform:{value:new Oe},colorAlpha:{value:1},normalMapUvTransform:{value:new Oe},shadeColorFactor:{value:new Re(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Oe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Oe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Re(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Oe},parametricRimColorFactor:{value:new Re(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Oe},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Re(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Oe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Oe},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Re(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Oe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=r.uniforms)!=null?e:{}]),this.setValues(r),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${af(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${af(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${af(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("180",10),i=Object.entries(S_(S_({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=i+t.vertexShader,t.fragmentShader=i+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(r){this.uniforms.litFactor.value=r}get map(){return this.uniforms.map.value}set map(r){this.uniforms.map.value=r}get normalMap(){return this.uniforms.normalMap.value}set normalMap(r){this.uniforms.normalMap.value=r}get normalScale(){return this.uniforms.normalScale.value}set normalScale(r){this.uniforms.normalScale.value=r}get emissive(){return this.uniforms.emissive.value}set emissive(r){this.uniforms.emissive.value=r}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(r){this.uniforms.emissiveIntensity.value=r}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(r){this.uniforms.emissiveMap.value=r}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(r){this.uniforms.shadeColorFactor.value=r}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(r){this.uniforms.shadeMultiplyTexture.value=r}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(r){this.uniforms.shadingShiftFactor.value=r}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(r){this.uniforms.shadingShiftTexture.value=r}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(r){this.uniforms.shadingShiftTextureScale.value=r}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(r){this.uniforms.shadingToonyFactor.value=r}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(r){this.uniforms.giEqualizationFactor.value=r}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(r){this.uniforms.matcapFactor.value=r}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(r){this.uniforms.matcapTexture.value=r}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(r){this.uniforms.parametricRimColorFactor.value=r}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(r){this.uniforms.rimMultiplyTexture.value=r}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(r){this.uniforms.rimLightingMixFactor.value=r}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(r){this.uniforms.parametricRimFresnelPowerFactor.value=r}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(r){this.uniforms.parametricRimLiftFactor.value=r}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(r){this.uniforms.outlineWidthMultiplyTexture.value=r}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(r){this.uniforms.outlineWidthFactor.value=r}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(r){this.uniforms.outlineColorFactor.value=r}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(r){this.uniforms.outlineLightingMixFactor.value=r}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(r){this.uniforms.uvAnimationMaskTexture.value=r}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(r){this.uniforms.uvAnimationScrollXOffset.value=r}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(r){this.uniforms.uvAnimationScrollYOffset.value=r}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(r){this.uniforms.uvAnimationRotationPhase.value=r}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(r){this._ignoreVertexColor=r,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(r){this._v0CompatShade=r,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(r){this._debugMode=r,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(r){this._outlineWidthMode=r,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(r){this._isOutline=r,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(r){this._uploadUniformsWorkaround(),this._updateUVAnimation(r)}copy(r){return super.copy(r),this.map=r.map,this.normalMap=r.normalMap,this.emissiveMap=r.emissiveMap,this.shadeMultiplyTexture=r.shadeMultiplyTexture,this.shadingShiftTexture=r.shadingShiftTexture,this.matcapTexture=r.matcapTexture,this.rimMultiplyTexture=r.rimMultiplyTexture,this.outlineWidthMultiplyTexture=r.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=r.uvAnimationMaskTexture,this.normalMapType=r.normalMapType,this.uvAnimationScrollXSpeedFactor=r.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=r.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=r.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=r.ignoreVertexColor,this.v0CompatShade=r.v0CompatShade,this.debugMode=r.debugMode,this.outlineWidthMode=r.outlineWidthMode,this.isOutline=r.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(r){this.uniforms.uvAnimationScrollXOffset.value+=r*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=r*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=r*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let r=parseInt("180",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:r,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===T_.ScreenCoordinates}}_updateTextureMatrix(r,e){r.value&&(r.value.matrixAutoUpdate&&r.value.updateMatrix(),e.value.copy(r.value.matrix))}},mb=new Set(["1.0","1.0-beta"]),Z_=class ou{get name(){return ou.EXTENSION_NAME}constructor(e,t={}){var n,i,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:pb,this.renderOrderOffset=(i=t.renderOrderOffset)!=null?i:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return is(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return is(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return is(this,null,function*(){var t;let n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((i,s)=>{var o;this._getMToonExtension(s)&&((o=i.extensions)!=null&&o.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[ou.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!mb.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${ou.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return is(this,null,function*(){var n;delete t.metalness,delete t.roughness;let i=new cb(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof en)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=$t,e.material.push(n);let i=e.geometry,s=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,s,0),i.addGroup(0,s,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(let i of n)this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Z_.EXTENSION_NAME="VRMC_materials_mtoon";var gb=Z_,_b=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),$_=class vf{get name(){return vf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return _b(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[vf.EXTENSION_NAME];if(a!=null)return a}};$_.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var xb=$_,vb=Object.defineProperty,yb=Object.defineProperties,Mb=Object.getOwnPropertyDescriptors,E_=Object.getOwnPropertySymbols,Sb=Object.prototype.hasOwnProperty,Tb=Object.prototype.propertyIsEnumerable,b_=(r,e,t)=>e in r?vb(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Si=(r,e)=>{for(var t in e||(e={}))Sb.call(e,t)&&b_(r,t,e[t]);if(E_)for(var t of E_(e))Tb.call(e,t)&&b_(r,t,e[t]);return r},w_=(r,e)=>yb(r,Mb(e)),Eb=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});function ho(r){return Math.pow(r,2.2)}var bb=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(r){var e;this.parser=r,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return Eb(this,null,function*(){var r;let e=this.parser.json,t=(r=e.extensions)==null?void 0:r.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((i,s)=>{var o,a;let l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(i.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(i,l);e.materials[s]=c}else if((a=i.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(i,l);e.materials[s]=c}else i.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${i.shader}`)}))})}_parseV0MToonProperties(r,e){var t,n,i,s,o,a,l,c,u,h,d,f,m,_,g,p,M,y,x,T,E,w,P,v,S,C,U,O,V,H,D,Q,G,W,ee,se,xe,ye,Le,Ye,q,te,fe,De,me,Ve,ft,N,nt,Fe,Ne,de,ot,Se,He;let ht=(n=(t=r.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,L=((i=r.floatProperties)==null?void 0:i._ZWrite)===1&&ht,b=this._v0ParseRenderQueue(r),z=(o=(s=r.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,K=ht?"BLEND":z?"MASK":"OPAQUE",ne=z?(l=(a=r.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Ee=((u=(c=r.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,ie=this._portTextureTransform(r),Te=((d=(h=r.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((Y,$)=>$===3?Y:ho(Y)),ge=(f=r.textureProperties)==null?void 0:f._MainTex,ae=ge!=null?{index:ge,extensions:Si({},ie)}:void 0,he=(_=(m=r.floatProperties)==null?void 0:m._BumpScale)!=null?_:1,Ce=(g=r.textureProperties)==null?void 0:g._BumpMap,Me=Ce!=null?{index:Ce,scale:he,extensions:Si({},ie)}:void 0,oe=((M=(p=r.vectorProperties)==null?void 0:p._EmissionColor)!=null?M:[0,0,0,1]).map(ho),ve=(y=r.textureProperties)==null?void 0:y._EmissionMap,A=ve!=null?{index:ve,extensions:Si({},ie)}:void 0,F=((T=(x=r.vectorProperties)==null?void 0:x._ShadeColor)!=null?T:[.97,.81,.86,1]).map(ho),X=(E=r.textureProperties)==null?void 0:E._ShadeTexture,re=X!=null?{index:X,extensions:Si({},ie)}:void 0,j=(P=(w=r.floatProperties)==null?void 0:w._ShadeShift)!=null?P:0,Z=(S=(v=r.floatProperties)==null?void 0:v._ShadeToony)!=null?S:.9;Z=je.lerp(Z,1,.5+.5*j),j=-j-(1-Z);let le=(U=(C=r.floatProperties)==null?void 0:C._IndirectLightIntensity)!=null?U:.1,pe=le?1-le:void 0,Ae=(O=r.textureProperties)==null?void 0:O._SphereAdd,Ue=Ae!=null?[1,1,1]:void 0,gt=Ae!=null?{index:Ae}:void 0,kt=(H=(V=r.floatProperties)==null?void 0:V._RimLightingMix)!=null?H:0,Bn=(D=r.textureProperties)==null?void 0:D._RimTexture,Mt=Bn!=null?{index:Bn,extensions:Si({},ie)}:void 0,Jt=((G=(Q=r.vectorProperties)==null?void 0:Q._RimColor)!=null?G:[0,0,0,1]).map(ho),En=(ee=(W=r.floatProperties)==null?void 0:W._RimFresnelPower)!=null?ee:1,tr=(xe=(se=r.floatProperties)==null?void 0:se._RimLift)!=null?xe:0,gs=["none","worldCoordinates","screenCoordinates"][(Le=(ye=r.floatProperties)==null?void 0:ye._OutlineWidthMode)!=null?Le:0],_s=(q=(Ye=r.floatProperties)==null?void 0:Ye._OutlineWidth)!=null?q:0;_s=.01*_s;let wr=(te=r.textureProperties)==null?void 0:te._OutlineWidthTexture,ol=wr!=null?{index:wr,extensions:Si({},ie)}:void 0,al=((De=(fe=r.vectorProperties)==null?void 0:fe._OutlineColor)!=null?De:[0,0,0]).map(ho),th=((Ve=(me=r.floatProperties)==null?void 0:me._OutlineColorMode)!=null?Ve:0)===1?(N=(ft=r.floatProperties)==null?void 0:ft._OutlineLightingMix)!=null?N:1:0,ll=(nt=r.textureProperties)==null?void 0:nt._UvAnimMaskTexture,nh=ll!=null?{index:ll,extensions:Si({},ie)}:void 0,ih=(Ne=(Fe=r.floatProperties)==null?void 0:Fe._UvAnimScrollX)!=null?Ne:0,xs=(ot=(de=r.floatProperties)==null?void 0:de._UvAnimScrollY)!=null?ot:0;xs!=null&&(xs=-xs);let R=(He=(Se=r.floatProperties)==null?void 0:Se._UvAnimRotation)!=null?He:0,B={specVersion:"1.0",transparentWithZWrite:L,renderQueueOffsetNumber:b,shadeColorFactor:F,shadeMultiplyTexture:re,shadingShiftFactor:j,shadingToonyFactor:Z,giEqualizationFactor:pe,matcapFactor:Ue,matcapTexture:gt,rimLightingMixFactor:kt,rimMultiplyTexture:Mt,parametricRimColorFactor:Jt,parametricRimFresnelPowerFactor:En,parametricRimLiftFactor:tr,outlineWidthMode:gs,outlineWidthFactor:_s,outlineWidthMultiplyTexture:ol,outlineColorFactor:al,outlineLightingMixFactor:th,uvAnimationMaskTexture:nh,uvAnimationScrollXSpeedFactor:ih,uvAnimationScrollYSpeedFactor:xs,uvAnimationRotationSpeedFactor:R};return w_(Si({},e),{pbrMetallicRoughness:{baseColorFactor:Te,baseColorTexture:ae},normalTexture:Me,emissiveTexture:A,emissiveFactor:oe,alphaMode:K,alphaCutoff:ne,doubleSided:Ee,extensions:{VRMC_materials_mtoon:B}})}_parseV0UnlitProperties(r,e){var t,n,i,s,o;let a=r.shader==="VRM/UnlitTransparentZWrite",l=r.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(r),u=r.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=r.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(r),m=((s=(i=r.vectorProperties)==null?void 0:i._Color)!=null?s:[1,1,1,1]).map(ho),_=(o=r.textureProperties)==null?void 0:o._MainTex,g=_!=null?{index:_,extensions:Si({},f)}:void 0,p={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:m,shadeMultiplyTexture:g};return w_(Si({},e),{pbrMetallicRoughness:{baseColorFactor:m,baseColorTexture:g},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:p}})}_portTextureTransform(r){var e,t,n,i,s;let o=(e=r.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(i=o?.[2])!=null?i:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(r){var e,t;let n=r.shader==="VRM/UnlitTransparentZWrite",i=((e=r.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||r.shader==="VRM/UnlitTransparent"||n,s=((t=r.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(i){let a=r.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(r){let e=new Set,t=new Set;r.forEach(n=>{var i,s;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((i=n.keywordMap)==null?void 0:i._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,i)=>{let s=Math.min(Math.max(i-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,i)=>{let s=Math.min(Math.max(i,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},A_=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),mr=new I,lf=class extends At{constructor(r){super(),this._attrPosition=new qe(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(id);let e=new ct;e.setAttribute("position",this._attrPosition);let t=new ln({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Bi(e,t),this.add(this._line),this.constraint=r}updateMatrixWorld(r){mr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,mr.x,mr.y,mr.z),this.constraint.source&&mr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,mr.x,mr.y,mr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(r)}};function R_(r,e){return e.set(r.elements[12],r.elements[13],r.elements[14])}var wb=new I,Ab=new I;function Rb(r,e){return r.decompose(wb,e,Ab),e}function lu(r){return r.invert?r.invert():r.inverse(),r}var Tf=class{constructor(r,e){this.destination=r,this.source=e,this.weight=1}},Cb=new I,Pb=new I,Ib=new I,Lb=new we,Db=new we,Nb=new we,Ub=class extends Tf{get aimAxis(){return this._aimAxis}set aimAxis(r){this._aimAxis=r,this._v3AimAxis.set(r==="PositiveX"?1:r==="NegativeX"?-1:0,r==="PositiveY"?1:r==="NegativeY"?-1:0,r==="PositiveZ"?1:r==="NegativeZ"?-1:0)}get dependencies(){let r=new Set([this.source]);return this.destination.parent&&r.add(this.destination.parent),r}constructor(r,e){super(r,e),this._aimAxis="PositiveX",this._v3AimAxis=new I(1,0,0),this._dstRestQuat=new we}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let r=Lb.identity(),e=Db.identity();this.destination.parent&&(Rb(this.destination.parent.matrixWorld,r),lu(e.copy(r)));let t=Cb.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(r),n=R_(this.source.matrixWorld,Pb).sub(R_(this.destination.matrixWorld,Ib)).normalize(),i=Nb.setFromUnitVectors(t,n).premultiply(e).multiply(r).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function Ob(r,e){let t=[r],n=r.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var Fb=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(r){this._constraints.add(r);let e=this._objectConstraintsMap.get(r.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(r.destination,e)),e.add(r)}deleteConstraint(r){this._constraints.delete(r),this._objectConstraintsMap.get(r.destination).delete(r)}setInitState(){let r=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,r,e,n=>n.setInitState())}update(){let r=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,r,e,n=>n.update())}_processConstraint(r,e,t,n){if(t.has(r))return;if(e.has(r))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(r);let i=r.dependencies;for(let s of i)Ob(s,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(r),t.add(r)}},Bb=new we,kb=new we,Vb=class extends Tf{get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._dstRestQuat=new we,this._invSrcRestQuat=new we}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lu(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let r=Bb.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=kb.copy(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},Hb=new I,zb=new we,Gb=new we,Wb=class extends Tf{get rollAxis(){return this._rollAxis}set rollAxis(r){this._rollAxis=r,this._v3RollAxis.set(r==="X"?1:0,r==="Y"?1:0,r==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._rollAxis="X",this._v3RollAxis=new I(1,0,0),this._dstRestQuat=new we,this._invDstRestQuat=new we,this._invSrcRestQuatMulDstRestQuat=new we}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lu(this._invDstRestQuat.copy(this._dstRestQuat)),lu(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let r=zb.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=Hb.copy(this._v3RollAxis).applyQuaternion(r),n=Gb.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},Xb=new Set(["1.0","1.0-beta"]),j_=class Ha{get name(){return Ha.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return A_(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return A_(this,null,function*(){var t;let n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(Ha.EXTENSION_NAME))!==-1))return null;let s=new Fb,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[Ha.EXTENSION_NAME];if(h==null)return;let d=h.specVersion;if(!Xb.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Ha.EXTENSION_NAME} specVersion "${d}"`);return}let f=h.constraint;if(f.roll!=null){let m=this._importRollConstraint(a,o,f.roll);s.addConstraint(m)}else if(f.aim!=null){let m=this._importAimConstraint(a,o,f.aim);s.addConstraint(m)}else if(f.rotation!=null){let m=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(m)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){let{source:i,rollAxis:s,weight:o}=n,a=t[i],l=new Wb(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new lf(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:i,aimAxis:s,weight:o}=n,a=t[i],l=new Ub(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new lf(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:i,weight:s}=n,o=t[i],a=new Vb(e,o);if(s!=null&&(a.weight=s),this.helperRoot){let l=new lf(a);this.helperRoot.add(l)}return a}};j_.EXTENSION_NAME="VRMC_node_constraint";var qb=j_,iu=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Ef=class{},cf=new I,ns=new I,J_=class extends Ef{get type(){return"capsule"}constructor(r){var e,t,n,i;super(),this.offset=(e=r?.offset)!=null?e:new I(0,0,0),this.tail=(t=r?.tail)!=null?t:new I(0,0,0),this.radius=(n=r?.radius)!=null?n:0,this.inside=(i=r?.inside)!=null?i:!1}calculateCollision(r,e,t,n){cf.setFromMatrixPosition(r),ns.subVectors(this.tail,this.offset).applyMatrix4(r),ns.sub(cf);let i=ns.lengthSq();n.copy(e).sub(cf);let s=ns.dot(n);s<=0||(i<=s||ns.multiplyScalar(s/i),n.sub(ns));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},uf=new I,C_=new Oe,K_=class extends Ef{get type(){return"plane"}constructor(r){var e,t;super(),this.offset=(e=r?.offset)!=null?e:new I(0,0,0),this.normal=(t=r?.normal)!=null?t:new I(0,0,1)}calculateCollision(r,e,t,n){n.setFromMatrixPosition(r),n.negate().add(e),C_.getNormalMatrix(r),uf.copy(this.normal).applyNormalMatrix(C_).normalize();let i=n.dot(uf)-t;return n.copy(uf),i}},Yb=new I,Q_=class extends Ef{get type(){return"sphere"}constructor(r){var e,t,n;super(),this.offset=(e=r?.offset)!=null?e:new I(0,0,0),this.radius=(t=r?.radius)!=null?t:0,this.inside=(n=r?.inside)!=null?n:!1}calculateCollision(r,e,t,n){n.subVectors(e,Yb.setFromMatrixPosition(r));let i=n.length(),s=this.inside?this.radius-t-i:i-t-this.radius;return s<0&&(n.multiplyScalar(1/i),this.inside&&n.negate()),s}},Ti=new I,Zb=class extends ct{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new I,this._currentTail=new I,this._shape=r,this._attrPos=new qe(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0);let t=Ti.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),r=!0),r&&this._buildPosition()}_buildPosition(){Ti.copy(this._currentTail).sub(this._currentOffset);let r=Ti.length()/this._currentRadius;for(let n=0;n<=16;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(i),-Math.cos(i),0),this._attrPos.setXYZ(17+n,r+Math.sin(i),Math.cos(i),0),this._attrPos.setXYZ(34+n,-Math.sin(i),0,-Math.cos(i)),this._attrPos.setXYZ(51+n,r+Math.sin(i),0,Math.cos(i))}for(let n=0;n<32;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(i),Math.cos(i)),this._attrPos.setXYZ(100+n,r,Math.sin(i),Math.cos(i))}let e=Math.atan2(Ti.y,Math.sqrt(Ti.x*Ti.x+Ti.z*Ti.z)),t=-Math.atan2(Ti.z,Ti.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<34;r++){let e=(r+1)%34;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(68+r*2,34+r,34+e)}for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(136+r*2,68+r,68+e),this._attrIndex.setXY(200+r*2,100+r,100+e)}this._attrIndex.needsUpdate=!0}},$b=class extends ct{constructor(r){super(),this.worldScale=1,this._currentOffset=new I,this._currentNormal=new I,this._shape=r,this._attrPos=new qe(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},jb=class extends ct{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new I,this._shape=r,this._attrPos=new qe(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.needsUpdate=!0}},Jb=new I,hf=class extends At{constructor(r){if(super(),this.matrixAutoUpdate=!1,this.collider=r,this.collider.shape instanceof Q_)this._geometry=new jb(this.collider.shape);else if(this.collider.shape instanceof J_)this._geometry=new Zb(this.collider.shape);else if(this.collider.shape instanceof K_)this._geometry=new $b(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new ln({color:16711935,depthTest:!1,depthWrite:!1});this._line=new zn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=Jb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},Kb=class extends ct{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new I,this._springBone=r,this._attrPos=new qe(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qe(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){let e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){let e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Qb=new I,ew=class extends At{constructor(r){super(),this.matrixAutoUpdate=!1,this.springBone=r,this._geometry=new Kb(this.springBone);let e=new ln({color:16776960,depthTest:!1,depthWrite:!1});this._line=new zn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=Qb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},df=class extends rt{constructor(r){super(),this.colliderMatrix=new Ie,this.shape=r}updateWorldMatrix(r,e){super.updateWorldMatrix(r,e),tw(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function tw(r,e,t){let n=e.elements;r.copy(e),t&&(r.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],r.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],r.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var nw=new Ie;function iw(r){return r.invert?r.invert():r.getInverse(nw.copy(r)),r}var rw=class{constructor(r){this._inverseCache=new Ie,this._shouldUpdateInverse=!0,this.matrix=r;let e={set:(t,n,i)=>(this._shouldUpdateInverse=!0,t[n]=i,!0)};this._originalElements=r.elements,r.elements=new Proxy(r.elements,e)}get inverse(){return this._shouldUpdateInverse&&(iw(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},ff=new Ie,fo=new I,Ba=new I,ka=new I,Va=new I,sw=new Ie,ow=class{constructor(r,e,t={},n=[]){this._currentTail=new I,this._prevTail=new I,this._boneAxis=new I,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ie,this._initialLocalRotation=new we,this._initialLocalChildPosition=new I;var i,s,o,a,l,c;this.bone=r,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(i=t.hitRadius)!=null?i:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new I(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let r=new Set,e=this.bone.parent;e&&r.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)r.add(this.colliderGroups[t].colliders[n]);return r}get center(){return this._center}set center(r){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=r,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new rw(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:ff}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail)}update(r){if(r<=0)return;this._calcWorldSpaceBoneLength();let e=Ba.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Va.copy(this._currentTail).add(fo.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*r).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*r),ka.setFromMatrixPosition(this.bone.matrixWorld),Va.sub(ka).normalize().multiplyScalar(this._worldSpaceBoneLength).add(ka),this._collision(Va),this._prevTail.copy(this._currentTail),this._currentTail.copy(Va).applyMatrix4(this._getMatrixWorldToCenter());let t=sw.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,fo.copy(Va).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(r){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],i=n.shape.calculateCollision(n.colliderMatrix,r,this.settings.hitRadius,fo);if(i<0){r.addScaledVector(fo,-i),r.sub(ka);let s=r.length();r.multiplyScalar(this._worldSpaceBoneLength/s).add(ka)}}}_calcWorldSpaceBoneLength(){fo.setFromMatrixPosition(this.bone.matrixWorld),this.child?Ba.setFromMatrixPosition(this.child.matrixWorld):(Ba.copy(this._initialLocalChildPosition),Ba.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=fo.sub(Ba).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:ff}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:ff}};function aw(r,e){let t=[],n=r;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function yf(r,e){r.children.forEach(t=>{e(t)||yf(t,e)})}function lw(r){var e;let t=new Map;for(let n of r){let i=n;do{let s=((e=t.get(i))!=null?e:0)+1;if(s===r.size)return i;t.set(i,s),i=i.parent}while(i!==null)}return null}var P_=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let r=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{r.add(t)})}),Array.from(r)}get colliders(){let r=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{r.add(t)})}),Array.from(r)}addJoint(r){this._joints.add(r);let e=this._objectSpringBonesMap.get(r.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(r.bone,e)),e.add(r),this._isSortedJointsDirty=!0}addSpringBone(r){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(r)}deleteJoint(r){this._joints.delete(r),this._objectSpringBonesMap.get(r.bone).delete(r),this._isSortedJointsDirty=!0}deleteSpringBone(r){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(r)}setInitState(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){let e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){let e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(r){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(r),yf(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let r=[],e=new Set,t=new Set,n=new Set;for(let s of this._joints)this._insertJointSort(s,e,t,r,n);this._sortedJoints=r;let i=lw(n);this._ancestors=[],i&&(this._ancestors.push(i),yf(i,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(r,e,t,n,i){if(t.has(r))return;if(e.has(r)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(r);let s=r.dependencies;for(let o of s){let a=!1,l=null;aw(o,c=>{let u=this._objectSpringBonesMap.get(c);if(u)for(let h of u)a=!0,this._insertJointSort(h,e,t,n,i);else a||(l=c)}),l&&i.add(l)}n.push(r),t.add(r)}_relevantChildrenUpdated(r){var e,t;return((t=(e=this._objectSpringBonesMap.get(r))==null?void 0:e.size)!=null?t:0)>0?!0:(r.updateWorldMatrix(!1,!1),!1)}},I_="VRMC_springBone_extended_collider",cw=new Set(["1.0","1.0-beta"]),uw=new Set(["1.0"]),e0=class mo{get name(){return mo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return iu(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return iu(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return iu(this,null,function*(){var t,n,i,s,o;let a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(mo.EXTENSION_NAME))!==-1))return null;let c=new P_,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[mo.EXTENSION_NAME];if(!h)return null;let d=h.specVersion;if(!cw.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${mo.EXTENSION_NAME} specVersion "${d}"`),null;let f=(i=h.colliders)==null?void 0:i.map((_,g)=>{var p,M,y,x,T,E,w,P,v,S,C,U,O,V,H;let D=u[_.node];if(D==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${g} attempted to use the node #${_.node} but not found`),null;let Q=_.shape,G=(p=_.extensions)==null?void 0:p[I_];if(this.useExtendedColliders&&G!=null){let W=G.specVersion;if(!uw.has(W))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${I_} specVersion "${W}". Fallbacking to the ${mo.EXTENSION_NAME} definition`);else{let ee=G.shape;if(ee.sphere)return this._importSphereCollider(D,{offset:new I().fromArray((M=ee.sphere.offset)!=null?M:[0,0,0]),radius:(y=ee.sphere.radius)!=null?y:0,inside:(x=ee.sphere.inside)!=null?x:!1});if(ee.capsule)return this._importCapsuleCollider(D,{offset:new I().fromArray((T=ee.capsule.offset)!=null?T:[0,0,0]),radius:(E=ee.capsule.radius)!=null?E:0,tail:new I().fromArray((w=ee.capsule.tail)!=null?w:[0,0,0]),inside:(P=ee.capsule.inside)!=null?P:!1});if(ee.plane)return this._importPlaneCollider(D,{offset:new I().fromArray((v=ee.plane.offset)!=null?v:[0,0,0]),normal:new I().fromArray((S=ee.plane.normal)!=null?S:[0,0,1])})}}if(Q.sphere)return this._importSphereCollider(D,{offset:new I().fromArray((C=Q.sphere.offset)!=null?C:[0,0,0]),radius:(U=Q.sphere.radius)!=null?U:0,inside:!1});if(Q.capsule)return this._importCapsuleCollider(D,{offset:new I().fromArray((O=Q.capsule.offset)!=null?O:[0,0,0]),radius:(V=Q.capsule.radius)!=null?V:0,tail:new I().fromArray((H=Q.capsule.tail)!=null?H:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${g} has no valid shape`)}),m=(s=h.colliderGroups)==null?void 0:s.map((_,g)=>{var p;return{colliders:((p=_.colliders)!=null?p:[]).flatMap(y=>{let x=f?.[y];return x??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${g} attempted to use a collider #${y} but not found`),[])}),name:_.name}});return(o=h.springs)==null||o.forEach((_,g)=>{var p;let M=_.joints,y=(p=_.colliderGroups)==null?void 0:p.map(E=>{let w=m?.[E];if(w==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${E} but not found`);return w}),x=_.center!=null?u[_.center]:void 0,T;M.forEach(E=>{if(T){let w=T.node,P=u[w],v=E.node,S=u[v],C={hitRadius:T.hitRadius,dragForce:T.dragForce,gravityPower:T.gravityPower,stiffness:T.stiffness,gravityDir:T.gravityDir!=null?new I().fromArray(T.gravityDir):void 0},U=this._importJoint(P,S,C,y);x&&(U.center=x),c.addJoint(U)}T=E})}),c.setInitState(),c})}_v0Import(e){return iu(this,null,function*(){var t,n,i;let s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=s.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let u=new P_,h=yield e.parser.getDependencies("node"),d=(i=l.colliderGroups)==null?void 0:i.map(f=>{var m;let _=h[f.node];return{colliders:((m=f.colliders)!=null?m:[]).map((p,M)=>{var y,x,T;let E=new I(0,0,0);return p.offset&&E.set((y=p.offset.x)!=null?y:0,(x=p.offset.y)!=null?x:0,p.offset.z?-p.offset.z:0),this._importSphereCollider(_,{offset:E,radius:(T=p.radius)!=null?T:0,inside:!1})})}});return c?.forEach((f,m)=>{let _=f.bones;_&&_.forEach(g=>{var p,M,y,x;let T=h[g],E=new I;f.gravityDir?E.set((p=f.gravityDir.x)!=null?p:0,(M=f.gravityDir.y)!=null?M:0,(y=f.gravityDir.z)!=null?y:0):E.set(0,-1,0);let w=f.center!=null?h[f.center]:void 0,P={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:E},v=(x=f.colliderGroups)==null?void 0:x.map(S=>{let C=d?.[S];if(C==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${S} but not found`);return C});T.traverse(S=>{var C;let U=(C=S.children[0])!=null?C:null,O=this._importJoint(S,U,P,v);w&&(O.center=w),u.addJoint(O)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,i){let s=new ow(e,t,n,i);if(this.jointHelperRoot){let o=new ew(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){let n=new Q_(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importCapsuleCollider(e,t){let n=new J_(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importPlaneCollider(e,t){let n=new K_(t),i=new df(n);if(e.add(i),this.colliderHelperRoot){let s=new hf(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}};e0.EXTENSION_NAME="VRMC_springBone";var hw=e0,t0=class{get name(){return"VRMLoaderPlugin"}constructor(r,e){var t,n,i,s,o,a,l,c,u,h;this.parser=r;let d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new IE(r),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new DE(r),this.humanoidPlugin=(i=e?.humanoidPlugin)!=null?i:new kE(r,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new Sf(r,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new tb(r),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new gb(r),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new xb(r),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new bb(r),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new hw(r,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new qb(r,{helperRoot:d})}beforeRoot(){return eu(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(r){return eu(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(r)})}getMaterialType(r){let e=this.mtoonMaterialPlugin.getMaterialType(r);return e??null}extendMaterialParams(r,e){return eu(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(r,e),yield this.mtoonMaterialPlugin.extendMaterialParams(r,e)})}afterRoot(r){return eu(this,null,function*(){yield this.metaPlugin.afterRoot(r),yield this.humanoidPlugin.afterRoot(r),yield this.expressionPlugin.afterRoot(r),yield this.lookAtPlugin.afterRoot(r),yield this.firstPersonPlugin.afterRoot(r),yield this.springBonePlugin.afterRoot(r),yield this.nodeConstraintPlugin.afterRoot(r),yield this.mtoonMaterialPlugin.afterRoot(r);let e=r.userData.vrmMeta,t=r.userData.vrmHumanoid;if(e&&t){let n=new ib({scene:r.scene,expressionManager:r.userData.vrmExpressionManager,firstPerson:r.userData.vrmFirstPerson,humanoid:t,lookAt:r.userData.vrmLookAt,meta:e,materials:r.userData.vrmMToonMaterials,springBoneManager:r.userData.vrmSpringBoneManager,nodeConstraintManager:r.userData.vrmNodeConstraintManager});r.userData.vrm=n}})}};function dw(r){let e=new Set;return r.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function L_(r,e,t){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return r[o.index]}let n=new Float32Array(r[0].count*3),i=0;if(t)i=1;else for(let o of e)i+=o.weight;for(let o of e){let a=r[o.index],l=o.weight/i;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new qe(n,3)}function fw(r){var e;let t=dw(r.scene),n=new Map,i=(e=r.expressionManager)==null?void 0:e.expressionMap;if(i!=null)for(let[s,o]of Object.entries(i)){let a=new Set;for(let l of o.binds)if(l instanceof au){if(l.weight!==0)for(let c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let s of t){let o=n.get(s);if(o==null)continue;let a=s.geometry.morphAttributes;s.geometry.morphAttributes={};let l=s.geometry.clone();s.geometry=l;let c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},m=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let _=0;for(let[g,p]of o)u&&(d.position[_]=L_(a.position,p,c)),h&&(d.normal[_]=L_(a.normal,p,c)),i?.[g].addBind(new au({index:_,weight:1,primitives:[s]})),f[g]=_,m.push(0),_++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=m}}function cu(r,e,t){if(r.getComponent)return r.getComponent(e,t);{let n=r.array[e*r.itemSize+t];return r.normalized&&(n=je.denormalize(n,r.array)),n}}function n0(r,e,t,n){r.setComponent?r.setComponent(e,t,n):(r.normalized&&(n=je.normalize(n,r.array)),r.array[e*r.itemSize+t]=n)}function pw(r){var e;let t=mw(r),n=new Set;for(let h of t)n.has(h.geometry)&&(h.geometry=Mw(h.geometry)),n.add(h.geometry);let i=new Map;for(let h of n){let d=h.getAttribute("skinIndex"),f=(e=i.get(d))!=null?e:new Map;i.set(d,f);let m=h.getAttribute("skinWeight"),_=gw(d,m);f.set(m,_)}let s=new Map;for(let h of t){let d=_w(h,i);s.set(h,d)}let o=[];for(let[h,d]of s){let f=!1;for(let m of o)if(xw(d,m.boneInverseMap)){f=!0,m.meshes.add(h);for(let[g,p]of d)m.boneInverseMap.set(g,p);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}let a=new Map,l=new pf,c=new pf,u=new pf;for(let h of o){let{boneInverseMap:d,meshes:f}=h,m=Array.from(d.keys()),_=Array.from(d.values()),g=new si(m,_),p=c.getOrCreate(g);for(let M of f){let y=M.geometry.getAttribute("skinIndex"),x=l.getOrCreate(y),T=M.skeleton.bones,E=T.map(v=>u.getOrCreate(v)).join(","),w=`${x};${p};${E}`,P=a.get(w);P==null&&(P=y.clone(),vw(P,T,m),a.set(w,P)),M.geometry.setAttribute("skinIndex",P)}for(let M of f)M.bind(g,new Ie)}}function mw(r){let e=new Set;return r.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function gw(r,e){let t=new Set;for(let n=0;n<r.count;n++)for(let i=0;i<r.itemSize;i++){let s=cu(r,n,i);cu(e,n,i)!==0&&t.add(s)}return t}function _w(r,e){let t=new Map,n=r.skeleton,i=r.geometry,s=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function xw(r,e){for(let[t,n]of r.entries()){let i=e.get(t);if(i!=null&&!yw(n,i))return!1}return!0}function vw(r,e,t){let n=new Map;for(let s of e)n.set(s,n.size);let i=new Map;for(let[s,o]of t.entries()){let a=n.get(o);i.set(a,s)}for(let s=0;s<r.count;s++)for(let o=0;o<r.itemSize;o++){let a=cu(r,s,o),l=i.get(a);n0(r,s,o,l)}r.needsUpdate=!0}function yw(r,e,t){if(t=t||1e-4,r.elements.length!=e.elements.length)return!1;for(let n=0,i=r.elements.length;n<i;n++)if(Math.abs(r.elements[n]-e.elements[n])>t)return!1;return!0}var pf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(r){return this._objectIndexMap.get(r)}getOrCreate(r){let e=this._objectIndexMap.get(r);return e==null&&(e=this._index,this._objectIndexMap.set(r,e),this._index++),e}};function Mw(r){var e,t,n,i;let s=new ct;s.name=r.name,s.setIndex(r.index);for(let[o,a]of Object.entries(r.attributes))s.setAttribute(o,a);for(let[o,a]of Object.entries(r.morphAttributes)){let l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=r.morphTargetsRelative,s.groups=[];for(let o of r.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=r.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(i=(n=r.boundingBox)==null?void 0:n.clone())!=null?i:null,s.drawRange.start=r.drawRange.start,s.drawRange.count=r.drawRange.count,s.userData=r.userData,s}function D_(r){if(Object.values(r).forEach(e=>{e?.isTexture&&e.dispose()}),r.isShaderMaterial){let e=r.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}r.dispose()}function Sw(r){let e=r.geometry;e&&e.dispose();let t=r.skeleton;t&&t.dispose();let n=r.material;n&&(Array.isArray(n)?n.forEach(i=>D_(i)):n&&D_(n))}function Tw(r){r.traverse(Sw)}function Ew(r,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let i=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];r.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});let o=new Map,a=0;for(let l of s){let u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;let h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let m=0;m<u.itemSize;m++){let _=cu(u,f,m),g=h.get(_);g==null&&(g=h.size,h.set(_,g),d.set(g,_)),n0(u,f,m,g)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(let l of s){let u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],m=i?a:h.size;for(let g=0;g<m;g++){let p=(n=h.get(g))!=null?n:0;d.push(l.skeleton.bones[p]),f.push(l.skeleton.boneInverses[p])}let _=new si(d,f);l.bind(_,new Ie)}}function bw(r){let e=new Map;r.traverse(t=>{var n,i,s,o;if(!t.isMesh)return;let a=t,l=a.geometry,c=l.index;if(c==null)return;let u=e.get(l);if(u!=null){a.geometry=u;return}let h=Object.values(l.attributes)[0].count,d=new Array(h),f=0,m=c.array;for(let x=0;x<m.length;x++){let T=m[x];d[T]||(d[T]=!0,f++)}if(f===h)return;let _=[],g=[],p=0;for(let x=0;x<d.length;x++)if(d[x]){let T=p++;_[x]=T,g[T]=x}let M=new ct;M.name=l.name,M.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(x=>{M.addGroup(x.start,x.count,x.materialIndex)}),M.boundingBox=(i=(n=l.boundingBox)==null?void 0:n.clone())!=null?i:null,M.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,M.setDrawRange(l.drawRange.start,l.drawRange.count),M.userData=l.userData,e.set(l,M);{let x=c.array,T=new x.constructor(x.length);for(let E=0;E<x.length;E++){let w=x[E],P=_[w];T[E]=P}M.setIndex(new qe(T,1,!1))}Object.keys(l.attributes).forEach(x=>{let T=l.attributes[x];if(T.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let E=T.array,{itemSize:w,normalized:P}=T,v=new E.constructor(g.length*w);g.forEach((S,C)=>{for(let U=0;U<w;U++)v[C*w+U]=E[S*w+U]}),M.setAttribute(x,new qe(v,w,P))});let y=!0;for(let[x,T]of Object.entries(l.morphAttributes)){let E=x;M.morphAttributes[E]=[];for(let w=0;w<T.length;w++){let P=T[w];if(P.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let v=P.array,{itemSize:S,normalized:C}=P,U=new v.constructor(g.length*S);g.forEach((O,V)=>{for(let H=0;H<S;H++)U[V*S+H]=v[O*S+H]}),y=y&&U.every(O=>O===0),M.morphAttributes[E][w]=new qe(U,S,C)}}y&&(M.morphAttributes={}),a.geometry=M}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function ww(r){var e;((e=r.meta)==null?void 0:e.metaVersion)==="0"&&(r.scene.rotation.y=Math.PI)}var Ei=class{constructor(){}};Ei.combineMorphs=fw;Ei.combineSkeletons=pw;Ei.deepDispose=Tw;Ei.removeUnnecessaryJoints=Ew;Ei.removeUnnecessaryVertices=bw;Ei.rotateVRM0=ww;var du=new Ie,Aw=new I,i0=new we,r0=new we,Rw=new we;var s0=(r,e)=>{let t=[];for(let n=0;n<r.length;n+=e)t.push(Array.from(r.slice(n,n+e)));return t},bf=class{constructor(){this.duration=0,this.restHipsPosition=new I,this.translationTracks=new Map,this.rotationTracks=new Map,this.expressionTracks=new Map,this.lookAtTrack=null}createAnimationClip(e){let t=[],n=e.humanoid,i=e.meta.metaVersion==="0";for(let[s,o]of this.rotationTracks){let a=n.getNormalizedBoneNode(s)?.name;if(!a)continue;let l=Array.from(o.values,(c,u)=>i&&u%2===0?-c:c);t.push(new Wn(`${a}.quaternion`,Array.from(o.times),l))}for(let[s,o]of this.translationTracks){let a=n.getNormalizedBoneNode(s)?.name;if(!a)continue;let l=n.normalizedRestPose.hips?.position?.[1]||1,c=this.restHipsPosition.y?l/this.restHipsPosition.y:1,u=o.clone(),h=n.normalizedRestPose.hips?.position||[0,l,0];u.values=u.values.map((d,f)=>{let m=f%3;return s==="hips"&&m!==1?h[m]:(i&&m!==1?-d:d)*c}),u.name=`${a}.position`,t.push(u)}if(e.expressionManager)for(let[s,o]of this.expressionTracks){let a=e.expressionManager.getExpressionTrackName(s);if(!a)continue;let l=o.clone();l.name=a,t.push(l)}if(e.lookAt&&this.lookAtTrack){let s=this.lookAtTrack.clone();s.name="lookAtTargetParent.quaternion",t.push(s)}return new zi("VRMAnimation",this.duration,t)}},wf=class{constructor(e){this.parser=e}get name(){return"VRMC_vrm_animation"}async afterRoot(e){let t=e.parser.json;if(!t.extensionsUsed?.includes(this.name))return;let n=t.extensions?.[this.name];if(!n)return;let i=this.createNodeMap(n),s=await this.createWorldMatrixMap(e,n),o=n.humanoid.humanBones.hips.node,l=(await e.parser.getDependency("node",o)).getWorldPosition(new I);e.userData.vrmAnimations=e.animations.map((c,u)=>{let h=this.parseAnimation(c,t.animations[u],i,s);return h.restHipsPosition.copy(l),h})}createNodeMap(e){let t=new Map,n=new Map;return Object.entries(e.humanoid?.humanBones||{}).forEach(([i,s])=>{t.set(s.node,i)}),Object.entries(e.expressions?.preset||{}).forEach(([i,s])=>{n.set(s.node,i)}),Object.entries(e.expressions?.custom||{}).forEach(([i,s])=>{n.set(s.node,i)}),{humanoid:t,expressions:n,lookAt:e.lookAt?.node??null}}async createWorldMatrixMap(e,t){e.scene.updateWorldMatrix(!1,!0);let n=await e.parser.getDependencies("node"),i=new Map;return Object.entries(t.humanoid.humanBones).forEach(([s,o])=>{let a=n[o.node];i.set(s,a.matrixWorld),s==="hips"&&i.set("hipsParent",a.parent?.matrixWorld||du)}),i}parseAnimation(e,t,n,i){let s=new bf;return s.duration=e.duration,t.channels.forEach((o,a)=>{let l=o.target.node,c=o.target.path,u=e.tracks[a];if(l==null||!u)return;let h=n.humanoid.get(l);if(h){let f=uu[h];for(;f&&!i.has(f);)f=uu[f];if(f||(f="hipsParent"),c==="translation"){let m=i.get("hipsParent")||du,_=s0(u.values,3).flatMap(p=>Aw.fromArray(p).applyMatrix4(m).toArray()),g=u.clone();g.values=new Float32Array(_),s.translationTracks.set(h,g)}else if(c==="rotation"){let m=i.get(h)||du,_=i.get(f)||du;i0.setFromRotationMatrix(m).normalize().invert(),r0.setFromRotationMatrix(_).normalize();let g=s0(u.values,4).flatMap(M=>Rw.fromArray(M).premultiply(r0).multiply(i0).toArray()),p=u.clone();p.values=new Float32Array(g),s.rotationTracks.set(h,p)}return}let d=n.expressions.get(l);if(d&&c==="translation"){let f=new Float32Array(u.values.length/3);for(let m=0;m<f.length;m+=1)f[m]=u.values[m*3];s.expressionTracks.set(d,new Gn(`${d}.weight`,u.times,f));return}l===n.lookAt&&c==="rotation"&&(s.lookAtTrack=u)}),s}},o0=new co;o0.register(r=>new wf(r));async function Af(r){return(await o0.loadAsync(r)).userData.vrmAnimations?.[0]||null}var Cw=.5,Pw=.05,a0=5,l0=new I,c0=new we,u0=new Xt,Rf=class extends hu{constructor(e,t){super(e,t),this.smoothFactor=4,this.userLimitAngle=90,this.userTarget=null,this.enableSaccade=!0,this.saccadeYaw=0,this.saccadePitch=0,this.saccadeTimer=0,this.yawDamped=0,this.pitchDamped=0,this.tempHeadRotation=new we}reset(){super.reset(),this.yawDamped=0,this.pitchDamped=0,this.saccadeYaw=0,this.saccadePitch=0,this.saccadeTimer=0,this.userTarget=null}update(e){if(this.target&&this.autoUpdate){this.lookAt(this.target.getWorldPosition(l0));let t=this._yaw,n=this._pitch,i=t,s=n;if(this.userTarget){this.lookAt(this.userTarget.getWorldPosition(l0)),(this.userLimitAngle<Math.abs(this._yaw)||this.userLimitAngle<Math.abs(this._pitch))&&(this._yaw=t,this._pitch=n);let o=1-Math.exp(-this.smoothFactor*e);this.yawDamped+=(this._yaw-this.yawDamped)*o,this.pitchDamped+=(this._pitch-this.pitchDamped)*o;let a=1-je.smoothstep(Math.sqrt(t**2+n**2),30,90);i=je.lerp(t,.6*this.yawDamped,a),s=je.lerp(n,.6*this.pitchDamped,a),u0.set(-this.pitchDamped*je.DEG2RAD,this.yawDamped*je.DEG2RAD,0,hu.EULER_ORDER),c0.setFromEuler(u0);let l=this.humanoid.getRawBoneNode("head");l&&(this.tempHeadRotation.copy(l.quaternion),l.quaternion.slerp(c0,.4),l.updateMatrixWorld())}this.enableSaccade&&(this.saccadeTimer>Cw&&Math.random()<Pw&&(this.saccadeYaw=(2*Math.random()-1)*a0,this.saccadePitch=(2*Math.random()-1)*a0,this.saccadeTimer=0),this.saccadeTimer+=e,i+=this.saccadeYaw,s+=this.saccadePitch,this.applier.applyYawPitch(i,s)),this._needsUpdate=!1}this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}revertFirstPersonBoneQuat(){if(!this.userTarget)return;let e=this.humanoid.getNormalizedBoneNode("head");e&&e.quaternion.copy(this.tempHeadRotation)}},fu=class extends Sf{get name(){return"VRMLookAtSmootherLoaderPlugin"}async afterRoot(e){await super.afterRoot(e);let t=e.userData.vrmHumanoid,n=e.userData.vrmLookAt;if(t&&n){let i=new Rf(t,n.applier);i.copy(n),e.userData.vrmLookAt=i}}};var Iw=.12,Lw=5,Cf=class{constructor(e){this.expressionManager=e,this.remainingTime=0,this.isOpen=!0,this.isAutoBlink=!0}setEnable(e){return this.isAutoBlink=e,this.isOpen?0:this.remainingTime}update(e){if(this.remainingTime>0){this.remainingTime-=e;return}this.isOpen&&this.isAutoBlink?this.close():this.open()}close(){this.isOpen=!1,this.remainingTime=Iw,this.expressionManager.setValue("blink",1)}open(){this.isOpen=!0,this.remainingTime=Lw,this.expressionManager.setValue("blink",0)}},Pf=class{constructor(e,t){this.lookAtTarget=new rt,t.add(this.lookAtTarget),e.lookAt&&(e.lookAt.target=this.lookAtTarget)}dispose(){this.lookAtTarget.removeFromParent()}},If=class{constructor(e,t){this.autoLookAt=new Pf(e,t),this.expressionManager=e.expressionManager||null,this.autoBlink=this.expressionManager?new Cf(this.expressionManager):null,this.currentEmotion="neutral",this.currentLipSync=null,this.emotionTimer=0}playEmotion(e){if(this.currentEmotion!=="neutral"&&this.expressionManager?.setValue(this.currentEmotion,0),e==="neutral"){this.autoBlink?.setEnable(!0),this.currentEmotion=e;return}let t=this.autoBlink?.setEnable(!1)||0;this.currentEmotion=e,window.clearTimeout(this.emotionTimer),this.emotionTimer=window.setTimeout(()=>this.expressionManager?.setValue(e,1),t*1e3)}lipSync(e,t){this.currentLipSync&&this.expressionManager?.setValue(this.currentLipSync.preset,0),this.currentLipSync={preset:e,value:t}}update(e){if(this.autoBlink?.update(e),this.currentLipSync){let t=this.currentEmotion==="neutral"?this.currentLipSync.value*.5:this.currentLipSync.value*.25;this.expressionManager?.setValue(this.currentLipSync.preset,t)}}dispose(){window.clearTimeout(this.emotionTimer),this.autoLookAt.dispose()}},pu=class{constructor(e,t){this.expressionController=new If(e,t)}playEmotion(e){this.expressionController.playEmotion(e)}lipSync(e,t){this.expressionController.lipSync(e,t)}update(e){this.expressionController.update(e)}dispose(){this.expressionController.dispose()}};var Dw=["talk","happy","sad","angry","fear","surprised"],h0=["neutral","happy","angry","sad","relaxed"],za={speakerX:3,speakerY:3},d0={A:{speakerX:4.5,speakerY:10},B:{speakerX:3,speakerY:3},C:{speakerX:-5.5,speakerY:-3},D:{speakerX:3.5,speakerY:-8}},mu=class{constructor(e){this.audio=e,this.analyser=e.createAnalyser(),this.timeDomainData=new Float32Array(2048),this.playing=!1}update(){this.analyser.getFloatTimeDomainData(this.timeDomainData);let e=0;for(let t=0;t<2048;t+=1)e=Math.max(e,Math.abs(this.timeDomainData[t]));return e=1/(1+Math.exp(-45*e+5)),e<.1&&(e=0),{volume:e}}async playFromArrayBuffer(e,t){this.audio.state==="suspended"&&await this.audio.resume();let n=await this.audio.decodeAudioData(e.slice(0)),i=this.audio.createBufferSource();return i.buffer=n,i.connect(this.audio.destination),i.connect(this.analyser),this.playing=!0,new Promise(s=>{i.addEventListener("ended",()=>{this.playing=!1,t?.(),s()},{once:!0}),i.start()})}async playFromURL(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`Audio unavailable: ${n.status}`);return this.playFromArrayBuffer(await n.arrayBuffer(),t)}close(){return this.audio.close()}},gu=r=>String(r).split(/(?<=[。．！？\n])/g).filter(Boolean),Nw=r=>r==="angry"||r==="happy"||r==="sad"?r:"talk",_u=(r,e=za)=>{let t="neutral";return r.map(n=>{let s=n.match(/\[(.*?)\]/)?.[1]||t,o=n.replace(/\[(.*?)\]/g,"");return h0.includes(s)&&(t=s),{expression:t,talk:{style:Nw(t),speakerX:e.speakerX,speakerY:e.speakerY,message:o}}})},Lf=r=>["talk","happy","sad"].includes(r)?r:"talk";async function Df(r,e,t,n){let i=await fetch("https://router.huggingface.co/fal-ai/fal-ai/kokoro/american-english",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,speaker_x:e,speaker_y:t,style:n})});if(!i.ok)throw new Error(`Voice synthesis failed: ${i.status}`);return{audio:(await i.json()).audio}}async function f0(r,e,t,n,i){let s=await fetch("https://router.huggingface.co/fal-ai/fal-ai/kokoro/american-english",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({text:r,speaker_x:e,speaker_y:t,style:n,output_format:"mp3"})});if(!s.ok)throw new Error(`Voice synthesis failed: ${s.status}`);return{audio:(await s.json()).audio}}async function p0(r,e,t,n){return Df(r,e,t,n)}async function Nf(r,e,t,n,i){let s=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r,speakerX:e,speakerY:t,style:Lf(n),apiKey:i})});if(!s.ok)throw new Error(`TTS endpoint unavailable: ${s.status}`);return{audio:(await s.json()).audio.url}}async function Uf(r,e){let t=await Nf(r.message,r.speakerX,r.speakerY,r.style,e);if(!t.audio)throw new Error("Voice synthesis returned no audio");let n=await fetch(t.audio);if(!n.ok)throw new Error(`Audio unavailable: ${n.status}`);return n.arrayBuffer()}function Uw(){let r=0,e=Promise.resolve(),t=Promise.resolve();return(n,i,s,o,a)=>{let l=e.then(async()=>{let c=Date.now()-r;c<1e3&&await new Promise(h=>setTimeout(h,1e3-c));let u=await Uf(n.talk,s).catch(()=>null);return r=Date.now(),u});return e=l,t=Promise.all([l,t]).then(([c])=>(o?.(),c?i.speak(c,n):void 0)),t.then(()=>a?.()),t}}var Of=Uw(),m0=Object.freeze([...Dw]),g0=Object.freeze([...h0]);function _0(r,e,t,n){let i=r.querySelector("[data-about-canvas]"),s=i?.closest(".about-avatar"),o=r.querySelector("[data-about-loader]"),a=r.dataset.modelUrl,l={idle:r.dataset.idleUrl,greeting:r.dataset.greetingUrl,reload:r.dataset.reloadUrl},c={};try{c=JSON.parse(r.dataset.actionUrls||"{}")}catch{c={}}if(!i||!s||!a)return;let u=window.MinosAvatarAssets,h=u?.renderer||new Jc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});h.domElement!==i&&(i.replaceWith(h.domElement),i=h.domElement),u&&(u.renderer=h),h.setClearColor(0,0),h.outputColorSpace=It;let d=new oa,f=1.8,m=new Ut(20,1,.1,20);m.name="lookAtTargetParent",m.position.set(0,1.3,f),d.add(m);let _=new Wr(16777215,Math.PI*.6);_.position.set(1,1,1).normalize(),d.add(_),d.add(new ya(16777215,Math.PI*.4));let g=new rt,p=new I(0,0,-2.5),M=new Ea,y=new Xe;g.position.copy(p),m.add(g);let x=new Sa,T=new I,E=new I,w=new Map,P=[null,{filename:"VRMA_01.vrma",start:.8,time:1.4},{filename:"VRMA_03.vrma",start:.35,time:1.4},{filename:"VRMA_06.vrma",start:1.35,time:2.2},{filename:"VRMA_06.vrma",start:3.3,time:4.05},{filename:"VRMA_07.vrma",start:5.3,time:6.1},{filename:"VRMA_04.vrma",start:.85,time:1.4}],v=null,S=null,C={},U=null,O=null,V=null,H=null,D=0,Q=0,G=Number(r.dataset.aboutSectionIndex)||0,W=null,ee=null,se=0,xe=!0,ye=!1,Le=!0,Ye=6,q=!1,te=0,fe=.06,De=-.04,me=0,Ve="",ft=!1,N=(A,F)=>u?u.parse(A,F):F(A),nt=window.MinosRouter?.whenRevealed?.()||Promise.resolve(),Fe=Promise.resolve(nt).then(()=>new Promise(A=>{requestAnimationFrame(()=>requestAnimationFrame(A))}));u?.preload();let Ne=()=>{s.classList.remove("is-ready"),o?.classList.remove("is-hidden")},de=()=>{let A=s.getBoundingClientRect();!A.width||!A.height||(h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),h.setSize(A.width,A.height,!1),m.aspect=A.width/A.height,m.position.z=f,m.position.x=te+fe,m.updateProjectionMatrix())},ot=()=>{if(!v?.humanoid){te=0;return}v.scene.updateMatrixWorld(!0);let F=v.humanoid.getNormalizedBoneNode("head")?.getWorldPosition(new I),X=v.scene.getWorldPosition(new I);te=F?.x??X.x,F&&(m.position.y=F.y+De),de()},Se=A=>{if(!v?.humanoid)return;let F=v.humanoid.getNormalizedBoneNode("head");if(!F)return;F.getWorldPosition(E);let X=1-Math.exp(-A*10);te=E.x;let re=te+fe;m.position.x+=(re-m.position.x)*X,m.position.y+=(E.y+De-m.position.y)*X},He=()=>{if(ye||!xe){se=0;return}se=requestAnimationFrame(He);let A=Math.min(x.getDelta(),.05);g.position.lerp(p,1-Math.exp(-A*Ye)),ee?.playing&&W?.lipSync("aa",ee.update().volume),W?.update(A),S?.update(A),H&&H.time>=D&&H.getEffectiveTimeScale()!==0&&(H.time=D,H.setEffectiveTimeScale(0),S.update(0)),v?.update(A),Se(A),h.render(d,m)},ht=()=>{!se&&!ye&&(x.start(),se=requestAnimationFrame(He))},it=()=>{se&&cancelAnimationFrame(se),se=0,x.stop()},L=()=>{S?.stopAllAction(),W?.dispose(),v&&(d.remove(v.scene),ft?(v.humanoid?.resetNormalizedPose(),v.expressionManager?.resetValues(),v.lookAt&&(v.lookAt.target=null,v.lookAt.reset()),v.update(0),v.springBoneManager?.reset()):Ei.deepDispose(v.scene)),ft=!1,v=null,S=null,C={},U=null,O=null,V=null,H=null,w.clear(),W=null},b=(A,F)=>{if(A){if(!F){A.stop();return}A.fadeOut(F),n(()=>A.stop(),F*1e3+50)}},z=A=>{if(!O)return;V&&S?.removeEventListener("finished",V);let F=O;O=null,V=null,b(F,A)},K=A=>{U&&(U.reset().setEffectiveWeight(1).play(),A&&U.fadeIn(A))},ne=A=>{let F=c[A];return F?N(F,Af):Promise.resolve(null)},J=()=>{let A=t?0:.45;Q+=1,z(A);let F=H;H=null,b(F,A),K(A),Le=!0,p.set(0,0,-2.5)},Ee=async A=>{G=Math.max(0,Math.min(P.length-1,Number(A)||0));let F=P[G];if(!F)return J(),!0;if(!v||!S)return!1;let X=++Q,re=v;try{let j=await ne(F.filename);if(!j||ye||X!==Q||re!==v)return!1;let Z=w.get(F);Z||(Z=j.createAnimationClip(v),w.set(F,Z));let le=t?0:.45;z(le);let pe=H,Ae=S.clipAction(Z);return pe&&pe!==Ae&&b(pe,le),U?.fadeOut(le),Ae.reset(),Ae.enabled=!0,Ae.setLoop(Ia,1),Ae.clampWhenFinished=!0,D=Math.min(F.time,Math.max(0,Z.duration-.001)),Ae.time=t?D:Math.min(F.start,D),Ae.setEffectiveWeight(1).setEffectiveTimeScale(t?0:1).play(),le&&Ae.fadeIn(le),H=Ae,Le=!0,p.set(0,0,-2.5),!0}catch(j){return console.warn(`About pose unavailable: ${F.filename}`,j),!1}},ie=A=>{if(!A||!S||!v||O)return!1;Le=!1,p.set(0,0,-2.5);let F=H;H=null,b(F,.3),U?.fadeOut(.3);let X=S.clipAction(A);O=X,X.setLoop(Ia,1),X.clampWhenFinished=!0,X.reset().setEffectiveTimeScale(1).fadeIn(.3).play();let re=j=>{j.action===X&&(S.removeEventListener("finished",re),X.fadeOut(.3),v.scene.position.copy(T),Le=!0,V=null,O===X&&(O=null),G===0?K(.3):Ee(G),n(()=>{X.stop()},300))};return V=re,S.addEventListener("finished",re),!0},Te=async A=>{if(!c[A]||O||!v)return!1;try{let F=await ne(A);return F&&!ye?ie(F.createAnimationClip(v)):!1}catch(F){return console.warn(`About motion unavailable: ${A}`,F),!1}},ge=()=>{if(ee)return ee;let A=window.AudioContext||window.webkitAudioContext;if(!A)throw new Error("Web Audio is unavailable");return ee=new mu(new A),ee},ae=Fe.then(()=>Promise.allSettled(Object.entries(l).map(async([A,F])=>[A,F&&!ye?await N(F,Af):null]))).then(A=>Object.fromEntries(A.map((F,X)=>F.status==="fulfilled"?F.value:[Object.keys(l)[X],null]))),he=()=>{let A=new co;return A.register(F=>new t0(F,{lookAtPlugin:new fu(F)})),A};async function Ce(A,F={}){let X=++me;Ne(),L();let re=A===a&&!!u,j=async Z=>{let pe=(await he().loadAsync(Z)).userData.vrm;if(!pe)throw new Error("No VRM model found");return Ei.rotateVRM0(pe),pe.scene.name="VRMRoot",pe.scene.traverse(Ae=>{Ae.frustumCulled=!1}),{model:pe,position:pe.scene.position.clone(),quaternion:pe.scene.quaternion.clone(),scale:pe.scene.scale.clone()}};try{let Z=await(re?N(A,j):j(A));if(ye||X!==me)return re||Ei.deepDispose(Z.model.scene),!1;v=Z.model,ft=re,v.scene.position.copy(Z.position),v.scene.quaternion.copy(Z.quaternion),v.scene.scale.copy(Z.scale),T.copy(v.scene.position),d.add(v.scene),S=new Ta(v.scene),W=new pu(v,m),v.lookAt&&(v.lookAt.target=g),ot();let le=await ae;return ye||X!==me?!1:(C=Object.fromEntries(Object.entries(le).map(([pe,Ae])=>[pe,Ae?.createAnimationClip(v)||null])),C.idle&&(U=S.clipAction(C.idle),U.setLoop(Wc,1/0).play()),s.classList.add("is-ready"),n(()=>o?.classList.add("is-hidden"),250),n(()=>{Promise.allSettled(Object.keys(c).map(ne))},500),G===0?F.greeting&&C.greeting&&!t&&n(()=>{G===0&&ie(C.greeting)},1e3):Ee(G),F.objectUrl&&(Ve&&URL.revokeObjectURL(Ve),Ve=F.objectUrl),!0)}catch(Z){throw console.warn("About avatar unavailable.",Z),Z}}let Me={get model(){return v},get actions(){return Object.keys(c)},playAnimation:Te,playGreeting:()=>ie(C.greeting),playReload:()=>ie(C.reload),playEmotion:A=>W?.playEmotion(A),resetPosition:()=>v?.scene.position.copy(T),setLookAtEnabled:A=>{Le=!!A,Le||p.set(0,0,-2.5)},setLookAtSpeed:A=>{Ye=Math.max(.1,Number(A)||.1)},lookAt:A=>{!Le||!A||p.set(A.x||0,A.y||0,A.z??-2.5)},lookAtCamera:()=>p.set(0,0,-2.5),createScreenplay:(A,F=za)=>_u(gu(A),F),voice:{defaultParam:za,presets:d0,talkStyles:m0,emotions:g0,splitSentence:gu,textsToScreenplay:_u,reduceTalkStyle:Lf,synthesizeVoice:p0,synthesizeVoiceApi:Nf,koeiromapV0:Df,koeiromapFreeV1:f0,fetchAudio:Uf,speakCharacter:Of},speak:async(A,F={expression:"neutral"})=>{v&&(W?.playEmotion(F.expression||"neutral"),await ge().playFromArrayBuffer(A))},speakFromURL:async(A,F={expression:"neutral"})=>{v&&(W?.playEmotion(F.expression||"neutral"),await ge().playFromURL(A))},speakText:(A,F,X=za)=>{let re=_u(gu(A),X);return Promise.all(re.map(j=>Of(j,Me,F)))},loadModel:A=>Ce(A,{greeting:!1}),unloadModel:L};r.aboutCharacter=Me;let oe=new IntersectionObserver(A=>{xe=A.some(F=>F.isIntersecting),xe&&!document.hidden?ht():it()},{threshold:.01});oe.observe(r),e.listen(window,"resize",de,{passive:!0}),e.listen(document,"visibilitychange",()=>{document.hidden?it():xe&&ht()}),e.listen(i,"pointerenter",()=>{q=!0}),e.listen(i,"pointermove",A=>{if(!Le)return;let F=i.getBoundingClientRect(),X=(A.clientX-F.left)/F.width*2-1,re=-((A.clientY-F.top)/F.height*2-1);p.set(X*.72,re*.5,-2.35)}),e.listen(i,"pointerleave",()=>{q=!1,p.set(0,0,-2.5)}),e.listen(i,"click",A=>{if(!v||O||!C.reload)return;let F=i.getBoundingClientRect();y.set((A.clientX-F.left)/F.width*2-1,-((A.clientY-F.top)/F.height*2-1)),M.setFromCamera(y,m),M.intersectObject(v.scene,!0).length&&ie(C.reload)}),e.listen(i,"dragover",A=>A.preventDefault()),e.listen(i,"drop",A=>{A.preventDefault();let F=A.dataTransfer?.files?.[0];if(!F||F.name.split(".").pop()?.toLowerCase()!=="vrm")return;let X=URL.createObjectURL(new Blob([F],{type:"application/octet-stream"}));Ce(X,{greeting:!1,objectUrl:X}).catch(()=>URL.revokeObjectURL(X))}),e.listen(r,"about:reply",()=>{O||(W?.playEmotion("happy"),n(()=>W?.playEmotion("neutral"),1100))}),e.listen(r,"about:motion",A=>{A.detail?.filename&&Te(A.detail.filename)}),e.listen(r,"about:sectionchange",A=>{Ee(A.detail?.index)}),e.listen(r,"about:emotion",A=>{A.detail?.expression&&W?.playEmotion(A.detail.expression)}),e.listen(r,"about:speak",A=>{let F=A.detail||{};F.buffer?Me.speak(F.buffer,F.screenplay):F.url&&Me.speakFromURL(F.url,F.screenplay)});let ve=()=>{n(()=>{!ye&&Le&&!q&&!O&&(p.set((Math.random()-.5)*.55,(Math.random()-.5)*.28,-2.5),n(()=>{!q&&!O&&p.set(0,0,-2.5)},1800+Math.random()*1700)),ye||ve()},3500+Math.random()*3500)};de(),ht(),ve(),Fe.then(()=>ye?!1:Ce(a,{greeting:!0})).catch(()=>{}),e.cleanup(()=>{ye=!0,me+=1,it(),oe.disconnect(),L(),Ve&&URL.revokeObjectURL(Ve),ee?.close().catch(()=>{}),r.aboutCharacter===Me&&delete r.aboutCharacter,u?h.renderLists.dispose():h.dispose()})}function Yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function b0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vo={duration:.5,overwrite:!1,delay:0},Ai=1e8,dt=1/Ai,Gf=Math.PI*2,Ow=Gf/4,Fw=0,w0=Math.sqrt,Bw=Math.cos,kw=Math.sin,jt=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},bu=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},yn=function(e){return e!==!1},A0=function(){return typeof window<"u"},x0=function(e){return qt(e)||jt(e)},R0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zn=Array.isArray,Wf=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ff=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,Jf=/[+-]=-?[\.\d]+/,C0=/[#\-+.]*\b[a-z\d-=+%.]+/gi,Ft,bi,Xf,P0,Un={},yu={},I0,L0=function(e){return(yu=yo(e,Un))&&jn},wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},D0=function(e,t){return!t&&console.warn(e)},N0=function(e,t){return e&&(Un[e]=t)&&yu&&(yu[e]=t)||Un},Za=function(){return 0},Kf={},_r=[],qf={},U0,vn={},Bf={},v0=30,xu=[],Qf="",ep=function(e){var t=e[0],n,i;if($i(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xu.length;i--&&!xu[i].targetTest(t););n=xu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sp(e[i],n)))||e.splice(i,1);return e},xr=function(e){return e._gsap||ep(wi(e))[0]._gsap},tp=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():bu(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},Vw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Xa=function(e,t,n){var i=li(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o;n&&!("immediateRender"in a);)a=n.vars.defaults||{},n=yn(n.vars.inherit)&&n.parent;o.immediateRender=yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return o},Mu=function(){var e=_r.length,t=_r.slice(0),n,i;for(qf={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},O0=function(e,t,n,i){_r.length&&Mu(),e.render(t,n,i),_r.length&&Mu()},F0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(C0).length<2?t:jt(e)?e.trim():e},B0=function(e){return e},$n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hw=function(e,t){for(var n in t)n in e||n==="duration"||n==="ease"||(e[n]=t[n])},yo=function(e,t){for(var n in t)e[n]=t[n];return e},y0=function r(e,t){for(var n in t)e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n];return e},Yf=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vu=function(e){var t=e.parent||Ft,n=e.keyframes?Hw:$n;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Gw=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Au=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ww=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xw=function r(e){return!e||e._ts&&r(e.parent)},M0=function(e){return e._repeat?Mo(e._tTime,e=e.duration()+e._rDelay)*e:0},Mo=function(e,t){return(e/=t)&&~~e===e?~~e-1:~~e},Su=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},np=function(e){return e._end=et(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},k0=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=et(e._dp._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),np(e),n._dirty||rs(n,e)),e},ip=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Su(e.rawTime(),t),(!t._dur||$a(0,t.totalDuration(),n)-t._tTime>dt)&&t.render(n,!0)),rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-dt}},Zi=function(e,t,n,i){return t.parent&&vr(t),t._start=et(n+t._delay),t._end=et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gw(e,t,"_first","_last",e._sort?"_start":0),e._recent=t,i||ip(e,t),e},V0=function(e,t){return(Un.ScrollTrigger||wu("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},H0=function(e,t,n,i){if(dA(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&U0!==Ln.frame)return _r.push(e),e._lazy=[t,i],1},qw=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&s&&!e._start&&e._zTime>dt&&!e._dp._lock||(e._ts<0||e._dp._ts<0)&&e.data!=="isFromStart"&&e.data!=="isStart"?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=$a(0,e._tDur,t),u=Mo(l,a),h=Mo(e._tTime,a),u!==h&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||i||e._zTime===dt||!t&&e._zTime){if(!e._initted&&H0(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?dt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,n||Dn(e,"onStart"),c=e._pt;c;)c.r(o,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&vr(e,1),n||(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(!i._dur&&i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(!i._dur&&i.data==="isPause"&&i._start<t)return i;i=i._prev}},So=function(e,t,n,i){var s=e._repeat,o=et(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:et(o*(s+1)+e._rDelay*s):o,a&&!i?k0(e,e._tTime=e._tDur*a):e.parent&&np(e),n||rs(e.parent,e),e},S0=function(e){return e instanceof nn?rs(e):So(e,e._dur)},Zw={_start:0,endTime:Za},un=function r(e,t){var n=e.labels,i=e._recent||Zw,s=e.duration()>=Ai?i.endTime(!1):e._dur,o,a;return jt(t)&&(isNaN(t)||t in n)?(o=t.charAt(0),o==="<"||o===">"?(o==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0):(o=t.indexOf("="),o<0?(t in n||(n[t]=s),n[t]):(a=+(t.charAt(o-1)+t.substr(o+1)),o>1?r(e,t.substr(0,o-1))+a:s+a))):t==null?s:+t},yr=function(e,t){return e||e===0?t(e):t},$a=function(e,t,n){return n<e?e:n>t?t:n},ci=function(e){return(e=(e+"").substr((parseFloat(e)+"").length))&&isNaN(e)?e:""},$w=function(e,t,n){return yr(n,function(i){return $a(e,t,i)})},Zf=[].slice,z0=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==bi},jw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||z0(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t){return jt(e)&&!t&&(Xf||!To())?Zf.call(P0.querySelectorAll(e),0):Zn(e)?jw(e,t):z0(e)?Zf.call(e,0):e?[e]:[]},G0=function(e){return e.sort(function(){return .5-Math.random()})},W0=function(e){if(qt(e))return e;var t=$i(e)?e:{each:e},n=xo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,g=o[_],p,M,y,x,T,E,w,P,v;if(!g){if(v=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!v){for(w=-Ai;w<(w=m[v++].getBoundingClientRect().left)&&v<_;);v--}for(g=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,M=l?_*h/v-.5:i/v|0,w=0,P=Ai,E=0;E<_;E++)y=E%v-p,x=M-(E/v|0),g[E]=T=c?Math.abs(c==="y"?x:y):w0(y*y+x*x),T>w&&(w=T),T<P&&(P=T);i==="random"&&G0(g),g.max=w-P,g.min=P,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=ci(t.amount||t.each)||0,n=n&&_<0?J0(n):n}return _=(g[d]-g.min)/g.max||0,et(g.b+(n?n(_):_)*g.v)+g.u}},$f=function(e){var t=e<1?Math.pow(10,(e+"").length-2):1;return function(n){return Math.floor(Math.round(parseFloat(n)/e)*e*t)/t+(li(n)?0:ci(n))}},X0=function(e,t){var n=Zn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||Ai,e.values?(e=wi(e.values),(s=!li(e[0]))&&(i*=i)):e=$f(e.increment)),yr(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ai,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||li(o)?u:u+ci(o)}:$f(e))},q0=function(e,t,n,i){return yr(Zn(e)?!t:n===!0?!!(n=0):!i,function(){return Zn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e+Math.random()*(t-e))/n)*n*i)/i})},Jw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Kw=function(e,t){return function(n){return e(parseFloat(n))+(t||ci(n))}},Qw=function(e,t,n){return Z0(e,t,0,1,n)},Y0=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},eA=function r(e,t,n){var i=t-e;return Zn(e)?Y0(e,r(0,e.length),t):yr(n,function(s){return(i+(s-e)%i)%i+e})},tA=function r(e,t,n){var i=t-e,s=i*2;return Zn(e)?Y0(e,r(0,e.length-1),t):yr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ja=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?C0:Wf),n+=e.substr(t,i-t)+q0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Z0=function(e,t,n,i,s){var o=t-e,a=i-n;return yr(s,function(l){return n+((l-e)/o*a||0)})},nA=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=jt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Zn(e)&&!Zn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=yo(Zn(e)?[]:{},e));if(!u){for(l in t)op.call(a,e,l,"get",t[l]);s=function(m){return up(m,a)||(o?e.p:e)}}}return yr(n,s)},T0=function(e,t,n){var i=e.labels,s=Ai,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Dn=function(e,t,n){var i=e.vars,s=i[t],o,a;if(s)return o=i[t+"Params"],a=i.callbackScope||e,n&&_r.length&&Mu(),o?s.apply(a,o):s.call(a)},Ga=function(e){return vr(e),e.progress()<1&&Dn(e,"onInterrupt"),e},go,iA=function(e){e=!e.name&&e.default||e;var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Za,render:up,add:op,kill:vA,modifier:xA,rawVars:0},o={targetTest:0,get:0,getSetter:Ru,aliases:{},register:0};if(To(),e!==i){if(vn[t])return;$n(i,$n(Yf(e,s),o)),yo(i.prototype,yo(s,Yf(e,o))),vn[i.prop=t]=i,e.targetTest&&(xu.push(i),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}N0(t,i),e.register&&e.register(jn,i,hn)},Tt=255,Wa={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},kf=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},$0=function(e,t,n){var i=e?li(e)?[e>>16,e>>8&Tt,e&Tt]:0:Wa.black,s,o,a,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wa[e])i=Wa[e];else if(e.charAt(0)==="#")e.length===4&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a),e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt];else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Wf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=kf(l+1/3,s,o),i[1]=kf(l,s,o),i[2]=kf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(jf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wf)||Wa.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Tt,o=i[1]/Tt,a=i[2]/Tt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},j0=function(e){var t=[],n=[],i=-1;return e.split(_o).forEach(function(s){var o=s.match(ss)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},E0=function(e,t,n){var i="",s=(e+i).match(_o),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=$0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=j0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_o,"1").split(ss),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_o),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},_o=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",e;for(e in Wa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),rA=/hsl[a]?\(/,rp=function(e){var t=e.join(" "),n;if(_o.lastIndex=0,_o.test(t))return n=rA.test(t),e[1]=E0(e[1],n),e[0]=E0(e[0],n,j0(e[1])),!0},Tu,Ln=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,m=function _(g){var p=r()-i,M=g===!0,y,x,T,E;if(p>e&&(n+=p-t),i+=p,T=i-n,y=T-o,(y>0||M)&&(E=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,o+=y+(y>=s?4:s-y),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](T,d,E,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){I0&&(!Xf&&A0()&&(bi=Xf=window,P0=bi.document||{},Un.gsap=jn,(bi.gsapVersions||(bi.gsapVersions=[])).push(jn.version),L0(yu||bi.GreenSockGlobals||!bi.gsap&&bi||{}),u=bi.requestAnimationFrame),l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Tu=1,m(2))},sleep:function(){(u?bi.cancelAnimationFrame:clearTimeout)(l),Tu=0,c=Za},lagSmoothing:function(g,p){e=g||1/dt,t=Math.min(p,e,0)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g){a.indexOf(g)<0&&a.push(g),To()},remove:function(g){var p;~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),To=function(){return!Tu&&Ln.wake()},st={},sA=/^[\d.\-M][\d.\-,\s]/,oA=/["']/g,aA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(oA,"").trim():+c,i=l.substr(a+1).trim();return t},lA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cA=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aA(t[1])]:lA(e).split(",").map(F0)):st._CE&&sA.test(e)?st._CE("",e):n},J0=function(e){return function(t){return 1-e(1-t)}},K0=function r(e,t){for(var n=e._first,i;n;)n instanceof nn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},xo=function(e,t){return e&&(qt(e)?e:st[e]||cA(e))||t},os=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Mn(e,function(a){st[a]=Un[a]=s,st[o=a.toLowerCase()]=n;for(var l in s)st[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[a+"."+l]=s[l]}),s},Q0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*kw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Q0(a);return s=Gf/s,l.config=function(c,u){return r(e,c,u)},l},Hf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Q0(n);return i.config=function(s){return r(e,s)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;os(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;os("Elastic",Vf("in"),Vf("out"),Vf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);os("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});os("Circ",function(r){return-(w0(1-r*r)-1)});os("Sine",function(r){return r===1?1:-Bw(r*Ow)+1});os("Back",Hf("in"),Hf("out"),Hf());st.SteppedEase=st.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-dt;return function(a){return((i*$a(0,o,a)|0)+s)*n}}};vo.ease=st["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qf+=r+","+r+"Params,"});var sp=function(e,t){this.id=Fw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tp,this.set=t?t.getSetter:Ru},Ya=(function(){function r(t,n){var i=t.parent||Ft;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,So(this,+t.duration,1,1),this.data=t.data,Tu||Ln.wake(),i&&Zi(i,this,n||n===0?n:i._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(k0(this,n);s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===dt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),O0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+M0(this))%this._dur||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+M0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Su(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-dt?0:this._rts,Ww(this.totalTime($a(-this._delay,this._tDur,i),!0))},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&(this._tTime-=dt)&&Math.abs(this._zTime)!==dt))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Su(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},e.repeat=function(n){return arguments.length?(this._repeat=n,S0(this)):this._repeat},e.repeatDelay=function(n){return arguments.length?(this._rDelay=n,S0(this)):this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=0,this._zTime=-dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-dt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=qt(n)?n:B0,a=function(){var c=i.then;i.then=null,qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ga(this)},r})();$n(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var nn=(function(r){b0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n,i)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),s.parent&&ip(s.parent,Yi(s)),n.scrollTrigger&&V0(Yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return new Lt(i,Xa(arguments,0,this),un(this,li(s)?arguments[3]:o)),this},t.from=function(i,s,o){return new Lt(i,Xa(arguments,1,this),un(this,li(s)?arguments[3]:o)),this},t.fromTo=function(i,s,o,a){return new Lt(i,Xa(arguments,2,this),un(this,li(s)?arguments[4]:a)),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,vu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(i,s,un(this,o),1),this},t.call=function(i,s,o){return Zi(this,Lt.delayedCall(0,i,s),un(this,o))},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Lt(i,o,un(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,vu(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,vu(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=this!==Ft&&i>l-dt&&i>=0?l:i<dt?0:i,h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,g,p,M,y,x,T,E,w;if(u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat&&(E=this._yoyo,g=c+this._rDelay,d=et(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===u/g&&(d=c,_--),d>c&&(d=c)),T=Mo(this._tTime,g),!a&&this._tTime&&T!==_&&(T=_),E&&_&1&&(d=c-d,w=1),_!==T&&!this._lock)){var P=E&&T&1,v=P===(E&&_&1);if(_<T&&(P=!P),a=P?0:c,this._lock=1,this.render(a||(w?0:et(_*g)),s,!c)._lock=0,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a!==this._time||p!==!this._ts)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;K0(this,w)}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Yw(this,et(a),et(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i),!a&&d&&!s&&Dn(this,"onStart"),d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,m&&(u+=this._zTime=-dt);break}}f=m}else{f=this._last;for(var S=i<0?i:d;f;){if(m=f._prev,(f._act||S<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,m&&(u+=this._zTime=S?-dt:dt);break}}f=m}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-dt)._zTime=d>=a?1:-1,this._ts))return this._start=x,np(this),this.render(i,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(u||a)&&(Dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(li(s)||(s=un(this,s)),!(i instanceof Ya)){if(Zn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(qt(i))i=Lt.delayedCall(0,i);else return this}return this!==i?Zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Lt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(Au(this,i),i===this._recent&&(this._recent=this._last),rs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=et(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=un(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Lt.delayedCall(0,s||Za,o);return a.data="isPause",this._hasPause=1,Zi(this,a,un(this,i))},t.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)gr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=wi(i),l=this._first,c=li(s),u;l;)l instanceof Lt?Vw(l._targets,a)&&(c?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=un(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=Lt.to(o,$n(s,{ease:"none",lazy:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||dt,onStart:function(){o.pause();var m=s.duration||Math.abs((a-o._time)/o.timeScale());d._dur!==m&&So(d,m,0,1).render(d._time,!0,!0),u&&u.apply(d,h||[])}}));return d},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,$n({startAt:{time:un(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),T0(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),T0(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return rs(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return r.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._time=this._tTime=this._pTime=0,i&&(this.labels={}),rs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ai,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;So(o,o===Ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(O0(Ft,Su(i,Ft)),U0=Ln.frame),Ln.frame>=v0){v0+=Nn.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Nn.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e})(Ya);$n(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uA=function(e,t,n,i,s,o,a){var l=new hn(this._pt,e,t,0,1,cp,null,s),c=0,u=0,h,d,f,m,_,g,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ja(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(Ff)||[];h=Ff.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?parseFloat(m.substr(2))*(m.charAt(0)==="-"?-1:1):parseFloat(m)-g,m:f&&f<4?Math.round:0},c=Ff.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Jf.test(i)||p)&&(l.e=0),this._pt=l,l},op=function(e,t,n,i,s,o,a,l,c){qt(i)&&(i=i(s||0,e,o));var u=e[t],h=n!=="get"?n:qt(u)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=qt(u)?c?mA:tx:lp,f;if(jt(i)&&(~i.indexOf("random(")&&(i=ja(i)),i.charAt(1)==="="&&(i=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(ci(h)||0))),h!==i)return isNaN(h*i)?(!u&&!(t in e)&&wu(t,i),uA.call(this,e,t,h,i,d,l||Nn.stringFilter,c)):(f=new hn(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?_A:nx,0,d),c&&(f.fp=c),a&&f.modifier(a,this,e),this._pt=f)},hA=function(e,t,n,i,s){if(qt(e)&&(e=qa(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Zn(e)||R0(e))return jt(e)?qa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qa(e[a],s,t,n,i);return o},ap=function(e,t,n,i,s,o){var a,l,c,u;if(vn[e]&&(a=new vn[e]).init(s,a.rawVars?t[e]:hA(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==go))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},gr,dA=function r(e,t){var n=e.vars,i=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,m=n.autoRevert,_=e._dur,g=e._startAt,p=e._targets,M=e.parent,y=M&&M.data==="nested"?M.parent._targets:p,x=e._overwrite==="auto",T=e.timeline,E,w,P,v,S,C,U,O,V,H,D,Q,G;if(T&&(!f||!i)&&(i="none"),e._ease=xo(i,vo.ease),e._yEase=d?J0(xo(d===!0?i:d,vo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),!T){if(O=p[0]?xr(p[0]).harness:0,Q=O&&n[O.prop],E=Yf(n,Kf),g&&g.render(-1,!0).kill(),s){if(vr(e._startAt=Lt.set(p,$n({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:yn(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),o){if(t>0)m||(e._startAt=0);else if(_&&!(t<0&&g)){t&&(e._zTime=t);return}}}else if(h&&_){if(g)!m&&(e._startAt=0);else if(t&&(o=!1),P=$n({overwrite:!1,data:"isFromStart",lazy:o&&yn(a),immediateRender:o,stagger:0,parent:M},E),Q&&(P[O.prop]=Q),vr(e._startAt=Lt.set(p,P)),!o)r(e._startAt,dt);else if(!t)return}for(e._pt=0,a=_&&yn(a)||a&&!_,w=0;w<p.length;w++){if(S=p[w],U=S._gsap||ep(p)[w]._gsap,e._ptLookup[w]=H={},qf[U.id]&&_r.length&&Mu(),D=y===p?w:y.indexOf(S),O&&(V=new O).init(S,Q||E,e,D,y)!==!1&&(e._pt=v=new hn(e._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(W){H[W]=v}),V.priority&&(C=1)),!O||Q)for(P in E)vn[P]&&(V=ap(P,E,e,D,S,y))?V.priority&&(C=1):H[P]=v=op.call(e,S,P,"get",E[P],D,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(gr=e,Ft.killTweensOf(S,H,e.globalTime(0)),G=!e.parent,gr=0),e._pt&&a&&(qf[U.id]=1)}C&&hp(e),e._onInit&&e._onInit(e)}e._from=!T&&!!n.runBackwards,e._onUpdate=l,e._initted=(!e._op||e._pt)&&!G},fA=function(e,t){var n=e[0]?xr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=yo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qa=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?ja(e):e},ex=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",pA=(ex+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Lt=(function(r){b0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:vu(i),s)||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,M=a.parent,y=(Zn(n)||R0(n)?li(n[0]):"length"in i)?[n]:wi(n),x,T,E,w,P,v,S,C;if(a._targets=y.length?ep(y):D0("GSAP target "+n+" not found. https://greensock.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||x0(c)||x0(u)){if(i=a.vars,x=a.timeline=new nn({data:"nested",defaults:_||{}}),x.kill(),x.parent=Yi(a),m)$n(x.vars.defaults,{ease:"none"}),m.forEach(function(U){return x.to(y,U,">")});else{if(w=y.length,S=d?W0(d):Za,$i(d))for(P in d)~ex.indexOf(P)&&(C||(C={}),C[P]=d[P]);for(T=0;T<w;T++){E={};for(P in i)pA.indexOf(P)<0&&(E[P]=i[P]);E.stagger=0,p&&(E.yoyoEase=p),C&&yo(E,C),v=y[T],E.duration=+qa(c,Yi(a),T,v,y),E.delay=(+qa(u,Yi(a),T,v,y)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(v,E,S(T,v,y))}x.duration()?c=u=0:a.timeline=0}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&(gr=Yi(a),Ft.killTweensOf(y),gr=0),M&&ip(M,Yi(a)),(h||!c&&!m&&a._start===et(M._time)&&yn(h)&&Xw(Yi(a))&&M.data!=="nested")&&(a._tTime=-dt,a.render(Math.max(0,-u))),g&&V0(Yi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i>l-dt&&i>=0?l:i<dt?0:i,h,d,f,m,_,g,p,M,y;if(!c)qw(this,i,s,o);else if(u!==this._tTime||!i||o||this._startAt&&this._zTime<0!=i<0){if(h=u,M=this.timeline,this._repeat){if(m=c+this._rDelay,h=et(u%m),u===l?(f=this._repeat,h=c):(f=~~(u/m),f&&f===u/m&&(h=c,f--),h>c&&(h=c)),g=this._yoyo&&f&1,g&&(y=this._yEase,h=c-h),_=Mo(this._tTime,m),h===a&&!o&&this._initted)return this;f!==_&&(M&&this._yEase&&K0(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(et(m*f),!0).invalidate()._lock=0))}if(!this._initted){if(H0(this,i<0?i:h,o,s))return this._tTime=0,this;if(c!==this._dur)return this.render(i,s,o)}for(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(y||this._ease)(h/c),this._from&&(this.ratio=p=1-p),h&&!a&&!s&&Dn(this,"onStart"),d=this._pt;d;)d.r(p,d.d),d=d._next;M&&M.render(i<0?i:!h&&g?-dt:M._dur*p,s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),Dn(this,"onUpdate")),this._repeat&&f!==_&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(u||a)&&(Dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all")&&(this._lazy=0,this.parent))return Ga(this);if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,gr&&gr.vars.overwrite!==!0)._first||Ga(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wi(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,_,g,p;if((!s||s==="all")&&zw(a,l))return s==="all"&&(this._pt=0),Ga(this);for(h=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},Mn(s,function(M){return _[M]=1}),s=_),s=fA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,m=d,f={}):(f=h[p]=h[p]||{},m=s);for(_ in m)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Au(this,g,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ga(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return new e(i,Xa(arguments,1))},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return new e(i,Xa(arguments,2))},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ft.killTweensOf(i,s,o)},e})(Ya);$n(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(r){Lt[r]=function(){var e=new nn,t=Zf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var lp=function(e,t,n){return e[t]=n},tx=function(e,t,n){return e[t](n)},mA=function(e,t,n,i){return e[t](i.fp,n)},gA=function(e,t,n){return e.setAttribute(t,n)},Ru=function(e,t){return qt(e[t])?tx:bu(e[t])&&e.setAttribute?gA:lp},nx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4,t)},_A=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},up=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},xA=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},vA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Au(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},hn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||nx,this.d=l||this,this.set=c||lp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yA,this.m=n,this.mt=s,this.tween=i},r})();Mn(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Kf[r]=1});Un.TweenMax=Un.TweenLite=Lt;Un.TimelineLite=Un.TimelineMax=nn;Ft=new nn({sortChildren:!1,defaults:vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=rp;var Eu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return iA(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=wi(e)[0]);var s=xr(e||{}).get,o=n?B0:F0;return n==="native"&&(n=""),e&&(t?o((vn[t]&&vn[t].get||s)(e,t,n,i)):function(a,l,c){return o((vn[a]&&vn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=vn[t],a=xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;go._pt=0,h.init(e,n?u+n:u,go,0,[e]),h.render(1,h),go._pt&&up(1,go)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,vo.ease)),y0(vo,e||{})},config:function(e){return y0(Nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!vn[a]&&!Un[a]&&D0(t+" effect requires "+a+" plugin.")}),Bf[t]=function(a,l,c){return n(wi(a),$n(l||{},s),c)},o&&(nn.prototype[t]=function(a,l,c){return this.add(Bf[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):st},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=s;return Zi(Ft,n,0),n},utils:{wrap:eA,wrapYoyo:tA,distribute:W0,random:q0,snap:X0,normalize:Qw,getUnit:ci,clamp:$w,splitColor:$0,toArray:wi,mapRange:Z0,pipe:Jw,unitize:Kw,interpolate:nA,shuffle:G0},install:L0,effects:Bf,ticker:Ln,updateRoot:nn.updateRoot,plugins:vn,globalTimeline:Ft,core:{PropTween:hn,globals:N0,Tween:Lt,Timeline:nn,Animation:Ya,getCache:xr,_removeLinkedListItem:Au}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Eu[r]=Lt[r]});Ln.add(nn.updateRoot);go=Eu.to({},{duration:0});var MA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SA=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=MA(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zf=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}SA(a,s)}}}},jn=Eu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a;for(o in t)a=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],i,s,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},zf("roundProps",$f),zf("modifiers"),zf("snap",X0))||Eu;Lt.version=nn.version=jn.version="3.5.1";I0=1;A0()&&To();var TA=st.Power0,EA=st.Power1,bA=st.Power2,wA=st.Power3,AA=st.Power4,RA=st.Linear,CA=st.Quad,PA=st.Cubic,IA=st.Quart,LA=st.Quint,DA=st.Strong,NA=st.Elastic,UA=st.Back,OA=st.SteppedEase,FA=st.Bounce,BA=st.Sine,kA=st.Expo,VA=st.Circ;var ix,Ri,bo,_p,us,Ka,rx,HA=function(){return typeof window<"u"},Tr={},cs=180/Math.PI,wo=Math.PI/180,Eo=Math.atan2,sx=1e8,hx=/([A-Z])/g,zA=/(?:left|right|width|margin|padding|x)/i,GA=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},px=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YA=function(e,t,n){return e.style[t]=n},ZA=function(e,t,n){return e.style.setProperty(t,n)},$A=function(e,t,n){return e._gsap[t]=n},jA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},JA=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},KA=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},On="transform",Er=On+"Origin",mx,pp=function(e,t){var n=Ri.createElementNS?Ri.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ri.createElement(e);return n.style?n:Ri.createElement(e)},ji=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(hx,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ao(t)||t,1)||""},ox="O,Moz,ms,Ms,Webkit".split(","),Ao=function(e,t,n){var i=t||us,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ox[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ox[o]:"")+e},mp=function(){HA()&&window.document&&(ix=window,Ri=ix.document,bo=Ri.documentElement,us=pp("div")||{style:{}},Ka=pp("div"),On=Ao(On),Er=On+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mx=!!Ao("perspective"),_p=1)},dp=function r(e){var t=pp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(bo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),bo.removeChild(t),this.style.cssText=s,o},ax=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gx=function(e){var t;try{t=e.getBBox()}catch{t=dp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===dp||(t=dp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ax(e,["x","cx","x1"])||0,y:+ax(e,["y","cy","y1"])||0,width:0,height:0}:t},_x=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gx(e))},Cu=function(e,t){if(t){var n=e.style;t in Tr&&t!==Er&&(t=On),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(hx,"-$1").toLowerCase())):n.removeAttribute(t)}},Sr=function(e,t,n,i,s,o){var a=new hn(e._pt,t,n,0,1,o?px:fx);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},lx={deg:1,rad:1,turn:1},hs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=zA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,g,p;return i===o||!s||lx[i]||lx[o]?s:(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&_x(e),f&&(Tr[t]||~t.indexOf("adius"))?et(s/(p?e.getBBox()[l?"width":"height"]:e[u])*h):(a[l?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ri||!_.appendChild)&&(_=Ri.body),g=_._gsap,g&&f&&g.width&&l&&g.time===Ln.time?et(s/g.width*h):((f||o==="%")&&(a.position=ji(e,"position")),_===e&&(a.position="static"),_.appendChild(us),m=us[u],_.removeChild(us),a.position="absolute",l&&f&&(g=xr(_),g.time=Ln.time,g.width=_[u]),et(d?m*s/h:m&&s?h/m*s:0))))},Qa=function(e,t,n,i){var s;return _p||mp(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(s=Lu(e,i),s=t!=="transformOrigin"?s[t]:Iu(ji(e,Er))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pu[t]&&Pu[t](e,t,n)||ji(e,t)||tp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").indexOf(" ")?hs(e,t,s,n)+n:s},QA=function(e,t,n,i){if(!n||n==="none"){var s=Ao(t,e,1),o=s&&ji(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ji(e,"borderTopColor"))}var a=new hn(this._pt,e.style,t,0,1,cp),l=0,c=0,u,h,d,f,m,_,g,p,M,y,x,T,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ji(e,t)||i,e.style[t]=n),u=[n,i],rp(u),n=u[0],i=u[1],d=n.match(ss)||[],E=i.match(ss)||[],E.length){for(;h=ss.exec(i);)g=h[0],M=i.substring(l,h.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),g!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),T=g.charAt(1)==="="?+(g.charAt(0)+"1"):0,T&&(g=g.substr(2)),p=parseFloat(g),y=g.substr((p+"").length),l=ss.lastIndex-y.length,y||(y=y||Nn.units[t]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(f=hs(e,t,_,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:T?T*p:p-f,m:m&&m<4?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?px:fx;return Jf.test(i)&&(a.e=0),this._pt=a,a},cx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eR=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cx[n]||n,t[1]=cx[i]||i,t.join(" ")},tR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Tr[a]&&(l=1,a=a==="transformOrigin"?Er:On),Cu(n,a);l&&(Cu(n,On),o&&(o.svg&&n.removeAttribute("transform"),Lu(n,1),o.uncache=1))}},Pu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new hn(e._pt,t,n,0,0,tR);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},el=[1,0,0,1,0,0],xx={},vx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ux=function(e){var t=ji(e,On);return vx(t)?el:t.substr(7).match(jf).map(et)},xp=function(e,t){var n=e._gsap||xr(e),i=e.style,s=ux(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==bo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextSibling,bo.appendChild(e)),s=ux(e),l?i.display=l:Cu(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):bo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gp=function(e,t,n,i,s,o){var a=e._gsap,l=s||xp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],M=l[5],y=t.split(" "),x=parseFloat(y[0])||0,T=parseFloat(y[1])||0,E,w,P,v;n?l!==el&&(w=f*g-m*_)&&(P=x*(g/w)+T*(-_/w)+(_*M-g*p)/w,v=x*(-m/w)+T*(f/w)-(f*M-m*p)/w,x=P,T=v):(E=gx(e),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),T=E.y+(~(y[1]||y[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(p=x-c,M=T-u,a.xOffset=h+(p*f+M*_)-p,a.yOffset=d+(p*m+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Er]="0px 0px",o&&(Sr(o,a,"xOrigin",c,x),Sr(o,a,"yOrigin",u,T),Sr(o,a,"xOffset",h,a.xOffset),Sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},Lu=function(e,t){var n=e._gsap||new sp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=ji(e,Er)||"0",c,u,h,d,f,m,_,g,p,M,y,x,T,E,w,P,v,S,C,U,O,V,H,D,Q,G,W,ee,se,xe,ye,Le;return c=u=h=m=_=g=p=M=y=0,d=f=1,n.svg=!!(e.getCTM&&_x(e)),E=xp(e,n.svg),n.svg&&(D=!n.uncache&&e.getAttribute("data-svg-origin"),gp(e,D||l,!!D||n.originIsAbsolute,n.smooth!==!1,E)),x=n.xOrigin||0,T=n.yOrigin||0,E!==el&&(S=E[0],C=E[1],U=E[2],O=E[3],c=V=E[4],u=H=E[5],E.length===6?(d=Math.sqrt(S*S+C*C),f=Math.sqrt(O*O+U*U),m=S||C?Eo(C,S)*cs:0,p=U||O?Eo(U,O)*cs+m:0,p&&(f*=Math.cos(p*wo)),n.svg&&(c-=x-(x*S+T*U),u-=T-(x*C+T*O))):(Le=E[6],xe=E[7],W=E[8],ee=E[9],se=E[10],ye=E[11],c=E[12],u=E[13],h=E[14],w=Eo(Le,se),_=w*cs,w&&(P=Math.cos(-w),v=Math.sin(-w),D=V*P+W*v,Q=H*P+ee*v,G=Le*P+se*v,W=V*-v+W*P,ee=H*-v+ee*P,se=Le*-v+se*P,ye=xe*-v+ye*P,V=D,H=Q,Le=G),w=Eo(-U,se),g=w*cs,w&&(P=Math.cos(-w),v=Math.sin(-w),D=S*P-W*v,Q=C*P-ee*v,G=U*P-se*v,ye=O*v+ye*P,S=D,C=Q,U=G),w=Eo(C,S),m=w*cs,w&&(P=Math.cos(w),v=Math.sin(w),D=S*P+C*v,Q=V*P+H*v,C=C*P-S*v,H=H*P-V*v,S=D,V=Q),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,g=180-g),d=et(Math.sqrt(S*S+C*C+U*U)),f=et(Math.sqrt(H*H+Le*Le)),w=Eo(V,H),p=Math.abs(w)>2e-4?w*cs:0,y=ye?1/(ye<0?-ye:ye):0),n.svg&&(D=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vx(ji(e,On)),D&&e.setAttribute("transform",D))),Math.abs(p)>90&&Math.abs(p)<270&&(s?(d*=-1,p+=m<=0?180:-180,m+=m<=0?180:-180):(f*=-1,p+=p<=0?180:-180)),n.x=((n.xPercent=c&&Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)?0:c)+o,n.y=((n.yPercent=u&&Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)?0:u)+o,n.z=h+o,n.scaleX=et(d),n.scaleY=et(f),n.rotation=et(m)+a,n.rotationX=et(_)+a,n.rotationY=et(g)+a,n.skewX=p+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Er]=Iu(l)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?iR:mx?yx:nR,n.uncache=0,n},Iu=function(e){return(e=e.split(" "))[0]+" "+e[1]},fp=function(e,t,n){var i=ci(t);return et(parseFloat(t)+parseFloat(hs(e,"x",n+"px",i)))+i},nR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yx(e,t)},as="0deg",Ja="0px",ls=") ",yx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==as||u!==as)){var E=parseFloat(u)*wo,w=Math.sin(E),P=Math.cos(E),v;E=parseFloat(h)*wo,v=Math.cos(E),o=fp(M,o,w*v*-y),a=fp(M,a,-Math.sin(E)*-y),l=fp(M,l,P*v*-y+y)}g!==Ja&&(x+="perspective("+g+ls),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(T||o!==Ja||a!==Ja||l!==Ja)&&(x+=l!==Ja||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(x+="rotate("+c+ls),u!==as&&(x+="rotateY("+u+ls),h!==as&&(x+="rotateX("+h+ls),(d!==as||f!==as)&&(x+="skew("+d+", "+f+ls),(m!==1||_!==1)&&(x+="scale("+m+", "+_+ls),M.style[On]=x||"translate(0, 0)"},iR=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(o),x=parseFloat(a),T,E,w,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wo,c*=wo,T=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=wo,v=Math.tan(c-u),v=Math.sqrt(1+v*v),w*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),T*=v,E*=v)),T=et(T),E=et(E),w=et(w),P=et(P)):(T=h,P=d,E=w=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=hs(f,"x",o,"px"),x=hs(f,"y",a,"px")),(m||_||g||p)&&(y=et(y+m-(m*T+_*w)+g),x=et(x+_-(m*E+_*P)+p)),(i||s)&&(v=f.getBBox(),y=et(y+i/100*v.width),x=et(x+s/100*v.height)),v="matrix("+T+","+E+","+w+","+P+","+y+","+x+")",f.setAttribute("transform",v),M&&(f.style[On]=v)},rR=function(e,t,n,i,s,o){var a=360,l=jt(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?cs:1),u=o?c*o:c-i,h=i+u+"deg",d,f;return l&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*sx)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*sx)%a-~~(u/a)*a)),e._pt=f=new hn(e._pt,t,n,i,u,WA),f.e=h,f.u="deg",e._props.push(n),f},sR=function(e,t,n){var i=Ka.style,s=n._gsap,o="perspective,force3D,transformOrigin,svgOrigin",a,l,c,u,h,d,f,m;i.cssText=getComputedStyle(n).cssText+";position:absolute;display:block;",i[On]=t,Ri.body.appendChild(Ka),a=Lu(Ka,1);for(l in Tr)c=s[l],u=a[l],c!==u&&o.indexOf(l)<0&&(f=ci(c),m=ci(u),h=f!==m?hs(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new hn(e._pt,s,l,h,d-h,dx),e._pt.u=m||0,e._props.push(l));Ri.body.removeChild(Ka)};Mn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Pu[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return Qa(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var vp={name:"css",register:mp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l,c,u,h,d,f,m,_,g,p,M,y,x,T,E;_p||mp();for(m in t)if(m!=="autoRound"&&(c=t[m],!(vn[m]&&ap(m,t,n,i,e,s)))){if(d=typeof c,f=Pu[m],d==="function"&&(c=c.call(n,i,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=ja(c)),f)f(this,e,m,c,n)&&(E=1);else if(m.substr(0,2)==="--")this.add(a,"setProperty",getComputedStyle(e).getPropertyValue(m)+"",c+"",i,s,0,0,m);else if(d!=="undefined"){if(l=Qa(e,m),h=parseFloat(l),p=d==="string"&&c.charAt(1)==="="?+(c.charAt(0)+"1"):0,p&&(c=c.substr(2)),u=parseFloat(c),m in Mr&&(m==="autoAlpha"&&(h===1&&Qa(e,"visibility")==="hidden"&&u&&(h=0),Sr(this,a,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Mr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),M=m in Tr,M){if(y||(x=e._gsap,x.renderTransform||Lu(e),T=t.smoothOrigin!==!1&&x.smooth,y=this._pt=new hn(this._pt,a,On,0,1,x.renderTransform,x,0,-1),y.dep=1),m==="scale")this._pt=new hn(this._pt,x,"scaleY",x.scaleY,p?p*u:u-x.scaleY),o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){c=eR(c),x.svg?gp(e,c,0,T,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==x.zOrigin&&Sr(this,x,"zOrigin",x.zOrigin,g),Sr(this,a,m,Iu(l),Iu(c)));continue}else if(m==="svgOrigin"){gp(e,c,1,T,0,this);continue}else if(m in xx){rR(this,x,m,h,c,p);continue}else if(m==="smoothOrigin"){Sr(this,x,"smooth",x.smooth,c);continue}else if(m==="force3D"){x[m]=c;continue}else if(m==="transform"){sR(this,c,e);continue}}else m in a||(m=Ao(m)||m);if(M||(u||u===0)&&(h||h===0)&&!GA.test(c)&&m in a)_=(l+"").substr((h+"").length),u||(u=0),g=ci(c)||(m in Nn.units?Nn.units[m]:_),_!==g&&(h=hs(e,m,l,g)),this._pt=new hn(this._pt,M?x:a,m,h,p?p*u:u-h,g==="px"&&t.autoRound!==!1&&!M?qA:dx),this._pt.u=g||0,_!==g&&(this._pt.b=l,this._pt.r=XA);else if(m in a)QA.call(this,e,m,l,c);else if(m in e)this.add(e,m,e[m],c,i,s);else{wu(m,c);continue}o.push(m)}}E&&hp(this)},get:Qa,aliases:Mr,getSetter:function(e,t,n){var i=Mr[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==Er&&(e._gsap.x||Qa(e,"x"))?n&&rx===n?t==="scale"?jA:$A:(rx=n||{})&&(t==="scale"?JA:KA):e.style&&!bu(e.style[t])?YA:~t.indexOf("-")?ZA:Ru(e,t)},core:{_removeProperty:Cu,_getMatrix:xp}};jn.utils.checkPrefix=Ao;(function(r,e,t,n){var i=Mn(r+","+e+","+t,function(s){Tr[s]=1});Mn(e,function(s){Nn.units[s]="deg",xx[s]=1}),Mr[i[13]]=r+","+e,Mn(n,function(s){var o=s.split(":");Mr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Nn.units[r]="px"});jn.registerPlugin(vp);var Ji=jn.registerPlugin(vp)||jn,vI=Ji.core.Tween;var tt,Du,Dt,dn,er,zt,Ox,Up,Op,rl,Ci,Nu,zu,yp,Fn,Gu,Cp,Pt,Mx,Sx,Ro,Fx,Mp,tl=1,Co=[],Uu=[],fs=Date.now,Sp=fs(),Pi=0,Tx=1,Tp=function(e){return e},Bx=function(){return typeof window<"u"},kx=function(){return tt||Bx()&&(tt=window.gsap)&&tt.registerPlugin&&tt},Bo=function(e){return!!~Ox.indexOf(e)},Vo=function(e,t){return~Co.indexOf(e)&&Co[Co.indexOf(e)+1][t]},$u=function(e,t){var n=t.s,i=t.sc,s=Uu.indexOf(e),o=i===fn.sc?1:2;return!~s&&(s=Uu.push(e)-1),Uu[s+o]||(Uu[s+o]=Vo(e,n)||(Bo(e)?i:function(a){return arguments.length?e[n]=a:e[n]}))},Vx=function(e){return Vo(e,"getBoundingClientRect")||(Bo(e)?function(){return Zu.width=Dt.innerWidth,Zu.height=Dt.innerHeight,Zu}:function(){return ps(e)})},oR=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Vo(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Dt["inner"+s]:e["client"+s])||0}},aR=function(e,t){return!t||~Co.indexOf(e)?Vx(e):function(){return Zu}},Pp=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return(n="scroll"+i)&&(o=Vo(e,n))?o()-Vx(e)()[s]:Bo(e)?Math.max(er[n],zt[n])-(Dt["inner"+i]||er["client"+i]||zt["client"+i]):e[n]-e["offset"+i]},Ep=function(e,t){for(var n=0;n<Ro.length;n+=3)(!t||~t.indexOf(Ro[n+1]))&&e(Ro[n],Ro[n+1],Ro[n+2])},ds=function(e){return typeof e=="string"},br=function(e){return typeof e=="function"},Ip=function(e){return typeof e=="number"},bp=function(e){return typeof e=="object"},Ou=function(e){return br(e)&&e()},Ex=function(e,t){return function(){var n=Ou(e),i=Ou(t);return function(){Ou(n),Ou(i)}}},Fu=Math.abs,Bu="scrollLeft",ku="scrollTop",Fp="left",Bp="top",Ku="right",Qu="bottom",Po="width",Io="height",Lo="Right",Do="Left",No="Top",Uo="Bottom",Bt="padding",Jn="margin",ms="Width",eh="Height",Tn="px",ui={s:Bu,p:Fp,p2:Do,os:Ku,os2:Lo,d:Po,d2:ms,a:"x",sc:function(e){return arguments.length?Dt.scrollTo(e,fn.sc()):Dt.pageXOffset||dn[Bu]||er[Bu]||zt[Bu]||0}},fn={s:ku,p:Bp,p2:No,os:Qu,os2:Uo,d:Io,d2:eh,a:"y",op:ui,sc:function(e){return arguments.length?Dt.scrollTo(ui.sc(),e):Dt.pageYOffset||dn[ku]||er[ku]||zt[ku]||0}},Ki=function(e){return Dt.getComputedStyle(e)},lR=function(e){return e.style.position=Ki(e).position==="absolute"?"absolute":"relative"},bx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ps=function(e,t){var n=t&&Ki(e)[Cp]!=="matrix(1, 0, 0, 1, 0, 0)"&&tt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Lp=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},cR=function(e){return function(t){var n=[],i=e.labels,s=e.duration(),o;for(o in i)n.push(i[o]/s);return tt.utils.snap(n,t)}},wx=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Sn=function(e,t,n){return e.addEventListener(t,n,{passive:!0})},nl=function(e,t,n){return e.removeEventListener(t,n)},Ax={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wp={toggleActions:"play",anticipatePin:0},Rx={top:0,left:0,center:.5,bottom:1,right:1},Wu=function(e,t){if(ds(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;i&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Rx?Rx[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vu=function(e,t,n,i,s,o,a){var l=s.startColor,c=s.endColor,u=s.fontSize,h=s.indent,d=s.fontWeight,f=dn.createElement("div"),m=Bo(n)||Vo(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,g=m?zt:n,p=e.indexOf("start")!==-1,M=p?l:c,y="border-color:"+M+";font-size:"+u+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+(_&&m?"fixed;":"absolute;"),(_||!m)&&(y+=(i===fn?Ku:Qu)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),f._isStart=p,f.setAttribute("class","gsap-marker-"+e),f.style.cssText=y,f.innerText=t||t===0?e+"-"+t:e,g.insertBefore(f,g.children[0]),f._offset=f["offset"+i.op.d2],Xu(f,0,i,p),f},Xu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?1:0,s["border"+o+ms]=1,s["border"+a+ms]=0,s[n.p]=t,tt.set(e,s)},yt=[],Dp={},Cx=function(){return rl||(rl=Op(kp))},Hu=function(){rl||(rl=Op(kp),Pi||ko("scrollStart"),Pi=fs())},il=function(){return!Fn&&Up.restart(!0)},sl={},uR=[],Ct=[],Oo,Px,Ix=function(e){var t=tt.ticker.frame,n=[],i=0,s;if(Px!==t||tl){for(ju();i<Ct.length;i+=4)s=Dt.matchMedia(Ct[i]).matches,s!==Ct[i+3]&&(Ct[i+3]=s,s?n.push(i):ju(1,Ct[i])||br(Ct[i+2])&&Ct[i+2]());for(zx(),i=0;i<n.length;i++)s=n[i],Oo=Ct[s],Ct[s+2]=Ct[s+1](e);Oo=0,Fo(0,1),Px=t,ko("matchMedia")}},Hx=function r(){return nl(Et,"scrollEnd",r)||Fo(!0)},ko=function(e){return sl[e]&&sl[e].map(function(t){return t()})||uR},Qi=[],zx=function(e){for(var t=0;t<Qi.length;t+=4)(!e||Qi[t+3]===e)&&(Qi[t].style.cssText=Qi[t+1],Qi[t+2].uncache=1)},ju=function(e,t){var n;for(Pt=0;Pt<yt.length;Pt++)n=yt[Pt],(!t||n.media===t)&&(e?n.kill(1):(n.scroll.rec||(n.scroll.rec=n.scroll()),n.revert()));zx(t),t||ko("revert")},Fo=function(e,t){if(Pi&&!e){Sn(Et,"scrollEnd",Hx);return}var n=ko("refreshInit");for(Fx&&Et.sort(),t||ju(),Pt=0;Pt<yt.length;Pt++)yt[Pt].refresh();for(n.forEach(function(i){return i&&i.render&&i.render(-1)}),Pt=yt.length;Pt--;)yt[Pt].scroll.rec=0;Up.pause(),ko("refresh")},Lx=0,qu=1,kp=function(){var e=yt.length,t=fs(),n=t-Sp>=50,i=e&&yt[0].scroll();if(qu=Lx>i?-1:1,Lx=i,n&&(Pi&&!Gu&&t-Pi>200&&(Pi=0,ko("scrollEnd")),zu=Sp,Sp=t),qu<0){for(Pt=e;Pt--;)yt[Pt]&&yt[Pt].update(0,n);qu=1}else for(Pt=0;Pt<e;Pt++)yt[Pt]&&yt[Pt].update(0,n);rl=0},Np=[Fp,Bp,Qu,Ku,Jn+Uo,Jn+Lo,Jn+No,Jn+Do,"display","flexShrink","float"],Yu=Np.concat([Po,Io,"boxSizing","max"+ms,"max"+eh,"position",Jn,Bt,Bt+No,Bt+Lo,Bt+Uo,Bt+Do]),hR=function(e,t,n){if(Ju(n),e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}},Ap=function(e,t,n,i){if(e.parentNode!==t){for(var s=Np.length,o=t.style,a=e.style,l;s--;)l=Np[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qu]=a[Ku]="auto",o.overflow="visible",o.boxSizing="border-box",o[Po]=Lp(e,ui)+Tn,o[Io]=Lp(e,fn)+Tn,o[Bt]=a[Jn]=a[Bp]=a[Fp]="0",Ju(i),a[Po]=a["max"+ms]=n[Po],a[Io]=a["max"+eh]=n[Io],a[Bt]=n[Bt],e.parentNode.insertBefore(t,e),t.appendChild(e)}},dR=/([A-Z])/g,Ju=function(e){if(e)for(var t=e.t.style,n=e.length,i=0,s,o;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(dR,"-$1").toLowerCase())},Rp=function(e){for(var t=Yu.length,n=e.style,i=[],s=0;s<t;s++)i.push(Yu[s],n[Yu[s]]);return i.t=e,i},fR=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Zu={left:0,top:0},Dx=function(e,t,n,i,s,o,a,l,c,u,h,d){if(br(e)&&(e=e(l)),ds(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Wu("0"+e.substr(3),n):0)),Ip(e))a&&Xu(a,n,i,!0);else{br(t)&&(t=t(l));var f=Ci(t)[0]||zt,m=ps(f)||{},_=e.split(" "),g,p,M;(!m||!m.left&&!m.top)&&Ki(f).display==="none"&&(M=f.style.display,f.style.display="block",m=ps(f),M?f.style.display=M:f.style.removeProperty("display")),g=Wu(_[0],m[i.d]),p=Wu(_[1]||"0",n),e=m[i.p]-c[i.p]-u+g+s-p,a&&Xu(a,p,i,n-p<20||a._isStart&&p>20),n-=n-p}if(o){var y=e+n,x=o._isStart;d="scroll"+i.d2,Xu(o,y,i,x&&y>20||!x&&(h?Math.max(zt[d],er[d]):o.parentNode[d])<=y+1),h&&(c=ps(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Tn))}return Math.round(e)},pR=/(?:webkit|moz|length|cssText)/i,Nx=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===zt){e._stOrig=s.cssText,a=Ki(e);for(o in a)!+o&&!pR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;tt.core.getCache(e).uncache=1,t.appendChild(e)}},Ux=function(e,t){var n=$u(e,t),i="_scroll"+t.p2,s,o,a=function l(c,u,h,d,f){var m=l.tween,_=u.onComplete,g={};return m&&m.kill(),s=Math.round(h),u[i]=c,u.modifiers=g,g[i]=function(p){return p=Math.round(n()),p!==s&&p!==o?(m.kill(),l.tween=0):p=h+d*m.ratio+f*m.ratio*m.ratio,o=s,s=Math.round(p)},u.onComplete=function(){l.tween=0,_&&_.call(m)},m=l.tween=tt.to(e,u),m};return e[i]=n,a};ui.op=fn;var Et=(function(){function r(t,n){Du||r.register(tt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=0,this.vars&&this.kill(1),!Tx){this.update=this.refresh=this.kill=Tp;return}n=bx(ds(n)||Ip(n)||n.nodeType?{trigger:n}:n,wp);var s=n.horizontal?ui:fn,o=n,a=o.onUpdate,l=o.toggleClass,c=o.id,u=o.onToggle,h=o.onRefresh,d=o.scrub,f=o.trigger,m=o.pin,_=o.pinSpacing,g=o.invalidateOnRefresh,p=o.anticipatePin,M=o.onScrubComplete,y=o.onSnapComplete,x=o.once,T=o.snap,E=o.pinReparent,w=!d&&d!==0,P=Ci(n.scroller||Dt)[0],v=tt.core.getCache(P),S=Bo(P),C="pinType"in n?n.pinType==="fixed":S||Vo(P,"pinType")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=w&&n.toggleActions.split(" "),V="markers"in n?n.markers:wp.markers,H=S?0:parseFloat(Ki(P)["border"+s.p2+ms])||0,D=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(D)},G=oR(P,S,s),W=aR(P,S),ee,se,xe,ye,Le,Ye,q,te,fe,De,me,Ve,ft,N,nt,Fe,Ne,de,ot,Se,He,ht,it,L,b,z,K,ne,J,Ee,ie,Te,ge,ae,he,Ce,Me;D.media=Oo,p*=45,yt.push(D),D.scroller=P,D.scroll=$u(P,s),Le=D.scroll(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Fx=1),v.tweenScroll=v.tweenScroll||{top:Ux(P,fn),left:Ux(P,ui)},D.tweenTo=ee=v.tweenScroll[s.p],i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,Te=Ip(d)&&d,Te&&(ie=tt.to(i,{ease:"power3",duration:Te,onComplete:function(){return M&&M(D)}})),J=0,c||(c=i.vars.id)),T&&(bp(T)||(T={snapTo:T}),tt.set(S?[zt,er]:P,{scrollBehavior:"auto"}),xe=br(T.snapTo)?T.snapTo:T.snapTo==="labels"?cR(i):tt.utils.snap(T.snapTo),ge=T.duration||{min:.1,max:2},ge=bp(ge)?Nu(ge.min,ge.max):Nu(ge,ge),ae=tt.delayedCall(T.delay||Te/2||.1,function(){if(Math.abs(D.getVelocity())<10&&!Gu){var oe=i&&!w?i.totalProgress():D.progress,ve=(oe-Ee)/(fs()-zu)*1e3||0,A=Fu(ve/2)*ve/.185,F=oe+A,X=Nu(0,1,xe(F,D)),re=D.scroll(),j=Math.round(q+X*N),Z=ee.tween;if(re<=te&&re>=q&&j!==re){if(Z&&!Z._initted&&Z.data<=Math.abs(j-re))return;ee(j,{duration:ge(Fu(Math.max(Fu(F-oe),Fu(X-oe))*.185/ve/.05||0)),ease:T.ease||"power3",data:Math.abs(j-re),onComplete:function(){J=Ee=i&&!w?i.totalProgress():D.progress,y&&y(D)}},re,A*N,j-re-A*N)}}else D.isActive&&ae.restart(!0)}).pause()),c&&(Dp[c]=D),f=D.trigger=Ci(f||m)[0],m=m===!0?f:Ci(m)[0],ds(l)&&(l={targets:f,className:l}),m&&(_===!1||_===Jn||(_=!_&&Ki(m.parentNode).display==="flex"?!1:Bt),D.pin=m,n.force3D!==!1&&tt.set(m,{force3D:!0}),se=tt.core.getCache(m),se.spacer?nt=se.pinState:(se.spacer=de=dn.createElement("div"),de.setAttribute("class","pin-spacer"+(c?" pin-spacer-"+c:"")),se.pinState=nt=Rp(m)),D.spacer=de=se.spacer,ne=Ki(m),L=ne[_+s.os2],Se=tt.getProperty(m),He=tt.quickSetter(m,s.a,Tn),Ap(m,de,ne),Ne=Rp(m)),V&&(ft=bp(V)?bx(V,Ax):Ax,me=Vu("scroller-start",c,P,s,ft,0),Ve=Vu("scroller-end",c,P,s,ft,0,me),ot=me["offset"+s.op.d2],fe=Vu("start",c,P,s,ft,ot),De=Vu("end",c,P,s,ft,ot),C||(lR(P),tt.set([me,Ve],{force3D:!0}),z=tt.quickSetter(me,s.a,Tn),K=tt.quickSetter(Ve,s.a,Tn))),D.revert=function(oe){var ve=oe!==!1||!D.enabled,A=Fn;ve!==ye&&(ve&&(Ce=Math.max(D.scroll(),D.scroll.rec||0),he=D.progress,Me=i&&i.progress()),fe&&[fe,De,me,Ve].forEach(function(F){return F.style.display=ve?"none":"block"}),ve&&(Fn=1),D.update(ve),Fn=A,m&&(ve?hR(m,de,nt):(!E||!D.isActive)&&Ap(m,de,Ki(m),b)),ye=ve)},D.refresh=function(oe){if(!(Fn||!D.enabled)){if(m&&oe&&Pi){Sn(r,"scrollEnd",Hx);return}Fn=1,ie&&ie.kill(),g&&i&&i.progress(0).invalidate(),ye||D.revert();for(var ve=G(),A=W(),F=Pp(P,s),X=0,re=0,j=n.end,Z=n.endTrigger||f,le=n.start||(n.start===0?0:m||!f?"0 0":"0 100%"),pe=f&&Math.max(0,yt.indexOf(D))||0,Ae=pe,Ue,gt,kt,Bn,Mt,Jt,En,tr;Ae--;)En=yt[Ae].pin,En&&(En===f||En===m)&&yt[Ae].revert();for(q=Dx(le,f,ve,s,D.scroll(),fe,me,D,A,H,C,F)||(m?-.001:0),br(j)&&(j=j(D)),ds(j)&&!j.indexOf("+=")&&(~j.indexOf(" ")?j=(ds(le)?le.split(" ")[0]:"")+j:(X=Wu(j.substr(2),ve),j=ds(le)?le:q+X,Z=f)),te=Math.max(q,Dx(j||(Z?"100% 0":F),Z,ve,s,D.scroll()+X,De,Ve,D,A,H,C,F))||-.001,N=te-q||(q-=.01)&&.001,X=0,Ae=pe;Ae--;)Jt=yt[Ae],En=Jt.pin,En&&Jt.start-Jt._pinPush<q&&(Ue=Jt.end-Jt.start,En===f&&(X+=Ue),En===m&&(re+=Ue));if(q+=X,te+=X,D._pinPush=re,fe&&X&&(Ue={},Ue[s.a]="+="+X,tt.set([fe,De],Ue)),m)Ue=Ki(m),Bn=s===fn,kt=D.scroll(),ht=parseFloat(Se(s.a))+re,!F&&te>1&&((S?zt:P).style["overflow-"+s.a]="scroll"),Ap(m,de,Ue),Ne=Rp(m),gt=ps(m,!0),tr=C&&$u(P,Bn?ui:fn)(),_&&(b=[_+s.os2,N+re+Tn],b.t=de,Ae=_===Bt?Lp(m,s)+N+re:0,Ae&&b.push(s.d,Ae+Tn),Ju(b),C&&D.scroll(Ce)),C&&(Mt={top:gt.top+(Bn?kt-q:tr)+Tn,left:gt.left+(Bn?tr:kt-q)+Tn,boxSizing:"border-box",position:"fixed"},Mt[Po]=Mt["max"+ms]=Math.ceil(gt.width)+Tn,Mt[Io]=Mt["max"+eh]=Math.ceil(gt.height)+Tn,Mt[Jn]=Mt[Jn+No]=Mt[Jn+Lo]=Mt[Jn+Uo]=Mt[Jn+Do]="0",Mt[Bt]=Ue[Bt],Mt[Bt+No]=Ue[Bt+No],Mt[Bt+Lo]=Ue[Bt+Lo],Mt[Bt+Uo]=Ue[Bt+Uo],Mt[Bt+Do]=Ue[Bt+Do],Fe=fR(nt,Mt,E)),i?(i.progress(1,!0),it=Se(s.a)-ht+N+re,N!==it&&Fe.splice(Fe.length-2,2),i.progress(0,!0)):it=N;else if(f&&D.scroll())for(gt=f.parentNode;gt&&gt!==zt;)gt._pinOffset&&(q-=gt._pinOffset,te-=gt._pinOffset),gt=gt.parentNode;for(Ae=0;Ae<pe;Ae++)Jt=yt[Ae].pin,Jt&&(Jt===f||Jt===m)&&yt[Ae].revert(!1);D.start=q,D.end=te,Le=Ye=D.scroll(),Le<Ce&&D.scroll(Ce),D.revert(!1),Fn=0,Me&&w&&i.progress(Me,!0),he!==D.progress&&(ie&&i.totalProgress(he,!0),D.progress=he,D.update()),m&&_&&(de._pinOffset=Math.round(D.progress*it)),h&&h(D)}},D.getVelocity=function(){return(D.scroll()-Ye)/(fs()-zu)*1e3||0},D.update=function(oe,ve){var A=D.scroll(),F=oe?0:(A-q)/N,X=F<0?0:F>1?1:F||0,re=D.progress,j,Z,le,pe,Ae,Ue;if(ve&&(Ye=Le,Le=A,T&&(Ee=J,J=i&&!w?i.totalProgress():X)),p&&!X&&m&&!Fn&&!tl&&Pi&&q<A+(A-Ye)/(fs()-zu)*p&&(X=1e-4),X!==re&&D.enabled){if(j=D.isActive=!!X&&X<1,Z=!!re&&re<1,Ue=j!==Z,Ae=Ue||!!X!=!!re,D.direction=X>re?1:-1,D.progress=X,w||(ie&&!Fn&&!tl?(ie.vars.totalProgress=X,ie.invalidate().restart()):i&&i.totalProgress(X,!!Fn)),m){if(oe&&_&&(de.style[_+s.os2]=L),!C)He(ht+it*X);else if(Ae){if(pe=!oe&&X>re&&te+1>A&&A+1>=Pp(P,s),E)if(!oe&&(j||pe)){var gt=ps(m,!0),kt=A-q;Nx(m,zt,gt.top+(s===fn?kt:0)+Tn,gt.left+(s===fn?0:kt)+Tn)}else Nx(m,de);Ju(j||pe?Fe:Ne),it!==N&&X<1&&j||He(ht+(X===1&&!pe?it:0))}}T&&!ee.tween&&!Fn&&!tl&&ae.restart(!0),l&&(Ue||x&&X&&(X<1||!Mp))&&Ci(l.targets).forEach(function(Bn){return Bn.classList[j||x?"add":"remove"](l.className)}),a&&!w&&!oe&&a(D),Ae&&!Fn?(le=X&&!re?0:X===1?1:re===1?2:3,w&&(pe=!Ue&&O[le+1]!=="none"&&O[le+1]||O[le],i&&(pe==="complete"||pe==="reset"||pe in i)&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():i[pe]()),a&&a(D)),(Ue||!Mp)&&(u&&Ue&&u(D),U[le]&&U[le](D),x&&(X===1?D.kill(!1,1):U[le]=0),Ue||(le=X===1?1:3,U[le]&&U[le](D)))):w&&a&&!Fn&&a(D)}K&&(z(A+(me._isFlipped?1:0)),K(A))},D.enable=function(){D.enabled||(D.enabled=!0,Sn(P,"resize",il),Sn(P,"scroll",Hu),Q&&Sn(r,"refreshInit",Q),!i||!i.add?D.refresh():tt.delayedCall(.01,function(){return q||te||D.refresh()})&&(N=.01)&&(q=te=0))},D.disable=function(oe,ve){if(D.enabled&&(oe!==!1&&D.revert(),D.enabled=D.isActive=!1,ve||ie&&ie.pause(),Ce=0,se&&(se.uncache=1),Q&&nl(r,"refreshInit",Q),ae&&(ae.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!S)){for(var A=yt.length;A--;)if(yt[A].scroller===P&&yt[A]!==D)return;nl(P,"resize",il),nl(P,"scroll",Hu)}},D.kill=function(oe,ve){D.disable(oe,ve),c&&delete Dp[c];var A=yt.indexOf(D);yt.splice(A,1),A===Pt&&qu>0&&Pt--,i&&(i.scrollTrigger=null,oe&&i.render(-1),ve||i.kill()),fe&&[fe,De,me,Ve].forEach(function(F){return F.parentNode.removeChild(F)}),se&&(se.uncache=1)},D.enable()},r.register=function(n){if(!Du&&(tt=n||kx(),Bx()&&window.document&&(Dt=window,dn=document,er=dn.documentElement,zt=dn.body),tt&&(Ci=tt.utils.toArray,Nu=tt.utils.clamp,tt.core.globals("ScrollTrigger",r),zt))){Op=Dt.requestAnimationFrame||function(a){return setTimeout(a,16)},Sn(Dt,"mousewheel",Hu),Ox=[Dt,dn,er,zt],Sn(dn,"scroll",Hu);var i=zt.style,s=i.borderTop,o;i.borderTop="1px solid #000",o=ps(zt),fn.m=Math.round(o.top+fn.sc())||0,ui.m=Math.round(o.left+ui.sc())||0,s?i.borderTop=s:i.removeProperty("border-top"),yp=setInterval(Cx,200),tt.delayedCall(.5,function(){return tl=0}),Sn(dn,"touchcancel",Tp),Sn(zt,"touchstart",Tp),wx(Sn,dn,"pointerdown,touchstart,mousedown",function(){return Gu=1}),wx(Sn,dn,"pointerup,touchend,mouseup",function(){return Gu=0}),Cp=tt.utils.checkPrefix("transform"),Yu.push(Cp),Du=fs(),Up=tt.delayedCall(.2,Fo).pause(),Ro=[dn,"visibilitychange",function(){var a=Dt.innerWidth,l=Dt.innerHeight;dn.hidden?(Mx=a,Sx=l):(Mx!==a||Sx!==l)&&il()},dn,"DOMContentLoaded",Fo,Dt,"load",function(){return Pi||Fo()},Dt,"resize",il],Ep(Sn)}return Du},r.defaults=function(n){for(var i in n)wp[i]=n[i]},r.kill=function(){Tx=0,yt.slice(0).forEach(function(n){return n.kill(1)})},r.config=function(n){"limitCallbacks"in n&&(Mp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(yp)||(yp=i)&&setInterval(Cx,i),"autoRefreshEvents"in n&&(Ep(nl)||Ep(Sn,n.autoRefreshEvents||"none"))},r.scrollerProxy=function(n,i){var s=Ci(n)[0];Bo(s)?Co.unshift(Dt,i,zt,i,er,i):Co.unshift(s,i)},r.matchMedia=function(n){var i,s,o,a,l;for(s in n)o=Ct.indexOf(s),a=n[s],Oo=s,s==="all"?a():(i=Dt.matchMedia(s),i&&(i.matches&&(l=a()),~o?(Ct[o+1]=Ex(Ct[o+1],a),Ct[o+2]=Ex(Ct[o+2],l)):(o=Ct.length,Ct.push(s,a,l),i.addListener?i.addListener(Ix):i.addEventListener("change",Ix)),Ct[o+3]=i.matches)),Oo=0;return Ct},r.clearMatchMedia=function(n){n||(Ct.length=0),n=Ct.indexOf(n),n>=0&&Ct.splice(n,4)},r})();Et.version="3.5.1";Et.saveStyles=function(r){return r?Ci(r).forEach(function(e){var t=Qi.indexOf(e);t>=0&&Qi.splice(t,4),Qi.push(e,e.style.cssText,tt.core.getCache(e),Oo)}):Qi};Et.revert=function(r,e){return ju(!r,e)};Et.create=function(r,e){return new Et(r,e)};Et.refresh=function(r){return r?il():Fo(!0)};Et.update=kp;Et.maxScroll=function(r,e){return Pp(r,e?ui:fn)};Et.getScrollFunc=function(r,e){return $u(Ci(r)[0],e?ui:fn)};Et.getById=function(r){return Dp[r]};Et.getAll=function(){return yt.slice(0)};Et.isScrolling=function(){return!!Pi};Et.addEventListener=function(r,e){var t=sl[r]||(sl[r]=[]);~t.indexOf(e)||t.push(e)};Et.removeEventListener=function(r,e){var t=sl[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=tt.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&br(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return br(s)&&(s=s(),Sn(Et,"refresh",function(){return s=e.batchMax()})),Ci(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Et.create(c))}),t};Et.sort=function(r){return yt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};kx()&&tt.registerPlugin(Et);Ji.registerPlugin(Et);function Gx(r,e,t){let n=r.querySelector("[data-about-stack]");if(!n)return;let i=Array.from(n.querySelectorAll("[data-about-stack-group]")),s=Array.from(n.querySelectorAll(".about-tech-item img")),o=[],a=0,l=()=>{o.forEach(h=>{h.scrollTrigger.kill(),h.kill()}),o=[],i.forEach(h=>Ji.set(h.querySelectorAll("h3, .about-tech-item"),{clearProps:"opacity,transform"}))},c=()=>{l(),!t&&(i.forEach(h=>{let d={trigger:h,scroller:r,start:"top 90%",end:"top 70%",scrub:.5};o.push(Ji.fromTo(h.querySelector("h3"),{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:d})),o.push(Ji.fromTo(h.querySelectorAll(".about-tech-item"),{opacity:0,y:30},{opacity:1,y:0,stagger:.05,duration:.6,ease:"power2.out",scrollTrigger:{...d}}))}),Et.refresh())},u=()=>!t&&!window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: hover)").matches;s.forEach(h=>{e.listen(h.parentElement,"mouseenter",()=>{u()&&Ji.to(h,{rotation:360,scale:1.1,duration:.6,ease:"power2.out",overwrite:"auto"})}),e.listen(h.parentElement,"mouseleave",()=>{u()&&Ji.to(h,{rotation:0,scale:1,duration:.5,ease:"power2.inOut",overwrite:"auto"})})}),a=requestAnimationFrame(()=>{e.active&&c()}),e.cleanup(()=>{cancelAnimationFrame(a),l(),Ji.killTweensOf(s)})}(function(){"use strict";let e=document.querySelector("[data-about-page]");if(!e||e.dataset.aboutMounted==="true")return;e.dataset.aboutMounted="true";let t=window.MinosPage&&window.MinosPage.scope;if(!t)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new Set,s=(_,g)=>{let p=window.setTimeout(()=>{i.delete(p),_()},g);return i.add(p),p};t.cleanup(()=>i.forEach(clearTimeout)),o(),a(),l(),c(),u(),_0(e,t,n,s);function o(){e.querySelectorAll("[data-about-dialog]").forEach(_=>{t.listen(_,"click",()=>{let g=e.querySelector("#"+_.dataset.aboutDialog);g&&!g.open&&g.showModal()})}),e.querySelectorAll(".about-dialog").forEach(_=>{t.listen(_,"click",g=>{g.target===_&&_.close()}),t.cleanup(()=>{_.open&&_.close()})})}function a(){let _=e.querySelector("[data-about-terminal]"),g=e.querySelector("[data-about-terminal-toggle]"),p=e.querySelector("[data-about-form]"),M=e.querySelector("[data-about-input]"),y=e.querySelector("[data-about-messages]"),x=e.querySelector("[data-terminal-knowledge]");if(!_||!g||!p||!M||!y||!x)return;let T=[];try{let C=JSON.parse(x.textContent);T=Array.isArray(C.commands)?C.commands:[]}catch{T=[]}let E=new Map(T.map(C=>[String(C.input||"").trim().toLowerCase(),String(C.output||"")]).filter(([C])=>C)),w=()=>new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date);e.querySelectorAll("[data-about-message-time]").forEach(C=>{C.textContent=w()}),t.listen(g,"click",C=>{C.preventDefault();let U=_.classList.toggle("is-collapsed");g.setAttribute("aria-expanded",String(!U))});let P=C=>E.get(C.trim().toLowerCase())||`Command not found: ${C}. Type help to list available commands.`,v=(C,U,O,V)=>{let H=document.createElement("div");H.className=`about-message is-${C}`,H.innerHTML=C==="user"?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 7V3M8 3h8M8 16h.01M16 16h.01"></path></svg>';let D=document.createElement("div"),Q=document.createElement("p"),G=document.createElement("strong"),W=document.createElement("time"),ee=document.createElement("p"),se=document.createElement("span"),xe=document.createTextNode(V?"":` ${O}`);if(G.textContent=U,W.textContent=w(),se.textContent="$",Q.append(G,W),ee.append(se,xe),D.append(Q,ee),H.append(D),y.appendChild(H),y.scrollTop=y.scrollHeight,!V||n){V&&(xe.nodeValue=` ${O}`);return}let ye=0,Le=()=>{t.active&&(ye=Math.min(O.length,ye+2),xe.nodeValue=` ${O.slice(0,ye)}`,y.scrollTop=y.scrollHeight,ye<O.length&&s(Le,13))};Le()},S=C=>{let U=String(C||"").trim();U&&(_.classList.remove("is-collapsed"),g.setAttribute("aria-expanded","true"),v("user","user@terminal",U,!1),M.value="",s(()=>v("assistant","sa1ntchen@terminal",P(U),!0),n?0:180),e.dispatchEvent(new CustomEvent("about:reply")))};t.listen(p,"submit",C=>{C.preventDefault(),S(M.value)}),t.listen(M,"keydown",C=>{C.key!=="Enter"||C.shiftKey||(C.preventDefault(),S(M.value))})}function l(){e.querySelectorAll("[data-about-copy-contact]").forEach(_=>{let g=_.nextElementSibling,p=_.dataset.aboutCopyLabel,M=0,y=!1;t.listen(_,"click",async()=>{if(!y){y=!0,clearTimeout(M);try{await navigator.clipboard.writeText(_.dataset.aboutCopyContact),t.active&&g&&(g.textContent=`${p} copied`)}catch{t.active&&g&&(g.textContent="Unable to copy. Please try again.")}finally{y=!1,t.active&&g&&(M=s(()=>{g.textContent=`click to copy ${p}`},2500))}}})})}function c(){let _=e.querySelector("[data-about-profile]"),g=e.querySelector("[data-about-arc-menu]"),p=g?.querySelector(".about-arc-menu__items");if(!_||!g||!p)return;let M=Array.from(_.querySelectorAll("[data-about-menu-label][id]")).filter(w=>w.dataset.aboutMenuLabel.trim());if(!M.length)return;let y=M.map((w,P)=>{let v=`#${w.id}`,S=M.length>1?-90-180*P/(M.length-1):180,C=document.createElement("a");return C.href=v,C.dataset.aboutArcLink=v,C.textContent=w.dataset.aboutMenuLabel,C.style.setProperty("--arc-index",P),C.style.setProperty("--arc-angle",`${S}deg`),p.appendChild(C),C}),x=null,T=w=>{if(y.forEach((S,C)=>{let U=M[C]===w;S.classList.toggle("is-active",U),U?S.setAttribute("aria-current","location"):S.removeAttribute("aria-current")}),x===w)return;x=w;let P=M.indexOf(w),v=w.dataset.aboutMenuLabel;e.dataset.aboutSectionIndex=String(P),e.dataset.aboutSectionKey=v,e.dispatchEvent(new CustomEvent("about:sectionchange",{detail:{index:P,key:v}}))},E=()=>{let P=_.getBoundingClientRect().top+_.clientHeight*.34,v=M[0];M.forEach(S=>{S.getBoundingClientRect().top<=P&&(v=S)}),_.scrollHeight-_.scrollTop-_.clientHeight<3&&(v=M[M.length-1]),T(v)};y.forEach(w=>{t.listen(w,"click",P=>{P.preventDefault();let v=_.querySelector(w.dataset.aboutArcLink);s(()=>v?.scrollIntoView({behavior:n?"auto":"smooth",block:"start"}),0)})}),t.listen(_,"scroll",E,{passive:!0}),t.listen(window,"resize",E,{passive:!0}),requestAnimationFrame(E)}function u(){let _=e.querySelector("[data-about-profile]");if(!_)return;let g=_.querySelector("[data-about-progress]"),p=_.querySelector("[data-about-hero-inner]"),M=Array.from(_.querySelectorAll("[data-about-reveal], [data-about-animated-heading], [data-about-experience]")),y=Array.from(_.querySelectorAll(".about-word-reveal"));_.querySelectorAll("[data-about-animated-heading]").forEach(C=>{let U=0;C.querySelectorAll(".about-heading-word").forEach(O=>{if(O.dataset.aboutCharsReady==="true")return;let V=document.createDocumentFragment();Array.from(O.textContent||"").forEach(H=>{let D=document.createElement("i");D.style.setProperty("--heading-char-index",U++),D.textContent=H===" "?"\xA0":H,V.appendChild(D)}),O.textContent="",O.appendChild(V),O.dataset.aboutCharsReady="true"})});let x=C=>{C.classList.add("is-visible"),C.matches("[data-about-experience]")&&C.querySelectorAll("[data-about-animated-heading]").forEach(U=>U.classList.add("is-visible"))};if(n||!("IntersectionObserver"in window))M.forEach(x);else{let C=new IntersectionObserver(U=>{U.forEach(O=>{O.isIntersecting&&(x(O.target),C.unobserve(O.target))})},{root:_,rootMargin:"0px 0px -8% 0px",threshold:.08});M.forEach(U=>C.observe(U)),t.cleanup(()=>C.disconnect())}let T=C=>Math.max(0,Math.min(1,C)),E=()=>{let C=_.scrollHeight-_.clientHeight,U=C>0?_.scrollTop/C:0;if(g&&(g.style.width=`${U*100}%`),p&&!n){let D=T(_.scrollTop/Math.max(1,_.clientHeight));p.style.transform=`translate3d(0, ${D*-15}vh, 0)`}if(n)return;let V=_.getBoundingClientRect().top+_.clientHeight*.95,H=_.clientHeight*.4;y.forEach(D=>{let Q=D.getBoundingClientRect(),G=T((V-Q.top)/Math.max(1,H+Q.height)),W=Array.from(D.children),ee=Math.max(1,W.length*.05);W.forEach((se,xe)=>{let ye=T(G*(1+ee)-xe*.05);se.style.opacity=String(.22+ye*.78),se.style.transform=`translateY(${(1-ye)*.5}rem) scale(${.94+ye*.06})`,se.style.color=D.closest(".is-dark")?`rgba(226,232,228,${.22+ye*.78})`:`rgba(17,17,17,${.22+ye*.78})`})})};t.listen(_,"scroll",E,{passive:!0}),E(),_.querySelectorAll("[data-about-scroll]").forEach(C=>{t.listen(C,"click",()=>{_.querySelector(C.dataset.aboutScroll)?.scrollIntoView({behavior:n?"auto":"smooth",block:"start"})})});let w=_.querySelector("[data-about-role-ticker]"),P=w?Array.from(w.children):[];if(P.length>1&&!n){let C=0,U=()=>{let V=P[C],H=(C+1)%P.length,D=P[H];V.classList.add("is-leaving"),D.classList.add("is-active"),s(()=>{V.classList.remove("is-active","is-leaving"),C=H},460)},O=window.setInterval(U,2600);t.cleanup(()=>clearInterval(O))}let v=_.querySelector(".about-profile-name"),S=v?Array.from(v.querySelectorAll("[data-about-hero-char]")):[];v&&S.length&&!n&&t.listen(v,"mouseenter",()=>{let C=(S.length-1)/2;S.forEach((U,O)=>{U.animate([{transform:"translateY(0)"},{transform:"translateY(-9%)",offset:.3},{transform:"translateY(0)"}],{duration:720,delay:Math.abs(O-C)*16,easing:"cubic-bezier(.25,.46,.45,.94)"})})}),Gx(_,t,n),h(_),d(_),f(_),m(_),requestAnimationFrame(()=>{t.active&&(_.classList.add("is-profile-ready"),E())})}function h(_){n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches||_.querySelectorAll(".about-motion-button").forEach(g=>{t.listen(g,"pointermove",p=>{let M=g.getBoundingClientRect(),y=p.clientX-M.left,x=p.clientY-M.top;g.style.translate=`${(y-M.width/2)*.22}px ${(x-M.height/2)*.22}px`}),t.listen(g,"pointerleave",()=>{g.animate([{translate:g.style.translate||"0 0"},{translate:"0 0"}],{duration:650,easing:"cubic-bezier(.34,1.56,.64,1)",fill:"forwards"}),g.style.translate="0 0"})})}function d(_){let g=_.querySelector("[data-about-flow-field]"),p=g?.querySelector("canvas"),M=p?.getContext("2d",{alpha:!1});if(!g||!p||!M)return;let y=window.matchMedia("(hover: hover) and (pointer: fine)").matches,x={x:-9999,y:-9999},T=0,E=0,w=Math.random()*100,P=[],v=0,S=!0,C=(W,ee,se)=>(Math.sin(W*1.7+se)*Math.cos(ee*1.35-se*.7)+Math.sin((W+ee)*.85+se*.45)*.8+Math.sin(W*.55-ee*.9-se*.3)*.6)*2.4,U=()=>({x:Math.random()*T,y:Math.random()*E,px:0,py:0,life:0,maxLife:90+Math.random()*160,speed:.5+Math.random()*1.1,pale:Math.random()>.82}),O=W=>Object.assign(W,U(),{px:W.x,py:W.y}),V=()=>{M.fillStyle="rgba(11,17,14,.045)",M.fillRect(0,0,T,E),M.lineWidth=1.15,P.forEach(W=>{let ee=C(W.x*.0042,W.y*.0042,w),se=Math.cos(ee)*W.speed,xe=Math.sin(ee)*W.speed*.85;if(y&&x.x>-999){let Le=W.x-x.x,Ye=W.y-x.y,q=Math.hypot(Le,Ye);if(q<130&&q>1){let te=(130-q)/130*2.2;se+=Le/q*te,xe+=Ye/q*te}}if(W.px=W.x,W.py=W.y,W.x+=se,W.y+=xe,W.life+=1,W.life>W.maxLife||W.x<-20||W.x>T+20||W.y<-20||W.y>E+20){O(W);return}let ye=Math.sin(W.life/W.maxLife*Math.PI);M.strokeStyle=W.pale?`rgba(226,232,228,${.12+ye*.2})`:`rgba(50,115,220,${.34+ye*.4})`,M.beginPath(),M.moveTo(W.px,W.py),M.lineTo(W.x,W.y),M.stroke()}),w+=.0028},H=()=>{if(!S||!t.active){v=0;return}V(),v=requestAnimationFrame(H)},D=()=>{let W=g.getBoundingClientRect();if(!W.width||!W.height)return;T=W.width,E=W.height;let ee=T<500?1:Math.min(window.devicePixelRatio||1,1.5);p.width=Math.floor(T*ee),p.height=Math.floor(E*ee),M.setTransform(ee,0,0,ee,0,0),P=Array.from({length:T<500?45:180},()=>{let xe=U();return xe.px=xe.x,xe.py=xe.y,xe.life=Math.random()*xe.maxLife,xe}),M.fillStyle="#0b110e",M.fillRect(0,0,T,E);let se=n?180:72;for(let xe=0;xe<se;xe+=1)V()};D();let Q=new ResizeObserver(D);Q.observe(g);let G=new IntersectionObserver(([W])=>{S=W.isIntersecting,S&&!v&&!n&&(v=requestAnimationFrame(H)),!S&&v&&(cancelAnimationFrame(v),v=0)},{root:_,threshold:.02});G.observe(g),y&&(t.listen(g,"pointermove",W=>{let ee=g.getBoundingClientRect();x.x=W.clientX-ee.left,x.y=W.clientY-ee.top}),t.listen(g,"pointerleave",()=>{x.x=-9999,x.y=-9999})),t.cleanup(()=>{Q.disconnect(),G.disconnect(),v&&cancelAnimationFrame(v)})}function f(_){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let g=_.querySelector("[data-about-projects]"),p=_.querySelector("[data-about-project-preview]"),M=p?.querySelector("[data-about-project-reel]");if(!g||!p||!M)return;let y={x:0,y:0},x={x:0,y:0},T=!1,E=0,w=()=>{x.x+=(y.x-x.x)*.12,x.y+=(y.y-x.y)*.12,p.style.left=`${x.x}px`,p.style.top=`${x.y}px`,T||Math.abs(y.x-x.x)>.2||Math.abs(y.y-x.y)>.2?E=requestAnimationFrame(w):E=0};t.listen(g,"pointermove",P=>{y.x=P.clientX,y.y=P.clientY}),g.querySelectorAll("[data-about-project-index]").forEach(P=>{t.listen(P,"pointerenter",v=>{let S=Number(P.dataset.aboutProjectIndex)||0;y.x=x.x=v.clientX,y.y=x.y=v.clientY,M.style.transform=`translateY(${-S*100}%)`,p.classList.add("is-visible"),T=!0,E||(E=requestAnimationFrame(w))}),t.listen(P,"pointerleave",()=>{T=!1,p.classList.remove("is-visible")})}),t.cleanup(()=>{E&&cancelAnimationFrame(E)})}function m(_){let g=_.querySelector("[data-about-marquee-track]");if(!g||n)return;let p=0,M=0,y=0,x=_.scrollTop,T=0,E=()=>{y+=(M-y)*.08,M*=.93,p-=.85+y;let w=g.scrollWidth/2;w>0&&p<=-w&&(p+=w),w>0&&p>0&&(p-=w);let P=Math.max(-6,Math.min(6,y*.45));g.style.transform=`translate3d(${p}px,0,0) skewX(${P}deg)`,T=requestAnimationFrame(E)};t.listen(_,"scroll",()=>{let w=_.scrollTop-x;x=_.scrollTop,Math.abs(w)>.1&&(M=Math.max(-18,Math.min(18,w*.14)))},{passive:!0}),T=requestAnimationFrame(E),t.cleanup(()=>{T&&cancelAnimationFrame(T)})}})();})();
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
