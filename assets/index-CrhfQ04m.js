(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="183",Wu=0,wl=1,Xu=2,xr=1,kc=2,bs=3,ii=0,Qt=1,Ht=2,zn=0,Yi=1,Al=2,Cl=3,Rl=4,qu=5,gi=100,Yu=101,$u=102,Ju=103,Zu=104,ju=200,Ku=201,Qu=202,eh=203,Ua=204,Na=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,Fa=0,Oa=1,Ba=2,Qi=3,za=4,ka=5,Va=6,Ga=7,Vc=0,uh=1,hh=2,Tn=0,Gc=1,Hc=2,Wc=3,Uo=4,Xc=5,qc=6,Yc=7,$c=300,Si=301,es=302,Zr=303,jr=304,Lr=306,Ha=1e3,Bn=1001,Wa=1002,Ot=1003,dh=1004,Vs=1005,Wt=1006,Kr=1007,xi=1008,sn=1009,Jc=1010,Zc=1011,Ds=1012,No=1013,An=1014,pn=1015,Hn=1016,Fo=1017,Oo=1018,Ls=1020,jc=35902,Kc=35899,Qc=1021,eu=1022,mn=1023,Wn=1026,vi=1027,Bo=1028,zo=1029,ts=1030,ko=1031,Vo=1033,vr=33776,Mr=33777,yr=33778,Sr=33779,Xa=35840,qa=35841,Ya=35842,$a=35843,Ja=36196,Za=37492,ja=37496,Ka=37488,Qa=37489,eo=37490,to=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,xo=36494,vo=36495,Mo=36283,yo=36284,So=36285,bo=36286,fh=3200,tu=0,ph=1,ti="",Ft="srgb",ns="srgb-linear",Tr="linear",tt="srgb",Pi=7680,Pl=519,mh=512,gh=513,_h=514,Go=515,xh=516,vh=517,Ho=518,Mh=519,Dl=35044,yh=35048,Ll="300 es",En=2e3,Is=2001;function Sh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){const i=wr("canvas");return i.style.display="block",i}const Il={};function Ul(...i){const e="THREE."+i.shift();console.log(e,...i)}function nu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=nu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=nu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ar(...i){const e=i.join(" ");e in Il||(Il[e]=!0,Re(...i))}function Eh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Th={[Fa]:Oa,[Ba]:Va,[za]:Ga,[Qi]:ka,[Oa]:Fa,[Va]:Ba,[Ga]:za,[ka]:Qi};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const As=Math.PI/180,Us=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Wo(i,e){return(i%e+e)%e}function wh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ah(i,e,t){return i!==e?(t-i)/(e-i):0}function Cs(i,e,t){return(1-t)*i+t*e}function Ch(i,e,t,n){return Cs(i,e,1-Math.exp(-t*n))}function Rh(i,e=1){return e-Math.abs(Wo(i,e*2)-e)}function Ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ih(i,e){return i+Math.random()*(e-i)}function Uh(i){return i*(.5-Math.random())}function Nh(i){i!==void 0&&(Nl=i);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(i){return i*As}function Oh(i){return i*Us}function Bh(i){return(i&i-1)===0&&i!==0}function zh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),d=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*d,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*d,o*c);break;case"ZYZ":i.set(l*d,l*p,o*h,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bt={DEG2RAD:As,RAD2DEG:Us,generateUUID:ls,clamp:He,euclideanModulo:Wo,mapLinear:wh,inverseLerp:Ah,lerp:Cs,damp:Ch,pingpong:Rh,smoothstep:Ph,smootherstep:Dh,randInt:Lh,randFloat:Ih,randFloatSpread:Uh,seededRandom:Nh,degToRad:Fh,radToDeg:Oh,isPowerOfTwo:Bh,ceilPowerOfTwo:zh,floorPowerOfTwo:kh,setQuaternionFromProperEuler:Vh,normalize:qt,denormalize:qi};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],d=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==p||h!==d){let m=l*u+c*p+h*d+f*_;m<0&&(u=-u,p=-p,d=-d,_=-_,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E,l=l*g+u*o,c=c*g+p*o,h=h*g+d*o,f=f*g+_*o}else{l=l*g+u*o,c=c*g+p*o,h=h*g+d*o,f=f*g+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],d=r[a+3];return e[t]=o*d+h*f+l*p-c*u,e[t+1]=l*d+h*u+c*f-o*p,e[t+2]=c*d+h*p+o*u-l*f,e[t+3]=h*d-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),d=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*d,this._y=c*p*f-u*h*d,this._z=c*h*d+u*p*f,this._w=c*h*f-u*p*d;break;case"YXZ":this._x=u*h*f+c*p*d,this._y=c*p*f-u*h*d,this._z=c*h*d-u*p*f,this._w=c*h*f+u*p*d;break;case"ZXY":this._x=u*h*f-c*p*d,this._y=c*p*f+u*h*d,this._z=c*h*d+u*p*f,this._w=c*h*f-u*p*d;break;case"ZYX":this._x=u*h*f-c*p*d,this._y=c*p*f+u*h*d,this._z=c*h*d-u*p*f,this._w=c*h*f+u*p*d;break;case"YZX":this._x=u*h*f+c*p*d,this._y=c*p*f+u*h*d,this._z=c*h*d-u*p*f,this._w=c*h*f-u*p*d;break;case"XZY":this._x=u*h*f-c*p*d,this._y=c*p*f-u*h*d,this._z=c*h*d+u*p*f,this._w=c*h*f+u*p*d;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new P,Fl=new gn;class Oe{constructor(e,t,n,s,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],d=n[8],_=s[0],m=s[3],g=s[6],M=s[1],E=s[4],S=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*_+o*M+l*T,r[3]=a*m+o*E+l*w,r[6]=a*g+o*S+l*C,r[1]=c*_+h*M+f*T,r[4]=c*m+h*E+f*w,r[7]=c*g+h*S+f*C,r[2]=u*_+p*M+d*T,r[5]=u*m+p*E+d*w,r[8]=u*g+p*S+d*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,d=t*f+n*u+s*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Oe,Ol=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){const i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const Ye=Gh();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class Hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=wr("canvas")),Di.width=e.width,Di.height=e.height;const s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class Xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ta(s[a].image)):r.push(ta(s[a]))}else r=ta(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Xh=0;const na=new P;class Xt extends os{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Bn,s=Bn,r=Wt,a=xi,o=mn,l=sn,c=Xt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=ls(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=$c;Xt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],d=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(d-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(d+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,T=(g+1)/2,w=(h+u)/4,C=(f+_)/4,v=(d+m)/4;return E>S&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=C/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-d)*(m-d)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-d)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qh extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Xt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class iu extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yh extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(e,t,n,s,r,a,o,l,c,h,f,u,p,d,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,p,d,_,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,p,d,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=p,g[7]=d,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*f,d=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+d*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=d+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,d=c*h,_=c*f;t[0]=u+_*o,t[4]=d*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-d,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,d=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=d+p*o,t[1]=p+d*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,d=o*h,_=o*f;t[0]=l*h,t[4]=d*c-p,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=p*c-d,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,d=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=d*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+d,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,p=a*c,d=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=p*f-d,t[2]=d*f-p,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Jh)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),$n.crossVectors(n,tn),$n.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),$n.crossVectors(n,tn)),$n.normalize(),Gs.crossVectors(tn,$n),s[0]=$n.x,s[4]=Gs.x,s[8]=tn.x,s[1]=$n.y,s[5]=Gs.y,s[9]=tn.y,s[2]=$n.z,s[6]=Gs.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],d=n[2],_=n[6],m=n[10],g=n[14],M=n[3],E=n[7],S=n[11],T=n[15],w=s[0],C=s[4],v=s[8],b=s[12],N=s[1],R=s[5],I=s[9],O=s[13],V=s[2],B=s[6],z=s[10],k=s[14],Q=s[3],Z=s[7],ue=s[11],me=s[15];return r[0]=a*w+o*N+l*V+c*Q,r[4]=a*C+o*R+l*B+c*Z,r[8]=a*v+o*I+l*z+c*ue,r[12]=a*b+o*O+l*k+c*me,r[1]=h*w+f*N+u*V+p*Q,r[5]=h*C+f*R+u*B+p*Z,r[9]=h*v+f*I+u*z+p*ue,r[13]=h*b+f*O+u*k+p*me,r[2]=d*w+_*N+m*V+g*Q,r[6]=d*C+_*R+m*B+g*Z,r[10]=d*v+_*I+m*z+g*ue,r[14]=d*b+_*O+m*k+g*me,r[3]=M*w+E*N+S*V+T*Q,r[7]=M*C+E*R+S*B+T*Z,r[11]=M*v+E*I+S*z+T*ue,r[15]=M*b+E*O+S*k+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],d=e[3],_=e[7],m=e[11],g=e[15],M=l*p-c*u,E=o*p-c*f,S=o*u-l*f,T=a*p-c*h,w=a*u-l*h,C=a*f-o*h;return t*(_*M-m*E+g*S)-n*(d*M-m*T+g*w)+s*(d*E-_*T+g*C)-r*(d*S-_*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],d=e[12],_=e[13],m=e[14],g=e[15],M=t*o-n*a,E=t*l-s*a,S=t*c-r*a,T=n*l-s*o,w=n*c-r*o,C=s*c-r*l,v=h*_-f*d,b=h*m-u*d,N=h*g-p*d,R=f*m-u*_,I=f*g-p*_,O=u*g-p*m,V=M*O-E*I+S*R+T*N-w*b+C*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return e[0]=(o*O-l*I+c*R)*B,e[1]=(s*I-n*O-r*R)*B,e[2]=(_*C-m*w+g*T)*B,e[3]=(u*w-f*C-p*T)*B,e[4]=(l*N-a*O-c*b)*B,e[5]=(t*O-s*N+r*b)*B,e[6]=(m*S-d*C-g*E)*B,e[7]=(h*C-u*S+p*E)*B,e[8]=(a*I-o*N+c*v)*B,e[9]=(n*N-t*I-r*v)*B,e[10]=(d*w-_*S+g*M)*B,e[11]=(f*S-h*w-p*M)*B,e[12]=(o*b-a*R-l*v)*B,e[13]=(t*R-n*b+s*v)*B,e[14]=(_*E-d*T-m*M)*B,e[15]=(h*T-f*E+u*M)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,d=r*f,_=a*h,m=a*f,g=o*f,M=l*c,E=l*h,S=l*f,T=n.x,w=n.y,C=n.z;return s[0]=(1-(_+g))*T,s[1]=(p+S)*T,s[2]=(d-E)*T,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(u+g))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(d+E)*C,s[9]=(m-M)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const c=1/a,h=1/o,f=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=En,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let d,_;if(l)d=r/(a-r),_=a*r/(a-r);else if(o===En)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Is)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=En,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let d,_;if(l)d=1/(a-r),_=a/(a-r);else if(o===En)d=-2/(a-r),_=-(a+r)/(a-r);else if(o===Is)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new P,un=new Ke,$h=new P(0,0,0),Jh=new P(1,1,1),$n=new P,Gs=new P,tn=new P,zl=new Ke,kl=new gn;class Cn{constructor(e=0,t=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Vl=new P,Ii=new gn,Ln=new Ke,Hs=new P,hs=new P,jh=new P,Kh=new gn,Gl=new P(1,0,0),Hl=new P(0,1,0),Wl=new P(0,0,1),Xl={type:"added"},Qh={type:"removed"},Ui={type:"childadded",child:null},ia={type:"childremoved",child:null};class At extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new Cn,n=new gn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(hs,Hs,this.up):Ln.lookAt(Hs,hs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class st extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,d=.005;c.inputState.pinching&&u>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Wo(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ye.workingToColorSpace(Gt.copy(this),e),Math.round(He(Gt.r*255,0,255))*65536+Math.round(He(Gt.g*255,0,255))*256+Math.round(He(Gt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ft){Ye.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Ws);const n=Cs(Jn.h,Ws.h,t),s=Cs(Jn.s,Ws.s,t),r=Cs(Jn.l,Ws.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ue;Ue.NAMES=su;class Yo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Yo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class td extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new P,In=new P,aa=new P,Un=new P,Ni=new P,Fi=new P,ql=new P,oa=new P,la=new P,ca=new P,ua=new vt,ha=new vt,da=new vt;class fn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),In.subVectors(n,t),aa.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(In),l=hn.dot(aa),c=In.dot(In),h=In.dot(aa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,d=(a*h-o*l)*u;return r.set(1-p-d,d,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ua.setScalar(0),ha.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),In.subVectors(e,t),hn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Fi.subVectors(r,n),oa.subVectors(e,n);const l=Ni.dot(oa),c=Fi.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,s);const h=Ni.dot(la),f=Fi.dot(la);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ni,a);ca.subVectors(e,r);const p=Ni.dot(ca),d=Fi.dot(ca);if(d>=0&&p<=d)return t.copy(r);const _=p*c-l*d;if(_<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Fi,o);const m=h*d-p*f;if(m<=0&&f-h>=0&&p-d>=0)return ql.subVectors(r,s),o=(f-h)/(f-h+(p-d)),t.copy(s).addScaledVector(ql,o);const g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ti{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),qs.subVectors(this.max,ds),Oi.subVectors(e.a,ds),Bi.subVectors(e.b,ds),zi.subVectors(e.c,ds),Zn.subVectors(Bi,Oi),jn.subVectors(zi,Bi),ui.subVectors(Oi,zi);let t=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-ui.y,ui.x,0];return!fa(t,Oi,Bi,zi,qs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Oi,Bi,zi,qs))?!1:(Ys.crossVectors(Zn,jn),t=[Ys.x,Ys.y,Ys.z],fa(t,Oi,Bi,zi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,Xs=new Ti,Oi=new P,Bi=new P,zi=new P,Zn=new P,jn=new P,ui=new P,ds=new P,qs=new P,Ys=new P,hi=new P;function fa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tt=new P,$s=new we;let nd=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}}class ru extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class au extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const id=new Ti,fs=new P,pa=new P;class wi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):id.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(pa)),this.expandByPoint(fs.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sd=0;const an=new Ke,ma=new At,ki=new P,nn=new Ti,ps=new Ti,Lt=new P;class gt extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?au:ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,ps.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,ps.max),nn.expandByPoint(Lt)):(nn.expandByPoint(ps.min),nn.expandByPoint(ps.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Lt.add(ki)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,h=new P,f=new P,u=new we,p=new we,d=new we,_=new P,m=new P;function g(v,b,N){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,N),h.sub(c),f.sub(c),p.sub(u),d.sub(u);const R=1/(p.x*d.y-d.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(R),o[v].add(_),o[b].add(_),o[N].add(_),l[v].add(m),l[b].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,b=M.length;v<b;++v){const N=M[v],R=N.start,I=N.count;for(let O=R,V=R+I;O<V;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new P,S=new P,T=new P,w=new P;function C(v){T.fromBufferAttribute(s,v),w.copy(T);const b=o[v];E.copy(b),E.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(w,b);const R=S.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,R)}for(let v=0,b=M.length;v<b;++v){const N=M[v],R=N.start,I=N.count;for(let O=R,V=R+I;O<V;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const d=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,d=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let g=0;g<h;g++)u[d++]=c[p++]}return new on(u,h,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rd=0;class Ai extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Yi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new P,ga=new P,Js=new P,Kn=new P,_a=new P,Zs=new P,xa=new P;class Ir{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ga.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=Kn.dot(this.direction),l=-Kn.dot(Js),c=Kn.lengthSq(),h=Math.abs(1-a*a);let f,u,p,d;if(h>0)if(f=a*l-o,u=a*o-l,d=r*h,f>=0)if(u>=-d)if(u<=d){const _=1/h;f*=_,u*=_,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-d?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=d?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ga).addScaledVector(Js,u),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),Zs.subVectors(n,e),xa.crossVectors(_a,Zs);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(Zs.crossVectors(Kn,Zs));if(l<0)return null;const c=o*this.direction.dot(_a.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(xa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yl=new Ke,di=new Ir,js=new wi,$l=new P,Ks=new P,Qs=new P,er=new P,va=new P,tr=new P,Jl=new P,nr=new P;class Pe extends At{constructor(e=new gt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(va.fromBufferAttribute(f,e),a?tr.addScaledVector(va,h):tr.addScaledVector(va.sub(t),h))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(js.containsPoint(di.origin)===!1&&(di.intersectSphere(js,$l)===null||di.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Yl.copy(r).invert(),di.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=u.length;d<_;d++){const m=u[d],g=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,T=E;S<T;S+=3){const w=o.getX(S),C=o.getX(S+1),v=o.getX(S+2);s=ir(this,g,e,n,c,h,f,w,C,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const M=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=ir(this,a,e,n,c,h,f,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,_=u.length;d<_;d++){const m=u[d],g=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,T=E;S<T;S+=3){const w=S,C=S+1,v=S+2;s=ir(this,g,e,n,c,h,f,w,C,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const M=m,E=m+1,S=m+2;s=ir(this,a,e,n,c,h,f,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ad(i,e,t,n,s,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:i}}function ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,Qs),i.getVertexPosition(c,er);const h=ad(i,e,t,n,Ks,Qs,er,Jl);if(h){const f=new P;fn.getBarycoord(Jl,Ks,Qs,er,f),s&&(h.uv=fn.getInterpolatedAttribute(s,o,l,c,f,new we)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,f,new we)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};fn.getNormal(Ks,Qs,er,u.normal),h.face=u,h.barycoord=f}return h}class ou extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,h=Ot,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends on{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new Ke,jl=new Ke,sr=[],Kl=new Ti,od=new Ke,ms=new Pe,gs=new wi;class ld extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,od)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Kl.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),gs.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),jl.multiplyMatrices(n,Vi),ms.matrixWorld=jl,ms.raycast(e,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,t.push(l)}sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ou(new Float32Array(s*this.count),s,this.count,Bo,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new P,cd=new P,ud=new Oe;class yn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ma.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new wi,hd=new we(.5,.5),rr=new P;class $o{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],d=r[8],_=r[9],m=r[10],g=r[11],M=r[12],E=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,g-d,T-M).normalize(),s[1].setComponents(c+a,p+h,g+d,T+M).normalize(),s[2].setComponents(c+o,p+f,g+_,T+E).normalize(),s[3].setComponents(c-o,p-f,g-_,T-E).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,p-u,g-m,T-S).normalize();else if(s[4].setComponents(c-l,p-u,g-m,T-S).normalize(),t===En)s[5].setComponents(c+l,p+u,g+m,T+S).normalize();else if(t===Is)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=hd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cr=new P,Rr=new P,Ql=new Ke,_s=new Ir,ar=new wi,ya=new P,ec=new P;class dd extends At{constructor(e=new gt,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cr.fromBufferAttribute(t,s-1),Rr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cr.distanceTo(Rr);e.setAttribute("lineDistance",new Ze(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ql.copy(s).invert(),_s.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=p,m=d-1;_<m;_+=c){const g=h.getX(_),M=h.getX(_+1),E=or(this,e,_s,l,g,M,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(d-1),m=h.getX(p),g=or(this,e,_s,l,_,m,d-1);g&&t.push(g)}}else{const p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=p,m=d-1;_<m;_+=c){const g=or(this,e,_s,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=or(this,e,_s,l,d-1,p,d-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function or(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Cr.fromBufferAttribute(o,s),Rr.fromBufferAttribute(o,r),t.distanceSqToSegment(Cr,Rr,ya,ec)>n)return;ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:ec.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Jo extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tc=new Ke,Eo=new Ir,lr=new wi,cr=new P;class cu extends At{constructor(e=new gt,t=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;tc.copy(s).invert(),Eo.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let d=u,_=p;d<_;d++){const m=c.getX(d);cr.fromBufferAttribute(f,m),nc(cr,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let d=u,_=p;d<_;d++)cr.fromBufferAttribute(f,d),nc(cr,d,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(i,e,t,n,s,r,a){const o=Eo.distanceSqToPoint(i);if(o<t){const l=new P;Eo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class uu extends Xt{constructor(e=[],t=Si,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ur extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends Xt{constructor(e,t,n=An,s,r,a,o=Ot,l=Ot,c,h=Wn,f=1){if(h!==Wn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fd extends Ns{constructor(e,t=An,n=Si,s,r,a=Ot,o=Ot,l,c=Wn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hu extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bt extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function d(_,m,g,M,E,S,T,w,C,v,b){const N=S/C,R=T/v,I=S/2,O=T/2,V=w/2,B=C+1,z=v+1;let k=0,Q=0;const Z=new P;for(let ue=0;ue<z;ue++){const me=ue*R-O;for(let de=0;de<B;de++){const Be=de*N-I;Z[_]=Be*M,Z[m]=me*E,Z[g]=V,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[g]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(de/C),f.push(1-ue/v),k+=1}}for(let ue=0;ue<v;ue++)for(let me=0;me<C;me++){const de=u+me+B*ue,Be=u+me+B*(ue+1),ft=u+(me+1)+B*(ue+1),ht=u+(me+1)+B*ue;l.push(de,Be,ht),l.push(Be,ft,ht),Q+=6}o.addGroup(p,Q,b),p+=Q,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends gt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,d=n*2+r,_=s+1,m=new P,g=new P;for(let M=0;M<=d;M++){let E=0,S=0,T=0,w=0;if(M<=n){const b=M/n,N=b*Math.PI/2;S=-h-e*Math.cos(N),T=e*Math.sin(N),w=-e*Math.cos(N),E=b*f}else if(M<=n+r){const b=(M-n)/r;S=-h+b*t,T=e,w=0,E=f+b*u}else{const b=(M-n-r)/n,N=b*Math.PI/2;S=h+e*Math.sin(N),T=e*Math.cos(N),w=e*Math.sin(N),E=f+u+b*f}const C=Math.max(0,Math.min(1,E/p));let v=0;M===0?v=.5/s:M===d&&(v=-.5/s);for(let b=0;b<=s;b++){const N=b/s,R=N*Math.PI*2,I=Math.sin(R),O=Math.cos(R);g.x=-T*O,g.y=S,g.z=T*I,o.push(g.x,g.y,g.z),m.set(-T*O,w,T*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+v,C)}if(M>0){const b=(M-1)*_;for(let N=0;N<s;N++){const R=b+N,I=b+N+1,O=M*_+N,V=M*_+N+1;a.push(R,I,O),a.push(I,V,O)}}}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Nr extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,h=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xt extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],p=[];let d=0;const _=[],m=n/2;let g=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(p,2));function M(){const S=new P,T=new P;let w=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const b=[],N=v/r,R=N*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,V=O*l+o,B=Math.sin(V),z=Math.cos(V);T.x=R*B,T.y=-N*n+m,T.z=R*z,f.push(T.x,T.y,T.z),S.set(B,C,z).normalize(),u.push(S.x,S.y,S.z),p.push(O,1-N),b.push(d++)}_.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){const N=_[b][v],R=_[b+1][v],I=_[b+1][v+1],O=_[b][v+1];(e>0||b!==0)&&(h.push(N,R,O),w+=3),(t>0||b!==r-1)&&(h.push(R,I,O),w+=3)}c.addGroup(g,w,0),g+=w}function E(S){const T=d,w=new we,C=new P;let v=0;const b=S===!0?e:t,N=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*N,0),u.push(0,N,0),p.push(.5,.5),d++;const R=d;for(let I=0;I<=s;I++){const V=I/s*l+o,B=Math.cos(V),z=Math.sin(V);C.x=b*z,C.y=m*N,C.z=b*B,f.push(C.x,C.y,C.z),u.push(0,N,0),w.x=B*.5+.5,w.y=z*.5*N+.5,p.push(w.x,w.y),d++}for(let I=0;I<s;I++){const O=T+I,V=R+I;S===!0?h.push(V,V+1,O):h.push(V+1,V,O),v+=3}c.addGroup(g,v,S===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class si extends xt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new si(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new Ke;for(let p=0;p<=e;p++){const d=p/e;s[p]=this.getTangentAt(d,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(He(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],p*d)),a[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jo extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pd extends jo{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,s(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ur=new P,Sa=new Ko,ba=new Ko,Ea=new Ko;class Qo extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),c=ur);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),d<1e-4&&(d=_),m<1e-4&&(m=_),Sa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,d,_,m),ba.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,d,_,m),Ea.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,d,_,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ba.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ea.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),Ea.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ic(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function md(i,e){const t=1-i;return t*t*e}function gd(i,e){return 2*(1-i)*i*e}function _d(i,e){return i*i*e}function Rs(i,e,t,n){return md(i,e)+gd(i,t)+_d(i,n)}function xd(i,e){const t=1-i;return t*t*t*e}function vd(i,e){const t=1-i;return 3*t*t*i*e}function Md(i,e){return 3*(1-i)*i*i*e}function yd(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return xd(i,e)+vd(i,t)+Md(i,n)+yd(i,s)}class Sd extends Xn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bd extends Xn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y),Ps(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ed extends Xn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Td extends Xn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Xn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends Xn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y),Rs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(ic(o,l.x,c.x,h.x,f.x),ic(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Cd=Object.freeze({__proto__:null,ArcCurve:pd,CatmullRomCurve3:Qo,CubicBezierCurve:Sd,CubicBezierCurve3:bd,EllipseCurve:jo,LineCurve:Ed,LineCurve3:Td,QuadraticBezierCurve:wd,QuadraticBezierCurve3:du,SplineCurve:Ad});class rn extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],d=[],_=[],m=[];for(let g=0;g<h;g++){const M=g*u-a;for(let E=0;E<c;E++){const S=E*f-r;d.push(S,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const E=M+c*g,S=M+c*(g+1),T=M+1+c*(g+1),w=M+1+c*g;p.push(E,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class el extends gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,p=new P,d=new we;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*a;p.x=f*Math.cos(g),p.y=f*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),d.x=(p.x/t+1)/2,d.y=(p.y/t+1)/2,h.push(d.x,d.y)}f+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const M=g+m,E=M,S=M+n+1,T=M+n+2,w=M+1;o.push(E,S,w),o.push(S,T,w)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ut extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new P,u=new P,p=[],d=[],_=[],m=[];for(let g=0;g<=n;g++){const M=[],E=g/n;let S=0;g===0&&a===0?S=.5/t:g===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const w=T/t;f.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),d.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(w+S,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const E=h[g][M+1],S=h[g][M],T=h[g+1][M],w=h[g+1][M+1];(g!==0||a>0)&&p.push(E,S,w),(g!==n-1||l<Math.PI)&&p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cs extends gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new P,p=new P,d=new P;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=s;g++){const M=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),d.subVectors(p,u).normalize(),h.push(d.x,d.y,d.z),f.push(g/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,S=(s+1)*_+m;l.push(g,M,S),l.push(M,E,S)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fr extends gt{constructor(e=new du(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new we;let h=new P;const f=[],u=[],p=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(p,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),g()}function m(E){h=e.getPointAt(E/t,h);const S=a.normals[E],T=a.binormals[E];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,v=Math.sin(C),b=-Math.cos(C);l.x=b*S.x+v*T.x,l.y=b*S.y+v*T.y,l.z=b*S.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function g(){for(let E=1;E<=t;E++)for(let S=1;S<=s;S++){const T=(s+1)*(E-1)+(S-1),w=(s+1)*E+(S-1),C=(s+1)*E+S,v=(s+1)*(E-1)+S;d.push(T,w,v),d.push(w,C,v)}}function M(){for(let E=0;E<=t;E++)for(let S=0;S<=s;S++)c.x=E/t,c.y=S/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fr(new Cd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const s in n)e[s]=n[s]}return e}function Rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Pd={clone:is,merge:Yt};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Id extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $t extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ud extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nd extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class nl extends tl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ta=new Ke,sc=new P,rc=new P;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Is||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hr=new P,dr=new gn,xn=new P;class mu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hr,dr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,dr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(hr,dr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,dr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,ac=new we,oc=new we;class Kt extends mu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,oc),t.subVectors(oc,ac)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fd extends pu{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Or extends tl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class il extends mu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Od extends pu{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sl extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Od}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Gi=-90,Hi=1;class Bd extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Gi,Hi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class zd extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const lc=new Ke;class rl{constructor(e,t,n=0,s=1/0){this.ray=new Ir(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)To(e[s],this,n,t);return n.sort(cc),n}}function cc(i,e){return i.distance-e.distance}function To(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)To(r[a],e,t,!0)}}function uc(i,e,t,n){const s=Vd(n);switch(t){case Qc:return i*e;case Bo:return i*e/s.components*s.byteLength;case zo:return i*e/s.components*s.byteLength;case ts:return i*e*2/s.components*s.byteLength;case ko:return i*e*2/s.components*s.byteLength;case eu:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Vo:return i*e*4/s.components*s.byteLength;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case $a:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Ja:case Za:case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _o:case xo:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vd(i){switch(i){case sn:case Jc:return{byteLength:1,components:1};case Ds:case Zc:case Hn:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case An:case No:case pn:return{byteLength:4,components:1};case jc:case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,d)=>p.start-d.start);let u=0;for(let p=1;p<f.length;p++){const d=f[u],_=f[p];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,d=f.length;p<d;p++){const _=f[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hm=`#define PHONG
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
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,_m=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ym=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:$d,aomap_fragment:Jd,aomap_pars_fragment:Zd,batching_pars_vertex:jd,batching_vertex:Kd,begin_vertex:Qd,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:hf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:vf,colorspace_fragment:Mf,colorspace_pars_fragment:yf,envmap_fragment:Sf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Lf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Hf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:Jf,map_fragment:Zf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:Qf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:up,normal_vertex:hp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:xp,premultiplied_alpha_fragment:vp,project_vertex:Mp,dithering_fragment:yp,dithering_pars_fragment:Sp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:wp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Pp,skinning_vertex:Dp,skinnormal_vertex:Lp,specularmap_fragment:Ip,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:$p,depth_vert:Jp,depth_frag:Zp,distance_vert:jp,distance_frag:Kp,equirect_vert:Qp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:um,meshphong_vert:hm,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:xm,shadow_vert:vm,shadow_frag:Mm,sprite_vert:ym,sprite_frag:Sm},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Sn={basic:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Yt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Yt([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Sn.physical={uniforms:Yt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const fr={r:0,b:0,g:0},pi=new Cn,bm=new Ke;function Em(i,e,t,n,s,r){const a=new Ue(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function d(M){let E=!1;const S=p(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){const S=p(E);S&&(S.isCubeTexture||S.mapping===Lr)?(c===void 0&&(c=new Pe(new Bt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:is(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),pi.copy(E.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(pi)),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==tt,(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pe(new rn(2,2),new Rn({name:"BackgroundMaterial",uniforms:is(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(fr,fu(i)),t.buffers.color.setClear(fr.r,fr.g,fr.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:d,addToRenderList:_,dispose:g}}function Tm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(R,I,O,V,B){let z=!1;const k=f(R,V,O,I);r!==k&&(r=k,c(r.object)),z=p(R,V,O,B),z&&d(R,V,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(R,I,O,V),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,I,O,V){const B=V.wireframe===!0;let z=n[I.id];z===void 0&&(z={},n[I.id]=z);const k=R.isInstancedMesh===!0?R.id:0;let Q=z[k];Q===void 0&&(Q={},z[k]=Q);let Z=Q[O.id];Z===void 0&&(Z={},Q[O.id]=Z);let ue=Z[B];return ue===void 0&&(ue=u(l()),Z[B]=ue),ue}function u(R){const I=[],O=[],V=[];for(let B=0;B<t;B++)I[B]=0,O[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:V,object:R,attributes:{},index:null}}function p(R,I,O,V){const B=r.attributes,z=I.attributes;let k=0;const Q=O.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const me=B[Z];let de=z[Z];if(de===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),me===void 0||me.attribute!==de||de&&me.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function d(R,I,O,V){const B={},z=I.attributes;let k=0;const Q=O.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let me=z[Z];me===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));const de={};de.attribute=me,me&&me.data&&(de.data=me.data),B[Z]=de,k++}r.attributes=B,r.attributesNum=k,r.index=V}function _(){const R=r.newAttributes;for(let I=0,O=R.length;I<O;I++)R[I]=0}function m(R){g(R,0)}function g(R,I){const O=r.newAttributes,V=r.enabledAttributes,B=r.attributeDivisors;O[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),B[R]!==I&&(i.vertexAttribDivisor(R,I),B[R]=I)}function M(){const R=r.newAttributes,I=r.enabledAttributes;for(let O=0,V=I.length;O<V;O++)I[O]!==R[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function E(R,I,O,V,B,z,k){k===!0?i.vertexAttribIPointer(R,I,O,B,z):i.vertexAttribPointer(R,I,O,V,B,z)}function S(R,I,O,V){_();const B=V.attributes,z=O.getAttributes(),k=I.defaultAttributeValues;for(const Q in z){const Z=z[Q];if(Z.location>=0){let ue=B[Q];if(ue===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const me=ue.normalized,de=ue.itemSize,Be=e.get(ue);if(Be===void 0)continue;const ft=Be.buffer,ht=Be.type,$=Be.bytesPerElement,ie=ht===i.INT||ht===i.UNSIGNED_INT||ue.gpuType===No;if(ue.isInterleavedBufferAttribute){const ae=ue.data,Fe=ae.stride,Ae=ue.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)g(Z.location+De,ae.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<Z.locationSize;De++)m(Z.location+De);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let De=0;De<Z.locationSize;De++)E(Z.location+De,de/Z.locationSize,ht,me,Fe*$,(Ae+de/Z.locationSize*De)*$,ie)}else{if(ue.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)g(Z.location+ae,ue.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let ae=0;ae<Z.locationSize;ae++)E(Z.location+ae,de/Z.locationSize,ht,me,de*$,de/Z.locationSize*ae*$,ie)}}else if(k!==void 0){const me=k[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Z.location,me);break;case 3:i.vertexAttrib3fv(Z.location,me);break;case 4:i.vertexAttrib4fv(Z.location,me);break;default:i.vertexAttrib1fv(Z.location,me)}}}}M()}function T(){b();for(const R in n){const I=n[R];for(const O in I){const V=I[O];for(const B in V){const z=V[B];for(const k in z)h(z[k].object),delete z[k];delete V[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const O in I){const V=I[O];for(const B in V){const z=V[B];for(const k in z)h(z[k].object),delete z[k];delete V[B]}}delete n[R.id]}function C(R){for(const I in n){const O=n[I];for(const V in O){const B=O[V];if(B[R.id]===void 0)continue;const z=B[R.id];for(const k in z)h(z[k].object),delete z[k];delete B[R.id]}}}function v(R){for(const I in n){const O=n[I],V=R.isInstancedMesh===!0?R.id:0,B=O[V];if(B!==void 0){for(const z in B){const k=B[z];for(const Q in k)h(k[Q].object),delete k[Q];delete B[z]}delete O[V],Object.keys(O).length===0&&delete n[I]}}}function b(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function wm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let d=0;d<f;d++)p+=h[d];t.update(p,n,1)}function l(c,h,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<c.length;d++)a(c[d],h[d],u[d]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_]*u[_];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Am(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!v)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:w}}function Cm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const d=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||d===null||d.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,E=M*4;let S=g.clippingState||null;l.value=S,S=h(d,u,E,p);for(let T=0;T!==E;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,d){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,d!==!0||m===null){const g=p+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,S=p;E!==_;++E,S+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const ni=4,hc=[.125,.215,.35,.446,.526,.582],_i=20,Rm=256,xs=new il,dc=new Ue;let wa=null,Aa=0,Ca=0,Ra=!1;const Pm=new P;class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pm}=r;wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Aa,Ca),this._renderer.xr.enabled=Ra,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Hn,format:mn,colorSpace:ns,depthBuffer:!1},s=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Im(r,e,t),this._ggxMaterial=Lm(r,e,t)}return s}_compileMaterial(e){const t=new Pe(new gt,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,s,r){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(dc),f.toneMapping=Tn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Bt,new It({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(dc),g=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const T=this._cubeSize;Wi(s,S*T,E>2?T:0,T,T),f.setRenderTarget(s),g&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Si||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,p=f*u,{_lodMax:d}=this,_=this._sizeLods[n],m=3*_*(n>d-ni?n-d+ni:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=d-t,Wi(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(o,xs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=d-n,Wi(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(o,xs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),_=r/d,m=isFinite(r)?1+Math.floor(h*_):_i;m>_i&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const g=[];let M=0;for(let C=0;C<_i;++C){const v=C/_,b=Math.exp(-v*v/2);g.push(b),C===0?M+=b:C<m&&(M+=2*b)}for(let C=0;C<g.length;C++)g[C]=g[C]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=d,u.mipInt.value=E-n;const S=this._sizeLods[s],T=3*S*(s>E-ni?s-E+ni:0),w=4*(this._cubeSize-S);Wi(t,T,w,3*S,2*S),l.setRenderTarget(t),l.render(f,xs)}}function Dm(i){const e=[],t=[],n=[];let s=i;const r=i-ni+1+hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ni?l=hc[a-i+ni-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,d=6,_=3,m=2,g=1,M=new Float32Array(_*d*p),E=new Float32Array(m*d*p),S=new Float32Array(g*d*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,v=w>2?0:-1,b=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(b,_*d*w),E.set(u,m*d*w);const N=[w,w,w,w,w,w];S.set(N,g*d*w)}const T=new gt;T.setAttribute("position",new on(M,_)),T.setAttribute("uv",new on(E,m)),T.setAttribute("faceIndex",new on(S,g)),n.push(new Pe(T,null)),s>ni&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pc(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lm(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Im(i,e,t){const n=new Float32Array(_i),s=new P(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Br(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function mc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}class _u extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:zn});r.uniforms.tEquirect.value=t;const a=new Pe(s,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Wt),new Bd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Um(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Zr||p===jr)if(e.has(u)){const d=e.get(u).texture;return o(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const _=new _u(d.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,d=p===Zr||p===jr,_=p===Si||p===es;if(d||_){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new fc(i)),m=d?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return d&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new fc(i)),m=d?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Zr?u.mapping=Si:p===jr&&(u.mapping=es),u}function l(u){let p=0;const d=6;for(let _=0;_<d;_++)u[_]!==void 0&&p++;return p===d}function c(u){const p=u.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const d in u.attributes)e.remove(u.attributes[d]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,d=f.attributes.position;let _=0;if(d===void 0)return;if(p!==null){const M=p.array;_=p.version;for(let E=0,S=M.length;E<S;E+=3){const T=M[E+0],w=M[E+1],C=M[E+2];u.push(T,w,w,C,C,T)}}else{const M=d.array;_=d.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const T=E+0,w=E+1,C=E+2;u.push(T,w,w,C,C,T)}}const m=new(d.count>=65535?au:ru)(u,1);m.version=_;const g=r.get(f);g&&e.remove(g),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Om(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,d){d!==0&&(i.drawElementsInstanced(n,p,r,u*a,d),t.update(p,n,d))}function h(u,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,d);let m=0;for(let g=0;g<d;g++)m+=p[g];t.update(m,n,1)}function f(u,p,d,_){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/a,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,d);let g=0;for(let M=0;M<d;M++)g+=p[M]*_[M];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Bm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let N=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var p=N;u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*f),v=new iu(C,T,w,f);v.type=pn,v.needsUpdate=!0;const b=S*4;for(let R=0;R<f;R++){const I=g[R],O=M[R],V=E[R],B=T*w*4*R;for(let z=0;z<I.count;z++){const k=z*b;d===!0&&(s.fromBufferAttribute(I,z),C[B+k+0]=s.x,C[B+k+1]=s.y,C[B+k+2]=s.z,C[B+k+3]=0),_===!0&&(s.fromBufferAttribute(O,z),C[B+k+4]=s.x,C[B+k+5]=s.y,C[B+k+6]=s.z,C[B+k+7]=0),m===!0&&(s.fromBufferAttribute(V,z),C[B+k+8]=s.x,C[B+k+9]=s.y,C[B+k+10]=s.z,C[B+k+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new we(T,w)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function km(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Vm={[Gc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function Gm(i,e,t,n,s){const r=new wn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new wn(e,t,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),o=new gt;o.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const l=new Id({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pe(o,l),h=new il(-1,1,1,-1,0,1);let f=null,u=null,p=!1,d,_=null,m=[],g=!1;this.setSize=function(M,E){r.setSize(M,E),a.setSize(M,E);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(M,E)}},this.setEffects=function(M){m=M,g=m.length>0&&m[0].isRenderPass===!0;const E=r.width,S=r.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(E,S)}},this.begin=function(M,E){if(p||M.toneMapping===Tn&&m.length===0)return!1;if(_=E,E!==null){const S=E.width,T=E.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return g===!1&&M.setRenderTarget(r),d=M.toneMapping,M.toneMapping=Tn,!0},this.hasRenderPass=function(){return g},this.end=function(M,E){M.toneMapping=d,p=!0;let S=r,T=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(M,T,S,E),C.needsSwap!==!1)){const v=S;S=T,T=v}}if(f!==M.outputColorSpace||u!==M.toneMapping){f=M.outputColorSpace,u=M.toneMapping,l.defines={},Ye.getTransfer(f)===tt&&(l.defines.SRGB_TRANSFER="");const w=Vm[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(_),M.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const xu=new Xt,wo=new Ns(1,1),vu=new iu,Mu=new Yh,yu=new uu,_c=[],xc=[],vc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Rt(t,n)}}function $m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Rt(t,n)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Rt(t,n)}}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function s0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wo.compareFunction=t.isReversedDepthBuffer()?Ho:Go,r=wo):r=xu,t.setTexture2D(e||r,s)}function r0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mu,s)}function a0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yu,s)}function o0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vu,s)}function l0(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return Jm;case 5124:case 35670:return Zm;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(i,e){i.uniform1fv(this.addr,e)}function u0(i,e){const t=us(e,this.size,2);i.uniform2fv(this.addr,t)}function h0(i,e){const t=us(e,this.size,3);i.uniform3fv(this.addr,t)}function d0(i,e){const t=us(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){const t=us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){const t=us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){const t=us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function _0(i,e){i.uniform2iv(this.addr,e)}function x0(i,e){i.uniform3iv(this.addr,e)}function v0(i,e){i.uniform4iv(this.addr,e)}function M0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function S0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function E0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wo:a=xu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function T0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mu,r[a])}function w0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yu,r[a])}function A0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vu,r[a])}function C0(i){switch(i){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return y0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}class R0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Sc(i,e){i.seq.push(e),i.map[e.id]=e}function L0(i,e,t){const n=i.name,s=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),a=Pa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sc(t,c===void 0?new R0(o,i,e):new P0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new D0(o),Sc(t,f)),t=f}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);L0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I0=37297;let U0=0;function N0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ec=new Oe;function F0(i){Ye._getMatrix(Ec,Ye.workingColorSpace,i);const e=`mat3( ${Ec.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Tr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+N0(i.getShaderSource(e),o)}else return r}function O0(i,e){const t=F0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const B0={[Gc]:"Linear",[Hc]:"Reinhard",[Wc]:"Cineon",[Uo]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function z0(i,e){const t=B0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new P;function k0(){Ye.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function G0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Es(i){return i!==""}function wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(W0,q0)}const X0=new Map;function q0(i,e){let t=ze[e];if(t===void 0){const n=X0.get(e);if(n!==void 0)t=ze[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(Y0,$0)}function $0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J0={[xr]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function Z0(i){return J0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j0={[Si]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function K0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":j0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q0={[es]:"ENVMAP_MODE_REFRACTION"};function eg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tg={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[hh]:"ENVMAP_BLENDING_ADD"};function ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tg[i.combine]||"ENVMAP_BLENDING_NONE"}function ig(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Z0(t),c=K0(t),h=eg(t),f=ng(t),u=ig(t),p=V0(t),d=G0(r),_=s.createProgram();let m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Es).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Es).join(`
`),g.length>0&&(g+=`
`)):(m=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),g=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Tn?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Ao(a),a=wc(a,t),a=Ac(a,t),o=Ao(o),o=wc(o,t),o=Ac(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=M+m+a,S=M+g+o,T=bc(s,s.VERTEX_SHADER,E),w=bc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(w)||"",B=I.trim(),z=O.trim(),k=V.trim();let Q=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const ue=Tc(s,T,"vertex"),me=Tc(s,w,"fragment");qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ue+`
`+me)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(Z=!1);Z&&(R.diagnostics={runnable:Q,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:g}})}s.deleteShader(T),s.deleteShader(w),v=new br(s,_),b=H0(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,I0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let rg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new og(e),t.set(e,n)),n}}class og{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}}function lg(i,e,t,n,s,r){const a=new qo,o=new ag,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,N,R,I){const O=R.fog,V=I.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||B,z),Q=k&&k.mapping===Lr?k.image.height:null,Z=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=ue!==void 0?ue.length:0;let de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Be,ft,ht,$;if(Z){const et=Sn[Z];Be=et.vertexShader,ft=et.fragmentShader}else Be=v.vertexShader,ft=v.fragmentShader,o.update(v),ht=o.getVertexShaderID(v),$=o.getFragmentShaderID(v);const ie=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,De=!!v.map,Pt=!!v.matcap,Xe=!!k,Qe=!!v.aoMap,rt=!!v.lightMap,ke=!!v.bumpMap,Mt=!!v.normalMap,D=!!v.displacementMap,Et=!!v.emissiveMap,je=!!v.metalnessMap,ot=!!v.roughnessMap,ye=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,Y=v.sheen>0,J=v.transmission>0,q=ye&&!!v.anisotropyMap,ge=A&&!!v.clearcoatMap,se=A&&!!v.clearcoatNormalMap,Te=A&&!!v.clearcoatRoughnessMap,Ce=U&&!!v.iridescenceMap,j=U&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,_e=Y&&!!v.sheenRoughnessMap,ve=!!v.specularMap,he=!!v.specularColorMap,Ve=!!v.specularIntensityMap,L=J&&!!v.transmissionMap,re=J&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,K=v.alphaTest>0,X=!!v.alphaHash,xe=!!v.extensions;let Le=Tn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=i.toneMapping);const lt={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:ft,defines:v.defines,customVertexShaderID:ht,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ns,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Pt,envMap:Xe,envMapMode:Xe&&k.mapping,envMapCubeUVHeight:Q,aoMap:Qe,lightMap:rt,bumpMap:ke,normalMap:Mt,displacementMap:D,emissiveMap:Et,normalMapObjectSpace:Mt&&v.normalMapType===ph,normalMapTangentSpace:Mt&&v.normalMapType===tu,metalnessMap:je,roughnessMap:ot,anisotropy:ye,anisotropyMap:q,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:x,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:he,specularIntensityMap:Ve,transmission:J,transmissionMap:L,thicknessMap:re,gradientMap:te,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:K,alphaHash:X,combine:v.combine,mapUv:De&&d(v.map.channel),aoMapUv:Qe&&d(v.aoMap.channel),lightMapUv:rt&&d(v.lightMap.channel),bumpMapUv:ke&&d(v.bumpMap.channel),normalMapUv:Mt&&d(v.normalMap.channel),displacementMapUv:D&&d(v.displacementMap.channel),emissiveMapUv:Et&&d(v.emissiveMap.channel),metalnessMapUv:je&&d(v.metalnessMap.channel),roughnessMapUv:ot&&d(v.roughnessMap.channel),anisotropyMapUv:q&&d(v.anisotropyMap.channel),clearcoatMapUv:ge&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&d(v.sheenRoughnessMap.channel),specularMapUv:ve&&d(v.specularMap.channel),specularColorMapUv:he&&d(v.specularColorMap.channel),specularIntensityMapUv:Ve&&d(v.specularIntensityMap.channel),transmissionMapUv:L&&d(v.transmissionMap.channel),thicknessMapUv:re&&d(v.thicknessMap.channel),alphaMapUv:pe&&d(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Mt||ye),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(De||pe),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(g(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){const b=p[v.type];let N;if(b){const R=Sn[b];N=Pd.clone(R.uniforms)}else N=v.uniforms;return N}function S(v,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new sg(i,b,v,s),c.push(N),h.set(b,N)),N}function T(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function cg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,d,_,m,g){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:d,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=d,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),e++,M}function l(u,p,d,_,m,g){const M=o(u,p,d,_,m,g);d.transmission>0?n.push(M):d.transparent===!0?s.push(M):t.push(M)}function c(u,p,d,_,m,g){const M=o(u,p,d,_,m,g);d.transmission>0?n.unshift(M):d.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||ug),n.length>1&&n.sort(p||Pc),s.length>1&&s.sort(p||Pc)}function f(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function hg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Dc,i.set(n,[a])):s>=r.length?(a=new Dc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ue};break;case"SpotLight":t={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pg=0;function mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gg(i){const e=new dg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Ke,a=new Ke;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,d=0,_=0,m=0,g=0,M=0,E=0,S=0,T=0,w=0,C=0;c.sort(mg);for(let b=0,N=c.length;b<N;b++){const R=c[b],I=R.color,O=R.intensity,V=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ts?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=I.r*O,f+=I.g*O,u+=I.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=z,p++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(I).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const k=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,k.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=B,S++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(I).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=B,n.pointShadowMatrix[d]=R.shadow.matrix,E++}n.point[d]=z,d++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[g]=z,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==p||v.pointLength!==d||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==M||v.numPointShadows!==E||v.numSpotShadows!==S||v.numSpotMaps!==T||v.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,v.directionalLength=p,v.pointLength=d,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=M,v.numPointShadows=E,v.numSpotShadows=S,v.numSpotMaps=T,v.numLightProbes=C,n.version=pg++)}function l(c,h){let f=0,u=0,p=0,d=0,_=0;const m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const E=c[g];if(E.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(E.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Lc(i){const e=new gg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _g(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lc(i),e.set(s,[o])):r>=a.length?(o=new Lc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],yg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ic=new Ke,vs=new P,Da=new P;function Sg(i,e,t){let n=new $o;const s=new we,r=new we,a=new vt,o=new Ud,l=new Nd,c={},h=t.maxTextureSize,f={[ii]:Qt,[Qt]:ii,[Ht]:Ht},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:xg,fragmentShader:vg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const d=new gt;d.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(d,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(w,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===kc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xr);const b=i.getRenderTarget(),N=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(zn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=g!==this.type;O&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(B=>B.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,B=w.length;V<B;V++){const z=w[V],k=z.shadow;if(k===void 0){Re("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Q=k.getFrameExtents();s.multiply(Q),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===bs){if(z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wn(s.x,s.y,{format:ts,type:Hn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ns(s.x,s.y,pn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Wn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot}else z.isPointLight?(k.map=new _u(s.x),k.map.depthTexture=new fd(s.x,An)):(k.map=new wn(s.x,s.y),k.map.depthTexture=new Ns(s.x,s.y,An)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Wn,this.type===xr?(k.map.depthTexture.compareFunction=Z?Ho:Go,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot);k.camera.updateProjectionMatrix()}const ue=k.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ue;me++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,me),i.clear();else{me===0&&(i.setRenderTarget(k.map),i.clear());const de=k.getViewport(me);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),I.viewport(a)}if(z.isPointLight){const de=k.camera,Be=k.matrix,ft=z.distance||de.far;ft!==de.far&&(de.far=ft,de.updateProjectionMatrix()),vs.setFromMatrixPosition(z.matrixWorld),de.position.copy(vs),Da.copy(de.position),Da.add(Mg[me]),de.up.copy(yg[me]),de.lookAt(Da),de.updateMatrixWorld(),Be.makeTranslation(-vs.x,-vs.y,-vs.z),Ic.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ic,de.coordinateSystem,de.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),S(C,v,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===bs&&M(k,v),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(b,N,R)};function M(w,C){const v=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wn(s.x,s.y,{format:ts,type:Hn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,v,p,_,null)}function E(w,C,v,b){let N=null;const R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)N=R;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=N.uuid,O=C.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let B=V[O];B===void 0&&(B=N.clone(),V[O]=B,C.addEventListener("dispose",T)),N=B}if(N.visible=C.visible,N.wireframe=C.wireframe,b===bs?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=i.properties.get(N);I.light=v}return N}function S(w,C,v,b,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===bs)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const B=O.groups;for(let z=0,k=B.length;z<k;z++){const Q=B[z],Z=V[Q.materialIndex];if(Z&&Z.visible){const ue=E(w,Z,b,N);w.onBeforeShadow(i,w,C,v,O,ue,Q),i.renderBufferDirect(v,null,O,ue,w,Q),w.onAfterShadow(i,w,C,v,O,ue,Q)}}}else if(V.visible){const B=E(w,V,b,N);w.onBeforeShadow(i,w,C,v,O,B,null),i.renderBufferDirect(v,null,O,B,w,null),w.onAfterShadow(i,w,C,v,O,B,null)}}const I=w.children;for(let O=0,V=I.length;O<V;O++)S(I[O],C,v,b,N)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const b=c[v],N=w.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function bg(i,e){function t(){let L=!1;const re=new vt;let te=null;const pe=new vt(0,0,0,0);return{setMask:function(K){te!==K&&!L&&(i.colorMask(K,K,K,K),te=K)},setLocked:function(K){L=K},setClear:function(K,X,xe,Le,lt){lt===!0&&(K*=Le,X*=Le,xe*=Le),re.set(K,X,xe,Le),pe.equals(re)===!1&&(i.clearColor(K,X,xe,Le),pe.copy(re))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,te=null,pe=null,K=null;return{setReversed:function(X){if(re!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=X;const Le=K;K=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(X){X?ie(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(X){te!==X&&!L&&(i.depthMask(X),te=X)},setFunc:function(X){if(re&&(X=Th[X]),pe!==X){switch(X){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=X}},setLocked:function(X){L=X},setClear:function(X){K!==X&&(K=X,re&&(X=1-X),i.clearDepth(X))},reset:function(){L=!1,te=null,pe=null,K=null,re=!1}}}function s(){let L=!1,re=null,te=null,pe=null,K=null,X=null,xe=null,Le=null,lt=null;return{setTest:function(et){L||(et?ie(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(et){re!==et&&!L&&(i.stencilMask(et),re=et)},setFunc:function(et,Pn,Dn){(te!==et||pe!==Pn||K!==Dn)&&(i.stencilFunc(et,Pn,Dn),te=et,pe=Pn,K=Dn)},setOp:function(et,Pn,Dn){(X!==et||xe!==Pn||Le!==Dn)&&(i.stencilOp(et,Pn,Dn),X=et,xe=Pn,Le=Dn)},setLocked:function(et){L=et},setClear:function(et){lt!==et&&(i.clearStencil(et),lt=et)},reset:function(){L=!1,re=null,te=null,pe=null,K=null,X=null,xe=null,Le=null,lt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],d=null,_=!1,m=null,g=null,M=null,E=null,S=null,T=null,w=null,C=new Ue(0,0,0),v=0,b=!1,N=null,R=null,I=null,O=null,V=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=k>=2);let Z=null,ue={};const me=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Be=new vt().fromArray(me),ft=new vt().fromArray(de);function ht(L,re,te,pe){const K=new Uint8Array(4),X=i.createTexture();i.bindTexture(L,X),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<te;xe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(re+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return X}const $={};$[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Qi),ke(!1),Mt(wl),ie(i.CULL_FACE),Qe(zn);function ie(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ae(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Fe(L,re){return f[L]!==re?(i.bindFramebuffer(L,re),f[L]=re,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(L,re){let te=p,pe=!1;if(L){te=u.get(re),te===void 0&&(te=[],u.set(re,te));const K=L.textures;if(te.length!==K.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,xe=K.length;X<xe;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=K.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function De(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const Pt={[gi]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Pt[Ju]=i.MIN,Pt[Zu]=i.MAX;const Xe={[ju]:i.ZERO,[Ku]:i.ONE,[Qu]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,re,te,pe,K,X,xe,Le,lt,et){if(L===zn){_===!0&&(ae(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),L!==qu){if(L!==m||et!==b){if((g!==gi||S!==gi)&&(i.blendEquation(i.FUNC_ADD),g=gi,S=gi),et)switch(L){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}M=null,E=null,T=null,w=null,C.set(0,0,0),v=0,m=L,b=et}return}K=K||re,X=X||te,xe=xe||pe,(re!==g||K!==S)&&(i.blendEquationSeparate(Pt[re],Pt[K]),g=re,S=K),(te!==M||pe!==E||X!==T||xe!==w)&&(i.blendFuncSeparate(Xe[te],Xe[pe],Xe[X],Xe[xe]),M=te,E=pe,T=X,w=xe),(Le.equals(C)===!1||lt!==v)&&(i.blendColor(Le.r,Le.g,Le.b,lt),C.copy(Le),v=lt),m=L,b=!1}function rt(L,re){L.side===Ht?ae(i.CULL_FACE):ie(i.CULL_FACE);let te=L.side===Qt;re&&(te=!te),ke(te),L.blending===Yi&&L.transparent===!1?Qe(zn):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function Mt(L){L!==Wu?(ie(i.CULL_FACE),L!==R&&(L===wl?i.cullFace(i.BACK):L===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),R=L}function D(L){L!==I&&(z&&i.lineWidth(L),I=L)}function Et(L,re,te){L?(ie(i.POLYGON_OFFSET_FILL),(O!==re||V!==te)&&(O=re,V=te,a.getReversed()&&(re=-re),i.polygonOffset(re,te))):ae(i.POLYGON_OFFSET_FILL)}function je(L){L?ie(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ot(L){L===void 0&&(L=i.TEXTURE0+B-1),Z!==L&&(i.activeTexture(L),Z=L)}function ye(L,re,te){te===void 0&&(Z===null?te=i.TEXTURE0+B-1:te=Z);let pe=ue[te];pe===void 0&&(pe={type:void 0,texture:void 0},ue[te]=pe),(pe.type!==L||pe.texture!==re)&&(Z!==te&&(i.activeTexture(te),Z=te),i.bindTexture(L,re||$[L]),pe.type=L,pe.texture=re)}function A(){const L=ue[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function J(){try{i.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Te(){try{i.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Ce(){try{i.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function j(){try{i.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function ee(L){Be.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function _e(L){ft.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function ve(L,re){let te=c.get(re);te===void 0&&(te=new WeakMap,c.set(re,te));let pe=te.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(re,L.name),te.set(L,pe))}function he(L,re){const pe=c.get(re).get(L);l.get(re)!==pe&&(i.uniformBlockBinding(re,pe,L.__bindingPointIndex),l.set(re,pe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,ue={},f={},u=new WeakMap,p=[],d=null,_=!1,m=null,g=null,M=null,E=null,S=null,T=null,w=null,C=new Ue(0,0,0),v=0,b=!1,N=null,R=null,I=null,O=null,V=null,Be.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:De,setBlending:Qe,setMaterial:rt,setFlipSided:ke,setCullFace:Mt,setLineWidth:D,setPolygonOffset:Et,setScissorTest:je,activeTexture:ot,bindTexture:ye,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ce,texImage3D:j,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:se,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:ee,viewport:_e,reset:Ve}}function Eg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,x){return p?new OffscreenCanvas(A,x):wr("canvas")}function _(A,x,U){let Y=1;const J=ye(A);if((J.width>U||J.height>U)&&(Y=U/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*J.width),ge=Math.floor(Y*J.height);f===void 0&&(f=d(q,ge));const se=x?d(q,ge):f;return se.width=q,se.height=ge,se.getContext("2d").drawImage(A,0,0,q,ge),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ge+")."),se}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function g(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,x,U,Y,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),x===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const ge=J?Tr:Ye.getTransfer(Y);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=ge===tt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(A,x){let U;return A?x===null||x===An||x===Ls?U=i.DEPTH24_STENCIL8:x===pn?U=i.DEPTH32F_STENCIL8:x===Ds&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===An||x===Ls?U=i.DEPTH_COMPONENT24:x===pn?U=i.DEPTH_COMPONENT32F:x===Ds&&(U=i.DEPTH_COMPONENT16),U}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),v(x),x.isVideoTexture&&h.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),N(x)}function v(A){const x=n.get(A);if(x.__webglInit===void 0)return;const U=A.source,Y=u.get(U);if(Y){const J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(Y).length===0&&u.delete(U)}n.remove(A)}function b(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const U=A.source,Y=u.get(U);delete Y[x.__cacheKey],a.memory.textures--}function N(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,J=U.length;Y<J;Y++){const q=n.get(U[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(A)}let R=0;function I(){R=0}function O(){const A=R;return A>=s.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function B(A,x){const U=n.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function z(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function k(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function Q(A,x){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){ie(U,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const Z={[Ha]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},ue={[Ot]:i.NEAREST,[dh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},me={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Go]:i.LEQUAL,[_h]:i.EQUAL,[Ho]:i.GEQUAL,[xh]:i.GREATER,[vh]:i.NOTEQUAL};function de(A,x){if(x.type===pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===Kr||x.magFilter===Vs||x.magFilter===xi||x.minFilter===Wt||x.minFilter===Kr||x.minFilter===Vs||x.minFilter===xi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==Vs&&x.minFilter!==xi||x.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Be(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const Y=x.source;let J=u.get(Y);J===void 0&&(J={},u.set(Y,J));const q=V(x);if(q!==A.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[q].usedTimes++;const ge=J[A.__cacheKey];ge!==void 0&&(J[A.__cacheKey].usedTimes--,ge.usedTimes===0&&b(x)),A.__cacheKey=q,A.__webglTexture=J[q].texture}return U}function ft(A,x,U){return Math.floor(Math.floor(A/U)/x)}function ht(A,x,U,Y){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,Y,x.data);else{q.sort((j,ee)=>j.start-ee.start);let ge=0;for(let j=1;j<q.length;j++){const ee=q[ge],_e=q[j],ve=ee.start+ee.count,he=ft(_e.start,x.width,4),Ve=ft(ee.start,x.width,4);_e.start<=ve+1&&he===Ve&&ft(_e.start+_e.count-1,x.width,4)===he?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ge,q[ge]=_e)}q.length=ge+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let j=0,ee=q.length;j<ee;j++){const _e=q[j],ve=Math.floor(_e.start/4),he=Math.ceil(_e.count/4),Ve=ve%x.width,L=Math.floor(ve/x.width),re=he,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ve,L,re,te,U,Y,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function $(A,x,U){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Be(A,x),q=x.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+U);const ge=n.get(q);if(q.version!==ge.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const se=Ye.getPrimaries(Ye.workingColorSpace),Te=x.colorSpace===ti?null:Ye.getPrimaries(x.colorSpace),Ce=x.colorSpace===ti||se===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let j=_(x.image,!1,s.maxTextureSize);j=ot(x,j);const ee=r.convert(x.format,x.colorSpace),_e=r.convert(x.type);let ve=E(x.internalFormat,ee,_e,x.colorSpace,x.isVideoTexture);de(Y,x);let he;const Ve=x.mipmaps,L=x.isVideoTexture!==!0,re=ge.__version===void 0||J===!0,te=q.dataReady,pe=T(x,j);if(x.isDepthTexture)ve=S(x.format===vi,x.type),re&&(L?t.texStorage2D(i.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ve,j.width,j.height,0,ee,_e,null));else if(x.isDataTexture)if(Ve.length>0){L&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ve[0].width,Ve[0].height);for(let K=0,X=Ve.length;K<X;K++)he=Ve[K],L?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,he.width,he.height,ee,_e,he.data):t.texImage2D(i.TEXTURE_2D,K,ve,he.width,he.height,0,ee,_e,he.data);x.generateMipmaps=!1}else L?(re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height),te&&ht(x,j,ee,_e)):t.texImage2D(i.TEXTURE_2D,0,ve,j.width,j.height,0,ee,_e,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Ve[0].width,Ve[0].height,j.depth);for(let K=0,X=Ve.length;K<X;K++)if(he=Ve[K],x.format!==mn)if(ee!==null)if(L){if(te)if(x.layerUpdates.size>0){const xe=uc(he.width,he.height,x.format,x.type);for(const Le of x.layerUpdates){const lt=he.data.subarray(Le*xe/he.data.BYTES_PER_ELEMENT,(Le+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Le,he.width,he.height,1,ee,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,j.depth,ee,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ve,he.width,he.height,j.depth,0,he.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,j.depth,ee,_e,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ve,he.width,he.height,j.depth,0,ee,_e,he.data)}else{L&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ve[0].width,Ve[0].height);for(let K=0,X=Ve.length;K<X;K++)he=Ve[K],x.format!==mn?ee!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ve,he.width,he.height,0,he.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,he.width,he.height,ee,_e,he.data):t.texImage2D(i.TEXTURE_2D,K,ve,he.width,he.height,0,ee,_e,he.data)}else if(x.isDataArrayTexture)if(L){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,j.width,j.height,j.depth),te)if(x.layerUpdates.size>0){const K=uc(j.width,j.height,x.format,x.type);for(const X of x.layerUpdates){const xe=j.data.subarray(X*K/j.data.BYTES_PER_ELEMENT,(X+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,j.width,j.height,1,ee,_e,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,ee,_e,j.data);else if(x.isData3DTexture)L?(re&&t.texStorage3D(i.TEXTURE_3D,pe,ve,j.width,j.height,j.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ee,_e,j.data)):t.texImage3D(i.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,ee,_e,j.data);else if(x.isFramebufferTexture){if(re)if(L)t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height);else{let K=j.width,X=j.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,K,X,0,ee,_e,null),K>>=1,X>>=1}}else if(Ve.length>0){if(L&&re){const K=ye(Ve[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,K.width,K.height)}for(let K=0,X=Ve.length;K<X;K++)he=Ve[K],L?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ee,_e,he):t.texImage2D(i.TEXTURE_2D,K,ve,ee,_e,he);x.generateMipmaps=!1}else if(L){if(re){const K=ye(j);t.texStorage2D(i.TEXTURE_2D,pe,ve,K.width,K.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,_e,j)}else t.texImage2D(i.TEXTURE_2D,0,ve,ee,_e,j);m(x)&&g(Y),ge.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ie(A,x,U){if(x.image.length!==6)return;const Y=Be(A,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const q=n.get(J);if(J.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const ge=Ye.getPrimaries(Ye.workingColorSpace),se=x.colorSpace===ti?null:Ye.getPrimaries(x.colorSpace),Te=x.colorSpace===ti||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Ce&&!j?ee[X]=_(x.image[X],!0,s.maxCubemapSize):ee[X]=j?x.image[X].image:x.image[X],ee[X]=ot(x,ee[X]);const _e=ee[0],ve=r.convert(x.format,x.colorSpace),he=r.convert(x.type),Ve=E(x.internalFormat,ve,he,x.colorSpace),L=x.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,te=J.dataReady;let pe=T(x,_e);de(i.TEXTURE_CUBE_MAP,x);let K;if(Ce){L&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,_e.width,_e.height);for(let X=0;X<6;X++){K=ee[X].mipmaps;for(let xe=0;xe<K.length;xe++){const Le=K[xe];x.format!==mn?ve!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Le.width,Le.height,0,Le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Le.width,Le.height,ve,he,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Le.width,Le.height,0,ve,he,Le.data)}}}else{if(K=x.mipmaps,L&&re){K.length>0&&pe++;const X=ye(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,X.width,X.height)}for(let X=0;X<6;X++)if(j){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,ve,he,ee[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ee[X].width,ee[X].height,0,ve,he,ee[X].data);for(let xe=0;xe<K.length;xe++){const lt=K[xe].image[X].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,lt.width,lt.height,ve,he,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,lt.width,lt.height,0,ve,he,lt.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,he,ee[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ve,he,ee[X]);for(let xe=0;xe<K.length;xe++){const Le=K[xe];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ve,he,Le.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,ve,he,Le.image[X])}}}m(x)&&g(i.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,U,Y,J,q){const ge=r.convert(U.format,U.colorSpace),se=r.convert(U.type),Te=E(U.internalFormat,ge,se,U.colorSpace),Ce=n.get(x),j=n.get(U);if(j.__renderTarget=x,!Ce.__hasExternalTextures){const ee=Math.max(1,x.width>>q),_e=Math.max(1,x.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Te,ee,_e,x.depth,0,ge,se,null):t.texImage2D(J,q,Te,ee,_e,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,j.__webglTexture,0,D(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,j.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=S(x.stencilBuffer,J),ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(x),q,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{const Y=x.textures;for(let J=0;J<Y.length;J++){const q=Y[J],ge=r.convert(q.format,q.colorSpace),se=r.convert(q.type),Te=E(q.internalFormat,ge,se,q.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(x),Te,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(x),Te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,x,U){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),de(i.TEXTURE_CUBE_MAP,x.depthTexture);const Ce=r.convert(x.depthTexture.format),j=r.convert(x.depthTexture.type);let ee;x.depthTexture.format===Wn?ee=i.DEPTH_COMPONENT24:x.depthTexture.format===vi&&(ee=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,x.width,x.height,0,Ce,j,null)}}else B(x.depthTexture,0);const q=J.__webglTexture,ge=D(x),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Te=x.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wn)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else if(x.depthTexture.format===vi)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else throw new Error("Unknown depthTexture format")}function De(A){const x=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Ae(x.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?Ae(x.__webglFramebuffer[0],A,0):Ae(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(x.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Fe(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(A,x,U){const Y=n.get(A);x!==void 0&&ae(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&De(A)}function Xe(A){const x=A.texture,U=n.get(A),Y=n.get(x);A.addEventListener("dispose",C);const J=A.textures,q=A.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let Te=0;Te<x.mipmaps.length;Te++)U.__webglFramebuffer[se][Te]=i.createFramebuffer()}else U.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)U.__webglFramebuffer[se]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,Te=J.length;se<Te;se++){const Ce=n.get(J[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Et(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Te=J[se];U.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Ce=r.convert(Te.format,Te.colorSpace),j=r.convert(Te.type),ee=E(Te.internalFormat,Ce,j,Te.colorSpace,A.isXRRenderTarget===!0),_e=D(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,U.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),de(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)ae(U.__webglFramebuffer[se][Te],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else ae(U.__webglFramebuffer[se],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,Te=J.length;se<Te;se++){const Ce=J[se],j=n.get(Ce);let ee=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,j.__webglTexture),de(ee,Ce),ae(U.__webglFramebuffer,A,Ce,i.COLOR_ATTACHMENT0+se,ee,0),m(Ce)&&g(ee)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),de(se,x),x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)ae(U.__webglFramebuffer[Te],A,x,i.COLOR_ATTACHMENT0,se,Te);else ae(U.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,se,0);m(x)&&g(se),t.unbindTexture()}A.depthBuffer&&De(A)}function Qe(A){const x=A.textures;for(let U=0,Y=x.length;U<Y;U++){const J=x[U];if(m(J)){const q=M(A),ge=n.get(J).__webglTexture;t.bindTexture(q,ge),g(q),t.unbindTexture()}}}const rt=[],ke=[];function Mt(A){if(A.samples>0){if(Et(A)===!1){const x=A.textures,U=A.width,Y=A.height;let J=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),se=x.length>1;if(se)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const j=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,J,i.NEAREST),l===!0&&(rt.length=0,ke.length=0,rt.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(q),ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const j=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function D(A){return Math.min(s.maxSamples,A.samples)}function Et(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ot(A,x){const U=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==ns&&U!==ti&&(Ye.getTransfer(U)===tt?(Y!==mn||J!==sn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",U)),x}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Pt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tg(i,e){function t(n,s=ti){let r;const a=Ye.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===eu)return i.RGB;if(n===mn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===vr||n===Mr||n===yr||n===Sr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===$a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Za||n===ja||n===Ka||n===Qa||n===eo||n===to)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Za)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===xo||n===vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===yo||n===So||n===bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`;class Cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:wg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends os{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,d=null;const _=typeof XRWebGLBinding<"u",m=new Cg,g={},M=t.getContextAttributes();let E=null,S=null;const T=[],w=[],C=new we;let v=null;const b=new Kt;b.viewport=new vt;const N=new Kt;N.viewport=new vt;const R=[b,N],I=new zd;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=T[$];return ie===void 0&&(ie=new sa,T[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=T[$];return ie===void 0&&(ie=new sa,T[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=T[$];return ie===void 0&&(ie=new sa,T[$]=ie),ie.getHandSpace()};function B($){const ie=w.indexOf($.inputSource);if(ie===-1)return;const ae=T[ie];ae!==void 0&&(ae.update($.inputSource,$.frame,c||a),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let $=0;$<T.length;$++){const ie=w[$];ie!==null&&(w[$]=null,T[$].disconnect(ie))}O=null,V=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(E),p=null,u=null,f=null,s=null,S=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Fe=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?vi:Wn,Fe=M.stencil?Ls:An);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new wn(u.textureWidth,u.textureHeight,{format:mn,type:sn,depthTexture:new Ns(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new wn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let ie=0;ie<$.removed.length;ie++){const ae=$.removed[ie],Fe=w.indexOf(ae);Fe>=0&&(w[Fe]=null,T[Fe].disconnect(ae))}for(let ie=0;ie<$.added.length;ie++){const ae=$.added[ie];let Fe=w.indexOf(ae);if(Fe===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(ae),Fe=De;break}else if(w[De]===null){w[De]=ae,Fe=De;break}if(Fe===-1)break}const Ae=T[Fe];Ae&&Ae.connect(ae)}}const Q=new P,Z=new P;function ue($,ie,ae){Q.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Fe=Q.distanceTo(Z),Ae=ie.projectionMatrix.elements,De=ae.projectionMatrix.elements,Pt=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),Qe=(Ae[9]+1)/Ae[5],rt=(Ae[9]-1)/Ae[5],ke=(Ae[8]-1)/Ae[0],Mt=(De[8]+1)/De[0],D=Pt*ke,Et=Pt*Mt,je=Fe/(-ke+Mt),ot=je*-ke;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ye=Pt+je,A=Xe+je,x=D-ot,U=Et+(Fe-ot),Y=Qe*Xe/A*ye,J=rt*Xe/A*ye;$.projectionMatrix.makePerspective(x,U,Y,J,ye,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,ae=$.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),I.near=N.near=b.near=ie,I.far=N.far=b.far=ae,(O!==I.near||V!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,V=I.far),I.layers.mask=$.layers.mask|6,b.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const Fe=$.parent,Ae=I.cameras;me(I,Fe);for(let De=0;De<Ae.length;De++)me(Ae[De],Fe);Ae.length===2?ue(I,b,N):I.projectionMatrix.copy(b.projectionMatrix),de($,I,Fe)};function de($,ie,ae){ae===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Us*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return g[$]};let Be=null;function ft($,ie){if(h=ie.getViewerPose(c||a),d=ie,h!==null){const ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let Xe=0;Xe<ae.length;Xe++){const Qe=ae[Xe];let rt=null;if(p!==null)rt=p.getViewport(Qe);else{const Mt=f.getViewSubImage(u,Qe);rt=Mt.viewport,Xe===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(S))}let ke=R[Xe];ke===void 0&&(ke=new Kt,ke.layers.enable(Xe),ke.viewport=new vt,R[Xe]=ke),ke.matrix.fromArray(Qe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Qe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Xe===0&&(I.matrix.copy(ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(ke)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Xe=f.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<ae.length;Xe++){const Qe=ae[Xe].camera;if(Qe){let rt=g[Qe];rt||(rt=new hu,g[Qe]=rt);const ke=f.getCameraImage(Qe);rt.sourceTexture=ke}}}}for(let ae=0;ae<T.length;ae++){const Fe=w[ae],Ae=T[ae];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ie,c||a)}Be&&Be($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),d=null}const ht=new gu;ht.setAnimationLoop(ft),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}}const mi=new Cn,Pg=new Ke;function Dg(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,fu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,E,S){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&p(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),d(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(mi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const S=E.program;n.uniformBlockBinding(M,S)}function c(M,E){let S=s[M.id];S===void 0&&(d(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(M,T);const w=e.render.frame;r[M.id]!==w&&(u(M),r[M.id]=w)}function h(M){const E=f();M.__bindingPointIndex=E;const S=i.createBuffer(),T=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=s[M.id],S=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,C=S.length;w<C;w++){const v=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,N=v.length;b<N;b++){const R=v[b];if(p(R,w,b,T)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let B=0;B<O.length;B++){const z=O[B],k=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+V,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,E,S,T){const w=M.value,C=E+"_"+S;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const v=T[C];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return T[C]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function d(M){const E=M.uniforms;let S=0;const T=16;for(let C=0,v=E.length;C<v;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let N=0,R=b.length;N<R;N++){const I=b[N],O=Array.isArray(I.value)?I.value:[I.value];for(let V=0,B=O.length;V<B;V++){const z=O[V],k=_(z),Q=S%T,Z=Q%k.boundary,ue=Q+Z;S+=Z,ue!==0&&T-ue<k.storage&&(S+=T-ue),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=k.storage}}}const w=S%T;return w>0&&(S+=T-w),M.__size=S,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}const Ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function Ug(){return vn===null&&(vn=new ou(Ig,16,16,ts,Hn),vn.name="DFG_LUT",vn.minFilter=Wt,vn.magFilter=Wt,vn.wrapS=Bn,vn.wrapT=Bn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class Ng{constructor(e={}){const{canvas:t=bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=p,m=new Set([Vo,ko,zo]),g=new Set([sn,An,Ds,Ls,Fo,Oo]),M=new Uint32Array(4),E=new Int32Array(4);let S=null,T=null;const w=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Ft;let R=0,I=0,O=null,V=-1,B=null;const z=new vt,k=new vt;let Q=null;const Z=new Ue(0);let ue=0,me=t.width,de=t.height,Be=1,ft=null,ht=null;const $=new vt(0,0,me,de),ie=new vt(0,0,me,de);let ae=!1;const Fe=new $o;let Ae=!1,De=!1;const Pt=new Ke,Xe=new P,Qe=new vt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Mt(){return O===null?Be:1}let D=n;function Et(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Io}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",lt,!1),D===null){const F="webgl2";if(D=Et(F,y),D===null)throw Et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw qe("WebGLRenderer: "+y.message),y}let je,ot,ye,A,x,U,Y,J,q,ge,se,Te,Ce,j,ee,_e,ve,he,Ve,L,re,te,pe;function K(){je=new Nm(D),je.init(),re=new Tg(D,je),ot=new Am(D,je,e,re),ye=new bg(D,je),ot.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),A=new Bm(D),x=new cg,U=new Eg(D,je,ye,x,ot,re,A),Y=new Um(b),J=new Gd(D),te=new Tm(D,J),q=new Fm(D,J,A,te),ge=new km(D,q,J,te,A),he=new zm(D,ot,U),ee=new Cm(x),se=new lg(b,Y,je,ot,te,ee),Te=new Dg(b,x),Ce=new hg,j=new _g(je),ve=new Em(b,Y,ye,ge,d,l),_e=new Sg(b,ge,ot),pe=new Lg(D,A,ot,ye),Ve=new wm(D,je,A),L=new Om(D,je,A),A.programs=se.programs,b.capabilities=ot,b.extensions=je,b.properties=x,b.renderLists=Ce,b.shadowMap=_e,b.state=ye,b.info=A}K(),_!==sn&&(v=new Gm(_,t.width,t.height,s,r));const X=new Rg(b,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(y){y!==void 0&&(Be=y,this.setSize(me,de,!1))},this.getSize=function(y){return y.set(me,de)},this.setSize=function(y,F,W=!0){if(X.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}me=y,de=F,t.width=Math.floor(y*Be),t.height=Math.floor(F*Be),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(me*Be,de*Be).floor()},this.setDrawingBufferSize=function(y,F,W){me=y,de=F,Be=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(_===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,F,W,H){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,F,W,H),ye.viewport(z.copy($).multiplyScalar(Be).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,F,W,H){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,F,W,H),ye.scissor(k.copy(ie).multiplyScalar(Be).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){ye.setScissorTest(ae=y)},this.setOpaqueSort=function(y){ft=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,W=!0){let H=0;if(y){let G=!1;if(O!==null){const le=O.texture.format;G=m.has(le)}if(G){const le=O.texture.type,fe=g.has(le),ce=ve.getClearColor(),Me=ve.getClearAlpha(),be=ce.r,Ne=ce.g,Ge=ce.b;fe?(M[0]=be,M[1]=Ne,M[2]=Ge,M[3]=Me,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=be,E[1]=Ne,E[2]=Ge,E[3]=Me,D.clearBufferiv(D.COLOR,0,E))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),ve.dispose(),Ce.dispose(),j.dispose(),x.dispose(),Y.dispose(),ge.dispose(),te.dispose(),pe.dispose(),se.dispose(),X.dispose(),X.removeEventListener("sessionstart",xl),X.removeEventListener("sessionend",vl),li.stop()};function xe(y){y.preventDefault(),Ul("WebGLRenderer: Context Lost."),N=!0}function Le(){Ul("WebGLRenderer: Context Restored."),N=!1;const y=A.autoReset,F=_e.enabled,W=_e.autoUpdate,H=_e.needsUpdate,G=_e.type;K(),A.autoReset=y,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=H,_e.type=G}function lt(y){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function et(y){const F=y.target;F.removeEventListener("dispose",et),Pn(F)}function Pn(y){Dn(y),x.remove(y)}function Dn(y){const F=x.get(y).programs;F!==void 0&&(F.forEach(function(W){se.releaseProgram(W)}),y.isShaderMaterial&&se.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,H,G,le){F===null&&(F=rt);const fe=G.isMesh&&G.matrixWorld.determinant()<0,ce=Bu(y,F,W,H,G);ye.setMaterial(H,fe);let Me=W.index,be=1;if(H.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;be=2}const Ne=W.drawRange,Ge=W.attributes.position;let Ee=Ne.start*be,nt=(Ne.start+Ne.count)*be;le!==null&&(Ee=Math.max(Ee,le.start*be),nt=Math.min(nt,(le.start+le.count)*be)),Me!==null?(Ee=Math.max(Ee,0),nt=Math.min(nt,Me.count)):Ge!=null&&(Ee=Math.max(Ee,0),nt=Math.min(nt,Ge.count));const yt=nt-Ee;if(yt<0||yt===1/0)return;te.setup(G,H,ce,W,Me);let _t,it=Ve;if(Me!==null&&(_t=J.get(Me),it=L,it.setIndex(_t)),G.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Mt()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(G.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),ye.setLineWidth(kt*Mt()),G.isLineSegments?it.setMode(D.LINES):G.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else G.isPoints?it.setMode(D.POINTS):G.isSprite&&it.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ar("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,Se=G._multiDrawCounts,en=G._multiDrawCount,$e=Me?J.get(Me).bytesPerElement:1,cn=x.get(H).currentProgram.getUniforms();for(let _n=0;_n<en;_n++)cn.setValue(D,"_gl_DrawID",_n),it.render(kt[_n]/$e,Se[_n])}else if(G.isInstancedMesh)it.renderInstances(Ee,yt,G.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,kt);it.renderInstances(Ee,yt,Se)}else it.render(Ee,yt)};function _l(y,F,W){y.transparent===!0&&y.side===Ht&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,ks(y,F,W),y.side=ii,y.needsUpdate=!0,ks(y,F,W),y.side=Ht):ks(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),T=j.get(W),T.init(F),C.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==W&&y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const ce=le[fe];_l(ce,W,G),H.add(ce)}else _l(le,W,G),H.add(le)}),T=C.pop(),H},this.compileAsync=function(y,F,W=null){const H=this.compile(y,F,W);return new Promise(G=>{function le(){if(H.forEach(function(fe){x.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){G(y);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $r=null;function Ou(y){$r&&$r(y)}function xl(){li.stop()}function vl(){li.start()}const li=new gu;li.setAnimationLoop(Ou),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){$r=y,X.setAnimationLoop(y),y===null?li.stop():li.start()},X.addEventListener("sessionstart",xl),X.addEventListener("sessionend",vl),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,H=v!==null&&(O===null||W)&&v.begin(b,O);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,F,O),T=j.get(y,C.length),T.init(F),C.push(T),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(Pt,En,F.reversedDepth),De=this.localClippingEnabled,Ae=ee.init(this.clippingPlanes,De),S=Ce.get(y,w.length),S.init(),w.push(S),X.enabled===!0&&X.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&Jr(fe,F,-1/0,b.sortObjects)}Jr(y,F,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ft,ht),ke=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ke&&ve.addToRenderList(S,y),this.info.render.frame++,Ae===!0&&ee.beginShadows();const G=T.state.shadowsArray;if(_e.render(G,y,F),Ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const fe=S.opaque,ce=S.transmissive;if(T.setupLights(),F.isArrayCamera){const Me=F.cameras;if(ce.length>0)for(let be=0,Ne=Me.length;be<Ne;be++){const Ge=Me[be];yl(fe,ce,y,Ge)}ke&&ve.render(y);for(let be=0,Ne=Me.length;be<Ne;be++){const Ge=Me[be];Ml(S,y,Ge,Ge.viewport)}}else ce.length>0&&yl(fe,ce,y,F),ke&&ve.render(y),Ml(S,y,F)}O!==null&&I===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),H&&v.end(b),y.isScene===!0&&y.onAfterRender(b,y,F),te.resetDefaultState(),V=-1,B=null,C.pop(),C.length>0?(T=C[C.length-1],Ae===!0&&ee.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Jr(y,F,W,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Fe.intersectsSprite(y)){H&&Qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const fe=ge.update(y),ce=y.material;ce.visible&&S.push(y,fe,ce,W,Qe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Fe.intersectsObject(y))){const fe=ge.update(y),ce=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Qe.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Qe.copy(fe.boundingSphere.center)),Qe.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(ce)){const Me=fe.groups;for(let be=0,Ne=Me.length;be<Ne;be++){const Ge=Me[be],Ee=ce[Ge.materialIndex];Ee&&Ee.visible&&S.push(y,fe,Ee,W,Qe.z,Ge)}}else ce.visible&&S.push(y,fe,ce,W,Qe.z,null)}}const le=y.children;for(let fe=0,ce=le.length;fe<ce;fe++)Jr(le[fe],F,W,H)}function Ml(y,F,W,H){const{opaque:G,transmissive:le,transparent:fe}=y;T.setupLightsView(W),Ae===!0&&ee.setGlobalState(b.clippingPlanes,W),H&&ye.viewport(z.copy(H)),G.length>0&&zs(G,F,W),le.length>0&&zs(le,F,W),fe.length>0&&zs(fe,F,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function yl(y,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ee=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new wn(1,1,{generateMipmaps:!0,type:Ee?Hn:sn,minFilter:xi,samples:ot.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const le=T.state.transmissionRenderTarget[H.id],fe=H.viewport||z;le.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const ce=b.getRenderTarget(),Me=b.getActiveCubeFace(),be=b.getActiveMipmapLevel();b.setRenderTarget(le),b.getClearColor(Z),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),ke&&ve.render(W);const Ne=b.toneMapping;b.toneMapping=Tn;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Ae===!0&&ee.setGlobalState(b.clippingPlanes,H),zs(y,W,H),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let nt=0,yt=F.length;nt<yt;nt++){const _t=F[nt],{object:it,geometry:kt,material:Se,group:en}=_t;if(Se.side===Ht&&it.layers.test(H.layers)){const $e=Se.side;Se.side=Qt,Se.needsUpdate=!0,Sl(it,W,H,kt,Se,en),Se.side=$e,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}b.setRenderTarget(ce,Me,be),b.setClearColor(Z,ue),Ge!==void 0&&(H.viewport=Ge),b.toneMapping=Ne}function zs(y,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,le=y.length;G<le;G++){const fe=y[G],{object:ce,geometry:Me,group:be}=fe;let Ne=fe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),ce.layers.test(W.layers)&&Sl(ce,F,W,Me,Ne,be)}}function Sl(y,F,W,H,G,le){y.onBeforeRender(b,F,W,H,G,le),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(b,F,W,H,y,le),G.transparent===!0&&G.side===Ht&&G.forceSinglePass===!1?(G.side=Qt,G.needsUpdate=!0,b.renderBufferDirect(W,F,H,G,y,le),G.side=ii,G.needsUpdate=!0,b.renderBufferDirect(W,F,H,G,y,le),G.side=Ht):b.renderBufferDirect(W,F,H,G,y,le),y.onAfterRender(b,F,W,H,G,le)}function ks(y,F,W){F.isScene!==!0&&(F=rt);const H=x.get(y),G=T.state.lights,le=T.state.shadowsArray,fe=G.state.version,ce=se.getParameters(y,G.state,le,F,W),Me=se.getProgramCacheKey(ce);let be=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=Y.get(y.envMap||H.environment,Ne),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",et),be=new Map,H.programs=be);let Ge=be.get(Me);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===fe)return El(y,ce),Ge}else ce.uniforms=se.getUniforms(y),y.onBeforeCompile(ce,b),Ge=se.acquireProgram(ce,Me),be.set(Me,Ge),H.uniforms=ce.uniforms;const Ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),El(y,ce),H.needsLights=ku(y),H.lightsStateVersion=fe,H.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function bl(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function El(y,F){const W=x.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Bu(y,F,W,H,G){F.isScene!==!0&&(F=rt),U.resetTextureUnits();const le=F.fog,fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ce=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ns,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,be=Y.get(H.envMap||fe,Me),Ne=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color;let _t=Tn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_t=b.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kt=it!==void 0?it.length:0,Se=x.get(H),en=T.state.lights;if(Ae===!0&&(De===!0||y!==B)){const Dt=y===B&&H.id===V;ee.setState(H,y,Dt)}let $e=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==en.state.version||Se.outputColorSpace!==ce||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==be||H.fog===!0&&Se.fog!==le||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ne||Se.vertexTangents!==Ge||Se.morphTargets!==Ee||Se.morphNormals!==nt||Se.morphColors!==yt||Se.toneMapping!==_t||Se.morphTargetsCount!==kt)&&($e=!0):($e=!0,Se.__version=H.version);let cn=Se.currentProgram;$e===!0&&(cn=ks(H,F,G));let _n=!1,ci=!1,Ci=!1;const at=cn.getUniforms(),Nt=Se.uniforms;if(ye.useProgram(cn.program)&&(_n=!0,ci=!0,Ci=!0),H.id!==V&&(V=H.id,ci=!0),_n||B!==y){ye.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",y.projectionMatrix),at.setValue(D,"viewMatrix",y.matrixWorldInverse);const Yn=at.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,Xe.setFromMatrixPosition(y.matrixWorld)),ot.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,ci=!0,Ci=!0)}if(Se.needsLights&&(en.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",en.state.directionalShadowMap,U),en.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",en.state.spotShadowMap,U),en.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",en.state.pointShadowMap,U)),G.isSkinnedMesh){at.setOptional(D,G,"bindMatrix"),at.setOptional(D,G,"bindMatrixInverse");const Dt=G.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),at.setValue(D,"boneTexture",Dt.boneTexture,U))}G.isBatchedMesh&&(at.setOptional(D,G,"batchingTexture"),at.setValue(D,"batchingTexture",G._matricesTexture,U),at.setOptional(D,G,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",G._indirectTexture,U),at.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",G._colorsTexture,U));const qn=W.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&he.update(G,W,cn),(ci||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,at.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Nt.envMapIntensity.value=F.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Ug()),ci&&(at.setValue(D,"toneMappingExposure",b.toneMappingExposure),Se.needsLights&&zu(Nt,Ci),le&&H.fog===!0&&Te.refreshFogUniforms(Nt,le),Te.refreshMaterialUniforms(Nt,H,Be,de,T.state.transmissionRenderTarget[y.id]),br.upload(D,bl(Se),Nt,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(br.upload(D,bl(Se),Nt,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(D,"center",G.center),at.setValue(D,"modelViewMatrix",G.modelViewMatrix),at.setValue(D,"normalMatrix",G.normalMatrix),at.setValue(D,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Dt=H.uniformsGroups;for(let Yn=0,Ri=Dt.length;Yn<Ri;Yn++){const Tl=Dt[Yn];pe.update(Tl,cn),pe.bind(Tl,cn)}}return cn}function zu(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function ku(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,F,W){const H=x.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(y.texture).__webglTexture=F,x.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const W=x.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Vu=D.createFramebuffer();this.setRenderTarget=function(y,F=0,W=0){O=y,R=F,I=W;let H=null,G=!1,le=!1;if(y){const ce=x.get(y);if(ce.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(D.FRAMEBUFFER,ce.__webglFramebuffer),z.copy(y.viewport),k.copy(y.scissor),Q=y.scissorTest,ye.viewport(z),ye.scissor(k),ye.setScissorTest(Q),V=-1;return}else if(ce.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(ce.__hasExternalTextures)U.rebindTextures(y,x.get(y.texture).__webglTexture,x.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(ce.__boundDepthTexture!==Ne){if(Ne!==null&&x.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const be=x.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[F])?H=be[F][W]:H=be[F],G=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?H=x.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,z.copy(y.viewport),k.copy(y.scissor),Q=y.scissorTest}else z.copy($).multiplyScalar(Be).floor(),k.copy(ie).multiplyScalar(Be).floor(),Q=ae;if(W!==0&&(H=Vu),ye.bindFramebuffer(D.FRAMEBUFFER,H)&&ye.drawBuffers(y,H),ye.viewport(z),ye.scissor(k),ye.setScissorTest(Q),G){const ce=x.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ce.__webglTexture,W)}else if(le){const ce=F;for(let Me=0;Me<y.textures.length;Me++){const be=x.get(y.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,be.__webglTexture,W,ce)}}else if(y!==null&&W!==0){const ce=x.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ce.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(y,F,W,H,G,le,fe,ce=0){if(!(y&&y.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){ye.bindFramebuffer(D.FRAMEBUFFER,Me);try{const be=y.textures[ce],Ne=be.format,Ge=be.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce),!ot.textureFormatReadable(Ne)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ge)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&W>=0&&W<=y.height-G&&D.readPixels(F,W,H,G,re.convert(Ne),re.convert(Ge),le)}finally{const be=O!==null?x.get(O).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,H,G,le,fe,ce=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me)if(F>=0&&F<=y.width-H&&W>=0&&W<=y.height-G){ye.bindFramebuffer(D.FRAMEBUFFER,Me);const be=y.textures[ce],Ne=be.format,Ge=be.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce),!ot.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(F,W,H,G,re.convert(Ne),re.convert(Ge),0);const nt=O!==null?x.get(O).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,nt);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eh(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Ee),D.deleteSync(yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,W=0){const H=Math.pow(2,-W),G=Math.floor(y.image.width*H),le=Math.floor(y.image.height*H),fe=F!==null?F.x:0,ce=F!==null?F.y:0;U.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,ce,G,le),ye.unbindTexture()};const Gu=D.createFramebuffer(),Hu=D.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,H=null,G=0,le=0){let fe,ce,Me,be,Ne,Ge,Ee,nt,yt;const _t=y.isCompressedTexture?y.mipmaps[le]:y.image;if(W!==null)fe=W.max.x-W.min.x,ce=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ne=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Nt=Math.pow(2,-G);fe=Math.floor(_t.width*Nt),ce=Math.floor(_t.height*Nt),y.isDataArrayTexture?Me=_t.depth:y.isData3DTexture?Me=Math.floor(_t.depth*Nt):Me=1,be=0,Ne=0,Ge=0}H!==null?(Ee=H.x,nt=H.y,yt=H.z):(Ee=0,nt=0,yt=0);const it=re.convert(F.format),kt=re.convert(F.type);let Se;F.isData3DTexture?(U.setTexture3D(F,0),Se=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Se=D.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),$e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),_n=D.getParameter(D.UNPACK_SKIP_ROWS),ci=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const Ci=y.isDataArrayTexture||y.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Nt=x.get(y),qn=x.get(F),Dt=x.get(Nt.__renderTarget),Yn=x.get(qn.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ri=0;Ri<Me;Ri++)Ci&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(y).__webglTexture,G,Ge+Ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(F).__webglTexture,le,yt+Ri)),D.blitFramebuffer(be,Ne,fe,ce,Ee,nt,fe,ce,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||x.has(y)){const Nt=x.get(y),qn=x.get(F);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Gu),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hu);for(let Dt=0;Dt<Me;Dt++)Ci?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,G,Ge+Dt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,G),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qn.__webglTexture,le,yt+Dt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qn.__webglTexture,le),G!==0?D.blitFramebuffer(be,Ne,fe,ce,Ee,nt,fe,ce,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(Se,le,Ee,nt,yt+Dt,be,Ne,fe,ce):D.copyTexSubImage2D(Se,le,Ee,nt,be,Ne,fe,ce);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Se,le,Ee,nt,yt,fe,ce,Me,it,kt,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,le,Ee,nt,yt,fe,ce,Me,it,_t.data):D.texSubImage3D(Se,le,Ee,nt,yt,fe,ce,Me,it,kt,_t):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Ee,nt,fe,ce,it,kt,_t.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Ee,nt,_t.width,_t.height,it,_t.data):D.texSubImage2D(D.TEXTURE_2D,le,Ee,nt,fe,ce,it,kt,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,_n),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ci),le===0&&F.generateMipmaps&&D.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(y){x.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,ye.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Fg{constructor(){this.ctx=null,this.playing=!1,this.preset="studio",this.cache=new Map,this.ready=null}async start(e){if(this.ready&&await this.ready,this.ctx){await this.ctx.resume(),this.playing=!0;return}const t=this.ctx=new AudioContext;await t.resume(),this.master=t.createGain(),this.master.gain.value=.65;const n=t.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=6,this.master.connect(n).connect(t.destination),this.dry=t.createGain(),this.dry.connect(this.master),this.rooms={};for(const[s,r,a]of[["studio",.35,3],["cathedral",5.5,2.8]]){const o=t.createConvolver(),l=t.createGain(),c=t.createBuffer(2,Math.ceil(t.sampleRate*r),t.sampleRate);let h=42;for(let f=0;f<2;f++)for(let u=0;u<c.length;u++){h=h*1664525+1013904223>>>0;const p=u/t.sampleRate;c.getChannelData(f)[u]=p<.018?0:(h/4294967296*2-1)*Math.pow(1-u/c.length,a)}o.buffer=c,o.connect(l).connect(this.master),this.rooms[s]={convolution:o,wet:l}}try{this.epoch=t.currentTime+.15,this.ready=Promise.all(e.map(s=>this.add(s))),await this.ready,this.ready=null,this.setPreset(this.preset),this.playing=!0}catch(s){throw e.forEach(r=>this.remove(r)),await t.close(),this.ctx=null,this.ready=null,this.cache.clear(),s}}async add(e){if(!(!e.sound||!this.ctx||e.audio||e.loading)){e.loading=!0;try{this.cache.has(e.sound)||this.cache.set(e.sound,(async()=>{const l=await fetch(`audio/${e.sound}.wav`);if(!l.ok)throw new Error(`Could not load ${e.sound}`);return this.ctx.decodeAudioData(await l.arrayBuffer())})().catch(l=>{throw this.cache.delete(e.sound),l}));const t=await this.cache.get(e.sound);if(e.removed)return;const n=this.ctx,s=n.createBufferSource(),r=n.createGain(),a=n.createPanner();s.buffer=t,s.loop=!0,r.gain.value=e.muted?0:e.volume,a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=2,a.maxDistance=25,a.rolloffFactor=1.2,s.connect(r).connect(a),a.connect(this.dry);for(const l of Object.values(this.rooms))a.connect(l.convolution);e.audio={player:s,gain:r,panner:a},this.move(e);const o=Math.max(n.currentTime+.03,this.epoch);s.start(o,Math.max(0,o-this.epoch)%t.duration)}finally{e.loading=!1}}}remove(e){e.audio&&(e.audio.player.stop(),e.audio.player.disconnect(),e.audio.gain.disconnect(),e.audio.panner.disconnect(),e.audio=null)}async toggle(e){if(!this.ctx)return this.start(e);this.playing?(await this.ctx.suspend(),this.playing=!1):(await this.ctx.resume(),this.playing=!0)}move(e){this.moveTo(e,e.x,e.z)}moveTo(e,t,n){if(e.audio){const s=e.audio.panner;s.positionX.value=t,s.positionY.value=1,s.positionZ.value=n}}mute(e){e.audio&&e.audio.gain.gain.setTargetAtTime(e.muted?0:e.volume,this.ctx.currentTime,.025)}setPreset(e){if(this.preset=e,!this.ctx||!this.rooms)return;const t=this.ctx.currentTime;this.dry.gain.setTargetAtTime(e==="studio"?.95:.66,t,.12),this.rooms.studio.wet.gain.setTargetAtTime(e==="studio"?.15:0,t,.15),this.rooms.cathedral.wet.gain.setTargetAtTime(e==="cathedral"?.85:0,t,.15)}listener(e){if(!this.ctx)return;const t=this.ctx.listener,n=e.position,s=e.matrixWorld.elements;t.positionX?(t.positionX.value=n.x,t.positionY.value=n.y,t.positionZ.value=n.z,t.forwardX.value=-s[8],t.forwardY.value=-s[9],t.forwardZ.value=-s[10],t.upX.value=s[4],t.upY.value=s[5],t.upZ.value=s[6]):(t.setPosition(n.x,n.y,n.z),t.setOrientation(-s[8],-s[9],-s[10],s[4],s[5],s[6]))}}class Og extends Fg{constructor(){super(),this.mixerOpen=!1}attach(){return Promise.resolve()}prepare(){}openMixer(){}closeMixer(){}setBirdActive(){}async start(e,t=[]){return super.start([...e,...t.map(n=>n.player)])}async toggle(e,t=[]){return super.toggle([...e,...t.map(n=>n.player)])}addTrace(e){return this.add(e)}removeTrace(e){this.remove(e)}moveTrace(e,t,n){this.moveTo(e,t,n)}muteTrace(e){this.mute(e)}diagnostics(){var e;return{provider:"Original procedural loops / Web Audio",playing:this.playing,context:(e=this.ctx)==null?void 0:e.state}}}const Er={calm:{energy:.2,nature:.6,dreaminess:.2},wonder:{energy:.45,nature:.95,dreaminess:.85},freedom:{energy:.8,nature:.45,dreaminess:.5}},Bg={energy:.68,nature:.9,dreaminess:.42};function zg(i="",e=""){const t=(i+" "+e).toLowerCase(),n={.../adventur|free|energet|explor/.test(t)?Er.freedom:/wonder|curious|inspir|magic/.test(t)?Er.wonder:Er.calm};return/garden|forest|grove|lush/.test(t)&&(n.nature=.95),/beach|shore|ocean/.test(t)&&(n.nature=.25),/glow|float|imaginar|dream|surreal/.test(t)&&(n.dreaminess=.9),n}function Ji(i,e){const t=i/13,n=(e-10)/18,s=Math.hypot(t,n);return s>1?{x:i/s,z:10+(e-10)/s}:{x:i,z:e}}function Mi(i,e){const t=Math.hypot(i+8,e-21);return Math.max(0,1-t/4.2)*1.5}function kg(i,e){const t=new st;t.name="Inner Eden - shore grove overlook",e.add(t);const n=(N,R={})=>new $t({color:N,roughness:.85,...R}),s=n("#e7cb92"),r=n("#82b66a"),a=n("#9b7652"),o=n("#50a876");function l(N,R,I,O,V,B=t){const z=new Pe(N,R);return z.position.set(I,O,V),B.add(z),z}l(new xt(1,1.04,.7,64),s,0,-.4,10).scale.set(14,1,19);const h=n("#57bbcb",{roughness:.3,metalness:.12}),f=l(new rn(180,180,36,36),h,0,-.47,9);f.rotation.x=-Math.PI/2;const u=l(new Nr(5.5,48),r,4,-.015,16);u.rotation.x=-Math.PI/2,l(new si(4.2,1.5,48),r,-8,.7,21);const p=l(new rn(.8,9),n("#7cd5ce",{roughness:.2}),4,.025,14);p.rotation.x=-Math.PI/2,p.rotation.z=.25;const d=[];for(let N=0;N<28;N++){const R=N*2.39996,I=2.1+N%6*.65,O=4+Math.cos(R)*I,V=16+Math.sin(R)*I,B=new st;B.position.set(O,0,V),t.add(B),l(new xt(.07,.15,2.5,7),a,0,1.25,0,B),l(new ut(.9,10,8),o,0,2.5,0,B).scale.set(1,1.3,1),d.push(B)}for(const[N,R]of[[-10,1],[-9,8],[-11,12]]){const I=l(new xt(.1,.2,3.4,8),a,N,1.7,R);I.rotation.z=.16;for(let O=0;O<6;O++){const V=l(new ut(1,8,6),o,N+Math.cos(O)*.6,3.4,R+Math.sin(O)*.6);V.scale.set(.35,.1,1.5),V.rotation.y=O}}const _=n("#d9a680");l(new ut(1,16,8),_,-9,.7,5).scale.set(1.7,.12,.55);for(const N of[-10.7,-7.3])l(new xt(.07,.07,1.7,8),a,N,.85,5);const g=n("#b5f0c9",{emissive:"#66f4c0",emissiveIntensity:.4});for(let N=0;N<30;N++){const R=N*2.4,I=1+N%8*.45,O=l(new ut(.08,6,5),g,4+Math.cos(R)*I,.3+N%4*.13,16+Math.sin(R)*I);O.name="Glowing grove blossom"}const M=new Float32Array(540);for(let N=0;N<M.length;N+=3)M[N]=Math.sin(N*7.3)*11,M[N+1]=.6+N%17*.22,M[N+2]=2+N%29*.75;const E=new gt;E.setAttribute("position",new on(M,3));const S=new cu(E,new Jo({color:"#fff4b4",size:.045,transparent:!0,opacity:.6,depthWrite:!1}));t.add(S),l(new ut(6,20,12),new It({color:"#ffe5b1"}),-48,20,-65);const T=new nl("#fff2d3","#a7bb91",2.4);t.add(T);const w=new sl("#ffedcb",2.1);w.position.set(-10,15,3),t.add(w);function C(N,R,I,O){const V=document.createElement("canvas");V.width=768,V.height=128;const B=V.getContext("2d");B.fillStyle="#214b44",B.fillRect(0,0,768,128),B.fillStyle="#f4f2dd",B.font="36px system-ui",B.textAlign="center",B.fillText(N,384,78);const z=new Ur(V);z.colorSpace=Ft;const k=l(new rn(2.4,.4),new It({map:z,side:Ht}),R,I,O);k.rotation.y=Math.PI}C("THE SHORE - rest & spaciousness",-9,1.6,2),C("THE GROVE - curiosity & wonder",4,1.6,11.5),C("THE OVERLOOK - freedom & possibility",-8,2.4,18);let v={...Bg},b={...v};return{root:t,target:b,set(N){for(const R of["energy","nature","dreaminess"])Number.isFinite(N[R])&&(b[R]=bt.clamp(N[R],0,1))},update(N,R){for(const z of Object.keys(v))v[z]=bt.lerp(v[z],b[z],1-Math.exp(-N*1.8));const{energy:I,nature:O,dreaminess:V}=v;i.background=new Ue("#c0e5e9").lerp(new Ue("#b6a5dc"),V*.5),i.fog&&(i.fog.color.copy(i.background),i.fog.density=.006),T.intensity=2.1+I*.6,w.intensity=1.8+I*.5,o.color.set("#59aa74").lerp(new Ue("#7dcbac"),V*.4),r.color.set("#91b66f"),g.emissiveIntensity=.25+V*2,g.color.set("#a1dbaa").lerp(new Ue("#b7bcff"),V);for(let z=0;z<d.length;z++)d[z].visible=z<8+Math.floor(O*20),d[z].rotation.z=Math.sin(R*(.3+I)+z)*(.008+I*.02);S.material.opacity=.12+V*.65,S.rotation.y=R*(.005+I*.008),h.color.set("#62c8cd").lerp(new Ue("#83aed1"),V*.4);const B=f.geometry.attributes.position;for(let z=0;z<B.count;z++){const k=B.getX(z),Q=B.getY(z);B.setZ(z,Math.sin(k*.22+R*(.4+I))*Math.cos(Q*.19+R*.3)*(.025+I*.1))}B.needsUpdate=!0},get settings(){return v}}}const Uc=[{id:"shore",label:"Ocean waves",x:-9,y:1,z:5,frequency:320,type:"lowpass"},{id:"stream",label:"Grove stream",x:4,y:.4,z:15,frequency:1500,type:"lowpass"},{id:"wind",label:"Overlook wind",x:-8,y:1,z:21,frequency:650,type:"lowpass"},{id:"fountain",label:"Fountain water and splashes",x:0,y:.85,z:6,frequency:1100,type:"bandpass"},{id:"entrance-leaves",label:"Entrance hedge rustling",x:-1.55,y:.8,z:1.6,frequency:2400,type:"bandpass"},{id:"back-leaves",label:"Back hedge rustling",x:0,y:.8,z:11,frequency:1900,type:"bandpass"},{id:"grove-leaves",label:"Grove canopy rustling",x:4,y:2.5,z:17,frequency:2800,type:"bandpass"}],wt=[{id:"fountain",label:"Fountain & splashes",level:.65},{id:"birds",label:"Garden birds",level:.8},{id:"entrance-leaves",label:"Entrance leaves",level:.6},{id:"back-leaves",label:"Back hedge",level:.55},{id:"grove-leaves",label:"Tree canopy",level:.65},{id:"stream",label:"Grove stream",level:.6},{id:"shore",label:"Ocean waves",level:.5},{id:"wind",label:"Soft breeze",level:.3},{id:"chimes",label:"Gentle chimes",level:.45},{id:"insects",label:"Meadow crickets",level:.3}];class Vg{constructor(){this.ctx=null,this.nodes=[],this.instances=[],this.serial=0,this.active=!1,this.volume=1,this.buses=new Map,this.observers=new Set,this.mix=new Map(wt.map(e=>[e.id,{level:e.level,muted:!1}]));try{const e=JSON.parse(localStorage.getItem("inner-eden-mix-v1"));for(const t of wt){const n=e==null?void 0:e[t.id];n&&Number.isFinite(n.level)&&typeof n.muted=="boolean"&&this.mix.set(t.id,{level:bt.clamp(n.level,0,1),muted:n.muted})}}catch{}}channels(){return[...wt,...this.instances].map(e=>({...e,...this.mix.get(e.id)}))}channelGain(e){const t=this.mix.get(e);return t&&!t.muted?t.level*2:0}setChannel(e,t){const n=this.mix.get(e);!n||!Number.isFinite(t)||(n.level=bt.clamp(t,0,1),this.changed())}toggleChannel(e){const t=this.mix.get(e);t&&(t.muted=!t.muted,this.changed())}muteAll(e=!0){for(const t of this.mix.values())t.muted=e;this.changed()}resetMix(){for(const e of[...wt,...this.instances])this.mix.set(e.id,{level:e.level,muted:!1});this.changed()}subscribe(e){return this.observers.add(e),()=>this.observers.delete(e)}changed(){try{localStorage.setItem("inner-eden-mix-v1",JSON.stringify(Object.fromEntries(this.mix)))}catch{}this.applyMix();for(const e of this.observers)e()}applyMix(){if(this.ctx)for(const[e,t]of this.buses)t.gain.setTargetAtTime(this.channelGain(e),this.ctx.currentTime,.06)}setMasterVolume(e){Number.isFinite(e)&&(this.volume=bt.clamp(e,0,2))}async start(){if(this.ctx){await this.ctx.resume();return}const e=this.ctx=new AudioContext;await e.resume(),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);for(const r of[...wt,...this.instances]){const a=e.createGain();a.gain.value=this.channelGain(r.id),a.connect(this.master),this.buses.set(r.id,a)}const t=this.noiseBuffer=e.createBuffer(1,e.sampleRate*8,e.sampleRate),n=t.getChannelData(0);let s=81;for(let r=0;r<n.length;r++){s=s*1664525+1013904223>>>0;const a=Math.min(1,r/(e.sampleRate*.01),(n.length-r-1)/(e.sampleRate*.01));n[r]=(s/4294967296*2-1)*a}for(const[r,a]of Uc.entries()){const{x:o,y:l,z:c,frequency:h,type:f}=a,u=e.createBufferSource(),p=e.createBiquadFilter(),d=e.createGain(),_=e.createPanner();u.buffer=t,u.loop=!0,p.type=f,p.frequency.value=h,p.Q.value=.6,d.gain.value=0,_.panningModel="HRTF",_.distanceModel="inverse",_.refDistance=a.id==="fountain"?2:3,_.maxDistance=60,_.rolloffFactor=1,_.positionX.value=o,_.positionY.value=l,_.positionZ.value=c,u.connect(p).connect(d).connect(_).connect(this.buses.get(a.id)),u.start(0,r*.73%8),this.nodes.push({...a,source:u,gain:d,filter:p,pan:_})}for(const r of this.instances)this.connectInstance(r)}addInstance(e,t){const n=wt.find(a=>a.id===e);if(!n||this.instances.length>=16)return null;const s="placed-"+ ++this.serial,r={id:s,soundId:e,label:n.label+" #"+this.serial,level:.65,x:t.x,y:t.y??1,z:t.z};return this.instances.push(r),this.mix.set(s,{level:r.level,muted:!1}),this.master&&this.connectInstance(r),this.changed(),r}connectInstance(e){const t=this.ctx;if(!this.buses.has(e.id)){const l=t.createGain();l.gain.value=this.channelGain(e.id),l.connect(this.master),this.buses.set(e.id,l)}const n=Uc.find(l=>l.id===e.soundId);if(!n)return;const s=t.createBufferSource(),r=t.createBiquadFilter(),a=t.createGain(),o=t.createPanner();s.buffer=this.noiseBuffer,s.loop=!0,r.type=n.type,r.frequency.value=n.frequency,r.Q.value=.6,a.gain.value=0,o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=2,o.rolloffFactor=1,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,s.connect(r).connect(a).connect(o).connect(this.buses.get(e.id)),s.start(),this.nodes.push({...e,source:s,filter:r,gain:a,pan:o})}removeInstance(e){var n;const t=this.instances.findIndex(s=>s.id===e);if(!(t<0)){this.instances.splice(t,1);for(const s of this.nodes.filter(r=>r.id===e))s.source.stop(),s.source.disconnect(),s.filter.disconnect(),s.gain.disconnect(),s.pan.disconnect();this.nodes=this.nodes.filter(s=>s.id!==e),(n=this.buses.get(e))==null||n.disconnect(),this.buses.delete(e),this.mix.delete(e),this.changed()}}update(e,t,n){if(!this.ctx||!this.master)return;const s=this.ctx,r=this.active?1:0;if(this.master.gain.setTargetAtTime(r*this.volume,s.currentTime,.2),this.nodes.forEach(f=>{let u;const p=f.soundId||f.id;if(p==="shore")u=.075+.025*Math.sin(n*.45);else if(p==="stream")u=.045+t.nature*.045;else if(p==="wind")u=.025+t.energy*.055;else if(p==="fountain")u=(.1+t.energy*.035)*(.8+.12*Math.sin(n*3.7)+.08*Math.sin(n*8.3));else{const d=f.x+f.z,_=.45+.2*Math.sin(n*(.7+t.energy)+d)+.15*Math.sin(n*4.7+d);u=(.025+t.nature*.04+t.energy*.04)*_}f.gain.gain.setTargetAtTime(r*u,s.currentTime,.2)}),this.active&&s.currentTime>=(this.nextDrop||0)&&(this.tone(650+(Math.sin(n*13)*.5+.5)*800,Math.sin(n*7)*.35,6+Math.cos(n*5)*.3,.013+t.energy*.008,"drop"),this.nextDrop=s.currentTime+.18+(1-t.energy)*.25),this.active&&s.currentTime>=(this.nextBird||0)&&(this.tone(1800+t.energy*900,4,17,.012+t.energy*.012,!0),this.nextBird=s.currentTime+2+(1-t.energy)*5),this.active&&t.dreaminess>.3&&s.currentTime>=(this.nextChime||0)){const f=[261.63,329.63,392,523.25,659.25];this.tone(f[Math.floor(n/5)%f.length],-8,21,.014,!1),this.nextChime=s.currentTime+5}this.active&&t.nature>.35&&s.currentTime>=(this.nextInsect||0)&&(this.tone(3400+Math.sin(n)*250,5,14,.006,"insect"),this.nextInsect=s.currentTime+1.8+(1-t.energy)*2);for(const f of this.instances)if(!(!this.active||s.currentTime<(f.next||0))&&["birds","chimes","insects"].includes(f.soundId)){const u=f.soundId==="birds"?!0:f.soundId==="insects"?"insect":!1;this.tone(f.soundId==="birds"?2300:f.soundId==="insects"?3500:523.25,f.x,f.z,f.soundId==="insects"?.008:.025,u,f.id,f.y),f.next=s.currentTime+(f.soundId==="chimes"?4:2)}const a=new P,o=new gn;e.getWorldPosition(a),e.getWorldQuaternion(o);const l=new P(0,0,-1).applyQuaternion(o),c=new P(0,1,0).applyQuaternion(o),h=s.listener;h.positionX&&(h.positionX.value=a.x,h.positionY.value=a.y,h.positionZ.value=a.z,h.forwardX.value=l.x,h.forwardY.value=l.y,h.forwardZ.value=l.z,h.upX.value=c.x,h.upY.value=c.y,h.upZ.value=c.z)}tone(e,t,n,s,r,a=null,o=null){const l=this.ctx,c=l.createOscillator(),h=l.createGain(),f=l.createPanner(),u=l.currentTime,p=r==="drop"?.18:r==="insect"?.4:r?.25:2;c.type="sine",c.frequency.setValueAtTime(e,u),r&&c.frequency.exponentialRampToValueAtTime(e*(r==="drop"?.48:1.5),u+p*.7),h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(s,u+.012),h.gain.exponentialRampToValueAtTime(1e-4,u+p),f.panningModel="HRTF",f.refDistance=3,f.positionX.value=t,f.positionY.value=o??(r==="drop"?.8:2),f.positionZ.value=n;const d=r==="drop"?"fountain":r==="insect"?"insects":r?"birds":"chimes";c.connect(h).connect(f).connect(this.buses.get(a||d)||this.master),c.start(),c.stop(u+p),c.onended=()=>{c.disconnect(),h.disconnect(),f.disconnect()}}}function Gg(i,{x:e=0,z:t=-2,title:n="Return to bedroom",onOpen:s=()=>{}}={}){const r=new st;r.position.set(e,0,t),i.add(r);const a=new $t({color:"#b09266"}),o=new st;o.position.x=-.65,r.add(o);const l=new Pe(new Bt(1.3,2.5,.12),a);l.position.set(.65,1.25,0),o.add(l);const c=new Pe(new Bt(1.6,.16,.2),a);c.position.set(0,2.63,0),r.add(c);for(const _ of[-.74,.74]){const m=new Pe(new Bt(.12,2.65,.2),a);m.position.set(_,1.3,0),r.add(m)}const h=document.createElement("canvas");h.width=640,h.height=128;const f=h.getContext("2d");f.fillStyle="#244a43",f.fillRect(0,0,640,128),f.fillStyle="#fff3d5",f.textAlign="center",f.font="30px system-ui",f.fillText(n,320,76);const u=new Ur(h);u.colorSpace=Ft;const p=new Pe(new rn(1.65,.33),new It({map:u,side:Ht}));p.position.set(0,2.95,.05),r.add(p);let d=!1;return l.userData.portal=()=>{d||(d=!0),s()},{group:r,leaf:o,hit:l,get opened(){return d},reset(){d=!1,o.rotation.y=0},update(_){o.rotation.y=bt.lerp(o.rotation.y,d?-Math.PI*.48:0,1-Math.exp(-_*6))},open(){l.userData.portal()}}}const Pr=[{type:"fountain",name:"Small fountain",sound:"fountain"},{type:"birdhouse",name:"Birdhouse",sound:"birds"},{type:"tree",name:"Leafy tree",sound:"grove-leaves"},{type:"hedge",name:"Rustling hedge",sound:"entrance-leaves"},{type:"stream",name:"Water garden",sound:"stream"},{type:"waves",name:"Wave pool",sound:"shore"},{type:"breeze",name:"Breeze sculpture",sound:"wind"},{type:"chimes",name:"Wind chimes",sound:"chimes"},{type:"flowers",name:"Cricket meadow",sound:"insects"}];class Hg{constructor(e,t,n){this.root=e,this.audio=t,this.getView=n,this.items=[],this.selected=null}ahead(){const e=this.getView(),t=new P,n=new gn;e.getWorldPosition(t),e.getWorldQuaternion(n);const s=new P(0,0,-1).applyQuaternion(n);return s.y=0,s.normalize(),t.addScaledVector(s,2.8),Ji(t.x,t.z)}add(e,t=this.ahead()){const n=Pr.find(f=>f.type===e);if(!n)return null;const s=Ji(t.x,t.z),r=Mi(s.x,s.z),a=this.audio.addInstance(n.sound,{...s,y:r+1});if(!a)return null;const o=new st;o.name=n.name,o.position.set(s.x,r,s.z),this.root.add(o);const l=(f,u,p,d,_)=>{const m=new Pe(f,new $t({color:u,roughness:.7}));return m.position.set(p,d,_),o.add(m),m},c=()=>l(new xt(.06,.09,1.6,8),"#af865b",0,.8,0);if(["fountain","stream","waves"].includes(e))l(new xt(.7,.65,.3,24),"#b6b09b",0,.15,0),l(new xt(.61,.61,.035,24),"#5ec9d3",0,.32,0),e==="fountain"&&(l(new xt(.1,.18,.6,12),"#d4c5a2",0,.6,0),l(new ut(.22,12,8),"#9ce2ed",0,.98,0));else if(e==="tree"||e==="hedge")c(),l(new ut(e==="tree"?.85:.65,12,8),"#64b76e",0,e==="tree"?1.9:.75,0);else if(e==="birdhouse"){c(),l(new Bt(.55,.5,.4),"#e9ba79",0,1.65,0);const f=l(new si(.47,.35,4),"#b95643",0,2.05,0);f.rotation.y=Math.PI/4,l(new ut(.1,12,8),"#263e37",0,1.7,.21)}else if(e==="chimes"){c(),l(new Bt(.9,.08,.15),"#d6bb7b",0,1.8,0);for(let f=0;f<5;f++)l(new xt(.035,.035,.45+f*.08,8),"#e6d89e",(f-2)*.17,1.4,0)}else if(e==="breeze"){c();const f=l(new cs(.45,.055,8,20),"#a9d7cd",0,1.7,0);f.rotation.y=.4}else{l(new xt(.65,.7,.2,16),"#8c794e",0,.1,0);for(let f=0;f<9;f++){const u=f*2.4;l(new ut(.14,8,6),f%2?"#fff1a5":"#e2a2c2",Math.cos(u)*.45,.4+f%3*.1,Math.sin(u)*.45)}}const h={...a,type:e,name:n.name,group:o};return this.items.push(h),this.selected=h,this.audio.changed(),this.audio.start().catch(console.error),h}moveHere(e){const t=this.items.find(o=>o.id===e);if(!t)return;const n=this.ahead(),s=Mi(n.x,n.z);t.group.position.set(n.x,s,n.z);const r=this.audio.instances.find(o=>o.id===e);Object.assign(r,{...n,y:s+1});const a=this.audio.nodes.find(o=>o.id===e);a&&(a.pan.positionX.value=n.x,a.pan.positionY.value=s+1,a.pan.positionZ.value=n.z),this.audio.changed()}remove(e){const t=this.items.find(n=>n.id===e);t&&(this.root.remove(t.group),t.group.traverse(n=>{var s,r;(s=n.geometry)==null||s.dispose(),(r=n.material)==null||r.dispose()}),this.items=this.items.filter(n=>n.id!==e),this.selected===t&&(this.selected=this.items.at(-1)||null),this.audio.removeInstance(e))}}function Nc(i,e=.18){return Math.abs(i)<e?0:Math.sign(i)*(Math.abs(i)-e)/(1-e)}function Wg(i){const e=(i==null?void 0:i.axes)||[];return[Nc(e.length>=4?e[2]:e[0]||0),Nc(e.length>=4?e[3]:e[1]||0)]}function Xg(i){return i&&["#d6f48a","#8dc8e8","#f4b879","#f2a4cc","#ffffff"].includes(i.color)&&Number.isFinite(i.width)&&i.width>=.005&&i.width<=.05&&Array.isArray(i.points)&&i.points.length>=2&&i.points.length<=256&&i.points.every(e=>Array.isArray(e)&&e.length===3&&e.every(t=>Number.isFinite(t)&&Math.abs(t)<=12))}function qg(i,e,t=.018,n=256){if(i.length>=n)return!1;const s=i.at(-1);return s&&Math.hypot(...e.map((r,a)=>r-s[a]))<t?!1:(i.push([...e]),!0)}const mr=[{title:"1 / MOVE & LOOK",lines:["Look around by moving your head.","Left stick: walk forward, back, or sideways.","Right stick left / right: turn in 30° steps.","Left trigger: aim at floor, then release to teleport.","VIEW tab: Closer / Further moves you in / out."]},{title:"2 / OPEN THE MENU",lines:["Right A or click either stick: toggle menu.","Lost it? Point at MENU / SOUNDS, then trigger.","SOUND: volume & mute. VIEW: turn & menu size.","OBJECTS: add furniture. CONTROLS: this guide.","Close the menu before drawing or moving objects."]},{title:"3 / DRAW & PLACE OBJECTS",lines:["Right B cycles DRAW / TRACE / MOVE modes.","DRAW: hold right trigger; move hand to draw in air.","TRACE: hold right trigger; aim along the floor.","Grip + point at an object: hold to move; release.","Left X: undo ink. Left Y: change ink color."]},{title:"4 / SOUNDS & TRACES",lines:["SOUND tab: Mute / Play and − / + for each sound.","TRACES: Next trace chooses sound before drawing.","TRACES: saved trace Track arrows replace its sound.","Ink color changes only your drawing color.","MENU / SOUNDS stays centered below your view."]}],Xi=["#d6f48a","#8dc8e8","#f4b879","#f2a4cc","#ffffff"],Ms=4096;class Su{constructor(e){var s;Object.assign(this,e),this.mode="draw",this.color=0,this.width=.012,this.strokes=[],this.selected=null,this.controls=[],this.menuPage=0,this.soundPage=0,this.tracePage=0,this.helpPage=0,this.panel=new URLSearchParams(((s=globalThis.location)==null?void 0:s.search)||"").has("controls")?"controls":"sound",this.snapReady=!0,this.rig=new st,this.scene.add(this.rig),this.ray=new rl,this.floor=new yn(new P(0,1,0),0),this.worldHead=new Kt,this.position=new P,this.rotation=new gn,this.scale=new P,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.85),this.menu=new st,this.scene.add(this.menu),this.menu.visible=!1,this.buttons=[],this.textures=[],this.buildMenu(),this.menuDock=new st,this.scene.add(this.menuDock),this.menuDock.visible=!1;const t=new Pe(new rn(.36,.09),new It({map:this.textTexture("MENU / SOUNDS","#466338","#e9eee5",.36,.09),side:Ht,depthTest:!1}));t.renderOrder=100,t.userData.action=()=>{this.panel="sound",this.buildMenu(),this.showMenu()},this.menuDock.add(t),this.dockButton=t,this.cursor=new Pe(new ut(.012,10,8),new It({color:"#ffffff",depthTest:!1})),this.cursor.renderOrder=101,this.scene.add(this.cursor),this.cursor.visible=!1,this.ink=new ld(new xt(1,1,1,6),new It,Ms),this.ink.instanceMatrix.setUsage(yh),this.ink.count=0,this.ink.frustumCulled=!1,this.scene.add(this.ink),this.tip=new Pe(new ut(.018,10,8),new It({color:Xi[0]})),this.tip.visible=!1,this.scene.add(this.tip),this.teleport=new Pe(new el(.18,.22,30),new It({color:"#8dc8e8",side:Ht})),this.teleport.rotation.x=-Math.PI/2,this.teleport.visible=!1,this.scene.add(this.teleport);for(let r=0;r<2;r++){const a=this.renderer.xr.getController(r);this.rig.add(a);const o=new Pe(new Bt(.003,.003,1),new It({color:"#d6f48a"}));o.position.z=-.5,a.add(o);const l=this.renderer.xr.getControllerGrip(r);this.rig.add(l);const c=new Pe(new Zo(.025,.09,3,8),new $t({color:"#c9d5cf",roughness:.6}));c.rotation.x=Math.PI/3,l.add(c);const h={controller:a,grip:l,beam:o,source:null,trigger:!1,squeeze:!1,buttons:[],stroke:null,floorPoints:null,held:null,hover:null};this.controls.push(h),a.addEventListener("connected",f=>{h.source=f.data}),a.addEventListener("disconnected",()=>{h.outdoorTrace&&(this.getParadise().traces.cancel(),h.outdoorTrace=!1),this.finish(h),h.source=null,h.trigger=!1,h.squeeze=!1}),a.addEventListener("selectstart",()=>{h.trigger=!0,this.press(h)}),a.addEventListener("selectend",()=>{h.trigger=!1,this.finish(h)}),a.addEventListener("squeezestart",()=>{h.squeeze=!0,this.grab(h)}),a.addEventListener("squeezeend",()=>{h.squeeze=!1,h.held=null,this.saveLayout()})}try{const r=JSON.parse(localStorage.getItem("sound-room-xr-ink-v1"));if(Array.isArray(r)){let a=0;for(const o of r)!Xg(o)||a+o.points.length>Ms||(this.strokes.push(o),a+=o.points.length)}}catch{}this.rebuildInk(),this.renderer.xr.addEventListener("sessionstart",()=>this.begin()),this.renderer.xr.addEventListener("sessionend",()=>this.end());const n=document.getElementById("enter-vr");n.disabled=!0,navigator.xr&&isSecureContext?navigator.xr.isSessionSupported("immersive-vr").then(r=>{n.disabled=!r,n.textContent=r?"Enter VR · Quest":"VR unavailable on this browser"}).catch(()=>{n.textContent="VR unavailable"}):n.textContent="Open in Quest Browser for VR",n.onclick=()=>this.enter(n)}async enter(e){e.disabled=!0;try{const t=this.startAudio(),n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"],optionalFeatures:["bounded-floor"]});try{await t,await this.renderer.xr.setSession(n)}catch(s){throw await n.end(),s}}catch(t){this.toast(`Could not enter VR: ${t.message}`),console.error(t)}finally{e.disabled=!1}}begin(){var t;const e=this.soundChoices.findIndex(n=>{var s;return n.sound===((s=this.getNextTraceSound)==null?void 0:s.call(this))});e>=0&&(this.traceSound=e),this.buildMenu(),this.desktop={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),shadow:this.renderer.shadowMap.enabled},this.rig.position.set(this.camera.position.x,0,this.camera.position.z),this.rig.rotation.set(0,this.camera.rotation.y,0),this.rig.add(this.camera),this.camera.position.set(0,0,0),this.camera.quaternion.identity(),this.renderer.shadowMap.enabled=!1,this.renderer.xr.setFoveation(1),document.body.classList.add("in-xr"),document.getElementById("library").close(),document.getElementById("help-dialog").close(),(t=document.getElementById("eden-dialog"))==null||t.close(),this.keys.clear(),this.menuPending=!0,this.syncHead(),this.menuDock.visible=!0}end(){for(const e of this.controls)e.outdoorTrace&&(this.getParadise().traces.cancel(),e.outdoorTrace=!1),this.finish(e),e.held=null,e.trigger=!1,e.squeeze=!1,e.buttons=[];this.scene.add(this.camera),this.desktop&&(this.camera.position.copy(this.desktop.position),this.camera.quaternion.copy(this.desktop.quaternion),this.renderer.shadowMap.enabled=this.desktop.shadow),this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.menu.visible=!1,this.tip.visible=!1,this.teleport.visible=!1,this.menuDock.visible=!1,this.cursor.visible=!1,document.body.classList.remove("in-xr"),this.keys.clear()}syncHead(){return this.rig.updateMatrixWorld(!0),this.renderer.xr.updateCamera(this.camera),this.renderer.xr.getCamera().matrixWorld.decompose(this.position,this.rotation,this.scale),this.worldHead.position.copy(this.position),this.worldHead.quaternion.copy(this.rotation),this.worldHead.updateMatrixWorld(),this.worldHead}showMenu(){const e=this.syncHead(),t=new P(0,0,-1).applyQuaternion(e.quaternion);t.y=0,t.normalize(),this.menu.position.copy(e.position).addScaledVector(t,1.55),this.menu.position.y=Math.max(1.25,e.position.y),this.menu.rotation.set(0,Math.atan2(t.x,t.z)+Math.PI,0),this.menu.visible=!0,this.refreshMenu()}toggleMenu(){this.menu.visible?this.menu.visible=!1:this.showMenu()}textTexture(e,t="#1e3036",n="#e9eee5",s=2.15,r=.1){const a=document.createElement("canvas");a.width=Math.round(s*800),a.height=Math.round(r*800);const o=a.getContext("2d"),l=Math.min(38,Math.floor(a.height*.42)),c=l*1.15,h=10;o.fillStyle=t,o.fillRect(0,0,a.width,a.height),o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.font=`500 ${l}px system-ui, sans-serif`;const f=m=>{var g;return((g=o.measureText)==null?void 0:g.call(o,m).width)??m.length*l*.55},u=[];let p="";for(const m of e.split(" ")){const g=p?p+" "+m:m;p&&f(g)>a.width-h*2?(u.push(p),p=m):p=g}p&&u.push(p);const d=Math.max(1,Math.floor((a.height-8)/c));if(u.length>d){for(u.length=d;f(u[d-1]+"…")>a.width-h*2&&u[d-1].length;)u[d-1]=u[d-1].slice(0,-1);u[d-1]+="…"}u.forEach((m,g)=>o.fillText(m,a.width/2,a.height/2+(g-(u.length-1)/2)*c));const _=new Ur(a);return _.colorSpace=Ft,_}label(e,t,n,s,r,a,o){const l=this.textTexture(e,o,"#e9eee5",s,r);this.textures.push(l);const c=new Pe(new rn(s,r),new It({map:l,side:Ht}));return c.position.set(t,n,.015),this.menu.add(c),c.userData.label=e,a&&(c.userData.action=a,this.buttons.push(c)),c}buildMenu(){var t,n,s,r,a,o,l,c,h,f;for(const u of[...this.menu.children])(t=u.geometry)==null||t.dispose(),(n=u.material)==null||n.dispose(),this.menu.remove(u);for(const u of this.textures)u.dispose();this.textures=[],this.buttons=[];const e=new Pe(new rn(2.3,2.25),new It({color:"#0d1b22",side:Ht}));if(this.menu.add(e),this.label("SOUND ROOM / QUEST",0,1,2.15,.12),this.statusLabel=this.label("",0,.85,2.15,.1),["sound","traces","view","objects","eden","controls"].forEach((u,p)=>this.label(u.toUpperCase(),(p-2.5)*.37,.67,.35,.14,()=>{this.panel=u,this.buildMenu()},u===this.panel?"#466338":"#1e3036")),this.panel==="eden"){const u=(s=this.getParadise)==null?void 0:s.call(this);u&&(u.active?["calm","wonder","freedom"].forEach((p,d)=>this.label(p,(d-1)*.74,.43,.69,.14,()=>{const _={calm:{energy:.2,nature:.6,dreaminess:.2},wonder:{energy:.45,nature:.95,dreaminess:.85},freedom:{energy:.8,nature:.45,dreaminess:.5}};u.set(_[p]),this.buildMenu()})):this.label("Open the bedroom door to explore Inner Eden",0,.43,2.15,.14,()=>u.open(!0)),["energy","nature","dreaminess"].forEach((p,d)=>{const _=.2-d*.24;this.label(p+" "+Math.round(u.eden.target[p]*100)+"%",0,_,1.2,.14),this.label("−",-.9,_,.35,.14,()=>{u.set({[p]:u.eden.target[p]-.1}),this.buildMenu()}),this.label("+",.9,_,.35,.14,()=>{u.set({[p]:u.eden.target[p]+.1}),this.buildMenu()})}),this.label(u.paused?"Resume":"Pause here",-.75,-.55,.69,.14,()=>{u.paused=!u.paused,this.keys.clear(),this.buildMenu()}),this.label("Save favorite",0,-.55,.69,.14,()=>u.favorite()),this.label("Bedroom",.75,-.55,.69,.14,()=>u.open(!1)))}else if(this.panel==="traces"&&((a=(r=this.getParadise)==null?void 0:r.call(this))!=null&&a.active))this.getParadise().traces.renderVR(this.label.bind(this),()=>{this.mode="trace",this.menu.visible=!1,this.toast("Aim at the ground. Hold right trigger and draw; release to finish.")},()=>this.buildMenu());else if(this.panel==="traces"){this.label("Next trace: "+this.soundChoices[this.traceSound].name,0,.44,2.15,.12),this.label("← Previous sound",-.57,.26,1.05,.13,()=>this.chooseNextTrace(-1)),this.label("Next sound →",.57,.26,1.05,.13,()=>this.chooseNextTrace(1));const u=((o=this.getTraces)==null?void 0:o.call(this))||[],p=Math.max(1,Math.ceil(u.length/2));this.tracePage%=p,u.slice(this.tracePage*2,this.tracePage*2+2).forEach((d,_)=>{var E;const m=.03-_*.31,g=this.tracePage*2+_+1,M=((E=this.soundChoices.find(S=>S.sound===d.sound))==null?void 0:E.name)||d.sound;this.label(`Trace ${g}: ${M}`,0,m,2.15,.11),this.label("← Track",-.75,m-.14,.67,.12,()=>this.chooseTraceSound(d,-1)),this.label("Track →",0,m-.14,.67,.12,()=>this.chooseTraceSound(d,1)),this.label("Delete",.75,m-.14,.67,.12,()=>{var S;(S=this.removeTrace)==null||S.call(this,d),this.buildMenu()})}),u.length||this.label("No saved traces. Use TRACE mode, then draw on floor.",0,-.12,2.15,.18),this.label("More saved traces →",0,-.59,2.15,.13,()=>{this.tracePage=(this.tracePage+1)%p,this.buildMenu()})}else if(this.panel==="controls"){const u=mr[this.helpPage];this.label(u.title,0,.44,2.15,.13,void 0,"#304d35"),u.lines.forEach((p,d)=>this.label(p,0,.24-d*.16,2.15,.12)),this.label("← Previous",-.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+mr.length-1)%mr.length,this.buildMenu()}),this.label("Next →",.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+1)%mr.length,this.buildMenu()})}else if(this.panel==="sound"){const u=this.soundEntries(),p=Math.max(1,Math.ceil(u.length/4));if(this.soundPage%=p,u.slice(this.soundPage*4,this.soundPage*4+4).forEach((_,m)=>{var T;const g=.43-m*.25,M=_.outdoor?null:_.row.querySelector("input"),E=_.outdoor?Math.round(_.level*100):M?M.value:0;this.label(_.name+" "+E+"%",-.45,g,1.2,.18,()=>{this.selected=_,this.refreshMenu()});const S=_.muted??((T=_.player)==null?void 0:T.muted);this.label(S?"Play":"Mute",.36,g,.34,.18,()=>{var w;_.outdoor?this.getParadise().ambience.toggleChannel(_.id):(w=_.row.querySelector(".mute,.trace-mute"))==null||w.click(),this.buildMenu()}),this.label("−",.68,g,.23,.18,()=>{this.volumeItem(_,-10),this.buildMenu()}),this.label("+",.96,g,.23,.18,()=>{this.volumeItem(_,10),this.buildMenu()})}),u.length||this.label("Add a sound object in OBJECTS",0,.3,2.1,.15),(c=(l=this.getParadise)==null?void 0:l.call(this))==null?void 0:c.active){this.label("More sounds",-.75,-.59,.68,.14,()=>{this.soundPage=(this.soundPage+1)%p,this.buildMenu()}),this.label("Reset mix",0,-.59,.68,.14,()=>{this.getParadise().ambience.resetMix(),this.buildMenu()});const _=u.every(m=>m.muted);this.label(_?"Unmute all":"Mute all",.75,-.59,.68,.14,()=>{this.getParadise().ambience.muteAll(!_),this.buildMenu()})}else this.label("More sounds →",-.57,-.59,1.05,.14,()=>{this.soundPage=(this.soundPage+1)%p,this.buildMenu()}),this.label(this.engine.playing?"Pause all":"Play all",.57,-.59,1.05,.14,()=>{var _;(_=this.toggleAudio)==null||_.call(this)})}else if(this.panel==="view")this.label("Turn left",-.57,.43,1.05,.17,()=>{this.turn(Math.PI/6),this.showMenu()}),this.label("Turn right",.57,.43,1.05,.17,()=>{this.turn(-Math.PI/6),this.showMenu()}),this.label("Closer / zoom in",-.57,.19,1.05,.17,()=>{this.dolly(.6),this.showMenu()}),this.label("Further / zoom out",.57,.19,1.05,.17,()=>{this.dolly(-.6),this.showMenu()}),this.label("Smaller menu",-.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(.85).clampScalar(.5,1.4),this.showMenu()}),this.label("Larger menu",.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(1.15).clampScalar(.5,1.4),this.showMenu()}),this.label("Recenter view & menu",0,-.29,2.15,.17,()=>this.showMenu()),this.label("Undo ink",-.57,-.52,1.05,.14,()=>this.undo()),this.label("Clear ink",.57,-.52,1.05,.14,()=>{for(const u of this.controls)u.stroke&&this.finish(u);this.clearBackup=this.strokes.slice(),this.strokes=[],this.rebuildInk(),this.saveInk()});else if((f=(h=this.getParadise)==null?void 0:h.call(this))!=null&&f.active){const u=this.getParadise().objects,p=Math.ceil(Pr.length/6);Pr.slice(this.menuPage%p*6,this.menuPage%p*6+6).forEach((d,_)=>this.label("+ "+d.name,(_%2-.5)*1.12,.43-Math.floor(_/2)*.17,1.05,.14,()=>{u.add(d.type),this.refreshMenu()})),this.label("More objects",0,-.1,2.15,.13,()=>{this.menuPage=(this.menuPage+1)%p,this.buildMenu()}),this.label("Move last here",-.57,-.3,1.05,.14,()=>{u.selected&&u.moveHere(u.selected.id)}),this.label("Remove last",.57,-.3,1.05,.14,()=>{u.selected&&u.remove(u.selected.id),this.buildMenu()}),this.label("Each object gets a SOUND mixer row",0,-.5,2.15,.14)}else this.catalog.slice(this.menuPage*6,this.menuPage*6+6).forEach((p,d)=>this.label("+ "+p.name,(d%2-.5)*1.12,.43-Math.floor(d/2)*.17,1.05,.14,()=>{const _=this.syncHead(),m=new P(0,0,-1).applyQuaternion(_.quaternion);m.y=0,m.normalize();const g=_.position.clone().addScaledVector(m,2.8),M=this.addObject(p.type,{x:g.x,z:g.z});M&&(this.selected=M),this.refreshMenu()})),this.label("More objects →",0,-.1,2.15,.13,()=>{this.menuPage=(this.menuPage+1)%Math.ceil(this.catalog.length/6),this.buildMenu()}),this.label("Rotate",-.57,-.3,1.05,.14,()=>{var p,d,_;return(_=(d=(p=this.selected)==null?void 0:p.row)==null?void 0:d.querySelector(".rotate"))==null?void 0:_.click()}),this.label("Remove",.57,-.3,1.05,.14,()=>{this.selected&&!this.selected.player&&!this.selected.outdoor&&(this.removeObject(this.selected),this.selected=null,this.refreshMenu())}),this.label("Studio / Cathedral",0,-.5,2.15,.14,()=>{this.setPreset(this.engine.preset==="studio"?"cathedral":"studio"),this.refreshMenu()});this.label("Mode: "+this.mode.toUpperCase(),-.75,-.78,.68,.14,()=>this.cycleMode(),"#466338"),this.label("Ink color",0,-.78,.68,.14,()=>{this.color=(this.color+1)%Xi.length,this.tip.material.color.set(Xi[this.color]),this.refreshMenu()}),this.label("Close",.75,-.78,.68,.14,()=>{this.menu.visible=!1}),this.label("Sticks work with menu open · A / stick click: menu",0,-.96,2.15,.08),this.label("B: mode · X: undo · L trigger: teleport · Grip: move",0,-1.07,2.15,.08),this.refreshMenu()}soundEntries(){var t,n,s;const e=(t=this.getParadise)==null?void 0:t.call(this);return e!=null&&e.active?e.ambience.channels().map(r=>({...r,name:r.label,outdoor:!0})):[...(((n=this.getSources)==null?void 0:n.call(this))||[]).filter(r=>r.sound),...(((s=this.getTraces)==null?void 0:s.call(this))||[]).map(r=>{var a;return{...r,name:(((a=this.soundChoices.find(o=>o.sound===r.sound))==null?void 0:a.name)||r.sound)+" trace"}})]}chooseNextTrace(e){var t;this.traceSound=(this.traceSound+e+this.soundChoices.length)%this.soundChoices.length,(t=this.setNextTraceSound)==null||t.call(this,this.soundChoices[this.traceSound].sound),this.buildMenu()}chooseTraceSound(e,t){var r;const n=this.soundChoices.findIndex(a=>a.sound===e.sound),s=this.soundChoices[(n+t+this.soundChoices.length)%this.soundChoices.length].sound;(r=this.changeTraceSound)==null||r.call(this,e,s),this.buildMenu()}cycleMode(){this.mode=this.mode==="draw"?"trace":this.mode==="trace"?"move":"draw",this.buildMenu()}volumeItem(e,t){if(e.outdoor){this.getParadise().ambience.setChannel(e.id,e.level+t/100);return}const n=e.row.querySelector("input");n&&(n.value=Math.max(0,Math.min(100,Number(n.value)+t)),n.dispatchEvent(new Event("input")))}turn(e){const t=this.syncHead().position.clone(),n=new gn().setFromAxisAngle(new P(0,1,0),e);this.rig.position.sub(t).applyQuaternion(n).add(t),this.rig.quaternion.premultiply(n)}dolly(e){const t=this.syncHead(),n=new P(0,0,-1).applyQuaternion(t.quaternion);n.y=0,n.normalize(),this.rig.position.addScaledVector(n,e),this.clampPosition()}clampPosition(){var s;const e=this.syncHead(),t=(s=this.getParadise)==null?void 0:s.call(this),n=t?t.clamp(e.position.x,e.position.z):{x:bt.clamp(e.position.x,-5.35,5.35),z:bt.clamp(e.position.z,-5.35,5.35)};this.rig.position.x+=n.x-e.position.x,this.rig.position.z+=n.z-e.position.z,t&&(this.rig.position.y=t.height(n.x,n.z))}hitUI(e){var n;this.controllerRay(e);const t=this.menu.visible?[...this.buttons]:[];this.menuDock.visible&&t.push(this.dockButton);for(const s of((n=this.getPortalTargets)==null?void 0:n.call(this))||[])s&&t.push(s);return this.menu.updateWorldMatrix(!0,!0),this.menuDock.updateWorldMatrix(!0,!0),this.ray.intersectObjects(t)[0]}refreshMenu(){var r,a;if(!this.statusLabel)return;const e=`${this.mode.toUpperCase()} | ${((r=this.selected)==null?void 0:r.name)||"No object selected"} | ${this.engine.preset} | trace: ${((a=this.soundChoices[this.traceSound])==null?void 0:a.name)||"Bird"}`,t=this.statusLabel.material.map,n=this.textTexture(e,"#243e43");this.statusLabel.material.map=n;const s=this.textures.indexOf(t);s>=0&&(this.textures[s]=n),t.dispose()}volume(e){if(!this.selected)return;const t=this.selected.row.querySelector("input");t&&(t.value=Number(t.value)+e,t.dispatchEvent(new Event("input")),this.refreshMenu())}controllerRay(e){e.controller.updateWorldMatrix(!0,!1);const t=new P().setFromMatrixPosition(e.controller.matrixWorld),n=new P(0,0,-1).transformDirection(e.controller.matrixWorld);return this.ray.set(t,n),this.ray}floorPoint(e){var s;const t=new P;if(!this.controllerRay(e).ray.intersectPlane(this.floor,t)||this.ray.ray.origin.distanceTo(t)>30)return null;const n=(s=this.getParadise)==null?void 0:s.call(this);if(n!=null&&n.active){const r=n.clamp(t.x,t.z);return Math.hypot(r.x-t.x,r.z-t.z)<.2?t:null}return Math.abs(t.x)<5.7&&Math.abs(t.z)<5.7?t:null}press(e){var n,s,r,a,o,l,c;const t=this.hitUI(e);if(t){t.object.userData.portal?t.object.userData.portal():(s=(n=t.object.userData).action)==null||s.call(n);return}if(!this.menu.visible){if(((r=e.source)==null?void 0:r.handedness)==="left"){e.teleporting=!0;return}if((o=(a=this.getParadise)==null?void 0:a.call(this))!=null&&o.active&&this.mode==="trace"){e.outdoorTrace=this.getParadise().traces.begin();return}if((c=(l=this.getParadise)==null?void 0:l.call(this))!=null&&c.active){this.panel="eden",this.buildMenu(),this.showMenu();return}if(this.mode==="move"){this.grab(e);return}if(this.mode==="trace"){e.floorPoints=[];return}this.inkPointCount>=Ms||(e.stroke={color:Xi[this.color],width:this.width,points:[]},this.strokes.push(e.stroke))}}grab(e){var n,s;if(this.menu.visible||(s=(n=this.getParadise)==null?void 0:n.call(this))!=null&&s.active)return;this.controllerRay(e);const t=this.ray.intersectObjects(this.pickables).find(r=>{var a;return!((a=r.object.userData.source)!=null&&a.removed)});t&&(e.held=t.object.userData.source,this.selected=e.held,this.refreshMenu())}finish(e){var t,n,s;if(e.outdoorTrace&&(this.getParadise().traces.finish(),e.outdoorTrace=!1),e.teleporting){if(!((n=(t=this.getParadise)==null?void 0:t.call(this))!=null&&n.paused)){const r=this.floorPoint(e);if(r){const a=this.syncHead();this.rig.position.x+=r.x-a.position.x,this.rig.position.z+=r.z-a.position.z}}e.teleporting=!1}((s=e.floorPoints)==null?void 0:s.length)>=2&&this.addFloorTrace(this.soundChoices[this.traceSound].sound,e.floorPoints),e.floorPoints=null,e.stroke&&(e.stroke.points.length<2&&(this.strokes=this.strokes.filter(r=>r!==e.stroke)),e.stroke=null,this.rebuildInk(),this.saveInk()),e.held&&!e.squeeze&&(e.held=null,this.saveLayout())}undo(){for(const e of this.controls)e.stroke&&this.finish(e);this.strokes.length?this.strokes.pop():this.clearBackup&&(this.strokes=this.clearBackup,this.clearBackup=null),this.rebuildInk(),this.saveInk()}saveInk(){try{localStorage.setItem("sound-room-xr-ink-v1",JSON.stringify(this.strokes.filter(e=>e.points.length>=2)))}catch{this.toast("Drawing storage is full.")}}rebuildInk(){let e=0;this.inkPointCount=0;const t=new P(0,1,0),n=new Ke,s=new gn;for(const r of this.strokes){this.inkPointCount+=r.points.length;for(let a=1;a<r.points.length&&e<Ms;a++){const o=new P(...r.points[a-1]),l=new P(...r.points[a]),c=l.clone().sub(o),h=c.length();h<.001||(s.setFromUnitVectors(t,c.divideScalar(h)),n.compose(o.add(l).multiplyScalar(.5),s,new P(r.width,h,r.width)),this.ink.setMatrixAt(e,n),this.ink.setColorAt(e,new Ue(r.color)),e++)}}this.ink.count=e,this.ink.instanceMatrix.needsUpdate=!0,this.ink.instanceColor&&(this.ink.instanceColor.needsUpdate=!0)}update(e){var a,o,l,c,h,f,u,p;if(!this.renderer.xr.isPresenting)return this.camera;const t=Array.from(((l=(o=(a=this.renderer.xr).getSession)==null?void 0:o.call(a))==null?void 0:l.inputSources)||[]);for(let d=0;d<this.controls.length;d++){const _=this.controls[d],m=t.find(g=>{var M;return g.handedness===((M=_.source)==null?void 0:M.handedness)})||t[d];m&&(_.source=m)}this.syncHead(),this.menuPending&&((c=this.renderer.xr.getFrame())!=null&&c.getViewerPose(this.renderer.xr.getReferenceSpace()))&&(this.menuPending=!1,this.showMenu());const n=new P(0,0,-1).applyQuaternion(this.worldHead.quaternion);n.y=0,n.normalize();let s=!1;this.teleport.visible=!1,this.tip.visible=!1;for(const d of this.controls){if(!d.source)continue;const _=d.source.gamepad,[m,g]=Wg(_),M=d.source.handedness==="left";if(M&&!((f=(h=this.getParadise)==null?void 0:h.call(this))!=null&&f.paused)){const T=new P().crossVectors(n,new P(0,1,0));this.rig.position.addScaledVector(n,-g*e*1.6).addScaledVector(T,m*e*1.6)}M||(Math.abs(m)<.3&&(this.snapReady=!0),Math.abs(m)>.75&&this.snapReady&&(this.turn(-Math.sign(m)*Math.PI/6),this.snapReady=!1));const E=(_==null?void 0:_.buttons)||[];for(const[T,w]of[[3,()=>this.toggleMenu()],[4,M?()=>this.undo():()=>this.toggleMenu()],[5,M?()=>{this.color=(this.color+1)%Xi.length,this.tip.material.color.set(Xi[this.color])}:()=>this.cycleMode()]]){const C=!!((u=E[T])!=null&&u.pressed);C&&!d.buttons[T]&&w(),d.buttons[T]=C}d.hover&&d.hover.material.color.copy(d.hover.userData.baseTint||new Ue("#ffffff"));const S=this.hitUI(d);if(d.hover=(S==null?void 0:S.object)||null,d.hover&&((p=d.hover.userData).baseTint??(p.baseTint=d.hover.material.color.clone()),d.hover.material.color.set("#d6f48a")),d.beam.scale.z=S?S.distance:4,d.beam.position.z=-d.beam.scale.z/2,M||(this.cursor.visible=!0,this.cursor.position.copy(S?S.point:this.ray.ray.at(2,new P))),d.held&&(d.squeeze||d.trigger)&&!this.menu.visible){const T=this.floorPoint(d);T&&this.move(d.held,T.x,T.z)}if(d.teleporting){const T=this.floorPoint(d);T&&(this.teleport.visible=!0,this.teleport.position.set(T.x,.025,T.z))}if(d.outdoorTrace&&d.trigger&&this.getParadise().traces.sample(this.floorPoint(d)),d.floorPoints&&d.trigger){const T=this.floorPoint(d);if(T){const w=d.floorPoints.at(-1);(!w||Math.hypot(w[0]-T.x,w[1]-T.z)>.14)&&d.floorPoints.length<120&&d.floorPoints.push([T.x,T.z]),this.teleport.visible=!0,this.teleport.position.set(T.x,.03,T.z)}}if(!M&&!this.menu.visible&&this.mode==="draw"){d.grip.updateWorldMatrix(!0,!1);const T=new P(0,0,-.12).applyMatrix4(d.grip.matrixWorld);this.tip.visible=!0,this.tip.position.copy(T),d.stroke&&d.trigger&&this.inkPointCount<Ms&&Math.abs(T.x)<5.8&&Math.abs(T.z)<5.8&&T.y>.05&&T.y<8&&qg(d.stroke.points,T.toArray())&&(this.inkPointCount++,s=!0)}}this.clampPosition();const r=this.syncHead();return this.menuDock.position.set(0,-.24,-.75).applyQuaternion(r.quaternion).add(r.position),this.menuDock.quaternion.copy(r.quaternion),s&&this.rebuildInk(),this.syncHead()}}Su.prototype.traceSound=0;const bu={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Yg=new Set(Object.values(bu));function Fc(i){var e;return Yg.has(i.code)?i.code:bu[(e=i.key)==null?void 0:e.toLowerCase()]||null}function al(i){var e;return!!i&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT","BUTTON"].includes(i.tagName)||!!((e=i.closest)!=null&&e.call(i,'[role="dialog"],dialog,[contenteditable="true"]')))}class $g{constructor(e,{now:t=()=>performance.now(),firstLease:n=800,repeatLease:s=180}={}){this.pressed=e,this.now=t,this.firstLease=n,this.repeatLease=s,this.deadlines=new Map}down(e,t=!0){var s;const n=Fc(e);if(n){if(!t||e.ctrlKey||e.metaKey||e.altKey||al(e.target)){this.clear();return}e.repeat&&!this.pressed.has(n)||((s=e.preventDefault)==null||s.call(e),this.pressed.add(n),this.deadlines.set(n,this.now()+(e.repeat?this.repeatLease:this.firstLease)))}}up(e){const t=Fc(e);t&&(this.pressed.delete(t),this.deadlines.delete(t))}clear(){this.pressed.clear(),this.deadlines.clear()}tick(e=!0){if(!e){this.clear();return}const t=this.now();for(const[n,s]of this.deadlines)(!this.pressed.has(n)||s<=t)&&(this.pressed.delete(n),this.deadlines.delete(n))}}function ss(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}const Oc={books:{dash:"7 4",effect:"page",pace:.18,count:5,description:"floating page flecks"},fan:{dash:"2 4",effect:"spin",pace:.42,count:5,description:"spinning air rings"},clock:{dash:"1 5",effect:"tick",pace:.25,count:7,description:"rhythmic light ticks"},bird:{dash:"3 7",effect:"flutter",pace:.34,count:6,description:"fluttering motes"},tv:{dash:"4 2",effect:"flicker",pace:.55,count:6,description:"flickering pixels"},record:{dash:"10 4",effect:"ring",pace:.27,count:4,description:"spinning vinyl rings"},rain:{dash:"1 4",effect:"drop",pace:.45,count:8,description:"falling droplets"},piano:{dash:"6 3",effect:"key",pace:.28,count:6,description:"pulsing keys"},strings:{dash:"12 5",effect:"wave",pace:.14,count:7,description:"slow glowing waves"}};function ol(i){return Oc[i]??Oc.strings}function Co(i,e){if(!i.length)return null;if(i.length===1)return{x:i[0][0],z:i[0][1],angle:0};const t=ss(i);if(t===0)return{x:i[0][0],z:i[0][1],angle:0};let n=(e%1+1)%1*t;for(let s=1;s<i.length;s++){const[r,a]=i[s-1],[o,l]=i[s],c=Math.hypot(o-r,l-a);if(n<=c||s===i.length-1){const h=c?n/c:0;return{x:r+(o-r)*h,z:a+(l-a)*h,angle:Math.atan2(l-a,o-r)}}n-=c}}function Jg(i,e,t){if(!i.length)return null;let n={x:i[0][0],z:i[0][1],distance:1/0};for(let s=1;s<i.length;s++){const[r,a]=i[s-1],[o,l]=i[s],c=o-r,h=l-a,f=c*c+h*h,u=f?Math.max(0,Math.min(1,((e-r)*c+(t-a)*h)/f)):0,p=r+c*u,d=a+h*u,_=Math.hypot(e-p,t-d);_<n.distance&&(n={x:p,z:d,distance:_})}return i.length===1&&(n.distance=Math.hypot(e-n.x,t-n.z)),n}class Zg{constructor(e,t){this.root=e,this.audio=t,this.items=[],this.nextSound="birds",this.page=0,this.armed=!1,this.draft=null,this.previewLine=null,this.message="Choose a sound, then draw on the ground. Sound travels around the track."}line(e,t="#e4fa94"){const n=new gt().setFromPoints(e.map(([s,r])=>new P(s,Mi(s,r)+.06,r)));return new dd(n,new lu({color:t}))}dispose(e){e&&(this.root.remove(e),e.geometry.dispose(),e.material.dispose())}begin(){return this.items.length>=8?(this.message="Eight trace limit. Remove a trace first.",!1):(this.cancel(),this.draft=[],!0)}sample(e){if(!this.draft||!e||!Number.isFinite(e.x)||!Number.isFinite(e.z))return;const t=Ji(e.x,e.z);if(Math.hypot(t.x-e.x,t.z-e.z)>.15)return;const n=this.draft.at(-1);this.draft.length<120&&(!n||Math.hypot(n[0]-t.x,n[1]-t.z)>.14)&&(this.draft.push([t.x,t.z]),this.dispose(this.previewLine),this.previewLine=this.line(this.draft,"#ffffff"),this.root.add(this.previewLine))}finish(){const e=this.draft;this.cancel(),this.armed=!1;const t=e?this.add(this.nextSound,e):null;return this.message=t?"Trace added. Its sound loops around the glowing track.":this.audio.instances.length>=16?"Sound limit reached. Remove an object or trace first.":"Draw at least half a metre on the ground, then release.",this.audio.changed(),t}cancel(){this.draft=null,this.dispose(this.previewLine),this.previewLine=null}add(e,t){if(this.items.length>=8||!wt.some(o=>o.id===e)||!Array.isArray(t)||t.length<2||t.length>120||!t.every(o=>Array.isArray(o)&&o.length===2&&o.every(Number.isFinite)&&Math.hypot(Ji(...o).x-o[0],Ji(...o).z-o[1])<.15)||ss(t)<.55)return null;const n=this.audio.addInstance(e,{x:t[0][0],z:t[0][1],y:Mi(...t[0])+.5});if(!n)return null;n.label="Trace "+n.label;const s=this.line(t),r=new Pe(new ut(.12,10,8),new It({color:"#fff3a5"}));this.root.add(s,r);const a={id:n.id,sound:e,points:t.map(o=>[...o]),path:s,marker:r,progress:0};return this.items.push(a),this.audio.start().catch(console.error),this.audio.changed(),a}changeSound(e,t){const n=wt.findIndex(l=>l.id===e.sound),s=wt[(n+t+wt.length)%wt.length].id,r=this.audio.mix.get(e.id),a=Co(e.points,e.progress);this.audio.removeInstance(e.id);const o=this.audio.addInstance(s,{...a,y:Mi(a.x,a.z)+.5});e.id=o.id,e.sound=s,o.label="Trace "+o.label,r&&this.audio.mix.set(o.id,{...r}),this.audio.changed()}remove(e){this.items=this.items.filter(t=>t!==e),this.dispose(e.path),this.dispose(e.marker),this.audio.removeInstance(e.id)}update(e){for(const t of this.items){t.progress=(t.progress+e*.9/Math.max(.55,ss(t.points)))%1;const n=Co(t.points,t.progress),s=Mi(n.x,n.z)+.18;t.marker.position.set(n.x,s,n.z);const r=this.audio.instances.find(o=>o.id===t.id);if(!r)continue;Object.assign(r,{x:n.x,z:n.z,y:s+.35});const a=this.audio.nodes.find(o=>o.id===t.id);a&&(a.pan.positionX.value=n.x,a.pan.positionY.value=s+.35,a.pan.positionZ.value=n.z)}}choose(e){const t=wt.findIndex(n=>n.id===this.nextSound);this.nextSound=wt[(t+e+wt.length)%wt.length].id,this.audio.changed()}arm(){this.cancel(),this.armed=!this.armed,this.message=this.armed?"Drag on the ground. Release to finish; press Cancel to stop.":"Drawing cancelled.",this.audio.changed()}bindDesktop(e,t,n){const s=new rl,r=new yn(new P(0,1,0),0);let a=null,o=!1;const l=h=>{const f=e.getBoundingClientRect();s.setFromCamera(new we((h.clientX-f.left)/f.width*2-1,1-(h.clientY-f.top)/f.height*2),t);const u=new P;return s.ray.intersectPlane(r,u)&&s.ray.origin.distanceTo(u)<35?u:null};e.addEventListener("pointerdown",h=>{!n()||!this.armed||(h.preventDefault(),h.stopImmediatePropagation(),this.begin()&&(a=h.pointerId,e.setPointerCapture(a),this.sample(l(h))))},!0),e.addEventListener("pointermove",h=>{a===h.pointerId&&(h.preventDefault(),h.stopImmediatePropagation(),this.sample(l(h)))},!0),e.addEventListener("pointerup",h=>{a===h.pointerId&&(h.preventDefault(),h.stopImmediatePropagation(),this.sample(l(h)),a=null,o=!0,this.finish())},!0);const c=()=>{a=null,this.cancel(),this.armed=!1};e.addEventListener("pointercancel",c,!0),window.addEventListener("blur",c),e.addEventListener("click",h=>{(this.armed||o)&&(o=!1,h.preventDefault(),h.stopImmediatePropagation())},!0)}mount(e){const t=document.createElement("h3");t.textContent="Draw a sound trace",e.append(t);const n=document.createElement("p");n.textContent=this.message+" Added traces last for this visit.",e.append(n);const s=document.createElement("select");s.setAttribute("aria-label","Sound for next outdoor trace");for(const a of wt){const o=document.createElement("option");o.value=a.id,o.textContent=a.label,s.append(o)}s.value=this.nextSound,s.onchange=()=>{this.nextSound=s.value,this.audio.changed()},e.append(s);const r=(a,o)=>{const l=document.createElement("button");l.textContent=a,l.onclick=o,e.append(l)};r(this.armed?"Cancel drawing":"Draw on ground",()=>this.arm());for(const[a,o]of this.items.entries()){const l=document.createElement("p");l.textContent="Trace "+(a+1)+": "+wt.find(c=>c.id===o.sound).label,e.append(l),r("Change sound",()=>this.changeSound(o,1)),r("Delete trace",()=>this.remove(o))}}renderVR(e,t,n){e("Next: "+wt.find(r=>r.id===this.nextSound).label,0,.44,2.1,.12,()=>{}),e("Previous sound",-.55,.26,1.05,.13,()=>{this.choose(-1),n()}),e("Next sound",.55,.26,1.05,.13,()=>{this.choose(1),n()});const s=Math.max(1,Math.ceil(this.items.length/2));this.page%=s,this.items.slice(this.page*2,this.page*2+2).forEach((r,a)=>{const o=.03-a*.25;e("Trace "+(this.page*2+a+1)+": "+wt.find(l=>l.id===r.sound).label,0,o,2.1,.11,()=>{}),e("Change sound",-.55,o-.12,1.05,.11,()=>{this.changeSound(r,1),n()}),e("Delete",.55,o-.12,1.05,.11,()=>{this.remove(r),n()})}),e("Draw: hold right trigger at ground",0,-.48,2.1,.12,t),e("More traces / mixer for volume",0,-.63,2.1,.12,()=>{this.page=(this.page+1)%s,n()})}}function jg(){const i=new st,e=new st;e.name="courtyard",i.add(e);const t=new $t({color:"#77796b",roughness:.92}),n=new $t({color:"#aaa58e",roughness:.78}),s=new $t({color:"#344033",roughness:1}),r=new $t({color:"#405940",roughness:.95}),a=new $t({color:"#2c4435",roughness:.95}),o=new $t({color:"#739b91",roughness:.22,metalness:.12,transparent:!0,opacity:.88}),l=new $t({color:"#b28b4d",roughness:.38,metalness:.55}),c=new $t({color:"#f5cb78",emissive:"#e49d42",emissiveIntensity:1.6,roughness:.3});i.add(new nl("#d3ded0","#202c20",1.35));const h=new sl("#c2d0c6",1.25);h.position.set(-5,10,4),i.add(h);const f=new Pe(new rn(14,24),t);f.rotation.x=-Math.PI/2,f.position.set(0,-.04,8),f.receiveShadow=!0,e.add(f);const u=new Pe(new Nr(1.05,32),s);u.rotation.x=-Math.PI/2,u.position.set(-1.55,-.015,1.6),e.add(u);function p(T,w){const C=new st;return C.name=T,C.userData.satieId=T,C.position.set(...w),e.add(C),C}function d(T,w,C,v=[0,0,0]){const b=new Pe(w,C);return b.position.set(...v),b.castShadow=!0,b.receiveShadow=!0,T.add(b),b}function _(T,w){const C=new Pe(new Bt(...w),n);C.position.set(...T),C.castShadow=!0,C.receiveShadow=!0,e.add(C)}const m=p("central_fountain",[0,0,6]);d(m,new xt(.9,1,.18,40),n,[0,.24,0]),d(m,new xt(.72,.78,.12,40),t,[0,.39,0]),d(m,new xt(.66,.66,.025,40),o,[0,.46,0]),d(m,new xt(.12,.2,.45,16),n,[0,.66,0]),d(m,new ut(.12,16,12),o,[0,.93,0]);function g(T,w){const C=p(T,w);d(C,new xt(.055,.08,.8,10),l,[0,.4,0]),d(C,new xt(.17,.17,.07,12),l,[0,.83,0]),d(C,new Bt(.22,.27,.22),c,[0,1.02,0]),d(C,new si(.18,.12,12),l,[0,1.22,0]);const v=new Or("#f0b968",1.2,5,1.8);v.position.set(0,1,0),C.add(v)}g("left_lantern",[-2.598076211353316,0,1.5000000000000004]),g("right_lantern",[2.598076211353316,0,1.5000000000000004]);const M=p("entrance_hedge",[-1.55,0,1.6]);d(M,new Bt(.7,.8,3),r,[0,.4,0]);for(let T=0;T<7;T+=1){const w=(T%2===0?-1:1)*.22,C=-1.2+T*.4;d(M,new ut(.32,12,8),a,[w,.58,C])}const E=p("back_hedge",[0,0,11]);d(E,new Bt(8,.8,.7),r,[0,.4,0]);for(let T=0;T<14;T+=1){const w=-3.4+T*.52;d(E,new ut(.43,12,8),a,[w,.58,0])}const S=p("outer_shrub",[3.742410434719668,0,17.606656813208502]);d(S,new xt(.12,.2,1.2,9),n,[0,.6,0]);for(const[T,w,C,v]of[[-.45,1.1,0,.72],[.35,1.35,.18,.8],[0,1.75,-.18,.72],[.48,.95,-.32,.58]])d(S,new ut(v,14,10),r,[T,w,C]);return _([-5,.28,6],[.5,.56,12]),_([5,.28,6],[.5,.56,12]),_([0,.28,12],[10.5,.56,.5]),{root:i,hosts:e}}function Eu(i,e,t=null,n=null){i.replaceChildren();const s=document.createElement("h2");s.textContent="Outdoor sound mixer",i.append(s);const r=document.createElement("p");if(r.textContent="Birds and rustling leaves lead the mix; water, a soft breeze and gentle chimes fill the background. Each control affects only its named source.",i.append(r),t){const u=document.createElement("h3");u.textContent="Add an outdoor object",i.append(u);const p=document.createElement("p");p.textContent="Choose one to place it in front of you. Each added object has its own sound and mixer row. Up to 16 added objects; these last for this visit.",i.append(p);const d=document.createElement("div");d.className="outdoor-mix-tools";for(const _ of Pr){const m=document.createElement("button");m.textContent="+ "+_.name,m.onclick=()=>t.add(_.type),d.append(m)}i.append(d)}n==null||n.mount(i);const a=()=>e.channels().map(u=>u.id).join()+"/"+(n?n.items.map(u=>u.id+u.sound).join()+n.nextSound+n.armed+n.message:""),o=a(),l=new Map;for(const u of e.channels()){const p=document.createElement("div");p.className="outdoor-mix-row";const d=document.createElement("label");d.textContent=u.label;const _=document.createElement("input");_.type="range",_.min="0",_.max="100",_.value=String(Math.round(u.level*100)),_.setAttribute("aria-label",u.label+" volume"),d.append(_);const m=document.createElement("output");m.textContent=_.value+"%";const g=document.createElement("button");if(g.type="button",g.setAttribute("aria-label","Mute "+u.label),_.oninput=()=>e.setChannel(u.id,Number(_.value)/100),g.onclick=()=>e.toggleChannel(u.id),p.append(d,m,g),i.append(p),u.id.startsWith("placed-")&&t){const M=document.createElement("div");M.className="outdoor-mix-tools";for(const[E,S]of[["Move here",()=>t.moveHere(u.id)],["Remove",()=>t.remove(u.id)]]){const T=document.createElement("button");T.textContent=E,T.onclick=S,M.append(T)}i.append(M)}l.set(u.id,{input:_,output:m,mute:g})}const c=document.createElement("div");c.className="outdoor-mix-tools";for(const[u,p]of[["Mute all",()=>e.muteAll(!0)],["Unmute all",()=>e.muteAll(!1)],["Reset lively mix",()=>e.resetMix()]]){const d=document.createElement("button");d.type="button",d.textContent=u,d.onclick=p,c.append(d)}i.append(c);let h=()=>{};function f(){if(a()!==o){h(),Eu(i,e,t,n);return}for(const u of e.channels()){const p=l.get(u.id);p.input.value=String(Math.round(u.level*100)),p.output.textContent=p.input.value+"%",p.mute.textContent=u.muted?"Unmute":"Mute",p.mute.setAttribute("aria-pressed",String(u.muted)),p.mute.setAttribute("aria-label",(u.muted?"Unmute ":"Mute ")+u.label)}}return f(),h=e.subscribe(f),h}class Kg{constructor({scene:e,camera:t,door:n,engine:s,sources:r,toast:a,keys:o}){var g;Object.assign(this,{scene:e,camera:t,engine:s,sources:r,toast:a,keys:o}),this.active=!1,this.paused=!1,this.travel=null,this.indoorSaved=new Map;const l=[...e.children];this.indoor=new st,this.indoor.name="Original bedroom",e.add(this.indoor);for(const M of l)M!==t&&this.indoor.attach(M);this.indoorStyle={background:e.background.clone(),fog:(g=e.fog)==null?void 0:g.clone()};const c=jg();this.outdoor=c.root,this.outdoor.visible=!1,e.add(this.outdoor),this.eden=kg(e,c.hosts),this.ambience=new Vg,this.traces=new Zg(this.outdoor,this.ambience),this.objects=new Hg(this.outdoor,this.ambience,()=>this.view||this.camera);const h=[...n.children];n.updateWorldMatrix(!0,!0),this.hinge=new st,this.hinge.position.x=-.65,n.add(this.hinge);for(const M of[0,5,6,7,8,12,13])h[M]&&this.hinge.attach(h[M]);this.indoorHit=h[0],this.indoorHit.userData.portal=()=>this.open(!0),this.returnDoor=Gg(c.hosts,{x:0,z:-2,title:"Open door - return to bedroom",onOpen:()=>this.open(!1)});const f=document.createElement("canvas");f.width=768,f.height=128;const u=f.getContext("2d");u.fillStyle="#244b43",u.fillRect(0,0,768,128),u.fillStyle="#fff7df",u.font="34px system-ui",u.textAlign="center",u.fillText("INNER EDEN - open door",384,80);const p=new Ur(f);p.colorSpace=Ft;const d=new Pe(new rn(1.7,.28),new It({map:p,side:Ht}));d.position.set(0,2.95,.12),n.add(d);const _=document.getElementById("eden-status");this.status=_;const m=document.getElementById("outdoor-mixer");m!=null&&m.replaceChildren&&Eu(m,this.ambience,this.objects,this.traces),document.getElementById("eden-mix-toggle").onclick=()=>{m.hidden=!m.hidden,this.keys.clear()};for(const M of document.querySelectorAll("[data-eden-preset]"))M.onclick=()=>this.set(Er[M.dataset.edenPreset]);for(const M of["energy","nature","dreaminess"])document.getElementById("eden-"+M).oninput=E=>this.set({[M]:Number(E.target.value)/100});document.getElementById("eden-personalize").onclick=()=>{this.set(zg(document.getElementById("eden-feeling").value,document.getElementById("eden-place").value)),this.toast("Your words selected an existing paradise setting.")},document.getElementById("eden-save").onclick=()=>this.favorite(),document.getElementById("eden-load").onclick=()=>this.loadFavorite(),document.getElementById("eden-enter").onclick=()=>{document.getElementById("eden-dialog").close(),this.open(!0)},document.getElementById("eden-close").onclick=()=>document.getElementById("eden-dialog").close(),document.getElementById("eden-setup").onclick=()=>{this.keys.clear(),document.getElementById("eden-dialog").showModal()},document.getElementById("eden-back").onclick=()=>this.open(!1),this.sync()}registerIndoor(e){this.indoor.attach(e)}get hits(){return this.active?[this.returnDoor.hit]:[this.indoorHit]}get bounds(){return this.active?{outdoor:!0}:null}set(e){this.eden.set(e),this.sync()}sync(){for(const e of["energy","nature","dreaminess"])document.getElementById("eden-"+e).value=Math.round(this.eden.target[e]*100)}favorite(){const e=document.getElementById("eden-name").value.trim()||"My paradise";localStorage.setItem("sound-room-eden-favorite",JSON.stringify({name:e,settings:this.eden.target})),this.toast("Saved "+e)}loadFavorite(){try{const e=JSON.parse(localStorage.getItem("sound-room-eden-favorite"));e!=null&&e.settings&&(this.set(e.settings),document.getElementById("eden-name").value=e.name||"My paradise",this.toast("Favorite restored."))}catch{this.toast("No saved favorite yet.")}}open(e){this.travel||this.active===e||(this.keys.clear(),this.travel={outdoor:e,time:0},this.ambience.start().catch(console.error),this.toast(e?"Door opening to Inner Eden…":"Door opening to the bedroom…"))}update(e,t,n,s){var r;if(this.view=s,this.returnDoor.update(e),this.travel&&(this.travel.time+=e,this.travel.outdoor&&(this.hinge.rotation.y=bt.lerp(this.hinge.rotation.y,-Math.PI*.48,1-Math.exp(-e*6))),this.travel.time>.7)){const a=this.travel.outdoor;this.travel=null,this.traces.cancel(),this.traces.armed=!1,this.active=a,this.indoor.visible=!a,this.outdoor.visible=a,this.paused=!1,this.ambience.active=a,a&&this.returnDoor.reset();const o=a?new P(0,0,0):new P(-3.85,0,-4.2);if(n.renderer.xr.isPresenting){const l=n.syncHead();n.rig.position.x+=o.x-l.position.x,n.rig.position.z+=o.z-l.position.z,n.rig.position.y=0,n.rig.rotation.y=Math.PI,n.menu.visible=!1}else this.camera.position.set(o.x,1.7,o.z),this.camera.rotation.set(-.04,Math.PI,0);this.engine.master&&this.engine.ctx&&this.engine.master.gain.setTargetAtTime(a?0:.65,this.engine.ctx.currentTime,.4),a||(this.scene.background=this.indoorStyle.background.clone(),this.scene.fog=(r=this.indoorStyle.fog)==null?void 0:r.clone(),this.hinge.rotation.y=0),document.body.classList.toggle("in-eden",a),this.keys.clear(),n.buildMenu(),this.toast(a?"Inner Eden: shore, grove and overlook. Open EDEN controls.":"Welcome back to the bedroom.")}this.active&&(this.traces.update(e),this.eden.update(e,t),this.status.textContent=this.paused?"Paused here — enjoy your favorite spot.":"Explore the shore, grove and overlook."),this.ambience.update(s,this.eden.settings,t)}clamp(e,t){return this.active?Ji(e,t):{x:bt.clamp(e,-5.35,5.35),z:bt.clamp(t,-5.35,5.35)}}height(e,t){return this.active?Mi(e,t):0}}const rs=[{type:"bed",name:"Bed",desc:"Soft duvet & pillows · quiet",category:"Furniture",color:"#a8c9ac",radius:1.6,height:1.5},{type:"books",name:"Books",desc:"Gentle pages turning",category:"Everyday",sound:"books",volume:.3,color:"#e7be8e",radius:.65,height:1.2},{type:"shelf",name:"Bookshelf",desc:"A little library · quiet",category:"Furniture",color:"#c49c78",radius:1,height:2.4},{type:"lamp",name:"Bedside lamp",desc:"A warm pool of light · quiet",category:"Furniture",color:"#ffe2a3",radius:.65,height:1.9},{type:"rug",name:"Rug",desc:"Make a cozy corner · quiet",category:"Furniture",color:"#b4a7cc",radius:1.5,height:.3},{type:"plant",name:"Houseplant",desc:"A little green · quiet",category:"Furniture",color:"#9ec998",radius:.6,height:1.6},{type:"fan",name:"Desk fan",desc:"A steady, gentle whirr",category:"Sounds",sound:"fan",volume:.22,color:"#9bcbd3",radius:.7,height:1.9},{type:"clock",name:"Alarm clock",desc:"A soft tick, not an alarm",category:"Sounds",sound:"clock",volume:.28,color:"#f2bf81",radius:.65,height:1.5},{type:"bird",name:"Birds at the window",desc:"One to three birds fly closer and farther",category:"Sounds",sound:"bird",volume:.35,color:"#efd887",radius:.8,height:2.5},{type:"tv",name:"Television",desc:"A quiet electronic hum",category:"Sounds",sound:"tv",volume:.2,color:"#a6b9e5",radius:1,height:1.9},{type:"record",name:"Record player",desc:"Soft vinyl groove & crackle",category:"Sounds",sound:"record",volume:.4,color:"#e6b9ad",radius:.8,height:1.6},{type:"rain",name:"Rain window",desc:"Rain against the glass",category:"Sounds",sound:"rain",volume:.25,color:"#8dc8e8",radius:1,height:2.55},{type:"piano",name:"Piano",desc:"Warm lo-fi keys · 80 BPM",category:"Music",sound:"piano",volume:.6,color:"#d6f48a",radius:1.05,height:1.9},{type:"strings",name:"Ambient strings",desc:"Slow viola drone & bowed bass",category:"Music",sound:"strings",volume:.3,color:"#cda77e",radius:1,height:2.2},{type:"drums",name:"Drummer",desc:"Instrument display · quiet",category:"Music",color:"#f4b879",radius:1.05,height:1.9}],Tu=[{type:"bed",x:2.7,z:-1.2},{type:"lamp",x:4.3,z:-2.6},{type:"books",x:.1,z:-.7},{type:"shelf",x:-4.2,z:-3.9},{type:"rug",x:0,z:1.5},{type:"fan",x:-2.6,z:-.7},{type:"clock",x:4.3,z:.1},{type:"bird",x:0,z:-5.15},{type:"strings",x:-1.8,z:2.4}];function Qg(i,e,t){const{box:n,cylinder:s,mat:r,wood:a,dark:o,ivory:l,metal:c}=t,h=r(i.color),f=r("#e9e1ce"),u=()=>{n(e,.85,.11,.65,0,.72,0,a);for(const d of[-.34,.34])for(const _ of[-.23,.23])n(e,.055,.68,.055,d,.34,_,a)},p=(d,_,m,g,M)=>{const E=new Pe(new ut(d,20,16),M);return E.position.set(_,m,g),E.castShadow=!0,e.add(E),E};if(i.type==="bed"){n(e,2.05,.22,3.1,0,.32,0,a);for(const d of[-.82,.82])for(const _ of[-1.25,1.25])n(e,.14,.3,.14,d,.15,_,a);n(e,2.08,1.12,.14,0,.75,-1.5,a),n(e,1.96,.32,2.9,0,.59,0,f),n(e,1.99,.12,2.03,0,.8,.43,h),n(e,1.99,.06,.28,0,.87,-.44,f);for(const d of[-.49,.49])n(e,.79,.16,.49,d,.83,-1.02,l);n(e,2.01,.48,.045,0,.54,1.46,h);for(const d of[-.99,.99])n(e,.045,.4,1.98,d,.58,.43,h)}else if(i.type==="books"){u();for(let d=0;d<3;d++){const _=r(["#9c6652","#8faaa0","#bfaa7e"][d]),m=new st;m.position.set(0,.81+d*.13,0),m.rotation.y=d*.18,e.add(m),n(m,.55,.085,.36,0,0,0,f);for(const g of[-.05,.05])n(m,.58,.02,.39,0,g,0,_);n(m,.025,.11,.39,-.28,0,0,_)}}else if(i.type==="shelf"){for(const d of[-.72,.72])n(e,.09,2,.45,d,1,0,a);n(e,1.5,2,.06,0,1,-.22,a);for(let d=0;d<4;d++){const _=.1+d*.58;n(e,1.5,.07,.48,0,_,0,a);for(let m=0;m<9;m++){const g=.26+m%3*.06;n(e,.1,g,.26,-.59+m*.145,_+.04+g/2,0,r(["#b87760","#8cafa1","#bbab78","#8d98b3"][m%4]))}}}else if(i.type==="lamp"){u(),s(e,.19,.22,.04,0,.81,0,c),s(e,.025,.025,.5,0,1.08,0,c),s(e,.18,.34,.38,0,1.4,0,h);const d=new Or("#ffd691",2.4,3.5);d.position.set(0,1.25,0),e.add(d)}else if(i.type==="rug"){n(e,2.8,.025,2.15,0,.025,0,h);for(const d of[-1.28,1.28])n(e,.04,.005,1.95,d,.042,0,f);for(const d of[-.96,.96])n(e,2.6,.005,.04,0,.042,d,f)}else if(i.type==="plant"){s(e,.24,.17,.42,0,.22,0,r("#ba8264")),s(e,.025,.025,.78,0,.78,0,a);for(let d=0;d<7;d++){const _=d*2.4,m=p(.2,Math.cos(_)*.2,.65+d*.08,Math.sin(_)*.2,h);m.scale.set(.55,1.2,.7),m.rotation.z=Math.sin(_)*.9}}else if(i.type==="fan"){u(),s(e,.19,.24,.045,0,.81,0,c),n(e,.055,.43,.055,0,1.03,0,c);const d=new Pe(new cs(.34,.025,8,40),c);d.position.set(0,1.4,0),e.add(d);const _=i.spinner=new st;_.position.set(0,1.4,0),e.add(_);for(let m=0;m<3;m++){const g=n(_,.13,.4,.025,0,0,0,h);g.position.set(Math.sin(m*2.094)*.12,Math.cos(m*2.094)*.12,0),g.rotation.z=-m*2.094}p(.06,0,1.4,.04,c);for(let m=0;m<8;m++){const g=m*Math.PI/4,M=n(e,.009,.66,.012,0,1.4,.07,c);M.rotation.z=g}}else if(i.type==="clock"){u();const d=s(e,.26,.26,.12,0,1.06,0,h);d.rotation.x=Math.PI/2;const _=s(e,.225,.225,.012,0,1.06,.07,l);_.rotation.x=Math.PI/2,n(e,.018,.16,.018,0,1.12,.09,o);const m=n(e,.14,.018,.018,.06,1.06,.09,o);m.rotation.z=-.4;for(const g of[-.19,.19])p(.09,g,1.31,0,h)}else if(i.type==="bird"){for(const d of[-1.25,1.25])n(e,.1,2.45,.1,d,2,-.68,a);for(const d of[.78,3.22])n(e,2.6,.1,.1,0,d,-.68,a);n(e,2.55,.045,.4,0,.75,-.49,l),n(e,.045,2.4,.06,0,2,-.62,l),n(e,2.5,.04,.06,0,2,-.62,l),i.birds=[];for(let d=0;d<3;d++){const _=new st;e.add(_);const m=r(["#efd887","#b9d3bc","#e7b698"][d]),g=new Pe(new ut(.12,16,12),m);g.scale.set(1,1,1.45),_.add(g);const M=new Pe(new ut(.075,12,10),m);M.position.set(0,.08,.1),_.add(M);const E=new Pe(new si(.035,.095,6),r("#da9462"));E.rotation.x=Math.PI/2,E.position.set(0,.07,.2),_.add(E);const S=new st,T=new st;_.add(S,T);for(const[w,C]of[[S,-1],[T,1]]){w.position.x=C*.08;const v=new Pe(new si(.07,.28,5),m);v.rotation.z=C*Math.PI/2,v.position.x=C*.14,w.add(v)}i.birds.push({group:_,wing:S,otherWing:T,active:d===0}),_.visible=d===0}}else if(i.type==="strings"){const d=r("#9a6340",.42),_=r("#bd8656",.4),m=r("#2d2826");for(const[g,M,E,S,T]of[[-.31,.58,.58,d,!1],[.34,.13,1.08,_,!0]]){const w=new st;w.position.set(g,M,0),w.scale.setScalar(E),e.add(w);const C=new Pe(new ut(.27,20,16),S);C.scale.set(.78,1.3,.4),C.position.y=.76,w.add(C),n(w,.11,.9,.1,0,1.49,0,S),n(w,.065,1.12,.025,0,1.37,.075,m);for(const v of[-1,1])n(w,.035,.13,.07,v*.11,1.87,.04,m);T&&n(w,.025,.45,.025,0,.15,0,c);for(const v of[-1,1])n(w,.025,.32,.02,v*.1,.81,.12,m)}for(const g of[-.47,-.15])n(e,.025,.55,.025,g,.31,0,c);n(e,.37,.025,.17,-.31,.55,0,c),n(e,.92,.07,.46,0,.08,0,a)}else if(i.type==="tv")n(e,1.55,.5,.5,0,.3,0,a),n(e,1.42,.83,.11,0,1.04,0,o),n(e,1.3,.71,.015,0,1.04,.065,new $t({color:"#7c9bb0",emissive:"#466f85",emissiveIntensity:.35})),n(e,.1,.24,.12,0,.57,0,c);else if(i.type==="record")u(),n(e,.74,.1,.54,0,.85,0,h),s(e,.22,.22,.02,-.08,.92,0,o),s(e,.065,.065,.025,-.08,.94,0,f),n(e,.025,.025,.32,.24,.95,0,c);else return!1;return!0}const ne=i=>document.querySelector(i),Ie=new Og,zt=[],Jt=[],jt=new Set;let e_=1,ll=1,St=null;const Ut=new td;Ut.background=new Ue("#172329");Ut.fog=new Yo("#172329",.045);const Je=new Kt(62,innerWidth/innerHeight,.08,65);Je.rotation.order="YXZ";const pt=new Ng({antialias:!0});pt.setSize(innerWidth,innerHeight);pt.setPixelRatio(Math.min(devicePixelRatio,2));pt.shadowMap.enabled=!0;pt.shadowMap.type=kc;pt.outputColorSpace=Ft;pt.toneMapping=Uo;pt.toneMappingExposure=1.25;ne("#world").append(pt.domElement);ne("#enter").disabled=!0;ne("#enter").textContent="Loading room audio…";ne("#open-satie-mixer").disabled=!0;Ie.attach({scene:Ut,camera:Je,renderer:pt}).then(()=>{Ie.prepare(zt),ne("#enter").disabled=!1,ne("#enter").innerHTML="Enter the room <span>↗</span>",ne("#open-satie-mixer").disabled=!1}).catch(i=>{console.error(i),ne("#enter").textContent="Audio failed to load",ne("#status").textContent="AUDIO UNAVAILABLE"});Ie.onMixerOpenChange=i=>{document.body.classList.toggle("satie-mixing",i),ne("#open-satie-mixer").textContent=i?"Use room mix":"Use SATIE mixer",ne("#open-satie-mixer").setAttribute("aria-pressed",String(i)),i&&(jt.clear(),Ei(!1),ne("#library").open&&ne("#library").close(),ne("#help-dialog").open&&ne("#help-dialog").close());for(const e of zt)e.ring&&(e.ring.visible=!i)};ne("#open-satie-mixer").onclick=()=>Ie.mixerOpen?Ie.closeMixer():Ie.openMixer();ne("#open-satie-mixer").hidden=!0;Ut.add(new nl("#c4dbe1","#28302c",2));const oi=new sl("#ffe2bd",3);oi.position.set(-3,7,4);oi.castShadow=!0;oi.shadow.mapSize.set(2048,2048);oi.shadow.camera.left=-8;oi.shadow.camera.right=8;oi.shadow.camera.top=8;oi.shadow.camera.bottom=-8;Ut.add(oi);const dt=(i,e=.7,t=0)=>new $t({color:i,roughness:e,metalness:t}),Ts=dt("#4c4137"),ei=dt("#182225"),ys=dt("#9aa7a4",.25,.7),gr=dt("#e7e1c9"),kr=dt("#c8a66c",.3,.55);function We(i,e,t,n,s,r,a,o){const l=new Pe(new Bt(e,t,n),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function Mn(i,e,t,n,s,r,a,o){const l=new Pe(new xt(e,t,n,40),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}const Zt=new st;Ut.add(Zt);We(Ut,12,.15,12,0,-.1,0,dt("#394444"));for(let i=-6;i<=6;i+=.6)We(Ut,.012,.005,12,i,.002,0,dt("#6a7267"));const Vr=dt("#354247");We(Zt,1.55,4,.18,-5.225,2,-6,Vr);We(Zt,1.95,4,.18,-2.275,2,-6,Vr);We(Zt,1.2,1.4,.18,-3.85,3.3,-6,Vr);We(Zt,4.7,4,.18,3.65,2,-6,Vr);We(Zt,2.6,.8,.18,0,.4,-6,dt("#354247"));We(Zt,2.6,.85,.18,0,3.575,-6,dt("#354247"));We(Zt,.18,4,12,-6,2,0,dt("#303a3e"));We(Zt,.18,4,12,6,2,0,dt("#354247"));for(let i=-5;i<=5;i+=2)if(!(Math.abs(i)<1.5||i===-3)){We(Zt,.5,2.5,.16,i,2,-5.85,ei);for(let e=0;e<5;e++)We(Zt,.035,2.4,.09,i-.18+e*.09,2,-5.72,Ts)}const ln=new st;ln.position.set(-3.85,0,-5.89);Zt.add(ln);const t_=dt("#866a50"),n_=dt("#705841"),cl=dt("#c8bda4");We(ln,1.22,2.52,.09,0,1.27,.015,t_);for(const i of[-.66,.66])We(ln,.12,2.65,.16,i,1.33,.1,cl);We(ln,1.45,.15,.17,0,2.65,.1,cl);We(ln,1.36,.055,.24,0,.045,.15,dt("#6c6557"));for(const i of[.73,1.86])We(ln,.91,.89,.035,0,i,.082,cl),We(ln,.79,.77,.025,0,i,.107,n_);for(const i of[.36,1.45,2.22])We(ln,.045,.12,.025,-.59,i,.11,kr);We(ln,.13,.28,.025,.44,1.04,.09,kr);const wu=new Pe(new ut(.07,16,12),kr);wu.position.set(.44,1.04,.18);ln.add(wu);We(Zt,1.4,.015,.47,-3.85,.012,-5.45,dt("#5b5147"));for(let i of[-5.7,5.7])We(Zt,.045,.035,10,i,.12,0,dt("#b6ca96"));const as=new st;as.visible=!1;Ut.add(as);for(let i of[-1,1])for(let e=-5;e<=5;e+=2.5)Mn(as,.26,.35,9,i*5.6,4.5,e,dt("#637274")),We(as,.8,.2,.8,i*5.6,.1,e,dt("#71807e"));for(let i=-5;i<=5;i+=2.5){const t=new jo(0,6,5.6,3.8,0,Math.PI,!1,0).getPoints(50).map(s=>new P(s.x,s.y,i)),n=new Pe(new Fr(new Qo(t),50,.08,8,!1),dt("#84908a"));as.add(n)}const Au=new Or("#b8d5eb",18,20);Au.position.set(0,6,-3);Ut.add(Au);const Zi=[];function i_(i){const e=i.group=new st;e.position.set(i.x,0,i.z),e.rotation.y=i.rotation||0,Ut.add(e),St==null||St.registerIndoor(e);const t=dt(i.color),n=new Pe(new cs(i.radius,.012,8,80),new It({color:i.color}));if(n.rotation.x=Math.PI/2,n.position.y=.09,n.visible=!Ie.mixerOpen,e.add(n),i.ring=n,!Qg(i,e,{box:We,cylinder:Mn,mat:dt,wood:Ts,dark:ei,ivory:gr,metal:ys}))if(i.type==="piano"){We(e,1.7,.52,.75,0,1.05,0,ei),We(e,1.76,.08,.85,0,1.35,0,Ts);for(let h=0;h<21;h++)We(e,.068,.05,.32,-.74+h*.074,.96,.48,gr);for(let h=0;h<20;h++)[2,6].includes(h%7)||We(e,.043,.05,.2,-.7+h*.074,1,.4,ei);for(let h of[-.68,.68])for(let f of[-.22,.22])We(e,.07,.8,.07,h,.43,f,ei);We(e,.65,.1,.32,0,.52,.95,Ts);for(let h of[-.25,.25])We(e,.06,.5,.25,h,.25,.95,ei)}else if(i.type==="drums"){const h=Mn(e,.42,.42,.5,0,.47,.25,t);h.rotation.x=Math.PI/2;const f=Mn(e,.39,.39,.02,0,.47,.51,gr);f.rotation.x=Math.PI/2;for(let p of[-.46,.43])Mn(e,.25,.25,.3,p,.9,-.05,t),Mn(e,.25,.25,.02,p,1.06,-.05,gr);for(let p of[-.8,.8])Mn(e,.025,.025,1.2,p,.6,-.35,ys),Mn(e,.38,.38,.025,p,1.2,-.35,kr);Mn(e,.26,.26,.08,0,.5,-.65,ei),Mn(e,.04,.04,.45,0,.25,-.65,ys);const u=new Pe(new ut(.15,20,20),dt("#c4ab91"));u.position.set(0,1.55,-.65),e.add(u),We(e,.34,.45,.22,0,1.18,-.65,dt("#667f80"));for(let p of[-.2,.2]){const d=We(e,.025,.025,.55,p,1.2,-.24,Ts);d.rotation.x=-.2}}else{We(e,1.4,2.2,.08,0,1.2,0,ei),We(e,1.2,1.95,.05,0,1.2,.06,new $t({color:"#659aa9",transparent:!0,opacity:.38,metalness:.5,roughness:.1})),We(e,.04,2.1,.09,0,1.2,.1,ys),We(e,1.35,.04,.09,0,1.2,.1,ys);const h=[];for(let u=0;u<75;u++)h.push((Math.random()-.5)*1.15,Math.random()*1.9+.23,.13);const f=new gt;f.setAttribute("position",new Ze(h,3)),i.drops=new cu(f,new Jo({color:i.color,size:.024})),e.add(i.drops)}const s=new Or(i.color,2,4);s.position.y=1.8,e.add(s),e.traverse(h=>{h.isMesh&&(h.userData.source=i,Zi.push(h))});const r=document.createElement("div");r.className="source-label",r.style.setProperty("--c",i.color),r.textContent=i.name.toUpperCase()+" ↔",ne("#source-labels").append(r),i.label=r;const a=document.createElement("div");a.className="track",a.style.setProperty("--c",i.color),a.innerHTML=`<div class="track-top"><span class="swatch"></span><div class="track-title">${i.name}<small>${i.desc}</small></div>${i.sound?`<button class="mute" aria-pressed="${!!i.muted}" aria-label="${i.muted?"Unmute":"Mute"} ${i.name}">${i.muted?"Unmute":"Mute"}</button>`:'<span class="quiet-badge">Quiet</span>'}<button class="remove-object" aria-label="Remove ${i.name}">×</button></div><div class="track-bottom"><div class="arrows">${[["←",-.5,0],["↑",0,-.5],["↓",0,.5],["→",.5,0]].map(([h,f,u])=>`<button aria-label="Move ${i.name} ${h}" data-x="${f}" data-z="${u}">${h}</button>`).join("")}</div><div class="meter">${[6,12,8,15,10,5,11,7].map(h=>`<i style="--h:${h}px"></i>`).join("")}</div></div>`,i.sound&&(a.querySelector(".mute").onclick=h=>{i.muted=!i.muted,Ie.mute(i),h.target.textContent=i.muted?"Unmute":"Mute",h.target.setAttribute("aria-pressed",i.muted),h.target.setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${i.name}`),a.querySelector(".meter").style.opacity=i.muted?.15:1,Gn()}),a.querySelectorAll("[data-x]").forEach(h=>h.onclick=()=>Gr(i,i.x+Number(h.dataset.x),i.z+Number(h.dataset.z)));const o=document.createElement("div");o.className="object-tools",o.innerHTML=`<button class="rotate" aria-label="Rotate ${i.name}">↻ Rotate</button>${i.sound?`<label>Volume <input aria-label="${i.name} volume" type="range" min="0" max="100" value="${Math.round(i.volume*100)}"></label>`:""}`,o.querySelector(".rotate").onclick=()=>{i.rotation=(i.rotation||0)+Math.PI/4,i.group.rotation.y=i.rotation,Gn()};const l=o.querySelector("input");l&&(l.oninput=()=>{i.volume=Number(l.value)/100,Ie.mute(i),Gn()}),a.append(o),a.querySelector(".remove-object").onclick=()=>ml(i),ne("#tracks").append(a),i.row=a;const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("r",7),c.setAttribute("fill",i.color),c.dataset.id=i.id,c.innerHTML=`<title>${i.name}: drag to move</title>`,ne("#map-dots").append(c),i.dot=c}function Gr(i,e,t){i.x=bt.clamp(e,-6+i.radius,6-i.radius),i.z=bt.clamp(t,-6+i.radius,6-i.radius),i.group.position.set(i.x,0,i.z),Ie.move(i),Gn()}let ul,Bc;function mt(i){ne("#toast").textContent=i,ne("#toast").classList.add("show"),clearTimeout(Bc),Bc=setTimeout(()=>ne("#toast").classList.remove("show"),3500)}function Fs(i){Ie.setPreset(i);for(const e of["studio","cathedral"])ne("#"+e).classList.toggle("active",e===i),ne("#"+e).setAttribute("aria-pressed",e===i);as.visible=i==="cathedral",Zt.scale.y=i==="cathedral"?2.5:1,ne("#acoustic-note").textContent=i==="cathedral"?"Long reflections · 5.5 s tail":"Short reflections · 0.35 s tail",Ut.fog.density=i==="cathedral"?.028:.045}for(const i of["studio","cathedral"])ne("#"+i).onclick=()=>{clearTimeout(ul),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after",Fs(i),mt(i==="studio"?"Small studio · intimate & dry":"Large cathedral · same performance, different space")};async function hl(){try{await Ie.start(zt,Jt),ne("#welcome").classList.add("hidden"),Cu()}catch(i){mt("Audio could not start. Please retry."),console.error(i)}}function Cu(){ne("#sound").textContent=Ie.playing?"Ⅱ Pause listening":"▶ Start listening",ne("#status").textContent=Ie.playing?"LIVE / SPATIAL AUDIO":"PAUSED"}ne("#enter").onclick=hl;ne("#sound").onclick=async()=>{try{await Ie.toggle(zt,Jt),Cu()}catch(i){mt("Unable to start audio. Please retry."),console.error(i)}};ne("#compare").onclick=async()=>{!Ie.playing&&(await hl(),!Ie.playing)||(Fs("studio"),mt("Before: small studio. Listen to the dry notes…"),ne("#compare").disabled=!0,ne("#compare").textContent="Listening to the studio…",ul=setTimeout(()=>{Fs("cathedral"),mt("After: large cathedral. Same loops, longer reflections."),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after"},4500))};function Ru(){Je.position.set(0,1.7,5),Je.rotation.set(-.08,0,0)}Ru();ne("#reset").onclick=()=>{clearTimeout(ul),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after";for(const i of[...zt])ml(i,!1);for(const i of[...Jt])pl(i,!1);Ei(!1);for(const i of Tu)Yr(i.type,i,!1);Fs("studio"),Ru(),Gn(),ai(),mt("Bedroom restored. Add objects or draw traces to make it yours.")};ne("#help").onclick=()=>ne("#help-dialog").showModal();ne("#close-help").onclick=()=>ne("#help-dialog").close();const Hr=new $g(jt),Pu=()=>!pt.xr.isPresenting&&!(St!=null&&St.paused)&&!Ie.mixerOpen&&ne("#welcome").classList.contains("hidden")&&!ne("#eden-dialog").open&&!ne("#help-dialog").open&&!ne("#library").open&&document.visibilityState!=="hidden"&&document.hasFocus()&&!al(document.activeElement);addEventListener("keydown",i=>Hr.down(i,Pu()),!0);addEventListener("keyup",i=>Hr.up(i),!0);const Bs=()=>{Hr.clear(),ri=null,Wr=!1};addEventListener("blur",Bs,!0);addEventListener("pagehide",Bs,!0);document.addEventListener("visibilitychange",Bs,!0);document.addEventListener("freeze",Bs,!0);document.addEventListener("focusin",i=>{al(i.target)&&Bs()},!0);const Dr=new rl,zc=new we,s_=new yn(new P(0,1,0),0),La=new P;let ri=null,Wr=!1,Ro=0,Po=0;function Do(i){zc.set(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1),Dr.setFromCamera(zc,Je)}pt.domElement.addEventListener("contextmenu",i=>i.preventDefault());pt.domElement.addEventListener("pointerdown",i=>{var n,s,r,a;if(Ie.mixerOpen||!ne("#welcome").classList.contains("hidden"))return;Do(i);const e=Dr.intersectObjects((St==null?void 0:St.hits)||[])[0];if(e){e.object.userData.portal();return}if(i.button===2){Wr=!0,Ro=i.clientX,Po=i.clientY,pt.domElement.setPointerCapture(i.pointerId);return}if(document.pointerLockElement)return;Do(i);const t=Dr.intersectObjects(Zi);t.length?(ri=t[0].object.userData.source,pt.domElement.setPointerCapture(i.pointerId),mt(`Moving ${ri.name}. Drag across the floor.`)):(a=(r=(s=(n=pt.domElement).requestPointerLock)==null?void 0:s.call(n))==null?void 0:r.catch)==null||a.call(r,()=>mt("Hold right mouse and drag to look around."))});addEventListener("pointermove",i=>{Ie.mixerOpen||(document.pointerLockElement===pt.domElement?(Je.rotation.y-=i.movementX*.002,Je.rotation.x=bt.clamp(Je.rotation.x-i.movementY*.002,-1.1,1.1)):Wr?(Je.rotation.y-=(i.clientX-Ro)*.004,Je.rotation.x=bt.clamp(Je.rotation.x-(i.clientY-Po)*.004,-1.1,1.1),Ro=i.clientX,Po=i.clientY):ri&&(Do(i),Dr.ray.intersectPlane(s_,La)&&Gr(ri,La.x,La.z)))});addEventListener("pointerup",()=>{ri=null,Wr=!1});document.addEventListener("pointerlockchange",()=>{document.body.classList.toggle("locked",document.pointerLockElement===pt.domElement),jt.clear()});const Vn=rs.filter(i=>i.sound);for(const i of Vn){const e=document.createElement("option");e.value=i.sound,e.textContent=i.name,ne("#trace-sound").append(e)}ne("#trace-sound").value="bird";let ji=!1,bn=null,ct=null,bi=null;const yi=ne("#map");function Xr(i){const e=yi.getBoundingClientRect();return[bt.clamp(((i.clientX-e.left)/e.width*200-100)/15,-5.8,5.8),bt.clamp(((i.clientY-e.top)/e.height*200-100)/15,-5.8,5.8)]}function Du(i){const[e,t]=Xr(i);Gr(bi,e,t)}function Os(i){var e;return((e=Vn.find(t=>t.sound===i))==null?void 0:e.color)||"#d6f48a"}function Lu(i){const e=new It({color:Os(i.sound),transparent:!0,opacity:.76});i.group=new st,Ut.add(i.group),i.line=new Pe(new gt,e),i.group.add(i.line),i.ends=[0,1].map(()=>{const t=new Pe(new ut(.075,10,8),e);return i.group.add(t),t}),i.mapPath=document.createElementNS("http://www.w3.org/2000/svg","polyline");for(const[t,n]of Object.entries({fill:"none",stroke:Os(i.sound),"stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","pointer-events":"none"}))i.mapPath.setAttribute(t,n);ne("#map-traces").append(i.mapPath),Iu(i),qr(i)}function Iu(i){const e=i.style=ol(i.sound),t=Os(i.sound);i.line.material.color.set(t),i.mapPath.setAttribute("stroke",t),i.mapPath.setAttribute("stroke-dasharray",e.dash),i.mapPath.classList.add("trace-map-line"),i.mapPath.style.animationDuration=`${12/e.pace}s`;for(const n of i.effects||[])i.group.remove(n),n.geometry.dispose(),n.material.dispose();if(i.effects=[],!i.isDraft)for(let n=0;n<e.count;n++){let s;["spin","ring"].includes(e.effect)?s=new cs(e.effect==="ring"?.11:.08,.012,5,16):e.effect==="flutter"?s=new si(.06,.14,3):["page","flicker","tick","key"].includes(e.effect)?s=new Bt(e.effect==="page"?.13:.07,e.effect==="tick"?.16:.07,.045):s=new ut(e.effect==="drop"?.04:.055,8,6);const r=new It({color:t,transparent:!0,opacity:.85}),a=new Pe(s,r);i.group.add(a),i.effects.push(a)}}function qr(i){const e=i.points;i.mapPath.setAttribute("points",e.map(([t,n])=>`${100+t*15},${100+n*15}`).join(" ")),i.line.geometry.dispose(),i.line.visible=e.length>1,i.line.geometry=e.length>1?new Fr(new Qo(e.map(([t,n])=>new P(t,.065,n))),Math.max(8,e.length*3),i.style.effect==="wave"?.04:.028,5,!1):new gt;for(const[t,n]of[[0,e[0]],[1,e.at(-1)]])i.ends[t].position.set(n[0],.07,n[1])}function r_(i,e){const t=i.style;i.line.material.opacity=i.muted?.2:.62+.15*Math.sin(e*t.pace*2);for(let n=0;n<i.effects.length;n++){const s=i.effects[n],r=(n/t.count+e*t.pace/10)%1,a=Co(i.points,r),o=Math.sin(e*(t.effect==="tick"?8:2)+n*2.4);s.position.set(a.x,.12,a.z),s.rotation.set(0,-a.angle,0),s.scale.setScalar(1),s.visible=!i.muted,t.effect==="drop"?(s.position.y=.08+.28*(1-(e*.7+n/t.count)%1),s.scale.y=1.8):t.effect==="flutter"?(s.position.y=.17+.09*o,s.rotation.z=e*5+n):t.effect==="page"?(s.position.y=.13+.07*o,s.rotation.z=o*.55):t.effect==="flicker"?(s.visible=!i.muted&&o>-.3,s.rotation.y=e*3+n):t.effect==="tick"?s.visible=!i.muted&&o>.35:t.effect==="key"?(s.position.y=.12+.05*Math.max(0,o),s.scale.y=.6+.7*Math.max(0,o)):t.effect==="wave"?(s.position.y=.14+.12*Math.sin(e*1.3+n*.8),s.scale.setScalar(.8+.35*Math.sin(e+n))):(s.rotation.x=Math.PI/2,s.rotation.z=e*(t.effect==="spin"?4:1.5),s.scale.setScalar(.75+.28*o))}}function Ki(i){Ut.remove(i.group),i.group.traverse(e=>{var t,n,s;(t=e.geometry)==null||t.dispose(),(s=(n=e.material)==null?void 0:n.dispose)==null||s.call(n)}),i.mapPath.remove()}function dl(){ne("#trace-count").textContent=String(Jt.length).padStart(2,"0"),ne("#trace-empty").hidden=Jt.length>0,Jt.forEach((i,e)=>{i.row.querySelector(".trace-number").textContent=String(e+1).padStart(2,"0")})}function ai(){try{localStorage.setItem("sound-room-pages-traces-v1",JSON.stringify(Jt.map(i=>({sound:i.sound,points:i.points,volume:i.volume,muted:i.muted}))))}catch{}}function Uu(i){return{sound:i.sound,x:i.x,z:i.z,volume:i.volume,muted:i.muted}}function Nu(i,e){if(i.sound===e)return;i.player.removed=!0,Ie.removeTrace(i.player),i.sound=e,i.player=Uu(i),Iu(i),qr(i);const t=Vn.find(n=>n.sound===e);i.row.style.setProperty("--c",Os(e)),i.row.querySelector("strong").textContent=`${t.name} trace`,i.row.querySelector("select").setAttribute("aria-label",`Sound for ${t.name} trace`),i.row.querySelector("select").value=e,i.row.querySelector(".trace-delete").setAttribute("aria-label",`Delete ${t.name} trace`),i.row.querySelector(".trace-mute").setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${t.name} trace`),i.row.querySelector("input").setAttribute("aria-label",`${t.name} trace volume`),Ie.ctx&&Ie.addTrace(i.player).catch(n=>{mt("Trace sound could not load. Choose another sound."),console.error(n)}),ai()}function a_(i){const e=Vn.find(s=>s.sound===i.sound),t=i.row=document.createElement("div");t.className="trace-row",t.setAttribute("role","listitem"),t.style.setProperty("--c",Os(i.sound)),t.innerHTML=`<div class="trace-row-head"><span class="trace-number"></span><span class="trace-swatch"></span><strong>${e.name} trace</strong><button class="trace-delete" aria-label="Delete ${e.name} trace">Delete</button></div><label class="trace-source">Sound for this trace <select aria-label="Sound for ${e.name} trace"></select></label><div class="trace-row-controls"><button class="trace-mute" aria-label="${i.muted?"Unmute":"Mute"} ${e.name} trace">${i.muted?"Unmute":"Mute"}</button><label>Volume <input type="range" min="0" max="100" value="${Math.round(i.volume*100)}" aria-label="${e.name} trace volume"></label><button class="trace-redraw">Redraw</button></div>`;const n=t.querySelector("select");for(const s of Vn){const r=document.createElement("option");r.value=s.sound,r.textContent=s.name,n.append(r)}n.value=i.sound,n.onchange=s=>Nu(i,s.target.value),t.querySelector(".trace-delete").onclick=()=>pl(i),t.querySelector(".trace-mute").onclick=s=>{i.muted=!i.muted,i.player.muted=i.muted,Ie.muteTrace(i.player),s.target.textContent=i.muted?"Unmute":"Mute",s.target.setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${Vn.find(r=>r.sound===i.sound).name} trace`),ai()},t.querySelector("input").oninput=s=>{i.volume=Number(s.target.value)/100,i.player.volume=i.volume,Ie.muteTrace(i.player),ai()},t.querySelector(".trace-redraw").onclick=()=>{Ei(!0,i),mt("Redraw this trace on the floor plan.")},ne("#trace-list").append(t)}function fl(i,e=!0){i.player=Uu(i),Jt.push(i),Lu(i),a_(i),dl(),Ie.ctx&&Ie.addTrace(i.player).catch(t=>{mt("Trace sound could not load. Remove and redraw it."),console.error(t)}),e&&ai()}function pl(i,e=!0){bn===i&&Ei(!1),i.player.removed=!0,Ie.removeTrace(i.player),Ki(i),i.row.remove(),Jt.splice(Jt.indexOf(i),1),dl(),e&&ai()}function Ei(i,e=null){ct&&(Ki(ct),ct=null),ji=i,bn=e,document.body.classList.toggle("drawing-trace",i),ne("#draw-trace").setAttribute("aria-pressed",String(i)),ne("#draw-trace").textContent=i?"Cancel drawing":"✎ Draw sound trace",ne("#trace-sound").disabled=!!e,e&&(ne("#trace-sound").value=e.sound),ne("#trace-hint").textContent=i?"Drag a line on the floor plan; release to make it sound.":`Choose a sound, then draw a line. ${ol(ne("#trace-sound").value).description}.`}ne("#trace-sound").onchange=()=>{ji||(ne("#trace-hint").textContent=`Choose a sound, then draw a line. ${ol(ne("#trace-sound").value).description}.`)};ne("#draw-trace").onclick=()=>{if(!ji&&Jt.length>=12){mt("Maximum of 12 sound traces. Remove one before drawing another.");return}Ei(!ji),ji&&mt("Drag on the floor plan to draw a sound trace.")};yi.addEventListener("pointerdown",i=>{if(ji&&i.button===0){i.preventDefault();const t=Xr(i),n=(bn==null?void 0:bn.sound)||ne("#trace-sound").value;ct={id:`trace-${ll++}`,sound:n,points:[t],x:t[0],z:t[1],volume:.3,muted:!1,isDraft:!0},Lu(ct),yi.setPointerCapture(i.pointerId);return}const e=zt.find(t=>t.id===i.target.dataset.id);e&&(bi=e,yi.setPointerCapture(i.pointerId),Du(i))});yi.addEventListener("pointermove",i=>{if(ct){const e=Xr(i),t=ct.points.at(-1);Math.hypot(e[0]-t[0],e[1]-t[1])>=.14&&ct.points.length<120&&(ct.points.push(e),qr(ct));return}bi&&Du(i)});yi.addEventListener("pointerup",i=>{if(ct){const e=Xr(i),t=ct.points.at(-1);if(Math.hypot(e[0]-t[0],e[1]-t[1])>.05&&ct.points.push(e),ss(ct.points)<.55)Ki(ct),ct=null,mt("Draw a longer trace on the floor plan.");else if(bn)bn.points=ct.points,bn.x=ct.points[0][0],bn.z=ct.points[0][1],qr(bn),Ki(ct),ct=null,ai(),Ei(!1),mt("Sound trace redrawn.");else{const n=ct;ct=null,Ki(n),n.isDraft=!1,fl(n),Ei(!1),mt(`${Vn.find(s=>s.sound===n.sound).name} trace added.`)}}bi=null});yi.addEventListener("pointercancel",()=>{ct&&(Ki(ct),ct=null),bi=null});addEventListener("resize",()=>{Je.aspect=innerWidth/innerHeight,Je.updateProjectionMatrix(),pt.setSize(innerWidth,innerHeight)});const o_=new kd,_r=new P,Ss=new P;let On=0;function l_(){const i=Math.min(o_.getDelta(),.05);On+=i,Hr.tick(Pu());const e=Ia.update(i);if(!pt.xr.isPresenting&&!Ie.mixerOpen&&!ne("#help-dialog").open&&!ne("#library").open){const t=Number(jt.has("KeyW")||jt.has("ArrowUp"))-Number(jt.has("KeyS")||jt.has("ArrowDown")),n=Number(jt.has("KeyD")||jt.has("ArrowRight"))-Number(jt.has("KeyA")||jt.has("ArrowLeft"));if(_r.set(n,0,-t),_r.lengthSq()){_r.normalize().applyAxisAngle(new P(0,1,0),Je.rotation.y).multiplyScalar(i*2.5),Je.position.add(_r);const s=St.clamp(Je.position.x,Je.position.z);Je.position.x=s.x,Je.position.z=s.z,Je.position.y=1.7+St.height(s.x,s.z)}}for(const t of zt)if(t.type==="bird"&&t.birds){const n=[!0,Math.sin(On*.13-.7)>.15,Math.sin(On*.09-2.3)>.42];t.birds.forEach((s,r)=>{const a=On*(.55+r*.09)+r*2.1,o=.5+.5*Math.sin(On*(.24+r*.035)+r*1.8);s.group.position.set(Math.sin(a)*(.45+r*.24)+(r-1)*.2,1.95+Math.sin(a*1.9)*.16+r*.2,-.95-(1-o)*(2.1+r*.5)),s.group.rotation.y=Math.cos(a)*.28,s.wing.rotation.z=Math.sin(On*(13+r*1.5))*.55,s.otherWing.rotation.z=-s.wing.rotation.z,s.active!==n[r]&&(s.active=n[r],s.group.visible=n[r],Ie.setBirdActive(t,r,n[r]))})}for(const t of Jt){const n=Jg(t.points,e.position.x,e.position.z);n&&Ie.moveTrace(t.player,n.x,n.z),r_(t,On)}Je.updateMatrixWorld(),Ie.listener(e);for(const t of zt){if(t.dot.setAttribute("cx",100+t.x*15),t.dot.setAttribute("cy",100+t.z*15),Ss.set(t.x,t.height,t.z).project(e),t.label.style.left=(Ss.x*.5+.5)*innerWidth+"px",t.label.style.top=(-Ss.y*.5+.5)*innerHeight+"px",t.label.style.display=Ss.z<1&&Math.abs(Ss.x)<1?"block":"none",t.ring.material.opacity=t.muted?.2:1,t.ring.material.transparent=!0,t.drops&&Ie.playing){const s=t.drops.geometry.attributes.position;for(let r=0;r<s.count;r++)s.array[r*3+1]-=i*1.3,s.array[r*3+1]<.23&&(s.array[r*3+1]=2.13);s.needsUpdate=!0}t.spinner&&Ie.playing&&!t.muted&&(t.spinner.rotation.z-=i*12),t.row.querySelectorAll(".meter i").forEach((s,r)=>s.style.transform=`scaleY(${Ie.playing&&t.sound&&!t.muted?.4+.6*Math.abs(Math.sin(On*4+r*1.2)):.15})`)}ne("#listener").setAttribute("transform",`translate(${100+Je.position.x*15},${100+Je.position.z*15}) rotate(${-Je.rotation.y*180/Math.PI})`),St.update(i,On,Ia,e),Ia.ink.visible=!St.active,pt.render(Ut,Je)}function Gn(){try{localStorage.setItem("sound-room-pages-bedroom-v1",JSON.stringify(zt.map(i=>({type:i.type,x:i.x,z:i.z,rotation:i.rotation||0,volume:i.volume,muted:!!i.muted}))))}catch{}}function Fu(){ne("#object-count").textContent=String(zt.length).padStart(2,"0")}function Yr(i,e={},t=!0){if(St!=null&&St.active){mt("Return to the bedroom to add furnishings.");return}if(zt.length>=24){mt("Room full: remove an object before adding another.");return}const n=rs.find(a=>a.type===i);if(!n)return;const s=new P(0,0,-2.5).applyAxisAngle(new P(0,1,0),Je.rotation.y),r={...n,id:`${i}-${e_++}`,x:Je.position.x+s.x,z:Je.position.z+s.z,volume:n.volume||0,...e,type:i};return r.x=bt.clamp(r.x,-6+r.radius,6-r.radius),r.z=bt.clamp(r.z,-6+r.radius,6-r.radius),zt.push(r),i_(r),Fu(),Ie.ctx&&Ie.add(r).catch(a=>{mt(`${r.name} sound could not load. Remove and re-add to retry.`),console.error(a)}),t&&(Gn(),mt(`${r.name} added. Drag to place it.`)),r}function ml(i,e=!0){i.removed=!0,Ie.remove(i),ri===i&&(ri=null),bi===i&&(bi=null);for(let t=Zi.length-1;t>=0;t--)Zi[t].userData.source===i&&Zi.splice(t,1);Ut.remove(i.group),i.group.traverse(t=>{var n;(n=t.geometry)==null||n.dispose()}),i.row.remove(),i.dot.remove(),i.label.remove(),zt.splice(zt.indexOf(i),1),Fu(),e&&Gn()}ne("#add-object").onclick=()=>{jt.clear(),document.pointerLockElement&&document.exitPointerLock(),ne("#library").showModal()};ne("#close-library").onclick=()=>ne("#library").close();let Lo="All";function gl(){const i=ne("#object-search").value.toLowerCase(),e=rs.filter(t=>(Lo==="All"||t.category===Lo)&&`${t.name} ${t.desc}`.toLowerCase().includes(i));ne("#object-library").replaceChildren();for(const t of e){const n=document.createElement("button");n.className="catalog-item",n.style.setProperty("--c",t.color),n.innerHTML=`<span class="catalog-icon">${{bed:"▰",books:"▤",shelf:"▥",lamp:"♧",rug:"▱",plant:"♧",fan:"✣",clock:"◷",bird:"♪",tv:"▣",record:"◉",rain:"☂",piano:"♬",strings:"♩",drums:"◌"}[t.type]}</span><span><b>${t.name}</b><small>${t.desc}</small></span><span class="catalog-plus">+</span>`,n.setAttribute("aria-label",`Add ${t.name}`),n.onclick=()=>Yr(t.type),ne("#object-library").append(n)}e.length||(ne("#object-library").textContent="No objects match. Try a different search.")}ne("#object-search").oninput=gl;document.querySelectorAll("[data-category]").forEach(i=>i.onclick=()=>{Lo=i.dataset.category,document.querySelectorAll("[data-category]").forEach(e=>e.setAttribute("aria-pressed",e===i)),gl()});let ws=Tu;try{const i=JSON.parse(localStorage.getItem("sound-room-pages-bedroom-v1")),e=i??JSON.parse(localStorage.getItem("sound-room-pages-previous-v1"));Array.isArray(e)&&e.length<=24&&(ws=e.filter(t=>t&&rs.some(n=>n.type===t.type)&&Number.isFinite(t.x)&&Number.isFinite(t.z)).map(t=>({type:t.type,x:t.x,z:t.type==="bird"&&t.x===0&&t.z===-4.6?-5.15:t.z,rotation:Number.isFinite(t.rotation)?t.rotation:0,volume:Number.isFinite(t.volume)?bt.clamp(t.volume,0,1):rs.find(n=>n.type===t.type).volume||0,muted:!!t.muted})),!i&&ws.length<24&&!ws.some(t=>t.type==="strings")&&ws.push({type:"strings",x:-1.8,z:2.4}))}catch{}for(const i of ws)Yr(i.type,i,!1);Gn();gl();try{const i=JSON.parse(localStorage.getItem("sound-room-pages-traces-v1"));if(Array.isArray(i))for(const e of i.slice(0,12)){if(!Vn.some(n=>n.sound===(e==null?void 0:e.sound))||!Array.isArray(e.points)||e.points.length<2||e.points.length>120)continue;const t=e.points;!t.every(n=>Array.isArray(n)&&n.length===2&&n.every(s=>Number.isFinite(s)&&Math.abs(s)<=5.8))||ss(t)<.55||fl({id:`trace-${ll++}`,sound:e.sound,points:t,x:t[0][0],z:t[0][1],volume:Number.isFinite(e.volume)?bt.clamp(e.volume,0,1):.3,muted:!!e.muted},!1)}}catch{}dl();ai();St=new Kg({scene:Ut,camera:Je,door:ln,engine:Ie,sources:zt,toast:mt,keys:jt});const Ia=new Su({getParadise:()=>St,getPortalTargets:()=>St.hits,scene:Ut,camera:Je,renderer:pt,engine:Ie,keys:jt,pickables:Zi,catalog:rs,soundChoices:Vn,toast:mt,addObject:Yr,removeObject:ml,move:Gr,saveLayout:Gn,setPreset:Fs,getSources:()=>zt,getTraces:()=>Jt,changeTraceSound:Nu,removeTrace:pl,getNextTraceSound:()=>ne("#trace-sound").value,setNextTraceSound:i=>{ne("#trace-sound").value=i},toggleAudio:()=>ne("#sound").click(),startAudio:async()=>{if(await hl(),!Ie.playing)throw new Error("Audio could not start. Try Start listening first.")},addFloorTrace:(i,e)=>{if(Jt.length>=12){mt("Maximum of 12 sound traces.");return}ss(e)<.55||fl({id:`trace-${ll++}`,sound:i,points:e,x:e[0][0],z:e[0][1],volume:.3,muted:!1})}});St.traces.bindDesktop(pt.domElement,Je,()=>St.active&&!pt.xr.isPresenting);pt.setAnimationLoop(l_);window.soundRoom={getState:()=>({preset:Ie.preset,playing:Ie.playing,listener:Je.position.toArray(),sources:zt.map(({id:i,x:e,z:t,muted:n})=>({id:i,x:e,z:t,muted:!!n})),traces:Jt.map(({id:i,sound:e,points:t,muted:n})=>({id:i,sound:e,points:t.length,muted:!!n}))})};
