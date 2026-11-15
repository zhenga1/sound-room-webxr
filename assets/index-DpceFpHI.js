(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="183",Ru=0,ml=1,Pu=2,dr=1,wc=2,xs=3,ni=0,jt=1,Vt=2,Bn=0,Hi=1,gl=2,_l=3,xl=4,Du=5,pi=100,Lu=101,Iu=102,Uu=103,Nu=104,Fu=200,Ou=201,Bu=202,zu=203,Ea=204,Ta=205,ku=206,Vu=207,Gu=208,Hu=209,Wu=210,Xu=211,qu=212,Yu=213,$u=214,wa=0,Aa=1,Ca=2,$i=3,Ra=4,Pa=5,Da=6,La=7,Ac=0,Ju=1,Ku=2,yn=0,Cc=1,Rc=2,Pc=3,bo=4,Dc=5,Lc=6,Ic=7,Uc=300,vi=301,Ji=302,Vr=303,Gr=304,br=306,Ia=1e3,On=1001,Ua=1002,Nt=1003,Zu=1004,Os=1005,Gt=1006,Hr=1007,gi=1008,nn=1009,Nc=1010,Fc=1011,ws=1012,Eo=1013,Tn=1014,fn=1015,Gn=1016,To=1017,wo=1018,As=1020,Oc=35902,Bc=35899,zc=1021,kc=1022,pn=1023,Hn=1026,_i=1027,Ao=1028,Co=1029,Ki=1030,Ro=1031,Po=1033,fr=33776,pr=33777,mr=33778,gr=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Va=37496,Ga=37488,Ha=37489,Wa=37490,Xa=37491,qa=37808,Ya=37809,$a=37810,Ja=37811,Ka=37812,Za=37813,ja=37814,Qa=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,uo=36284,ho=36285,fo=36286,ju=3200,Vc=0,Qu=1,ei="",Ut="srgb",Zi="srgb-linear",vr="linear",et="srgb",wi=7680,vl=519,eh=512,th=513,nh=514,Do=515,ih=516,sh=517,Lo=518,rh=519,Ml=35044,ah=35048,Sl="300 es",Sn=2e3,Cs=2001;function oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=Mr("canvas");return i.style.display="block",i}const yl={};function bl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Gc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sr(...i){const e=i.join(" ");e in yl||(yl[e]=!0,Re(...i))}function ch(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const uh={[wa]:Aa,[Ca]:Da,[Ra]:La,[$i]:Pa,[Aa]:wa,[Da]:Ca,[La]:Ra,[Pa]:$i};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const ys=Math.PI/180,Rs=180/Math.PI;function ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Io(i,e){return(i%e+e)%e}function hh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dh(i,e,t){return i!==e?(t-i)/(e-i):0}function bs(i,e,t){return(1-t)*i+t*e}function fh(i,e,t,n){return bs(i,e,1-Math.exp(-t*n))}function ph(i,e=1){return e-Math.abs(Io(i,e*2)-e)}function mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xh(i,e){return i+Math.random()*(e-i)}function vh(i){return i*(.5-Math.random())}function Mh(i){i!==void 0&&(El=i);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(i){return i*ys}function yh(i){return i*Rs}function bh(i){return(i&i-1)===0&&i!==0}function Eh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Th(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),g=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*f,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*f,o*c);break;case"ZYZ":i.set(l*f,l*g,o*u,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:ys,RAD2DEG:Rs,generateUUID:ns,clamp:He,euclideanModulo:Io,mapLinear:hh,inverseLerp:dh,lerp:bs,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:xh,randFloatSpread:vh,seededRandom:Mh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:bh,ceilPowerOfTwo:Eh,floorPowerOfTwo:Th,setQuaternionFromProperEuler:wh,normalize:Wt,denormalize:Gi};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],g=r[a+1],f=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==g||u!==f){let p=l*h+c*g+u*f+d*v;p<0&&(h=-h,g=-g,f=-f,v=-v,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+h*o,c=c*m+g*o,u=u*m+f*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+g*o,u=u*m+f*o,d=d*m+v*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],g=r[a+2],f=r[a+3];return e[t]=o*f+u*d+l*g-c*h,e[t+1]=l*f+u*h+c*d-o*g,e[t+2]=c*f+u*g+o*h-l*d,e[t+3]=u*f-o*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),g=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*g*f,this._y=c*g*d-h*u*f,this._z=c*u*f+h*g*d,this._w=c*u*d-h*g*f;break;case"YXZ":this._x=h*u*d+c*g*f,this._y=c*g*d-h*u*f,this._z=c*u*f-h*g*d,this._w=c*u*d+h*g*f;break;case"ZXY":this._x=h*u*d-c*g*f,this._y=c*g*d+h*u*f,this._z=c*u*f+h*g*d,this._w=c*u*d-h*g*f;break;case"ZYX":this._x=h*u*d-c*g*f,this._y=c*g*d+h*u*f,this._z=c*u*f-h*g*d,this._w=c*u*d+h*g*f;break;case"YZX":this._x=h*u*d+c*g*f,this._y=c*g*d+h*u*f,this._z=c*u*f-h*g*d,this._w=c*u*d-h*g*f;break;case"XZY":this._x=h*u*d-c*g*f,this._y=c*g*d-h*u*f,this._z=c*u*f+h*g*d,this._w=c*u*d+h*g*f;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new P,Tl=new bn;class Oe{constructor(e,t,n,s,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],g=n[5],f=n[8],v=s[0],p=s[3],m=s[6],M=s[1],E=s[4],y=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*v+o*M+l*T,r[3]=a*p+o*E+l*w,r[6]=a*m+o*y+l*C,r[1]=c*v+u*M+d*T,r[4]=c*p+u*E+d*w,r[7]=c*m+u*y+d*C,r[2]=h*v+g*M+f*T,r[5]=h*p+g*E+f*w,r[8]=h*m+g*y+f*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,g=c*r-a*l,f=t*d+n*h+s*g;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=g*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Oe,wl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:vr,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:et,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const Ye=Ah();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class Ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Mr("canvas")),Ai.width=e.width,Ai.height=e.height;const s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rh=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qr(s[a].image)):r.push(qr(s[a]))}else r=qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Ph=0;const Yr=new P;class Ht extends ts{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=On,s=On,r=Gt,a=gi,o=pn,l=nn,c=Ht.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ns(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Uc;Ht.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],g=l[5],f=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(f-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(f+p)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(g+1)/2,T=(m+1)/2,w=(u+h)/4,C=(d+v)/4,x=(f+p)/4;return E>y&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-f)*(p-f)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-f)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tt{constructor(e,t,n,s,r,a,o,l,c,u,d,h,g,f,v,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,g,f,v,p)}set(e,t,n,s,r,a,o,l,c,u,d,h,g,f,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=g,m[7]=f,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,g=a*d,f=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=g+f*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=f+g*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,g=l*d,f=c*u,v=c*d;t[0]=h+v*o,t[4]=f*o-g,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-f,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,g=l*d,f=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=f+g*o,t[1]=g+f*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,g=a*d,f=o*u,v=o*d;t[0]=l*u,t[4]=f*c-g,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=g*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,f=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=f*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*d+f,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,g=a*c,f=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=g*d-f,t[2]=f*d-g,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,Uh)}lookAt(e,t,n){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Yn.crossVectors(n,en),Yn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Yn.crossVectors(n,en)),Yn.normalize(),Bs.crossVectors(en,Yn),s[0]=Yn.x,s[4]=Bs.x,s[8]=en.x,s[1]=Yn.y,s[5]=Bs.y,s[9]=en.y,s[2]=Yn.z,s[6]=Bs.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],g=n[13],f=n[2],v=n[6],p=n[10],m=n[14],M=n[3],E=n[7],y=n[11],T=n[15],w=s[0],C=s[4],x=s[8],b=s[12],N=s[1],R=s[5],I=s[9],O=s[13],V=s[2],B=s[6],z=s[10],k=s[14],Q=s[3],K=s[7],ue=s[11],me=s[15];return r[0]=a*w+o*N+l*V+c*Q,r[4]=a*C+o*R+l*B+c*K,r[8]=a*x+o*I+l*z+c*ue,r[12]=a*b+o*O+l*k+c*me,r[1]=u*w+d*N+h*V+g*Q,r[5]=u*C+d*R+h*B+g*K,r[9]=u*x+d*I+h*z+g*ue,r[13]=u*b+d*O+h*k+g*me,r[2]=f*w+v*N+p*V+m*Q,r[6]=f*C+v*R+p*B+m*K,r[10]=f*x+v*I+p*z+m*ue,r[14]=f*b+v*O+p*k+m*me,r[3]=M*w+E*N+y*V+T*Q,r[7]=M*C+E*R+y*B+T*K,r[11]=M*x+E*I+y*z+T*ue,r[15]=M*b+E*O+y*k+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],g=e[14],f=e[3],v=e[7],p=e[11],m=e[15],M=l*g-c*h,E=o*g-c*d,y=o*h-l*d,T=a*g-c*u,w=a*h-l*u,C=a*d-o*u;return t*(v*M-p*E+m*y)-n*(f*M-p*T+m*w)+s*(f*E-v*T+m*C)-r*(f*y-v*w+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],g=e[11],f=e[12],v=e[13],p=e[14],m=e[15],M=t*o-n*a,E=t*l-s*a,y=t*c-r*a,T=n*l-s*o,w=n*c-r*o,C=s*c-r*l,x=u*v-d*f,b=u*p-h*f,N=u*m-g*f,R=d*p-h*v,I=d*m-g*v,O=h*m-g*p,V=M*O-E*I+y*R+T*N-w*b+C*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return e[0]=(o*O-l*I+c*R)*B,e[1]=(s*I-n*O-r*R)*B,e[2]=(v*C-p*w+m*T)*B,e[3]=(h*w-d*C-g*T)*B,e[4]=(l*N-a*O-c*b)*B,e[5]=(t*O-s*N+r*b)*B,e[6]=(p*y-f*C-m*E)*B,e[7]=(u*C-h*y+g*E)*B,e[8]=(a*I-o*N+c*x)*B,e[9]=(n*N-t*I-r*x)*B,e[10]=(f*w-v*y+m*M)*B,e[11]=(d*y-u*w-g*M)*B,e[12]=(o*b-a*R-l*x)*B,e[13]=(t*R-n*b+s*x)*B,e[14]=(v*E-f*T-p*M)*B,e[15]=(u*T-d*E+h*M)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,g=r*u,f=r*d,v=a*u,p=a*d,m=o*d,M=l*c,E=l*u,y=l*d,T=n.x,w=n.y,C=n.z;return s[0]=(1-(v+m))*T,s[1]=(g+y)*T,s[2]=(f-E)*T,s[3]=0,s[4]=(g-y)*w,s[5]=(1-(h+m))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(f+E)*C,s[9]=(p-M)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),l=Ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),cn.copy(this);const c=1/a,u=1/o,d=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s);let f,v;if(l)f=r/(a-r),v=a*r/(a-r);else if(o===Sn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Cs)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s);let f,v;if(l)f=1/(a-r),v=a/(a-r);else if(o===Sn)f=-2/(a-r),v=-(a+r)/(a-r);else if(o===Cs)f=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new P,cn=new tt,Ih=new P(0,0,0),Uh=new P(1,1,1),Yn=new P,Bs=new P,en=new P,Cl=new tt,Rl=new bn;class wn{constructor(e=0,t=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nh=0;const Pl=new P,Ri=new bn,Pn=new tt,zs=new P,as=new P,Fh=new P,Oh=new bn,Dl=new P(1,0,0),Ll=new P(0,1,0),Il=new P(0,0,1),Ul={type:"added"},Bh={type:"removed"},Pi={type:"childadded",child:null},$r={type:"childremoved",child:null};class Pt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new P,t=new wn,n=new bn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Oe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(as,zs,this.up):Pn.lookAt(zs,as,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),g=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new P(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class at extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zh={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),g=.02,f=.005;c.inputState.pinching&&h>g+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Io(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kr(a,r,e+1/3),this.g=Kr(a,r,e),this.b=Kr(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ye.workingToColorSpace(zt.copy(this),e),Math.round(He(zt.r*255,0,255))*65536+Math.round(He(zt.g*255,0,255))*256+Math.round(He(zt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ut){Ye.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ks);const n=bs($n.h,ks.h,t),s=bs($n.s,ks.s,t),r=bs($n.l,ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ne;Ne.NAMES=Wc;class Fo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kh extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new P,Dn=new P,Zr=new P,Ln=new P,Di=new P,Li=new P,Nl=new P,jr=new P,Qr=new P,ea=new P,ta=new mt,na=new mt,ia=new mt;class dn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Dn.subVectors(n,t),Zr.subVectors(e,t);const a=un.dot(un),o=un.dot(Dn),l=un.dot(Zr),c=Dn.dot(Dn),u=Dn.dot(Zr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,g=(c*l-o*u)*h,f=(a*u-o*l)*h;return r.set(1-g-f,f,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Dn.subVectors(e,t),un.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Li.subVectors(r,n),jr.subVectors(e,n);const l=Di.dot(jr),c=Li.dot(jr);if(l<=0&&c<=0)return t.copy(n);Qr.subVectors(e,s);const u=Di.dot(Qr),d=Li.dot(Qr);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Di,a);ea.subVectors(e,r);const g=Di.dot(ea),f=Li.dot(ea);if(f>=0&&g<=f)return t.copy(r);const v=g*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Li,o);const p=u*f-g*d;if(p<=0&&d-u>=0&&g-f>=0)return Nl.subVectors(r,s),o=(d-u)/(d-u+(g-f)),t.copy(s).addScaledVector(Nl,o);const m=1/(p+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Di,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Gs.subVectors(this.max,os),Ii.subVectors(e.a,os),Ui.subVectors(e.b,os),Ni.subVectors(e.c,os),Jn.subVectors(Ui,Ii),Kn.subVectors(Ni,Ui),li.subVectors(Ii,Ni);let t=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-li.z,li.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,li.z,0,-li.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-li.y,li.x,0];return!sa(t,Ii,Ui,Ni,Gs)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ii,Ui,Ni,Gs))?!1:(Hs.crossVectors(Jn,Kn),t=[Hs.x,Hs.y,Hs.z],sa(t,Ii,Ui,Ni,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,Vs=new bi,Ii=new P,Ui=new P,Ni=new P,Jn=new P,Kn=new P,li=new P,os=new P,Gs=new P,Hs=new P,ci=new P;function sa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bt=new P,Ws=new we;let Vh=0;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class Xc extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qc extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Gh=new bi,ls=new P,ra=new P;class is{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(ra)),this.expandByPoint(ls.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hh=0;const rn=new tt,aa=new Pt,Fi=new P,tn=new bi,cs=new bi,Rt=new P;class St extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?qc:Xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,cs.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,cs.max),tn.expandByPoint(Rt)):(tn.expandByPoint(cs.min),tn.expandByPoint(cs.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Rt.add(Fi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new we,g=new we,f=new we,v=new P,p=new P;function m(x,b,N){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,N),h.fromBufferAttribute(r,x),g.fromBufferAttribute(r,b),f.fromBufferAttribute(r,N),u.sub(c),d.sub(c),g.sub(h),f.sub(h);const R=1/(g.x*f.y-f.x*g.y);isFinite(R)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(d,-g.y).multiplyScalar(R),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-f.x).multiplyScalar(R),o[x].add(v),o[b].add(v),o[N].add(v),l[x].add(p),l[b].add(p),l[N].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){const N=M[x],R=N.start,I=N.count;for(let O=R,V=R+I;O<V;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new P,y=new P,T=new P,w=new P;function C(x){T.fromBufferAttribute(s,x),w.copy(T);const b=o[x];E.copy(b),E.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(w,b);const R=y.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,b=M.length;x<b;++x){const N=M[x],R=N.start,I=N.count;for(let O=R,V=R+I;O<V;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,g=e.count;h<g;h+=3){const f=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let g=0,f=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*u;for(let m=0;m<u;m++)h[f++]=c[g++]}return new an(h,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],g=e(h,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,g=d.length;h<g;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Wh=0;class ss extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Hi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new P,oa=new P,Xs=new P,Zn=new P,la=new P,qs=new P,ca=new P;class Oo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xs),o=Zn.dot(this.direction),l=-Zn.dot(Xs),c=Zn.lengthSq(),u=Math.abs(1-a*a);let d,h,g,f;if(u>0)if(d=a*l-o,h=a*o-l,f=r*u,d>=0)if(h>=-f)if(h<=f){const v=1/u;d*=v,h*=v,g=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),g=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(Xs,h),g}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){la.subVectors(t,e),qs.subVectors(n,e),ca.crossVectors(la,qs);let a=this.direction.dot(ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(Zn,qs));if(l<0)return null;const c=o*this.direction.dot(la.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot(ca);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fl=new tt,ui=new Oo,Ys=new is,Ol=new P,$s=new P,Js=new P,Ks=new P,ua=new P,Zs=new P,Bl=new P,js=new P;class De extends Pt{constructor(e=new St,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(ua.fromBufferAttribute(d,e),a?Zs.addScaledVector(ua,u):Zs.addScaledVector(ua.sub(t),u))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Ys.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ys,Ol)===null||ui.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=h.length;f<v;f++){const p=h[f],m=a[p.materialIndex],M=Math.max(p.start,g.start),E=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let y=M,T=E;y<T;y+=3){const w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Qs(this,m,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let p=f,m=v;p<m;p+=3){const M=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=Qs(this,a,e,n,c,u,d,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=h.length;f<v;f++){const p=h[f],m=a[p.materialIndex],M=Math.max(p.start,g.start),E=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=M,T=E;y<T;y+=3){const w=y,C=y+1,x=y+2;s=Qs(this,m,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=f,m=v;p<m;p+=3){const M=p,E=p+1,y=p+2;s=Qs(this,a,e,n,c,u,d,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Xh(i,e,t,n,s,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function Qs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,Js),i.getVertexPosition(c,Ks);const u=Xh(i,e,t,n,$s,Js,Ks,Bl);if(u){const d=new P;dn.getBarycoord(Bl,$s,Js,Ks,d),s&&(u.uv=dn.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(u.uv1=dn.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};dn.getNormal($s,Js,Ks,h.normal),u.face=h,u.barycoord=d}return u}class Yc extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,u=Nt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends an{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new tt,kl=new tt,er=[],Vl=new bi,qh=new tt,us=new De,hs=new is;class Yh extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Vl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),hs.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),kl.multiplyMatrices(n,Oi),us.matrixWorld=kl,us.raycast(e,er);for(let a=0,o=er.length;a<o;a++){const l=er[a];l.instanceId=r,l.object=this,t.push(l)}er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(s*this.count),s,this.count,Ao,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ha=new P,$h=new P,Jh=new Oe;class Fn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ha.subVectors(n,t).cross($h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jh.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new is,Kh=new we(.5,.5),tr=new P;class Bo{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],g=r[7],f=r[8],v=r[9],p=r[10],m=r[11],M=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,g-u,m-f,T-M).normalize(),s[1].setComponents(c+a,g+u,m+f,T+M).normalize(),s[2].setComponents(c+o,g+d,m+v,T+E).normalize(),s[3].setComponents(c-o,g-d,m-v,T-E).normalize(),n)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,g-h,m-p,T-y).normalize();else if(s[4].setComponents(c-l,g-h,m-p,T-y).normalize(),t===Sn)s[5].setComponents(c+l,g+h,m+p,T+y).normalize();else if(t===Cs)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Kh.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zo extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gl=new tt,po=new Oo,nr=new is,ir=new P;class $c extends Pt{constructor(e=new St,t=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;Gl.copy(s).invert(),po.copy(e.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let f=h,v=g;f<v;f++){const p=c.getX(f);ir.fromBufferAttribute(d,p),Hl(ir,p,l,s,e,t,this)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let f=h,v=g;f<v;f++)ir.fromBufferAttribute(d,f),Hl(ir,f,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hl(i,e,t,n,s,r,a){const o=po.distanceSqToPoint(i);if(o<t){const l=new P;po.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jc extends Ht{constructor(e=[],t=vi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Er extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends Ht{constructor(e,t,n=Tn,s,r,a,o=Nt,l=Nt,c,u=Hn,d=1){if(u!==Hn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zh extends Ps{constructor(e,t=Tn,n=vi,s,r,a=Nt,o=Nt,l,c=Hn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kc extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qt extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,g=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(d,2));function f(v,p,m,M,E,y,T,w,C,x,b){const N=y/C,R=T/x,I=y/2,O=T/2,V=w/2,B=C+1,z=x+1;let k=0,Q=0;const K=new P;for(let ue=0;ue<z;ue++){const me=ue*R-O;for(let de=0;de<B;de++){const Be=de*N-I;K[v]=Be*M,K[p]=me*E,K[m]=V,c.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(de/C),d.push(1-ue/x),k+=1}}for(let ue=0;ue<x;ue++)for(let me=0;me<C;me++){const de=h+me+B*ue,Be=h+me+B*(ue+1),dt=h+(me+1)+B*(ue+1),ut=h+(me+1)+B*ue;l.push(de,Be,ut),l.push(Be,dt,ut),Q+=6}o.addGroup(g,Q,b),g+=Q,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ko extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,g=2*d+h,f=n*2+r,v=s+1,p=new P,m=new P;for(let M=0;M<=f;M++){let E=0,y=0,T=0,w=0;if(M<=n){const b=M/n,N=b*Math.PI/2;y=-u-e*Math.cos(N),T=e*Math.sin(N),w=-e*Math.cos(N),E=b*d}else if(M<=n+r){const b=(M-n)/r;y=-u+b*t,T=e,w=0,E=d+b*h}else{const b=(M-n-r)/n,N=b*Math.PI/2;y=u+e*Math.sin(N),T=e*Math.cos(N),w=e*Math.sin(N),E=d+h+b*d}const C=Math.max(0,Math.min(1,E/g));let x=0;M===0?x=.5/s:M===f&&(x=-.5/s);for(let b=0;b<=s;b++){const N=b/s,R=N*Math.PI*2,I=Math.sin(R),O=Math.cos(R);m.x=-T*O,m.y=y,m.z=T*I,o.push(m.x,m.y,m.z),p.set(-T*O,w,T*I),p.normalize(),l.push(p.x,p.y,p.z),c.push(N+x,C)}if(M>0){const b=(M-1)*v;for(let N=0;N<s;N++){const R=b+N,I=b+N+1,O=M*v+N,V=M*v+N+1;a.push(R,I,O),a.push(I,V,O)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Tr extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const g=n+d/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],g=[];let f=0;const v=[],p=n/2;let m=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(g,2));function M(){const y=new P,T=new P;let w=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const b=[],N=x/r,R=N*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,V=O*l+o,B=Math.sin(V),z=Math.cos(V);T.x=R*B,T.y=-N*n+p,T.z=R*z,d.push(T.x,T.y,T.z),y.set(B,C,z).normalize(),h.push(y.x,y.y,y.z),g.push(O,1-N),b.push(f++)}v.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const N=v[b][x],R=v[b+1][x],I=v[b+1][x+1],O=v[b][x+1];(e>0||b!==0)&&(u.push(N,R,O),w+=3),(t>0||b!==r-1)&&(u.push(R,I,O),w+=3)}c.addGroup(m,w,0),m+=w}function E(y){const T=f,w=new we,C=new P;let x=0;const b=y===!0?e:t,N=y===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,p*N,0),h.push(0,N,0),g.push(.5,.5),f++;const R=f;for(let I=0;I<=s;I++){const V=I/s*l+o,B=Math.cos(V),z=Math.sin(V);C.x=b*z,C.y=p*N,C.z=b*B,d.push(C.x,C.y,C.z),h.push(0,N,0),w.x=B*.5+.5,w.y=z*.5*N+.5,g.push(w.x,w.y),f++}for(let I=0;I<s;I++){const O=T+I,V=R+I;y===!0?u.push(V,V+1,O):u.push(V+1,V,O),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mi extends kt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Mi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,g=(a-u)/h;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new tt;for(let g=0;g<=e;g++){const f=g/e;s[g]=this.getTangentAt(f,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(He(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,f))}a[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(He(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(g=-g);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],g*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vo extends Wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,g=c-this.aY;l=h*u-g*d+this.aX,c=h*d+g*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jh extends Vo{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Go(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,g=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,g*=u,s(a,o,h,g)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const sr=new P,da=new Go,fa=new Go,pa=new Go;class Ho extends Wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),c=sr);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(d),g),v=Math.pow(d.distanceToSquared(h),g),p=Math.pow(h.distanceToSquared(u),g);v<1e-4&&(v=1),f<1e-4&&(f=v),p<1e-4&&(p=v),da.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,v,p),fa.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,v,p),pa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,v,p)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),fa.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),pa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Qh(i,e){const t=1-i;return t*t*e}function ed(i,e){return 2*(1-i)*i*e}function td(i,e){return i*i*e}function Es(i,e,t,n){return Qh(i,e)+ed(i,t)+td(i,n)}function nd(i,e){const t=1-i;return t*t*t*e}function id(i,e){const t=1-i;return 3*t*t*i*e}function sd(i,e){return 3*(1-i)*i*i*e}function rd(i,e){return i*i*i*e}function Ts(i,e,t,n,s){return nd(i,e)+id(i,t)+sd(i,n)+rd(i,s)}class ad extends Wn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends Wn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y),Ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ld extends Wn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends Wn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Wn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zc extends Wn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y),Es(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Wl(o,l.x,c.x,u.x,d.x),Wl(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var dd=Object.freeze({__proto__:null,ArcCurve:jh,CatmullRomCurve3:Ho,CubicBezierCurve:ad,CubicBezierCurve3:od,EllipseCurve:Vo,LineCurve:ld,LineCurve3:cd,QuadraticBezierCurve:ud,QuadraticBezierCurve3:Zc,SplineCurve:hd});class sn extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,g=[],f=[],v=[],p=[];for(let m=0;m<u;m++){const M=m*h-a;for(let E=0;E<c;E++){const y=E*d-r;f.push(y,-M,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const E=M+c*m,y=M+c*(m+1),T=M+1+c*(m+1),w=M+1+c*m;g.push(E,y,w),g.push(y,T,w)}this.setIndex(g),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wo extends St{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,g=new P,f=new we;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*a;g.x=d*Math.cos(m),g.y=d*Math.sin(m),l.push(g.x,g.y,g.z),c.push(0,0,1),f.x=(g.x/t+1)/2,f.y=(g.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const M=m+p,E=M,y=M+n+1,T=M+n+2,w=M+1;o.push(E,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vt extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,g=[],f=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],E=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),f.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(w+y,1-E),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const E=u[m][M+1],y=u[m][M],T=u[m+1][M],w=u[m+1][M+1];(m!==0||a>0)&&g.push(E,y,w),(m!==n-1||l<Math.PI)&&g.push(y,T,w)}this.setIndex(g),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Is extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,g=new P,f=new P;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let m=0;m<=s;m++){const M=m/s*r;g.x=(e+t*Math.cos(p))*Math.cos(M),g.y=(e+t*Math.cos(p))*Math.sin(M),g.z=t*Math.sin(p),c.push(g.x,g.y,g.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(g,h).normalize(),u.push(f.x,f.y,f.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,E=(s+1)*(v-1)+p,y=(s+1)*v+p;l.push(m,M,y),l.push(M,E,y)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wr extends St{constructor(e=new Zc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new we;let u=new P;const d=[],h=[],g=[],f=[];v(),this.setIndex(f),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(g,2));function v(){for(let E=0;E<t;E++)p(E);p(r===!1?t:0),M(),m()}function p(E){u=e.getPointAt(E/t,u);const y=a.normals[E],T=a.binormals[E];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,x=Math.sin(C),b=-Math.cos(C);l.x=b*y.x+x*T.x,l.y=b*y.y+x*T.y,l.z=b*y.z+x*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){const T=(s+1)*(E-1)+(y-1),w=(s+1)*E+(y-1),C=(s+1)*E+y,x=(s+1)*(E-1)+y;f.push(T,w,x),f.push(w,C,x)}}function M(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,g.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wr(new dd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const s in n)e[s]=n[s]}return e}function fd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const pd={clone:ji,merge:Xt};var md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _d extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xd extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vd extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xo extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class qo extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ma=new tt,Xl=new P,ql=new P;class Qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rr=new P,ar=new bn,gn=new P;class eu extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rr,ar,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(rr,ar,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new P,Yl=new we,$l=new we;class Zt extends eu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,$l),t.subVectors($l,Yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Md extends Qc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ar extends Xo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yo extends eu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sd extends Qc{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $o extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Sd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bi=-90,zi=1;class yd extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(Bi,zi,e,t);s.layers=this.layers,this.add(s);const r=new Zt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,g),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class bd extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ed{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jl=new tt;class tu{constructor(e,t,n=0,s=1/0){this.ray=new Oo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jl),this}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)mo(e[s],this,n,t);return n.sort(Kl),n}}function Kl(i,e){return i.distance-e.distance}function mo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)mo(r[a],e,t,!0)}}function Zl(i,e,t,n){const s=Td(n);switch(t){case zc:return i*e;case Ao:return i*e/s.components*s.byteLength;case Co:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case Ro:return i*e*2/s.components*s.byteLength;case kc:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Po:return i*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case za:case ka:case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ao:case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Td(i){switch(i){case nn:case Nc:return{byteLength:1,components:1};case ws:case Fc:case Gn:return{byteLength:2,components:1};case To:case wo:return{byteLength:2,components:4};case Tn:case Eo:case fn:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((g,f)=>g.start-f.start);let h=0;for(let g=1;g<d.length;g++){const f=d[h],v=d[g];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++h,d[h]=v)}d.length=h+1;for(let g=0,f=d.length;g<f;g++){const v=d[g];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,wf=`uniform sampler2D dfgLUT;
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
}`,Af=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Of=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,em=`#define TOON
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
}`,tm=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,rm=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Ad,alphahash_pars_fragment:Cd,alphamap_fragment:Rd,alphamap_pars_fragment:Pd,alphatest_fragment:Dd,alphatest_pars_fragment:Ld,aomap_fragment:Id,aomap_pars_fragment:Ud,batching_pars_vertex:Nd,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:$d,color_vertex:Jd,common:Kd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:Mf,envmap_vertex:uf,fog_vertex:hf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:wf,lights_fragment_begin:Af,lights_fragment_maps:Cf,lights_fragment_end:Rf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:kf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:$f,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:up,shadowmap_vertex:hp,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:xp,tonemapping_fragment:vp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:yp,uv_pars_fragment:bp,uv_pars_vertex:Ep,uv_vertex:Tp,worldpos_vertex:wp,background_vert:Ap,background_frag:Cp,backgroundCube_vert:Rp,backgroundCube_frag:Pp,cube_vert:Dp,cube_frag:Lp,depth_vert:Ip,depth_frag:Up,distance_vert:Np,distance_frag:Fp,equirect_vert:Op,equirect_frag:Bp,linedashed_vert:zp,linedashed_frag:kp,meshbasic_vert:Vp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:Yp,meshnormal_frag:$p,meshphong_vert:Jp,meshphong_frag:Kp,meshphysical_vert:Zp,meshphysical_frag:jp,meshtoon_vert:Qp,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:rm,sprite_frag:am},oe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},vn={basic:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Xt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Xt([oe.lights,oe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vn.physical={uniforms:Xt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const or={r:0,b:0,g:0},di=new wn,om=new tt;function lm(i,e,t,n,s,r){const a=new Ne(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function g(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function f(M){let E=!1;const y=g(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===br)?(c===void 0&&(c=new De(new qt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ji(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),di.copy(E.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(di)),c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new De(new sn(2,2),new An({name:"BackgroundMaterial",uniforms:ji(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(or,jc(i)),t.buffers.color.setClear(or.r,or.g,or.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:f,addToRenderList:v,dispose:m}}function cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(R,I,O,V,B){let z=!1;const k=d(R,V,O,I);r!==k&&(r=k,c(r.object)),z=g(R,V,O,B),z&&f(R,V,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(R,I,O,V),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,I,O,V){const B=V.wireframe===!0;let z=n[I.id];z===void 0&&(z={},n[I.id]=z);const k=R.isInstancedMesh===!0?R.id:0;let Q=z[k];Q===void 0&&(Q={},z[k]=Q);let K=Q[O.id];K===void 0&&(K={},Q[O.id]=K);let ue=K[B];return ue===void 0&&(ue=h(l()),K[B]=ue),ue}function h(R){const I=[],O=[],V=[];for(let B=0;B<t;B++)I[B]=0,O[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:V,object:R,attributes:{},index:null}}function g(R,I,O,V){const B=r.attributes,z=I.attributes;let k=0;const Q=O.getAttributes();for(const K in Q)if(Q[K].location>=0){const me=B[K];let de=z[K];if(de===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),me===void 0||me.attribute!==de||de&&me.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function f(R,I,O,V){const B={},z=I.attributes;let k=0;const Q=O.getAttributes();for(const K in Q)if(Q[K].location>=0){let me=z[K];me===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));const de={};de.attribute=me,me&&me.data&&(de.data=me.data),B[K]=de,k++}r.attributes=B,r.attributesNum=k,r.index=V}function v(){const R=r.newAttributes;for(let I=0,O=R.length;I<O;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){const O=r.newAttributes,V=r.enabledAttributes,B=r.attributeDivisors;O[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),B[R]!==I&&(i.vertexAttribDivisor(R,I),B[R]=I)}function M(){const R=r.newAttributes,I=r.enabledAttributes;for(let O=0,V=I.length;O<V;O++)I[O]!==R[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function E(R,I,O,V,B,z,k){k===!0?i.vertexAttribIPointer(R,I,O,B,z):i.vertexAttribPointer(R,I,O,V,B,z)}function y(R,I,O,V){v();const B=V.attributes,z=O.getAttributes(),k=I.defaultAttributeValues;for(const Q in z){const K=z[Q];if(K.location>=0){let ue=B[Q];if(ue===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const me=ue.normalized,de=ue.itemSize,Be=e.get(ue);if(Be===void 0)continue;const dt=Be.buffer,ut=Be.type,$=Be.bytesPerElement,ie=ut===i.INT||ut===i.UNSIGNED_INT||ue.gpuType===Eo;if(ue.isInterleavedBufferAttribute){const ae=ue.data,Fe=ae.stride,Ae=ue.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<K.locationSize;Pe++)m(K.location+Pe,ae.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)p(K.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Pe=0;Pe<K.locationSize;Pe++)E(K.location+Pe,de/K.locationSize,ut,me,Fe*$,(Ae+de/K.locationSize*Pe)*$,ie)}else{if(ue.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae,ue.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ae=0;ae<K.locationSize;ae++)E(K.location+ae,de/K.locationSize,ut,me,de*$,de/K.locationSize*ae*$,ie)}}else if(k!==void 0){const me=k[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(K.location,me);break;case 3:i.vertexAttrib3fv(K.location,me);break;case 4:i.vertexAttrib4fv(K.location,me);break;default:i.vertexAttrib1fv(K.location,me)}}}}M()}function T(){b();for(const R in n){const I=n[R];for(const O in I){const V=I[O];for(const B in V){const z=V[B];for(const k in z)u(z[k].object),delete z[k];delete V[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const O in I){const V=I[O];for(const B in V){const z=V[B];for(const k in z)u(z[k].object),delete z[k];delete V[B]}}delete n[R.id]}function C(R){for(const I in n){const O=n[I];for(const V in O){const B=O[V];if(B[R.id]===void 0)continue;const z=B[R.id];for(const k in z)u(z[k].object),delete z[k];delete B[R.id]}}}function x(R){for(const I in n){const O=n[I],V=R.isInstancedMesh===!0?R.id:0,B=O[V];if(B!==void 0){for(const z in B){const k=B[z];for(const Q in k)u(k[Q].object),delete k[Q];delete B[z]}delete O[V],Object.keys(O).length===0&&delete n[I]}}}function b(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function um(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let g=0;for(let f=0;f<d;f++)g+=u[f];t.update(g,n,1)}function l(c,u,d,h){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<c.length;f++)a(c[f],u[f],h[f]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v]*h[v];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function dm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||n!==0||s;return s=h,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,g){const f=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,E=M*4;let y=m.clippingState||null;l.value=y,y=u(f,h,E,g);for(let T=0;T!==E;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,g,f){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,f!==!0||p===null){const m=g+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=g;E!==v;++E,y+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const ti=4,jl=[.125,.215,.35,.446,.526,.582],mi=20,fm=256,ds=new Yo,Ql=new Ne;let ga=null,_a=0,xa=0,va=!1;const pm=new P;class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=pm}=r;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Gn,format:pn,colorSpace:Zi,depthBuffer:!1},s=tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mm(r)),this._blurMaterial=_m(r,e,t),this._ggxMaterial=gm(r,e,t)}return s}_compileMaterial(e){const t=new De(new St,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,n,s,r){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,g=d.toneMapping;d.getClearColor(Ql),d.toneMapping=yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new qt,new It({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(Ql),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;ki(s,y*T,E>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}d.toneMapping=g,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vi||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ds)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,g=d*h,{_lodMax:f}=this,v=this._sizeLods[n],p=3*v*(n>f-ti?n-f+ti:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=f-t,ki(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,ds),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,ki(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(o,ds)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,g=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*mi-1),v=r/f,p=isFinite(r)?1+Math.floor(u*v):mi;p>mi&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const m=[];let M=0;for(let C=0;C<mi;++C){const x=C/v,b=Math.exp(-x*x/2);m.push(b),C===0?M+=b:C<p&&(M+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=f,h.mipInt.value=E-n;const y=this._sizeLods[s],T=3*y*(s>E-ti?s-E+ti:0),w=4*(this._cubeSize-y);ki(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(d,ds)}}function mm(i){const e=[],t=[],n=[];let s=i;const r=i-ti+1+jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ti?l=jl[a-i+ti-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,f=6,v=3,p=2,m=1,M=new Float32Array(v*f*g),E=new Float32Array(p*f*g),y=new Float32Array(m*f*g);for(let w=0;w<g;w++){const C=w%3*2/3-1,x=w>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(b,v*f*w),E.set(h,p*f*w);const N=[w,w,w,w,w,w];y.set(N,m*f*w)}const T=new St;T.setAttribute("position",new an(M,v)),T.setAttribute("uv",new an(E,p)),T.setAttribute("faceIndex",new an(y,m)),n.push(new De(T,null)),s>ti&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tc(i,e,t){const n=new En(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gm(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function _m(i,e,t){const n=new Float32Array(mi),s=new P(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function nc(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ic(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Cr(){return`

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
	`}class iu extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Bn});r.uniforms.tEquirect.value=t;const a=new De(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Gt),new yd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function xm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){const g=h.mapping;if(g===Vr||g===Gr)if(e.has(h)){const f=e.get(h).texture;return o(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const v=new iu(f.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,f=g===Vr||g===Gr,v=g===vi||g===Ji;if(f||v){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ec(i)),p=f?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return f&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new ec(i)),p=f?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,g){return g===Vr?h.mapping=vi:g===Gr&&(h.mapping=Ji),h}function l(h){let g=0;const f=6;for(let v=0;v<f;v++)h[v]!==void 0&&g++;return g===f}function c(h){const g=h.target;g.removeEventListener("dispose",c);const f=e.get(g);f!==void 0&&(e.delete(g),f.dispose())}function u(h){const g=h.target;g.removeEventListener("dispose",u);const f=t.get(g);f!==void 0&&(t.delete(g),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Mm(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",a),delete s[h.id];const g=r.get(h);g&&(e.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER)}function c(d){const h=[],g=d.index,f=d.attributes.position;let v=0;if(f===void 0)return;if(g!==null){const M=g.array;v=g.version;for(let E=0,y=M.length;E<y;E+=3){const T=M[E+0],w=M[E+1],C=M[E+2];h.push(T,w,w,C,C,T)}}else{const M=f.array;v=f.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const T=E+0,w=E+1,C=E+2;h.push(T,w,w,C,C,T)}}const p=new(f.count>=65535?qc:Xc)(h,1);p.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Sm(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,g){i.drawElements(n,g,r,h*a),t.update(g,n,1)}function c(h,g,f){f!==0&&(i.drawElementsInstanced(n,g,r,h*a,f),t.update(g,n,f))}function u(h,g,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,h,0,f);let p=0;for(let m=0;m<f;m++)p+=g[m];t.update(p,n,1)}function d(h,g,f,v){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,g[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,h,0,v,0,f);let m=0;for(let M=0;M<f;M++)m+=g[M]*v[M];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let N=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var g=N;h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*d),x=new Hc(C,T,w,d);x.type=fn,x.needsUpdate=!0;const b=y*4;for(let R=0;R<d;R++){const I=m[R],O=M[R],V=E[R],B=T*w*4*R;for(let z=0;z<I.count;z++){const k=z*b;f===!0&&(s.fromBufferAttribute(I,z),C[B+k+0]=s.x,C[B+k+1]=s.y,C[B+k+2]=s.z,C[B+k+3]=0),v===!0&&(s.fromBufferAttribute(O,z),C[B+k+4]=s.x,C[B+k+5]=s.y,C[B+k+6]=s.z,C[B+k+7]=0),p===!0&&(s.fromBufferAttribute(V,z),C[B+k+8]=s.x,C[B+k+9]=s.y,C[B+k+10]=s.z,C[B+k+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new we(T,w)},n.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];const v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Em(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Tm={[Cc]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function wm(i,e,t,n,s){const r=new En(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new En(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),o=new St;o.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const l=new _d({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new De(o,l),u=new Yo(-1,1,1,-1,0,1);let d=null,h=null,g=!1,f,v=null,p=[],m=!1;this.setSize=function(M,E){r.setSize(M,E),a.setSize(M,E);for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(M,E)}},this.setEffects=function(M){p=M,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(E,y)}},this.begin=function(M,E){if(g||M.toneMapping===yn&&p.length===0)return!1;if(v=E,E!==null){const y=E.width,T=E.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return m===!1&&M.setRenderTarget(r),f=M.toneMapping,M.toneMapping=yn,!0},this.hasRenderPass=function(){return m},this.end=function(M,E){M.toneMapping=f,g=!0;let y=r,T=a;for(let w=0;w<p.length;w++){const C=p[w];if(C.enabled!==!1&&(C.render(M,T,y,E),C.needsSwap!==!1)){const x=y;y=T,T=x}}if(d!==M.outputColorSpace||h!==M.toneMapping){d=M.outputColorSpace,h=M.toneMapping,l.defines={},Ye.getTransfer(d)===et&&(l.defines.SRGB_TRANSFER="");const w=Tm[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(v),M.render(c,u),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const su=new Ht,go=new Ps(1,1),ru=new Hc,au=new Lh,ou=new Jc,sc=[],rc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),wt(t,n)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),wt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),wt(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(go.compareFunction=t.isReversedDepthBuffer()?Lo:Do,r=go):r=su,t.setTexture2D(e||r,s)}function Hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||au,s)}function Wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ou,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ru,s)}function qm(i){switch(i){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Pm;case 35674:return Dm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function $m(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Km(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Zm(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jm(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qm(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e0(i,e){i.uniform1iv(this.addr,e)}function t0(i,e){i.uniform2iv(this.addr,e)}function n0(i,e){i.uniform3iv(this.addr,e)}function i0(i,e){i.uniform4iv(this.addr,e)}function s0(i,e){i.uniform1uiv(this.addr,e)}function r0(i,e){i.uniform2uiv(this.addr,e)}function a0(i,e){i.uniform3uiv(this.addr,e)}function o0(i,e){i.uniform4uiv(this.addr,e)}function l0(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=go:a=su;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function c0(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||au,r[a])}function u0(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ou,r[a])}function h0(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ru,r[a])}function d0(i){switch(i){case 5126:return Ym;case 35664:return $m;case 35665:return Jm;case 35666:return Km;case 35674:return Zm;case 35675:return jm;case 35676:return Qm;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}}class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function cc(i,e){i.seq.push(e),i.map[e.id]=e}function g0(i,e,t){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cc(t,c===void 0?new f0(o,i,e):new p0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new m0(o),cc(t,d)),t=d}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _0=37297;let x0=0;function v0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const hc=new Oe;function M0(i){Ye._getMatrix(hc,Ye.workingColorSpace,i);const e=`mat3( ${hc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case vr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+v0(i.getShaderSource(e),o)}else return r}function S0(i,e){const t=M0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const y0={[Cc]:"Linear",[Rc]:"Reinhard",[Pc]:"Cineon",[bo]:"ACESFilmic",[Lc]:"AgX",[Ic]:"Neutral",[Dc]:"Custom"};function b0(i,e){const t=y0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new P;function E0(){Ye.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function w0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vs(i){return i!==""}function fc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(C0,P0)}const R0=new Map;function P0(i,e){let t=ze[e];if(t===void 0){const n=R0.get(e);if(n!==void 0)t=ze[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _o(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(D0,L0)}function L0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const I0={[dr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function U0(i){return I0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N0={[vi]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function F0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const O0={[Ji]:"ENVMAP_MODE_REFRACTION"};function B0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z0={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function k0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z0[i.combine]||"ENVMAP_BLENDING_NONE"}function V0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function G0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=U0(t),c=F0(t),u=B0(t),d=k0(t),h=V0(t),g=T0(t),f=w0(r),v=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(p=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?ze.tonemapping_pars_fragment:"",t.toneMapping!==yn?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),E0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=_o(a),a=fc(a,t),a=pc(a,t),o=_o(o),o=fc(o,t),o=pc(o,t),a=mc(a),o=mc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=M+p+a,y=M+m+o,T=uc(s,s.VERTEX_SHADER,E),w=uc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(w)||"",B=I.trim(),z=O.trim(),k=V.trim();let Q=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{const ue=dc(s,T,"vertex"),me=dc(s,w,"fragment");qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ue+`
`+me)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(K=!1);K&&(R.diagnostics={runnable:Q,programLog:B,vertexShader:{log:z,prefix:p},fragmentShader:{log:k,prefix:m}})}s.deleteShader(T),s.deleteShader(w),x=new _r(s,v),b=A0(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,_0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let H0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function q0(i,e,t,n,s,r){const a=new No,o=new W0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,N,R,I){const O=R.fog,V=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||B,z),Q=k&&k.mapping===br?k.image.height:null,K=g[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=ue!==void 0?ue.length:0;let de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Be,dt,ut,$;if(K){const Qe=vn[K];Be=Qe.vertexShader,dt=Qe.fragmentShader}else Be=x.vertexShader,dt=x.fragmentShader,o.update(x),ut=o.getVertexShaderID(x),$=o.getFragmentShaderID(x);const ie=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,Pe=!!x.map,At=!!x.matcap,Xe=!!k,je=!!x.aoMap,st=!!x.lightMap,ke=!!x.bumpMap,_t=!!x.normalMap,D=!!x.displacementMap,yt=!!x.emissiveMap,Ze=!!x.metalnessMap,ot=!!x.roughnessMap,Se=x.anisotropy>0,A=x.clearcoat>0,_=x.dispersion>0,U=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,q=Se&&!!x.anisotropyMap,ge=A&&!!x.clearcoatMap,se=A&&!!x.clearcoatNormalMap,Te=A&&!!x.clearcoatRoughnessMap,Ce=U&&!!x.iridescenceMap,Z=U&&!!x.iridescenceThicknessMap,ee=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,ve=!!x.specularMap,he=!!x.specularColorMap,Ve=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,re=J&&!!x.thicknessMap,te=!!x.gradientMap,pe=!!x.alphaMap,j=x.alphaTest>0,X=!!x.alphaHash,xe=!!x.extensions;let Le=yn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=i.toneMapping);const lt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:dt,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zi,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:At,envMap:Xe,envMapMode:Xe&&k.mapping,envMapCubeUVHeight:Q,aoMap:je,lightMap:st,bumpMap:ke,normalMap:_t,displacementMap:D,emissiveMap:yt,normalMapObjectSpace:_t&&x.normalMapType===Qu,normalMapTangentSpace:_t&&x.normalMapType===Vc,metalnessMap:Ze,roughnessMap:ot,anisotropy:Se,anisotropyMap:q,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:_,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:Z,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:he,specularIntensityMap:Ve,transmission:J,transmissionMap:L,thicknessMap:re,gradientMap:te,opaque:x.transparent===!1&&x.blending===Hi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:j,alphaHash:X,combine:x.combine,mapUv:Pe&&f(x.map.channel),aoMapUv:je&&f(x.aoMap.channel),lightMapUv:st&&f(x.lightMap.channel),bumpMapUv:ke&&f(x.bumpMap.channel),normalMapUv:_t&&f(x.normalMap.channel),displacementMapUv:D&&f(x.displacementMap.channel),emissiveMapUv:yt&&f(x.emissiveMap.channel),metalnessMapUv:Ze&&f(x.metalnessMap.channel),roughnessMapUv:ot&&f(x.roughnessMap.channel),anisotropyMapUv:q&&f(x.anisotropyMap.channel),clearcoatMapUv:ge&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&f(x.sheenRoughnessMap.channel),specularMapUv:ve&&f(x.specularMap.channel),specularColorMapUv:he&&f(x.specularColorMap.channel),specularIntensityMapUv:Ve&&f(x.specularIntensityMap.channel),transmissionMapUv:L&&f(x.transmissionMap.channel),thicknessMapUv:re&&f(x.thicknessMap.channel),alphaMapUv:pe&&f(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Pe||pe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:yt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vt,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const b=g[x.type];let N;if(b){const R=vn[b];N=pd.clone(R.uniforms)}else N=x.uniforms;return N}function y(x,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new G0(i,b,x,s),c.push(N),u.set(b,N)),N}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function Y0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _c(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,f,v,p,m){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:g,material:f,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[e]=M):(M.id=h.id,M.object=h,M.geometry=g,M.material=f,M.materialVariant=a(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,g,f,v,p,m){const M=o(h,g,f,v,p,m);f.transmission>0?n.push(M):f.transparent===!0?s.push(M):t.push(M)}function c(h,g,f,v,p,m){const M=o(h,g,f,v,p,m);f.transmission>0?n.unshift(M):f.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,g){t.length>1&&t.sort(h||$0),n.length>1&&n.sort(g||_c),s.length>1&&s.sort(g||_c)}function d(){for(let h=e,g=i.length;h<g;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function J0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new xc,i.set(n,[a])):s>=r.length?(a=new xc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j0=0;function Q0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new K0,t=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new tt,a=new tt;function o(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,f=0,v=0,p=0,m=0,M=0,E=0,y=0,T=0,w=0,C=0;c.sort(Q0);for(let b=0,N=c.length;b<N;b++){const R=c[b],I=R.color,O=R.intensity,V=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ki?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*O,d+=I.g*O,h+=I.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=z,g++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(I).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[v]=z;const k=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,k.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=k.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=B,y++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(I).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[f]=Q,n.pointShadowMap[f]=B,n.pointShadowMatrix[f]=R.shadow.matrix,E++}n.point[f]=z,f++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==g||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=p,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,x.directionalLength=g,x.pointLength=f,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=C,n.version=j0++)}function l(c,u){let d=0,h=0,g=0,f=0,v=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const E=c[m];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const y=n.rectArea[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),f++}else if(E.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function vc(i){const e=new eg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vc(i),e.set(s,[o])):r>=a.length?(o=new vc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`,sg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],rg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Mc=new tt,fs=new P,Sa=new P;function ag(i,e,t){let n=new Bo;const s=new we,r=new we,a=new mt,o=new xd,l=new vd,c={},u=t.maxTextureSize,d={[ni]:jt,[jt]:ni,[Vt]:Vt},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const f=new St;f.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(f,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let m=this.type;this.render=function(w,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===wc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dr);const b=i.getRenderTarget(),N=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Bn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=m!==this.type;O&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(B=>B.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,B=w.length;V<B;V++){const z=w[V],k=z.shadow;if(k===void 0){Re("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Q=k.getFrameExtents();s.multiply(Q),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y));const K=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=K,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===xs){if(z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new En(s.x,s.y,{format:Ki,type:Gn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ps(s.x,s.y,fn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Hn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt}else z.isPointLight?(k.map=new iu(s.x),k.map.depthTexture=new Zh(s.x,Tn)):(k.map=new En(s.x,s.y),k.map.depthTexture=new Ps(s.x,s.y,Tn)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Hn,this.type===dr?(k.map.depthTexture.compareFunction=K?Lo:Do,k.map.depthTexture.minFilter=Gt,k.map.depthTexture.magFilter=Gt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt);k.camera.updateProjectionMatrix()}const ue=k.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ue;me++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,me),i.clear();else{me===0&&(i.setRenderTarget(k.map),i.clear());const de=k.getViewport(me);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),I.viewport(a)}if(z.isPointLight){const de=k.camera,Be=k.matrix,dt=z.distance||de.far;dt!==de.far&&(de.far=dt,de.updateProjectionMatrix()),fs.setFromMatrixPosition(z.matrixWorld),de.position.copy(fs),Sa.copy(de.position),Sa.add(sg[me]),de.up.copy(rg[me]),de.lookAt(Sa),de.updateMatrixWorld(),Be.makeTranslation(-fs.x,-fs.y,-fs.z),Mc.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Mc,de.coordinateSystem,de.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),y(C,x,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===xs&&M(k,x),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,N,R)};function M(w,C){const x=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(s.x,s.y,{format:Ki,type:Gn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,g,v,null)}function E(w,C,x,b){let N=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)N=R;else if(N=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=N.uuid,O=C.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let B=V[O];B===void 0&&(B=N.clone(),V[O]=B,C.addEventListener("dispose",T)),N=B}if(N.visible=C.visible,N.wireframe=C.wireframe,b===xs?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=i.properties.get(N);I.light=x}return N}function y(w,C,x,b,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===xs)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const B=O.groups;for(let z=0,k=B.length;z<k;z++){const Q=B[z],K=V[Q.materialIndex];if(K&&K.visible){const ue=E(w,K,b,N);w.onBeforeShadow(i,w,C,x,O,ue,Q),i.renderBufferDirect(x,null,O,ue,w,Q),w.onAfterShadow(i,w,C,x,O,ue,Q)}}}else if(V.visible){const B=E(w,V,b,N);w.onBeforeShadow(i,w,C,x,O,B,null),i.renderBufferDirect(x,null,O,B,w,null),w.onAfterShadow(i,w,C,x,O,B,null)}}const I=w.children;for(let O=0,V=I.length;O<V;O++)y(I[O],C,x,b,N)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const b=c[x],N=w.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function og(i,e){function t(){let L=!1;const re=new mt;let te=null;const pe=new mt(0,0,0,0);return{setMask:function(j){te!==j&&!L&&(i.colorMask(j,j,j,j),te=j)},setLocked:function(j){L=j},setClear:function(j,X,xe,Le,lt){lt===!0&&(j*=Le,X*=Le,xe*=Le),re.set(j,X,xe,Le),pe.equals(re)===!1&&(i.clearColor(j,X,xe,Le),pe.copy(re))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,te=null,pe=null,j=null;return{setReversed:function(X){if(re!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=X;const Le=j;j=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(X){X?ie(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(X){te!==X&&!L&&(i.depthMask(X),te=X)},setFunc:function(X){if(re&&(X=uh[X]),pe!==X){switch(X){case wa:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=X}},setLocked:function(X){L=X},setClear:function(X){j!==X&&(j=X,re&&(X=1-X),i.clearDepth(X))},reset:function(){L=!1,te=null,pe=null,j=null,re=!1}}}function s(){let L=!1,re=null,te=null,pe=null,j=null,X=null,xe=null,Le=null,lt=null;return{setTest:function(Qe){L||(Qe?ie(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!L&&(i.stencilMask(Qe),re=Qe)},setFunc:function(Qe,Cn,Rn){(te!==Qe||pe!==Cn||j!==Rn)&&(i.stencilFunc(Qe,Cn,Rn),te=Qe,pe=Cn,j=Rn)},setOp:function(Qe,Cn,Rn){(X!==Qe||xe!==Cn||Le!==Rn)&&(i.stencilOp(Qe,Cn,Rn),X=Qe,xe=Cn,Le=Rn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){lt!==Qe&&(i.clearStencil(Qe),lt=Qe)},reset:function(){L=!1,re=null,te=null,pe=null,j=null,X=null,xe=null,Le=null,lt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,g=[],f=null,v=!1,p=null,m=null,M=null,E=null,y=null,T=null,w=null,C=new Ne(0,0,0),x=0,b=!1,N=null,R=null,I=null,O=null,V=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=k>=2);let K=null,ue={};const me=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Be=new mt().fromArray(me),dt=new mt().fromArray(de);function ut(L,re,te,pe){const j=new Uint8Array(4),X=i.createTexture();i.bindTexture(L,X),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<te;xe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(re+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return X}const $={};$[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc($i),ke(!1),_t(ml),ie(i.CULL_FACE),je(Bn);function ie(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Fe(L,re){return d[L]!==re?(i.bindFramebuffer(L,re),d[L]=re,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(L,re){let te=g,pe=!1;if(L){te=h.get(re),te===void 0&&(te=[],h.set(re,te));const j=L.textures;if(te.length!==j.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,xe=j.length;X<xe;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=j.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function Pe(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const At={[pi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};At[Uu]=i.MIN,At[Nu]=i.MAX;const Xe={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[Ea]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function je(L,re,te,pe,j,X,xe,Le,lt,Qe){if(L===Bn){v===!0&&(ae(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),L!==Du){if(L!==p||Qe!==b){if((m!==pi||y!==pi)&&(i.blendEquation(i.FUNC_ADD),m=pi,y=pi),Qe)switch(L){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}M=null,E=null,T=null,w=null,C.set(0,0,0),x=0,p=L,b=Qe}return}j=j||re,X=X||te,xe=xe||pe,(re!==m||j!==y)&&(i.blendEquationSeparate(At[re],At[j]),m=re,y=j),(te!==M||pe!==E||X!==T||xe!==w)&&(i.blendFuncSeparate(Xe[te],Xe[pe],Xe[X],Xe[xe]),M=te,E=pe,T=X,w=xe),(Le.equals(C)===!1||lt!==x)&&(i.blendColor(Le.r,Le.g,Le.b,lt),C.copy(Le),x=lt),p=L,b=!1}function st(L,re){L.side===Vt?ae(i.CULL_FACE):ie(i.CULL_FACE);let te=L.side===jt;re&&(te=!te),ke(te),L.blending===Hi&&L.transparent===!1?je(Bn):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function _t(L){L!==Ru?(ie(i.CULL_FACE),L!==R&&(L===ml?i.cullFace(i.BACK):L===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),R=L}function D(L){L!==I&&(z&&i.lineWidth(L),I=L)}function yt(L,re,te){L?(ie(i.POLYGON_OFFSET_FILL),(O!==re||V!==te)&&(O=re,V=te,a.getReversed()&&(re=-re),i.polygonOffset(re,te))):ae(i.POLYGON_OFFSET_FILL)}function Ze(L){L?ie(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ot(L){L===void 0&&(L=i.TEXTURE0+B-1),K!==L&&(i.activeTexture(L),K=L)}function Se(L,re,te){te===void 0&&(K===null?te=i.TEXTURE0+B-1:te=K);let pe=ue[te];pe===void 0&&(pe={type:void 0,texture:void 0},ue[te]=pe),(pe.type!==L||pe.texture!==re)&&(K!==te&&(i.activeTexture(te),K=te),i.bindTexture(L,re||$[L]),pe.type=L,pe.texture=re)}function A(){const L=ue[K];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function J(){try{i.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Te(){try{i.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Ce(){try{i.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Z(){try{i.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function ee(L){Be.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function _e(L){dt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function ve(L,re){let te=c.get(re);te===void 0&&(te=new WeakMap,c.set(re,te));let pe=te.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(re,L.name),te.set(L,pe))}function he(L,re){const pe=c.get(re).get(L);l.get(re)!==pe&&(i.uniformBlockBinding(re,pe,L.__bindingPointIndex),l.set(re,pe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,ue={},d={},h=new WeakMap,g=[],f=null,v=!1,p=null,m=null,M=null,E=null,y=null,T=null,w=null,C=new Ne(0,0,0),x=0,b=!1,N=null,R=null,I=null,O=null,V=null,Be.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:Pe,setBlending:je,setMaterial:st,setFlipSided:ke,setCullFace:_t,setLineWidth:D,setPolygonOffset:yt,setScissorTest:Ze,activeTexture:ot,bindTexture:Se,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Ce,texImage3D:Z,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:se,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:ee,viewport:_e,reset:Ve}}function lg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,_){return g?new OffscreenCanvas(A,_):Mr("canvas")}function v(A,_,U){let Y=1;const J=Se(A);if((J.width>U||J.height>U)&&(Y=U/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*J.width),ge=Math.floor(Y*J.height);d===void 0&&(d=f(q,ge));const se=_?f(q,ge):d;return se.width=q,se.height=ge,se.getContext("2d").drawImage(A,0,0,q,ge),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ge+")."),se}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,_,U,Y,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=_;if(_===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),_===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const ge=J?vr:Ye.getTransfer(Y);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=ge===et?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(A,_){let U;return A?_===null||_===Tn||_===As?U=i.DEPTH24_STENCIL8:_===fn?U=i.DEPTH32F_STENCIL8:_===ws&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===As?U=i.DEPTH_COMPONENT24:_===fn?U=i.DEPTH_COMPONENT32F:_===ws&&(U=i.DEPTH_COMPONENT16),U}function T(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){const _=A.target;_.removeEventListener("dispose",w),x(_),_.isVideoTexture&&u.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),N(_)}function x(A){const _=n.get(A);if(_.__webglInit===void 0)return;const U=A.source,Y=h.get(U);if(Y){const J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(Y).length===0&&h.delete(U)}n.remove(A)}function b(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const U=A.source,Y=h.get(U);delete Y[_.__cacheKey],a.memory.textures--}function N(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,J=U.length;Y<J;Y++){const q=n.get(U[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(A)}let R=0;function I(){R=0}function O(){const A=R;return A>=s.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function B(A,_){const U=n.get(A);if(A.isVideoTexture&&Ze(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,A,_);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function z(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,_);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function k(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function Q(A,_){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){ie(U,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const K={[Ia]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},ue={[Nt]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},me={[eh]:i.NEVER,[rh]:i.ALWAYS,[th]:i.LESS,[Do]:i.LEQUAL,[nh]:i.EQUAL,[Lo]:i.GEQUAL,[ih]:i.GREATER,[sh]:i.NOTEQUAL};function de(A,_){if(_.type===fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===Hr||_.magFilter===Os||_.magFilter===gi||_.minFilter===Gt||_.minFilter===Hr||_.minFilter===Os||_.minFilter===gi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==Os&&_.minFilter!==gi||_.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Be(A,_){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",w));const Y=_.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const q=V(_);if(q!==A.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[q].usedTimes++;const ge=J[A.__cacheKey];ge!==void 0&&(J[A.__cacheKey].usedTimes--,ge.usedTimes===0&&b(_)),A.__cacheKey=q,A.__webglTexture=J[q].texture}return U}function dt(A,_,U){return Math.floor(Math.floor(A/U)/_)}function ut(A,_,U,Y){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,Y,_.data);else{q.sort((Z,ee)=>Z.start-ee.start);let ge=0;for(let Z=1;Z<q.length;Z++){const ee=q[ge],_e=q[Z],ve=ee.start+ee.count,he=dt(_e.start,_.width,4),Ve=dt(ee.start,_.width,4);_e.start<=ve+1&&he===Ve&&dt(_e.start+_e.count-1,_.width,4)===he?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ge,q[ge]=_e)}q.length=ge+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Z=0,ee=q.length;Z<ee;Z++){const _e=q[Z],ve=Math.floor(_e.start/4),he=Math.ceil(_e.count/4),Ve=ve%_.width,L=Math.floor(ve/_.width),re=he,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ve,L,re,te,U,Y,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function $(A,_,U){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Be(A,_),q=_.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+U);const ge=n.get(q);if(q.version!==ge.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const se=Ye.getPrimaries(Ye.workingColorSpace),Te=_.colorSpace===ei?null:Ye.getPrimaries(_.colorSpace),Ce=_.colorSpace===ei||se===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Z=v(_.image,!1,s.maxTextureSize);Z=ot(_,Z);const ee=r.convert(_.format,_.colorSpace),_e=r.convert(_.type);let ve=E(_.internalFormat,ee,_e,_.colorSpace,_.isVideoTexture);de(Y,_);let he;const Ve=_.mipmaps,L=_.isVideoTexture!==!0,re=ge.__version===void 0||J===!0,te=q.dataReady,pe=T(_,Z);if(_.isDepthTexture)ve=y(_.format===_i,_.type),re&&(L?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ee,_e,null));else if(_.isDataTexture)if(Ve.length>0){L&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ve[0].width,Ve[0].height);for(let j=0,X=Ve.length;j<X;j++)he=Ve[j],L?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,_e,he.data):t.texImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,ee,_e,he.data);_.generateMipmaps=!1}else L?(re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Z.width,Z.height),te&&ut(_,Z,ee,_e)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ee,_e,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Ve[0].width,Ve[0].height,Z.depth);for(let j=0,X=Ve.length;j<X;j++)if(he=Ve[j],_.format!==pn)if(ee!==null)if(L){if(te)if(_.layerUpdates.size>0){const xe=Zl(he.width,he.height,_.format,_.type);for(const Le of _.layerUpdates){const lt=he.data.subarray(Le*xe/he.data.BYTES_PER_ELEMENT,(Le+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Le,he.width,he.height,1,ee,lt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,ee,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ve,he.width,he.height,Z.depth,0,he.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,ee,_e,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ve,he.width,he.height,Z.depth,0,ee,_e,he.data)}else{L&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ve[0].width,Ve[0].height);for(let j=0,X=Ve.length;j<X;j++)he=Ve[j],_.format!==pn?ee!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,he.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he.width,he.height,ee,_e,he.data):t.texImage2D(i.TEXTURE_2D,j,ve,he.width,he.height,0,ee,_e,he.data)}else if(_.isDataArrayTexture)if(L){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Z.width,Z.height,Z.depth),te)if(_.layerUpdates.size>0){const j=Zl(Z.width,Z.height,_.format,_.type);for(const X of _.layerUpdates){const xe=Z.data.subarray(X*j/Z.data.BYTES_PER_ELEMENT,(X+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,ee,_e,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ee,_e,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,ee,_e,Z.data);else if(_.isData3DTexture)L?(re&&t.texStorage3D(i.TEXTURE_3D,pe,ve,Z.width,Z.height,Z.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ee,_e,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,ee,_e,Z.data);else if(_.isFramebufferTexture){if(re)if(L)t.texStorage2D(i.TEXTURE_2D,pe,ve,Z.width,Z.height);else{let j=Z.width,X=Z.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,j,X,0,ee,_e,null),j>>=1,X>>=1}}else if(Ve.length>0){if(L&&re){const j=Se(Ve[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height)}for(let j=0,X=Ve.length;j<X;j++)he=Ve[j],L?te&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ee,_e,he):t.texImage2D(i.TEXTURE_2D,j,ve,ee,_e,he);_.generateMipmaps=!1}else if(L){if(re){const j=Se(Z);t.texStorage2D(i.TEXTURE_2D,pe,ve,j.width,j.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,_e,Z)}else t.texImage2D(i.TEXTURE_2D,0,ve,ee,_e,Z);p(_)&&m(Y),ge.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,U){if(_.image.length!==6)return;const Y=Be(A,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const q=n.get(J);if(J.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const ge=Ye.getPrimaries(Ye.workingColorSpace),se=_.colorSpace===ei?null:Ye.getPrimaries(_.colorSpace),Te=_.colorSpace===ei||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Ce&&!Z?ee[X]=v(_.image[X],!0,s.maxCubemapSize):ee[X]=Z?_.image[X].image:_.image[X],ee[X]=ot(_,ee[X]);const _e=ee[0],ve=r.convert(_.format,_.colorSpace),he=r.convert(_.type),Ve=E(_.internalFormat,ve,he,_.colorSpace),L=_.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,te=J.dataReady;let pe=T(_,_e);de(i.TEXTURE_CUBE_MAP,_);let j;if(Ce){L&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,_e.width,_e.height);for(let X=0;X<6;X++){j=ee[X].mipmaps;for(let xe=0;xe<j.length;xe++){const Le=j[xe];_.format!==pn?ve!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Le.width,Le.height,0,Le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Le.width,Le.height,ve,he,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Le.width,Le.height,0,ve,he,Le.data)}}}else{if(j=_.mipmaps,L&&re){j.length>0&&pe++;const X=Se(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,X.width,X.height)}for(let X=0;X<6;X++)if(Z){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,ve,he,ee[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ee[X].width,ee[X].height,0,ve,he,ee[X].data);for(let xe=0;xe<j.length;xe++){const lt=j[xe].image[X].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,lt.width,lt.height,ve,he,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,lt.width,lt.height,0,ve,he,lt.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,he,ee[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ve,he,ee[X]);for(let xe=0;xe<j.length;xe++){const Le=j[xe];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ve,he,Le.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,ve,he,Le.image[X])}}}p(_)&&m(i.TEXTURE_CUBE_MAP),q.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ae(A,_,U,Y,J,q){const ge=r.convert(U.format,U.colorSpace),se=r.convert(U.type),Te=E(U.internalFormat,ge,se,U.colorSpace),Ce=n.get(_),Z=n.get(U);if(Z.__renderTarget=_,!Ce.__hasExternalTextures){const ee=Math.max(1,_.width>>q),_e=Math.max(1,_.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Te,ee,_e,_.depth,0,ge,se,null):t.texImage2D(J,q,Te,ee,_e,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Z.__webglTexture,0,D(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Z.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=y(_.stencilBuffer,J),ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(_),q,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(_),q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{const Y=_.textures;for(let J=0;J<Y.length;J++){const q=Y[J],ge=r.convert(q.format,q.colorSpace),se=r.convert(q.type),Te=E(q.internalFormat,ge,se,q.colorSpace);yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(_),Te,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(_),Te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,_,U){const Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),de(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=r.convert(_.depthTexture.format),Z=r.convert(_.depthTexture.type);let ee;_.depthTexture.format===Hn?ee=i.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(ee=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,_.width,_.height,0,Ce,Z,null)}}else B(_.depthTexture,0);const q=J.__webglTexture,ge=D(_),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Te=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else if(_.depthTexture.format===_i)yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const _=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Ae(_.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?Ae(_.__webglFramebuffer[0],A,0):Ae(_.__webglFramebuffer,A,0)}else if(U){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,_,U){const Y=n.get(A);_!==void 0&&ae(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Pe(A)}function Xe(A){const _=A.texture,U=n.get(A),Y=n.get(_);A.addEventListener("dispose",C);const J=A.textures,q=A.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let Te=0;Te<_.mipmaps.length;Te++)U.__webglFramebuffer[se][Te]=i.createFramebuffer()}else U.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)U.__webglFramebuffer[se]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,Te=J.length;se<Te;se++){const Ce=n.get(J[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&yt(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Te=J[se];U.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Ce=r.convert(Te.format,Te.colorSpace),Z=r.convert(Te.type),ee=E(Te.internalFormat,Ce,Z,Te.colorSpace,A.isXRRenderTarget===!0),_e=D(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,U.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),de(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(U.__webglFramebuffer[se][Te],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else ae(U.__webglFramebuffer[se],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(_)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,Te=J.length;se<Te;se++){const Ce=J[se],Z=n.get(Ce);let ee=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),de(ee,Ce),ae(U.__webglFramebuffer,A,Ce,i.COLOR_ATTACHMENT0+se,ee,0),p(Ce)&&m(ee)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),de(se,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(U.__webglFramebuffer[Te],A,_,i.COLOR_ATTACHMENT0,se,Te);else ae(U.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,se,0);p(_)&&m(se),t.unbindTexture()}A.depthBuffer&&Pe(A)}function je(A){const _=A.textures;for(let U=0,Y=_.length;U<Y;U++){const J=_[U];if(p(J)){const q=M(A),ge=n.get(J).__webglTexture;t.bindTexture(q,ge),m(q),t.unbindTexture()}}}const st=[],ke=[];function _t(A){if(A.samples>0){if(yt(A)===!1){const _=A.textures,U=A.width,Y=A.height;let J=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),se=_.length>1;if(se)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const Z=n.get(_[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,J,i.NEAREST),l===!0&&(st.length=0,ke.length=0,st.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push(q),ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const Z=n.get(_[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function D(A){return Math.min(s.maxSamples,A.samples)}function yt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ze(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function ot(A,_){const U=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Zi&&U!==ei&&(Ye.getTransfer(U)===et?(Y!==pn||J!==nn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",U)),_}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=At,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cg(i,e){function t(n,s=ei){let r;const a=Ye.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Eo)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===kc)return i.RGB;if(n===pn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Ro)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===$a||n===Ja||n===Ka||n===Za||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===oo||n===lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:ug,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends ts{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,g=null,f=null;const v=typeof XRWebGLBinding<"u",p=new dg,m={},M=t.getContextAttributes();let E=null,y=null;const T=[],w=[],C=new we;let x=null;const b=new Zt;b.viewport=new mt;const N=new Zt;N.viewport=new mt;const R=[b,N],I=new bd;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=T[$];return ie===void 0&&(ie=new Jr,T[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=T[$];return ie===void 0&&(ie=new Jr,T[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=T[$];return ie===void 0&&(ie=new Jr,T[$]=ie),ie.getHandSpace()};function B($){const ie=w.indexOf($.inputSource);if(ie===-1)return;const ae=T[ie];ae!==void 0&&(ae.update($.inputSource,$.frame,c||a),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let $=0;$<T.length;$++){const ie=w[$];ie!==null&&(w[$]=null,T[$].disconnect(ie))}O=null,V=null,p.reset();for(const $ in m)delete m[$];e.setRenderTarget(E),g=null,h=null,d=null,s=null,y=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Fe=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?_i:Hn,Fe=M.stencil?As:Tn);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new En(h.textureWidth,h.textureHeight,{format:pn,type:nn,depthTexture:new Ps(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new En(g.framebufferWidth,g.framebufferHeight,{format:pn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k($){for(let ie=0;ie<$.removed.length;ie++){const ae=$.removed[ie],Fe=w.indexOf(ae);Fe>=0&&(w[Fe]=null,T[Fe].disconnect(ae))}for(let ie=0;ie<$.added.length;ie++){const ae=$.added[ie];let Fe=w.indexOf(ae);if(Fe===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=w.length){w.push(ae),Fe=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Fe=Pe;break}if(Fe===-1)break}const Ae=T[Fe];Ae&&Ae.connect(ae)}}const Q=new P,K=new P;function ue($,ie,ae){Q.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Fe=Q.distanceTo(K),Ae=ie.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,At=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],st=(Ae[9]-1)/Ae[5],ke=(Ae[8]-1)/Ae[0],_t=(Pe[8]+1)/Pe[0],D=At*ke,yt=At*_t,Ze=Fe/(-ke+_t),ot=Ze*-ke;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Se=At+Ze,A=Xe+Ze,_=D-ot,U=yt+(Fe-ot),Y=je*Xe/A*Se,J=st*Xe/A*Se;$.projectionMatrix.makePerspective(_,U,Y,J,Se,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,ae=$.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),I.near=N.near=b.near=ie,I.far=N.far=b.far=ae,(O!==I.near||V!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,V=I.far),I.layers.mask=$.layers.mask|6,b.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const Fe=$.parent,Ae=I.cameras;me(I,Fe);for(let Pe=0;Pe<Ae.length;Pe++)me(Ae[Pe],Fe);Ae.length===2?ue(I,b,N):I.projectionMatrix.copy(b.projectionMatrix),de($,I,Fe)};function de($,ie,ae){ae===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function($){return m[$]};let Be=null;function dt($,ie){if(u=ie.getViewerPose(c||a),f=ie,u!==null){const ae=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Fe=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let Xe=0;Xe<ae.length;Xe++){const je=ae[Xe];let st=null;if(g!==null)st=g.getViewport(je);else{const _t=d.getViewSubImage(h,je);st=_t.viewport,Xe===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let ke=R[Xe];ke===void 0&&(ke=new Zt,ke.layers.enable(Xe),ke.viewport=new mt,R[Xe]=ke),ke.matrix.fromArray(je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),Xe===0&&(I.matrix.copy(ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(ke)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Xe=d.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<ae.length;Xe++){const je=ae[Xe].camera;if(je){let st=m[je];st||(st=new Kc,m[je]=st);const ke=d.getCameraImage(je);st.sourceTexture=ke}}}}for(let ae=0;ae<T.length;ae++){const Fe=w[ae],Ae=T[ae];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ie,c||a)}Be&&Be($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),f=null}const ut=new nu;ut.setAnimationLoop(dt),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}}const fi=new wn,pg=new tt;function mg(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,jc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,E,y){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&g(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),f(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),E=M.envMap,y=M.envMapRotation;E&&(p.envMap.value=E,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),p.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(fi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const y=E.program;n.uniformBlockBinding(M,y)}function c(M,E){let y=s[M.id];y===void 0&&(f(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const T=E.program;n.updateUBOMapping(M,T);const w=e.render.frame;r[M.id]!==w&&(h(M),r[M.id]=w)}function u(M){const E=d();M.__bindingPointIndex=E;const y=i.createBuffer(),T=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,C=y.length;w<C;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,N=x.length;b<N;b++){const R=x[b];if(g(R,w,b,T)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let B=0;B<O.length;B++){const z=O[B],k=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+V,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,E,y,T){const w=M.value,C=E+"_"+y;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const x=T[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[C]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function f(M){const E=M.uniforms;let y=0;const T=16;for(let C=0,x=E.length;C<x;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let N=0,R=b.length;N<R;N++){const I=b[N],O=Array.isArray(I.value)?I.value:[I.value];for(let V=0,B=O.length;V<B;V++){const z=O[V],k=v(z),Q=y%T,K=Q%k.boundary,ue=Q+K;y+=K,ue!==0&&T-ue<k.storage&&(y+=T-ue),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=k.storage}}}const w=y%T;return w>0&&(y+=T-w),M.__size=y,M.__cache={},this}function v(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),E}function p(M){const E=M.target;E.removeEventListener("dispose",p);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}const _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function xg(){return _n===null&&(_n=new Yc(_g,16,16,Ki,Gn),_n.name="DFG_LUT",_n.minFilter=Gt,_n.magFilter=Gt,_n.wrapS=On,_n.wrapT=On,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class vg{constructor(e={}){const{canvas:t=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:g=nn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=g,p=new Set([Po,Ro,Co]),m=new Set([nn,Tn,ws,As,To,wo]),M=new Uint32Array(4),E=new Int32Array(4);let y=null,T=null;const w=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Ut;let R=0,I=0,O=null,V=-1,B=null;const z=new mt,k=new mt;let Q=null;const K=new Ne(0);let ue=0,me=t.width,de=t.height,Be=1,dt=null,ut=null;const $=new mt(0,0,me,de),ie=new mt(0,0,me,de);let ae=!1;const Fe=new Bo;let Ae=!1,Pe=!1;const At=new tt,Xe=new P,je=new mt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function _t(){return O===null?Be:1}let D=n;function yt(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",lt,!1),D===null){const F="webgl2";if(D=yt(F,S),D===null)throw yt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw qe("WebGLRenderer: "+S.message),S}let Ze,ot,Se,A,_,U,Y,J,q,ge,se,Te,Ce,Z,ee,_e,ve,he,Ve,L,re,te,pe;function j(){Ze=new vm(D),Ze.init(),re=new cg(D,Ze),ot=new hm(D,Ze,e,re),Se=new og(D,Ze),ot.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),A=new ym(D),_=new Y0,U=new lg(D,Ze,Se,_,ot,re,A),Y=new xm(b),J=new wd(D),te=new cm(D,J),q=new Mm(D,J,A,te),ge=new Em(D,q,J,te,A),he=new bm(D,ot,U),ee=new dm(_),se=new q0(b,Y,Ze,ot,te,ee),Te=new mg(b,_),Ce=new J0,Z=new tg(Ze),ve=new lm(b,Y,Se,ge,f,l),_e=new ag(b,ge,ot),pe=new gg(D,A,ot,Se),Ve=new um(D,Ze,A),L=new Sm(D,Ze,A),A.programs=se.programs,b.capabilities=ot,b.extensions=Ze,b.properties=_,b.renderLists=Ce,b.shadowMap=_e,b.state=Se,b.info=A}j(),v!==nn&&(x=new wm(v,t.width,t.height,s,r));const X=new fg(b,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(S){S!==void 0&&(Be=S,this.setSize(me,de,!1))},this.getSize=function(S){return S.set(me,de)},this.setSize=function(S,F,W=!0){if(X.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}me=S,de=F,t.width=Math.floor(S*Be),t.height=Math.floor(F*Be),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(me*Be,de*Be).floor()},this.setDrawingBufferSize=function(S,F,W){me=S,de=F,Be=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(v===nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(z)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,F,W,H){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,F,W,H),Se.viewport(z.copy($).multiplyScalar(Be).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,F,W,H){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,F,W,H),Se.scissor(k.copy(ie).multiplyScalar(Be).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){Se.setScissorTest(ae=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,W=!0){let H=0;if(S){let G=!1;if(O!==null){const le=O.texture.format;G=p.has(le)}if(G){const le=O.texture.type,fe=m.has(le),ce=ve.getClearColor(),Me=ve.getClearAlpha(),be=ce.r,Ue=ce.g,Ge=ce.b;fe?(M[0]=be,M[1]=Ue,M[2]=Ge,M[3]=Me,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=be,E[1]=Ue,E[2]=Ge,E[3]=Me,D.clearBufferiv(D.COLOR,0,E))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),ve.dispose(),Ce.dispose(),Z.dispose(),_.dispose(),Y.dispose(),ge.dispose(),te.dispose(),pe.dispose(),se.dispose(),X.dispose(),X.removeEventListener("sessionstart",ol),X.removeEventListener("sessionend",ll),ai.stop()};function xe(S){S.preventDefault(),bl("WebGLRenderer: Context Lost."),N=!0}function Le(){bl("WebGLRenderer: Context Restored."),N=!1;const S=A.autoReset,F=_e.enabled,W=_e.autoUpdate,H=_e.needsUpdate,G=_e.type;j(),A.autoReset=S,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=H,_e.type=G}function lt(S){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Qe(S){const F=S.target;F.removeEventListener("dispose",Qe),Cn(F)}function Cn(S){Rn(S),_.remove(S)}function Rn(S){const F=_.get(S).programs;F!==void 0&&(F.forEach(function(W){se.releaseProgram(W)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,H,G,le){F===null&&(F=st);const fe=G.isMesh&&G.matrixWorld.determinant()<0,ce=bu(S,F,W,H,G);Se.setMaterial(H,fe);let Me=W.index,be=1;if(H.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;be=2}const Ue=W.drawRange,Ge=W.attributes.position;let Ee=Ue.start*be,nt=(Ue.start+Ue.count)*be;le!==null&&(Ee=Math.max(Ee,le.start*be),nt=Math.min(nt,(le.start+le.count)*be)),Me!==null?(Ee=Math.max(Ee,0),nt=Math.min(nt,Me.count)):Ge!=null&&(Ee=Math.max(Ee,0),nt=Math.min(nt,Ge.count));const xt=nt-Ee;if(xt<0||xt===1/0)return;te.setup(G,H,ce,W,Me);let pt,it=Ve;if(Me!==null&&(pt=J.get(Me),it=L,it.setIndex(pt)),G.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*_t()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(G.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),Se.setLineWidth(Ot*_t()),G.isLineSegments?it.setMode(D.LINES):G.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else G.isPoints?it.setMode(D.POINTS):G.isSprite&&it.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,ye=G._multiDrawCounts,Qt=G._multiDrawCount,$e=Me?J.get(Me).bytesPerElement:1,ln=_.get(H).currentProgram.getUniforms();for(let mn=0;mn<Qt;mn++)ln.setValue(D,"_gl_DrawID",mn),it.render(Ot[mn]/$e,ye[mn])}else if(G.isInstancedMesh)it.renderInstances(Ee,xt,G.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Ot);it.renderInstances(Ee,xt,ye)}else it.render(Ee,xt)};function al(S,F,W){S.transparent===!0&&S.side===Vt&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Fs(S,F,W),S.side=ni,S.needsUpdate=!0,Fs(S,F,W),S.side=Vt):Fs(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),T=Z.get(W),T.init(F),C.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const ce=le[fe];al(ce,W,G),H.add(ce)}else al(le,W,G),H.add(le)}),T=C.pop(),H},this.compileAsync=function(S,F,W=null){const H=this.compile(S,F,W);return new Promise(G=>{function le(){if(H.forEach(function(fe){_.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){G(S);return}setTimeout(le,10)}Ze.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let zr=null;function yu(S){zr&&zr(S)}function ol(){ai.stop()}function ll(){ai.start()}const ai=new nu;ai.setAnimationLoop(yu),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(S){zr=S,X.setAnimationLoop(S),S===null?ai.stop():ai.start()},X.addEventListener("sessionstart",ol),X.addEventListener("sessionend",ll),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,H=x!==null&&(O===null||W)&&x.begin(b,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,F,O),T=Z.get(S,C.length),T.init(F),C.push(T),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(At,Sn,F.reversedDepth),Pe=this.localClippingEnabled,Ae=ee.init(this.clippingPlanes,Pe),y=Ce.get(S,w.length),y.init(),w.push(y),X.enabled===!0&&X.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&kr(fe,F,-1/0,b.sortObjects)}kr(S,F,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(dt,ut),ke=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ke&&ve.addToRenderList(y,S),this.info.render.frame++,Ae===!0&&ee.beginShadows();const G=T.state.shadowsArray;if(_e.render(G,S,F),Ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const fe=y.opaque,ce=y.transmissive;if(T.setupLights(),F.isArrayCamera){const Me=F.cameras;if(ce.length>0)for(let be=0,Ue=Me.length;be<Ue;be++){const Ge=Me[be];ul(fe,ce,S,Ge)}ke&&ve.render(S);for(let be=0,Ue=Me.length;be<Ue;be++){const Ge=Me[be];cl(y,S,Ge,Ge.viewport)}}else ce.length>0&&ul(fe,ce,S,F),ke&&ve.render(S),cl(y,S,F)}O!==null&&I===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),H&&x.end(b),S.isScene===!0&&S.onAfterRender(b,S,F),te.resetDefaultState(),V=-1,B=null,C.pop(),C.length>0?(T=C[C.length-1],Ae===!0&&ee.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function kr(S,F,W,H){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Fe.intersectsSprite(S)){H&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const fe=ge.update(S),ce=S.material;ce.visible&&y.push(S,fe,ce,W,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Fe.intersectsObject(S))){const fe=ge.update(S),ce=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),je.copy(fe.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(ce)){const Me=fe.groups;for(let be=0,Ue=Me.length;be<Ue;be++){const Ge=Me[be],Ee=ce[Ge.materialIndex];Ee&&Ee.visible&&y.push(S,fe,Ee,W,je.z,Ge)}}else ce.visible&&y.push(S,fe,ce,W,je.z,null)}}const le=S.children;for(let fe=0,ce=le.length;fe<ce;fe++)kr(le[fe],F,W,H)}function cl(S,F,W,H){const{opaque:G,transmissive:le,transparent:fe}=S;T.setupLightsView(W),Ae===!0&&ee.setGlobalState(b.clippingPlanes,W),H&&Se.viewport(z.copy(H)),G.length>0&&Ns(G,F,W),le.length>0&&Ns(le,F,W),fe.length>0&&Ns(fe,F,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ul(S,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ee=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new En(1,1,{generateMipmaps:!0,type:Ee?Gn:nn,minFilter:gi,samples:ot.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const le=T.state.transmissionRenderTarget[H.id],fe=H.viewport||z;le.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const ce=b.getRenderTarget(),Me=b.getActiveCubeFace(),be=b.getActiveMipmapLevel();b.setRenderTarget(le),b.getClearColor(K),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),ke&&ve.render(W);const Ue=b.toneMapping;b.toneMapping=yn;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Ae===!0&&ee.setGlobalState(b.clippingPlanes,H),Ns(S,W,H),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let nt=0,xt=F.length;nt<xt;nt++){const pt=F[nt],{object:it,geometry:Ot,material:ye,group:Qt}=pt;if(ye.side===Vt&&it.layers.test(H.layers)){const $e=ye.side;ye.side=jt,ye.needsUpdate=!0,hl(it,W,H,Ot,ye,Qt),ye.side=$e,ye.needsUpdate=!0,Ee=!0}}Ee===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}b.setRenderTarget(ce,Me,be),b.setClearColor(K,ue),Ge!==void 0&&(H.viewport=Ge),b.toneMapping=Ue}function Ns(S,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,le=S.length;G<le;G++){const fe=S[G],{object:ce,geometry:Me,group:be}=fe;let Ue=fe.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),ce.layers.test(W.layers)&&hl(ce,F,W,Me,Ue,be)}}function hl(S,F,W,H,G,le){S.onBeforeRender(b,F,W,H,G,le),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(b,F,W,H,S,le),G.transparent===!0&&G.side===Vt&&G.forceSinglePass===!1?(G.side=jt,G.needsUpdate=!0,b.renderBufferDirect(W,F,H,G,S,le),G.side=ni,G.needsUpdate=!0,b.renderBufferDirect(W,F,H,G,S,le),G.side=Vt):b.renderBufferDirect(W,F,H,G,S,le),S.onAfterRender(b,F,W,H,G,le)}function Fs(S,F,W){F.isScene!==!0&&(F=st);const H=_.get(S),G=T.state.lights,le=T.state.shadowsArray,fe=G.state.version,ce=se.getParameters(S,G.state,le,F,W),Me=se.getProgramCacheKey(ce);let be=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=Y.get(S.envMap||H.environment,Ue),H.envMapRotation=H.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,be===void 0&&(S.addEventListener("dispose",Qe),be=new Map,H.programs=be);let Ge=be.get(Me);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===fe)return fl(S,ce),Ge}else ce.uniforms=se.getUniforms(S),S.onBeforeCompile(ce,b),Ge=se.acquireProgram(ce,Me),be.set(Me,Ge),H.uniforms=ce.uniforms;const Ee=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),fl(S,ce),H.needsLights=Tu(S),H.lightsStateVersion=fe,H.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function dl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=_r.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function fl(S,F){const W=_.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function bu(S,F,W,H,G){F.isScene!==!0&&(F=st),U.resetTextureUnits();const le=F.fog,fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ce=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Zi,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,be=Y.get(H.envMap||fe,Me),Ue=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let pt=yn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(pt=b.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=it!==void 0?it.length:0,ye=_.get(H),Qt=T.state.lights;if(Ae===!0&&(Pe===!0||S!==B)){const Ct=S===B&&H.id===V;ee.setState(H,S,Ct)}let $e=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Qt.state.version||ye.outputColorSpace!==ce||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==be||H.fog===!0&&ye.fog!==le||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ee.numPlanes||ye.numIntersection!==ee.numIntersection)||ye.vertexAlphas!==Ue||ye.vertexTangents!==Ge||ye.morphTargets!==Ee||ye.morphNormals!==nt||ye.morphColors!==xt||ye.toneMapping!==pt||ye.morphTargetsCount!==Ot)&&($e=!0):($e=!0,ye.__version=H.version);let ln=ye.currentProgram;$e===!0&&(ln=Fs(H,F,G));let mn=!1,oi=!1,Ei=!1;const rt=ln.getUniforms(),Lt=ye.uniforms;if(Se.useProgram(ln.program)&&(mn=!0,oi=!0,Ei=!0),H.id!==V&&(V=H.id,oi=!0),mn||B!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),rt.setValue(D,"projectionMatrix",S.projectionMatrix),rt.setValue(D,"viewMatrix",S.matrixWorldInverse);const qn=rt.map.cameraPosition;qn!==void 0&&qn.setValue(D,Xe.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,oi=!0,Ei=!0)}if(ye.needsLights&&(Qt.state.directionalShadowMap.length>0&&rt.setValue(D,"directionalShadowMap",Qt.state.directionalShadowMap,U),Qt.state.spotShadowMap.length>0&&rt.setValue(D,"spotShadowMap",Qt.state.spotShadowMap,U),Qt.state.pointShadowMap.length>0&&rt.setValue(D,"pointShadowMap",Qt.state.pointShadowMap,U)),G.isSkinnedMesh){rt.setOptional(D,G,"bindMatrix"),rt.setOptional(D,G,"bindMatrixInverse");const Ct=G.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),rt.setValue(D,"boneTexture",Ct.boneTexture,U))}G.isBatchedMesh&&(rt.setOptional(D,G,"batchingTexture"),rt.setValue(D,"batchingTexture",G._matricesTexture,U),rt.setOptional(D,G,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",G._indirectTexture,U),rt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",G._colorsTexture,U));const Xn=W.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&he.update(G,W,ln),(oi||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,rt.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Lt.envMapIntensity.value=F.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=xg()),oi&&(rt.setValue(D,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&Eu(Lt,Ei),le&&H.fog===!0&&Te.refreshFogUniforms(Lt,le),Te.refreshMaterialUniforms(Lt,H,Be,de,T.state.transmissionRenderTarget[S.id]),_r.upload(D,dl(ye),Lt,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_r.upload(D,dl(ye),Lt,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(D,"center",G.center),rt.setValue(D,"modelViewMatrix",G.modelViewMatrix),rt.setValue(D,"normalMatrix",G.normalMatrix),rt.setValue(D,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ct=H.uniformsGroups;for(let qn=0,Ti=Ct.length;qn<Ti;qn++){const pl=Ct[qn];pe.update(pl,ln),pe.bind(pl,ln)}}return ln}function Eu(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Tu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,F,W){const H=_.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=F,_.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const W=_.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const wu=D.createFramebuffer();this.setRenderTarget=function(S,F=0,W=0){O=S,R=F,I=W;let H=null,G=!1,le=!1;if(S){const ce=_.get(S);if(ce.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(D.FRAMEBUFFER,ce.__webglFramebuffer),z.copy(S.viewport),k.copy(S.scissor),Q=S.scissorTest,Se.viewport(z),Se.scissor(k),Se.setScissorTest(Q),V=-1;return}else if(ce.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(ce.__hasExternalTextures)U.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&_.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const be=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(be[F])?H=be[F][W]:H=be[F],G=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?H=_.get(S).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,z.copy(S.viewport),k.copy(S.scissor),Q=S.scissorTest}else z.copy($).multiplyScalar(Be).floor(),k.copy(ie).multiplyScalar(Be).floor(),Q=ae;if(W!==0&&(H=wu),Se.bindFramebuffer(D.FRAMEBUFFER,H)&&Se.drawBuffers(S,H),Se.viewport(z),Se.scissor(k),Se.setScissorTest(Q),G){const ce=_.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ce.__webglTexture,W)}else if(le){const ce=F;for(let Me=0;Me<S.textures.length;Me++){const be=_.get(S.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,be.__webglTexture,W,ce)}}else if(S!==null&&W!==0){const ce=_.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ce.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(S,F,W,H,G,le,fe,ce=0){if(!(S&&S.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Se.bindFramebuffer(D.FRAMEBUFFER,Me);try{const be=S.textures[ce],Ue=be.format,Ge=be.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce),!ot.textureFormatReadable(Ue)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ge)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-H&&W>=0&&W<=S.height-G&&D.readPixels(F,W,H,G,re.convert(Ue),re.convert(Ge),le)}finally{const be=O!==null?_.get(O).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,H,G,le,fe,ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me)if(F>=0&&F<=S.width-H&&W>=0&&W<=S.height-G){Se.bindFramebuffer(D.FRAMEBUFFER,Me);const be=S.textures[ce],Ue=be.format,Ge=be.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce),!ot.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(F,W,H,G,re.convert(Ue),re.convert(Ge),0);const nt=O!==null?_.get(O).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,nt);const xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ch(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Ee),D.deleteSync(xt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,W=0){const H=Math.pow(2,-W),G=Math.floor(S.image.width*H),le=Math.floor(S.image.height*H),fe=F!==null?F.x:0,ce=F!==null?F.y:0;U.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,ce,G,le),Se.unbindTexture()};const Au=D.createFramebuffer(),Cu=D.createFramebuffer();this.copyTextureToTexture=function(S,F,W=null,H=null,G=0,le=0){let fe,ce,Me,be,Ue,Ge,Ee,nt,xt;const pt=S.isCompressedTexture?S.mipmaps[le]:S.image;if(W!==null)fe=W.max.x-W.min.x,ce=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ue=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Lt=Math.pow(2,-G);fe=Math.floor(pt.width*Lt),ce=Math.floor(pt.height*Lt),S.isDataArrayTexture?Me=pt.depth:S.isData3DTexture?Me=Math.floor(pt.depth*Lt):Me=1,be=0,Ue=0,Ge=0}H!==null?(Ee=H.x,nt=H.y,xt=H.z):(Ee=0,nt=0,xt=0);const it=re.convert(F.format),Ot=re.convert(F.type);let ye;F.isData3DTexture?(U.setTexture3D(F,0),ye=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),ye=D.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),ye=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Qt=D.getParameter(D.UNPACK_ROW_LENGTH),$e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),mn=D.getParameter(D.UNPACK_SKIP_ROWS),oi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const Ei=S.isDataArrayTexture||S.isData3DTexture,rt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Lt=_.get(S),Xn=_.get(F),Ct=_.get(Lt.__renderTarget),qn=_.get(Xn.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Ct.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ti=0;Ti<Me;Ti++)Ei&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(S).__webglTexture,G,Ge+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(F).__webglTexture,le,xt+Ti)),D.blitFramebuffer(be,Ue,fe,ce,Ee,nt,fe,ce,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||_.has(S)){const Lt=_.get(S),Xn=_.get(F);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Au),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cu);for(let Ct=0;Ct<Me;Ct++)Ei?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,G,Ge+Ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,G),rt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xn.__webglTexture,le,xt+Ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xn.__webglTexture,le),G!==0?D.blitFramebuffer(be,Ue,fe,ce,Ee,nt,fe,ce,D.COLOR_BUFFER_BIT,D.NEAREST):rt?D.copyTexSubImage3D(ye,le,Ee,nt,xt+Ct,be,Ue,fe,ce):D.copyTexSubImage2D(ye,le,Ee,nt,be,Ue,fe,ce);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ye,le,Ee,nt,xt,fe,ce,Me,it,Ot,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,le,Ee,nt,xt,fe,ce,Me,it,pt.data):D.texSubImage3D(ye,le,Ee,nt,xt,fe,ce,Me,it,Ot,pt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Ee,nt,fe,ce,it,Ot,pt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Ee,nt,pt.width,pt.height,it,pt.data):D.texSubImage2D(D.TEXTURE_2D,le,Ee,nt,fe,ce,it,Ot,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),le===0&&F.generateMipmaps&&D.generateMipmap(ye),Se.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,Se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Mg{constructor(){this.ctx=null,this.playing=!1,this.preset="studio",this.cache=new Map,this.ready=null}async start(e){if(this.ready&&await this.ready,this.ctx){await this.ctx.resume(),this.playing=!0;return}const t=this.ctx=new AudioContext;await t.resume(),this.master=t.createGain(),this.master.gain.value=.65;const n=t.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=6,this.master.connect(n).connect(t.destination),this.dry=t.createGain(),this.dry.connect(this.master),this.rooms={};for(const[s,r,a]of[["studio",.35,3],["cathedral",5.5,2.8]]){const o=t.createConvolver(),l=t.createGain(),c=t.createBuffer(2,Math.ceil(t.sampleRate*r),t.sampleRate);let u=42;for(let d=0;d<2;d++)for(let h=0;h<c.length;h++){u=u*1664525+1013904223>>>0;const g=h/t.sampleRate;c.getChannelData(d)[h]=g<.018?0:(u/4294967296*2-1)*Math.pow(1-h/c.length,a)}o.buffer=c,o.connect(l).connect(this.master),this.rooms[s]={convolution:o,wet:l}}try{this.epoch=t.currentTime+.15,this.ready=Promise.all(e.map(s=>this.add(s))),await this.ready,this.ready=null,this.setPreset(this.preset),this.playing=!0}catch(s){throw e.forEach(r=>this.remove(r)),await t.close(),this.ctx=null,this.ready=null,this.cache.clear(),s}}async add(e){if(!(!e.sound||!this.ctx||e.audio||e.loading)){e.loading=!0;try{this.cache.has(e.sound)||this.cache.set(e.sound,(async()=>{const l=await fetch(`audio/${e.sound}.wav`);if(!l.ok)throw new Error(`Could not load ${e.sound}`);return this.ctx.decodeAudioData(await l.arrayBuffer())})().catch(l=>{throw this.cache.delete(e.sound),l}));const t=await this.cache.get(e.sound);if(e.removed)return;const n=this.ctx,s=n.createBufferSource(),r=n.createGain(),a=n.createPanner();s.buffer=t,s.loop=!0,r.gain.value=e.muted?0:e.volume,a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=2,a.maxDistance=25,a.rolloffFactor=1.2,s.connect(r).connect(a),a.connect(this.dry);for(const l of Object.values(this.rooms))a.connect(l.convolution);e.audio={player:s,gain:r,panner:a},this.move(e);const o=Math.max(n.currentTime+.03,this.epoch);s.start(o,Math.max(0,o-this.epoch)%t.duration)}finally{e.loading=!1}}}remove(e){e.audio&&(e.audio.player.stop(),e.audio.player.disconnect(),e.audio.gain.disconnect(),e.audio.panner.disconnect(),e.audio=null)}async toggle(e){if(!this.ctx)return this.start(e);this.playing?(await this.ctx.suspend(),this.playing=!1):(await this.ctx.resume(),this.playing=!0)}move(e){this.moveTo(e,e.x,e.z)}moveTo(e,t,n){if(e.audio){const s=e.audio.panner;s.positionX.value=t,s.positionY.value=1,s.positionZ.value=n}}mute(e){e.audio&&e.audio.gain.gain.setTargetAtTime(e.muted?0:e.volume,this.ctx.currentTime,.025)}setPreset(e){if(this.preset=e,!this.ctx||!this.rooms)return;const t=this.ctx.currentTime;this.dry.gain.setTargetAtTime(e==="studio"?.95:.66,t,.12),this.rooms.studio.wet.gain.setTargetAtTime(e==="studio"?.15:0,t,.15),this.rooms.cathedral.wet.gain.setTargetAtTime(e==="cathedral"?.85:0,t,.15)}listener(e){if(!this.ctx)return;const t=this.ctx.listener,n=e.position,s=e.matrixWorld.elements;t.positionX?(t.positionX.value=n.x,t.positionY.value=n.y,t.positionZ.value=n.z,t.forwardX.value=-s[8],t.forwardY.value=-s[9],t.forwardZ.value=-s[10],t.upX.value=s[4],t.upY.value=s[5],t.upZ.value=s[6]):(t.setPosition(n.x,n.y,n.z),t.setOrientation(-s[8],-s[9],-s[10],s[4],s[5],s[6]))}}class Sg extends Mg{constructor(){super(),this.mixerOpen=!1}attach(){return Promise.resolve()}prepare(){}openMixer(){}closeMixer(){}setBirdActive(){}async start(e,t=[]){return super.start([...e,...t.map(n=>n.player)])}async toggle(e,t=[]){return super.toggle([...e,...t.map(n=>n.player)])}addTrace(e){return this.add(e)}removeTrace(e){this.remove(e)}moveTrace(e,t,n){this.moveTo(e,t,n)}muteTrace(e){this.mute(e)}diagnostics(){var e;return{provider:"Original procedural loops / Web Audio",playing:this.playing,context:(e=this.ctx)==null?void 0:e.state}}}function Sc(i,e=.18){return Math.abs(i)<e?0:Math.sign(i)*(Math.abs(i)-e)/(1-e)}function yg(i){const e=(i==null?void 0:i.axes)||[];return[Sc(e.length>=4?e[2]:e[0]||0),Sc(e.length>=4?e[3]:e[1]||0)]}function bg(i){return i&&["#d6f48a","#8dc8e8","#f4b879","#f2a4cc","#ffffff"].includes(i.color)&&Number.isFinite(i.width)&&i.width>=.005&&i.width<=.05&&Array.isArray(i.points)&&i.points.length>=2&&i.points.length<=256&&i.points.every(e=>Array.isArray(e)&&e.length===3&&e.every(t=>Number.isFinite(t)&&Math.abs(t)<=12))}function Eg(i,e,t=.018,n=256){if(i.length>=n)return!1;const s=i.at(-1);return s&&Math.hypot(...e.map((r,a)=>r-s[a]))<t?!1:(i.push([...e]),!0)}const cr=[{title:"1 / MOVE & LOOK",lines:["Look around by moving your head.","Left stick: walk forward, back, or sideways.","Right stick left / right: turn in 30° steps.","Left trigger: aim at floor, then release to teleport.","VIEW tab: Closer / Further moves you in / out."]},{title:"2 / OPEN THE MENU",lines:["Right A or click either stick: toggle menu.","Lost it? Point at MENU / SOUNDS, then trigger.","SOUND: volume & mute. VIEW: turn & menu size.","OBJECTS: add furniture. CONTROLS: this guide.","Close the menu before drawing or moving objects."]},{title:"3 / DRAW & PLACE OBJECTS",lines:["Right B cycles DRAW / TRACE / MOVE modes.","DRAW: hold right trigger; move hand to draw in air.","TRACE: hold right trigger; aim along the floor.","Grip + point at an object: hold to move; release.","Left X: undo ink. Left Y: change ink color."]},{title:"4 / SOUNDS & TRACES",lines:["SOUND tab: Mute / Play and − / + for each sound.","TRACES: Next trace chooses sound before drawing.","TRACES: saved trace Track arrows replace its sound.","Ink color changes only your drawing color.","MENU / SOUNDS stays centered below your view."]}],Vi=["#d6f48a","#8dc8e8","#f4b879","#f2a4cc","#ffffff"],ps=4096;class lu{constructor(e){var s;Object.assign(this,e),this.mode="draw",this.color=0,this.width=.012,this.strokes=[],this.selected=null,this.controls=[],this.menuPage=0,this.soundPage=0,this.tracePage=0,this.helpPage=0,this.panel=new URLSearchParams(((s=globalThis.location)==null?void 0:s.search)||"").has("controls")?"controls":"sound",this.snapReady=!0,this.rig=new at,this.scene.add(this.rig),this.ray=new tu,this.floor=new Fn(new P(0,1,0),0),this.worldHead=new Zt,this.position=new P,this.rotation=new bn,this.scale=new P,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),this.renderer.xr.setFramebufferScaleFactor(.85),this.menu=new at,this.scene.add(this.menu),this.menu.visible=!1,this.buttons=[],this.textures=[],this.buildMenu(),this.menuDock=new at,this.scene.add(this.menuDock),this.menuDock.visible=!1;const t=new De(new sn(.36,.09),new It({map:this.textTexture("MENU / SOUNDS","#466338","#e9eee5",.36,.09),side:Vt,depthTest:!1}));t.renderOrder=100,t.userData.action=()=>{this.panel="sound",this.buildMenu(),this.showMenu()},this.menuDock.add(t),this.dockButton=t,this.cursor=new De(new vt(.012,10,8),new It({color:"#ffffff",depthTest:!1})),this.cursor.renderOrder=101,this.scene.add(this.cursor),this.cursor.visible=!1,this.ink=new Yh(new kt(1,1,1,6),new It,ps),this.ink.instanceMatrix.setUsage(ah),this.ink.count=0,this.ink.frustumCulled=!1,this.scene.add(this.ink),this.tip=new De(new vt(.018,10,8),new It({color:Vi[0]})),this.tip.visible=!1,this.scene.add(this.tip),this.teleport=new De(new Wo(.18,.22,30),new It({color:"#8dc8e8",side:Vt})),this.teleport.rotation.x=-Math.PI/2,this.teleport.visible=!1,this.scene.add(this.teleport);for(let r=0;r<2;r++){const a=this.renderer.xr.getController(r);this.rig.add(a);const o=new De(new qt(.003,.003,1),new It({color:"#d6f48a"}));o.position.z=-.5,a.add(o);const l=this.renderer.xr.getControllerGrip(r);this.rig.add(l);const c=new De(new ko(.025,.09,3,8),new Jt({color:"#c9d5cf",roughness:.6}));c.rotation.x=Math.PI/3,l.add(c);const u={controller:a,grip:l,beam:o,source:null,trigger:!1,squeeze:!1,buttons:[],stroke:null,floorPoints:null,held:null,hover:null};this.controls.push(u),a.addEventListener("connected",d=>{u.source=d.data}),a.addEventListener("disconnected",()=>{this.finish(u),u.source=null,u.trigger=!1,u.squeeze=!1}),a.addEventListener("selectstart",()=>{u.trigger=!0,this.press(u)}),a.addEventListener("selectend",()=>{u.trigger=!1,this.finish(u)}),a.addEventListener("squeezestart",()=>{u.squeeze=!0,this.grab(u)}),a.addEventListener("squeezeend",()=>{u.squeeze=!1,u.held=null,this.saveLayout()})}try{const r=JSON.parse(localStorage.getItem("sound-room-xr-ink-v1"));if(Array.isArray(r)){let a=0;for(const o of r)!bg(o)||a+o.points.length>ps||(this.strokes.push(o),a+=o.points.length)}}catch{}this.rebuildInk(),this.renderer.xr.addEventListener("sessionstart",()=>this.begin()),this.renderer.xr.addEventListener("sessionend",()=>this.end());const n=document.getElementById("enter-vr");n.disabled=!0,navigator.xr&&isSecureContext?navigator.xr.isSessionSupported("immersive-vr").then(r=>{n.disabled=!r,n.textContent=r?"Enter VR · Quest":"VR unavailable on this browser"}).catch(()=>{n.textContent="VR unavailable"}):n.textContent="Open in Quest Browser for VR",n.onclick=()=>this.enter(n)}async enter(e){e.disabled=!0;try{const t=this.startAudio(),n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"],optionalFeatures:["bounded-floor"]});try{await t,await this.renderer.xr.setSession(n)}catch(s){throw await n.end(),s}}catch(t){this.toast(`Could not enter VR: ${t.message}`),console.error(t)}finally{e.disabled=!1}}begin(){var t;const e=this.soundChoices.findIndex(n=>{var s;return n.sound===((s=this.getNextTraceSound)==null?void 0:s.call(this))});e>=0&&(this.traceSound=e),this.buildMenu(),this.desktop={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),shadow:this.renderer.shadowMap.enabled},this.rig.position.set(this.camera.position.x,0,this.camera.position.z),this.rig.rotation.set(0,this.camera.rotation.y,0),this.rig.add(this.camera),this.camera.position.set(0,0,0),this.camera.quaternion.identity(),this.renderer.shadowMap.enabled=!1,this.renderer.xr.setFoveation(1),document.body.classList.add("in-xr"),document.getElementById("library").close(),document.getElementById("help-dialog").close(),(t=document.getElementById("eden-dialog"))==null||t.close(),this.keys.clear(),this.menuPending=!0,this.syncHead(),this.menuDock.visible=!0}end(){for(const e of this.controls)this.finish(e),e.held=null,e.trigger=!1,e.squeeze=!1,e.buttons=[];this.scene.add(this.camera),this.desktop&&(this.camera.position.copy(this.desktop.position),this.camera.quaternion.copy(this.desktop.quaternion),this.renderer.shadowMap.enabled=this.desktop.shadow),this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.menu.visible=!1,this.tip.visible=!1,this.teleport.visible=!1,this.menuDock.visible=!1,this.cursor.visible=!1,document.body.classList.remove("in-xr"),this.keys.clear()}syncHead(){return this.rig.updateMatrixWorld(!0),this.renderer.xr.updateCamera(this.camera),this.renderer.xr.getCamera().matrixWorld.decompose(this.position,this.rotation,this.scale),this.worldHead.position.copy(this.position),this.worldHead.quaternion.copy(this.rotation),this.worldHead.updateMatrixWorld(),this.worldHead}showMenu(){const e=this.syncHead(),t=new P(0,0,-1).applyQuaternion(e.quaternion);t.y=0,t.normalize(),this.menu.position.copy(e.position).addScaledVector(t,1.55),this.menu.position.y=Math.max(1.25,e.position.y),this.menu.rotation.set(0,Math.atan2(t.x,t.z)+Math.PI,0),this.menu.visible=!0,this.refreshMenu()}toggleMenu(){this.menu.visible?this.menu.visible=!1:this.showMenu()}textTexture(e,t="#1e3036",n="#e9eee5",s=2.15,r=.1){const a=document.createElement("canvas");a.width=Math.round(s*800),a.height=Math.round(r*800);const o=a.getContext("2d"),l=Math.min(38,Math.floor(a.height*.42)),c=l*1.15,u=10;o.fillStyle=t,o.fillRect(0,0,a.width,a.height),o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.font=`500 ${l}px system-ui, sans-serif`;const d=p=>{var m;return((m=o.measureText)==null?void 0:m.call(o,p).width)??p.length*l*.55},h=[];let g="";for(const p of e.split(" ")){const m=g?g+" "+p:p;g&&d(m)>a.width-u*2?(h.push(g),g=p):g=m}g&&h.push(g);const f=Math.max(1,Math.floor((a.height-8)/c));if(h.length>f){for(h.length=f;d(h[f-1]+"…")>a.width-u*2&&h[f-1].length;)h[f-1]=h[f-1].slice(0,-1);h[f-1]+="…"}h.forEach((p,m)=>o.fillText(p,a.width/2,a.height/2+(m-(h.length-1)/2)*c));const v=new Er(a);return v.colorSpace=Ut,v}label(e,t,n,s,r,a,o){const l=this.textTexture(e,o,"#e9eee5",s,r);this.textures.push(l);const c=new De(new sn(s,r),new It({map:l,side:Vt}));return c.position.set(t,n,.015),this.menu.add(c),c.userData.label=e,a&&(c.userData.action=a,this.buttons.push(c)),c}buildMenu(){var t,n,s,r,a,o;for(const l of[...this.menu.children])(t=l.geometry)==null||t.dispose(),(n=l.material)==null||n.dispose(),this.menu.remove(l);for(const l of this.textures)l.dispose();this.textures=[],this.buttons=[];const e=new De(new sn(2.3,2.25),new It({color:"#0d1b22",side:Vt}));if(this.menu.add(e),this.label("SOUND ROOM / QUEST",0,1,2.15,.12),this.statusLabel=this.label("",0,.85,2.15,.1),["sound","traces","view","objects","eden","controls"].forEach((l,c)=>this.label(l.toUpperCase(),(c-2.5)*.37,.67,.35,.14,()=>{this.panel=l,this.buildMenu()},l===this.panel?"#466338":"#1e3036")),this.panel==="eden"){const l=(s=this.getParadise)==null?void 0:s.call(this);l&&(l.active?["calm","wonder","freedom"].forEach((c,u)=>this.label(c,(u-1)*.74,.43,.69,.14,()=>{const d={calm:{energy:.2,nature:.6,dreaminess:.2},wonder:{energy:.45,nature:.95,dreaminess:.85},freedom:{energy:.8,nature:.45,dreaminess:.5}};l.set(d[c]),this.buildMenu()})):this.label("Open the bedroom door to explore Inner Eden",0,.43,2.15,.14,()=>l.open(!0)),["energy","nature","dreaminess"].forEach((c,u)=>{const d=.2-u*.24;this.label(c+" "+Math.round(l.eden.target[c]*100)+"%",0,d,1.2,.14),this.label("−",-.9,d,.35,.14,()=>{l.set({[c]:l.eden.target[c]-.1}),this.buildMenu()}),this.label("+",.9,d,.35,.14,()=>{l.set({[c]:l.eden.target[c]+.1}),this.buildMenu()})}),this.label(l.paused?"Resume":"Pause here",-.75,-.55,.69,.14,()=>{l.paused=!l.paused,this.keys.clear(),this.buildMenu()}),this.label("Save favorite",0,-.55,.69,.14,()=>l.favorite()),this.label("Bedroom",.75,-.55,.69,.14,()=>l.open(!1)))}else if(this.panel==="traces"){this.label("Next trace: "+this.soundChoices[this.traceSound].name,0,.44,2.15,.12),this.label("← Previous sound",-.57,.26,1.05,.13,()=>this.chooseNextTrace(-1)),this.label("Next sound →",.57,.26,1.05,.13,()=>this.chooseNextTrace(1));const l=((r=this.getTraces)==null?void 0:r.call(this))||[],c=Math.max(1,Math.ceil(l.length/2));this.tracePage%=c,l.slice(this.tracePage*2,this.tracePage*2+2).forEach((u,d)=>{var v;const h=.03-d*.31,g=this.tracePage*2+d+1,f=((v=this.soundChoices.find(p=>p.sound===u.sound))==null?void 0:v.name)||u.sound;this.label(`Trace ${g}: ${f}`,0,h,2.15,.11),this.label("← Track",-.75,h-.14,.67,.12,()=>this.chooseTraceSound(u,-1)),this.label("Track →",0,h-.14,.67,.12,()=>this.chooseTraceSound(u,1)),this.label("Delete",.75,h-.14,.67,.12,()=>{var p;(p=this.removeTrace)==null||p.call(this,u),this.buildMenu()})}),l.length||this.label("No saved traces. Use TRACE mode, then draw on floor.",0,-.12,2.15,.18),this.label("More saved traces →",0,-.59,2.15,.13,()=>{this.tracePage=(this.tracePage+1)%c,this.buildMenu()})}else if(this.panel==="controls"){const l=cr[this.helpPage];this.label(l.title,0,.44,2.15,.13,void 0,"#304d35"),l.lines.forEach((c,u)=>this.label(c,0,.24-u*.16,2.15,.12)),this.label("← Previous",-.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+cr.length-1)%cr.length,this.buildMenu()}),this.label("Next →",.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+1)%cr.length,this.buildMenu()})}else if(this.panel==="sound"){const l=this.soundEntries(),c=Math.max(1,Math.ceil(l.length/4));if(this.soundPage%=c,l.slice(this.soundPage*4,this.soundPage*4+4).forEach((d,h)=>{var m;const g=.43-h*.25,f=d.outdoor?null:d.row.querySelector("input"),v=d.outdoor?Math.round(d.level*100):f?f.value:0;this.label(d.name+" "+v+"%",-.45,g,1.2,.18,()=>{this.selected=d,this.refreshMenu()});const p=d.muted??((m=d.player)==null?void 0:m.muted);this.label(p?"Play":"Mute",.36,g,.34,.18,()=>{var M;d.outdoor?this.getParadise().ambience.toggleChannel(d.id):(M=d.row.querySelector(".mute,.trace-mute"))==null||M.click(),this.buildMenu()}),this.label("−",.68,g,.23,.18,()=>{this.volumeItem(d,-10),this.buildMenu()}),this.label("+",.96,g,.23,.18,()=>{this.volumeItem(d,10),this.buildMenu()})}),l.length||this.label("Add a sound object in OBJECTS",0,.3,2.1,.15),(o=(a=this.getParadise)==null?void 0:a.call(this))==null?void 0:o.active){this.label("More sounds",-.75,-.59,.68,.14,()=>{this.soundPage=(this.soundPage+1)%c,this.buildMenu()}),this.label("Reset mix",0,-.59,.68,.14,()=>{this.getParadise().ambience.resetMix(),this.buildMenu()});const d=l.every(h=>h.muted);this.label(d?"Unmute all":"Mute all",.75,-.59,.68,.14,()=>{this.getParadise().ambience.muteAll(!d),this.buildMenu()})}else this.label("More sounds →",-.57,-.59,1.05,.14,()=>{this.soundPage=(this.soundPage+1)%c,this.buildMenu()}),this.label(this.engine.playing?"Pause all":"Play all",.57,-.59,1.05,.14,()=>{var d;(d=this.toggleAudio)==null||d.call(this)})}else this.panel==="view"?(this.label("Turn left",-.57,.43,1.05,.17,()=>{this.turn(Math.PI/6),this.showMenu()}),this.label("Turn right",.57,.43,1.05,.17,()=>{this.turn(-Math.PI/6),this.showMenu()}),this.label("Closer / zoom in",-.57,.19,1.05,.17,()=>{this.dolly(.6),this.showMenu()}),this.label("Further / zoom out",.57,.19,1.05,.17,()=>{this.dolly(-.6),this.showMenu()}),this.label("Smaller menu",-.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(.85).clampScalar(.5,1.4),this.showMenu()}),this.label("Larger menu",.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(1.15).clampScalar(.5,1.4),this.showMenu()}),this.label("Recenter view & menu",0,-.29,2.15,.17,()=>this.showMenu()),this.label("Undo ink",-.57,-.52,1.05,.14,()=>this.undo()),this.label("Clear ink",.57,-.52,1.05,.14,()=>{for(const l of this.controls)l.stroke&&this.finish(l);this.clearBackup=this.strokes.slice(),this.strokes=[],this.rebuildInk(),this.saveInk()})):(this.catalog.slice(this.menuPage*6,this.menuPage*6+6).forEach((c,u)=>this.label("+ "+c.name,(u%2-.5)*1.12,.43-Math.floor(u/2)*.17,1.05,.14,()=>{const d=this.syncHead(),h=new P(0,0,-1).applyQuaternion(d.quaternion);h.y=0,h.normalize();const g=d.position.clone().addScaledVector(h,2.8),f=this.addObject(c.type,{x:g.x,z:g.z});f&&(this.selected=f),this.refreshMenu()})),this.label("More objects →",0,-.1,2.15,.13,()=>{this.menuPage=(this.menuPage+1)%Math.ceil(this.catalog.length/6),this.buildMenu()}),this.label("Rotate",-.57,-.3,1.05,.14,()=>{var c,u,d;return(d=(u=(c=this.selected)==null?void 0:c.row)==null?void 0:u.querySelector(".rotate"))==null?void 0:d.click()}),this.label("Remove",.57,-.3,1.05,.14,()=>{this.selected&&!this.selected.player&&!this.selected.outdoor&&(this.removeObject(this.selected),this.selected=null,this.refreshMenu())}),this.label("Studio / Cathedral",0,-.5,2.15,.14,()=>{this.setPreset(this.engine.preset==="studio"?"cathedral":"studio"),this.refreshMenu()}));this.label("Mode: "+this.mode.toUpperCase(),-.75,-.78,.68,.14,()=>this.cycleMode(),"#466338"),this.label("Ink color",0,-.78,.68,.14,()=>{this.color=(this.color+1)%Vi.length,this.tip.material.color.set(Vi[this.color]),this.refreshMenu()}),this.label("Close",.75,-.78,.68,.14,()=>{this.menu.visible=!1}),this.label("Sticks work with menu open · A / stick click: menu",0,-.96,2.15,.08),this.label("B: mode · X: undo · L trigger: teleport · Grip: move",0,-1.07,2.15,.08),this.refreshMenu()}soundEntries(){var t,n,s;const e=(t=this.getParadise)==null?void 0:t.call(this);return e!=null&&e.active?e.ambience.channels().map(r=>({...r,name:r.label,outdoor:!0})):[...(((n=this.getSources)==null?void 0:n.call(this))||[]).filter(r=>r.sound),...(((s=this.getTraces)==null?void 0:s.call(this))||[]).map(r=>{var a;return{...r,name:(((a=this.soundChoices.find(o=>o.sound===r.sound))==null?void 0:a.name)||r.sound)+" trace"}})]}chooseNextTrace(e){var t;this.traceSound=(this.traceSound+e+this.soundChoices.length)%this.soundChoices.length,(t=this.setNextTraceSound)==null||t.call(this,this.soundChoices[this.traceSound].sound),this.buildMenu()}chooseTraceSound(e,t){var r;const n=this.soundChoices.findIndex(a=>a.sound===e.sound),s=this.soundChoices[(n+t+this.soundChoices.length)%this.soundChoices.length].sound;(r=this.changeTraceSound)==null||r.call(this,e,s),this.buildMenu()}cycleMode(){this.mode=this.mode==="draw"?"trace":this.mode==="trace"?"move":"draw",this.buildMenu()}volumeItem(e,t){if(e.outdoor){this.getParadise().ambience.setChannel(e.id,e.level+t/100);return}const n=e.row.querySelector("input");n&&(n.value=Math.max(0,Math.min(100,Number(n.value)+t)),n.dispatchEvent(new Event("input")))}turn(e){const t=this.syncHead().position.clone(),n=new bn().setFromAxisAngle(new P(0,1,0),e);this.rig.position.sub(t).applyQuaternion(n).add(t),this.rig.quaternion.premultiply(n)}dolly(e){const t=this.syncHead(),n=new P(0,0,-1).applyQuaternion(t.quaternion);n.y=0,n.normalize(),this.rig.position.addScaledVector(n,e),this.clampPosition()}clampPosition(){var s;const e=this.syncHead(),t=(s=this.getParadise)==null?void 0:s.call(this),n=t?t.clamp(e.position.x,e.position.z):{x:Mt.clamp(e.position.x,-5.35,5.35),z:Mt.clamp(e.position.z,-5.35,5.35)};this.rig.position.x+=n.x-e.position.x,this.rig.position.z+=n.z-e.position.z,t&&(this.rig.position.y=t.height(n.x,n.z))}hitUI(e){var n;this.controllerRay(e);const t=this.menu.visible?[...this.buttons]:[];this.menuDock.visible&&t.push(this.dockButton);for(const s of((n=this.getPortalTargets)==null?void 0:n.call(this))||[])s&&t.push(s);return this.menu.updateWorldMatrix(!0,!0),this.menuDock.updateWorldMatrix(!0,!0),this.ray.intersectObjects(t)[0]}refreshMenu(){var r,a;if(!this.statusLabel)return;const e=`${this.mode.toUpperCase()} | ${((r=this.selected)==null?void 0:r.name)||"No object selected"} | ${this.engine.preset} | trace: ${((a=this.soundChoices[this.traceSound])==null?void 0:a.name)||"Bird"}`,t=this.statusLabel.material.map,n=this.textTexture(e,"#243e43");this.statusLabel.material.map=n;const s=this.textures.indexOf(t);s>=0&&(this.textures[s]=n),t.dispose()}volume(e){if(!this.selected)return;const t=this.selected.row.querySelector("input");t&&(t.value=Number(t.value)+e,t.dispatchEvent(new Event("input")),this.refreshMenu())}controllerRay(e){e.controller.updateWorldMatrix(!0,!1);const t=new P().setFromMatrixPosition(e.controller.matrixWorld),n=new P(0,0,-1).transformDirection(e.controller.matrixWorld);return this.ray.set(t,n),this.ray}floorPoint(e){var s;const t=new P;if(!this.controllerRay(e).ray.intersectPlane(this.floor,t)||this.ray.ray.origin.distanceTo(t)>30)return null;const n=(s=this.getParadise)==null?void 0:s.call(this);if(n!=null&&n.active){const r=n.clamp(t.x,t.z);return Math.hypot(r.x-t.x,r.z-t.z)<.2?t:null}return Math.abs(t.x)<5.7&&Math.abs(t.z)<5.7?t:null}press(e){var n,s,r,a,o;const t=this.hitUI(e);if(t){t.object.userData.portal?t.object.userData.portal():(s=(n=t.object.userData).action)==null||s.call(n);return}if(!this.menu.visible){if(((r=e.source)==null?void 0:r.handedness)==="left"){e.teleporting=!0;return}if((o=(a=this.getParadise)==null?void 0:a.call(this))!=null&&o.active){this.panel="eden",this.buildMenu(),this.showMenu();return}if(this.mode==="move"){this.grab(e);return}if(this.mode==="trace"){e.floorPoints=[];return}this.inkPointCount>=ps||(e.stroke={color:Vi[this.color],width:this.width,points:[]},this.strokes.push(e.stroke))}}grab(e){var n,s;if(this.menu.visible||(s=(n=this.getParadise)==null?void 0:n.call(this))!=null&&s.active)return;this.controllerRay(e);const t=this.ray.intersectObjects(this.pickables).find(r=>{var a;return!((a=r.object.userData.source)!=null&&a.removed)});t&&(e.held=t.object.userData.source,this.selected=e.held,this.refreshMenu())}finish(e){var t,n,s;if(e.teleporting){if(!((n=(t=this.getParadise)==null?void 0:t.call(this))!=null&&n.paused)){const r=this.floorPoint(e);if(r){const a=this.syncHead();this.rig.position.x+=r.x-a.position.x,this.rig.position.z+=r.z-a.position.z}}e.teleporting=!1}((s=e.floorPoints)==null?void 0:s.length)>=2&&this.addFloorTrace(this.soundChoices[this.traceSound].sound,e.floorPoints),e.floorPoints=null,e.stroke&&(e.stroke.points.length<2&&(this.strokes=this.strokes.filter(r=>r!==e.stroke)),e.stroke=null,this.rebuildInk(),this.saveInk()),e.held&&!e.squeeze&&(e.held=null,this.saveLayout())}undo(){for(const e of this.controls)e.stroke&&this.finish(e);this.strokes.length?this.strokes.pop():this.clearBackup&&(this.strokes=this.clearBackup,this.clearBackup=null),this.rebuildInk(),this.saveInk()}saveInk(){try{localStorage.setItem("sound-room-xr-ink-v1",JSON.stringify(this.strokes.filter(e=>e.points.length>=2)))}catch{this.toast("Drawing storage is full.")}}rebuildInk(){let e=0;this.inkPointCount=0;const t=new P(0,1,0),n=new tt,s=new bn;for(const r of this.strokes){this.inkPointCount+=r.points.length;for(let a=1;a<r.points.length&&e<ps;a++){const o=new P(...r.points[a-1]),l=new P(...r.points[a]),c=l.clone().sub(o),u=c.length();u<.001||(s.setFromUnitVectors(t,c.divideScalar(u)),n.compose(o.add(l).multiplyScalar(.5),s,new P(r.width,u,r.width)),this.ink.setMatrixAt(e,n),this.ink.setColorAt(e,new Ne(r.color)),e++)}}this.ink.count=e,this.ink.instanceMatrix.needsUpdate=!0,this.ink.instanceColor&&(this.ink.instanceColor.needsUpdate=!0)}update(e){var a,o,l,c,u,d,h,g;if(!this.renderer.xr.isPresenting)return this.camera;const t=Array.from(((l=(o=(a=this.renderer.xr).getSession)==null?void 0:o.call(a))==null?void 0:l.inputSources)||[]);for(let f=0;f<this.controls.length;f++){const v=this.controls[f],p=t.find(m=>{var M;return m.handedness===((M=v.source)==null?void 0:M.handedness)})||t[f];p&&(v.source=p)}this.syncHead(),this.menuPending&&((c=this.renderer.xr.getFrame())!=null&&c.getViewerPose(this.renderer.xr.getReferenceSpace()))&&(this.menuPending=!1,this.showMenu());const n=new P(0,0,-1).applyQuaternion(this.worldHead.quaternion);n.y=0,n.normalize();let s=!1;this.teleport.visible=!1,this.tip.visible=!1;for(const f of this.controls){if(!f.source)continue;const v=f.source.gamepad,[p,m]=yg(v),M=f.source.handedness==="left";if(M&&!((d=(u=this.getParadise)==null?void 0:u.call(this))!=null&&d.paused)){const T=new P().crossVectors(n,new P(0,1,0));this.rig.position.addScaledVector(n,-m*e*1.6).addScaledVector(T,p*e*1.6)}M||(Math.abs(p)<.3&&(this.snapReady=!0),Math.abs(p)>.75&&this.snapReady&&(this.turn(-Math.sign(p)*Math.PI/6),this.snapReady=!1));const E=(v==null?void 0:v.buttons)||[];for(const[T,w]of[[3,()=>this.toggleMenu()],[4,M?()=>this.undo():()=>this.toggleMenu()],[5,M?()=>{this.color=(this.color+1)%Vi.length,this.tip.material.color.set(Vi[this.color])}:()=>this.cycleMode()]]){const C=!!((h=E[T])!=null&&h.pressed);C&&!f.buttons[T]&&w(),f.buttons[T]=C}f.hover&&f.hover.material.color.copy(f.hover.userData.baseTint||new Ne("#ffffff"));const y=this.hitUI(f);if(f.hover=(y==null?void 0:y.object)||null,f.hover&&((g=f.hover.userData).baseTint??(g.baseTint=f.hover.material.color.clone()),f.hover.material.color.set("#d6f48a")),f.beam.scale.z=y?y.distance:4,f.beam.position.z=-f.beam.scale.z/2,M||(this.cursor.visible=!0,this.cursor.position.copy(y?y.point:this.ray.ray.at(2,new P))),f.held&&(f.squeeze||f.trigger)&&!this.menu.visible){const T=this.floorPoint(f);T&&this.move(f.held,T.x,T.z)}if(f.teleporting){const T=this.floorPoint(f);T&&(this.teleport.visible=!0,this.teleport.position.set(T.x,.025,T.z))}if(f.floorPoints&&f.trigger){const T=this.floorPoint(f);if(T){const w=f.floorPoints.at(-1);(!w||Math.hypot(w[0]-T.x,w[1]-T.z)>.14)&&f.floorPoints.length<120&&f.floorPoints.push([T.x,T.z]),this.teleport.visible=!0,this.teleport.position.set(T.x,.03,T.z)}}if(!M&&!this.menu.visible&&this.mode==="draw"){f.grip.updateWorldMatrix(!0,!1);const T=new P(0,0,-.12).applyMatrix4(f.grip.matrixWorld);this.tip.visible=!0,this.tip.position.copy(T),f.stroke&&f.trigger&&this.inkPointCount<ps&&Math.abs(T.x)<5.8&&Math.abs(T.z)<5.8&&T.y>.05&&T.y<8&&Eg(f.stroke.points,T.toArray())&&(this.inkPointCount++,s=!0)}}this.clampPosition();const r=this.syncHead();return this.menuDock.position.set(0,-.24,-.75).applyQuaternion(r.quaternion).add(r.position),this.menuDock.quaternion.copy(r.quaternion),s&&this.rebuildInk(),this.syncHead()}}lu.prototype.traceSound=0;const cu={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Tg=new Set(Object.values(cu));function yc(i){var e;return Tg.has(i.code)?i.code:cu[(e=i.key)==null?void 0:e.toLowerCase()]||null}function Jo(i){var e;return!!i&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT","BUTTON"].includes(i.tagName)||!!((e=i.closest)!=null&&e.call(i,'[role="dialog"],dialog,[contenteditable="true"]')))}class wg{constructor(e,{now:t=()=>performance.now(),firstLease:n=800,repeatLease:s=180}={}){this.pressed=e,this.now=t,this.firstLease=n,this.repeatLease=s,this.deadlines=new Map}down(e,t=!0){var s;const n=yc(e);if(n){if(!t||e.ctrlKey||e.metaKey||e.altKey||Jo(e.target)){this.clear();return}e.repeat&&!this.pressed.has(n)||((s=e.preventDefault)==null||s.call(e),this.pressed.add(n),this.deadlines.set(n,this.now()+(e.repeat?this.repeatLease:this.firstLease)))}}up(e){const t=yc(e);t&&(this.pressed.delete(t),this.deadlines.delete(t))}clear(){this.pressed.clear(),this.deadlines.clear()}tick(e=!0){if(!e){this.clear();return}const t=this.now();for(const[n,s]of this.deadlines)(!this.pressed.has(n)||s<=t)&&(this.pressed.delete(n),this.deadlines.delete(n))}}function Ag(){const i=new at,e=new at;e.name="courtyard",i.add(e);const t=new Jt({color:"#77796b",roughness:.92}),n=new Jt({color:"#aaa58e",roughness:.78}),s=new Jt({color:"#344033",roughness:1}),r=new Jt({color:"#405940",roughness:.95}),a=new Jt({color:"#2c4435",roughness:.95}),o=new Jt({color:"#739b91",roughness:.22,metalness:.12,transparent:!0,opacity:.88}),l=new Jt({color:"#b28b4d",roughness:.38,metalness:.55}),c=new Jt({color:"#f5cb78",emissive:"#e49d42",emissiveIntensity:1.6,roughness:.3});i.add(new qo("#d3ded0","#202c20",1.35));const u=new $o("#c2d0c6",1.25);u.position.set(-5,10,4),i.add(u);const d=new De(new sn(14,24),t);d.rotation.x=-Math.PI/2,d.position.set(0,-.04,8),d.receiveShadow=!0,e.add(d);const h=new De(new Tr(1.05,32),s);h.rotation.x=-Math.PI/2,h.position.set(-1.55,-.015,1.6),e.add(h);function g(T,w){const C=new at;return C.name=T,C.userData.satieId=T,C.position.set(...w),e.add(C),C}function f(T,w,C,x=[0,0,0]){const b=new De(w,C);return b.position.set(...x),b.castShadow=!0,b.receiveShadow=!0,T.add(b),b}function v(T,w){const C=new De(new qt(...w),n);C.position.set(...T),C.castShadow=!0,C.receiveShadow=!0,e.add(C)}const p=g("central_fountain",[0,0,6]);f(p,new kt(.9,1,.18,40),n,[0,.24,0]),f(p,new kt(.72,.78,.12,40),t,[0,.39,0]),f(p,new kt(.66,.66,.025,40),o,[0,.46,0]),f(p,new kt(.12,.2,.45,16),n,[0,.66,0]),f(p,new vt(.12,16,12),o,[0,.93,0]);function m(T,w){const C=g(T,w);f(C,new kt(.055,.08,.8,10),l,[0,.4,0]),f(C,new kt(.17,.17,.07,12),l,[0,.83,0]),f(C,new qt(.22,.27,.22),c,[0,1.02,0]),f(C,new Mi(.18,.12,12),l,[0,1.22,0]);const x=new Ar("#f0b968",1.2,5,1.8);x.position.set(0,1,0),C.add(x)}m("left_lantern",[-2.598076211353316,0,1.5000000000000004]),m("right_lantern",[2.598076211353316,0,1.5000000000000004]);const M=g("entrance_hedge",[-1.55,0,1.6]);f(M,new qt(.7,.8,3),r,[0,.4,0]);for(let T=0;T<7;T+=1){const w=(T%2===0?-1:1)*.22,C=-1.2+T*.4;f(M,new vt(.32,12,8),a,[w,.58,C])}const E=g("back_hedge",[0,0,11]);f(E,new qt(8,.8,.7),r,[0,.4,0]);for(let T=0;T<14;T+=1){const w=-3.4+T*.52;f(E,new vt(.43,12,8),a,[w,.58,0])}const y=g("outer_shrub",[3.742410434719668,0,17.606656813208502]);f(y,new kt(.12,.2,1.2,9),n,[0,.6,0]);for(const[T,w,C,x]of[[-.45,1.1,0,.72],[.35,1.35,.18,.8],[0,1.75,-.18,.72],[.48,.95,-.32,.58]])f(y,new vt(x,14,10),r,[T,w,C]);return v([-5,.28,6],[.5,.56,12]),v([5,.28,6],[.5,.56,12]),v([0,.28,12],[10.5,.56,.5]),{root:i,hosts:e}}const xr={calm:{energy:.2,nature:.6,dreaminess:.2},wonder:{energy:.45,nature:.95,dreaminess:.85},freedom:{energy:.8,nature:.45,dreaminess:.5}},Cg={energy:.68,nature:.9,dreaminess:.42};function Rg(i="",e=""){const t=(i+" "+e).toLowerCase(),n={.../adventur|free|energet|explor/.test(t)?xr.freedom:/wonder|curious|inspir|magic/.test(t)?xr.wonder:xr.calm};return/garden|forest|grove|lush/.test(t)&&(n.nature=.95),/beach|shore|ocean/.test(t)&&(n.nature=.25),/glow|float|imaginar|dream|surreal/.test(t)&&(n.dreaminess=.9),n}function Pg(i,e){const t=i/13,n=(e-10)/18,s=Math.hypot(t,n);return s>1?{x:i/s,z:10+(e-10)/s}:{x:i,z:e}}function Dg(i,e){const t=Math.hypot(i+8,e-21);return Math.max(0,1-t/4.2)*1.5}function Lg(i,e){const t=new at;t.name="Inner Eden - shore grove overlook",e.add(t);const n=(N,R={})=>new Jt({color:N,roughness:.85,...R}),s=n("#e7cb92"),r=n("#82b66a"),a=n("#9b7652"),o=n("#50a876");function l(N,R,I,O,V,B=t){const z=new De(N,R);return z.position.set(I,O,V),B.add(z),z}l(new kt(1,1.04,.7,64),s,0,-.4,10).scale.set(14,1,19);const u=n("#57bbcb",{roughness:.3,metalness:.12}),d=l(new sn(180,180,36,36),u,0,-.47,9);d.rotation.x=-Math.PI/2;const h=l(new Tr(5.5,48),r,4,-.015,16);h.rotation.x=-Math.PI/2,l(new Mi(4.2,1.5,48),r,-8,.7,21);const g=l(new sn(.8,9),n("#7cd5ce",{roughness:.2}),4,.025,14);g.rotation.x=-Math.PI/2,g.rotation.z=.25;const f=[];for(let N=0;N<28;N++){const R=N*2.39996,I=2.1+N%6*.65,O=4+Math.cos(R)*I,V=16+Math.sin(R)*I,B=new at;B.position.set(O,0,V),t.add(B),l(new kt(.07,.15,2.5,7),a,0,1.25,0,B),l(new vt(.9,10,8),o,0,2.5,0,B).scale.set(1,1.3,1),f.push(B)}for(const[N,R]of[[-10,1],[-9,8],[-11,12]]){const I=l(new kt(.1,.2,3.4,8),a,N,1.7,R);I.rotation.z=.16;for(let O=0;O<6;O++){const V=l(new vt(1,8,6),o,N+Math.cos(O)*.6,3.4,R+Math.sin(O)*.6);V.scale.set(.35,.1,1.5),V.rotation.y=O}}const v=n("#d9a680");l(new vt(1,16,8),v,-9,.7,5).scale.set(1.7,.12,.55);for(const N of[-10.7,-7.3])l(new kt(.07,.07,1.7,8),a,N,.85,5);const m=n("#b5f0c9",{emissive:"#66f4c0",emissiveIntensity:.4});for(let N=0;N<30;N++){const R=N*2.4,I=1+N%8*.45,O=l(new vt(.08,6,5),m,4+Math.cos(R)*I,.3+N%4*.13,16+Math.sin(R)*I);O.name="Glowing grove blossom"}const M=new Float32Array(540);for(let N=0;N<M.length;N+=3)M[N]=Math.sin(N*7.3)*11,M[N+1]=.6+N%17*.22,M[N+2]=2+N%29*.75;const E=new St;E.setAttribute("position",new an(M,3));const y=new $c(E,new zo({color:"#fff4b4",size:.045,transparent:!0,opacity:.6,depthWrite:!1}));t.add(y),l(new vt(6,20,12),new It({color:"#ffe5b1"}),-48,20,-65);const T=new qo("#fff2d3","#a7bb91",2.4);t.add(T);const w=new $o("#ffedcb",2.1);w.position.set(-10,15,3),t.add(w);function C(N,R,I,O){const V=document.createElement("canvas");V.width=768,V.height=128;const B=V.getContext("2d");B.fillStyle="#214b44",B.fillRect(0,0,768,128),B.fillStyle="#f4f2dd",B.font="36px system-ui",B.textAlign="center",B.fillText(N,384,78);const z=new Er(V);z.colorSpace=Ut;const k=l(new sn(2.4,.4),new It({map:z,side:Vt}),R,I,O);k.rotation.y=Math.PI}C("THE SHORE - rest & spaciousness",-9,1.6,2),C("THE GROVE - curiosity & wonder",4,1.6,11.5),C("THE OVERLOOK - freedom & possibility",-8,2.4,18);let x={...Cg},b={...x};return{root:t,target:b,set(N){for(const R of["energy","nature","dreaminess"])Number.isFinite(N[R])&&(b[R]=Mt.clamp(N[R],0,1))},update(N,R){for(const z of Object.keys(x))x[z]=Mt.lerp(x[z],b[z],1-Math.exp(-N*1.8));const{energy:I,nature:O,dreaminess:V}=x;i.background=new Ne("#c0e5e9").lerp(new Ne("#b6a5dc"),V*.5),i.fog&&(i.fog.color.copy(i.background),i.fog.density=.006),T.intensity=2.1+I*.6,w.intensity=1.8+I*.5,o.color.set("#59aa74").lerp(new Ne("#7dcbac"),V*.4),r.color.set("#91b66f"),m.emissiveIntensity=.25+V*2,m.color.set("#a1dbaa").lerp(new Ne("#b7bcff"),V);for(let z=0;z<f.length;z++)f[z].visible=z<8+Math.floor(O*20),f[z].rotation.z=Math.sin(R*(.3+I)+z)*(.008+I*.02);y.material.opacity=.12+V*.65,y.rotation.y=R*(.005+I*.008),u.color.set("#62c8cd").lerp(new Ne("#83aed1"),V*.4);const B=d.geometry.attributes.position;for(let z=0;z<B.count;z++){const k=B.getX(z),Q=B.getY(z);B.setZ(z,Math.sin(k*.22+R*(.4+I))*Math.cos(Q*.19+R*.3)*(.025+I*.1))}B.needsUpdate=!0},get settings(){return x}}}const Ig=[{id:"shore",label:"Ocean waves",x:-9,y:1,z:5,frequency:320,type:"lowpass"},{id:"stream",label:"Grove stream",x:4,y:.4,z:15,frequency:1500,type:"lowpass"},{id:"wind",label:"Overlook wind",x:-8,y:1,z:21,frequency:650,type:"lowpass"},{id:"fountain",label:"Fountain water and splashes",x:0,y:.85,z:6,frequency:1100,type:"bandpass"},{id:"entrance-leaves",label:"Entrance hedge rustling",x:-1.55,y:.8,z:1.6,frequency:2400,type:"bandpass"},{id:"back-leaves",label:"Back hedge rustling",x:0,y:.8,z:11,frequency:1900,type:"bandpass"},{id:"grove-leaves",label:"Grove canopy rustling",x:4,y:2.5,z:17,frequency:2800,type:"bandpass"}],ms=[{id:"fountain",label:"Fountain & splashes",level:.65},{id:"birds",label:"Garden birds",level:.8},{id:"entrance-leaves",label:"Entrance leaves",level:.6},{id:"back-leaves",label:"Back hedge",level:.55},{id:"grove-leaves",label:"Tree canopy",level:.65},{id:"stream",label:"Grove stream",level:.6},{id:"shore",label:"Ocean waves",level:.5},{id:"wind",label:"Soft breeze",level:.3},{id:"chimes",label:"Gentle chimes",level:.45},{id:"insects",label:"Meadow crickets",level:.3}];class Ug{constructor(){this.ctx=null,this.nodes=[],this.active=!1,this.volume=1,this.buses=new Map,this.observers=new Set,this.mix=new Map(ms.map(e=>[e.id,{level:e.level,muted:!1}]));try{const e=JSON.parse(localStorage.getItem("inner-eden-mix-v1"));for(const t of ms){const n=e==null?void 0:e[t.id];n&&Number.isFinite(n.level)&&typeof n.muted=="boolean"&&this.mix.set(t.id,{level:Mt.clamp(n.level,0,1),muted:n.muted})}}catch{}}channels(){return ms.map(e=>({...e,...this.mix.get(e.id)}))}channelGain(e){const t=this.mix.get(e);return t&&!t.muted?t.level*2:0}setChannel(e,t){const n=this.mix.get(e);!n||!Number.isFinite(t)||(n.level=Mt.clamp(t,0,1),this.changed())}toggleChannel(e){const t=this.mix.get(e);t&&(t.muted=!t.muted,this.changed())}muteAll(e=!0){for(const t of this.mix.values())t.muted=e;this.changed()}resetMix(){this.mix=new Map(ms.map(e=>[e.id,{level:e.level,muted:!1}])),this.changed()}subscribe(e){return this.observers.add(e),()=>this.observers.delete(e)}changed(){try{localStorage.setItem("inner-eden-mix-v1",JSON.stringify(Object.fromEntries(this.mix)))}catch{}this.applyMix();for(const e of this.observers)e()}applyMix(){if(this.ctx)for(const[e,t]of this.buses)t.gain.setTargetAtTime(this.channelGain(e),this.ctx.currentTime,.06)}setMasterVolume(e){Number.isFinite(e)&&(this.volume=Mt.clamp(e,0,2))}async start(){if(this.ctx){await this.ctx.resume();return}const e=this.ctx=new AudioContext;await e.resume(),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);for(const r of ms){const a=e.createGain();a.gain.value=this.channelGain(r.id),a.connect(this.master),this.buses.set(r.id,a)}const t=e.createBuffer(1,e.sampleRate*8,e.sampleRate),n=t.getChannelData(0);let s=81;for(let r=0;r<n.length;r++){s=s*1664525+1013904223>>>0;const a=Math.min(1,r/(e.sampleRate*.01),(n.length-r-1)/(e.sampleRate*.01));n[r]=(s/4294967296*2-1)*a}for(const[r,a]of Ig.entries()){const{x:o,y:l,z:c,frequency:u,type:d}=a,h=e.createBufferSource(),g=e.createBiquadFilter(),f=e.createGain(),v=e.createPanner();h.buffer=t,h.loop=!0,g.type=d,g.frequency.value=u,g.Q.value=.6,f.gain.value=0,v.panningModel="HRTF",v.distanceModel="inverse",v.refDistance=a.id==="fountain"?2:3,v.maxDistance=60,v.rolloffFactor=1,v.positionX.value=o,v.positionY.value=l,v.positionZ.value=c,h.connect(g).connect(f).connect(v).connect(this.buses.get(a.id)),h.start(0,r*.73%8),this.nodes.push({...a,source:h,gain:f,filter:g,pan:v})}}update(e,t,n){if(!this.ctx||!this.master)return;const s=this.ctx,r=this.active?1:0;if(this.master.gain.setTargetAtTime(r*this.volume,s.currentTime,.2),this.nodes.forEach(d=>{let h;if(d.id==="shore")h=.075+.025*Math.sin(n*.45);else if(d.id==="stream")h=.045+t.nature*.045;else if(d.id==="wind")h=.025+t.energy*.055;else if(d.id==="fountain")h=(.1+t.energy*.035)*(.8+.12*Math.sin(n*3.7)+.08*Math.sin(n*8.3));else{const g=d.x+d.z,f=.45+.2*Math.sin(n*(.7+t.energy)+g)+.15*Math.sin(n*4.7+g);h=(.025+t.nature*.04+t.energy*.04)*f}d.gain.gain.setTargetAtTime(r*h,s.currentTime,.2)}),this.active&&s.currentTime>=(this.nextDrop||0)&&(this.tone(650+(Math.sin(n*13)*.5+.5)*800,Math.sin(n*7)*.35,6+Math.cos(n*5)*.3,.013+t.energy*.008,"drop"),this.nextDrop=s.currentTime+.18+(1-t.energy)*.25),this.active&&s.currentTime>=(this.nextBird||0)&&(this.tone(1800+t.energy*900,4,17,.012+t.energy*.012,!0),this.nextBird=s.currentTime+2+(1-t.energy)*5),this.active&&t.dreaminess>.3&&s.currentTime>=(this.nextChime||0)){const d=[261.63,329.63,392,523.25,659.25];this.tone(d[Math.floor(n/5)%d.length],-8,21,.014,!1),this.nextChime=s.currentTime+5}this.active&&t.nature>.35&&s.currentTime>=(this.nextInsect||0)&&(this.tone(3400+Math.sin(n)*250,5,14,.006,"insect"),this.nextInsect=s.currentTime+1.8+(1-t.energy)*2);const a=new P,o=new bn;e.getWorldPosition(a),e.getWorldQuaternion(o);const l=new P(0,0,-1).applyQuaternion(o),c=new P(0,1,0).applyQuaternion(o),u=s.listener;u.positionX&&(u.positionX.value=a.x,u.positionY.value=a.y,u.positionZ.value=a.z,u.forwardX.value=l.x,u.forwardY.value=l.y,u.forwardZ.value=l.z,u.upX.value=c.x,u.upY.value=c.y,u.upZ.value=c.z)}tone(e,t,n,s,r){const a=this.ctx,o=a.createOscillator(),l=a.createGain(),c=a.createPanner(),u=a.currentTime,d=r==="drop"?.18:r==="insect"?.4:r?.25:2;o.type="sine",o.frequency.setValueAtTime(e,u),r&&o.frequency.exponentialRampToValueAtTime(e*(r==="drop"?.48:1.5),u+d*.7),l.gain.setValueAtTime(1e-4,u),l.gain.exponentialRampToValueAtTime(s,u+.012),l.gain.exponentialRampToValueAtTime(1e-4,u+d),c.panningModel="HRTF",c.refDistance=3,c.positionX.value=t,c.positionY.value=r==="drop"?.8:2,c.positionZ.value=n;const h=r==="drop"?"fountain":r==="insect"?"insects":r?"birds":"chimes";o.connect(l).connect(c).connect(this.buses.get(h)||this.master),o.start(),o.stop(u+d),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}}function Ng(i,{x:e=0,z:t=-2,title:n="Return to bedroom",onOpen:s=()=>{}}={}){const r=new at;r.position.set(e,0,t),i.add(r);const a=new Jt({color:"#b09266"}),o=new at;o.position.x=-.65,r.add(o);const l=new De(new qt(1.3,2.5,.12),a);l.position.set(.65,1.25,0),o.add(l);const c=new De(new qt(1.6,.16,.2),a);c.position.set(0,2.63,0),r.add(c);for(const v of[-.74,.74]){const p=new De(new qt(.12,2.65,.2),a);p.position.set(v,1.3,0),r.add(p)}const u=document.createElement("canvas");u.width=640,u.height=128;const d=u.getContext("2d");d.fillStyle="#244a43",d.fillRect(0,0,640,128),d.fillStyle="#fff3d5",d.textAlign="center",d.font="30px system-ui",d.fillText(n,320,76);const h=new Er(u);h.colorSpace=Ut;const g=new De(new sn(1.65,.33),new It({map:h,side:Vt}));g.position.set(0,2.95,.05),r.add(g);let f=!1;return l.userData.portal=()=>{f||(f=!0),s()},{group:r,leaf:o,hit:l,get opened(){return f},reset(){f=!1,o.rotation.y=0},update(v){o.rotation.y=Mt.lerp(o.rotation.y,f?-Math.PI*.48:0,1-Math.exp(-v*6))},open(){l.userData.portal()}}}function Fg(i,e){i.replaceChildren();const t=document.createElement("h2");t.textContent="Outdoor sound mixer",i.append(t);const n=document.createElement("p");n.textContent="Birds and rustling leaves lead the mix; water, a soft breeze and gentle chimes fill the background. Each control affects only its named source.",i.append(n);const s=new Map;for(const o of e.channels()){const l=document.createElement("div");l.className="outdoor-mix-row";const c=document.createElement("label");c.textContent=o.label;const u=document.createElement("input");u.type="range",u.min="0",u.max="100",u.value=String(Math.round(o.level*100)),u.setAttribute("aria-label",o.label+" volume"),c.append(u);const d=document.createElement("output");d.textContent=u.value+"%";const h=document.createElement("button");h.type="button",h.setAttribute("aria-label","Mute "+o.label),u.oninput=()=>e.setChannel(o.id,Number(u.value)/100),h.onclick=()=>e.toggleChannel(o.id),l.append(c,d,h),i.append(l),s.set(o.id,{input:u,output:d,mute:h})}const r=document.createElement("div");r.className="outdoor-mix-tools";for(const[o,l]of[["Mute all",()=>e.muteAll(!0)],["Unmute all",()=>e.muteAll(!1)],["Reset lively mix",()=>e.resetMix()]]){const c=document.createElement("button");c.type="button",c.textContent=o,c.onclick=l,r.append(c)}i.append(r);function a(){for(const o of e.channels()){const l=s.get(o.id);l.input.value=String(Math.round(o.level*100)),l.output.textContent=l.input.value+"%",l.mute.textContent=o.muted?"Unmute":"Mute",l.mute.setAttribute("aria-pressed",String(o.muted)),l.mute.setAttribute("aria-label",(o.muted?"Unmute ":"Mute ")+o.label)}}return a(),e.subscribe(a)}class Og{constructor({scene:e,camera:t,door:n,engine:s,sources:r,toast:a,keys:o}){var m;Object.assign(this,{scene:e,camera:t,engine:s,sources:r,toast:a,keys:o}),this.active=!1,this.paused=!1,this.travel=null,this.indoorSaved=new Map;const l=[...e.children];this.indoor=new at,this.indoor.name="Original bedroom",e.add(this.indoor);for(const M of l)M!==t&&this.indoor.attach(M);this.indoorStyle={background:e.background.clone(),fog:(m=e.fog)==null?void 0:m.clone()};const c=Ag();this.outdoor=c.root,this.outdoor.visible=!1,e.add(this.outdoor),this.eden=Lg(e,c.hosts),this.ambience=new Ug;const u=[...n.children];n.updateWorldMatrix(!0,!0),this.hinge=new at,this.hinge.position.x=-.65,n.add(this.hinge);for(const M of[0,5,6,7,8,12,13])u[M]&&this.hinge.attach(u[M]);this.indoorHit=u[0],this.indoorHit.userData.portal=()=>this.open(!0),this.returnDoor=Ng(c.hosts,{x:0,z:-2,title:"Open door - return to bedroom",onOpen:()=>this.open(!1)});const d=document.createElement("canvas");d.width=768,d.height=128;const h=d.getContext("2d");h.fillStyle="#244b43",h.fillRect(0,0,768,128),h.fillStyle="#fff7df",h.font="34px system-ui",h.textAlign="center",h.fillText("INNER EDEN - open door",384,80);const g=new Er(d);g.colorSpace=Ut;const f=new De(new sn(1.7,.28),new It({map:g,side:Vt}));f.position.set(0,2.95,.12),n.add(f);const v=document.getElementById("eden-status");this.status=v;const p=document.getElementById("outdoor-mixer");p!=null&&p.replaceChildren&&Fg(p,this.ambience),document.getElementById("eden-mix-toggle").onclick=()=>{p.hidden=!p.hidden,this.keys.clear()};for(const M of document.querySelectorAll("[data-eden-preset]"))M.onclick=()=>this.set(xr[M.dataset.edenPreset]);for(const M of["energy","nature","dreaminess"])document.getElementById("eden-"+M).oninput=E=>this.set({[M]:Number(E.target.value)/100});document.getElementById("eden-personalize").onclick=()=>{this.set(Rg(document.getElementById("eden-feeling").value,document.getElementById("eden-place").value)),this.toast("Your words selected an existing paradise setting.")},document.getElementById("eden-save").onclick=()=>this.favorite(),document.getElementById("eden-load").onclick=()=>this.loadFavorite(),document.getElementById("eden-enter").onclick=()=>{document.getElementById("eden-dialog").close(),this.open(!0)},document.getElementById("eden-close").onclick=()=>document.getElementById("eden-dialog").close(),document.getElementById("eden-setup").onclick=()=>{this.keys.clear(),document.getElementById("eden-dialog").showModal()},document.getElementById("eden-back").onclick=()=>this.open(!1),this.sync()}registerIndoor(e){this.indoor.attach(e)}get hits(){return this.active?[this.returnDoor.hit]:[this.indoorHit]}get bounds(){return this.active?{outdoor:!0}:null}set(e){this.eden.set(e),this.sync()}sync(){for(const e of["energy","nature","dreaminess"])document.getElementById("eden-"+e).value=Math.round(this.eden.target[e]*100)}favorite(){const e=document.getElementById("eden-name").value.trim()||"My paradise";localStorage.setItem("sound-room-eden-favorite",JSON.stringify({name:e,settings:this.eden.target})),this.toast("Saved "+e)}loadFavorite(){try{const e=JSON.parse(localStorage.getItem("sound-room-eden-favorite"));e!=null&&e.settings&&(this.set(e.settings),document.getElementById("eden-name").value=e.name||"My paradise",this.toast("Favorite restored."))}catch{this.toast("No saved favorite yet.")}}open(e){this.travel||this.active===e||(this.keys.clear(),this.travel={outdoor:e,time:0},this.ambience.start().catch(console.error),this.toast(e?"Door opening to Inner Eden…":"Door opening to the bedroom…"))}update(e,t,n,s){var r;if(this.returnDoor.update(e),this.travel&&(this.travel.time+=e,this.travel.outdoor&&(this.hinge.rotation.y=Mt.lerp(this.hinge.rotation.y,-Math.PI*.48,1-Math.exp(-e*6))),this.travel.time>.7)){const a=this.travel.outdoor;this.travel=null,this.active=a,this.indoor.visible=!a,this.outdoor.visible=a,this.paused=!1,this.ambience.active=a,a&&this.returnDoor.reset();const o=a?new P(0,0,0):new P(-3.85,0,-4.2);if(n.renderer.xr.isPresenting){const l=n.syncHead();n.rig.position.x+=o.x-l.position.x,n.rig.position.z+=o.z-l.position.z,n.rig.position.y=0,n.rig.rotation.y=Math.PI,n.menu.visible=!1}else this.camera.position.set(o.x,1.7,o.z),this.camera.rotation.set(-.04,Math.PI,0);this.engine.master&&this.engine.ctx&&this.engine.master.gain.setTargetAtTime(a?0:.65,this.engine.ctx.currentTime,.4),a||(this.scene.background=this.indoorStyle.background.clone(),this.scene.fog=(r=this.indoorStyle.fog)==null?void 0:r.clone(),this.hinge.rotation.y=0),document.body.classList.toggle("in-eden",a),this.keys.clear(),n.buildMenu(),this.toast(a?"Inner Eden: shore, grove and overlook. Open EDEN controls.":"Welcome back to the bedroom.")}this.active&&(this.eden.update(e,t),this.status.textContent=this.paused?"Paused here — enjoy your favorite spot.":"Explore the shore, grove and overlook."),this.ambience.update(s,this.eden.settings,t)}clamp(e,t){return this.active?Pg(e,t):{x:Mt.clamp(e,-5.35,5.35),z:Mt.clamp(t,-5.35,5.35)}}height(e,t){return this.active?Dg(e,t):0}}const Qi=[{type:"bed",name:"Bed",desc:"Soft duvet & pillows · quiet",category:"Furniture",color:"#a8c9ac",radius:1.6,height:1.5},{type:"books",name:"Books",desc:"Gentle pages turning",category:"Everyday",sound:"books",volume:.3,color:"#e7be8e",radius:.65,height:1.2},{type:"shelf",name:"Bookshelf",desc:"A little library · quiet",category:"Furniture",color:"#c49c78",radius:1,height:2.4},{type:"lamp",name:"Bedside lamp",desc:"A warm pool of light · quiet",category:"Furniture",color:"#ffe2a3",radius:.65,height:1.9},{type:"rug",name:"Rug",desc:"Make a cozy corner · quiet",category:"Furniture",color:"#b4a7cc",radius:1.5,height:.3},{type:"plant",name:"Houseplant",desc:"A little green · quiet",category:"Furniture",color:"#9ec998",radius:.6,height:1.6},{type:"fan",name:"Desk fan",desc:"A steady, gentle whirr",category:"Sounds",sound:"fan",volume:.22,color:"#9bcbd3",radius:.7,height:1.9},{type:"clock",name:"Alarm clock",desc:"A soft tick, not an alarm",category:"Sounds",sound:"clock",volume:.28,color:"#f2bf81",radius:.65,height:1.5},{type:"bird",name:"Birds at the window",desc:"One to three birds fly closer and farther",category:"Sounds",sound:"bird",volume:.35,color:"#efd887",radius:.8,height:2.5},{type:"tv",name:"Television",desc:"A quiet electronic hum",category:"Sounds",sound:"tv",volume:.2,color:"#a6b9e5",radius:1,height:1.9},{type:"record",name:"Record player",desc:"Soft vinyl groove & crackle",category:"Sounds",sound:"record",volume:.4,color:"#e6b9ad",radius:.8,height:1.6},{type:"rain",name:"Rain window",desc:"Rain against the glass",category:"Sounds",sound:"rain",volume:.25,color:"#8dc8e8",radius:1,height:2.55},{type:"piano",name:"Piano",desc:"Warm lo-fi keys · 80 BPM",category:"Music",sound:"piano",volume:.6,color:"#d6f48a",radius:1.05,height:1.9},{type:"strings",name:"Ambient strings",desc:"Slow viola drone & bowed bass",category:"Music",sound:"strings",volume:.3,color:"#cda77e",radius:1,height:2.2},{type:"drums",name:"Drummer",desc:"Instrument display · quiet",category:"Music",color:"#f4b879",radius:1.05,height:1.9}],uu=[{type:"bed",x:2.7,z:-1.2},{type:"lamp",x:4.3,z:-2.6},{type:"books",x:.1,z:-.7},{type:"shelf",x:-4.2,z:-3.9},{type:"rug",x:0,z:1.5},{type:"fan",x:-2.6,z:-.7},{type:"clock",x:4.3,z:.1},{type:"bird",x:0,z:-5.15},{type:"strings",x:-1.8,z:2.4}];function Bg(i,e,t){const{box:n,cylinder:s,mat:r,wood:a,dark:o,ivory:l,metal:c}=t,u=r(i.color),d=r("#e9e1ce"),h=()=>{n(e,.85,.11,.65,0,.72,0,a);for(const f of[-.34,.34])for(const v of[-.23,.23])n(e,.055,.68,.055,f,.34,v,a)},g=(f,v,p,m,M)=>{const E=new De(new vt(f,20,16),M);return E.position.set(v,p,m),E.castShadow=!0,e.add(E),E};if(i.type==="bed"){n(e,2.05,.22,3.1,0,.32,0,a);for(const f of[-.82,.82])for(const v of[-1.25,1.25])n(e,.14,.3,.14,f,.15,v,a);n(e,2.08,1.12,.14,0,.75,-1.5,a),n(e,1.96,.32,2.9,0,.59,0,d),n(e,1.99,.12,2.03,0,.8,.43,u),n(e,1.99,.06,.28,0,.87,-.44,d);for(const f of[-.49,.49])n(e,.79,.16,.49,f,.83,-1.02,l);n(e,2.01,.48,.045,0,.54,1.46,u);for(const f of[-.99,.99])n(e,.045,.4,1.98,f,.58,.43,u)}else if(i.type==="books"){h();for(let f=0;f<3;f++){const v=r(["#9c6652","#8faaa0","#bfaa7e"][f]),p=new at;p.position.set(0,.81+f*.13,0),p.rotation.y=f*.18,e.add(p),n(p,.55,.085,.36,0,0,0,d);for(const m of[-.05,.05])n(p,.58,.02,.39,0,m,0,v);n(p,.025,.11,.39,-.28,0,0,v)}}else if(i.type==="shelf"){for(const f of[-.72,.72])n(e,.09,2,.45,f,1,0,a);n(e,1.5,2,.06,0,1,-.22,a);for(let f=0;f<4;f++){const v=.1+f*.58;n(e,1.5,.07,.48,0,v,0,a);for(let p=0;p<9;p++){const m=.26+p%3*.06;n(e,.1,m,.26,-.59+p*.145,v+.04+m/2,0,r(["#b87760","#8cafa1","#bbab78","#8d98b3"][p%4]))}}}else if(i.type==="lamp"){h(),s(e,.19,.22,.04,0,.81,0,c),s(e,.025,.025,.5,0,1.08,0,c),s(e,.18,.34,.38,0,1.4,0,u);const f=new Ar("#ffd691",2.4,3.5);f.position.set(0,1.25,0),e.add(f)}else if(i.type==="rug"){n(e,2.8,.025,2.15,0,.025,0,u);for(const f of[-1.28,1.28])n(e,.04,.005,1.95,f,.042,0,d);for(const f of[-.96,.96])n(e,2.6,.005,.04,0,.042,f,d)}else if(i.type==="plant"){s(e,.24,.17,.42,0,.22,0,r("#ba8264")),s(e,.025,.025,.78,0,.78,0,a);for(let f=0;f<7;f++){const v=f*2.4,p=g(.2,Math.cos(v)*.2,.65+f*.08,Math.sin(v)*.2,u);p.scale.set(.55,1.2,.7),p.rotation.z=Math.sin(v)*.9}}else if(i.type==="fan"){h(),s(e,.19,.24,.045,0,.81,0,c),n(e,.055,.43,.055,0,1.03,0,c);const f=new De(new Is(.34,.025,8,40),c);f.position.set(0,1.4,0),e.add(f);const v=i.spinner=new at;v.position.set(0,1.4,0),e.add(v);for(let p=0;p<3;p++){const m=n(v,.13,.4,.025,0,0,0,u);m.position.set(Math.sin(p*2.094)*.12,Math.cos(p*2.094)*.12,0),m.rotation.z=-p*2.094}g(.06,0,1.4,.04,c);for(let p=0;p<8;p++){const m=p*Math.PI/4,M=n(e,.009,.66,.012,0,1.4,.07,c);M.rotation.z=m}}else if(i.type==="clock"){h();const f=s(e,.26,.26,.12,0,1.06,0,u);f.rotation.x=Math.PI/2;const v=s(e,.225,.225,.012,0,1.06,.07,l);v.rotation.x=Math.PI/2,n(e,.018,.16,.018,0,1.12,.09,o);const p=n(e,.14,.018,.018,.06,1.06,.09,o);p.rotation.z=-.4;for(const m of[-.19,.19])g(.09,m,1.31,0,u)}else if(i.type==="bird"){for(const f of[-1.25,1.25])n(e,.1,2.45,.1,f,2,-.68,a);for(const f of[.78,3.22])n(e,2.6,.1,.1,0,f,-.68,a);n(e,2.55,.045,.4,0,.75,-.49,l),n(e,.045,2.4,.06,0,2,-.62,l),n(e,2.5,.04,.06,0,2,-.62,l),i.birds=[];for(let f=0;f<3;f++){const v=new at;e.add(v);const p=r(["#efd887","#b9d3bc","#e7b698"][f]),m=new De(new vt(.12,16,12),p);m.scale.set(1,1,1.45),v.add(m);const M=new De(new vt(.075,12,10),p);M.position.set(0,.08,.1),v.add(M);const E=new De(new Mi(.035,.095,6),r("#da9462"));E.rotation.x=Math.PI/2,E.position.set(0,.07,.2),v.add(E);const y=new at,T=new at;v.add(y,T);for(const[w,C]of[[y,-1],[T,1]]){w.position.x=C*.08;const x=new De(new Mi(.07,.28,5),p);x.rotation.z=C*Math.PI/2,x.position.x=C*.14,w.add(x)}i.birds.push({group:v,wing:y,otherWing:T,active:f===0}),v.visible=f===0}}else if(i.type==="strings"){const f=r("#9a6340",.42),v=r("#bd8656",.4),p=r("#2d2826");for(const[m,M,E,y,T]of[[-.31,.58,.58,f,!1],[.34,.13,1.08,v,!0]]){const w=new at;w.position.set(m,M,0),w.scale.setScalar(E),e.add(w);const C=new De(new vt(.27,20,16),y);C.scale.set(.78,1.3,.4),C.position.y=.76,w.add(C),n(w,.11,.9,.1,0,1.49,0,y),n(w,.065,1.12,.025,0,1.37,.075,p);for(const x of[-1,1])n(w,.035,.13,.07,x*.11,1.87,.04,p);T&&n(w,.025,.45,.025,0,.15,0,c);for(const x of[-1,1])n(w,.025,.32,.02,x*.1,.81,.12,p)}for(const m of[-.47,-.15])n(e,.025,.55,.025,m,.31,0,c);n(e,.37,.025,.17,-.31,.55,0,c),n(e,.92,.07,.46,0,.08,0,a)}else if(i.type==="tv")n(e,1.55,.5,.5,0,.3,0,a),n(e,1.42,.83,.11,0,1.04,0,o),n(e,1.3,.71,.015,0,1.04,.065,new Jt({color:"#7c9bb0",emissive:"#466f85",emissiveIntensity:.35})),n(e,.1,.24,.12,0,.57,0,c);else if(i.type==="record")h(),n(e,.74,.1,.54,0,.85,0,u),s(e,.22,.22,.02,-.08,.92,0,o),s(e,.065,.065,.025,-.08,.94,0,d),n(e,.025,.025,.32,.24,.95,0,c);else return!1;return!0}function Pr(i){let e=0;for(let t=1;t<i.length;t++)e+=Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]);return e}const bc={books:{dash:"7 4",effect:"page",pace:.18,count:5,description:"floating page flecks"},fan:{dash:"2 4",effect:"spin",pace:.42,count:5,description:"spinning air rings"},clock:{dash:"1 5",effect:"tick",pace:.25,count:7,description:"rhythmic light ticks"},bird:{dash:"3 7",effect:"flutter",pace:.34,count:6,description:"fluttering motes"},tv:{dash:"4 2",effect:"flicker",pace:.55,count:6,description:"flickering pixels"},record:{dash:"10 4",effect:"ring",pace:.27,count:4,description:"spinning vinyl rings"},rain:{dash:"1 4",effect:"drop",pace:.45,count:8,description:"falling droplets"},piano:{dash:"6 3",effect:"key",pace:.28,count:6,description:"pulsing keys"},strings:{dash:"12 5",effect:"wave",pace:.14,count:7,description:"slow glowing waves"}};function Ko(i){return bc[i]??bc.strings}function zg(i,e){if(!i.length)return null;if(i.length===1)return{x:i[0][0],z:i[0][1],angle:0};const t=Pr(i);if(t===0)return{x:i[0][0],z:i[0][1],angle:0};let n=(e%1+1)%1*t;for(let s=1;s<i.length;s++){const[r,a]=i[s-1],[o,l]=i[s],c=Math.hypot(o-r,l-a);if(n<=c||s===i.length-1){const u=c?n/c:0;return{x:r+(o-r)*u,z:a+(l-a)*u,angle:Math.atan2(l-a,o-r)}}n-=c}}function kg(i,e,t){if(!i.length)return null;let n={x:i[0][0],z:i[0][1],distance:1/0};for(let s=1;s<i.length;s++){const[r,a]=i[s-1],[o,l]=i[s],c=o-r,u=l-a,d=c*c+u*u,h=d?Math.max(0,Math.min(1,((e-r)*c+(t-a)*u)/d)):0,g=r+c*h,f=a+u*h,v=Math.hypot(e-g,t-f);v<n.distance&&(n={x:g,z:f,distance:v})}return i.length===1&&(n.distance=Math.hypot(e-n.x,t-n.z)),n}const ne=i=>document.querySelector(i),Ie=new Sg,Ft=[],Yt=[],Kt=new Set;let Vg=1,Zo=1,Et=null;const Dt=new kh;Dt.background=new Ne("#172329");Dt.fog=new Fo("#172329",.045);const Je=new Zt(62,innerWidth/innerHeight,.08,65);Je.rotation.order="YXZ";const gt=new vg({antialias:!0});gt.setSize(innerWidth,innerHeight);gt.setPixelRatio(Math.min(devicePixelRatio,2));gt.shadowMap.enabled=!0;gt.shadowMap.type=wc;gt.outputColorSpace=Ut;gt.toneMapping=bo;gt.toneMappingExposure=1.25;ne("#world").append(gt.domElement);ne("#enter").disabled=!0;ne("#enter").textContent="Loading room audio…";ne("#open-satie-mixer").disabled=!0;Ie.attach({scene:Dt,camera:Je,renderer:gt}).then(()=>{Ie.prepare(Ft),ne("#enter").disabled=!1,ne("#enter").innerHTML="Enter the room <span>↗</span>",ne("#open-satie-mixer").disabled=!1}).catch(i=>{console.error(i),ne("#enter").textContent="Audio failed to load",ne("#status").textContent="AUDIO UNAVAILABLE"});Ie.onMixerOpenChange=i=>{document.body.classList.toggle("satie-mixing",i),ne("#open-satie-mixer").textContent=i?"Use room mix":"Use SATIE mixer",ne("#open-satie-mixer").setAttribute("aria-pressed",String(i)),i&&(Kt.clear(),yi(!1),ne("#library").open&&ne("#library").close(),ne("#help-dialog").open&&ne("#help-dialog").close());for(const e of Ft)e.ring&&(e.ring.visible=!i)};ne("#open-satie-mixer").onclick=()=>Ie.mixerOpen?Ie.closeMixer():Ie.openMixer();ne("#open-satie-mixer").hidden=!0;Dt.add(new qo("#c4dbe1","#28302c",2));const ri=new $o("#ffe2bd",3);ri.position.set(-3,7,4);ri.castShadow=!0;ri.shadow.mapSize.set(2048,2048);ri.shadow.camera.left=-8;ri.shadow.camera.right=8;ri.shadow.camera.top=8;ri.shadow.camera.bottom=-8;Dt.add(ri);const ht=(i,e=.7,t=0)=>new Jt({color:i,roughness:e,metalness:t}),Ms=ht("#4c4137"),Qn=ht("#182225"),gs=ht("#9aa7a4",.25,.7),ur=ht("#e7e1c9"),Dr=ht("#c8a66c",.3,.55);function We(i,e,t,n,s,r,a,o){const l=new De(new qt(e,t,n),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function xn(i,e,t,n,s,r,a,o){const l=new De(new kt(e,t,n,40),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}const $t=new at;Dt.add($t);We(Dt,12,.15,12,0,-.1,0,ht("#394444"));for(let i=-6;i<=6;i+=.6)We(Dt,.012,.005,12,i,.002,0,ht("#6a7267"));const Lr=ht("#354247");We($t,1.55,4,.18,-5.225,2,-6,Lr);We($t,1.95,4,.18,-2.275,2,-6,Lr);We($t,1.2,1.4,.18,-3.85,3.3,-6,Lr);We($t,4.7,4,.18,3.65,2,-6,Lr);We($t,2.6,.8,.18,0,.4,-6,ht("#354247"));We($t,2.6,.85,.18,0,3.575,-6,ht("#354247"));We($t,.18,4,12,-6,2,0,ht("#303a3e"));We($t,.18,4,12,6,2,0,ht("#354247"));for(let i=-5;i<=5;i+=2)if(!(Math.abs(i)<1.5||i===-3)){We($t,.5,2.5,.16,i,2,-5.85,Qn);for(let e=0;e<5;e++)We($t,.035,2.4,.09,i-.18+e*.09,2,-5.72,Ms)}const on=new at;on.position.set(-3.85,0,-5.89);$t.add(on);const Gg=ht("#866a50"),Hg=ht("#705841"),jo=ht("#c8bda4");We(on,1.22,2.52,.09,0,1.27,.015,Gg);for(const i of[-.66,.66])We(on,.12,2.65,.16,i,1.33,.1,jo);We(on,1.45,.15,.17,0,2.65,.1,jo);We(on,1.36,.055,.24,0,.045,.15,ht("#6c6557"));for(const i of[.73,1.86])We(on,.91,.89,.035,0,i,.082,jo),We(on,.79,.77,.025,0,i,.107,Hg);for(const i of[.36,1.45,2.22])We(on,.045,.12,.025,-.59,i,.11,Dr);We(on,.13,.28,.025,.44,1.04,.09,Dr);const hu=new De(new vt(.07,16,12),Dr);hu.position.set(.44,1.04,.18);on.add(hu);We($t,1.4,.015,.47,-3.85,.012,-5.45,ht("#5b5147"));for(let i of[-5.7,5.7])We($t,.045,.035,10,i,.12,0,ht("#b6ca96"));const es=new at;es.visible=!1;Dt.add(es);for(let i of[-1,1])for(let e=-5;e<=5;e+=2.5)xn(es,.26,.35,9,i*5.6,4.5,e,ht("#637274")),We(es,.8,.2,.8,i*5.6,.1,e,ht("#71807e"));for(let i=-5;i<=5;i+=2.5){const t=new Vo(0,6,5.6,3.8,0,Math.PI,!1,0).getPoints(50).map(s=>new P(s.x,s.y,i)),n=new De(new wr(new Ho(t),50,.08,8,!1),ht("#84908a"));es.add(n)}const du=new Ar("#b8d5eb",18,20);du.position.set(0,6,-3);Dt.add(du);const Xi=[];function Wg(i){const e=i.group=new at;e.position.set(i.x,0,i.z),e.rotation.y=i.rotation||0,Dt.add(e),Et==null||Et.registerIndoor(e);const t=ht(i.color),n=new De(new Is(i.radius,.012,8,80),new It({color:i.color}));if(n.rotation.x=Math.PI/2,n.position.y=.09,n.visible=!Ie.mixerOpen,e.add(n),i.ring=n,!Bg(i,e,{box:We,cylinder:xn,mat:ht,wood:Ms,dark:Qn,ivory:ur,metal:gs}))if(i.type==="piano"){We(e,1.7,.52,.75,0,1.05,0,Qn),We(e,1.76,.08,.85,0,1.35,0,Ms);for(let u=0;u<21;u++)We(e,.068,.05,.32,-.74+u*.074,.96,.48,ur);for(let u=0;u<20;u++)[2,6].includes(u%7)||We(e,.043,.05,.2,-.7+u*.074,1,.4,Qn);for(let u of[-.68,.68])for(let d of[-.22,.22])We(e,.07,.8,.07,u,.43,d,Qn);We(e,.65,.1,.32,0,.52,.95,Ms);for(let u of[-.25,.25])We(e,.06,.5,.25,u,.25,.95,Qn)}else if(i.type==="drums"){const u=xn(e,.42,.42,.5,0,.47,.25,t);u.rotation.x=Math.PI/2;const d=xn(e,.39,.39,.02,0,.47,.51,ur);d.rotation.x=Math.PI/2;for(let g of[-.46,.43])xn(e,.25,.25,.3,g,.9,-.05,t),xn(e,.25,.25,.02,g,1.06,-.05,ur);for(let g of[-.8,.8])xn(e,.025,.025,1.2,g,.6,-.35,gs),xn(e,.38,.38,.025,g,1.2,-.35,Dr);xn(e,.26,.26,.08,0,.5,-.65,Qn),xn(e,.04,.04,.45,0,.25,-.65,gs);const h=new De(new vt(.15,20,20),ht("#c4ab91"));h.position.set(0,1.55,-.65),e.add(h),We(e,.34,.45,.22,0,1.18,-.65,ht("#667f80"));for(let g of[-.2,.2]){const f=We(e,.025,.025,.55,g,1.2,-.24,Ms);f.rotation.x=-.2}}else{We(e,1.4,2.2,.08,0,1.2,0,Qn),We(e,1.2,1.95,.05,0,1.2,.06,new Jt({color:"#659aa9",transparent:!0,opacity:.38,metalness:.5,roughness:.1})),We(e,.04,2.1,.09,0,1.2,.1,gs),We(e,1.35,.04,.09,0,1.2,.1,gs);const u=[];for(let h=0;h<75;h++)u.push((Math.random()-.5)*1.15,Math.random()*1.9+.23,.13);const d=new St;d.setAttribute("position",new Ke(u,3)),i.drops=new $c(d,new zo({color:i.color,size:.024})),e.add(i.drops)}const s=new Ar(i.color,2,4);s.position.y=1.8,e.add(s),e.traverse(u=>{u.isMesh&&(u.userData.source=i,Xi.push(u))});const r=document.createElement("div");r.className="source-label",r.style.setProperty("--c",i.color),r.textContent=i.name.toUpperCase()+" ↔",ne("#source-labels").append(r),i.label=r;const a=document.createElement("div");a.className="track",a.style.setProperty("--c",i.color),a.innerHTML=`<div class="track-top"><span class="swatch"></span><div class="track-title">${i.name}<small>${i.desc}</small></div>${i.sound?`<button class="mute" aria-pressed="${!!i.muted}" aria-label="${i.muted?"Unmute":"Mute"} ${i.name}">${i.muted?"Unmute":"Mute"}</button>`:'<span class="quiet-badge">Quiet</span>'}<button class="remove-object" aria-label="Remove ${i.name}">×</button></div><div class="track-bottom"><div class="arrows">${[["←",-.5,0],["↑",0,-.5],["↓",0,.5],["→",.5,0]].map(([u,d,h])=>`<button aria-label="Move ${i.name} ${u}" data-x="${d}" data-z="${h}">${u}</button>`).join("")}</div><div class="meter">${[6,12,8,15,10,5,11,7].map(u=>`<i style="--h:${u}px"></i>`).join("")}</div></div>`,i.sound&&(a.querySelector(".mute").onclick=u=>{i.muted=!i.muted,Ie.mute(i),u.target.textContent=i.muted?"Unmute":"Mute",u.target.setAttribute("aria-pressed",i.muted),u.target.setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${i.name}`),a.querySelector(".meter").style.opacity=i.muted?.15:1,Vn()}),a.querySelectorAll("[data-x]").forEach(u=>u.onclick=()=>Ir(i,i.x+Number(u.dataset.x),i.z+Number(u.dataset.z)));const o=document.createElement("div");o.className="object-tools",o.innerHTML=`<button class="rotate" aria-label="Rotate ${i.name}">↻ Rotate</button>${i.sound?`<label>Volume <input aria-label="${i.name} volume" type="range" min="0" max="100" value="${Math.round(i.volume*100)}"></label>`:""}`,o.querySelector(".rotate").onclick=()=>{i.rotation=(i.rotation||0)+Math.PI/4,i.group.rotation.y=i.rotation,Vn()};const l=o.querySelector("input");l&&(l.oninput=()=>{i.volume=Number(l.value)/100,Ie.mute(i),Vn()}),a.append(o),a.querySelector(".remove-object").onclick=()=>sl(i),ne("#tracks").append(a),i.row=a;const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("r",7),c.setAttribute("fill",i.color),c.dataset.id=i.id,c.innerHTML=`<title>${i.name}: drag to move</title>`,ne("#map-dots").append(c),i.dot=c}function Ir(i,e,t){i.x=Mt.clamp(e,-6+i.radius,6-i.radius),i.z=Mt.clamp(t,-6+i.radius,6-i.radius),i.group.position.set(i.x,0,i.z),Ie.move(i),Vn()}let Qo,Ec;function ft(i){ne("#toast").textContent=i,ne("#toast").classList.add("show"),clearTimeout(Ec),Ec=setTimeout(()=>ne("#toast").classList.remove("show"),3500)}function Ds(i){Ie.setPreset(i);for(const e of["studio","cathedral"])ne("#"+e).classList.toggle("active",e===i),ne("#"+e).setAttribute("aria-pressed",e===i);es.visible=i==="cathedral",$t.scale.y=i==="cathedral"?2.5:1,ne("#acoustic-note").textContent=i==="cathedral"?"Long reflections · 5.5 s tail":"Short reflections · 0.35 s tail",Dt.fog.density=i==="cathedral"?.028:.045}for(const i of["studio","cathedral"])ne("#"+i).onclick=()=>{clearTimeout(Qo),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after",Ds(i),ft(i==="studio"?"Small studio · intimate & dry":"Large cathedral · same performance, different space")};async function el(){try{await Ie.start(Ft,Yt),ne("#welcome").classList.add("hidden"),fu()}catch(i){ft("Audio could not start. Please retry."),console.error(i)}}function fu(){ne("#sound").textContent=Ie.playing?"Ⅱ Pause listening":"▶ Start listening",ne("#status").textContent=Ie.playing?"LIVE / SPATIAL AUDIO":"PAUSED"}ne("#enter").onclick=el;ne("#sound").onclick=async()=>{try{await Ie.toggle(Ft,Yt),fu()}catch(i){ft("Unable to start audio. Please retry."),console.error(i)}};ne("#compare").onclick=async()=>{!Ie.playing&&(await el(),!Ie.playing)||(Ds("studio"),ft("Before: small studio. Listen to the dry notes…"),ne("#compare").disabled=!0,ne("#compare").textContent="Listening to the studio…",Qo=setTimeout(()=>{Ds("cathedral"),ft("After: large cathedral. Same loops, longer reflections."),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after"},4500))};function pu(){Je.position.set(0,1.7,5),Je.rotation.set(-.08,0,0)}pu();ne("#reset").onclick=()=>{clearTimeout(Qo),ne("#compare").disabled=!1,ne("#compare").textContent="↔ Hear the before / after";for(const i of[...Ft])sl(i,!1);for(const i of[...Yt])il(i,!1);yi(!1);for(const i of uu)Br(i.type,i,!1);Ds("studio"),pu(),Vn(),si(),ft("Bedroom restored. Add objects or draw traces to make it yours.")};ne("#help").onclick=()=>ne("#help-dialog").showModal();ne("#close-help").onclick=()=>ne("#help-dialog").close();const Ur=new wg(Kt),mu=()=>!gt.xr.isPresenting&&!(Et!=null&&Et.paused)&&!Ie.mixerOpen&&ne("#welcome").classList.contains("hidden")&&!ne("#eden-dialog").open&&!ne("#help-dialog").open&&!ne("#library").open&&document.visibilityState!=="hidden"&&document.hasFocus()&&!Jo(document.activeElement);addEventListener("keydown",i=>Ur.down(i,mu()),!0);addEventListener("keyup",i=>Ur.up(i),!0);const Us=()=>{Ur.clear(),ii=null,Nr=!1};addEventListener("blur",Us,!0);addEventListener("pagehide",Us,!0);document.addEventListener("visibilitychange",Us,!0);document.addEventListener("freeze",Us,!0);document.addEventListener("focusin",i=>{Jo(i.target)&&Us()},!0);const yr=new tu,Tc=new we,Xg=new Fn(new P(0,1,0),0),ya=new P;let ii=null,Nr=!1,xo=0,vo=0;function Mo(i){Tc.set(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1),yr.setFromCamera(Tc,Je)}gt.domElement.addEventListener("contextmenu",i=>i.preventDefault());gt.domElement.addEventListener("pointerdown",i=>{var n,s,r,a;if(Ie.mixerOpen||!ne("#welcome").classList.contains("hidden"))return;Mo(i);const e=yr.intersectObjects((Et==null?void 0:Et.hits)||[])[0];if(e){e.object.userData.portal();return}if(i.button===2){Nr=!0,xo=i.clientX,vo=i.clientY,gt.domElement.setPointerCapture(i.pointerId);return}if(document.pointerLockElement)return;Mo(i);const t=yr.intersectObjects(Xi);t.length?(ii=t[0].object.userData.source,gt.domElement.setPointerCapture(i.pointerId),ft(`Moving ${ii.name}. Drag across the floor.`)):(a=(r=(s=(n=gt.domElement).requestPointerLock)==null?void 0:s.call(n))==null?void 0:r.catch)==null||a.call(r,()=>ft("Hold right mouse and drag to look around."))});addEventListener("pointermove",i=>{Ie.mixerOpen||(document.pointerLockElement===gt.domElement?(Je.rotation.y-=i.movementX*.002,Je.rotation.x=Mt.clamp(Je.rotation.x-i.movementY*.002,-1.1,1.1)):Nr?(Je.rotation.y-=(i.clientX-xo)*.004,Je.rotation.x=Mt.clamp(Je.rotation.x-(i.clientY-vo)*.004,-1.1,1.1),xo=i.clientX,vo=i.clientY):ii&&(Mo(i),yr.ray.intersectPlane(Xg,ya)&&Ir(ii,ya.x,ya.z)))});addEventListener("pointerup",()=>{ii=null,Nr=!1});document.addEventListener("pointerlockchange",()=>{document.body.classList.toggle("locked",document.pointerLockElement===gt.domElement),Kt.clear()});const kn=Qi.filter(i=>i.sound);for(const i of kn){const e=document.createElement("option");e.value=i.sound,e.textContent=i.name,ne("#trace-sound").append(e)}ne("#trace-sound").value="bird";let qi=!1,Mn=null,ct=null,Si=null;const xi=ne("#map");function Fr(i){const e=xi.getBoundingClientRect();return[Mt.clamp(((i.clientX-e.left)/e.width*200-100)/15,-5.8,5.8),Mt.clamp(((i.clientY-e.top)/e.height*200-100)/15,-5.8,5.8)]}function gu(i){const[e,t]=Fr(i);Ir(Si,e,t)}function Ls(i){var e;return((e=kn.find(t=>t.sound===i))==null?void 0:e.color)||"#d6f48a"}function _u(i){const e=new It({color:Ls(i.sound),transparent:!0,opacity:.76});i.group=new at,Dt.add(i.group),i.line=new De(new St,e),i.group.add(i.line),i.ends=[0,1].map(()=>{const t=new De(new vt(.075,10,8),e);return i.group.add(t),t}),i.mapPath=document.createElementNS("http://www.w3.org/2000/svg","polyline");for(const[t,n]of Object.entries({fill:"none",stroke:Ls(i.sound),"stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","pointer-events":"none"}))i.mapPath.setAttribute(t,n);ne("#map-traces").append(i.mapPath),xu(i),Or(i)}function xu(i){const e=i.style=Ko(i.sound),t=Ls(i.sound);i.line.material.color.set(t),i.mapPath.setAttribute("stroke",t),i.mapPath.setAttribute("stroke-dasharray",e.dash),i.mapPath.classList.add("trace-map-line"),i.mapPath.style.animationDuration=`${12/e.pace}s`;for(const n of i.effects||[])i.group.remove(n),n.geometry.dispose(),n.material.dispose();if(i.effects=[],!i.isDraft)for(let n=0;n<e.count;n++){let s;["spin","ring"].includes(e.effect)?s=new Is(e.effect==="ring"?.11:.08,.012,5,16):e.effect==="flutter"?s=new Mi(.06,.14,3):["page","flicker","tick","key"].includes(e.effect)?s=new qt(e.effect==="page"?.13:.07,e.effect==="tick"?.16:.07,.045):s=new vt(e.effect==="drop"?.04:.055,8,6);const r=new It({color:t,transparent:!0,opacity:.85}),a=new De(s,r);i.group.add(a),i.effects.push(a)}}function Or(i){const e=i.points;i.mapPath.setAttribute("points",e.map(([t,n])=>`${100+t*15},${100+n*15}`).join(" ")),i.line.geometry.dispose(),i.line.visible=e.length>1,i.line.geometry=e.length>1?new wr(new Ho(e.map(([t,n])=>new P(t,.065,n))),Math.max(8,e.length*3),i.style.effect==="wave"?.04:.028,5,!1):new St;for(const[t,n]of[[0,e[0]],[1,e.at(-1)]])i.ends[t].position.set(n[0],.07,n[1])}function qg(i,e){const t=i.style;i.line.material.opacity=i.muted?.2:.62+.15*Math.sin(e*t.pace*2);for(let n=0;n<i.effects.length;n++){const s=i.effects[n],r=(n/t.count+e*t.pace/10)%1,a=zg(i.points,r),o=Math.sin(e*(t.effect==="tick"?8:2)+n*2.4);s.position.set(a.x,.12,a.z),s.rotation.set(0,-a.angle,0),s.scale.setScalar(1),s.visible=!i.muted,t.effect==="drop"?(s.position.y=.08+.28*(1-(e*.7+n/t.count)%1),s.scale.y=1.8):t.effect==="flutter"?(s.position.y=.17+.09*o,s.rotation.z=e*5+n):t.effect==="page"?(s.position.y=.13+.07*o,s.rotation.z=o*.55):t.effect==="flicker"?(s.visible=!i.muted&&o>-.3,s.rotation.y=e*3+n):t.effect==="tick"?s.visible=!i.muted&&o>.35:t.effect==="key"?(s.position.y=.12+.05*Math.max(0,o),s.scale.y=.6+.7*Math.max(0,o)):t.effect==="wave"?(s.position.y=.14+.12*Math.sin(e*1.3+n*.8),s.scale.setScalar(.8+.35*Math.sin(e+n))):(s.rotation.x=Math.PI/2,s.rotation.z=e*(t.effect==="spin"?4:1.5),s.scale.setScalar(.75+.28*o))}}function Yi(i){Dt.remove(i.group),i.group.traverse(e=>{var t,n,s;(t=e.geometry)==null||t.dispose(),(s=(n=e.material)==null?void 0:n.dispose)==null||s.call(n)}),i.mapPath.remove()}function tl(){ne("#trace-count").textContent=String(Yt.length).padStart(2,"0"),ne("#trace-empty").hidden=Yt.length>0,Yt.forEach((i,e)=>{i.row.querySelector(".trace-number").textContent=String(e+1).padStart(2,"0")})}function si(){try{localStorage.setItem("sound-room-pages-traces-v1",JSON.stringify(Yt.map(i=>({sound:i.sound,points:i.points,volume:i.volume,muted:i.muted}))))}catch{}}function vu(i){return{sound:i.sound,x:i.x,z:i.z,volume:i.volume,muted:i.muted}}function Mu(i,e){if(i.sound===e)return;i.player.removed=!0,Ie.removeTrace(i.player),i.sound=e,i.player=vu(i),xu(i),Or(i);const t=kn.find(n=>n.sound===e);i.row.style.setProperty("--c",Ls(e)),i.row.querySelector("strong").textContent=`${t.name} trace`,i.row.querySelector("select").setAttribute("aria-label",`Sound for ${t.name} trace`),i.row.querySelector("select").value=e,i.row.querySelector(".trace-delete").setAttribute("aria-label",`Delete ${t.name} trace`),i.row.querySelector(".trace-mute").setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${t.name} trace`),i.row.querySelector("input").setAttribute("aria-label",`${t.name} trace volume`),Ie.ctx&&Ie.addTrace(i.player).catch(n=>{ft("Trace sound could not load. Choose another sound."),console.error(n)}),si()}function Yg(i){const e=kn.find(s=>s.sound===i.sound),t=i.row=document.createElement("div");t.className="trace-row",t.setAttribute("role","listitem"),t.style.setProperty("--c",Ls(i.sound)),t.innerHTML=`<div class="trace-row-head"><span class="trace-number"></span><span class="trace-swatch"></span><strong>${e.name} trace</strong><button class="trace-delete" aria-label="Delete ${e.name} trace">Delete</button></div><label class="trace-source">Sound for this trace <select aria-label="Sound for ${e.name} trace"></select></label><div class="trace-row-controls"><button class="trace-mute" aria-label="${i.muted?"Unmute":"Mute"} ${e.name} trace">${i.muted?"Unmute":"Mute"}</button><label>Volume <input type="range" min="0" max="100" value="${Math.round(i.volume*100)}" aria-label="${e.name} trace volume"></label><button class="trace-redraw">Redraw</button></div>`;const n=t.querySelector("select");for(const s of kn){const r=document.createElement("option");r.value=s.sound,r.textContent=s.name,n.append(r)}n.value=i.sound,n.onchange=s=>Mu(i,s.target.value),t.querySelector(".trace-delete").onclick=()=>il(i),t.querySelector(".trace-mute").onclick=s=>{i.muted=!i.muted,i.player.muted=i.muted,Ie.muteTrace(i.player),s.target.textContent=i.muted?"Unmute":"Mute",s.target.setAttribute("aria-label",`${i.muted?"Unmute":"Mute"} ${kn.find(r=>r.sound===i.sound).name} trace`),si()},t.querySelector("input").oninput=s=>{i.volume=Number(s.target.value)/100,i.player.volume=i.volume,Ie.muteTrace(i.player),si()},t.querySelector(".trace-redraw").onclick=()=>{yi(!0,i),ft("Redraw this trace on the floor plan.")},ne("#trace-list").append(t)}function nl(i,e=!0){i.player=vu(i),Yt.push(i),_u(i),Yg(i),tl(),Ie.ctx&&Ie.addTrace(i.player).catch(t=>{ft("Trace sound could not load. Remove and redraw it."),console.error(t)}),e&&si()}function il(i,e=!0){Mn===i&&yi(!1),i.player.removed=!0,Ie.removeTrace(i.player),Yi(i),i.row.remove(),Yt.splice(Yt.indexOf(i),1),tl(),e&&si()}function yi(i,e=null){ct&&(Yi(ct),ct=null),qi=i,Mn=e,document.body.classList.toggle("drawing-trace",i),ne("#draw-trace").setAttribute("aria-pressed",String(i)),ne("#draw-trace").textContent=i?"Cancel drawing":"✎ Draw sound trace",ne("#trace-sound").disabled=!!e,e&&(ne("#trace-sound").value=e.sound),ne("#trace-hint").textContent=i?"Drag a line on the floor plan; release to make it sound.":`Choose a sound, then draw a line. ${Ko(ne("#trace-sound").value).description}.`}ne("#trace-sound").onchange=()=>{qi||(ne("#trace-hint").textContent=`Choose a sound, then draw a line. ${Ko(ne("#trace-sound").value).description}.`)};ne("#draw-trace").onclick=()=>{if(!qi&&Yt.length>=12){ft("Maximum of 12 sound traces. Remove one before drawing another.");return}yi(!qi),qi&&ft("Drag on the floor plan to draw a sound trace.")};xi.addEventListener("pointerdown",i=>{if(qi&&i.button===0){i.preventDefault();const t=Fr(i),n=(Mn==null?void 0:Mn.sound)||ne("#trace-sound").value;ct={id:`trace-${Zo++}`,sound:n,points:[t],x:t[0],z:t[1],volume:.3,muted:!1,isDraft:!0},_u(ct),xi.setPointerCapture(i.pointerId);return}const e=Ft.find(t=>t.id===i.target.dataset.id);e&&(Si=e,xi.setPointerCapture(i.pointerId),gu(i))});xi.addEventListener("pointermove",i=>{if(ct){const e=Fr(i),t=ct.points.at(-1);Math.hypot(e[0]-t[0],e[1]-t[1])>=.14&&ct.points.length<120&&(ct.points.push(e),Or(ct));return}Si&&gu(i)});xi.addEventListener("pointerup",i=>{if(ct){const e=Fr(i),t=ct.points.at(-1);if(Math.hypot(e[0]-t[0],e[1]-t[1])>.05&&ct.points.push(e),Pr(ct.points)<.55)Yi(ct),ct=null,ft("Draw a longer trace on the floor plan.");else if(Mn)Mn.points=ct.points,Mn.x=ct.points[0][0],Mn.z=ct.points[0][1],Or(Mn),Yi(ct),ct=null,si(),yi(!1),ft("Sound trace redrawn.");else{const n=ct;ct=null,Yi(n),n.isDraft=!1,nl(n),yi(!1),ft(`${kn.find(s=>s.sound===n.sound).name} trace added.`)}}Si=null});xi.addEventListener("pointercancel",()=>{ct&&(Yi(ct),ct=null),Si=null});addEventListener("resize",()=>{Je.aspect=innerWidth/innerHeight,Je.updateProjectionMatrix(),gt.setSize(innerWidth,innerHeight)});const $g=new Ed,hr=new P,_s=new P;let Nn=0;function Jg(){const i=Math.min($g.getDelta(),.05);Nn+=i,Ur.tick(mu());const e=ba.update(i);if(!gt.xr.isPresenting&&!Ie.mixerOpen&&!ne("#help-dialog").open&&!ne("#library").open){const t=Number(Kt.has("KeyW")||Kt.has("ArrowUp"))-Number(Kt.has("KeyS")||Kt.has("ArrowDown")),n=Number(Kt.has("KeyD")||Kt.has("ArrowRight"))-Number(Kt.has("KeyA")||Kt.has("ArrowLeft"));if(hr.set(n,0,-t),hr.lengthSq()){hr.normalize().applyAxisAngle(new P(0,1,0),Je.rotation.y).multiplyScalar(i*2.5),Je.position.add(hr);const s=Et.clamp(Je.position.x,Je.position.z);Je.position.x=s.x,Je.position.z=s.z,Je.position.y=1.7+Et.height(s.x,s.z)}}for(const t of Ft)if(t.type==="bird"&&t.birds){const n=[!0,Math.sin(Nn*.13-.7)>.15,Math.sin(Nn*.09-2.3)>.42];t.birds.forEach((s,r)=>{const a=Nn*(.55+r*.09)+r*2.1,o=.5+.5*Math.sin(Nn*(.24+r*.035)+r*1.8);s.group.position.set(Math.sin(a)*(.45+r*.24)+(r-1)*.2,1.95+Math.sin(a*1.9)*.16+r*.2,-.95-(1-o)*(2.1+r*.5)),s.group.rotation.y=Math.cos(a)*.28,s.wing.rotation.z=Math.sin(Nn*(13+r*1.5))*.55,s.otherWing.rotation.z=-s.wing.rotation.z,s.active!==n[r]&&(s.active=n[r],s.group.visible=n[r],Ie.setBirdActive(t,r,n[r]))})}for(const t of Yt){const n=kg(t.points,e.position.x,e.position.z);n&&Ie.moveTrace(t.player,n.x,n.z),qg(t,Nn)}Je.updateMatrixWorld(),Ie.listener(e);for(const t of Ft){if(t.dot.setAttribute("cx",100+t.x*15),t.dot.setAttribute("cy",100+t.z*15),_s.set(t.x,t.height,t.z).project(e),t.label.style.left=(_s.x*.5+.5)*innerWidth+"px",t.label.style.top=(-_s.y*.5+.5)*innerHeight+"px",t.label.style.display=_s.z<1&&Math.abs(_s.x)<1?"block":"none",t.ring.material.opacity=t.muted?.2:1,t.ring.material.transparent=!0,t.drops&&Ie.playing){const s=t.drops.geometry.attributes.position;for(let r=0;r<s.count;r++)s.array[r*3+1]-=i*1.3,s.array[r*3+1]<.23&&(s.array[r*3+1]=2.13);s.needsUpdate=!0}t.spinner&&Ie.playing&&!t.muted&&(t.spinner.rotation.z-=i*12),t.row.querySelectorAll(".meter i").forEach((s,r)=>s.style.transform=`scaleY(${Ie.playing&&t.sound&&!t.muted?.4+.6*Math.abs(Math.sin(Nn*4+r*1.2)):.15})`)}ne("#listener").setAttribute("transform",`translate(${100+Je.position.x*15},${100+Je.position.z*15}) rotate(${-Je.rotation.y*180/Math.PI})`),Et.update(i,Nn,ba,e),ba.ink.visible=!Et.active,gt.render(Dt,Je)}function Vn(){try{localStorage.setItem("sound-room-pages-bedroom-v1",JSON.stringify(Ft.map(i=>({type:i.type,x:i.x,z:i.z,rotation:i.rotation||0,volume:i.volume,muted:!!i.muted}))))}catch{}}function Su(){ne("#object-count").textContent=String(Ft.length).padStart(2,"0")}function Br(i,e={},t=!0){if(Et!=null&&Et.active){ft("Return to the bedroom to add furnishings.");return}if(Ft.length>=24){ft("Room full: remove an object before adding another.");return}const n=Qi.find(a=>a.type===i);if(!n)return;const s=new P(0,0,-2.5).applyAxisAngle(new P(0,1,0),Je.rotation.y),r={...n,id:`${i}-${Vg++}`,x:Je.position.x+s.x,z:Je.position.z+s.z,volume:n.volume||0,...e,type:i};return r.x=Mt.clamp(r.x,-6+r.radius,6-r.radius),r.z=Mt.clamp(r.z,-6+r.radius,6-r.radius),Ft.push(r),Wg(r),Su(),Ie.ctx&&Ie.add(r).catch(a=>{ft(`${r.name} sound could not load. Remove and re-add to retry.`),console.error(a)}),t&&(Vn(),ft(`${r.name} added. Drag to place it.`)),r}function sl(i,e=!0){i.removed=!0,Ie.remove(i),ii===i&&(ii=null),Si===i&&(Si=null);for(let t=Xi.length-1;t>=0;t--)Xi[t].userData.source===i&&Xi.splice(t,1);Dt.remove(i.group),i.group.traverse(t=>{var n;(n=t.geometry)==null||n.dispose()}),i.row.remove(),i.dot.remove(),i.label.remove(),Ft.splice(Ft.indexOf(i),1),Su(),e&&Vn()}ne("#add-object").onclick=()=>{Kt.clear(),document.pointerLockElement&&document.exitPointerLock(),ne("#library").showModal()};ne("#close-library").onclick=()=>ne("#library").close();let So="All";function rl(){const i=ne("#object-search").value.toLowerCase(),e=Qi.filter(t=>(So==="All"||t.category===So)&&`${t.name} ${t.desc}`.toLowerCase().includes(i));ne("#object-library").replaceChildren();for(const t of e){const n=document.createElement("button");n.className="catalog-item",n.style.setProperty("--c",t.color),n.innerHTML=`<span class="catalog-icon">${{bed:"▰",books:"▤",shelf:"▥",lamp:"♧",rug:"▱",plant:"♧",fan:"✣",clock:"◷",bird:"♪",tv:"▣",record:"◉",rain:"☂",piano:"♬",strings:"♩",drums:"◌"}[t.type]}</span><span><b>${t.name}</b><small>${t.desc}</small></span><span class="catalog-plus">+</span>`,n.setAttribute("aria-label",`Add ${t.name}`),n.onclick=()=>Br(t.type),ne("#object-library").append(n)}e.length||(ne("#object-library").textContent="No objects match. Try a different search.")}ne("#object-search").oninput=rl;document.querySelectorAll("[data-category]").forEach(i=>i.onclick=()=>{So=i.dataset.category,document.querySelectorAll("[data-category]").forEach(e=>e.setAttribute("aria-pressed",e===i)),rl()});let Ss=uu;try{const i=JSON.parse(localStorage.getItem("sound-room-pages-bedroom-v1")),e=i??JSON.parse(localStorage.getItem("sound-room-pages-previous-v1"));Array.isArray(e)&&e.length<=24&&(Ss=e.filter(t=>t&&Qi.some(n=>n.type===t.type)&&Number.isFinite(t.x)&&Number.isFinite(t.z)).map(t=>({type:t.type,x:t.x,z:t.type==="bird"&&t.x===0&&t.z===-4.6?-5.15:t.z,rotation:Number.isFinite(t.rotation)?t.rotation:0,volume:Number.isFinite(t.volume)?Mt.clamp(t.volume,0,1):Qi.find(n=>n.type===t.type).volume||0,muted:!!t.muted})),!i&&Ss.length<24&&!Ss.some(t=>t.type==="strings")&&Ss.push({type:"strings",x:-1.8,z:2.4}))}catch{}for(const i of Ss)Br(i.type,i,!1);Vn();rl();try{const i=JSON.parse(localStorage.getItem("sound-room-pages-traces-v1"));if(Array.isArray(i))for(const e of i.slice(0,12)){if(!kn.some(n=>n.sound===(e==null?void 0:e.sound))||!Array.isArray(e.points)||e.points.length<2||e.points.length>120)continue;const t=e.points;!t.every(n=>Array.isArray(n)&&n.length===2&&n.every(s=>Number.isFinite(s)&&Math.abs(s)<=5.8))||Pr(t)<.55||nl({id:`trace-${Zo++}`,sound:e.sound,points:t,x:t[0][0],z:t[0][1],volume:Number.isFinite(e.volume)?Mt.clamp(e.volume,0,1):.3,muted:!!e.muted},!1)}}catch{}tl();si();Et=new Og({scene:Dt,camera:Je,door:on,engine:Ie,sources:Ft,toast:ft,keys:Kt});const ba=new lu({getParadise:()=>Et,getPortalTargets:()=>Et.hits,scene:Dt,camera:Je,renderer:gt,engine:Ie,keys:Kt,pickables:Xi,catalog:Qi,soundChoices:kn,toast:ft,addObject:Br,removeObject:sl,move:Ir,saveLayout:Vn,setPreset:Ds,getSources:()=>Ft,getTraces:()=>Yt,changeTraceSound:Mu,removeTrace:il,getNextTraceSound:()=>ne("#trace-sound").value,setNextTraceSound:i=>{ne("#trace-sound").value=i},toggleAudio:()=>ne("#sound").click(),startAudio:async()=>{if(await el(),!Ie.playing)throw new Error("Audio could not start. Try Start listening first.")},addFloorTrace:(i,e)=>{if(Yt.length>=12){ft("Maximum of 12 sound traces.");return}Pr(e)<.55||nl({id:`trace-${Zo++}`,sound:i,points:e,x:e[0][0],z:e[0][1],volume:.3,muted:!1})}});gt.setAnimationLoop(Jg);window.soundRoom={getState:()=>({preset:Ie.preset,playing:Ie.playing,listener:Je.position.toArray(),sources:Ft.map(({id:i,x:e,z:t,muted:n})=>({id:i,x:e,z:t,muted:!!n})),traces:Yt.map(({id:i,sound:e,points:t,muted:n})=>({id:i,sound:e,points:t.length,muted:!!n}))})};
