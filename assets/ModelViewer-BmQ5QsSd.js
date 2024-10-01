import{b1 as Qg,j as Uh}from"./index-wmwbL88i.js";import{n as Ee,x as ba,D as Pg,u as Ng}from"./lit-element-KhTZQWWL.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="146",Fg=0,Oh=1,Ug=2,Uf=1,Og=2,Pr=3,nn=0,wt=1,zt=2,en=0,Xs=1,kh=2,Gh=3,zh=4,kg=5,Gs=100,Gg=101,zg=102,Vh=103,Hh=104,Vg=200,Hg=201,Wg=202,qg=203,Of=204,kf=205,Yg=206,Xg=207,Kg=208,Jg=209,$g=210,jg=0,Zg=1,em=2,bc=3,tm=4,im=5,nm=6,sm=7,Gf=0,rm=1,om=2,Mi=0,am=1,lm=2,cm=3,zf=4,hm=5,Vf=300,$s=301,js=302,ma=303,Bc=304,Ba=306,sn=1e3,Ct=1001,Zr=1002,pt=1003,va=1004,_a=1005,tt=1006,hh=1007,rn=1008,Qt=1009,um=1010,dm=1011,Hf=1012,Am=1013,Jn=1014,Pt=1015,Nt=1016,fm=1017,pm=1018,Ks=1020,gm=1021,mm=1022,ot=1023,vm=1024,_m=1025,jn=1026,Zs=1027,Nr=1028,ym=1029,Fr=1030,Em=1031,xm=1033,sa=33776,Ua=33777,Oa=33778,ra=33779,Tc=35840,Wh=35841,Rc=35842,qh=35843,Wf=36196,Lc=37492,Dc=37496,Qc=37808,Yh=37809,Xh=37810,Kh=37811,Jh=37812,$h=37813,jh=37814,Zh=37815,eu=37816,tu=37817,iu=37818,nu=37819,su=37820,ru=37821,Pc=36492,qf=2200,uh=2201,dh=2202,er=2300,is=2301,ka=2302,Vs=2400,Hs=2401,ya=2402,Ah=2500,Im=2501,Cm=1,Yf=2,St=3e3,Re=3001,wm=3200,Sm=3201,fh=0,Mm=1,Ji="srgb",$n="srgb-linear",Ga=7680,bm=519,Nc=35044,ou="300 es",Fc=1035;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const qr=Math.PI/180,eo=180/Math.PI;function Ai(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[a&255]+xt[a>>8&255]+xt[a>>16&255]+xt[a>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function _t(a,e,t){return Math.max(e,Math.min(t,a))}function ph(a,e){return(a%e+e)%e}function Bm(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function Tm(a,e,t){return a!==e?(t-a)/(e-a):0}function Yr(a,e,t){return(1-t)*a+t*e}function Rm(a,e,t,i){return Yr(a,e,1-Math.exp(-t*i))}function Lm(a,e=1){return e-Math.abs(ph(a,e*2)-e)}function Dm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Qm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Pm(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Nm(a,e){return a+Math.random()*(e-a)}function Fm(a){return a*(.5-Math.random())}function Um(a){a!==void 0&&(au=a);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(a){return a*qr}function km(a){return a*eo}function Uc(a){return(a&a-1)===0&&a!==0}function Xf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ea(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Gm(a,e,t,i,n){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),A=s((i-e)/2),g=r((i-e)/2);switch(n){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*A,o*c);break;case"YXY":a.set(l*A,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*A,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qe(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Kf=Object.freeze({__proto__:null,DEG2RAD:qr,RAD2DEG:eo,generateUUID:Ai,clamp:_t,euclideanModulo:ph,mapLinear:Bm,inverseLerp:Tm,lerp:Yr,damp:Rm,pingpong:Lm,smoothstep:Dm,smootherstep:Qm,randInt:Pm,randFloat:Nm,randFloatSpread:Fm,seededRandom:Um,degToRad:Om,radToDeg:km,isPowerOfTwo:Uc,ceilPowerOfTwo:Xf,floorPowerOfTwo:Ea,setQuaternionFromProperEuler:Gm,normalize:qe,denormalize:Zi});class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],A=i[5],g=i[8],p=n[0],f=n[3],m=n[6],E=n[1],v=n[4],_=n[7],x=n[2],C=n[5],b=n[8];return s[0]=r*p+o*E+l*x,s[3]=r*f+o*v+l*C,s[6]=r*m+o*_+l*b,s[1]=c*p+h*E+u*x,s[4]=c*f+h*v+u*C,s[7]=c*m+h*_+u*b,s[2]=d*p+A*E+g*x,s[5]=d*f+A*v+g*C,s[8]=d*m+A*_+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,A=c*s-r*l,g=t*u+i*d+n*A;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(n*c-h*i)*p,e[2]=(o*i-n*r)*p,e[3]=d*p,e[4]=(h*t-n*l)*p,e[5]=(n*s-o*t)*p,e[6]=A*p,e[7]=(i*l-c*t)*p,e[8]=(r*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],r=n[3],o=n[6],l=n[1],c=n[4],h=n[7];return n[0]=t*s+i*l,n[3]=t*r+i*c,n[6]=t*o+i*h,n[1]=-i*s+t*l,n[4]=-i*r+t*c,n[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function to(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Zn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function oa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const za={[Ji]:{[$n]:Zn},[$n]:{[Ji]:oa}},ai={legacyMode:!0,get workingColorSpace(){return $n},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(za[e]&&za[e][t]!==void 0){const i=za[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},li={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Va(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function uo(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ji){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ai.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=$n){return this.r=e,this.g=t,this.b=i,ai.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=$n){if(e=ph(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Va(r,s,e+1/3),this.g=Va(r,s,e),this.b=Va(r,s,e-1/3)}return ai.toWorkingColorSpace(this,n),this}setStyle(e,t=Ji){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ai.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ai.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ai.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ai.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ji){const i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ji){return ai.fromWorkingColorSpace(uo(this,lt),e),_t(lt.r*255,0,255)<<16^_t(lt.g*255,0,255)<<8^_t(lt.b*255,0,255)<<0}getHexString(e=Ji){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$n){ai.fromWorkingColorSpace(uo(this,lt),t);const i=lt.r,n=lt.g,s=lt.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$n){return ai.fromWorkingColorSpace(uo(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Ji){return ai.fromWorkingColorSpace(uo(this,lt),e),e!==Ji?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=i,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ho);const i=Yr(li.h,ho.h,t),n=Yr(li.s,ho.s,t),s=Yr(li.l,ho.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xe.NAMES=$f;let fs;class jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=to("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Zn(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gh{constructor(e=null){this.isSource=!0,this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Ha(n[r].image)):s.push(Ha(n[r]))}else s=Ha(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jf.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0,Ot=class Oc extends ri{constructor(e=Oc.DEFAULT_IMAGE,t=Oc.DEFAULT_MAPPING,i=Ct,n=Ct,s=tt,r=rn,o=ot,l=Qt,c=1,h=St){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ai(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Vf;class Ye{constructor(e=0,t=0,i=0,n=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],A=l[5],g=l[9],p=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+A+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,_=(A+1)/2,x=(m+1)/2,C=(h+d)/4,b=(u+p)/4,y=(g+f)/4;return v>_&&v>x?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=C/i,s=b/i):_>x?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=C/n,s=y/n):x<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(x),i=b/s,n=y/s),this.set(i,n,s,t),this}let E=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(u-p)/E,this.z=(d-h)/E,this.w=Math.acos((c+A+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends ri{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Ot(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zf extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ep extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[r+0],A=s[r+1],g=s[r+2],p=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=A,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==A||h!==g){let f=1-o;const m=l*d+c*A+h*g+u*p,E=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const x=Math.sqrt(v),C=Math.atan2(x,m*E);f=Math.sin(f*C)/x,o=Math.sin(o*C)/x}const _=o*E;if(l=l*f+d*_,c=c*f+A*_,h=h*f+g*_,u=u*f+p*_,f===1-o){const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],A=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*A-c*d,e[t+1]=l*g+h*d+c*u-o*A,e[t+2]=c*g+h*A+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),A=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u-d*A*g;break;case"YXZ":this._x=d*h*u+c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u+d*A*g;break;case"ZXY":this._x=d*h*u-c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u-d*A*g;break;case"ZYX":this._x=d*h*u-c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u+d*A*g;break;case"YZX":this._x=d*h*u+c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u-d*A*g;break;case"XZY":this._x=d*h*u-c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u+d*A*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const A=.5/Math.sqrt(d+1);this._w=.25/A,this._x=(h-l)*A,this._y=(s-c)*A,this._z=(r-n)*A}else if(i>o&&i>u){const A=2*Math.sqrt(1+i-o-u);this._w=(h-l)/A,this._x=.25*A,this._y=(n+r)/A,this._z=(s+c)/A}else if(o>u){const A=2*Math.sqrt(1+o-i-u);this._w=(s-c)/A,this._x=(n+r)/A,this._y=.25*A,this._z=(l+h)/A}else{const A=2*Math.sqrt(1+u-i-o);this._w=(r-n)/A,this._x=(s+c)/A,this._y=(l+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const A=1-t;return this._w=A*r+t*this._w,this._x=A*i+t*this._x,this._y=A*n+t*this._y,this._z=A*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*n-o*i,h=l*i+o*t-s*n,u=l*n+s*i-r*t,d=-s*t-r*i-o*n;return this.x=c*l+d*-s+h*-o-u*-r,this.y=h*l+d*-r+u*-s-c*-o,this.z=u*l+d*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new B,lu=new fi;class ni{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>r&&(r=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>r&&(r=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)Qn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox),qa.applyMatrix4(e.matrixWorld),this.union(qa);const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Ao.subVectors(this.max,ur),ps.subVectors(e.a,ur),gs.subVectors(e.b,ur),ms.subVectors(e.c,ur),an.subVectors(gs,ps),ln.subVectors(ms,gs),Pn.subVectors(ps,ms);let t=[0,-an.z,an.y,0,-ln.z,ln.y,0,-Pn.z,Pn.y,an.z,0,-an.x,ln.z,0,-ln.x,Pn.z,0,-Pn.x,-an.y,an.x,0,-ln.y,ln.x,0,-Pn.y,Pn.x,0];return!Ya(t,ps,gs,ms,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,ps,gs,ms,Ao))?!1:(fo.crossVectors(an,ln),t=[fo.x,fo.y,fo.z],Ya(t,ps,gs,ms,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,qa=new ni,ps=new B,gs=new B,ms=new B,an=new B,ln=new B,Pn=new B,ur=new B,Ao=new B,fo=new B,Nn=new B;function Ya(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){Nn.fromArray(a,s);const o=n.x*Math.abs(Nn.x)+n.y*Math.abs(Nn.y)+n.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=i.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vm=new ni,dr=new B,Xa=new B;class bn{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vm.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(dr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Xa)),this.expandByPoint(dr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new B,Ka=new B,po=new B,cn=new B,Ja=new B,go=new B,$a=new B;class Ta{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.direction).multiplyScalar(t).add(this.origin),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ka.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,r=-this.direction.dot(po),o=cn.dot(this.direction),l=-cn.dot(po),c=cn.lengthSq(),h=Math.abs(1-r*r);let u,d,A,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,A=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),A=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),A=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),A=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),A=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(po).multiplyScalar(d).add(Ka),A}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),n=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,n,s){Ja.subVectors(t,e),go.subVectors(i,e),$a.crossVectors(Ja,go);let r=this.direction.dot($a),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;cn.subVectors(this.origin,e);const l=o*this.direction.dot(go.crossVectors(cn,go));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(cn));if(c<0||l+c>r)return null;const h=-o*cn.dot($a);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,r,o,l,c,h,u,d,A,g,p,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=A,m[7]=g,m[11]=p,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),r=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,A=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=A+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+A*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,A=l*u,g=c*h,p=c*u;t[0]=d+p*o,t[4]=g*o-A,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=A*o-g,t[6]=p+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,A=l*u,g=c*h,p=c*u;t[0]=d-p*o,t[4]=-r*u,t[8]=g+A*o,t[1]=A+g*o,t[5]=r*h,t[9]=p-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,A=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=g*c-A,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=A*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,A=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+A,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=A*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,A=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=A*u-g,t[2]=g*u-A,t[6]=o*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Wm)}lookAt(e,t,i){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),hn.crossVectors(i,qt),hn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),hn.crossVectors(i,qt)),hn.normalize(),mo.crossVectors(qt,hn),n[0]=hn.x,n[4]=mo.x,n[8]=qt.x,n[1]=hn.y,n[5]=mo.y,n[9]=qt.y,n[2]=hn.z,n[6]=mo.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],A=i[13],g=i[2],p=i[6],f=i[10],m=i[14],E=i[3],v=i[7],_=i[11],x=i[15],C=n[0],b=n[4],y=n[8],S=n[12],T=n[1],U=n[5],Y=n[9],N=n[13],R=n[2],P=n[6],z=n[10],G=n[14],F=n[3],D=n[7],k=n[11],j=n[15];return s[0]=r*C+o*T+l*R+c*F,s[4]=r*b+o*U+l*P+c*D,s[8]=r*y+o*Y+l*z+c*k,s[12]=r*S+o*N+l*G+c*j,s[1]=h*C+u*T+d*R+A*F,s[5]=h*b+u*U+d*P+A*D,s[9]=h*y+u*Y+d*z+A*k,s[13]=h*S+u*N+d*G+A*j,s[2]=g*C+p*T+f*R+m*F,s[6]=g*b+p*U+f*P+m*D,s[10]=g*y+p*Y+f*z+m*k,s[14]=g*S+p*N+f*G+m*j,s[3]=E*C+v*T+_*R+x*F,s[7]=E*b+v*U+_*P+x*D,s[11]=E*y+v*Y+_*z+x*k,s[15]=E*S+v*N+_*G+x*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],A=e[14],g=e[3],p=e[7],f=e[11],m=e[15];return g*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*A-i*l*A)+p*(+t*l*A-t*c*d+s*r*d-n*r*A+n*c*h-s*l*h)+f*(+t*c*u-t*o*A-s*r*u+i*r*A+s*o*h-i*c*h)+m*(-n*o*h-t*l*u+t*o*d+n*r*u-i*r*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],A=e[11],g=e[12],p=e[13],f=e[14],m=e[15],E=u*f*c-p*d*c+p*l*A-o*f*A-u*l*m+o*d*m,v=g*d*c-h*f*c-g*l*A+r*f*A+h*l*m-r*d*m,_=h*p*c-g*u*c+g*o*A-r*p*A-h*o*m+r*u*m,x=g*u*l-h*p*l-g*o*d+r*p*d+h*o*f-r*u*f,C=t*E+i*v+n*_+s*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=E*b,e[1]=(p*d*s-u*f*s-p*n*A+i*f*A+u*n*m-i*d*m)*b,e[2]=(o*f*s-p*l*s+p*n*c-i*f*c-o*n*m+i*l*m)*b,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*A-i*l*A)*b,e[4]=v*b,e[5]=(h*f*s-g*d*s+g*n*A-t*f*A-h*n*m+t*d*m)*b,e[6]=(g*l*s-r*f*s-g*n*c+t*f*c+r*n*m-t*l*m)*b,e[7]=(r*d*s-h*l*s+h*n*c-t*d*c-r*n*A+t*l*A)*b,e[8]=_*b,e[9]=(g*u*s-h*p*s-g*i*A+t*p*A+h*i*m-t*u*m)*b,e[10]=(r*p*s-g*o*s+g*i*c-t*p*c-r*i*m+t*o*m)*b,e[11]=(h*o*s-r*u*s-h*i*c+t*u*c+r*i*A-t*o*A)*b,e[12]=x*b,e[13]=(h*p*n-g*u*n+g*i*d-t*p*d-h*i*f+t*u*f)*b,e[14]=(g*o*n-r*p*n-g*i*l+t*p*l+r*i*f-t*o*f)*b,e[15]=(r*u*n-h*o*n+h*i*l-t*u*l-r*i*d+t*o*d)*b,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,A=s*h,g=s*u,p=r*h,f=r*u,m=o*u,E=l*c,v=l*h,_=l*u,x=i.x,C=i.y,b=i.z;return n[0]=(1-(p+m))*x,n[1]=(A+_)*x,n[2]=(g-v)*x,n[3]=0,n[4]=(A-_)*C,n[5]=(1-(d+m))*C,n[6]=(f+E)*C,n[7]=0,n[8]=(g+v)*b,n[9]=(f-E)*b,n[10]=(1-(d+p))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=vs.set(n[0],n[1],n[2]).length();const r=vs.set(n[4],n[5],n[6]).length(),o=vs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);const c=1/s,h=1/r,u=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,n,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(r+s)/(r-s),A=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=A,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,r){const o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(r-s),u=(t+e)*l,d=(i+n)*c,A=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-A,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new B,ci=new we,Hm=new B(0,0,0),Wm=new B(1,1,1),hn=new B,mo=new B,qt=new B,cu=new we,hu=new fi;class ls{constructor(e=0,t=0,i=0,n=ls.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],A=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-_t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ls.DefaultOrder="XYZ";ls.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qm=0;const uu=new B,_s=new fi,Fi=new we,vo=new B,Ar=new B,Ym=new B,Xm=new fi,du=new B(1,0,0),Au=new B(0,1,0),fu=new B(0,0,1),Km={type:"added"},pu={type:"removed"};class Ke extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DefaultUp.clone();const e=new B,t=new ls,i=new fi,n=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new we},normalMatrix:{value:new Ft}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ke.DefaultMatrixWorldAutoUpdate,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ar,vo,this.up):Fi.lookAt(vo,Ar,this.up),this.quaternion.setFromRotationMatrix(Fi),n&&(Fi.extractRotation(n.matrixWorld),_s.setFromRotationMatrix(Fi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Km)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),A=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),A.length>0&&(i.animations=A),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ke.DefaultUp=new B(0,1,0);Ke.DefaultMatrixAutoUpdate=!0;Ke.DefaultMatrixWorldAutoUpdate=!0;const hi=new B,Ui=new B,ja=new B,Oi=new B,ys=new B,Es=new B,gu=new B,Za=new B,el=new B,tl=new B;class $i{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),hi.subVectors(e,t),n.cross(hi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){hi.subVectors(n,t),Ui.subVectors(i,t),ja.subVectors(e,t);const r=hi.dot(hi),o=hi.dot(Ui),l=hi.dot(ja),c=Ui.dot(Ui),h=Ui.dot(ja),u=r*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,A=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-A-g,g,A)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Oi),Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,Oi),l.set(0,0),l.addScaledVector(s,Oi.x),l.addScaledVector(r,Oi.y),l.addScaledVector(o,Oi.z),l}static isFrontFacing(e,t,i,n){return hi.subVectors(i,t),Ui.subVectors(e,t),hi.cross(Ui).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),hi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return $i.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,o;ys.subVectors(n,i),Es.subVectors(s,i),Za.subVectors(e,i);const l=ys.dot(Za),c=Es.dot(Za);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,n);const h=ys.dot(el),u=Es.dot(el);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(ys,r);tl.subVectors(e,s);const A=ys.dot(tl),g=Es.dot(tl);if(g>=0&&A<=g)return t.copy(s);const p=A*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Es,o);const f=h*g-A*u;if(f<=0&&u-h>=0&&A-g>=0)return gu.subVectors(s,n),o=(u-h)/(u-h+(A-g)),t.copy(n).addScaledVector(gu,o);const m=1/(f+p+d);return r=p*m,o=d*m,t.copy(i).addScaledVector(ys,r).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jm=0,pi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Xs,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==nn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class di extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new B,_o=new Be;class at{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tp extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ip extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bi extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $m=0;const jt=new we,il=new Ke,xs=new B,Yt=new ni,fr=new ni,At=new B;class oi extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?ip:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Yt.min,fr.min),Yt.expandByPoint(At),At.addVectors(Yt.max,fr.max),Yt.expandByPoint(At)):(Yt.expandByPoint(fr.min),Yt.expandByPoint(fr.max))}Yt.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)At.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(At));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),At.add(xs)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,r=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new B,h[T]=new B;const u=new B,d=new B,A=new B,g=new Be,p=new Be,f=new Be,m=new B,E=new B;function v(T,U,Y){u.fromArray(n,T*3),d.fromArray(n,U*3),A.fromArray(n,Y*3),g.fromArray(r,T*2),p.fromArray(r,U*2),f.fromArray(r,Y*2),d.sub(u),A.sub(u),p.sub(g),f.sub(g);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(f.y).addScaledVector(A,-p.y).multiplyScalar(N),E.copy(A).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(N),c[T].add(m),c[U].add(m),c[Y].add(m),h[T].add(E),h[U].add(E),h[Y].add(E))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,U=_.length;T<U;++T){const Y=_[T],N=Y.start,R=Y.count;for(let P=N,z=N+R;P<z;P+=3)v(i[P+0],i[P+1],i[P+2])}const x=new B,C=new B,b=new B,y=new B;function S(T){b.fromArray(s,T*3),y.copy(b);const U=c[T];x.copy(U),x.sub(b.multiplyScalar(b.dot(U))).normalize(),C.crossVectors(y,U);const N=C.dot(h[T])<0?-1:1;l[T*4]=x.x,l[T*4+1]=x.y,l[T*4+2]=x.z,l[T*4+3]=N}for(let T=0,U=_.length;T<U;++T){const Y=_[T],N=Y.start,R=Y.count;for(let P=N,z=N+R;P<z;P+=3)S(i[P+0]),S(i[P+1]),S(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,A=i.count;d<A;d++)i.setXYZ(d,0,0,0);const n=new B,s=new B,r=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,A=e.count;d<A;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,f),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,A=t.count;d<A;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let A=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?A=l[p]*o.data.stride+o.offset:A=l[p]*h;for(let m=0;m<h;m++)d[g++]=c[A++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],A=e(d,i);l.push(A)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const A=c[u];h.push(A.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new we,Is=new Ta,nl=new bn,un=new B,dn=new B,An=new B,sl=new B,rl=new B,ol=new B,yo=new B,Eo=new B,xo=new B,Io=new Be,Co=new Be,wo=new Be,al=new B,So=new B;class _e extends Ke{constructor(e=new oi,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),e.ray.intersectsSphere(nl)===!1)||(mu.copy(s).invert(),Is.copy(e.ray).applyMatrix4(mu),i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1))return;let r;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,A=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(n))for(let p=0,f=A.length;p<f;p++){const m=A[p],E=n[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let x=v,C=_;x<C;x+=3){const b=o.getX(x),y=o.getX(x+1),S=o.getX(x+2);r=Mo(this,E,e,Is,l,c,h,u,d,b,y,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let m=p,E=f;m<E;m+=3){const v=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Mo(this,n,e,Is,l,c,h,u,d,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,f=A.length;p<f;p++){const m=A[p],E=n[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let x=v,C=_;x<C;x+=3){const b=x,y=x+1,S=x+2;r=Mo(this,E,e,Is,l,c,h,u,d,b,y,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let m=p,E=f;m<E;m+=3){const v=m,_=m+1,x=m+2;r=Mo(this,n,e,Is,l,c,h,u,d,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jm(a,e,t,i,n,s,r,o){let l;if(e.side===wt?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side!==zt,o),l===null)return null;So.copy(o),So.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:a}}function Mo(a,e,t,i,n,s,r,o,l,c,h,u){un.fromBufferAttribute(n,c),dn.fromBufferAttribute(n,h),An.fromBufferAttribute(n,u);const d=a.morphTargetInfluences;if(s&&d){yo.set(0,0,0),Eo.set(0,0,0),xo.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],m=s[g];f!==0&&(sl.fromBufferAttribute(m,c),rl.fromBufferAttribute(m,h),ol.fromBufferAttribute(m,u),r?(yo.addScaledVector(sl,f),Eo.addScaledVector(rl,f),xo.addScaledVector(ol,f)):(yo.addScaledVector(sl.sub(un),f),Eo.addScaledVector(rl.sub(dn),f),xo.addScaledVector(ol.sub(An),f)))}un.add(yo),dn.add(Eo),An.add(xo)}a.isSkinnedMesh&&(a.boneTransform(c,un),a.boneTransform(h,dn),a.boneTransform(u,An));const A=jm(a,e,t,i,un,dn,An,al);if(A){o&&(Io.fromBufferAttribute(o,c),Co.fromBufferAttribute(o,h),wo.fromBufferAttribute(o,u),A.uv=$i.getUV(al,un,dn,An,Io,Co,wo,new Be)),l&&(Io.fromBufferAttribute(l,c),Co.fromBufferAttribute(l,h),wo.fromBufferAttribute(l,u),A.uv2=$i.getUV(al,un,dn,An,Io,Co,wo,new Be));const g={a:c,b:h,c:u,normal:new B,materialIndex:0};$i.getNormal(un,dn,An,g.normal),A.face=g}return A}class Bn extends oi{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,A=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(u,2));function g(p,f,m,E,v,_,x,C,b,y,S){const T=_/b,U=x/y,Y=_/2,N=x/2,R=C/2,P=b+1,z=y+1;let G=0,F=0;const D=new B;for(let k=0;k<z;k++){const j=k*U-N;for(let J=0;J<P;J++){const ee=J*T-Y;D[p]=ee*E,D[f]=j*v,D[m]=R,c.push(D.x,D.y,D.z),D[p]=0,D[f]=0,D[m]=C>0?1:-1,h.push(D.x,D.y,D.z),u.push(J/b),u.push(1-k/y),G+=1}}for(let k=0;k<y;k++)for(let j=0;j<b;j++){const J=d+j+P*k,ee=d+j+P*(k+1),se=d+(j+1)+P*(k+1),he=d+(j+1)+P*k;l.push(J,ee,he),l.push(ee,se,he),F+=6}o.addGroup(A,F,S),A+=F,d+=G}}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Lt(a){const e={};for(let t=0;t<a.length;t++){const i=tr(a[t]);for(const n in i)e[n]=i[n]}return e}function Zm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}const e0={clone:tr,merge:Lt};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class np extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends np{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=90,ws=1;class kc extends Ke{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new yt(Cs,ws,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new B(1,0,0)),this.add(n);const s=new yt(Cs,ws,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(-1,0,0)),this.add(s);const r=new yt(Cs,ws,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new B(0,1,0)),this.add(r);const o=new yt(Cs,ws,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new B(0,-1,0)),this.add(o);const l=new yt(Cs,ws,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new B(0,0,1)),this.add(l);const c=new yt(Cs,ws,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new B(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,r,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Mi,e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,r),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=A,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class sp extends Ot{constructor(e,t,i,n,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vh extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new sp(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Bn(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:en});s.uniforms.tEquirect.value=t;const r=new _e(n,s),o=t.minFilter;return t.minFilter===rn&&(t.minFilter=tt),new kc(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}const ll=new B,n0=new B,s0=new Ft;class zn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ll.subVectors(i,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ll),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||s0.getNormalMatrix(e),n=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new bn,bo=new B;class _h{constructor(e=new zn,t=new zn,i=new zn,n=new zn,s=new zn,r=new zn){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],r=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],A=i[9],g=i[10],p=i[11],f=i[12],m=i[13],E=i[14],v=i[15];return t[0].setComponents(o-n,u-l,p-d,v-f).normalize(),t[1].setComponents(o+n,u+l,p+d,v+f).normalize(),t[2].setComponents(o+s,u+c,p+A,v+m).normalize(),t[3].setComponents(o-s,u-c,p-A,v-m).normalize(),t[4].setComponents(o-r,u-h,p-g,v-E).normalize(),t[5].setComponents(o+r,u+h,p+g,v+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(bo.x=n.normal.x>0?e.max.x:e.min.x,bo.y=n.normal.y>0?e.max.y:e.min.y,bo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rp(){let a=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function r0(a,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,A=a.createBuffer();a.bindBuffer(h,A),a.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,A=h.updateRange;a.bindBuffer(u,c),A.count===-1?a.bufferSubData(u,0,d):(t?a.bufferSubData(u,A.offset*d.BYTES_PER_ELEMENT,d,A.offset,A.count):a.bufferSubData(u,A.offset*d.BYTES_PER_ELEMENT,d.subarray(A.offset,A.offset+A.count)),A.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(a.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:o,update:l}}class cs extends oi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,A=[],g=[],p=[],f=[];for(let m=0;m<h;m++){const E=m*d-r;for(let v=0;v<c;v++){const _=v*u-s;g.push(_,-E,0),p.push(0,0,1),f.push(v/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const v=E+c*m,_=E+c*(m+1),x=E+1+c*(m+1),C=E+1+c*m;A.push(v,_,C),A.push(_,x,C)}this.setIndex(A),this.setAttribute("position",new bi(g,3)),this.setAttribute("normal",new bi(p,3)),this.setAttribute("uv",new bi(f,2))}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0="vec3 transformed = vec3( position );",A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,p0=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,X0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,K0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,iv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,yv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ov=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Jv=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$v=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,e_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,t_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,i_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,u_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,d_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,A_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,g_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,E_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,I_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,M_=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,B_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:o0,alphamap_pars_fragment:a0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,begin_vertex:d0,beginnormal_vertex:A0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:g0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:y0,color_fragment:E0,color_pars_fragment:x0,color_pars_vertex:I0,color_vertex:C0,common:w0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:M0,displacementmap_pars_vertex:b0,displacementmap_vertex:B0,emissivemap_fragment:T0,emissivemap_pars_fragment:R0,encodings_fragment:L0,encodings_pars_fragment:D0,envmap_fragment:Q0,envmap_common_pars_fragment:P0,envmap_pars_fragment:N0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:K0,envmap_vertex:U0,fog_vertex:O0,fog_pars_vertex:k0,fog_fragment:G0,fog_pars_fragment:z0,gradientmap_pars_fragment:V0,lightmap_fragment:H0,lightmap_pars_fragment:W0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Y0,lights_pars_begin:X0,lights_toon_fragment:J0,lights_toon_pars_fragment:$0,lights_phong_fragment:j0,lights_phong_pars_fragment:Z0,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:iv,lights_fragment_maps:nv,lights_fragment_end:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:lv,map_fragment:cv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:dv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:fv,morphcolor_vertex:pv,morphnormal_vertex:gv,morphtarget_pars_vertex:mv,morphtarget_vertex:vv,normal_fragment_begin:_v,normal_fragment_maps:yv,normal_pars_fragment:Ev,normal_pars_vertex:xv,normal_vertex:Iv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:bv,output_fragment:Bv,packing:Tv,premultiplied_alpha_fragment:Rv,project_vertex:Lv,dithering_fragment:Dv,dithering_pars_fragment:Qv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Nv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Ov,shadowmask_pars_fragment:kv,skinbase_vertex:Gv,skinning_pars_vertex:zv,skinning_vertex:Vv,skinnormal_vertex:Hv,specularmap_fragment:Wv,specularmap_pars_fragment:qv,tonemapping_fragment:Yv,tonemapping_pars_fragment:Xv,transmission_fragment:Kv,transmission_pars_fragment:Jv,uv_pars_fragment:$v,uv_pars_vertex:jv,uv_vertex:Zv,uv2_pars_fragment:e_,uv2_pars_vertex:t_,uv2_vertex:i_,worldpos_vertex:n_,background_vert:s_,background_frag:r_,backgroundCube_vert:o_,backgroundCube_frag:a_,cube_vert:l_,cube_frag:c_,depth_vert:h_,depth_frag:u_,distanceRGBA_vert:d_,distanceRGBA_frag:A_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:g_,linedashed_frag:m_,meshbasic_vert:v_,meshbasic_frag:__,meshlambert_vert:y_,meshlambert_frag:E_,meshmatcap_vert:x_,meshmatcap_frag:I_,meshnormal_vert:C_,meshnormal_frag:w_,meshphong_vert:S_,meshphong_frag:M_,meshphysical_vert:b_,meshphysical_frag:B_,meshtoon_vert:T_,meshtoon_frag:R_,points_vert:L_,points_frag:D_,shadow_vert:Q_,shadow_frag:P_,sprite_vert:N_,sprite_frag:F_},ie={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},xi={basic:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Lt([ie.points,ie.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Lt([ie.common,ie.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Lt([ie.sprite,ie.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Lt([ie.common,ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Lt([ie.lights,ie.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};xi.physical={uniforms:Lt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function U_(a,e,t,i,n,s,r){const o=new xe(0);let l=s===!0?0:1,c,h,u=null,d=0,A=null;function g(f,m){let E=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v));const _=a.xr,x=_.getSession&&_.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?p(o,l):v&&v.isColor&&(p(v,1),E=!0),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ba)?(h===void 0&&(h=new _e(new Bn(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:tr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,(u!==v||d!==v.version||A!==a.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,A=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _e(new cs(2,2),new mi({name:"BackgroundMaterial",uniforms:tr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||A!==a.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,A=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,m){i.buffers.color.setClear(f.r,f.g,f.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(o,l)},render:g}}function O_(a,e,t,i){const n=a.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function u(R,P,z,G,F){let D=!1;if(r){const k=p(G,z,P);c!==k&&(c=k,A(c.object)),D=m(R,G,z,F),D&&E(R,G,z,F)}else{const k=P.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==k)&&(c.geometry=G.id,c.program=z.id,c.wireframe=k,D=!0)}F!==null&&t.update(F,34963),(D||h)&&(h=!1,y(R,P,z,G),F!==null&&a.bindBuffer(34963,t.get(F).buffer))}function d(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function A(R){return i.isWebGL2?a.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?a.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,P,z){const G=z.wireframe===!0;let F=o[R.id];F===void 0&&(F={},o[R.id]=F);let D=F[P.id];D===void 0&&(D={},F[P.id]=D);let k=D[G];return k===void 0&&(k=f(d()),D[G]=k),k}function f(R){const P=[],z=[],G=[];for(let F=0;F<n;F++)P[F]=0,z[F]=0,G[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:R,attributes:{},index:null}}function m(R,P,z,G){const F=c.attributes,D=P.attributes;let k=0;const j=z.getAttributes();for(const J in j)if(j[J].location>=0){const se=F[J];let he=D[J];if(he===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;k++}return c.attributesNum!==k||c.index!==G}function E(R,P,z,G){const F={},D=P.attributes;let k=0;const j=z.getAttributes();for(const J in j)if(j[J].location>=0){let se=D[J];se===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),F[J]=he,k++}c.attributes=F,c.attributesNum=k,c.index=G}function v(){const R=c.newAttributes;for(let P=0,z=R.length;P<z;P++)R[P]=0}function _(R){x(R,0)}function x(R,P){const z=c.newAttributes,G=c.enabledAttributes,F=c.attributeDivisors;z[R]=1,G[R]===0&&(a.enableVertexAttribArray(R),G[R]=1),F[R]!==P&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,P),F[R]=P)}function C(){const R=c.newAttributes,P=c.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==R[z]&&(a.disableVertexAttribArray(z),P[z]=0)}function b(R,P,z,G,F,D){i.isWebGL2===!0&&(z===5124||z===5125)?a.vertexAttribIPointer(R,P,z,F,D):a.vertexAttribPointer(R,P,z,G,F,D)}function y(R,P,z,G){if(i.isWebGL2===!1&&(R.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const F=G.attributes,D=z.getAttributes(),k=P.defaultAttributeValues;for(const j in D){const J=D[j];if(J.location>=0){let ee=F[j];if(ee===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const se=ee.normalized,he=ee.itemSize,X=t.get(ee);if(X===void 0)continue;const Fe=X.buffer,ge=X.type,ye=X.bytesPerElement;if(ee.isInterleavedBufferAttribute){const le=ee.data,ze=le.stride,Se=ee.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)x(J.location+me,le.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<J.locationSize;me++)_(J.location+me);a.bindBuffer(34962,Fe);for(let me=0;me<J.locationSize;me++)b(J.location+me,he/J.locationSize,ge,se,ze*ye,(Se+he/J.locationSize*me)*ye)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)x(J.location+le,ee.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<J.locationSize;le++)_(J.location+le);a.bindBuffer(34962,Fe);for(let le=0;le<J.locationSize;le++)b(J.location+le,he/J.locationSize,ge,se,he*ye,he/J.locationSize*le*ye)}}else if(k!==void 0){const se=k[j];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(J.location,se);break;case 3:a.vertexAttrib3fv(J.location,se);break;case 4:a.vertexAttrib4fv(J.location,se);break;default:a.vertexAttrib1fv(J.location,se)}}}}C()}function S(){Y();for(const R in o){const P=o[R];for(const z in P){const G=P[z];for(const F in G)g(G[F].object),delete G[F];delete P[z]}delete o[R]}}function T(R){if(o[R.id]===void 0)return;const P=o[R.id];for(const z in P){const G=P[z];for(const F in G)g(G[F].object),delete G[F];delete P[z]}delete o[R.id]}function U(R){for(const P in o){const z=o[P];if(z[R.id]===void 0)continue;const G=z[R.id];for(const F in G)g(G[F].object),delete G[F];delete z[R.id]}}function Y(){N(),h=!0,c!==l&&(c=l,A(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:_,disableUnusedAttributes:C}}function k_(a,e,t,i){const n=i.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,A;if(n)d=a,A="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[A](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=l}function G_(a,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),A=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),m=a.getParameter(36348),E=a.getParameter(36349),v=d>0,_=r||e.has("OES_texture_float"),x=v&&_,C=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:x,maxSamples:C}}function z_(a){const e=this;let t=null,i=0,n=!1,s=!1;const r=new zn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,A){const g=u.length!==0||d||i!==0||n;return n=d,t=h(u,A,0),i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,A){const g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,m=a.get(u);if(!n||g===null||g.length===0||s&&!f)s?h(null):c();else{const E=s?0:i,v=E*4;let _=m.clippingState||null;l.value=_,_=h(g,d,v,A);for(let x=0;x!==v;++x)_[x]=t[x];m.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,A,g){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const m=A+p*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,_=A;v!==p;++v,_+=4)r.copy(u[v]).applyMatrix4(E,o),r.normal.toArray(f,_),f[_+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function V_(a){let e=new WeakMap;function t(r,o){return o===ma?r.mapping=$s:o===Bc&&(r.mapping=js),r}function i(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===ma||o===Bc)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new vh(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rr extends np{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,vu=[.125,.215,.35,.446,.526,.582],Kn=20,cl=new rr,_u=new xe;let hl=null;const Vn=(1+Math.sqrt(5))/2,Ms=1/Vn,yu=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Vn,Ms),new B(0,Vn,-Ms),new B(Ms,0,Vn),new B(-Ms,0,Vn),new B(Vn,Ms,0),new B(-Vn,Ms,0)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){hl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:Nt,format:ot,encoding:St,depthBuffer:!1},n=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(s)),this._blurMaterial=W_(s,e,t)}return n}_compileMaterial(e){const t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,i,n){const o=new yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_u),h.toneMapping=Mi,h.autoClear=!1;const A=new di({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new _e(new Bn,A);let p=!1;const f=e.background;f?f.isColor&&(A.color.copy(f),e.background=null,p=!0):(A.color.copy(_u),p=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;Bo(n,E*v,m>2?v:0,v,v),h.setRenderTarget(n),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===$s||e.mapping===js;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new _e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=yu[(n-1)%yu.length];this._blur(e,n-1,n,s,r)}t.autoClear=i}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _e(this._lodPlanes[n],c),d=c.uniforms,A=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*A):2*Math.PI/(2*Kn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Kn;f>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Kn}`);const m=[];let E=0;for(let b=0;b<Kn;++b){const y=b/p,S=Math.exp(-y*y/2);m.push(S),b===0?E+=S:b<f&&(E+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const _=this._sizeLods[n],x=3*_*(n>v-Ws?n-v+Ws:0),C=4*(this._cubeSize-_);Bo(t,x,C,3*_,2*_),l.setRenderTarget(t),l.render(u,cl)}}function H_(a){const e=[],t=[],i=[];let n=a;const s=a-Ws+1+vu.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);let l=1/o;r>a-Ws?l=vu[r-a+Ws-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],A=6,g=6,p=3,f=2,m=1,E=new Float32Array(p*g*A),v=new Float32Array(f*g*A),_=new Float32Array(m*g*A);for(let C=0;C<A;C++){const b=C%3*2/3-1,y=C>2?0:-1,S=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];E.set(S,p*g*C),v.set(d,f*g*C);const T=[C,C,C,C,C,C];_.set(T,m*g*C)}const x=new oi;x.setAttribute("position",new at(E,p)),x.setAttribute("uv",new at(v,f)),x.setAttribute("faceIndex",new at(_,m)),e.push(x),n>Ws&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xu(a,e,t){const i=new gi(a,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function W_(a,e,t){const i=new Float32Array(Kn),n=new B(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:yh(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Iu(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Cu(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function q_(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ma||l===Bc,h=l===$s||l===js;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Eu(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Eu(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Y_(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function X_(a,e,t,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];const A=s.get(d);A&&(e.remove(A),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const A=u.morphAttributes;for(const g in A){const p=A[g];for(let f=0,m=p.length;f<m;f++)e.update(p[f],34962)}}function c(u){const d=[],A=u.index,g=u.attributes.position;let p=0;if(A!==null){const E=A.array;p=A.version;for(let v=0,_=E.length;v<_;v+=3){const x=E[v+0],C=E[v+1],b=E[v+2];d.push(x,C,C,b,b,x)}}else{const E=g.array;p=g.version;for(let v=0,_=E.length/3-1;v<_;v+=3){const x=v+0,C=v+1,b=v+2;d.push(x,C,C,b,b,x)}}const f=new(Jf(d)?ip:tp)(d,1);f.version=p;const m=s.get(u);m&&e.remove(m),s.set(u,f)}function h(u){const d=s.get(u);if(d){const A=u.index;A!==null&&d.version<A.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function K_(a,e,t,i){const n=i.isWebGL2;let s;function r(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,A){a.drawElements(s,A,o,d*l),t.update(A,s,1)}function u(d,A,g){if(g===0)return;let p,f;if(n)p=a,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,A,o,d*l,g),t.update(A,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function J_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function $_(a,e){return a[0]-e[0]}function j_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Z_(a,e,t){const i={},n=new Float32Array(8),s=new WeakMap,r=new Ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const A=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let v=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),C===!0&&(T=3);let U=h.attributes.position.count*T,Y=1;U>e.maxTextureSize&&(Y=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*Y*4*p),R=new Zf(N,U,Y,p);R.type=Pt,R.needsUpdate=!0;const P=T*4;for(let z=0;z<p;z++){const G=b[z],F=y[z],D=S[z],k=U*Y*4*z;for(let j=0;j<G.count;j++){const J=j*P;_===!0&&(r.fromBufferAttribute(G,j),N[k+J+0]=r.x,N[k+J+1]=r.y,N[k+J+2]=r.z,N[k+J+3]=0),x===!0&&(r.fromBufferAttribute(F,j),N[k+J+4]=r.x,N[k+J+5]=r.y,N[k+J+6]=r.z,N[k+J+7]=0),C===!0&&(r.fromBufferAttribute(D,j),N[k+J+8]=r.x,N[k+J+9]=r.y,N[k+J+10]=r.z,N[k+J+11]=D.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Be(U,Y)},s.set(h,f),h.addEventListener("dispose",v)}let m=0;for(let v=0;v<A.length;v++)m+=A[v];const E=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(a,"morphTargetBaseInfluence",E),d.getUniforms().setValue(a,"morphTargetInfluences",A),d.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}else{const g=A===void 0?0:A.length;let p=i[h.id];if(p===void 0||p.length!==g){p=[];for(let _=0;_<g;_++)p[_]=[_,0];i[h.id]=p}for(let _=0;_<g;_++){const x=p[_];x[0]=_,x[1]=A[_]}p.sort(j_);for(let _=0;_<8;_++)_<g&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort($_);const f=h.morphAttributes.position,m=h.morphAttributes.normal;let E=0;for(let _=0;_<8;_++){const x=o[_],C=x[0],b=x[1];C!==Number.MAX_SAFE_INTEGER&&b?(f&&h.getAttribute("morphTarget"+_)!==f[C]&&h.setAttribute("morphTarget"+_,f[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),n[_]=b,E+=b):(f&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}const v=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",v),d.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function ey(a,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const op=new Ot,ap=new Zf,lp=new ep,cp=new sp,wu=[],Su=[],Mu=new Float32Array(16),bu=new Float32Array(9),Bu=new Float32Array(4);function or(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let s=wu[n];if(s===void 0&&(s=new Float32Array(n),wu[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function ct(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function ht(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Ra(a,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function ty(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function iy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2fv(this.addr,e),ht(t,e)}}function ny(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;a.uniform3fv(this.addr,e),ht(t,e)}}function sy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4fv(this.addr,e),ht(t,e)}}function ry(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Bu.set(i),a.uniformMatrix2fv(this.addr,!1,Bu),ht(t,i)}}function oy(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;bu.set(i),a.uniformMatrix3fv(this.addr,!1,bu),ht(t,i)}}function ay(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Mu.set(i),a.uniformMatrix4fv(this.addr,!1,Mu),ht(t,i)}}function ly(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function cy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2iv(this.addr,e),ht(t,e)}}function hy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3iv(this.addr,e),ht(t,e)}}function uy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4iv(this.addr,e),ht(t,e)}}function dy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ay(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2uiv(this.addr,e),ht(t,e)}}function fy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3uiv(this.addr,e),ht(t,e)}}function py(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4uiv(this.addr,e),ht(t,e)}}function gy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||op,n)}function my(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lp,n)}function vy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||cp,n)}function _y(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ap,n)}function yy(a){switch(a){case 5126:return ty;case 35664:return iy;case 35665:return ny;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return Ay;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return _y}}function Ey(a,e){a.uniform1fv(this.addr,e)}function xy(a,e){const t=or(e,this.size,2);a.uniform2fv(this.addr,t)}function Iy(a,e){const t=or(e,this.size,3);a.uniform3fv(this.addr,t)}function Cy(a,e){const t=or(e,this.size,4);a.uniform4fv(this.addr,t)}function wy(a,e){const t=or(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Sy(a,e){const t=or(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function My(a,e){const t=or(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function by(a,e){a.uniform1iv(this.addr,e)}function By(a,e){a.uniform2iv(this.addr,e)}function Ty(a,e){a.uniform3iv(this.addr,e)}function Ry(a,e){a.uniform4iv(this.addr,e)}function Ly(a,e){a.uniform1uiv(this.addr,e)}function Dy(a,e){a.uniform2uiv(this.addr,e)}function Qy(a,e){a.uniform3uiv(this.addr,e)}function Py(a,e){a.uniform4uiv(this.addr,e)}function Ny(a,e,t){const i=this.cache,n=e.length,s=Ra(t,n);ct(i,s)||(a.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||op,s[r])}function Fy(a,e,t){const i=this.cache,n=e.length,s=Ra(t,n);ct(i,s)||(a.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||lp,s[r])}function Uy(a,e,t){const i=this.cache,n=e.length,s=Ra(t,n);ct(i,s)||(a.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||cp,s[r])}function Oy(a,e,t){const i=this.cache,n=e.length,s=Ra(t,n);ct(i,s)||(a.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ap,s[r])}function ky(a){switch(a){case 5126:return Ey;case 35664:return xy;case 35665:return Iy;case 35666:return Cy;case 35674:return wy;case 35675:return Sy;case 35676:return My;case 5124:case 35670:return by;case 35667:case 35671:return By;case 35668:case 35672:return Ty;case 35669:case 35673:return Ry;case 5125:return Ly;case 36294:return Dy;case 36295:return Qy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Oy}}class Gy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=yy(t.type)}}class zy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ky(t.type)}}class Vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Tu(a,e){a.seq.push(e),a.map[e.id]=e}function Hy(a,e,t){const i=a.name,n=i.length;for(ul.lastIndex=0;;){const s=ul.exec(i),r=ul.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Tu(t,c===void 0?new Gy(o,a,e):new zy(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Vy(o),Tu(t,u)),t=u}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);Hy(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Ru(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let Wy=0;function qy(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function Yy(a){switch(a){case St:return["Linear","( value )"];case Re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Lu(a,e,t){const i=a.getShaderParameter(e,35713),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+qy(a.getShaderSource(e),r)}else return n}function Xy(a,e){const t=Yy(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ky(a,e){let t;switch(e){case am:t="Linear";break;case lm:t="Reinhard";break;case cm:t="OptimizedCineon";break;case zf:t="ACESFilmic";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jy(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function $y(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jy(a,e){const t={},i=a.getProgramParameter(e,35721);for(let n=0;n<i;n++){const s=a.getActiveAttrib(e,n),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Ur(a){return a!==""}function Du(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(a){return a.replace(Zy,eE)}function eE(a,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gc(t)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(a){return a.replace(tE,iE)}function iE(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Nu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nE(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case $s:case js:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rE(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Gf:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case om:e="ENVMAP_BLENDING_ADD";break}return e}function aE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lE(a,e,t,i){const n=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=nE(t),c=sE(t),h=rE(t),u=oE(t),d=aE(t),A=t.isWebGL2?"":Jy(t),g=$y(s),p=n.createProgram();let f,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Ur).join(`
`),f.length>0&&(f+=`
`),m=[A,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`)):(f=[Nu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),m=[A,Nu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?be.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Xy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),r=Gc(r),r=Du(r,t),r=Qu(r,t),o=Gc(o),o=Du(o,t),o=Qu(o,t),r=Pu(r),o=Pu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=E+f+r,_=E+m+o,x=Ru(n,35633,v),C=Ru(n,35632,_);if(n.attachShader(p,x),n.attachShader(p,C),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),a.debug.checkShaderErrors){const S=n.getProgramInfoLog(p).trim(),T=n.getShaderInfoLog(x).trim(),U=n.getShaderInfoLog(C).trim();let Y=!0,N=!0;if(n.getProgramParameter(p,35714)===!1){Y=!1;const R=Lu(n,x,"vertex"),P=Lu(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+R+`
`+P)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:Y,programLog:S,vertexShader:{log:T,prefix:f},fragmentShader:{log:U,prefix:m}})}n.deleteShader(x),n.deleteShader(C);let b;this.getUniforms=function(){return b===void 0&&(b=new aa(n,p)),b};let y;return this.getAttributes=function(){return y===void 0&&(y=jy(n,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=C,this}let cE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uE(e),t.set(e,i)),i}}class uE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function dE(a,e,t,i,n,s,r){const o=new mh,l=new hE,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let A=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,S,T,U,Y){const N=U.fog,R=Y.geometry,P=y.isMeshStandardMaterial?U.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||P),G=z&&z.mapping===Ba?z.image.height:null,F=g[y.type];y.precision!==null&&(A=n.getMaxPrecision(y.precision),A!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",A,"instead."));const D=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,k=D!==void 0?D.length:0;let j=0;R.morphAttributes.position!==void 0&&(j=1),R.morphAttributes.normal!==void 0&&(j=2),R.morphAttributes.color!==void 0&&(j=3);let J,ee,se,he;if(F){const ze=xi[F];J=ze.vertexShader,ee=ze.fragmentShader}else J=y.vertexShader,ee=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const X=a.getRenderTarget(),Fe=y.alphaTest>0,ge=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:h,shaderID:F,shaderName:y.type,vertexShader:J,fragmentShader:ee,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:A,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:St,map:!!y.map,matcap:!!y.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:G,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Mm,tangentSpaceNormalMap:y.normalMapType===fh,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Re,clearcoat:ge,clearcoatMap:ge&&!!y.clearcoatMap,clearcoatRoughnessMap:ge&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Xs,alphaMap:!!y.alphaMap,alphaTest:Fe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&T.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Mi,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===wt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)S.push(T),S.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(m(S,y),E(S,y),S.push(a.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),y.push(o.mask)}function v(y){const S=g[y.type];let T;if(S){const U=xi[S];T=e0.clone(U.uniforms)}else T=y.uniforms;return T}function _(y,S){let T;for(let U=0,Y=c.length;U<Y;U++){const N=c[U];if(N.cacheKey===S){T=N,++T.usedTimes;break}}return T===void 0&&(T=new lE(a,S,y,s),c.push(T)),T}function x(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:_,releaseProgram:x,releaseShaderCache:C,programs:c,dispose:b}}function AE(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function i(s,r,o){a.get(s)[r]=o}function n(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function fE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Fu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Uu(){const a=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u,d,A,g,p,f){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:A,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},a[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=A,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=p,m.group=f),e++,m}function o(u,d,A,g,p,f){const m=r(u,d,A,g,p,f);A.transmission>0?i.push(m):A.transparent===!0?n.push(m):t.push(m)}function l(u,d,A,g,p,f){const m=r(u,d,A,g,p,f);A.transmission>0?i.unshift(m):A.transparent===!0?n.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||fE),i.length>1&&i.sort(d||Fu),n.length>1&&n.sort(d||Fu)}function h(){for(let u=e,d=a.length;u<d;u++){const A=a[u];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function pE(){let a=new WeakMap;function e(i,n){const s=a.get(i);let r;return s===void 0?(r=new Uu,a.set(i,[r])):n>=s.length?(r=new Uu,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function gE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new xe};break;case"SpotLight":t={position:new B,direction:new B,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new B,halfWidth:new B,halfHeight:new B};break}return a[e.id]=t,t}}}function mE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let vE=0;function _E(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function yE(a,e){const t=new gE,i=mE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new B);const s=new B,r=new we,o=new we;function l(h,u){let d=0,A=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,f=0,m=0,E=0,v=0,_=0,x=0,C=0,b=0,y=0;h.sort(_E);const S=u!==!0?Math.PI:1;for(let U=0,Y=h.length;U<Y;U++){const N=h[U],R=N.color,P=N.intensity,z=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=R.r*P*S,A+=R.g*P*S,g+=R.b*P*S;else if(N.isLightProbe)for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],P);else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const D=N.shadow,k=i.get(N);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=N.shadow.matrix,_++}n.directional[p]=F,p++}else if(N.isSpotLight){const F=t.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(R).multiplyScalar(P*S),F.distance=z,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[m]=F;const D=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,D.updateMatrices(N),N.castShadow&&y++),n.spotLightMatrix[m]=D.matrix,N.castShadow){const k=i.get(N);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=G,C++}m++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(R).multiplyScalar(P),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=F,E++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),F.distance=N.distance,F.decay=N.decay,N.castShadow){const D=N.shadow,k=i.get(N);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,k.shadowCameraNear=D.camera.near,k.shadowCameraFar=D.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=G,n.pointShadowMatrix[f]=N.shadow.matrix,x++}n.point[f]=F,f++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(P*S),F.groundColor.copy(N.groundColor).multiplyScalar(P*S),n.hemi[v]=F,v++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=A,n.ambient[2]=g;const T=n.hash;(T.directionalLength!==p||T.pointLength!==f||T.spotLength!==m||T.rectAreaLength!==E||T.hemiLength!==v||T.numDirectionalShadows!==_||T.numPointShadows!==x||T.numSpotShadows!==C||T.numSpotMaps!==b)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=E,n.point.length=f,n.hemi.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=C+b-y,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=y,T.directionalLength=p,T.pointLength=f,T.spotLength=m,T.rectAreaLength=E,T.hemiLength=v,T.numDirectionalShadows=_,T.numPointShadows=x,T.numSpotShadows=C,T.numSpotMaps=b,n.version=vE++)}function c(h,u){let d=0,A=0,g=0,p=0,f=0;const m=u.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const _=h[E];if(_.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const x=n.point[A];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),A++}else if(_.isHemisphereLight){const x=n.hemi[f];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:n}}function Ou(a,e){const t=new yE(a,e),i=[],n=[];function s(){i.length=0,n.length=0}function r(u){i.push(u)}function o(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function EE(a,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Ou(a,e),t.set(s,[l])):r>=o.length?(l=new Ou(a,e),o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class hp extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`;function wE(a,e,t){let i=new _h;const n=new Be,s=new Be,r=new Ye,o=new hp({depthPacking:Sm}),l=new xE,c={},h=t.maxTextureSize,u={0:wt,1:nn,2:zt},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:IE,fragmentShader:CE}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _e(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf,this.render=function(_,x,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const b=a.getRenderTarget(),y=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),T=a.state;T.setBlending(en),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let U=0,Y=_.length;U<Y;U++){const N=_[U],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const P=R.getFrameExtents();if(n.multiply(P),s.copy(R.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/P.x),n.x=s.x*P.x,R.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/P.y),n.y=s.y*P.y,R.mapSize.y=s.y)),R.map===null){const G=this.type!==Pr?{minFilter:pt,magFilter:pt}:{};R.map=new gi(n.x,n.y,G),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const z=R.getViewportCount();for(let G=0;G<z;G++){const F=R.getViewport(G);r.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),T.viewport(r),R.updateMatrices(N,G),i=R.getFrustum(),v(x,C,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===Pr&&m(R,C),R.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(b,y,S)};function m(_,x){const C=e.update(p);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,A.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new gi(n.x,n.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,a.setRenderTarget(_.mapPass),a.clear(),a.renderBufferDirect(x,null,C,d,p,null),A.uniforms.shadow_pass.value=_.mapPass.texture,A.uniforms.resolution.value=_.mapSize,A.uniforms.radius.value=_.radius,a.setRenderTarget(_.map),a.clear(),a.renderBufferDirect(x,null,C,A,p,null)}function E(_,x,C,b,y,S){let T=null;const U=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(U!==void 0?T=U:T=C.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const Y=T.uuid,N=x.uuid;let R=c[Y];R===void 0&&(R={},c[Y]=R);let P=R[N];P===void 0&&(P=T.clone(),R[N]=P),T=P}return T.visible=x.visible,T.wireframe=x.wireframe,S===Pr?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:u[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaTest,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(C.matrixWorld),T.nearDistance=b,T.farDistance=y),T}function v(_,x,C,b,y){if(_.visible===!1)return;if(_.layers.test(x.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===Pr)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);const U=e.update(_),Y=_.material;if(Array.isArray(Y)){const N=U.groups;for(let R=0,P=N.length;R<P;R++){const z=N[R],G=Y[z.materialIndex];if(G&&G.visible){const F=E(_,G,b,C.near,C.far,y);a.renderBufferDirect(C,null,U,F,_,z)}}}else if(Y.visible){const N=E(_,Y,b,C.near,C.far,y);a.renderBufferDirect(C,null,U,N,_,null)}}const T=_.children;for(let U=0,Y=T.length;U<Y;U++)v(T[U],x,C,b,y)}}function SE(a,e,t){const i=t.isWebGL2;function n(){let L=!1;const W=new Ye;let $=null;const ae=new Ye(0,0,0,0);return{setMask:function(ue){$!==ue&&!L&&(a.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Ue,dt,Et,Rn){Rn===!0&&(ue*=Et,Ue*=Et,dt*=Et),W.set(ue,Ue,dt,Et),ae.equals(W)===!1&&(a.clearColor(ue,Ue,dt,Et),ae.copy(W))},reset:function(){L=!1,$=null,ae.set(-1,0,0,0)}}}function s(){let L=!1,W=null,$=null,ae=null;return{setTest:function(ue){ue?Fe(2929):ge(2929)},setMask:function(ue){W!==ue&&!L&&(a.depthMask(ue),W=ue)},setFunc:function(ue){if($!==ue){switch(ue){case jg:a.depthFunc(512);break;case Zg:a.depthFunc(519);break;case em:a.depthFunc(513);break;case bc:a.depthFunc(515);break;case tm:a.depthFunc(514);break;case im:a.depthFunc(518);break;case nm:a.depthFunc(516);break;case sm:a.depthFunc(517);break;default:a.depthFunc(515)}$=ue}},setLocked:function(ue){L=ue},setClear:function(ue){ae!==ue&&(a.clearDepth(ue),ae=ue)},reset:function(){L=!1,W=null,$=null,ae=null}}}function r(){let L=!1,W=null,$=null,ae=null,ue=null,Ue=null,dt=null,Et=null,Rn=null;return{setTest:function(je){L||(je?Fe(2960):ge(2960))},setMask:function(je){W!==je&&!L&&(a.stencilMask(je),W=je)},setFunc:function(je,Qi,Jt){($!==je||ae!==Qi||ue!==Jt)&&(a.stencilFunc(je,Qi,Jt),$=je,ae=Qi,ue=Jt)},setOp:function(je,Qi,Jt){(Ue!==je||dt!==Qi||Et!==Jt)&&(a.stencilOp(je,Qi,Jt),Ue=je,dt=Qi,Et=Jt)},setLocked:function(je){L=je},setClear:function(je){Rn!==je&&(a.clearStencil(je),Rn=je)},reset:function(){L=!1,W=null,$=null,ae=null,ue=null,Ue=null,dt=null,Et=null,Rn=null}}}const o=new n,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},A={},g=new WeakMap,p=[],f=null,m=!1,E=null,v=null,_=null,x=null,C=null,b=null,y=null,S=!1,T=null,U=null,Y=null,N=null,R=null;const P=a.getParameter(35661);let z=!1,G=0;const F=a.getParameter(7938);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=G>=2);let D=null,k={};const j=a.getParameter(3088),J=a.getParameter(2978),ee=new Ye().fromArray(j),se=new Ye().fromArray(J);function he(L,W,$){const ae=new Uint8Array(4),ue=a.createTexture();a.bindTexture(L,ue),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let Ue=0;Ue<$;Ue++)a.texImage2D(W+Ue,0,6408,1,1,0,6408,5121,ae);return ue}const X={};X[3553]=he(3553,3553,1),X[34067]=he(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(bc),bt(!1),vi(Oh),Fe(2884),it(en);function Fe(L){d[L]!==!0&&(a.enable(L),d[L]=!0)}function ge(L){d[L]!==!1&&(a.disable(L),d[L]=!1)}function ye(L,W){return A[L]!==W?(a.bindFramebuffer(L,W),A[L]=W,i&&(L===36009&&(A[36160]=W),L===36160&&(A[36009]=W)),!0):!1}function le(L,W){let $=p,ae=!1;if(L)if($=g.get(W),$===void 0&&($=[],g.set(W,$)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if($.length!==ue.length||$[0]!==36064){for(let Ue=0,dt=ue.length;Ue<dt;Ue++)$[Ue]=36064+Ue;$.length=ue.length,ae=!0}}else $[0]!==36064&&($[0]=36064,ae=!0);else $[0]!==1029&&($[0]=1029,ae=!0);ae&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ze(L){return f!==L?(a.useProgram(L),f=L,!0):!1}const Se={[Gs]:32774,[Gg]:32778,[zg]:32779};if(i)Se[Vh]=32775,Se[Hh]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[Vh]=L.MIN_EXT,Se[Hh]=L.MAX_EXT)}const me={[Vg]:0,[Hg]:1,[Wg]:768,[Of]:770,[$g]:776,[Kg]:774,[Yg]:772,[qg]:769,[kf]:771,[Jg]:775,[Xg]:773};function it(L,W,$,ae,ue,Ue,dt,Et){if(L===en){m===!0&&(ge(3042),m=!1);return}if(m===!1&&(Fe(3042),m=!0),L!==kg){if(L!==E||Et!==S){if((v!==Gs||C!==Gs)&&(a.blendEquation(32774),v=Gs,C=Gs),Et)switch(L){case Xs:a.blendFuncSeparate(1,771,1,771);break;case kh:a.blendFunc(1,1);break;case Gh:a.blendFuncSeparate(0,769,0,1);break;case zh:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:a.blendFuncSeparate(770,771,1,771);break;case kh:a.blendFunc(770,1);break;case Gh:a.blendFuncSeparate(0,769,0,1);break;case zh:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,x=null,b=null,y=null,E=L,S=Et}return}ue=ue||W,Ue=Ue||$,dt=dt||ae,(W!==v||ue!==C)&&(a.blendEquationSeparate(Se[W],Se[ue]),v=W,C=ue),($!==_||ae!==x||Ue!==b||dt!==y)&&(a.blendFuncSeparate(me[$],me[ae],me[Ue],me[dt]),_=$,x=ae,b=Ue,y=dt),E=L,S=null}function kt(L,W){L.side===zt?ge(2884):Fe(2884);let $=L.side===wt;W&&($=!$),bt($),L.blending===Xs&&L.transparent===!1?it(en):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ae=L.stencilWrite;c.setTest(ae),ae&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(32926):ge(32926)}function bt(L){T!==L&&(L?a.frontFace(2304):a.frontFace(2305),T=L)}function vi(L){L!==Fg?(Fe(2884),L!==U&&(L===Oh?a.cullFace(1029):L===Ug?a.cullFace(1028):a.cullFace(1032))):ge(2884),U=L}function gt(L){L!==Y&&(z&&a.lineWidth(L),Y=L)}function We(L,W,$){L?(Fe(32823),(N!==W||R!==$)&&(a.polygonOffset(W,$),N=W,R=$)):ge(32823)}function Li(L){L?Fe(3089):ge(3089)}function Di(L){L===void 0&&(L=33984+P-1),D!==L&&(a.activeTexture(L),D=L)}function M(L,W,$){$===void 0&&(D===null?$=33984+P-1:$=D);let ae=k[$];ae===void 0&&(ae={type:void 0,texture:void 0},k[$]=ae),(ae.type!==L||ae.texture!==W)&&(D!==$&&(a.activeTexture($),D=$),a.bindTexture(L,W||X[L]),ae.type=L,ae.texture=W)}function I(){const L=k[D];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){ee.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function de(L){se.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),se.copy(L))}function Ne(L,W){let $=u.get(W);$===void 0&&($=new WeakMap,u.set(W,$));let ae=$.get(L);ae===void 0&&(ae=a.getUniformBlockIndex(W,L.name),$.set(L,ae))}function $e(L,W){const ae=u.get(W).get(L);h.get(L)!==ae&&(a.uniformBlockBinding(W,ae,L.__bindingPointIndex),h.set(L,ae))}function ut(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},D=null,k={},A={},g=new WeakMap,p=[],f=null,m=!1,E=null,v=null,_=null,x=null,C=null,b=null,y=null,S=!1,T=null,U=null,Y=null,N=null,R=null,ee.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:ge,bindFramebuffer:ye,drawBuffers:le,useProgram:ze,setBlending:it,setMaterial:kt,setFlipSided:bt,setCullFace:vi,setLineWidth:gt,setPolygonOffset:We,setScissorTest:Li,activeTexture:Di,bindTexture:M,unbindTexture:I,compressedTexImage2D:H,compressedTexImage3D:Z,texImage2D:ve,texImage3D:ce,updateUBOMapping:Ne,uniformBlockBinding:$e,texStorage2D:K,texStorage3D:fe,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:Ie,compressedTexSubImage3D:oe,scissor:pe,viewport:de,reset:ut}}function ME(a,e,t,i,n,s,r){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,I){return m?new OffscreenCanvas(M,I):to("canvas")}function v(M,I,H,Z){let te=1;if((M.width>Z||M.height>Z)&&(te=Z/Math.max(M.width,M.height)),te<1||I===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const re=I?Ea:Math.floor,Ie=re(te*M.width),oe=re(te*M.height);p===void 0&&(p=E(Ie,oe));const K=H?E(Ie,oe):p;return K.width=Ie,K.height=oe,K.getContext("2d").drawImage(M,0,0,Ie,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Ie+"x"+oe+")."),K}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function _(M){return Uc(M.width)&&Uc(M.height)}function x(M){return o?!1:M.wrapS!==Ct||M.wrapT!==Ct||M.minFilter!==pt&&M.minFilter!==tt}function C(M,I){return M.generateMipmaps&&I&&M.minFilter!==pt&&M.minFilter!==tt}function b(M){a.generateMipmap(M)}function y(M,I,H,Z,te=!1){if(o===!1)return I;if(M!==null){if(a[M]!==void 0)return a[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re=I;return I===6403&&(H===5126&&(re=33326),H===5131&&(re=33325),H===5121&&(re=33321)),I===33319&&(H===5126&&(re=33328),H===5131&&(re=33327),H===5121&&(re=33323)),I===6408&&(H===5126&&(re=34836),H===5131&&(re=34842),H===5121&&(re=Z===Re&&te===!1?35907:32856),H===32819&&(re=32854),H===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function S(M,I,H){return C(M,H)===!0||M.isFramebufferTexture&&M.minFilter!==pt&&M.minFilter!==tt?Math.log2(Math.max(I.width,I.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?I.mipmaps.length:1}function T(M){return M===pt||M===va||M===_a?9728:9729}function U(M){const I=M.target;I.removeEventListener("dispose",U),N(I),I.isVideoTexture&&g.delete(I)}function Y(M){const I=M.target;I.removeEventListener("dispose",Y),P(I)}function N(M){const I=i.get(M);if(I.__webglInit===void 0)return;const H=M.source,Z=f.get(H);if(Z){const te=Z[I.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(M),Object.keys(Z).length===0&&f.delete(H)}i.remove(M)}function R(M){const I=i.get(M);a.deleteTexture(I.__webglTexture);const H=M.source,Z=f.get(H);delete Z[I.__cacheKey],r.memory.textures--}function P(M){const I=M.texture,H=i.get(M),Z=i.get(I);if(Z.__webglTexture!==void 0&&(a.deleteTexture(Z.__webglTexture),r.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)a.deleteFramebuffer(H.__webglFramebuffer[te]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[te]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let te=0,re=I.length;te<re;te++){const Ie=i.get(I[te]);Ie.__webglTexture&&(a.deleteTexture(Ie.__webglTexture),r.memory.textures--),i.remove(I[te])}i.remove(I),i.remove(M)}let z=0;function G(){z=0}function F(){const M=z;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),z+=1,M}function D(M){const I=[];return I.push(M.wrapS),I.push(M.wrapT),I.push(M.wrapR||0),I.push(M.magFilter),I.push(M.minFilter),I.push(M.anisotropy),I.push(M.internalFormat),I.push(M.format),I.push(M.type),I.push(M.generateMipmaps),I.push(M.premultiplyAlpha),I.push(M.flipY),I.push(M.unpackAlignment),I.push(M.encoding),I.join()}function k(M,I){const H=i.get(M);if(M.isVideoTexture&&Li(M),M.isRenderTargetTexture===!1&&M.version>0&&H.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,M,I);return}}t.bindTexture(3553,H.__webglTexture,33984+I)}function j(M,I){const H=i.get(M);if(M.version>0&&H.__version!==M.version){ge(H,M,I);return}t.bindTexture(35866,H.__webglTexture,33984+I)}function J(M,I){const H=i.get(M);if(M.version>0&&H.__version!==M.version){ge(H,M,I);return}t.bindTexture(32879,H.__webglTexture,33984+I)}function ee(M,I){const H=i.get(M);if(M.version>0&&H.__version!==M.version){ye(H,M,I);return}t.bindTexture(34067,H.__webglTexture,33984+I)}const se={[sn]:10497,[Ct]:33071,[Zr]:33648},he={[pt]:9728,[va]:9984,[_a]:9986,[tt]:9729,[hh]:9985,[rn]:9987};function X(M,I,H){if(H?(a.texParameteri(M,10242,se[I.wrapS]),a.texParameteri(M,10243,se[I.wrapT]),(M===32879||M===35866)&&a.texParameteri(M,32882,se[I.wrapR]),a.texParameteri(M,10240,he[I.magFilter]),a.texParameteri(M,10241,he[I.minFilter])):(a.texParameteri(M,10242,33071),a.texParameteri(M,10243,33071),(M===32879||M===35866)&&a.texParameteri(M,32882,33071),(I.wrapS!==Ct||I.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(M,10240,T(I.magFilter)),a.texParameteri(M,10241,T(I.minFilter)),I.minFilter!==pt&&I.minFilter!==tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(I.type===Pt&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===Nt&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||i.get(I).__currentAnisotropy)&&(a.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,n.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy)}}function Fe(M,I){let H=!1;M.__webglInit===void 0&&(M.__webglInit=!0,I.addEventListener("dispose",U));const Z=I.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const re=D(I);if(re!==M.__cacheKey){te[re]===void 0&&(te[re]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,H=!0),te[re].usedTimes++;const Ie=te[M.__cacheKey];Ie!==void 0&&(te[M.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(I)),M.__cacheKey=re,M.__webglTexture=te[re].texture}return H}function ge(M,I,H){let Z=3553;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Z=35866),I.isData3DTexture&&(Z=32879);const te=Fe(M,I),re=I.source;t.bindTexture(Z,M.__webglTexture,33984+H);const Ie=i.get(re);if(re.version!==Ie.__version||te===!0){t.activeTexture(33984+H),a.pixelStorei(37440,I.flipY),a.pixelStorei(37441,I.premultiplyAlpha),a.pixelStorei(3317,I.unpackAlignment),a.pixelStorei(37443,0);const oe=x(I)&&_(I.image)===!1;let K=v(I.image,oe,!1,h);K=Di(I,K);const fe=_(K)||o,ve=s.convert(I.format,I.encoding);let ce=s.convert(I.type),pe=y(I.internalFormat,ve,ce,I.encoding,I.isVideoTexture);X(Z,I,fe);let de;const Ne=I.mipmaps,$e=o&&I.isVideoTexture!==!0,ut=Ie.__version===void 0||te===!0,L=S(I,K,fe);if(I.isDepthTexture)pe=6402,o?I.type===Pt?pe=36012:I.type===Jn?pe=33190:I.type===Ks?pe=35056:pe=33189:I.type===Pt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===jn&&pe===6402&&I.type!==Hf&&I.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Jn,ce=s.convert(I.type)),I.format===Zs&&pe===6402&&(pe=34041,I.type!==Ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=Ks,ce=s.convert(I.type))),ut&&($e?t.texStorage2D(3553,1,pe,K.width,K.height):t.texImage2D(3553,0,pe,K.width,K.height,0,ve,ce,null));else if(I.isDataTexture)if(Ne.length>0&&fe){$e&&ut&&t.texStorage2D(3553,L,pe,Ne[0].width,Ne[0].height);for(let W=0,$=Ne.length;W<$;W++)de=Ne[W],$e?t.texSubImage2D(3553,W,0,0,de.width,de.height,ve,ce,de.data):t.texImage2D(3553,W,pe,de.width,de.height,0,ve,ce,de.data);I.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(3553,L,pe,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,ve,ce,K.data)):t.texImage2D(3553,0,pe,K.width,K.height,0,ve,ce,K.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){$e&&ut&&t.texStorage3D(35866,L,pe,Ne[0].width,Ne[0].height,K.depth);for(let W=0,$=Ne.length;W<$;W++)de=Ne[W],I.format!==ot?ve!==null?$e?t.compressedTexSubImage3D(35866,W,0,0,0,de.width,de.height,K.depth,ve,de.data,0,0):t.compressedTexImage3D(35866,W,pe,de.width,de.height,K.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,W,0,0,0,de.width,de.height,K.depth,ve,ce,de.data):t.texImage3D(35866,W,pe,de.width,de.height,K.depth,0,ve,ce,de.data)}else{$e&&ut&&t.texStorage2D(3553,L,pe,Ne[0].width,Ne[0].height);for(let W=0,$=Ne.length;W<$;W++)de=Ne[W],I.format!==ot?ve!==null?$e?t.compressedTexSubImage2D(3553,W,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(3553,W,pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,W,0,0,de.width,de.height,ve,ce,de.data):t.texImage2D(3553,W,pe,de.width,de.height,0,ve,ce,de.data)}else if(I.isDataArrayTexture)$e?(ut&&t.texStorage3D(35866,L,pe,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,ve,ce,K.data)):t.texImage3D(35866,0,pe,K.width,K.height,K.depth,0,ve,ce,K.data);else if(I.isData3DTexture)$e?(ut&&t.texStorage3D(32879,L,pe,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,ve,ce,K.data)):t.texImage3D(32879,0,pe,K.width,K.height,K.depth,0,ve,ce,K.data);else if(I.isFramebufferTexture){if(ut)if($e)t.texStorage2D(3553,L,pe,K.width,K.height);else{let W=K.width,$=K.height;for(let ae=0;ae<L;ae++)t.texImage2D(3553,ae,pe,W,$,0,ve,ce,null),W>>=1,$>>=1}}else if(Ne.length>0&&fe){$e&&ut&&t.texStorage2D(3553,L,pe,Ne[0].width,Ne[0].height);for(let W=0,$=Ne.length;W<$;W++)de=Ne[W],$e?t.texSubImage2D(3553,W,0,0,ve,ce,de):t.texImage2D(3553,W,pe,ve,ce,de);I.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(3553,L,pe,K.width,K.height),t.texSubImage2D(3553,0,0,0,ve,ce,K)):t.texImage2D(3553,0,pe,ve,ce,K);C(I,fe)&&b(Z),Ie.__version=re.version,I.onUpdate&&I.onUpdate(I)}M.__version=I.version}function ye(M,I,H){if(I.image.length!==6)return;const Z=Fe(M,I),te=I.source;t.bindTexture(34067,M.__webglTexture,33984+H);const re=i.get(te);if(te.version!==re.__version||Z===!0){t.activeTexture(33984+H),a.pixelStorei(37440,I.flipY),a.pixelStorei(37441,I.premultiplyAlpha),a.pixelStorei(3317,I.unpackAlignment),a.pixelStorei(37443,0);const Ie=I.isCompressedTexture||I.image[0].isCompressedTexture,oe=I.image[0]&&I.image[0].isDataTexture,K=[];for(let W=0;W<6;W++)!Ie&&!oe?K[W]=v(I.image[W],!1,!0,c):K[W]=oe?I.image[W].image:I.image[W],K[W]=Di(I,K[W]);const fe=K[0],ve=_(fe)||o,ce=s.convert(I.format,I.encoding),pe=s.convert(I.type),de=y(I.internalFormat,ce,pe,I.encoding),Ne=o&&I.isVideoTexture!==!0,$e=re.__version===void 0||Z===!0;let ut=S(I,fe,ve);X(34067,I,ve);let L;if(Ie){Ne&&$e&&t.texStorage2D(34067,ut,de,fe.width,fe.height);for(let W=0;W<6;W++){L=K[W].mipmaps;for(let $=0;$<L.length;$++){const ae=L[$];I.format!==ot?ce!==null?Ne?t.compressedTexSubImage2D(34069+W,$,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(34069+W,$,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+W,$,0,0,ae.width,ae.height,ce,pe,ae.data):t.texImage2D(34069+W,$,de,ae.width,ae.height,0,ce,pe,ae.data)}}}else{L=I.mipmaps,Ne&&$e&&(L.length>0&&ut++,t.texStorage2D(34067,ut,de,K[0].width,K[0].height));for(let W=0;W<6;W++)if(oe){Ne?t.texSubImage2D(34069+W,0,0,0,K[W].width,K[W].height,ce,pe,K[W].data):t.texImage2D(34069+W,0,de,K[W].width,K[W].height,0,ce,pe,K[W].data);for(let $=0;$<L.length;$++){const ue=L[$].image[W].image;Ne?t.texSubImage2D(34069+W,$+1,0,0,ue.width,ue.height,ce,pe,ue.data):t.texImage2D(34069+W,$+1,de,ue.width,ue.height,0,ce,pe,ue.data)}}else{Ne?t.texSubImage2D(34069+W,0,0,0,ce,pe,K[W]):t.texImage2D(34069+W,0,de,ce,pe,K[W]);for(let $=0;$<L.length;$++){const ae=L[$];Ne?t.texSubImage2D(34069+W,$+1,0,0,ce,pe,ae.image[W]):t.texImage2D(34069+W,$+1,de,ce,pe,ae.image[W])}}}C(I,ve)&&b(34067),re.__version=te.version,I.onUpdate&&I.onUpdate(I)}M.__version=I.version}function le(M,I,H,Z,te){const re=s.convert(H.format,H.encoding),Ie=s.convert(H.type),oe=y(H.internalFormat,re,Ie,H.encoding);i.get(I).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,oe,I.width,I.height,I.depth,0,re,Ie,null):t.texImage2D(te,0,oe,I.width,I.height,0,re,Ie,null)),t.bindFramebuffer(36160,M),We(I)?d.framebufferTexture2DMultisampleEXT(36160,Z,te,i.get(H).__webglTexture,0,gt(I)):(te===3553||te>=34069&&te<=34074)&&a.framebufferTexture2D(36160,Z,te,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(M,I,H){if(a.bindRenderbuffer(36161,M),I.depthBuffer&&!I.stencilBuffer){let Z=33189;if(H||We(I)){const te=I.depthTexture;te&&te.isDepthTexture&&(te.type===Pt?Z=36012:te.type===Jn&&(Z=33190));const re=gt(I);We(I)?d.renderbufferStorageMultisampleEXT(36161,re,Z,I.width,I.height):a.renderbufferStorageMultisample(36161,re,Z,I.width,I.height)}else a.renderbufferStorage(36161,Z,I.width,I.height);a.framebufferRenderbuffer(36160,36096,36161,M)}else if(I.depthBuffer&&I.stencilBuffer){const Z=gt(I);H&&We(I)===!1?a.renderbufferStorageMultisample(36161,Z,35056,I.width,I.height):We(I)?d.renderbufferStorageMultisampleEXT(36161,Z,35056,I.width,I.height):a.renderbufferStorage(36161,34041,I.width,I.height),a.framebufferRenderbuffer(36160,33306,36161,M)}else{const Z=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let te=0;te<Z.length;te++){const re=Z[te],Ie=s.convert(re.format,re.encoding),oe=s.convert(re.type),K=y(re.internalFormat,Ie,oe,re.encoding),fe=gt(I);H&&We(I)===!1?a.renderbufferStorageMultisample(36161,fe,K,I.width,I.height):We(I)?d.renderbufferStorageMultisampleEXT(36161,fe,K,I.width,I.height):a.renderbufferStorage(36161,K,I.width,I.height)}}a.bindRenderbuffer(36161,null)}function Se(M,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),k(I.depthTexture,0);const Z=i.get(I.depthTexture).__webglTexture,te=gt(I);if(I.depthTexture.format===jn)We(I)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,te):a.framebufferTexture2D(36160,36096,3553,Z,0);else if(I.depthTexture.format===Zs)We(I)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,te):a.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function me(M){const I=i.get(M),H=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!I.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(I.__webglFramebuffer,M)}else if(H){I.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,I.__webglFramebuffer[Z]),I.__webglDepthbuffer[Z]=a.createRenderbuffer(),ze(I.__webglDepthbuffer[Z],M,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=a.createRenderbuffer(),ze(I.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function it(M,I,H){const Z=i.get(M);I!==void 0&&le(Z.__webglFramebuffer,M,M.texture,36064,3553),H!==void 0&&me(M)}function kt(M){const I=M.texture,H=i.get(M),Z=i.get(I);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=I.version,r.memory.textures++);const te=M.isWebGLCubeRenderTarget===!0,re=M.isWebGLMultipleRenderTargets===!0,Ie=_(M)||o;if(te){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)H.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),re)if(n.drawBuffers){const oe=M.texture;for(let K=0,fe=oe.length;K<fe;K++){const ve=i.get(oe[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&We(M)===!1){const oe=re?I:[I];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let K=0;K<oe.length;K++){const fe=oe[K];H.__webglColorRenderbuffer[K]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[K]);const ve=s.convert(fe.format,fe.encoding),ce=s.convert(fe.type),pe=y(fe.internalFormat,ve,ce,fe.encoding,M.isXRRenderTarget===!0),de=gt(M);a.renderbufferStorageMultisample(36161,de,pe,M.width,M.height),a.framebufferRenderbuffer(36160,36064+K,36161,H.__webglColorRenderbuffer[K])}a.bindRenderbuffer(36161,null),M.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Z.__webglTexture),X(34067,I,Ie);for(let oe=0;oe<6;oe++)le(H.__webglFramebuffer[oe],M,I,36064,34069+oe);C(I,Ie)&&b(34067),t.unbindTexture()}else if(re){const oe=M.texture;for(let K=0,fe=oe.length;K<fe;K++){const ve=oe[K],ce=i.get(ve);t.bindTexture(3553,ce.__webglTexture),X(3553,ve,Ie),le(H.__webglFramebuffer,M,ve,36064+K,3553),C(ve,Ie)&&b(3553)}t.unbindTexture()}else{let oe=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?oe=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Z.__webglTexture),X(oe,I,Ie),le(H.__webglFramebuffer,M,I,36064,oe),C(I,Ie)&&b(oe),t.unbindTexture()}M.depthBuffer&&me(M)}function bt(M){const I=_(M)||o,H=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,te=H.length;Z<te;Z++){const re=H[Z];if(C(re,I)){const Ie=M.isWebGLCubeRenderTarget?34067:3553,oe=i.get(re).__webglTexture;t.bindTexture(Ie,oe),b(Ie),t.unbindTexture()}}}function vi(M){if(o&&M.samples>0&&We(M)===!1){const I=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],H=M.width,Z=M.height;let te=16384;const re=[],Ie=M.stencilBuffer?33306:36096,oe=i.get(M),K=M.isWebGLMultipleRenderTargets===!0;if(K)for(let fe=0;fe<I.length;fe++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let fe=0;fe<I.length;fe++){re.push(36064+fe),M.depthBuffer&&re.push(Ie);const ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ve===!1&&(M.depthBuffer&&(te|=256),M.stencilBuffer&&(te|=1024)),K&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[fe]),ve===!0&&(a.invalidateFramebuffer(36008,[Ie]),a.invalidateFramebuffer(36009,[Ie])),K){const ce=i.get(I[fe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ce,0)}a.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,9728),A&&a.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let fe=0;fe<I.length;fe++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,oe.__webglColorRenderbuffer[fe]);const ve=i.get(I[fe]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,ve,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function gt(M){return Math.min(u,M.samples)}function We(M){const I=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Li(M){const I=r.render.frame;g.get(M)!==I&&(g.set(M,I),M.update())}function Di(M,I){const H=M.encoding,Z=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Fc||H!==St&&(H===Re?o===!1?e.has("EXT_sRGB")===!0&&Z===ot?(M.format=Fc,M.minFilter=tt,M.generateMipmaps=!1):I=jf.sRGBToLinear(I):(Z!==ot||te!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),I}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=it,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=vi,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=We}function bE(a,e,t){const i=t.isWebGL2;function n(s,r=null){let o;if(s===Qt)return 5121;if(s===fm)return 32819;if(s===pm)return 32820;if(s===um)return 5120;if(s===dm)return 5122;if(s===Hf)return 5123;if(s===Am)return 5124;if(s===Jn)return 5125;if(s===Pt)return 5126;if(s===Nt)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gm)return 6406;if(s===ot)return 6408;if(s===vm)return 6409;if(s===_m)return 6410;if(s===jn)return 6402;if(s===Zs)return 34041;if(s===Nr)return 6403;if(s===mm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Fc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ym)return 36244;if(s===Fr)return 33319;if(s===Em)return 33320;if(s===xm)return 36249;if(s===sa||s===Ua||s===Oa||s===ra)if(r===Re)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tc||s===Wh||s===Rc||s===qh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lc||s===Dc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Lc)return r===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Dc)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qc||s===Yh||s===Xh||s===Kh||s===Jh||s===$h||s===jh||s===Zh||s===eu||s===tu||s===iu||s===nu||s===su||s===ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Qc)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zh)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eu)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tu)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===iu)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nu)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===su)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ru)return r===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Pc)return r===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ks?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:n}}class BE extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xn extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const E=new xn;E.matrixAutoUpdate=!1,E.visible=!1,c.joints[p.jointName]=E,c.add(E)}const m=c.joints[p.jointName];f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),A=.02,g=.005;c.inputState.pinching&&d>A+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=A-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class RE extends Ot{constructor(e,t,i,n,s,r,o,l,c,h){if(h=h!==void 0?h:jn,h!==jn&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jn&&(i=Jn),i===void 0&&h===Zs&&(i=Ks),super(null,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class LE extends ri{constructor(e,t){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,A=null;const g=t.getContextAttributes();let p=null,f=null;const m=[],E=[],v=new yt;v.layers.enable(1),v.viewport=new Ye;const _=new yt;_.layers.enable(2),_.viewport=new Ye;const x=[v,_],C=new BE;C.layers.enable(1),C.layers.enable(2);let b=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=m[D];return k===void 0&&(k=new dl,m[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=m[D];return k===void 0&&(k=new dl,m[D]=k),k.getGripSpace()},this.getHand=function(D){let k=m[D];return k===void 0&&(k=new dl,m[D]=k),k.getHandSpace()};function S(D){const k=E.indexOf(D.inputSource);if(k===-1)return;const j=m[k];j!==void 0&&j.dispatchEvent({type:D.type,data:D.inputSource})}function T(){n.removeEventListener("select",S),n.removeEventListener("selectstart",S),n.removeEventListener("selectend",S),n.removeEventListener("squeeze",S),n.removeEventListener("squeezestart",S),n.removeEventListener("squeezeend",S),n.removeEventListener("end",T),n.removeEventListener("inputsourceschange",U);for(let D=0;D<m.length;D++){const k=E[D];k!==null&&(E[D]=null,m[D].disconnect(k))}b=null,y=null,e.setRenderTarget(p),d=null,u=null,h=null,n=null,f=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return A},this.getSession=function(){return n},this.setSession=async function(D){if(n=D,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",T),n.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,k),n.updateRenderState({baseLayer:d}),f=new gi(d.framebufferWidth,d.framebufferHeight,{format:ot,type:Qt,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,j=null,J=null;g.depth&&(J=g.stencil?35056:33190,k=g.stencil?Zs:jn,j=g.stencil?Ks:Jn);const ee={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(ee),n.updateRenderState({layers:[u]}),f=new gi(u.textureWidth,u.textureHeight,{format:ot,type:Qt,depthTexture:new RE(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const se=e.properties.get(f);se.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await n.requestReferenceSpace(o),F.setContext(n),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(D){for(let k=0;k<D.removed.length;k++){const j=D.removed[k],J=E.indexOf(j);J>=0&&(E[J]=null,m[J].dispatchEvent({type:"disconnected",data:j}))}for(let k=0;k<D.added.length;k++){const j=D.added[k];let J=E.indexOf(j);if(J===-1){for(let se=0;se<m.length;se++)if(se>=E.length){E.push(j),J=se;break}else if(E[se]===null){E[se]=j,J=se;break}if(J===-1)break}const ee=m[J];ee&&ee.dispatchEvent({type:"connected",data:j})}}const Y=new B,N=new B;function R(D,k,j){Y.setFromMatrixPosition(k.matrixWorld),N.setFromMatrixPosition(j.matrixWorld);const J=Y.distanceTo(N),ee=k.projectionMatrix.elements,se=j.projectionMatrix.elements,he=ee[14]/(ee[10]-1),X=ee[14]/(ee[10]+1),Fe=(ee[9]+1)/ee[5],ge=(ee[9]-1)/ee[5],ye=(ee[8]-1)/ee[0],le=(se[8]+1)/se[0],ze=he*ye,Se=he*le,me=J/(-ye+le),it=me*-ye;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(it),D.translateZ(me),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const kt=he+me,bt=X+me,vi=ze-it,gt=Se+(J-it),We=Fe*X/bt*kt,Li=ge*X/bt*kt;D.projectionMatrix.makePerspective(vi,gt,We,Li,kt,bt)}function P(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(n===null)return;C.near=_.near=v.near=D.near,C.far=_.far=v.far=D.far,(b!==C.near||y!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),b=C.near,y=C.far);const k=D.parent,j=C.cameras;P(C,k);for(let ee=0;ee<j.length;ee++)P(j[ee],k);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.matrix.copy(C.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const J=D.children;for(let ee=0,se=J.length;ee<se;ee++)J[ee].updateMatrixWorld(!0);j.length===2?R(C,v,_):C.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(D){u!==null&&(u.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let z=null;function G(D,k){if(c=k.getViewerPose(l||r),A=k,c!==null){const j=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let J=!1;j.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let ee=0;ee<j.length;ee++){const se=j[ee];let he=null;if(d!==null)he=d.getViewport(se);else{const Fe=h.getViewSubImage(u,se);he=Fe.viewport,ee===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,u.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let X=x[ee];X===void 0&&(X=new yt,X.layers.enable(ee),X.viewport=new Ye,x[ee]=X),X.matrix.fromArray(se.transform.matrix),X.projectionMatrix.fromArray(se.projectionMatrix),X.viewport.set(he.x,he.y,he.width,he.height),ee===0&&C.matrix.copy(X.matrix),J===!0&&C.cameras.push(X)}}for(let j=0;j<m.length;j++){const J=E[j],ee=m[j];J!==null&&ee!==void 0&&ee.update(J,k,l||r)}z&&z(D,k),A=null}const F=new rp;F.setAnimationLoop(G),this.setAnimationLoop=function(D){z=D},this.dispose=function(){}}}function DE(a,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,m,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(p,f):f.isMeshToonMaterial?(n(p,f),h(p,f)):f.isMeshPhongMaterial?(n(p,f),c(p,f)):f.isMeshStandardMaterial?(n(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,v)):f.isMeshMatcapMaterial?(n(p,f),A(p,f)):f.isMeshDepthMaterial?n(p,f):f.isMeshDistanceMaterial?(n(p,f),g(p,f)):f.isMeshNormalMaterial?n(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?o(p,f,m,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===wt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===wt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const m=e.get(f).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let E;f.map?E=f.map:f.specularMap?E=f.specularMap:f.displacementMap?E=f.displacementMap:f.normalMap?E=f.normalMap:f.bumpMap?E=f.bumpMap:f.roughnessMap?E=f.roughnessMap:f.metalnessMap?E=f.metalnessMap:f.alphaMap?E=f.alphaMap:f.emissiveMap?E=f.emissiveMap:f.clearcoatMap?E=f.clearcoatMap:f.clearcoatNormalMap?E=f.clearcoatNormalMap:f.clearcoatRoughnessMap?E=f.clearcoatRoughnessMap:f.iridescenceMap?E=f.iridescenceMap:f.iridescenceThicknessMap?E=f.iridescenceThicknessMap:f.specularIntensityMap?E=f.specularIntensityMap:f.specularColorMap?E=f.specularColorMap:f.transmissionMap?E=f.transmissionMap:f.thicknessMap?E=f.thicknessMap:f.sheenColorMap?E=f.sheenColorMap:f.sheenRoughnessMap&&(E=f.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,m,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*m,p.scale.value=E*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let m;f.map?m=f.map:f.alphaMap&&(m=f.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,m){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===wt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function A(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function QE(a,e,t,i){let n={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(E,v){const _=v.program;i.uniformBlockBinding(E,_)}function c(E,v){let _=n[E.id];_===void 0&&(g(E),_=h(E),n[E.id]=_,E.addEventListener("dispose",f));const x=v.program;i.updateUBOMapping(E,x);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function h(E){const v=u();E.__bindingPointIndex=v;const _=a.createBuffer(),x=E.__size,C=E.usage;return a.bindBuffer(35345,_),a.bufferData(35345,x,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,_),_}function u(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=n[E.id],_=E.uniforms,x=E.__cache;a.bindBuffer(35345,v);for(let C=0,b=_.length;C<b;C++){const y=_[C];if(A(y,C,x)===!0){const S=y.value,T=y.__offset;typeof S=="number"?(y.__data[0]=S,a.bufferSubData(35345,T,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):S.toArray(y.__data),a.bufferSubData(35345,T,y.__data))}}a.bindBuffer(35345,null)}function A(E,v,_){const x=E.value;if(_[v]===void 0)return typeof x=="number"?_[v]=x:_[v]=x.clone(),!0;if(typeof x=="number"){if(_[v]!==x)return _[v]=x,!0}else{const C=_[v];if(C.equals(x)===!1)return C.copy(x),!0}return!1}function g(E){const v=E.uniforms;let _=0;const x=16;let C=0;for(let b=0,y=v.length;b<y;b++){const S=v[b],T=p(S);if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=_,b>0){C=_%x;const U=x-C;C!==0&&U-T.boundary<0&&(_+=x-C,S.__offset=_)}_+=T.storage}return C=_%x,C>0&&(_+=x-C),E.__size=_,E.__cache={},this}function p(E){const v=E.value,_={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function f(E){const v=E.target;v.removeEventListener("dispose",f);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function m(){for(const E in n)a.deleteBuffer(n[E]);r=[],n={},s={}}return{bind:l,update:c,dispose:m}}function PE(){const a=to("canvas");return a.style.display="block",a}function up(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:PE(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,n=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,d=null;const A=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=St,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,m=0,E=0,v=null,_=-1,x=null;const C=new Ye,b=new Ye;let y=null,S=e.width,T=e.height,U=1,Y=null,N=null;const R=new Ye(0,0,S,T),P=new Ye(0,0,S,T);let z=!1;const G=new _h;let F=!1,D=!1,k=null;const j=new we,J=new Be,ee=new B,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return v===null?U:1}let X=t;function Fe(w,O){for(let V=0;V<w.length;V++){const Q=w[V],q=e.getContext(Q,O);if(q!==null)return q}return null}try{const w={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),X===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),X=Fe(O,w),X===null)throw Fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,ye,le,ze,Se,me,it,kt,bt,vi,gt,We,Li,Di,M,I,H,Z,te,re,Ie,oe,K,fe;function ve(){ge=new Y_(X),ye=new G_(X,ge,a),ge.init(ye),oe=new bE(X,ge,ye),le=new SE(X,ge,ye),ze=new J_,Se=new AE,me=new ME(X,ge,le,Se,ye,oe,ze),it=new V_(p),kt=new q_(p),bt=new r0(X,ye),K=new O_(X,ge,bt,ye),vi=new X_(X,bt,ze,K),gt=new ey(X,vi,bt,ze),te=new Z_(X,ye,me),I=new z_(Se),We=new dE(p,it,kt,ge,ye,K,I),Li=new DE(p,Se),Di=new pE,M=new EE(ge,ye),Z=new U_(p,it,kt,le,gt,h,r),H=new wE(p,gt,ye),fe=new QE(X,ze,ye,le),re=new k_(X,ge,ze,ye),Ie=new K_(X,ge,ze,ye),ze.programs=We.programs,p.capabilities=ye,p.extensions=ge,p.properties=Se,p.renderLists=Di,p.shadowMap=H,p.state=le,p.info=ze}ve();const ce=new LE(p,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(S,T,!1))},this.getSize=function(w){return w.set(S,T)},this.setSize=function(w,O,V){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=w,T=O,e.width=Math.floor(w*U),e.height=Math.floor(O*U),V!==!1&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(S*U,T*U).floor()},this.setDrawingBufferSize=function(w,O,V){S=w,T=O,U=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,O,V,Q){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,O,V,Q),le.viewport(C.copy(R).multiplyScalar(U).floor())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,O,V,Q){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,V,Q),le.scissor(b.copy(P).multiplyScalar(U).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){le.setScissorTest(z=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(w=!0,O=!0,V=!0){let Q=0;w&&(Q|=16384),O&&(Q|=256),V&&(Q|=1024),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Di.dispose(),M.dispose(),Se.dispose(),it.dispose(),kt.dispose(),gt.dispose(),K.dispose(),fe.dispose(),We.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ae),ce.removeEventListener("sessionend",ue),k&&(k.dispose(),k=null),Ue.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const w=ze.autoReset,O=H.enabled,V=H.autoUpdate,Q=H.needsUpdate,q=H.type;ve(),ze.autoReset=w,H.enabled=O,H.autoUpdate=V,H.needsUpdate=Q,H.type=q}function Ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const O=w.target;O.removeEventListener("dispose",$e),ut(O)}function ut(w){L(w),Se.remove(w)}function L(w){const O=Se.get(w).programs;O!==void 0&&(O.forEach(function(V){We.releaseProgram(V)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,Q,q,Ae){O===null&&(O=se);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Te=Tg(w,O,V,Q,q);le.setMaterial(Q,Ce);let Me=V.index;const Oe=V.attributes.position;if(Me===null){if(Oe===void 0||Oe.count===0)return}else if(Me.count===0)return;let De=1;Q.wireframe===!0&&(Me=vi.getWireframeAttribute(V),De=2),K.setup(q,Q,Te,V,Me);let Pe,et=re;Me!==null&&(Pe=bt.get(Me),et=Ie,et.setIndex(Pe));const Ln=Me!==null?Me.count:Oe.count,us=V.drawRange.start*De,ds=V.drawRange.count*De,_i=Ae!==null?Ae.start*De:0,ke=Ae!==null?Ae.count*De:1/0,As=Math.max(us,_i),nt=Math.min(Ln,us+ds,_i+ke)-1,$t=Math.max(0,nt-As+1);if($t!==0){if(q.isMesh)Q.wireframe===!0?(le.setLineWidth(Q.wireframeLinewidth*he()),et.setMode(1)):et.setMode(4);else if(q.isLine){let on=Q.linewidth;on===void 0&&(on=1),le.setLineWidth(on*he()),q.isLineSegments?et.setMode(1):q.isLineLoop?et.setMode(2):et.setMode(3)}else q.isPoints?et.setMode(0):q.isSprite&&et.setMode(4);if(q.isInstancedMesh)et.renderInstances(As,$t,q.count);else if(V.isInstancedBufferGeometry){const on=Math.min(V.instanceCount,V._maxInstanceCount);et.renderInstances(As,$t,on)}else et.render(As,$t)}},this.compile=function(w,O){function V(Q,q,Ae){Q.transparent===!0&&Q.side===zt?(Q.side=wt,Q.needsUpdate=!0,Jt(Q,q,Ae),Q.side=nn,Q.needsUpdate=!0,Jt(Q,q,Ae),Q.side=zt):Jt(Q,q,Ae)}d=M.get(w),d.init(),g.push(d),w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(O.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights(p.physicallyCorrectLights),w.traverse(function(Q){const q=Q.material;if(q)if(Array.isArray(q))for(let Ae=0;Ae<q.length;Ae++){const Ce=q[Ae];V(Ce,w,Q)}else V(q,w,Q)}),g.pop(),d=null};let W=null;function $(w){W&&W(w)}function ae(){Ue.stop()}function ue(){Ue.start()}const Ue=new rp;Ue.setAnimationLoop($),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(w){W=w,ce.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},ce.addEventListener("sessionstart",ae),ce.addEventListener("sessionend",ue),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,O,v),d=M.get(w,g.length),d.init(),g.push(d),j.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(j),D=this.localClippingEnabled,F=I.init(this.clippingPlanes,D,O),u=Di.get(w,A.length),u.init(),A.push(u),dt(w,O,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(Y,N),F===!0&&I.beginShadows();const V=d.state.shadowsArray;if(H.render(V,w,O),F===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(u,w),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const Q=O.cameras;for(let q=0,Ae=Q.length;q<Ae;q++){const Ce=Q[q];Et(u,w,Ce,Ce.viewport)}}else Et(u,w,O);v!==null&&(me.updateMultisampleRenderTarget(v),me.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(p,w,O),K.resetDefaultState(),_=-1,x=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,A.pop(),A.length>0?u=A[A.length-1]:u=null};function dt(w,O,V,Q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){Q&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const Ce=gt.update(w),Te=w.material;Te.visible&&u.push(w,Ce,Te,V,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ze.render.frame&&(w.skeleton.update(),w.skeleton.frame=ze.render.frame),!w.frustumCulled||G.intersectsObject(w))){Q&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const Ce=gt.update(w),Te=w.material;if(Array.isArray(Te)){const Me=Ce.groups;for(let Oe=0,De=Me.length;Oe<De;Oe++){const Pe=Me[Oe],et=Te[Pe.materialIndex];et&&et.visible&&u.push(w,Ce,et,V,ee.z,Pe)}}else Te.visible&&u.push(w,Ce,Te,V,ee.z,null)}}const Ae=w.children;for(let Ce=0,Te=Ae.length;Ce<Te;Ce++)dt(Ae[Ce],O,V,Q)}function Et(w,O,V,Q){const q=w.opaque,Ae=w.transmissive,Ce=w.transparent;d.setupLightsView(V),Ae.length>0&&Rn(q,O,V),Q&&le.viewport(C.copy(Q)),q.length>0&&je(q,O,V),Ae.length>0&&je(Ae,O,V),Ce.length>0&&je(Ce,O,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Rn(w,O,V){const Q=ye.isWebGL2;k===null&&(k=new gi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Nt:Qt,minFilter:rn,samples:Q&&s===!0?4:0})),p.getDrawingBufferSize(J),Q?k.setSize(J.x,J.y):k.setSize(Ea(J.x),Ea(J.y));const q=p.getRenderTarget();p.setRenderTarget(k),p.clear();const Ae=p.toneMapping;p.toneMapping=Mi,je(w,O,V),p.toneMapping=Ae,me.updateMultisampleRenderTarget(k),me.updateRenderTargetMipmap(k),p.setRenderTarget(q)}function je(w,O,V){const Q=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Ae=w.length;q<Ae;q++){const Ce=w[q],Te=Ce.object,Me=Ce.geometry,Oe=Q===null?Ce.material:Q,De=Ce.group;Te.layers.test(V.layers)&&Qi(Te,O,V,Me,Oe,De)}}function Qi(w,O,V,Q,q,Ae){w.onBeforeRender(p,O,V,Q,q,Ae),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(p,O,V,Q,w,Ae),q.transparent===!0&&q.side===zt?(q.side=wt,q.needsUpdate=!0,p.renderBufferDirect(V,O,Q,q,w,Ae),q.side=nn,q.needsUpdate=!0,p.renderBufferDirect(V,O,Q,q,w,Ae),q.side=zt):p.renderBufferDirect(V,O,Q,q,w,Ae),w.onAfterRender(p,O,V,Q,q,Ae)}function Jt(w,O,V){O.isScene!==!0&&(O=se);const Q=Se.get(w),q=d.state.lights,Ae=d.state.shadowsArray,Ce=q.state.version,Te=We.getParameters(w,q.state,Ae,O,V),Me=We.getProgramCacheKey(Te);let Oe=Q.programs;Q.environment=w.isMeshStandardMaterial?O.environment:null,Q.fog=O.fog,Q.envMap=(w.isMeshStandardMaterial?kt:it).get(w.envMap||Q.environment),Oe===void 0&&(w.addEventListener("dispose",$e),Oe=new Map,Q.programs=Oe);let De=Oe.get(Me);if(De!==void 0){if(Q.currentProgram===De&&Q.lightsStateVersion===Ce)return Nh(w,Te),De}else Te.uniforms=We.getUniforms(w),w.onBuild(V,Te,p),w.onBeforeCompile(Te,p),De=We.acquireProgram(Te,Me),Oe.set(Me,De),Q.uniforms=Te.uniforms;const Pe=Q.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=I.uniform),Nh(w,Te),Q.needsLights=Lg(w),Q.lightsStateVersion=Ce,Q.needsLights&&(Pe.ambientLightColor.value=q.state.ambient,Pe.lightProbe.value=q.state.probe,Pe.directionalLights.value=q.state.directional,Pe.directionalLightShadows.value=q.state.directionalShadow,Pe.spotLights.value=q.state.spot,Pe.spotLightShadows.value=q.state.spotShadow,Pe.rectAreaLights.value=q.state.rectArea,Pe.ltc_1.value=q.state.rectAreaLTC1,Pe.ltc_2.value=q.state.rectAreaLTC2,Pe.pointLights.value=q.state.point,Pe.pointLightShadows.value=q.state.pointShadow,Pe.hemisphereLights.value=q.state.hemi,Pe.directionalShadowMap.value=q.state.directionalShadowMap,Pe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pe.spotShadowMap.value=q.state.spotShadowMap,Pe.spotLightMatrix.value=q.state.spotLightMatrix,Pe.spotLightMap.value=q.state.spotLightMap,Pe.pointShadowMap.value=q.state.pointShadowMap,Pe.pointShadowMatrix.value=q.state.pointShadowMatrix);const et=De.getUniforms(),Ln=aa.seqWithValue(et.seq,Pe);return Q.currentProgram=De,Q.uniformsList=Ln,De}function Nh(w,O){const V=Se.get(w);V.outputEncoding=O.outputEncoding,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Tg(w,O,V,Q,q){O.isScene!==!0&&(O=se),me.resetTextureUnits();const Ae=O.fog,Ce=Q.isMeshStandardMaterial?O.environment:null,Te=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:St,Me=(Q.isMeshStandardMaterial?kt:it).get(Q.envMap||Ce),Oe=Q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!Q.normalMap&&!!V.attributes.tangent,Pe=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,Ln=!!V.morphAttributes.color,us=Q.toneMapped?p.toneMapping:Mi,ds=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_i=ds!==void 0?ds.length:0,ke=Se.get(Q),As=d.state.lights;if(F===!0&&(D===!0||w!==x)){const Wt=w===x&&Q.id===_;I.setState(Q,w,Wt)}let nt=!1;Q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==As.state.version||ke.outputEncoding!==Te||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Me||Q.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==I.numPlanes||ke.numIntersection!==I.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==De||ke.morphTargets!==Pe||ke.morphNormals!==et||ke.morphColors!==Ln||ke.toneMapping!==us||ye.isWebGL2===!0&&ke.morphTargetsCount!==_i)&&(nt=!0):(nt=!0,ke.__version=Q.version);let $t=ke.currentProgram;nt===!0&&($t=Jt(Q,O,q));let on=!1,hr=!1,Pa=!1;const Bt=$t.getUniforms(),Dn=ke.uniforms;if(le.useProgram($t.program)&&(on=!0,hr=!0,Pa=!0),Q.id!==_&&(_=Q.id,hr=!0),on||x!==w){if(Bt.setValue(X,"projectionMatrix",w.projectionMatrix),ye.logarithmicDepthBuffer&&Bt.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),x!==w&&(x=w,hr=!0,Pa=!0),Q.isShaderMaterial||Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshStandardMaterial||Q.envMap){const Wt=Bt.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,ee.setFromMatrixPosition(w.matrixWorld))}(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Bt.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial||Q.isShadowMaterial||q.isSkinnedMesh)&&Bt.setValue(X,"viewMatrix",w.matrixWorldInverse)}if(q.isSkinnedMesh){Bt.setOptional(X,q,"bindMatrix"),Bt.setOptional(X,q,"bindMatrixInverse");const Wt=q.skeleton;Wt&&(ye.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Bt.setValue(X,"boneTexture",Wt.boneTexture,me),Bt.setValue(X,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=V.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&ye.isWebGL2===!0)&&te.update(q,V,Q,$t),(hr||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Bt.setValue(X,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Me,Dn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),hr&&(Bt.setValue(X,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&Rg(Dn,Pa),Ae&&Q.fog===!0&&Li.refreshFogUniforms(Dn,Ae),Li.refreshMaterialUniforms(Dn,Q,U,T,k),aa.upload(X,ke.uniformsList,Dn,me)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(aa.upload(X,ke.uniformsList,Dn,me),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Bt.setValue(X,"center",q.center),Bt.setValue(X,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(X,"normalMatrix",q.normalMatrix),Bt.setValue(X,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Wt=Q.uniformsGroups;for(let Fa=0,Dg=Wt.length;Fa<Dg;Fa++)if(ye.isWebGL2){const Fh=Wt[Fa];fe.update(Fh,$t),fe.bind(Fh,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function Rg(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Lg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,O,V){Se.get(w.texture).__webglTexture=O,Se.get(w.depthTexture).__webglTexture=V;const Q=Se.get(w);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=V===void 0,Q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const V=Se.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){v=w,m=O,E=V;let Q=!0,q=null,Ae=!1,Ce=!1;if(w){const Me=Se.get(w);Me.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),Q=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(w):Me.__hasExternalTextures&&me.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const De=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(q=De[O],Ae=!0):ye.isWebGL2&&w.samples>0&&me.useMultisampledRTT(w)===!1?q=Se.get(w).__webglMultisampledFramebuffer:q=De,C.copy(w.viewport),b.copy(w.scissor),y=w.scissorTest}else C.copy(R).multiplyScalar(U).floor(),b.copy(P).multiplyScalar(U).floor(),y=z;if(le.bindFramebuffer(36160,q)&&ye.drawBuffers&&Q&&le.drawBuffers(w,q),le.viewport(C),le.scissor(b),le.setScissorTest(y),Ae){const Me=Se.get(w.texture);X.framebufferTexture2D(36160,36064,34069+O,Me.__webglTexture,V)}else if(Ce){const Me=Se.get(w.texture),Oe=O||0;X.framebufferTextureLayer(36160,36064,Me.__webglTexture,V||0,Oe)}_=-1},this.readRenderTargetPixels=function(w,O,V,Q,q,Ae,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){le.bindFramebuffer(36160,Te);try{const Me=w.texture,Oe=Me.format,De=Me.type;if(Oe!==ot&&oe.convert(Oe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=De===Nt&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(De!==Qt&&oe.convert(De)!==X.getParameter(35738)&&!(De===Pt&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Q&&V>=0&&V<=w.height-q&&X.readPixels(O,V,Q,q,oe.convert(Oe),oe.convert(De),Ae)}finally{const Me=v!==null?Se.get(v).__webglFramebuffer:null;le.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(w,O,V=0){const Q=Math.pow(2,-V),q=Math.floor(O.image.width*Q),Ae=Math.floor(O.image.height*Q);me.setTexture2D(O,0),X.copyTexSubImage2D(3553,V,0,0,w.x,w.y,q,Ae),le.unbindTexture()},this.copyTextureToTexture=function(w,O,V,Q=0){const q=O.image.width,Ae=O.image.height,Ce=oe.convert(V.format),Te=oe.convert(V.type);me.setTexture2D(V,0),X.pixelStorei(37440,V.flipY),X.pixelStorei(37441,V.premultiplyAlpha),X.pixelStorei(3317,V.unpackAlignment),O.isDataTexture?X.texSubImage2D(3553,Q,w.x,w.y,q,Ae,Ce,Te,O.image.data):O.isCompressedTexture?X.compressedTexSubImage2D(3553,Q,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):X.texSubImage2D(3553,Q,w.x,w.y,Ce,Te,O.image),Q===0&&V.generateMipmaps&&X.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V,Q,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=w.max.x-w.min.x+1,Ce=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Me=oe.convert(Q.format),Oe=oe.convert(Q.type);let De;if(Q.isData3DTexture)me.setTexture3D(Q,0),De=32879;else if(Q.isDataArrayTexture)me.setTexture2DArray(Q,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,Q.flipY),X.pixelStorei(37441,Q.premultiplyAlpha),X.pixelStorei(3317,Q.unpackAlignment);const Pe=X.getParameter(3314),et=X.getParameter(32878),Ln=X.getParameter(3316),us=X.getParameter(3315),ds=X.getParameter(32877),_i=V.isCompressedTexture?V.mipmaps[0]:V.image;X.pixelStorei(3314,_i.width),X.pixelStorei(32878,_i.height),X.pixelStorei(3316,w.min.x),X.pixelStorei(3315,w.min.y),X.pixelStorei(32877,w.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(De,q,O.x,O.y,O.z,Ae,Ce,Te,Me,Oe,_i.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,q,O.x,O.y,O.z,Ae,Ce,Te,Me,_i.data)):X.texSubImage3D(De,q,O.x,O.y,O.z,Ae,Ce,Te,Me,Oe,_i),X.pixelStorei(3314,Pe),X.pixelStorei(32878,et),X.pixelStorei(3316,Ln),X.pixelStorei(3315,us),X.pixelStorei(32877,ds),q===0&&Q.generateMipmaps&&X.generateMipmap(De),le.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){m=0,E=0,v=null,le.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class NE extends up{}NE.prototype.isWebGL1Renderer=!0;class Cn extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class FE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new B;class Eh{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ku=new B,Gu=new Ye,zu=new Ye,UE=new B,Vu=new we;class OE extends _e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new we,this.bindMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;Gu.fromBufferAttribute(n.attributes.skinIndex,e),zu.fromBufferAttribute(n.attributes.skinWeight,e),ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=zu.getComponent(s);if(r!==0){const o=Gu.getComponent(s);Vu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(UE.copy(ku).applyMatrix4(Vu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dp extends Ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xh extends Ot{constructor(e=null,t=1,i=1,n,s,r,o,l,c=pt,h=pt,u,d){super(null,r,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new we,kE=new we;class Ih{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new we;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:kE;Hu.multiplyMatrices(o,t[s]),Hu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Ih(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new xh(t,e,e,ot,Pt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new dp),this.bones.push(r),this.boneInverses.push(new we().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const r=t[n];e.bones.push(r.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Wu extends at{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qu=new we,Yu=new we,To=[],GE=new we,pr=new _e;class zE extends _e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,GE)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,qu),Yu.multiplyMatrices(i,qu),pr.matrixWorld=Yu,pr.raycast(e,To);for(let r=0,o=To.length;r<o;r++){const l=To[r];l.instanceId=s,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ap extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new B,Ku=new B,Ju=new we,Al=new Ta,Ro=new bn;class Ch extends Ke{constructor(e=new oi,t=new Ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Xu.fromBufferAttribute(t,n-1),Ku.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Xu.distanceTo(Ku);e.setAttribute("lineDistance",new bi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(n),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Ju.copy(n).invert(),Al.copy(e.ray).applyMatrix4(Ju);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,u=new B,d=new B,A=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const m=Math.max(0,r.start),E=Math.min(g.count,r.start+r.count);for(let v=m,_=E-1;v<_;v+=A){const x=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(f,x),h.fromBufferAttribute(f,C),Al.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),E=Math.min(f.count,r.start+r.count);for(let v=m,_=E-1;v<_;v+=A){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),Al.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const $u=new B,ju=new B;class VE extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)$u.fromBufferAttribute(t,n),ju.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+$u.distanceTo(ju);e.setAttribute("lineDistance",new bi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HE extends Ch{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fp extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new we,zc=new Ta,Lo=new bn,Do=new B;class WE extends Ke{constructor(e=new oi,t=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(n),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Zu.copy(n).invert(),zc.copy(e.ray).applyMatrix4(Zu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),A=Math.min(c.count,r.start+r.count);for(let g=d,p=A;g<p;g++){const f=c.getX(g);Do.fromBufferAttribute(u,f),ed(Do,f,l,n,e,t,this)}}else{const d=Math.max(0,r.start),A=Math.min(u.count,r.start+r.count);for(let g=d,p=A;g<p;g++)Do.fromBufferAttribute(u,g),ed(Do,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ed(a,e,t,i,n,s,r){const o=zc.distanceSqToPoint(a);if(o<t){const l=new B;zc.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class pp extends Ot{constructor(e,t,i,n,s,r,o,l,c,h,u,d){super(null,r,o,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class qE extends pp{constructor(e,t,i,n,s,r){super(e,t,i,s,r),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Ct}}class wn extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hs extends wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fn(a,e,t){return gp(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Qo(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function gp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function YE(a){function e(n,s){return a[n]-a[s]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function td(a,e,t){const i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[r++]=a[o+l]}return n}function mp(a,e,t,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=a[n++];while(s!==void 0)}class ao{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){const o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class XE extends ao{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,o=n[s],l=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:s=e,o=2*t-i;break;case ya:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:r=e,l=2*i-t;break;case ya:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,A=this._weightNext,g=(i-t)/(n-t),p=g*g,f=p*g,m=-d*f+2*d*p-d*g,E=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,v=(-1-A)*f+(1.5+A)*p+.5*g,_=A*f-A*p;for(let x=0;x!==o;++x)s[x]=m*r[h+x]+E*r[c+x]+v*r[l+x]+_*r[u+x];return s}}class vp extends ao{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class KE extends ao{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new KE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new XE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=fn(i,s,r),this.values=fn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(n!==void 0&&gp(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=fn(this.times),t=fn(this.values),i=this.getValueSize(),n=this.getInterpolation()===ka,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,A=u+i;for(let g=0;g!==i;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[A+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const u=o*i,d=r*i;for(let A=0;A!==i;++A)t[d+A]=t[u+A]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=fn(e,0,r),this.values=fn(t,0,r*i)):(this.times=e,this.values=t),this}clone(){const e=fn(this.times,0),t=fn(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=is;class ar extends Ri{}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=er;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class _p extends Ri{}_p.prototype.ValueTypeName="color";class io extends Ri{}io.prototype.ValueTypeName="number";class JE extends ao{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(s,0,r,c-o,r,c,l);return s}}class ns extends Ri{InterpolantFactoryMethodLinear(e){return new JE(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=is;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends Ri{}lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=er;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Ri{}no.prototype.ValueTypeName="vector";class Vc{constructor(e,t=-1,i,n=Ah){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(jE(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(Ri.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=YE(l);l=td(l,1,h),c=td(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new io(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const r=[];for(const o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,A,g,p){if(A.length!==0){const f=[],m=[];mp(A,f,m,g),f.length!==0&&p.push(new u(d,f,m))}},n=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const A={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)A[d[g].morphTargets[p]]=-1;for(const p in A){const f=[],m=[];for(let E=0;E!==d[g].morphTargets.length;++E){const v=d[g];f.push(v.time),m.push(v.morphTarget===p?1:0)}n.push(new io(".morphTargetInfluence["+p+"]",f,m))}l=A.length*r}else{const A=".bones["+t[u].name+"]";i(no,A+".position",d,"pos",n),i(ns,A+".quaternion",d,"rot",n),i(no,A+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $E(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return io;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return _p;case"quaternion":return ns;case"bool":case"boolean":return ar;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function jE(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$E(a.type);if(a.times===void 0){const t=[],i=[];mp(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const ir={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class ZE{constructor(e,t,i){const n=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const A=c[u],g=c[u+1];if(A.global&&(A.lastIndex=0),A.test(h))return g}return null}}}const ex=new ZE;class Tn{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ki={};class tx extends Error{constructor(e,t){super(e),this.response=t}}class In extends Tn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:n});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ki[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),A=d?parseInt(d):0,g=A!==0;let p=0;const f=new ReadableStream({start(m){E();function E(){u.read().then(({done:v,value:_})=>{if(v)m.close();else{p+=_.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:A});for(let C=0,b=h.length;C<b;C++){const y=h[C];y.onProgress&&y.onProgress(x)}m.enqueue(_),E()}})}}});return new Response(f)}else throw new tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,A=new TextDecoder(d);return c.arrayBuffer().then(g=>A.decode(g))}}}).then(c=>{ir.add(e,c);const h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onLoad&&A.onLoad(c)}}).catch(c=>{const h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onError&&A.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ix extends Tn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ir.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=to("img");function l(){h(),ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class nx extends Tn{constructor(e){super(e)}load(e,t,i,n){const s=this,r=new xh,o=new In(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:Ct,r.wrapT=c.wrapT!==void 0?c.wrapT:Ct,r.magFilter=c.magFilter!==void 0?c.magFilter:tt,r.minFilter=c.minFilter!==void 0?c.minFilter:tt,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=rn),c.mipmapCount===1&&(r.minFilter=tt),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},i,n),r}}class wh extends Tn{constructor(e){super(e)}load(e,t,i,n){const s=new Ot,r=new ix(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class La extends Ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new we,id=new B,nd=new B;class Sh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sx extends Sh{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=eo*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rx extends La{constructor(e,t,i=0,n=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.target=new Ke,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new sx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sd=new we,gr=new B,pl=new B;class ox extends Sh{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(gr),pl.copy(i.position),pl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pl),i.updateMatrixWorld(),n.makeTranslation(-gr.x,-gr.y,-gr.z),sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}}class Mh extends La{constructor(e,t,i=0,n=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ax extends Sh{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.target=new Ke,this.shadow=new ax}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new B)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*n),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*i),t.addScaledVector(r[4],1.092548*(i*n)),t.addScaledVector(r[5],1.092548*(n*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(i*s)),t.addScaledVector(r[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*n),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*i),t.addScaledVector(r[4],2*.429043*i*n),t.addScaledVector(r[5],2*.429043*n*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*i*s),t.addScaledVector(r[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}class cx extends La{constructor(e=new lx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class es{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hx extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ir.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ir.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class ux{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){fi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const r=this._workIndex*s;fi.multiplyQuaternionsFlat(e,r,e,t,e,i),fi.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){const r=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[i+r]*n}}}const bh="\\[\\]\\.:\\/",dx=new RegExp("["+bh+"]","g"),Bh="[^"+bh+"]",Ax="[^"+bh.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Bh),px=/(WCOD+)?/.source.replace("WCOD",Ax),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),vx=new RegExp("^"+fx+px+gx+mx+"$"),_x=["material","materials","bones","map"];class yx{constructor(e,t,i){const n=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);_x.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=yx;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ex{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,r=s.length,o=new Array(r),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,r=s/n,o=n/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Im:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case Ah:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const r=i===dh;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===qf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Hs,n.endingEnd=Hs):(e?n.endingStart=this.zeroSlopeAtStart?Hs:Vs:n.endingStart=ya,t?n.endingEnd=this.zeroSlopeAtEnd?Hs:Vs:n.endingEnd=ya)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const xx=new Float32Array(1);class Ix extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],A=d.name;let g=h[A];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,A));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;g=new ux(Qe.create(i,A,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,A),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new vp(new Float32Array(2),new Float32Array(2),1,xx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let r=typeof e=="string"?Vc.findByName(n,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Ah),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new Ex(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Vc.findByName(i,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const o=i[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Cx{constructor(e,t,i=0,n=1/0){this.ray=new Ta(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Hc(e,this,i,t),i.sort(rd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Hc(e[n],this,i,t);return i.sort(rd),i}}function rd(a,e){return a.distance-e.distance}function Hc(a,e,t,i){if(a.layers.test(e.layers)&&a.raycast(e,t),i===!0){const n=a.children;for(let s=0,r=n.length;s<r;s++)Hc(n[s],e,t,!0)}}class la{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ji=wx();function wx(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:r,offsetTable:o}}function Sx(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=_t(a,-65504,65504),ji.floatView[0]=a;const e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function Mx(a){const e=a>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(a&1023)]+ji.exponentTable[e],ji.floatView[0]}var Po=Object.freeze({__proto__:null,toHalfFloat:Sx,fromHalfFloat:Mx});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,xp=Ep&&self.XRSession.prototype.requestHitTestSource!=null,gl=self.ResizeObserver!=null,ml=self.IntersectionObserver!=null,Ip=xp;(()=>{const a=navigator.userAgent||navigator.vendor||self.opera;let e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e})();const bx=/android/i.test(navigator.userAgent),Bx=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Tx=/firefox/i.test(navigator.userAgent),Rx=/OculusBrowser/.test(navigator.userAgent),Lx=bx&&!Tx&&!Rx,Dx=!!(window.webkit&&window.webkit.messageHandlers),od=(()=>{if(Bx){if(Dx)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const a=document.createElement("a");return!!(a.relList&&a.relList.supports&&a.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=a=>a&&a!=="null"?Qx(a):null,ad=()=>{if(Ip)return;const a=[];throw Ep||a.push("WebXR Device API"),xp||a.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${a.join(", ")}`)},Qx=a=>new URL(a,window.location.toString()).toString(),Px=(a,e)=>{let t=null;const i=(...n)=>{t==null&&(a(...n),t=self.setTimeout(()=>t=null,e))};return i.flush=()=>{t!=null&&(self.clearTimeout(t),t=null)},i},ld=(a,e)=>{let t=null;return(...i)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,a(...i)},e)}},Ii=(a,e,t)=>Math.max(e,Math.min(t,a)),Nx=1,Wc=(()=>{const a=(()=>{var e;if(!((e=document.documentElement.getAttribute("itemtype"))===null||e===void 0)&&e.includes("schema.org/SearchResultsPage"))return!0;const t=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const i of t)if(i.name==="viewport")return!0;return!1})();return a||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>a?window.devicePixelRatio:Nx})(),wp=(()=>{const a="model-viewer-debug-mode",e=new RegExp(`[?&]${a}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),Fx=(a=0)=>new Promise(e=>setTimeout(e,a)),Ux=(a,e,t=null)=>new Promise(i=>{function n(s){(!t||t(s))&&(i(s),a.removeEventListener(e,n))}a.addEventListener(e,n)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const Ox=.5,kx=0,Gx=1,zx=1,Or=Symbol("currentEnvironmentMap"),kr=Symbol("currentBackground"),xa=Symbol("updateEnvironment"),No=Symbol("cancelEnvironmentUpdate"),Vx=a=>{var e,t,i;class n extends a{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=kx,this.shadowSoftness=Gx,this.exposure=zx,this[e]=null,this[t]=null,this[i]=null}updated(r){super.updated(r),r.has("shadowIntensity")&&(this[ne].setShadowIntensity(this.shadowIntensity*Ox),this[Vt]()),r.has("shadowSoftness")&&(this[ne].setShadowSoftness(this.shadowSoftness),this[Vt]()),r.has("exposure")&&(this[ne].exposure=this.exposure,this[Vt]()),(r.has("environmentImage")||r.has("skyboxImage"))&&this[nr]()&&this[xa]()}hasBakedShadow(){return this[ne].bakedShadows.size>0}async[(e=Or,t=kr,i=No,xa)](){const{skyboxImage:r,environmentImage:o}=this;this[No]!=null&&(this[No](),this[No]=null);const{textureUtils:l}=this[Xe];if(l==null)return;const c=this[rs].beginActivity();try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(Cp(r),o,d=>c(Ii(d,0,1)));this[Or]!==h&&(this[Or]=h,this.dispatchEvent(new CustomEvent("environment-change"))),u!=null?this[kr]=u.name===h.name?h:u:this[kr]=null,this[ne].setEnvironmentAndSkybox(this[Or],this[kr]),this[ne].dispatchEvent({type:"envmap-update"})}catch(h){if(h instanceof Error)throw this[ne].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return mr([Ee({type:String,attribute:"environment-image"})],n.prototype,"environmentImage",void 0),mr([Ee({type:String,attribute:"skybox-image"})],n.prototype,"skyboxImage",void 0),mr([Ee({type:Number,attribute:"shadow-intensity"})],n.prototype,"shadowIntensity",void 0),mr([Ee({type:Number,attribute:"shadow-softness"})],n.prototype,"shadowSoftness",void 0),mr([Ee({type:Number})],n.prototype,"exposure",void 0),n};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=ba`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=ba`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=ba`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=ba`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This rule set is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${qx}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Wx}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Hx}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,Xx=a=>{Pg(Yx,a)},vl=new WeakMap;class Kx extends Tn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new In(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(n)},i,n)}decodeDracoFile(e,t,i,n){const s={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const i=JSON.stringify(t);if(vl.has(e)){const l=vl.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),vl.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new oi;e.index&&t.setIndex(new at(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,r=n.array,o=n.itemSize;t.setAttribute(s,new at(r,o))}return t}_loadLibrary(e,t){const i=new In(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=Jx.toString(),r=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const r=s.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Jx(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,A=new u.DecoderBuffer;A.Init(new Int8Array(l),l.byteLength);try{const g=t(u,d,A,c),p=g.attributes.map(f=>f.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{u.destroy(A),u.destroy(d)}});break}};function t(r,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,A;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,A=o.DecodeBufferToMesh(l,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,A=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!A.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+A.error_msg());const p={index:null,attributes:[]};for(const f in h){const m=self[u[f]];let E,v;if(c.useUniqueIDs)v=h[f],E=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,r[h[f]]),v===-1)continue;E=o.GetAttribute(d,v)}p.attributes.push(n(r,o,d,f,m,E))}return g===r.TRIANGULAR_MESH&&(p.index=i(r,o,d)),r.destroy(d),p}function i(r,o,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const A=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:A,itemSize:1}}function n(r,o,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,p=g*h.BYTES_PER_ELEMENT,f=s(r,h),m=r._malloc(p);o.GetAttributeDataArrayForAllPoints(l,u,f,p,m);const E=new h(r.HEAPF32.buffer,m,g).slice();return r._free(m),{name:c,array:E,itemSize:d}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class $x extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iI(t)}),this.register(function(t){return new cI(t)}),this.register(function(t){return new hI(t)}),this.register(function(t){return new sI(t)}),this.register(function(t){return new rI(t)}),this.register(function(t){return new oI(t)}),this.register(function(t){return new aI(t)}),this.register(function(t){return new tI(t)}),this.register(function(t){return new lI(t)}),this.register(function(t){return new nI(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new uI(t)}),this.register(function(t){return new dI(t)})}load(e,t,i,n){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=es.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new In(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(es.decodeText(new Uint8Array(e,0,4))===Sp){try{r[Le.KHR_BINARY_GLTF]=new AI(e)}catch(h){n&&n(h);return}s=JSON.parse(r[Le.KHR_BINARY_GLTF].content)}else s=JSON.parse(es.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new SI(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],u=s.extensionsRequired||[];switch(h){case Le.KHR_MATERIALS_UNLIT:r[h]=new eI;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[h]=new gI;break;case Le.KHR_DRACO_MESH_COMPRESSION:r[h]=new fI(s,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:r[h]=new pI;break;case Le.KHR_MESH_QUANTIZATION:r[h]=new mI;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function jx(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zx{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mh(h),c.distance=u;break;case"spot":c=new rx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}let eI=class{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,i){const n=[];e.color=new xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Re))}return Promise.all(n)}};class tI{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}let iI=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(s)}},nI=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}};class sI{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=n.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Re)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}let rI=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},oI=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new xe(o[0],o[1],o[2]),Promise.all(s)}};class aI{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class lI{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new xe(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,Re)),Promise.all(s)}}class cI{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class hI{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=n.images[r.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uI{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(A){return A.buffer}):r.ready.then(function(){const A=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(A),h,u,d,n.mode,n.filter),A})})}else return null}}class dI{constructor(e){this.name=Le.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=i.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,A=[];for(const g of u){const p=new we,f=new B,m=new fi,E=new B(1,1,1),v=new zE(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&E.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,p.compose(f,m,E));for(const _ in l)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Ke.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),A.push(v)}return h.isGroup?(h.clear(),h.add(...A),h):A[0]}))}}const Sp="glTF",vr=12,cd={JSON:1313821514,BIN:5130562};class AI{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vr);if(this.header={magic:es.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vr,n=new DataView(e,vr);let s=0;for(;s<i;){const r=n.getUint32(s,!0);s+=4;const o=n.getUint32(s,!0);if(s+=4,o===cd.JSON){const l=new Uint8Array(e,vr+s,r);this.content=es.decodeText(l)}else if(o===cd.BIN){const l=vr+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fI{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const u=Yc[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=Yc[h]||h.toLowerCase();if(r[h]!==void 0){const d=i.accessors[e.attributes[h]],A=so[d.componentType];c[u]=A.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const A in d.attributes){const g=d.attributes[A],p=l[A];p!==void 0&&(g.normalized=p)}u(d)},o,c)})})}}class pI{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qc extends wn{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new xe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",n).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class gI{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return qc}extendParams(e,t,i){const n=t.extensions[this.name];e.color=new xe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(n.diffuseFactor)){const r=n.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(n.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",n.diffuseTexture,Re)),e.emissive=new xe(0,0,0),e.glossiness=n.glossinessFactor!==void 0?n.glossinessFactor:1,e.specular=new xe(1,1,1),Array.isArray(n.specularFactor)&&e.specular.fromArray(n.specularFactor),n.specularGlossinessTexture!==void 0){const r=n.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",r)),s.push(i.assignTexture(e,"specularMap",r,Re))}return Promise.all(s)}createMaterial(e){const t=new qc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=fh,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class mI{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class Mp extends ao{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,A=d*u,g=e*c,p=g-c,f=-2*A+3*d,m=A-d,E=1-f,v=m-d+u;for(let _=0;_!==o;_++){const x=r[p+_+o],C=r[p+_+l]*h,b=r[g+_+o],y=r[g+_]*h;s[_]=E*x+v*C+f*b+m*y}return s}}const vI=new fi;class _I extends Mp{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return vI.fromArray(s).normalize().toArray(s),s}}const ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hd={9728:pt,9729:tt,9984:va,9985:hh,9986:_a,9987:rn},ud={33071:Ct,33648:Zr,10497:sn},dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yI={CUBICSPLINE:void 0,LINEAR:is,STEP:er},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EI(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nn})),a.DefaultMaterial}function _r(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Hn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xI(a,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function II(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CI(a){const e=a.extensions&&a.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ad(e.attributes):t=a.indices+":"+Ad(a.attributes)+":"+a.mode,t}function Ad(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Xc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wI(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class SI{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new wh(this.options.manager):this.textureLoader=new hx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new In(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};_r(s,o,n),Hn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this.loadNode(t);break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(es.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0)return Promise.resolve(null);const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=dd[n.type],c=so[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,A=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let p,f;if(A&&A!==u){const m=Math.floor(d/A),E="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let v=t.cache.get(E);v||(p=new c(o,m*A,n.count*A/h),v=new FE(p,A/h),t.cache.add(E,v)),f=new Eh(v,l,d%A/h,g)}else o===null?p=new c(n.count*l):p=new c(o,d,n.count*l),f=new at(p,l,g);if(n.sparse!==void 0){const m=dd.SCALAR,E=so[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,x=new E(r[1],v,n.sparse.count*m),C=new c(r[2],_,n.sparse.count*l);o!==null&&(f=new at(f.array.slice(),f.itemSize,f.normalized));for(let b=0,y=x.length;b<y;b++){const S=x[b];if(f.setX(S,C[b*l]),l>=2&&f.setY(S,C[b*l+1]),l>=3&&f.setZ(S,C[b*l+2]),l>=4&&f.setW(S,C[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=hd[d.magFilter]||tt,h.minFilter=hd[d.minFilter]||rn,h.wrapS=ud[d.wrapS]||sn,h.wrapT=ud[d.wrapT]||sn,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=n.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,A){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const f=new Ot(p);f.needsUpdate=!0,d(f)}),t.load(es.resolveURL(u,s.path),g,void 0,A)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=r.mimeType||wI(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[Le.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return n!==void 0&&(r.encoding=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new fp,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ap,pi.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return wn}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=n[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else if(l[Le.KHR_MATERIALS_UNLIT]){const u=n[Le.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Re)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=zt);const h=s.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_l.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==di&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==di&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==di&&(o.emissive=new xe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==di&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Re)),Promise.all(c).then(function(){let u;return r===qc?u=n[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):u=new r(o),s.name&&(u.name=s.name),Hn(u,s),t.associations.set(u,{materials:e}),s.extensions&&_r(n,u,s),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return fd(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=CI(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=fd(new oi,c,t),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?EI(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let A=0,g=h.length;A<g;A++){const p=h[A],f=r[A];let m;const E=c[A];if(f.mode===ei.TRIANGLES||f.mode===ei.TRIANGLE_STRIP||f.mode===ei.TRIANGLE_FAN||f.mode===void 0)m=s.isSkinnedMesh===!0?new OE(p,E):new _e(p,E),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),f.mode===ei.TRIANGLE_STRIP?m.geometry=pd(m.geometry,Cm):f.mode===ei.TRIANGLE_FAN&&(m.geometry=pd(m.geometry,Yf));else if(f.mode===ei.LINES)m=new VE(p,E);else if(f.mode===ei.LINE_STRIP)m=new Ch(p,E);else if(f.mode===ei.LINE_LOOP)m=new HE(p,E);else if(f.mode===ei.POINTS)m=new WE(p,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&II(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Hn(m,s),f.extensions&&_r(n,m,f),t.assignFinalMaterial(m),u.push(m)}for(let A=0,g=u.length;A<g;A++)t.associations.set(u[A],{meshes:e,primitives:A});if(u.length===1)return u[0];const d=new xn;t.associations.set(d,{meshes:e});for(let A=0,g=u.length;A<g;A++)d.add(u[A]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(Kf.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new rr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Hn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(n){return i.inverseBindMatrices=n,i})}loadAnimation(e){const i=this.json.animations[e],n=[],s=[],r=[],o=[],l=[];for(let c=0,h=i.channels.length;c<h;c++){const u=i.channels[c],d=i.samplers[u.sampler],A=u.target,g=A.node,p=i.parameters!==void 0?i.parameters[d.input]:d.input,f=i.parameters!==void 0?i.parameters[d.output]:d.output;n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",f)),o.push(d),l.push(A)}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],A=c[3],g=c[4],p=[];for(let m=0,E=h.length;m<E;m++){const v=h[m],_=u[m],x=d[m],C=A[m],b=g[m];if(v===void 0)continue;v.updateMatrix();let y;switch(pn[b.path]){case pn.weights:y=io;break;case pn.rotation:y=ns;break;case pn.position:case pn.scale:default:y=no;break}const S=v.name?v.name:v.uuid,T=C.interpolation!==void 0?yI[C.interpolation]:is,U=[];pn[b.path]===pn.weights?v.traverse(function(N){N.morphTargetInfluences&&U.push(N.name?N.name:N.uuid)}):U.push(S);let Y=x.array;if(x.normalized){const N=Xc(Y.constructor),R=new Float32Array(Y.length);for(let P=0,z=Y.length;P<z;P++)R[P]=Y[P]*N;Y=R}for(let N=0,R=U.length;N<R;N++){const P=new y(U[N]+"."+pn[b.path],_.array,Y,T);C.interpolation==="CUBICSPLINE"&&(P.createInterpolant=function(G){const F=this instanceof ns?_I:Mp;return new F(this.times,this.values,this.getValueSize()/3,G)},P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(P)}}const f=i.name?i.name:"animation_"+e;return new Vc(f,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){const t=this.json,i=this.extensions,n=this,s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"";return function(){const o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new dp:o.length>1?l=new xn:o.length===1?l=o[0]:l=new Ke,l!==o[0])for(let c=0,h=o.length;c<h;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=r),Hn(l,s),s.extensions&&_r(i,l,s),s.matrix!==void 0){const c=new we;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,n=this.json.scenes[e],s=this,r=new xn;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&_r(i,r,n);const o=n.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(bp(o[c],r,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,A]of s.associations)(d instanceof pi||d instanceof Ot)&&u.set(d,A);return h.traverse(d=>{const A=s.associations.get(d);A!=null&&u.set(d,A)}),u};return s.associations=c(r),r})}}function bp(a,e,t,i){const n=t.nodes[a];return i.getDependency("node",a).then(function(s){if(n.skin===void 0)return s;let r;return i.getDependency("skin",n.skin).then(function(o){r=o;const l=[];for(let c=0,h=r.joints.length;c<h;c++)l.push(i.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=o.length;u<d;u++){const A=o[u];if(A){c.push(A);const g=new we;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[u])}l.bind(new Ih(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(n.children){const o=n.children;for(let l=0,c=o.length;l<c;l++){const h=o[l];r.push(bp(h,s,t,i))}}return Promise.all(r)})}function MI(a,e,t){const i=e.attributes,n=new ni;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=Xc(so[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new B,l=new B;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],A=d.min,g=d.max;if(A!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(A[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(A[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(A[2]),Math.abs(g[2]))),d.normalized){const p=Xc(so[d.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const r=new bn;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function fd(a,e,t){const i=e.attributes,n=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in i){const o=Yc[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(r)}return Hn(a,e),MI(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?xI(a,e.targets,t):a})}function pd(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Yf)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(n),s}class bI{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:s,transfer:r}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(s,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const BI=0,TI=2,RI=1,LI=2,DI=0,Bp=9,Th=15,Tp=16,Rh=22,Rp=37,Lh=43,Lp=76,Dp=83,Qp=97,Pp=100,Np=103,Fp=109;class QI{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class yr{constructor(e,t,i,n){this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}}const Rt=[171,75,84,88,32,50,48,187,13,10,26,10];function gd(a){return typeof TextDecoder<"u"?new TextDecoder().decode(a):Buffer.from(a).toString("utf8")}function PI(a){const e=new Uint8Array(a.buffer,a.byteOffset,Rt.length);if(e[0]!==Rt[0]||e[1]!==Rt[1]||e[2]!==Rt[2]||e[3]!==Rt[3]||e[4]!==Rt[4]||e[5]!==Rt[5]||e[6]!==Rt[6]||e[7]!==Rt[7]||e[8]!==Rt[8]||e[9]!==Rt[9]||e[10]!==Rt[10]||e[11]!==Rt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new QI,i=17*Uint32Array.BYTES_PER_ELEMENT,n=new yr(a,Rt.length,i,!0);t.vkFormat=n._nextUint32(),t.typeSize=n._nextUint32(),t.pixelWidth=n._nextUint32(),t.pixelHeight=n._nextUint32(),t.pixelDepth=n._nextUint32(),t.layerCount=n._nextUint32(),t.faceCount=n._nextUint32();const s=n._nextUint32();t.supercompressionScheme=n._nextUint32();const r=n._nextUint32(),o=n._nextUint32(),l=n._nextUint32(),c=n._nextUint32(),h=n._nextUint64(),u=n._nextUint64(),d=new yr(a,Rt.length+i,3*s*8,!0);for(let G=0;G<s;G++)t.levels.push({levelData:new Uint8Array(a.buffer,a.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const A=new yr(a,r,o,!0),g={vendorId:A._skip(4)._nextUint16(),descriptorType:A._nextUint16(),versionNumber:A._nextUint16(),descriptorBlockSize:A._nextUint16(),colorModel:A._nextUint8(),colorPrimaries:A._nextUint8(),transferFunction:A._nextUint8(),flags:A._nextUint8(),texelBlockDimension:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],bytesPlane:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],samples:[]},p=(g.descriptorBlockSize/4-6)/4;for(let G=0;G<p;G++){const F={bitOffset:A._nextUint16(),bitLength:A._nextUint8(),channelType:A._nextUint8(),samplePosition:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&F.channelType?(F.sampleLower=A._nextInt32(),F.sampleUpper=A._nextInt32()):(F.sampleLower=A._nextUint32(),F.sampleUpper=A._nextUint32()),g.samples[G]=F}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const f=new yr(a,l,c,!0);for(;f._offset<c;){const G=f._nextUint32(),F=f._scan(G),D=gd(F),k=f._scan(G-F.byteLength);t.keyValue[D]=D.match(/^ktx/i)?gd(k):k,f._offset%4&&f._skip(4-f._offset%4)}if(u<=0)return t;const m=new yr(a,h,u,!0),E=m._nextUint16(),v=m._nextUint16(),_=m._nextUint32(),x=m._nextUint32(),C=m._nextUint32(),b=m._nextUint32(),y=[];for(let G=0;G<s;G++)y.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const S=h+m._offset,T=S+_,U=T+x,Y=U+C,N=new Uint8Array(a.buffer,a.byteOffset+S,_),R=new Uint8Array(a.buffer,a.byteOffset+T,x),P=new Uint8Array(a.buffer,a.byteOffset+U,C),z=new Uint8Array(a.buffer,a.byteOffset+Y,b);return t.globalData={endpointCount:E,selectorCount:v,imageDescs:y,endpointsData:N,selectorsData:R,tablesData:P,extendedData:z},t}let yl,Xi,Kc;const El={env:{emscripten_notify_memory_growth:function(a){Kc=new Uint8Array(Xi.exports.memory.buffer)}}};class NI{init(){return yl||(yl=typeof fetch<"u"?fetch("data:application/wasm;base64,"+md).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,El)).then(this._init):WebAssembly.instantiate(Buffer.from(md,"base64"),El).then(this._init),yl)}_init(e){Xi=e.instance,El.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Xi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,n=Xi.exports.malloc(i);Kc.set(e,n),t=t||Number(Xi.exports.ZSTD_findDecompressedSize(n,i));const s=Xi.exports.malloc(t),r=Xi.exports.ZSTD_decompress(s,t,n,i),o=Kc.slice(s,s+r);return Xi.exports.free(n),Xi.exports.free(s),o}}const md="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",xl=new WeakMap;let Il=0,Cl;class wi extends Tn{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new bI,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new In(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new In(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,n]).then(([s,r])=>{const o=wi.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(wi.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(wi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(wi.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),Il>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Il++}return this.transcoderPending}load(e,t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new In(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(e,r=>{if(xl.has(r))return xl.get(r).promise.then(t).catch(n);this._createTexture(r).then(o=>t?t(o):null).catch(n)},i,n)}_createTextureFrom(e,t){const{mipmaps:i,width:n,height:s,format:r,type:o,error:l,dfdTransferFn:c,dfdFlags:h}=e;if(o==="error")return Promise.reject(l);const u=t.layerCount>1?new qE(i,n,s,t.layerCount,r,Qt):new pp(i,n,s,r,Qt);return u.minFilter=i.length===1?tt:rn,u.magFilter=tt,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=c===LI?Re:St,u.premultiplyAlpha=!!(h&RI),u}async _createTexture(e,t={}){const i=PI(new Uint8Array(e));if(i.vkFormat!==DI)return UI(i);const n=t,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:n},[e])).then(r=>this._createTextureFrom(r.data,i));return xl.set(e,{promise:s}),s}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Il--,this}}wi.BasisFormat={ETC1S:0,UASTC_4x4:1};wi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};wi.EngineFormat={RGBAFormat:ot,RGBA_ASTC_4x4_Format:Qc,RGBA_BPTC_Format:Pc,RGBA_ETC2_EAC_Format:Dc,RGBA_PVRTC_4BPPV1_Format:Rc,RGBA_S3TC_DXT5_Format:ra,RGB_ETC1_Format:Wf,RGB_ETC2_Format:Lc,RGB_PVRTC_4BPPV1_Format:Tc,RGB_S3TC_DXT1_Format:sa};wi.BasisWorker=function(){let a,e,t;const i=_EngineFormat,n=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(g){const p=g.data;switch(p.type){case"init":a=p.config,r(p.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:f,height:m,hasAlpha:E,mipmaps:v,format:_,dfdTransferFn:x,dfdFlags:C}=o(p.buffer),b=[];for(let y=0;y<v.length;++y)b.push(v[y].data.buffer);self.postMessage({type:"transcode",id:p.id,width:f,height:m,hasAlpha:E,mipmaps:v,format:_,dfdTransferFn:x,dfdFlags:C},b)}catch(f){console.error(f),self.postMessage({type:"error",id:p.id,error:f.message})}});break}});function r(g){e=new Promise(p=>{t={wasmBinary:g,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function o(g){const p=new t.KTX2File(new Uint8Array(g));function f(){p.close(),p.delete()}if(!p.isValid())throw f(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const m=p.isUASTC()?s.UASTC_4x4:s.ETC1S,E=p.getWidth(),v=p.getHeight(),_=p.getLayers()||1,x=p.getLevels(),C=p.getHasAlpha(),b=p.getDFDTransferFunc(),y=p.getDFDFlags(),{transcoderFormat:S,engineFormat:T}=u(m,E,v,C);if(!E||!v||!x)throw f(),new Error("THREE.KTX2Loader:	Invalid texture");if(!p.startTranscoding())throw f(),new Error("THREE.KTX2Loader: .startTranscoding failed");const U=[];for(let Y=0;Y<x;Y++){const N=[];let R,P;for(let z=0;z<_;z++){const G=p.getImageLevelInfo(Y,z,0);R=G.origWidth,P=G.origHeight;const F=new Uint8Array(p.getImageTranscodedSizeInBytes(Y,z,0,S));if(!p.transcodeImage(F,Y,z,0,S,0,-1,-1))throw f(),new Error("THREE.KTX2Loader: .transcodeImage failed.");N.push(F)}U.push({data:A(N),width:R,height:P})}return f(),{width:E,height:v,hasAlpha:C,mipmaps:U,format:T,dfdTransferFn:b,dfdFlags:y}}const l=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[i.RGB_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(g,p){return g.priorityETC1S-p.priorityETC1S}),h=l.sort(function(g,p){return g.priorityUASTC-p.priorityUASTC});function u(g,p,f,m){let E,v;const _=g===s.ETC1S?c:h;for(let x=0;x<_.length;x++){const C=_[x];if(a[C.if]&&C.basisFormat.includes(g)&&!(m&&C.transcoderFormat.length<2)&&!(C.needsPowerOfTwo&&!(d(p)&&d(f))))return E=C.transcoderFormat[m?1:0],v=C.engineFormat[m?1:0],{transcoderFormat:E,engineFormat:v}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),E=n.RGBA32,v=i.RGBAFormat,{transcoderFormat:E,engineFormat:v}}function d(g){return g<=2?!0:(g&g-1)===0&&g!==0}function A(g){let p=0;for(const E of g)p+=E.byteLength;const f=new Uint8Array(p);let m=0;for(const E of g)f.set(E,m),m+=E.byteLength;return f}};const vd={[Fp]:ot,[Qp]:ot,[Rp]:ot,[Lh]:ot,[Np]:Fr,[Dp]:Fr,[Tp]:Fr,[Rh]:Fr,[Pp]:Nr,[Lp]:Nr,[Th]:Nr,[Bp]:Nr},wl={[Fp]:Pt,[Qp]:Nt,[Rp]:Qt,[Lh]:Qt,[Np]:Pt,[Dp]:Nt,[Tp]:Qt,[Rh]:Qt,[Pp]:Pt,[Lp]:Nt,[Th]:Qt,[Bp]:Qt},FI={[Lh]:Re,[Rh]:Re,[Th]:Re};async function UI(a){const{vkFormat:e,pixelWidth:t,pixelHeight:i,pixelDepth:n}=a;if(vd[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const s=a.levels[0];let r,o;if(a.supercompressionScheme===BI)r=s.levelData;else if(a.supercompressionScheme===TI)Cl||(Cl=new Promise(async c=>{const h=new NI;await h.init(),c(h)})),r=(await Cl).decode(s.levelData,s.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");wl[e]===Pt?o=new Float32Array(r.buffer,r.byteOffset,r.byteLength/Float32Array.BYTES_PER_ELEMENT):wl[e]===Nt?o=new Uint16Array(r.buffer,r.byteOffset,r.byteLength/Uint16Array.BYTES_PER_ELEMENT):o=r;const l=n===0?new xh(o,t,i):new ep(o,t,i,n);return l.type=wl[e],l.format=vd[e],l.encoding=FI[e]||St,l.needsUpdate=!0,Promise.resolve(l)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _d,yd;const ui=Symbol("retainerCount"),Gi=Symbol("recentlyUsed"),Fo=Symbol("evict"),Er=Symbol("evictionThreshold"),Sl=Symbol("cache");class OI{constructor(e,t=5){this[_d]=new Map,this[yd]=[],this[Sl]=e,this[Er]=t}set evictionThreshold(e){this[Er]=e,this[Fo]()}get evictionThreshold(){return this[Er]}get cache(){return this[Sl]}retainerCount(e){return this[ui].get(e)||0}reset(){this[ui].clear(),this[Gi]=[]}retain(e){this[ui].has(e)||this[ui].set(e,0),this[ui].set(e,this[ui].get(e)+1);const t=this[Gi].indexOf(e);t!==-1&&this[Gi].splice(t,1),this[Gi].unshift(e),this[Fo]()}release(e){this[ui].has(e)&&this[ui].set(e,Math.max(this[ui].get(e)-1,0)),this[Fo]()}[(_d=ui,yd=Gi,Fo)](){if(!(this[Gi].length<this[Er]))for(let e=this[Gi].length-1;e>=this[Er];--e){const t=this[Gi][e];this[ui].get(t)===0&&(this[Sl].delete(t),this[Gi].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=a=>{const e=[],t=new Set;for(const i of a){let n=i,s=0;for(;t.has(n);)n=i+"."+ ++s;t.add(n),e.push(n)}return e},GI=a=>{const e=new Map;for(const t of a.mappings)for(const i of t.variants)e.set(i,{material:null,gltfMaterialIndex:t.material});return e};class zI{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,i=t.json;if(i.extensions===void 0||i.extensions[this.name]===void 0)return null;const s=i.extensions[this.name].variants||[],r=kI(s.map(o=>o.name));for(const o of e.scenes)o.traverse(l=>{const c=l;if(!c.isMesh)return;const h=t.associations.get(c);if(h==null||h.meshes==null||h.primitives==null)return;const g=i.meshes[h.meshes].primitives[h.primitives].extensions;!g||!g[this.name]||(c.userData.variantMaterials=GI(g[this.name]))});return e.userData.variants=r,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Up,Ed;const VI=(a,e,t=()=>{})=>{const i=n=>{const s=n.loaded/n.total;t(Math.max(0,Math.min(1,isFinite(s)?s:1)))};return new Promise((n,s)=>{e.load(a,n,i,s)})},HI=a=>new Promise((e,t)=>{const i=document.createElement("script");document.body.appendChild(i),i.onload=e,i.onerror=t,i.async=!0,i.src=a}),zi=new Map,Ml=new Map;let xd;const Id=new Kx;let Cd;const bl=new wi;let Bl,Tl;const Wn=Symbol("loader"),_n=Symbol("evictionPolicy"),wd=Symbol("GLTFInstance");class ft extends ri{constructor(e){super(),this[Ed]=new $x().register(t=>new zI(t)),this[wd]=e,this[Wn].setDRACOLoader(Id),this[Wn].setKTX2Loader(bl)}static setDRACODecoderLocation(e){xd=e,Id.setDecoderPath(e)}static getDRACODecoderLocation(){return xd}static setKTX2TranscoderLocation(e){Cd=e,bl.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return Cd}static setMeshoptDecoderLocation(e){Bl!==e&&(Bl=e,Tl=HI(e).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Bl}static initializeKTX2Loader(e){bl.detectSupport(e)}static get cache(){return zi}static clearCache(){zi.forEach((e,t)=>{this.delete(t)}),this[_n].reset()}static has(e){return zi.has(e)}static async delete(e){if(!this.has(e))return;const t=zi.get(e);Ml.delete(e),zi.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!Ml.get(e)}get[(Up=_n,Ed=Wn,_n)](){return this.constructor[_n]}async preload(e,t,i=()=>{}){if(this[Wn].setWithCredentials(ft.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!zi.has(e)){Tl!=null&&this[Wn].setMeshoptDecoder(await Tl);const n=VI(e,this[Wn],o=>{i(o*.8)}),s=this[wd],r=n.then(o=>s.prepare(o)).then(o=>(i(.9),new s(o))).catch(o=>(console.error(o),new s));zi.set(e,r)}await zi.get(e),Ml.set(e,!0),i&&i(1)}async load(e,t,i=()=>{}){await this.preload(e,t,i);const s=await(await zi.get(e)).clone();return this[_n].retain(e),s.dispose=()=>{this[_n].release(e)},s}}ft[Up]=new OI(ft);class WI extends Ke{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const bs=new B,Sd=new we,Md=new we,bd=new B,Bd=new B;class qI{constructor(e={}){const t=this;let i,n,s,r;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:n}},this.render=function(A,g){A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Sd.copy(g.matrixWorldInverse),Md.multiplyMatrices(g.projectionMatrix,Sd),c(A,A,g),d(A)},this.setSize=function(A,g){i=A,n=g,s=i/2,r=n/2,l.style.width=A+"px",l.style.height=g+"px"};function c(A,g,p){if(A.isCSS2DObject){bs.setFromMatrixPosition(A.matrixWorld),bs.applyMatrix4(Md);const f=A.visible===!0&&bs.z>=-1&&bs.z<=1&&A.layers.test(p.layers)===!0;if(A.element.style.display=f===!0?"":"none",f===!0){A.onBeforeRender(t,g,p);const E=A.element;E.style.transform="translate(-50%,-50%) translate("+(bs.x*s+s)+"px,"+(-bs.y*r+r)+"px)",E.parentNode!==l&&l.appendChild(E),A.onAfterRender(t,g,p)}const m={distanceToCameraSquared:h(p,A)};o.objects.set(A,m)}for(let f=0,m=A.children.length;f<m;f++)c(A.children[f],g,p)}function h(A,g){return bd.setFromMatrixPosition(A.matrixWorld),Bd.setFromMatrixPosition(g.matrixWorld),bd.distanceToSquared(Bd)}function u(A){const g=[];return A.traverse(function(p){p.isCSS2DObject&&g.push(p)}),g}function d(A){const g=u(A).sort(function(f,m){if(f.renderOrder!==m.renderOrder)return m.renderOrder-f.renderOrder;const E=o.objects.get(f).distanceToCameraSquared,v=o.objects.get(m).distanceToCameraSquared;return E-v}),p=g.length;for(let f=0,m=g.length;f<m;f++)g[f].element.style.zIndex=p-f}}}class Dh{constructor(){this.pluginCallbacks=[],this.register(function(e){return new tC(e)}),this.register(function(e){return new iC(e)}),this.register(function(e){return new nC(e)}),this.register(function(e){return new oC(e)}),this.register(function(e){return new aC(e)}),this.register(function(e){return new sC(e)}),this.register(function(e){return new rC(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){const s=new eC,r=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)r.push(this.pluginCallbacks[o](s));s.setPlugins(r),s.write(e,t,n).catch(i)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,n,s,t)})}}const He={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123,FLOAT:5126,UNSIGNED_INT:5125,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Kt={};Kt[pt]=He.NEAREST;Kt[va]=He.NEAREST_MIPMAP_NEAREST;Kt[_a]=He.NEAREST_MIPMAP_LINEAR;Kt[tt]=He.LINEAR;Kt[hh]=He.LINEAR_MIPMAP_NEAREST;Kt[rn]=He.LINEAR_MIPMAP_LINEAR;Kt[Ct]=He.CLAMP_TO_EDGE;Kt[sn]=He.REPEAT;Kt[Zr]=He.MIRRORED_REPEAT;const Td={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Rd=12,YI=1179937895,XI=2,Ld=8,KI=1313821514,JI=5130562;function Gr(a,e){return a.length===e.length&&a.every(function(t,i){return t===e[i]})}function $I(a){return new TextEncoder().encode(a).buffer}function jI(a){return Gr(a.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function ZI(a,e,t){const i={min:new Array(a.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(a.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let n=e;n<e+t;n++)for(let s=0;s<a.itemSize;s++){let r;a.itemSize>4?r=a.array[n*a.itemSize+s]:s===0?r=a.getX(n):s===1?r=a.getY(n):s===2?r=a.getZ(n):s===3&&(r=a.getW(n)),i.min[s]=Math.min(i.min[s],r),i.max[s]=Math.max(i.max[s],r)}return i}function Op(a){return Math.ceil(a/4)*4}function Rl(a,e=0){const t=Op(a.byteLength);if(t!==a.byteLength){const i=new Uint8Array(t);if(i.set(new Uint8Array(a)),e!==0)for(let n=a.byteLength;n<t;n++)i[n]=e;return i.buffer}return a}function Dd(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Qd(a,e){if(a.toBlob!==void 0)return new Promise(i=>a.toBlob(i,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),a.convertToBlob({type:e,quality:t})}class eC{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,i){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const n=this,s=n.buffers,r=n.json;i=n.options;const o=n.extensionsUsed,l=new Blob(s,{type:"application/octet-stream"}),c=Object.keys(o);if(c.length>0&&(r.extensionsUsed=c),r.buffers&&r.buffers.length>0&&(r.buffers[0].byteLength=l.size),i.binary===!0){const h=new FileReader;h.readAsArrayBuffer(l),h.onloadend=function(){const u=Rl(h.result),d=new DataView(new ArrayBuffer(Ld));d.setUint32(0,u.byteLength,!0),d.setUint32(4,JI,!0);const A=Rl($I(JSON.stringify(r)),32),g=new DataView(new ArrayBuffer(Ld));g.setUint32(0,A.byteLength,!0),g.setUint32(4,KI,!0);const p=new ArrayBuffer(Rd),f=new DataView(p);f.setUint32(0,YI,!0),f.setUint32(4,XI,!0);const m=Rd+g.byteLength+A.byteLength+d.byteLength+u.byteLength;f.setUint32(8,m,!0);const E=new Blob([p,g,A,d,u],{type:"application/octet-stream"}),v=new FileReader;v.readAsArrayBuffer(E),v.onloadend=function(){t(v.result)}}}else if(r.buffers&&r.buffers.length>0){const h=new FileReader;h.readAsDataURL(l),h.onloadend=function(){const u=h.result;r.buffers[0].uri=u,t(r)}}else t(r)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const i=this.options,n=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const r in s.gltfExtensions)t.extensions[r]=s.gltfExtensions[r],n[r]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const n=new Map;n.set(!0,this.uid++),n.set(!1,this.uid++),this.uids.set(e,n)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new B;for(let n=0,s=e.count;n<s;n++)if(Math.abs(i.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const i=e.clone(),n=new B;for(let s=0,r=i.count;s<r;s++)n.fromBufferAttribute(i,s),n.x===0&&n.y===0&&n.z===0?n.setX(1):n.normalize(),i.setXYZ(s,n.x,n.y,n.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1;const n={};(t.offset.x!==0||t.offset.y!==0)&&(n.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(n.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(n.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=n,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function i(A){return A.encoding===Re?function(p){return p<.04045?p*.0773993808:Math.pow(p*.9478672986+.0521327014,2.4)}:function(p){return p}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const n=e==null?void 0:e.image,s=t==null?void 0:t.image,r=Math.max((n==null?void 0:n.width)||0,(s==null?void 0:s.width)||0),o=Math.max((n==null?void 0:n.height)||0,(s==null?void 0:s.height)||0),l=Dd();l.width=r,l.height=o;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,r,o);const h=c.getImageData(0,0,r,o);if(n){c.drawImage(n,0,0,r,o);const A=i(e),g=c.getImageData(0,0,r,o).data;for(let p=2;p<g.length;p+=4)h.data[p]=A(g[p]/256)*256}if(s){c.drawImage(s,0,0,r,o);const A=i(t),g=c.getImageData(0,0,r,o).data;for(let p=1;p<g.length;p+=4)h.data[p]=A(g[p]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new gh(l),d.encoding=St,d}processBuffer(e){const t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,n,s){const r=this.json;r.bufferViews||(r.bufferViews=[]);let o;t===He.UNSIGNED_BYTE?o=1:t===He.UNSIGNED_SHORT?o=2:o=4;const l=Op(n*e.itemSize*o),c=new DataView(new ArrayBuffer(l));let h=0;for(let A=i;A<i+n;A++)for(let g=0;g<e.itemSize;g++){let p;e.itemSize>4?p=e.array[A*e.itemSize+g]:g===0?p=e.getX(A):g===1?p=e.getY(A):g===2?p=e.getZ(A):g===3&&(p=e.getW(A)),t===He.FLOAT?c.setFloat32(h,p,!0):t===He.UNSIGNED_INT?c.setUint32(h,p,!0):t===He.UNSIGNED_SHORT?c.setUint16(h,p,!0):t===He.UNSIGNED_BYTE&&c.setUint8(h,p),h+=o}const u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return s!==void 0&&(u.target=s),s===He.ARRAY_BUFFER&&(u.byteStride=e.itemSize*o),this.byteOffset+=l,r.bufferViews.push(u),{id:r.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(n){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const r=Rl(s.result),o={buffer:t.processBuffer(r),byteOffset:t.byteOffset,byteLength:r.byteLength};t.byteOffset+=r.byteLength,n(i.bufferViews.push(o)-1)}})}processAccessor(e,t,i,n){const s=this.json,r={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=He.FLOAT;else if(e.array.constructor===Uint32Array)o=He.UNSIGNED_INT;else if(e.array.constructor===Uint16Array)o=He.UNSIGNED_SHORT;else if(e.array.constructor===Uint8Array)o=He.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");if(i===void 0&&(i=0),n===void 0&&(n=e.count),n===0)return null;const l=ZI(e,i,n);let c;t!==void 0&&(c=e===t.index?He.ELEMENT_ARRAY_BUFFER:He.ARRAY_BUFFER);const h=this.processBufferView(e,o,i,n,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:n,max:l.max,min:l.min,type:r[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(u)-1}processImage(e,t,i,n="image/png"){const s=this,r=s.cache,o=s.json,l=s.options,c=s.pending;r.images.has(e)||r.images.set(e,{});const h=r.images.get(e),u=n+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:n},A=Dd();A.width=Math.min(e.width,l.maxTextureSize),A.height=Math.min(e.height,l.maxTextureSize);const g=A.getContext("2d");if(i===!0&&(g.translate(0,A.height),g.scale(1,-1)),e.data!==void 0){t!==ot&&console.error("GLTFExporter: Only RGBAFormat is supported."),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const f=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<f.length;m+=4)f[m+0]=e.data[m+0],f[m+1]=e.data[m+1],f[m+2]=e.data[m+2],f[m+3]=e.data[m+3];g.putImageData(new ImageData(f,e.width,e.height),0,0)}else g.drawImage(e,0,0,A.width,A.height);l.binary===!0?c.push(Qd(A,n).then(f=>s.processBufferViewImage(f)).then(f=>{d.bufferView=f})):A.toDataURL!==void 0?d.uri=A.toDataURL(n):c.push(Qd(A,n).then(f=>new FileReader().readAsDataURL(f)).then(f=>{d.uri=f}));const p=o.images.push(d)-1;return h[u]=p,p}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const i={magFilter:Kt[e.magFilter],minFilter:Kt[e.minFilter],wrapS:Kt[e.wrapS],wrapT:Kt[e.wrapT]};return t.samplers.push(i)-1}processTexture(e){const t=this.cache,i=this.json;if(t.textures.has(e))return t.textures.get(e);i.textures||(i.textures=[]);let n=e.userData.mimeType;n==="image/webp"&&(n="image/png");const s={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,n)};e.name&&(s.name=e.name),this._invokeAll(function(o){o.writeTexture&&o.writeTexture(e,s)});const r=i.textures.push(s)-1;return t.textures.set(e,r),r}processMaterial(e){const t=this.cache,i=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const n={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Gr(s,[1,1,1,1])||(n.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(n.pbrMetallicRoughness.metallicFactor=e.metalness,n.pbrMetallicRoughness.roughnessFactor=e.roughness):(n.pbrMetallicRoughness.metallicFactor=.5,n.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(o)};this.applyTextureTransform(l,o),n.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:this.processTexture(e.map)};this.applyTextureTransform(o,e.map),n.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive.clone().multiplyScalar(e.emissiveIntensity),l=Math.max(o.r,o.g,o.b);if(l>1&&(o.multiplyScalar(1/l),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),l>0&&(n.emissiveFactor=o.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(c,e.emissiveMap),n.emissiveTexture=c}}if(e.normalMap){const o={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),n.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),n.occlusionTexture=o}e.transparent?n.alphaMode="BLEND":e.alphaTest>0&&(n.alphaMode="MASK",n.alphaCutoff=e.alphaTest),e.side===zt&&(n.doubleSided=!0),e.name!==""&&(n.name=e.name),this.serializeUserData(e,n),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,n)});const r=i.materials.push(n)-1;return t.materials.set(e,r),r}processMesh(e){const t=this.cache,i=this.json,n=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,_=e.material.length;v<_;v++)n.push(e.material[v].uuid);else n.push(e.material.uuid);const s=n.join(":");if(t.meshes.has(s))return t.meshes.get(s);const r=e.geometry;let o;e.isLineSegments?o=He.LINES:e.isLineLoop?o=He.LINE_LOOP:e.isLine?o=He.LINE_STRIP:e.isPoints?o=He.POINTS:o=e.material.wireframe?He.LINES:He.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},A=r.getAttribute("normal");A!==void 0&&!this.isNormalizedNormalAttribute(A)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),r.setAttribute("normal",this.createNormalizedNormalAttribute(A)));let g=null;for(let v in r.attributes){if(v.slice(0,5)==="morph")continue;const _=r.attributes[v];if(v=d[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),t.attributes.has(this.getUID(_))){c[v]=t.attributes.get(this.getUID(_));continue}g=null;const C=_.array;v==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new at(new Uint16Array(C),_.itemSize,_.normalized));const b=this.processAccessor(g||_,r);b!==null&&(c[v]=b,t.attributes.set(this.getUID(_),b))}if(A!==void 0&&r.setAttribute("normal",A),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const v=[],_=[],x={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)x[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const b={};let y=!1;for(const S in r.morphAttributes){if(S!=="position"&&S!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const T=r.morphAttributes[S][C],U=S.toUpperCase(),Y=r.attributes[S];if(t.attributes.has(this.getUID(T,!0))){b[U]=t.attributes.get(this.getUID(T,!0));continue}const N=T.clone();if(!r.morphTargetsRelative)for(let R=0,P=T.count;R<P;R++)N.setXYZ(R,T.getX(R)-Y.getX(R),T.getY(R)-Y.getY(R),T.getZ(R)-Y.getZ(R));b[U]=this.processAccessor(N,r),t.attributes.set(this.getUID(Y,!0),b[U])}u.push(b),v.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&_.push(x[C])}l.weights=v,_.length>0&&(l.extras={},l.extras.targetNames=_)}const p=Array.isArray(e.material);if(p&&r.groups.length===0)return null;const f=p?e.material:[e.material],m=p?r.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,_=m.length;v<_;v++){const x={mode:o,attributes:c};if(this.serializeUserData(r,x),u.length>0&&(x.targets=u),r.index!==null){let b=this.getUID(r.index);(m[v].start!==void 0||m[v].count!==void 0)&&(b+=":"+m[v].start+":"+m[v].count),t.attributes.has(b)?x.indices=t.attributes.get(b):(x.indices=this.processAccessor(r.index,r,m[v].start,m[v].count),t.attributes.set(b,x.indices)),x.indices===null&&delete x.indices}const C=this.processMaterial(f[m[v].materialIndex]);C!==null&&(x.material=C),h.push(x)}l.primitives=h,i.meshes||(i.meshes=[]),this._invokeAll(function(v){v.writeMesh&&v.writeMesh(e,l)});const E=i.meshes.push(l)-1;return t.meshes.set(s,E),E}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const i=e.isOrthographicCamera,n={type:i?"orthographic":"perspective"};return i?n.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:n.perspective={aspectRatio:e.aspect,yfov:Kf.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(n.name=e.type),t.cameras.push(n)-1}processAnimation(e,t){const i=this.json,n=this.nodeMap;i.animations||(i.animations=[]),e=Dh.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,r=[],o=[];for(let l=0;l<s.length;++l){const c=s[l],h=Qe.parseTrackName(c.name);let u=Qe.findNode(t,h.nodeName);const d=Td[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const A=1;let g=c.values.length/c.times.length;d===Td.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let p;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",g/=3):c.getInterpolation()===er?p="STEP":p="LINEAR",o.push({input:this.processAccessor(new at(c.times,A)),output:this.processAccessor(new at(c.values,g)),interpolation:p}),r.push({sampler:o.length-1,target:{node:n.get(u),path:d}})}return i.animations.push({name:e.name||"clip_"+i.animations.length,samplers:o,channels:r}),i.animations.length-1}processSkin(e){const t=this.json,i=this.nodeMap,n=t.nodes[i.get(e)],s=e.skeleton;if(s===void 0)return null;const r=e.skeleton.bones[0];if(r===void 0)return null;const o=[],l=new Float32Array(s.bones.length*16),c=new we;for(let u=0;u<s.bones.length;++u)o.push(i.get(s.bones[u])),c.copy(s.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new at(l,16)),joints:o,skeleton:i.get(r)}),n.skin=t.skins.length-1}processNode(e){const t=this.json,i=this.options,n=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(i.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Gr(o,[0,0,0,1])||(s.rotation=o),Gr(l,[0,0,0])||(s.translation=l),Gr(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),jI(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(s.mesh=o)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||i.onlyVisible===!1){const u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(s.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,s)});const r=t.nodes.push(s)-1;return n.set(e,r),r}processScene(e){const t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);const n={};e.name!==""&&(n.name=e.name),t.scenes.push(n);const s=[];for(let r=0,o=e.children.length;r<o;r++){const l=e.children[r];if(l.visible||i.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(n.nodes=s),this.serializeUserData(e,n)}processObjects(e){const t=new Cn;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(n){n.beforeParse&&n.beforeParse(e)});const i=[];for(let n=0;n<e.length;n++)e[n]instanceof Cn?this.processScene(e[n]):i.push(e[n]);i.length>0&&this.processObjects(i);for(let n=0;n<this.skins.length;++n)this.processSkin(this.skins[n]);for(let n=0;n<t.animations.length;++n)this.processAnimation(t.animations[n],e[0]);this._invokeAll(function(n){n.afterParse&&n.afterParse(e)})}_invokeAll(e){for(let t=0,i=this.plugins.length;t<i;t++)e(this.plugins[t])}}class tC{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,n=i.json,s=i.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,r.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(n.extensions=n.extensions||{},n.extensions[this.name]={lights:[]},s[this.name]=!0);const o=n.extensions[this.name].lights;o.push(r),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class iC{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},n[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class nC{constructor(e){this.writer=e,this.name="KHR_materials_pbrSpecularGlossiness"}writeMaterial(e,t){if(!e.isGLTFSpecularGlossinessMaterial)return;const i=this.writer,n=i.extensionsUsed,s={};t.pbrMetallicRoughness.baseColorFactor&&(s.diffuseFactor=t.pbrMetallicRoughness.baseColorFactor);const r=[1,1,1];if(e.specular.toArray(r,0),s.specularFactor=r,s.glossinessFactor=e.glossiness,t.pbrMetallicRoughness.baseColorTexture&&(s.diffuseTexture=t.pbrMetallicRoughness.baseColorTexture),e.specularMap){const o={index:i.processTexture(e.specularMap)};i.applyTextureTransform(o,e.specularMap),s.specularGlossinessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class sC{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial)return;const i=this.writer,n=i.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const r={index:i.processTexture(e.clearcoatMap)};i.applyTextureTransform(r,e.clearcoatMap),s.clearcoatTexture=r}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const r={index:i.processTexture(e.clearcoatRoughnessMap)};i.applyTextureTransform(r,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=r}if(e.clearcoatNormalMap){const r={index:i.processTexture(e.clearcoatNormalMap)};i.applyTextureTransform(r,e.clearcoatNormalMap),s.clearcoatNormalTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class rC{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial)return;const i=this.writer,n=i.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const r={index:i.processTexture(e.iridescenceMap)};i.applyTextureTransform(r,e.iridescenceMap),s.iridescenceTexture=r}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const r={index:i.processTexture(e.iridescenceThicknessMap)};i.applyTextureTransform(r,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class oC{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,n=i.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const r={index:i.processTexture(e.transmissionMap)};i.applyTextureTransform(r,e.transmissionMap),s.transmissionTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class aC{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,n=i.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const r={index:i.processTexture(e.thicknessMap)};i.applyTextureTransform(r,e.thicknessMap),s.thicknessTexture=r}s.attenuationDistance=e.attenuationDistance,s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}Dh.Utils={insertKeyframe:function(a,e){const i=a.getValueSize(),n=new a.TimeBufferType(a.times.length+1),s=new a.ValueBufferType(a.values.length+i),r=a.createInterpolant(new a.ValueBufferType(i));let o;if(a.times.length===0){n[0]=e;for(let l=0;l<i;l++)s[l]=0;o=0}else if(e<a.times[0]){if(Math.abs(a.times[0]-e)<.001)return 0;n[0]=e,n.set(a.times,1),s.set(r.evaluate(e),0),s.set(a.values,i),o=0}else if(e>a.times[a.times.length-1]){if(Math.abs(a.times[a.times.length-1]-e)<.001)return a.times.length-1;n[n.length-1]=e,n.set(a.times,0),s.set(a.values,0),s.set(r.evaluate(e),a.values.length),o=n.length-1}else for(let l=0;l<a.times.length;l++){if(Math.abs(a.times[l]-e)<.001)return l;if(a.times[l]<e&&a.times[l+1]>e){n.set(a.times.slice(0,l+1),0),n[l+1]=e,n.set(a.times.slice(l+1),l+2),s.set(a.values.slice(0,(l+1)*i),0),s.set(r.evaluate(e),(l+1)*i),s.set(a.values.slice((l+1)*i),(l+2)*i),o=l+1;break}}return a.times=n,a.values=s,o},mergeMorphTargetTracks:function(a,e){const t=[],i={},n=a.tracks;for(let s=0;s<n.length;++s){let r=n[s];const o=Qe.parseTrackName(r.name),l=Qe.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(r);continue}if(r.createInterpolant!==r.InterpolantFactoryMethodDiscrete&&r.createInterpolant!==r.InterpolantFactoryMethodLinear){if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),r=r.clone(),r.setInterpolation(is)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(i[l.uuid]===void 0){u=r.clone();const A=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)A[g*c+h]=u.values[g];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=A,i[l.uuid]=u,t.push(u);continue}const d=r.createInterpolant(new r.ValueBufferType(1));u=i[l.uuid];for(let A=0;A<u.times.length;A++)u.values[A*c+h]=d.evaluate(u.times[A]);for(let A=0;A<r.times.length;A++){const g=this.insertKeyframe(u,r.times[A]);u.values[g*c+h]=r.values[A]}}return a.tracks=t,a}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=a=>a.material!==void 0&&a.userData&&a.userData.variantMaterials&&!!Array.from(a.userData.variantMaterials.values()).filter(e=>ca(e.material)),ca=a=>a&&a.isMaterial&&!Array.isArray(a);class lC{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const i of e)i.traverse(n=>{if(!Pd(n))return;const s=n.userData.variantMaterials,r=n.userData.variantData;for(const[o,l]of r){const c=s.get(l.index);c&&ca(c.material)&&t.add(o)}});t.forEach(i=>this.variantNames.push(i))}writeMesh(e,t){if(!Pd(e))return;const i=e.userData,n=i.variantMaterials,s=i.variantData,r=new Map,o=new Map,l=Array.from(s.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())o.set(d.index,u);for(const u of s.values()){const d=n.get(u.index);if(!d||!ca(d.material))continue;const A=this.writer.processMaterial(d.material);r.has(A)||r.set(A,{material:A,variants:[]}),r.get(A).variants.push(o.get(u.index))}const c=Array.from(r.values()).map(u=>u.variants.sort((d,A)=>d-A)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=ca(i.originalMaterial)?this.writer.processMaterial(i.originalMaterial):-1;for(const u of t.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(i=>({name:i}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}class cC{constructor(e,t,i,n,s){this.xrLight=e,this.renderer=t,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const r=t.xr.getSession();if(n&&"XRWebGLBinding"in window){const o=new vh(16);e.environment=o.texture;const l=t.getContext();switch(r.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(r,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}r.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const n=t.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/s,n.primaryLightIntensity.y/s,n.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class hC extends xn{constructor(e,t=!0){super(),this.lightProbe=new cx,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new yp,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,n=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(r=>{i=new cC(this,e,r,t,()=>{n=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{i&&(i.dispose(),i=null),n&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=1e4,uC=.001,Gp=50;class Xt{constructor(e=Gp){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(uC,e)}update(e,t,i,n){const s=2e-4*this.naturalFrequency;if(e==null||n===0||e===t&&this.velocity===0)return t;if(i<0)return e;const r=e-t,o=this.velocity+this.naturalFrequency*r,l=r+i*o,c=Math.exp(-this.naturalFrequency*i),h=(o-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+o*c);return Math.abs(h)<s*Math.abs(n)&&u*r>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=.2,Nd=.03,dC=.75,zp=12,AC=Math.PI/(2*zp),Fd=new Be,Uo=(a,e,t)=>{let i=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let n=0;n<=zp;++n)a.push(e+(qs-Nd)*Math.cos(i),t+(qs-Nd)*Math.sin(i),0,e+qs*Math.cos(i),t+qs*Math.sin(i),0),i+=AC};class Ud extends _e{constructor(e,t){const i=new oi,n=[],s=[],{size:r,boundingBox:o}=e,l=r.x/2,c=(t==="back"?r.y:r.z)/2;Uo(s,l,c),Uo(s,-l,c),Uo(s,-l,-c),Uo(s,l,-c);const h=s.length/3;for(let A=0;A<h-2;A+=2)n.push(A,A+1,A+3,A,A+3,A+2);const u=h-2;n.push(u,u+1,1,u,1,0),i.setAttribute("position",new bi(s,3)),i.setIndex(n),super(i),this.side=t;const d=this.material;switch(d.side=zt,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Xt,this.hitPlane=new _e(new cs(2*(l+qs),2*(c+qs))),this.hitPlane.visible=!1,this.hitPlane.material.side=zt,this.add(this.hitPlane),o.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.offsetHeight=0}getHit(e,t,i){Fd.set(t,-i),this.hitPlane.visible=!0;const n=e.positionAndNormalFromPoint(Fd,this.hitPlane);return this.hitPlane.visible=!1,n==null?null:n.position}getExpandedHit(e,t,i){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const n=this.getHit(e,t,i);return this.hitPlane.scale.set(1,1,1),n}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?dC:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:i}=this.hitPlane;t.dispose(),i.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=30,pC=.8,Od=1.5,gC=20,Vp=1.3,mC=1/Vp,vC=.25,_C=10,yn={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},Jc={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Oo=new B,yC=new we,EC=new B,xC=new yt(45,1,.1,100);class IC extends ri{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new B,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new B,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new B,this.goalYaw=0,this.goalScale=1,this.xDamper=new Xt,this.yDamper=new Xt,this.zDamper=new Xt,this.yawDamper=new Xt,this.scaleDamper=new Xt,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new Ud(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const i=this.transientHitTestSource;if(i==null)return;const n=this.frame.getHitTestResultsForTransientInput(i),s=this.presentedScene,r=this.placementBox;if(n.length===1){this.inputSource=t.inputSource;const{axes:o}=this.inputSource.gamepad,l=r.getHit(this.presentedScene,o[0],o[1]);r.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=o[0]*Od)}else if(n.length===2){r.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(n);this.firstRatio=o/s.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){ad();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return ad(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let i=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await i,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new hC(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const n=await this.resolveARSession();n.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const s=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");s.classList.add("enabled"),s.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=s;const r=await n.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.background=null,this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener("load",this.onUpdateScene);const o=gC*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});n.requestHitTestSource({space:r,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.currentSession=n,this.placementBox=new Ud(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:yn.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(this._presentedScene=null,t!=null){const{element:r}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(t.yaw=o);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l),t.setEnvironmentAndSkybox(r[Or],r[kr]);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.element.removeEventListener("load",this.onUpdateScene),t.orientHotspots(0),r.requestUpdate("cameraTarget"),r.requestUpdate("maxCameraOrbit"),r[oo](r.getBoundingClientRect())}this.renderer.height=0;const i=this.exitWebXRButtonContainer;i!=null&&(i.classList.remove("enabled"),i.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const n=this.transientHitTestSource;n!=null&&(n.cancel(),this.transientHitTestSource=null);const s=this.initialHitSource;s!=null&&(s.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:yn.NOT_PRESENTING})}updateView(e){const t=this.presentedScene,i=this.threeRenderer.xr;i.updateCamera(xC),t.xrCamera=i.getCamera();const{elements:n}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(n[1],n[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const o=e.recommendedViewportScale;e.requestViewportScale(Math.max(o,vC))}const r=this.currentSession.renderState.baseLayer.getViewport(e);this.threeRenderer.setViewport(r.x,r.y,r.width,r.height)}placeInitially(){const e=this.presentedScene,{position:t,element:i}=e,n=e.getCamera(),{width:s,height:r}=this.overlay.getBoundingClientRect();e.setSize(s,r),n.projectionMatrixInverse.copy(n.projectionMatrix).invert();const{theta:o,radius:l}=i.getCameraOrbit(),c=n.getWorldDirection(Oo);e.yaw=Math.atan2(-c.x,-c.z)-o,this.goalYaw=e.yaw,t.copy(n.position).add(c.multiplyScalar(l)),this.updateTarget();const h=e.getTarget();t.add(h).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Oo.copy(t).sub(this.presentedScene.getCamera().position),Oo.length()>_C)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),i=e.getPose(t);if(i==null)return null;const n=yC.fromArray(i.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(n.elements[4],n.elements[6])),n.elements[5]>.75!==this.placeOnWall?EC.setFromMatrixPosition(n):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const i=e.getHitTestResults(t);if(i.length==0)return;const n=i[0],s=this.getHitPoint(n);s!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(s):this.goalPosition.y=s.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:yn.OBJECT_PLACED}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,i=e[1].inputSource.gamepad.axes,n=i[0]-t[0],s=i[1]-t[1],r=Math.atan2(s,n);let o=this.lastAngle-r;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=r,{separation:Math.sqrt(n*n+s*s),deltaYaw:o}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const i=e.getHitTestResultsForTransientInput(t),n=this.presentedScene,s=n.scale.x;if(this.isTwoFingering){if(i.length<2)this.isTwoFingering=!1;else{const{separation:r,deltaYaw:o}=this.fingerPolar(i);if(this.placeOnWall===!1&&(this.goalYaw+=o),n.canScale){const l=r/this.firstRatio;this.goalScale=l<Vp&&l>mC?1:l}}return}else if(i.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:r}=this.fingerPolar(i);this.firstRatio=r/s;return}if(this.isRotating){const r=this.inputSource.gamepad.axes[0]*Od;this.goalYaw+=r-this.lastAngle,this.lastAngle=r}else this.isTranslating&&i.forEach(r=>{if(r.inputSource!==this.inputSource)return;let o=null;if(r.results.length>0&&(o=this.getHitPoint(r.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/s,this.presentedScene.setShadowOffset(l);const c=Oo.copy(n.getCamera().position),h=-l/(c.y-o.y);c.multiplyScalar(h),o.multiplyScalar(1-h).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}})}moveScene(e){const t=this.presentedScene,{position:i,yaw:n}=t,s=t.boundingSphere.radius,r=this.goalPosition,o=t.scale.x,l=this.placementBox;if(!r.equals(i)||this.goalScale!==o){let{x:c,y:h,z:u}=i;c=this.xDamper.update(c,r.x,e,s),h=this.yDamper.update(h,r.y,e,s),u=this.zDamper.update(u,r.z,e,s),i.set(c,h,u);const d=this.scaleDamper.update(o,this.goalScale,e,1);if(t.scale.set(d,d,d),!this.isTranslating){const A=r.y-h;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=A/d,t.setShadowOffset(A)):A===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(pC))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(n,this.goalYaw,e,Math.PI)}onWebXRFrame(e,t){this.frame=t,++this.frames;const i=this.threeRenderer.xr.getReferenceSpace(),n=t.getViewerPose(i);n==null&&this.tracking===!0&&this.frames>fC&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:Jc.NOT_TRACKING}));const s=this.presentedScene;if(n==null||s==null||!s.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Jc.TRACKING}));let r=!0;for(const o of n.views){if(this.updateView(o),r){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(s,e,l),this.lastTick=e,s.renderShadow(this.threeRenderer)}this.threeRenderer.render(s,s.getCamera()),r=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){e.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:e,THREE:{ShaderMaterial:mi,Texture:Ot,Mesh:_e,Scene:Cn,PlaneGeometry:cs,OrthographicCamera:rr,WebGLRenderTarget:gi}}}))})}addScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:e}}))}removeScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:e}}))}}function wC(a){const e=new Map,t=new Map,i=a.clone();return Hp(a,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,r=e.get(n),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Hp(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)Hp(a.children[i],e.children[i],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=Symbol("prepared"),Ia=Symbol("prepare"),yi=Symbol("preparedGLTF"),Ca=Symbol("clone");class SC{constructor(e){this[yi]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[kd])return e;const t=this[Ia](e);return t[kd]=!0,t}static[Ia](e){const{scene:t}=e,i=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:i})}get parser(){return this[yi].parser}get animations(){return this[yi].animations}get scene(){return this[yi].scene}get scenes(){return this[yi].scenes}get cameras(){return this[yi].cameras}get asset(){return this[yi].asset}get userData(){return this[yi].userData}clone(){const e=this.constructor,t=this[Ca]();return new e(t)}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{if(!t.isMesh)return;const i=t;(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{for(const r in s){const o=s[r];if(o instanceof Ot){const l=o.source.data;l.close!=null&&l.close(),o.dispose()}}s.dispose()}),i.geometry.dispose()})})}[Ca](){const e=this[yi],t=wC(this.scene);MC(t,this.scene);const i=[t],n=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:i,userData:n})}}const MC=(a,e)=>{Wp(a,e,(t,i)=>{i.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(i.userData.variantMaterials)),i.userData.variantData!==void 0&&(t.userData.variantData=i.userData.variantData),i.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=i.userData.originalMaterial)})},Wp=(a,e,t)=>{t(a,e);for(let i=0;i<a.children.length;i++)Wp(a.children[i],e.children[i],t)},Gd=Symbol("threeGLTF"),zd=Symbol("gltf"),Vd=Symbol("gltfElementMap"),Hd=Symbol("threeObjectMap"),Wd=Symbol("parallelTraverseThreeScene"),qd=Symbol("correlateOriginalThreeGLTF"),Yd=Symbol("correlateCloneThreeGLTF");class ro{constructor(e,t,i,n){this[Gd]=e,this[zd]=t,this[Vd]=n,this[Hd]=i}static from(e,t){return t!=null?this[Yd](e,t):this[qd](e)}static[qd](e){const t=e.parser.json,i=e.parser.associations,n=new Map,s={name:"Default"},r={type:"materials",index:-1};for(const o of i.keys())o instanceof pi&&i.get(o)==null&&(r.index<0&&(t.materials==null&&(t.materials=[]),r.index=t.materials.length,t.materials.push(s)),o.name=s.name,i.set(o,{materials:r.index}));for(const[o,l]of i){if(l){const c=o;c.userData=c.userData||{},c.userData.associations=l}for(const c in l)if(c!=null&&c!=="primitives"){const h=c,d=(t[h]||[])[l[h]];if(d==null)continue;let A=n.get(d);A==null&&(A=new Set,n.set(d,A)),A.add(o)}}return new ro(e,t,i,n)}static[Yd](e,t){const i=t.threeGLTF,n=t.gltf,s=JSON.parse(JSON.stringify(n)),r=new Map,o=new Map;for(let l=0;l<i.scenes.length;l++)this[Wd](i.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const A=d,g=u[A],p=s[A][g],f=r.get(h)||{};f[A]=g,r.set(h,f);const m=o.get(p)||new Set;m.add(h),o.set(p,m)}}});return new ro(e,s,r,o)}static[Wd](e,t,i){const n=r=>r.isMesh,s=(r,o)=>{if(i(r,o),r.isObject3D){if(n(r))if(Array.isArray(r.material))for(let l=0;l<r.material.length;++l)s(r.material[l],o.material[l]);else s(r.material,o.material);for(let l=0;l<r.children.length;++l)s(r.children[l],o.children[l])}};s(e,t)}get threeGLTF(){return this[Gd]}get gltf(){return this[zd]}get gltfElementMap(){return this[Vd]}get threeObjectMap(){return this[Hd]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=Symbol("correlatedSceneGraph");class bC extends SC{static[Ia](e){const t=super[Ia](e);t[xr]==null&&(t[xr]=ro.from(t));const{scene:i}=t,n=new bn(void 0,1/0);return i.traverse(s=>{s.renderOrder=1e3,s.frustumCulled=!1,s.name||(s.name=s.uuid);const r=s;if(r.isMesh){const{geometry:o}=r;r.castShadow=!0,r.isSkinnedMesh&&(o.boundingSphere=n,o.boundingBox=null);const l=r.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=nn,l.aoMap){const{gltf:c,threeObjectMap:h}=t[xr],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&o.attributes.uv!=null&&o.setAttribute("uv2",o.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[yi][xr]}[Ca](){const e=super[Ca](),t=new Map;return e.scene.traverse(i=>{if(i.isMesh){const n=i,s=n.material;if(s!=null){if(t.has(s.uuid)){n.material=t.get(s.uuid);return}n.material=s.clone(),t.set(s.uuid,n.material)}}}),e[xr]=ro.from(e,this.correlatedSceneGraph),e}}class BC extends nx{constructor(e){super(e),this.type=Nt}parse(e){const o=function(v,_){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(_||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(_||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(_||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(_||""))}return-1},u=`
`,d=function(v,_,x){_=_||1024;let b=v.pos,y=-1,S=0,T="",U=String.fromCharCode.apply(null,new Uint16Array(v.subarray(b,b+128)));for(;0>(y=U.indexOf(u))&&S<_&&b<v.byteLength;)T+=U,S+=U.length,b+=128,U+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(b,b+128)));return-1<y?(v.pos+=S+y+1,T+U.slice(0,y)):!1},A=function(v){const _=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*FORMAT=(\S+)\s*$/,y=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,S={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let T,U;if(v.pos>=v.byteLength||!(T=d(v)))return o(1,"no header found");if(!(U=T.match(_)))return o(3,"bad initial token");for(S.valid|=1,S.programtype=U[1],S.string+=T+`
`;T=d(v),T!==!1;){if(S.string+=T+`
`,T.charAt(0)==="#"){S.comments+=T+`
`;continue}if((U=T.match(x))&&(S.gamma=parseFloat(U[1])),(U=T.match(C))&&(S.exposure=parseFloat(U[1])),(U=T.match(b))&&(S.valid|=2,S.format=U[1]),(U=T.match(y))&&(S.valid|=4,S.height=parseInt(U[1],10),S.width=parseInt(U[2],10)),S.valid&2&&S.valid&4)break}return S.valid&2?S.valid&4?S:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(v,_,x){const C=_;if(C<8||C>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(C!==(v[2]<<8|v[3]))return o(3,"wrong scanline width");const b=new Uint8Array(4*_*x);if(!b.length)return o(4,"unable to allocate buffer space");let y=0,S=0;const T=4*C,U=new Uint8Array(4),Y=new Uint8Array(T);let N=x;for(;N>0&&S<v.byteLength;){if(S+4>v.byteLength)return o(1);if(U[0]=v[S++],U[1]=v[S++],U[2]=v[S++],U[3]=v[S++],U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=C)return o(3,"bad rgbe scanline format");let R=0,P;for(;R<T&&S<v.byteLength;){P=v[S++];const G=P>128;if(G&&(P-=128),P===0||R+P>T)return o(3,"bad scanline data");if(G){const F=v[S++];for(let D=0;D<P;D++)Y[R++]=F}else Y.set(v.subarray(S,S+P),R),R+=P,S+=P}const z=C;for(let G=0;G<z;G++){let F=0;b[y]=Y[G+F],F+=C,b[y+1]=Y[G+F],F+=C,b[y+2]=Y[G+F],F+=C,b[y+3]=Y[G+F],y+=4}N--}return b},p=function(v,_,x,C){const b=v[_+3],y=Math.pow(2,b-128)/255;x[C+0]=v[_+0]*y,x[C+1]=v[_+1]*y,x[C+2]=v[_+2]*y,x[C+3]=1},f=function(v,_,x,C){const b=v[_+3],y=Math.pow(2,b-128)/255;x[C+0]=Po.toHalfFloat(Math.min(v[_+0]*y,65504)),x[C+1]=Po.toHalfFloat(Math.min(v[_+1]*y,65504)),x[C+2]=Po.toHalfFloat(Math.min(v[_+2]*y,65504)),x[C+3]=Po.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const E=A(m);if(E!==-1){const v=E.width,_=E.height,x=g(m.subarray(m.pos),v,_);if(x!==-1){let C,b,y;switch(this.type){case Pt:y=x.length/4;const S=new Float32Array(y*4);for(let U=0;U<y;U++)p(x,U*4,S,U*4);C=S,b=Pt;break;case Nt:y=x.length/4;const T=new Uint16Array(y*4);for(let U=0;U<y;U++)f(x,U*4,T,U*4);C=T,b=Nt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:_,data:C,header:E.string,gamma:E.gamma,exposure:E.exposure,type:b}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,n){function s(r,o){switch(r.type){case Pt:case Nt:r.encoding=St,r.minFilter=tt,r.magFilter=tt,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,o)}return super.load(e,s,i,n)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends Cn{constructor(){super(),this.position.y=-3.5;const e=new Bn;e.deleteAttribute("uv");const t=new wn({metalness:0,side:wt}),i=new wn({metalness:0}),n=new Mh(16777215,500,28,2);n.position.set(.418,16.199,.3),this.add(n);const s=new _e(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new _e(e,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new _e(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new _e(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new _e(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new _e(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new _e(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new _e(e,this.createAreaLightMaterial(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const A=new _e(e,this.createAreaLightMaterial(50));A.position.set(-16.109,18.021,-8.207),A.scale.set(.1,2.425,2.751),this.add(A);const g=new _e(e,this.createAreaLightMaterial(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const p=new _e(e,this.createAreaLightMaterial(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const f=new _e(e,this.createAreaLightMaterial(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new _e(e,this.createAreaLightMaterial(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}createAreaLightMaterial(e){const t=new di;return t.color.setScalar(e),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends Cn{constructor(){super(),this.position.y=-3.5;const e=new Bn;e.deleteAttribute("uv");const t=new wn({metalness:0,side:wt}),i=new wn({metalness:0}),n=new Mh(16777215,400,28,2);n.position.set(.5,14,.5),this.add(n);const s=new _e(e,t);s.position.set(0,13.2,0),s.scale.set(31.5,28.5,31.5),this.add(s);const r=new _e(e,i);r.position.set(-10.906,-1,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new _e(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new _e(e,i);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new _e(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new _e(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new _e(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new _e(e,this.createAreaLightMaterial(80));d.position.set(-14,10,8),d.scale.set(.1,2.5,2.5),this.add(d);const A=new _e(e,this.createAreaLightMaterial(80));A.position.set(-14,14,-4),A.scale.set(.1,2.5,2.5),this.add(A);const g=new _e(e,this.createAreaLightMaterial(23));g.position.set(14,12,0),g.scale.set(.1,5,5),this.add(g);const p=new _e(e,this.createAreaLightMaterial(16));p.position.set(0,9,14),p.scale.set(5,5,.1),this.add(p);const f=new _e(e,this.createAreaLightMaterial(80));f.position.set(7,8,-14),f.scale.set(2.5,2.5,.1),this.add(f);const m=new _e(e,this.createAreaLightMaterial(80));m.position.set(-7,16,-14),m.scale.set(2.5,2.5,.1),this.add(m);const E=new _e(e,this.createAreaLightMaterial(1));E.position.set(0,20,0),E.scale.set(.1,.1,.1),this.add(E)}createAreaLightMaterial(e){const t=new di;return t.color.setScalar(e),t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=.04,Bs=20,DC=/\.hdr(\.js)?$/,QC=new wh,qp=new BC;qp.setDataType(Nt);class Xd extends ri{constructor(e){super(),this.threeRenderer=e,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(e,t=()=>{}){try{const i=DC.test(e),n=i?qp:QC,s=await new Promise((r,o)=>n.load(e,r,l=>{t(l.loaded/l.total*.9)},o));return t(1),s.name=e,s.mapping=ma,i||(s.encoding=Re),s}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,i=()=>{}){const n=t!=="legacy";(t==="legacy"||t==="neutral")&&(t=null),t=Cp(t);let s=Promise.resolve(null),r;e&&(s=this.loadEquirectFromUrl(e,i)),t?r=this.loadEquirectFromUrl(t,i):e?r=this.loadEquirectFromUrl(e,i):r=n?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[o,l]=await Promise.all([r,s]);if(o==null)throw new Error("Failed to load environment map.");return{environmentMap:o,skybox:l}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const i=this.load(e,t);this.skyboxCache.set(e,i)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await Fx();const i=this.threeRenderer,n=new vh(256,{generateMipmaps:!1,type:Nt,format:ot,encoding:St,depthBuffer:!0}),s=new kc(.1,100,n),r=s.renderTarget.texture;r.name=t;const o=i.outputEncoding,l=i.toneMapping;return i.toneMapping=Mi,i.outputEncoding=St,s.update(i,e),this.blurCubemap(n,LC),i.toneMapping=l,i.outputEncoding=o,r}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new TC,"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new RC,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Bs);const n=new Bn,s=new _e(n,this.blurMaterial);this.blurScene=new Cn,this.blurScene.add(s)}const i=e.clone();this.halfblur(e,i,t,"latitudinal"),this.halfblur(i,e,t,"longitudinal")}halfblur(e,t,i,n){const r=e.width,o=isFinite(i)?Math.PI/(2*r):2*Math.PI/(2*Bs-1),l=i/o,c=isFinite(i)?1+Math.floor(3*l):Bs;c>Bs&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Bs}`);const h=[];let u=0;for(let g=0;g<Bs;++g){const p=g/l,f=Math.exp(-p*p/2);h.push(f),g==0?u+=f:g<c&&(u+=2*f)}for(let g=0;g<h.length;g++)h[g]=h[g]/u;const d=this.blurMaterial.uniforms;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=h,d.latitudinal.value=n==="latitudinal",d.dTheta.value=o,new kc(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),i=new B(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:i}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
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
      `,blending:en,depthTest:!1,depthWrite:!1,side:wt})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=.2,Ll=40,Dl=60,Kd=5,Ts=[1,.79,.62,.5,.4,.31,.25],NC=3,Yp="high-performance";class tn extends ri{constructor(e){super(),this.loader=new ft(bC),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=NC,this.avgFrameDuration=(Dl+Ll)/2,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new Xd(this.threeRenderer);for(const i of this.scenes)i.element[xa]()},this.dpr=Wc(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new up({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=Re,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.debugger=e.debug?new CC(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=zf}catch(t){console.warn(t)}this.arRenderer=new IC(this),this.textureUtils=this.canRender?new Xd(this.threeRenderer):null,ft.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new tn({powerPreference:(self.ModelViewerElement||{}).powerPreference||Yp,debug:wp()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Ts[this.scaleStep]}set minScale(e){let t=1;for(;t<Ts.length&&!(Ts[t]<e);)++t;this.lastStep=t-1}registerScene(e){this.scenes.add(e),e.forceRescale();const t=new Be;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((i,n)=>this.render(i,n)),this.debugger!=null&&this.debugger.addScene(e)}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(e)}displayCanvas(e){return this.multipleScenesVisible?e.element[nh]:this.canvas3D}countVisibleScenes(){const{canvas3D:e}=this;let t=0,i=null;for(const s of this.scenes){const{element:r}=s;r.modelIsVisible&&s.externalRenderer==null&&++t,e.parentElement===s.canvas.parentElement&&(i=s)}const n=t>1;if(i!=null){const s=n&&!this.multipleScenesVisible,r=!i.element.modelIsVisible;if(s||r){const{width:o,height:l}=this.sceneSize(i);this.copyPixels(i,o,l),e.parentElement.removeChild(e)}}this.multipleScenesVisible=n}updateRendererSize(){const e=Wc();if(e!==this.dpr)for(const n of this.scenes){const{element:s}=n;s[zs](s.getBoundingClientRect())}let t=0,i=0;for(const n of this.scenes)t=Math.max(t,n.width),i=Math.max(i,n.height);if(!(t===this.width&&i===this.height&&e===this.dpr)){this.width=t,this.height=i,this.dpr=e,t=Math.ceil(t*e),i=Math.ceil(i*e),this.canRender&&this.threeRenderer.setSize(t,i,!1);for(const n of this.scenes){const{canvas:s}=n;s.width=t,s.height=i,n.forceRescale()}}}updateRendererScale(e){const t=this.scaleStep;this.avgFrameDuration+=Ii(PC*(e-this.avgFrameDuration),-Kd,Kd),this.avgFrameDuration>Dl?++this.scaleStep:this.avgFrameDuration<Ll&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=(Dl+Ll)/2)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else if(e.scaleStep!=0)e.scaleStep=0,this.rescaleCanvas(e);else return!1;return!0}rescaleCanvas(e){const t=Ts[e.scaleStep],i=Math.ceil(this.width/t),n=Math.ceil(this.height/t),{style:s}=e.canvas;s.width=`${i}px`,s.height=`${n}px`,this.canvas3D.style.width=`${i}px`,this.canvas3D.style.height=`${n}px`;const r=this.dpr*t,o=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:r,minimumDpr:this.dpr*Ts[this.lastStep],pixelWidth:Math.ceil(e.width*r),pixelHeight:Math.ceil(e.height*r),reason:o}}))}sceneSize(e){const{dpr:t}=this,i=Ts[e.scaleStep],n=Math.min(Math.ceil(e.width*i*t),this.canvas3D.width),s=Math.min(Math.ceil(e.height*i*t),this.canvas3D.height);return{width:n,height:s}}copyPixels(e,t,i){const n=e.context;if(n==null){console.log("could not acquire 2d context");return}n.clearRect(0,0,t,i),n.drawImage(this.canvas3D,0,0,t,i,0,0,t,i),e.canvas.classList.add("show")}orderedScenes(){const e=[];for(const t of[!1,!0])for(const i of this.scenes)i.element.modelIsVisible===t&&e.push(i);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,i){const{element:n,exposure:s}=e;n[Ti](t,i);const r=typeof s=="number"&&!Number.isNaN(s);this.threeRenderer.toneMappingExposure=r?s:1}render(e,t){if(t!=null){this.arRenderer.onWebXRFrame(e,t);return}const i=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(i),this.renderedLastFrame=!1);const{canvas3D:n}=this;for(const s of this.orderedScenes()){const{element:r}=s;if(!r.loaded||!r.modelIsVisible&&s.renderCount>0||(this.preRender(s,e,i),!this.shouldRender(s)))continue;if(s.externalRenderer!=null){const c=s.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),A=s.getTarget();d[12]+=A.x,d[13]+=A.y,d[14]+=A.z,s.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!r.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:o,height:l}=this.sceneSize(s);s.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,o,l),this.threeRenderer.render(s,s.camera),this.multipleScenesVisible||s.renderCount===0?this.copyPixels(s,o,l):n.parentElement!==s.canvas.parentElement&&(s.canvas.parentElement.appendChild(n),s.canvas.classList.remove("show")),s.hasRendered(),++s.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}tn._singleton=new tn({powerPreference:(self.ModelViewerElement||{}).powerPreference||Yp,debug:wp()});/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=Symbol("correlatedObjects"),Ge=Symbol("sourceObject"),Ci=Symbol("onUpdate");class lo{constructor(e,t,i=null){this[Ci]=e,this[Ge]=t,this[rt]=i}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new di,FC=new cs(2,2);let UC=0;const $c=Symbol("threeTexture");let OC=class extends lo{get[$c](){var e;return console.assert(this[rt]!=null&&this[rt].size>0,"Image correlated object is undefined"),(e=this[rt])===null||e===void 0?void 0:e.values().next().value}constructor(e,t,i){i=i??{name:t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image",uri:t&&t.image&&t.image.src?t.image.src:"adhoc_image"+UC++},super(e,i,new Set(t?[t]:[]))}get name(){return this[Ge].name||""}get uri(){return this[Ge].uri}get bufferView(){return this[Ge].bufferView}get type(){return this.uri!=null?"external":"embedded"}set name(e){this[Ge].name=e}async createThumbnail(e,t){const i=new Cn;Jd.map=this[$c];const n=new _e(FC,Jd);i.add(n);const s=new rr(-1,1,1,-1,0,1),{threeRenderer:r}=tn.singleton,o=new gi(e,t);r.setRenderTarget(o),r.render(i,s),r.setRenderTarget(null);const l=new Uint8Array(e*t*4);r.readRenderTargetPixels(o,0,0,e,t,l),ti.width=e,ti.height=t;const c=ti.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{ti.toBlob(A=>{if(!A)return d("Failed to capture thumbnail.");u(URL.createObjectURL(A))},"image/png")})}};var ii;(function(a){a[a.Nearest=9728]="Nearest",a[a.Linear=9729]="Linear",a[a.NearestMipmapNearest=9984]="NearestMipmapNearest",a[a.LinearMipmapNearest=9985]="LinearMipmapNearest",a[a.NearestMipmapLinear=9986]="NearestMipmapLinear",a[a.LinearMipmapLinear=9987]="LinearMipmapLinear"})(ii||(ii={}));var ts;(function(a){a[a.ClampToEdge=33071]="ClampToEdge",a[a.MirroredRepeat=33648]="MirroredRepeat",a[a.Repeat=10497]="Repeat"})(ts||(ts={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=(()=>{const a=[ii.Nearest,ii.Linear,ii.NearestMipmapNearest,ii.LinearMipmapLinear,ii.NearestMipmapLinear,ii.LinearMipmapLinear];return e=>a.indexOf(e)>-1})(),GC=(()=>{const a=[ii.Nearest,ii.Linear];return e=>a.indexOf(e)>-1})(),zC=(()=>{const a=[ts.ClampToEdge,ts.MirroredRepeat,ts.Repeat];return e=>a.indexOf(e)>-1})(),VC=(a,e)=>{switch(a){case"minFilter":return kC(e);case"magFilter":return GC(e);case"wrapS":case"wrapT":return zC(e);default:throw new Error(`Cannot configure property "${a}" on Sampler`)}},$d=Symbol("threeTextures"),Ir=Symbol("setProperty"),Rs=Symbol("sourceSampler");class HC extends lo{get[$d](){return console.assert(this[rt]!=null&&this[rt].size>0,"Sampler correlated object is undefined"),this[rt]}get[Rs](){return console.assert(this[Ge]!=null,"Sampler source is undefined"),this[Ge]}constructor(e,t,i){i=i??{},i.minFilter==null&&(i.minFilter=t?t.minFilter:ii.LinearMipmapLinear),i.magFilter==null&&(i.magFilter=t?t.magFilter:ii.Linear),i.wrapS==null&&(i.wrapS=t?t.wrapS:ts.Repeat),i.wrapT==null&&(i.wrapT=t?t.wrapT:ts.Repeat),super(e,i,new Set(t?[t]:[]))}get name(){return this[Ge].name||""}get minFilter(){return this[Rs].minFilter}get magFilter(){return this[Rs].magFilter}get wrapS(){return this[Rs].wrapS}get wrapT(){return this[Rs].wrapT}setMinFilter(e){this[Ir]("minFilter",e)}setMagFilter(e){this[Ir]("magFilter",e)}setWrapS(e){this[Ir]("wrapS",e)}setWrapT(e){this[Ir]("wrapT",e)}[Ir](e,t){const i=this[Rs];if(i!=null){if(VC(e,t)){i[e]=t;for(const n of this[$d])n[e]=t,n.needsUpdate=!0}this[Ci]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=Symbol("image"),Zd=Symbol("sampler");class Xp extends lo{constructor(e,t,i=null,n=null,s=null){super(e,i||{},new Set(t?[t]:[])),this[Zd]=new HC(e,t,n),this[jd]=new OC(e,t,s)}get name(){return this[Ge].name||""}set name(e){this[Ge].name=e}get sampler(){return this[Zd]}get source(){return this[jd]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kp,Jp;const ha=Symbol("texture"),qn=Symbol("transform"),Ql=Symbol("materials"),eA=Symbol("usage");var si;(function(a){a[a.Base=0]="Base",a[a.MetallicRoughness=1]="MetallicRoughness",a[a.Normal=2]="Normal",a[a.Occlusion=3]="Occlusion",a[a.Emissive=4]="Emissive"})(si||(si={}));class Xr{constructor(e,t,i,n,s,r){if(this[Kp]=null,this[Jp]={rotation:0,scale:new Be(1,1),offset:new Be(0,0)},r&&i){const o=s.textures?s.textures[r.index]:null,l=o&&s.samplers?s.samplers[o.sampler]:null,c=o&&s.images?s.images[o.source]:null;this[qn].rotation=i.rotation,this[qn].scale.copy(i.repeat),this[qn].offset.copy(i.offset),this[ha]=new Xp(e,i,o,l,c)}this.onUpdate=e,this[Ql]=n,this[eA]=t}get texture(){return this[ha]}setTexture(e){const t=e!=null?e.source[$c]:null;let i=Re;if(this[ha]=e,this[Ql])for(const n of this[Ql]){switch(this[eA]){case si.Base:n.map=t;break;case si.MetallicRoughness:i=St,n.metalnessMap=t,n.roughnessMap=t;break;case si.Normal:i=St,n.normalMap=t;break;case si.Occlusion:i=St,n.aoMap=t;break;case si.Emissive:n.emissiveMap=t;break}n.needsUpdate=!0}t&&(t.encoding=i,t.rotation=this[qn].rotation,t.repeat=this[qn].scale,t.offset=this[qn].offset),this.onUpdate()}}Kp=ha,Jp=qn;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=Symbol("threeMaterials"),tA=Symbol("baseColorTexture"),iA=Symbol("metallicRoughnessTexture");class WC extends lo{constructor(e,t,i,n){super(e,i,n),i.baseColorFactor==null&&(i.baseColorFactor=[1,1,1,1]),i.roughnessFactor==null&&(i.roughnessFactor=1),i.metallicFactor==null&&(i.metallicFactor=1);const{baseColorTexture:s,metallicRoughnessTexture:r}=i,{map:o,metalnessMap:l}=n.values().next().value;this[tA]=new Xr(e,si.Base,o,n,t,s||null),this[iA]=new Xr(e,si.MetallicRoughness,l,n,t,r||null)}get[ko](){return this[rt]}get baseColorFactor(){return this[Ge].baseColorFactor}get metallicFactor(){return this[Ge].metallicFactor}get roughnessFactor(){return this[Ge].roughnessFactor}get baseColorTexture(){return this[tA]}get metallicRoughnessTexture(){return this[iA]}setBaseColorFactor(e){const t=new xe;e instanceof Array?t.fromArray(e):t.set(e).convertSRGBToLinear();for(const n of this[ko])n.color.set(t),e instanceof Array?n.opacity=e[3]:(e=[0,0,0,n.opacity],t.toArray(e));const i=this[Ge];i.baseColorFactor=e,this[Ci]()}setMetallicFactor(e){for(const i of this[ko])i.metalness=e;const t=this[Ge];t.metallicFactor=e,this[Ci]()}setRoughnessFactor(e){for(const i of this[ko])i.roughness=e;const t=this[Ge];t.roughnessFactor=e,this[Ci]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nA;const sA=Symbol("pbrMetallicRoughness"),rA=Symbol("normalTexture"),oA=Symbol("occlusionTexture"),aA=Symbol("emissiveTexture"),qC=Symbol("backingThreeMaterial"),Pl=Symbol("applyAlphaCutoff"),Fn=Symbol("lazyLoadGLTFInfo"),Nl=Symbol("initialize"),jc=Symbol("getLoadedMaterial"),Gt=Symbol("ensureMaterialIsLoaded"),lA=Symbol("gltfIndex"),zr=Symbol("setActive"),ua=Symbol("variantIndices"),Fl=Symbol("isActive"),da=Symbol("variantSet"),cA=Symbol("modelVariants");class Ul extends lo{constructor(e,t,i,n,s,r,o,l=void 0){super(e,i,o),this[nA]=new Set,this[lA]=n,this[Fl]=s,this[cA]=r,l==null?this[Nl](t):this[Fn]=l}get[(nA=da,qC)](){return this[rt].values().next().value}[Nl](e){const t=this[Ci],i=this[Ge],n=this[rt];i.extensions&&i.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${i.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          currently supported for rendering, but not for our scene-graph API,
          nor for auto-generation of USDZ for Quick Look.`),i.pbrMetallicRoughness==null&&(i.pbrMetallicRoughness={}),this[sA]=new WC(t,e,i.pbrMetallicRoughness,n),i.emissiveFactor==null&&(i.emissiveFactor=[0,0,0]),i.doubleSided==null&&(i.doubleSided=!1),i.alphaMode==null&&(i.alphaMode="OPAQUE"),i.alphaCutoff==null&&(i.alphaCutoff=.5);const{normalTexture:s,occlusionTexture:r,emissiveTexture:o}=i,{normalMap:l,aoMap:c,emissiveMap:h}=n.values().next().value;this[rA]=new Xr(t,si.Normal,l,n,e,s||null),this[oA]=new Xr(t,si.Occlusion,c,n,e,r||null),this[aA]=new Xr(t,si.Emissive,h,n,e,o||null)}async[jc](){if(this[Fn]!=null){const{set:e,material:t}=await this[Fn].doLazyLoad();return this[rt]=e,this[Nl](this[Fn].gltf),this[Fn]=void 0,this.ensureLoaded=async()=>{},t}return this[rt].values().next().value}[Gt](){if(this[Fn]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[jc]()}get isLoaded(){return this[Fn]==null}get isActive(){return this[Fl]}[zr](e){this[Fl]=e}get name(){return this[Ge].name}set name(e){const t=this[Ge];if(t!=null&&(t.name=e),this[rt]!=null)for(const i of this[rt])i.name=e}get pbrMetallicRoughness(){return this[Gt](),this[sA]}get normalTexture(){return this[Gt](),this[rA]}get occlusionTexture(){return this[Gt](),this[oA]}get emissiveTexture(){return this[Gt](),this[aA]}get emissiveFactor(){return this[Gt](),this[Ge].emissiveFactor}get index(){return this[lA]}[ua](){return this[da]}hasVariant(e){const t=this[cA].get(e);return t!=null&&this[da].has(t.index)}setEmissiveFactor(e){this[Gt]();const t=new xe;e instanceof Array?t.fromArray(e):t.set(e).convertSRGBToLinear();for(const i of this[rt])i.emissive.set(t);this[Ge].emissiveFactor=t.toArray(),this[Ci]()}[Pl](){this[Gt]();const e=this[Ge];for(const t of this[rt])this[Ge].alphaMode==="MASK"?t.alphaTest=e.alphaCutoff:t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(e){this[Gt](),this[Ge].alphaCutoff=e,this[Pl](),this[Ci]()}getAlphaCutoff(){return this[Gt](),this[Ge].alphaCutoff}setDoubleSided(e){this[Gt]();for(const t of this[rt])t.side=e?zt:nn,t.needsUpdate=!0;this[Ge].doubleSided=e,this[Ci]()}getDoubleSided(){return this[Gt](),this[Ge].doubleSided}setAlphaMode(e){this[Gt]();const t=(i,n)=>{i.transparent=n,i.depthWrite=!n};this[Ge].alphaMode=e;for(const i of this[rt])t(i,e==="BLEND"),this[Pl](),i.needsUpdate=!0;this[Ci]()}getAlphaMode(){return this[Gt](),this[Ge].alphaMode}}var $p,jp,Zp,eg,tg;const mn=Symbol("materials"),Ki=Symbol("variantToMaterialMap"),Vi=Symbol("modelVariants"),hA=Symbol("mesh"),ig=Symbol("children"),Zc=Symbol("initialMaterialIdx"),Aa=Symbol("activeMaterialIdx");let ng=class{constructor(e){this.name="",this[$p]=new Array,this.name=e}};$p=ig;class uA extends ng{constructor(e,t,i,n){super(e.name),this[jp]=new Map,this[Zp]=new Map,this[eg]=0,this[tg]=0,this[hA]=e;const{gltf:s,threeGLTF:r,threeObjectMap:o}=n;this[Vi]=i,this.mesh.userData.variantData=i;const l=o.get(e.material);l.materials!=null?this[Zc]=this[Aa]=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const c=e.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const d=((s.meshes||[])[c.meshes].primitives||[])[c.primitives];if(d==null){console.error("Mesh primitive definition is missing.");return}if(d.material!=null)this[mn].set(d.material,t[d.material]);else{const A=t.findIndex(g=>g.name==="Default");A>=0?this[mn].set(A,t[A]):console.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions.KHR_materials_variants){const A=d.extensions.KHR_materials_variants,p=r.parser.json.extensions.KHR_materials_variants.variants;for(const f of A.mappings){const m=t[f.material];this[mn].set(f.material,m);for(const E of f.variants){const{name:v}=p[E];this[Ki].set(E,m),m[ua]().add(E),i.has(v)||i.set(v,{name:v,index:E})}}}}get mesh(){return this[hA]}async setActiveMaterial(e){const t=this[mn].get(e);return t!=null&&(this.mesh.material=await t[jc](),this[Aa]=e),this.mesh.material}getActiveMaterial(){return this[mn].get(this[Aa])}getMaterial(e){return this[mn].get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this[Zc]);if(this[Ki]!=null&&this[Vi].has(e)){const t=this[Vi].get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this[Ki]!=null&&e!=null){const t=this[Ki].get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this[Ki]!=null)for(const e of this[Ki].keys()){const t=this.mesh.userData.variantMaterials.get(e);if(t.material!=null)continue;const i=await this.enableVariantHelper(e);i!=null&&(t.material=i)}}get variantInfo(){return this[Ki]}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this[Vi].has(t)||this[Vi].set(t,{name:t,index:this[Vi].size});const n=this[Vi].get(t).index;return e[ua]().add(n),this[Ki].set(n,e),this[mn].set(e.index,e),this.updateVariantUserData(n,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[ua]().add(e),this.mesh.userData.variantData=this[Vi],this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[rt].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this[Vi].get(e);return t!=null&&this.variantInfo.has(t.index)?(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1):!0}}jp=mn,Zp=Ki,eg=Zc,tg=Aa;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dA,AA,fA,pA,gA,mA;const Un=Symbol("materials"),Ol=Symbol("hierarchy"),vA=Symbol("roots"),Hi=Symbol("primitives"),kl=Symbol("correlatedSceneGraph"),sg=Symbol("prepareVariantsForExport"),rg=Symbol("switchVariant"),_A=Symbol("threeScene"),yA=Symbol("materialsFromPoint"),og=Symbol("materialFromPoint"),It=Symbol("variantData"),eh=Symbol("availableVariants"),Gl=Symbol("modelOnUpdate"),EA=Symbol("cloneMaterial");class YC{constructor(e,t,i,n){this.gltf=e,this.gltfElementMap=t,this.mapKey=i,this.doLazyLoad=n}}class XC{constructor(e,t=()=>{}){this[dA]=new Array,this[AA]=new Array,this[fA]=new Array,this[pA]=new Array,this[gA]=()=>{},this[mA]=new Map,this[Gl]=t,this[kl]=e;const{gltf:i,threeGLTF:n,gltfElementMap:s}=e;this[_A]=n.scene;for(const[l,c]of i.materials.entries()){const h=s.get(c);if(h!=null)this[Un].push(new Ul(t,i,c,l,!0,this[It],h));else{const d=(i.materials||[])[l],A=l,g=async()=>{const p=await n.parser.getDependency("material",A),f=new Set;return s.set(d,f),f.add(p),{set:f,material:p}};this[Un].push(new Ul(t,i,d,l,!1,this[It],h,new YC(i,s,d,g)))}}const r=new Map,o=new Array;for(const l of n.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof _e?(c=new uA(l,this.materials,this[It],e),this[Hi].push(c)):c=new ng(l.name);const h=r.get(l);h!=null?h[ig].push(c):this[vA].push(c),this[Ol].push(c);for(const u of l.children)o.push(u),r.set(l,c)}}get materials(){return this[Un]}[(dA=Un,AA=Ol,fA=vA,pA=Hi,gA=Gl,mA=It,eh)](){const e=Array.from(this[It].values());return e.sort((t,i)=>t.index-i.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[Un].filter(i=>i.name===e);return t.length>0?t[0]:null}[yA](e){return e.intersectObject(this[_A],!0).map(i=>{const n=this[Ol].find(s=>s instanceof uA&&s.mesh===i.object);return n!=null?n.getActiveMaterial():null})}[og](e){const t=this[yA](e);return t.length>0?t[0]:null}async[rg](e){for(const t of this[Hi])await t.enableVariant(e);for(const t of this.materials)t[zr](!1);for(const t of this[Hi])this.materials[t.getActiveMaterial().index][zr](!0)}async[sg](){const e=new Array;for(const t of this[Hi])e.push(t.instantiateVariants());await Promise.all(e)}[EA](e,t){const i=this.materials[e];i.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const n=i[rt],s=JSON.parse(JSON.stringify(i[Ge]));s.name=t,this[kl].gltf.materials.push(s);const o=new Set;for(const[c,h]of n.entries()){const u=h.clone();u.name=t+(n.size>1?"_inst"+c:""),o.add(u)}const l=new Ul(this[Gl],this[kl].gltf,s,this[Un].length,!1,this[It],o);return this[Un].push(l),l}createMaterialInstanceForVariant(e,t,i,n=!0){let s=null;for(const r of this[Hi]){const o=this[It].get(i);o!=null&&r.variantInfo.has(o.index)||r.getMaterial(e)!=null&&(this.hasVariant(i)||this.createVariant(i),s==null&&(s=this[EA](e,t)),r.addVariant(s,i))}if(n&&s!=null){s[zr](!0),this.materials[e][zr](!1);for(const r of this[Hi])r.enableVariant(i)}return s}createVariant(e){this[It].has(e)?console.warn(`Variant '${e}'' already exists`):this[It].set(e,{name:e,index:this[It].size})}hasVariant(e){return this[It].has(e)}setMaterialToVariant(e,t){if(this[eh]().find(i=>i===t)==null){console.warn(`Can't add material to '${t}', the variant does not exist.'`);return}if(e<0||e>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const i of this[Hi]){const n=i.getMaterial(e);n!=null&&i.addVariant(n,t)}}updateVariantName(e,t){const i=this[It].get(e);i!=null&&(i.name=t,this[It].set(t,i),this[It].delete(e))}deleteVariant(e){const t=this[It].get(e);if(t!=null){for(const i of this.materials)i.hasVariant(e)&&i[da].delete(t.index);for(const i of this[Hi])i.deleteVariant(t.index);this[It].delete(e)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zl=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const Vr=Symbol("currentGLTF"),fa=Symbol("originalGltfJson"),Yn=Symbol("model"),Vl=Symbol("getOnUpdateMethod"),xA=Symbol("textureLoader"),KC=a=>{var e,t,i,n;class s extends a{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[i]=new wh,this[n]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Yn]}get availableVariants(){return this.model?this.model[eh]():[]}get originalGltfJson(){return this[fa]}[(e=Yn,t=Vr,i=xA,n=fa,Vl)](){return()=>{this[Vt]()}}async createTexture(o,l="image/png"){const c=this[Vr],h=await new Promise(u=>this[xA].load(o,u));return!c||!h?null:(h.encoding=Re,h.wrapS=sn,h.wrapT=sn,h.flipY=!1,h.userData.mimeType=l,new Xp(this[Vl](),h))}async updated(o){if(super.updated(o),o.has("variantName")){const l=this[rs].beginActivity();l(.1);const c=this[Yn],{variantName:h}=this;c!=null&&(await c[rg](h),this[Vt](),this.dispatchEvent(new CustomEvent("variant-applied"))),l(1)}if(o.has("orientation")||o.has("scale")){if(!this.loaded)return;const l=this[ne];l.applyTransform(),l.updateBoundingBox(),l.updateShadow(),this[Xe].arRenderer.onUpdateScene(),this[Vt]()}}[Mn](){super[Mn]();const{currentGLTF:o}=this[ne];if(o!=null){const{correlatedSceneGraph:l}=o;l!=null&&o!==this[Vr]&&(this[Yn]=new XC(l,this[Vl]()),this[fa]=JSON.parse(JSON.stringify(l.gltf))),"variants"in o.userData&&this.requestUpdate("variantName")}this[Vr]=o}async exportScene(o){const l=this[ne];return new Promise(async(c,h)=>{const u={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(u,o),u.animations=l.animations,u.truncateDrawRange=!0;const d=l.shadow;let A=!1;d!=null&&(A=d.visible,d.visible=!1),await this[Yn][sg](),new Dh().register(p=>new lC(p)).parse(l.model,p=>c(new Blob([u.binary?p:JSON.stringify(p)],{type:u.binary?"application/octet-stream":"application/json"})),()=>h("glTF export failed"),u),d!=null&&(d.visible=A)})}materialFromPoint(o,l){const c=this[ne],h=c.getNDC(o,l);return c.raycaster.setFromCamera(h,c.getCamera()),this[Yn][og](c.raycaster)}}return zl([Ee({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),zl([Ee({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),zl([Ee({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=(a,e)=>({type:"number",number:a,unit:e}),ss=(()=>{const a={};return t=>{const i=t;if(i in a)return a[i];const n=[];let s=0;for(;t;){if(++s>1e3){t="";break}const r=ag(t),o=r.nodes[0];if(o==null||o.terms.length===0)break;n.push(o),t=r.remainingInput}return a[i]=n}})(),ag=(()=>{const a=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/,i="(",n="#";return s=>{const r=[];for(;s.length&&(s=s.trim(),!t.test(s));)if(s[0]===i){const{nodes:o,remainingInput:l}=IA(s);s=l,r.push({type:"function",name:{type:"ident",value:"calc"},arguments:o})}else if(a.test(s)){const o=JC(s),l=o.nodes[0];if(s=o.remainingInput,s[0]===i){const{nodes:c,remainingInput:h}=IA(s);r.push({type:"function",name:l,arguments:c}),s=h}else r.push(l)}else if(e.test(s))r.push({type:"operator",value:s[0]}),s=s.slice(1);else{const{nodes:o,remainingInput:l}=s[0]===n?jC(s):$C(s);if(o.length===0)break;r.push(o[0]),s=l}return{nodes:[{type:"expression",terms:r}],remainingInput:s}}})(),JC=(()=>{const a=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(a),i=t==null?e:e.substr(0,t.index),n=t==null?"":e.substr(t.index);return{nodes:[{type:"ident",value:i}],remainingInput:n}}})(),$C=(()=>{const a=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const n=i.match(a),s=n==null?"0":n[0];i=s==null?i:i.slice(s.length);const r=i.match(e);let o=r!=null&&r[0]!==""?r[0]:null;const l=r==null?i:i.slice(o.length);return o!=null&&!t.test(o)&&(o=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:o}],remainingInput:l}}})(),jC=(()=>{const a=/^[a-f0-9]*/i;return e=>{e=e.slice(1).trim();const t=e.match(a);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),IA=a=>{const e=[];for(a=a.slice(1).trim();a.length;){const t=ag(a);if(e.push(t.nodes[0]),a=t.remainingInput.trim(),a[0]===",")a=a.slice(1).trim();else if(a[0]===")"){a=a.slice(1);break}}return{nodes:e,remainingInput:a}},CA=Symbol("visitedTypes");class ZC{constructor(e){this[CA]=e}walk(e,t){const i=e.slice();for(;i.length;){const n=i.shift();switch(this[CA].indexOf(n.type)>-1&&t(n),n.type){case"expression":i.unshift(...n.terms);break;case"function":i.unshift(n.name,...n.arguments);break}}}}const Sn=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=(a,e=0)=>{let{number:t,unit:i}=a;if(!isFinite(t))t=e,i="rad";else if(a.unit==="rad"||a.unit==null)return a;return{type:"number",number:(i==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},wA=(a,e=0)=>{let{number:t,unit:i}=a;if(!isFinite(t))t=e,i="m";else if(a.unit==="m")return a;let n;switch(i){default:n=1;break;case"cm":n=1/100;break;case"mm":n=1/1e3;break}return{type:"number",number:n*t,unit:"m"}},Bi=(()=>{const a=t=>t,e={rad:a,deg:Da,m:a,mm:wA,cm:wA};return(t,i=Sn)=>{isFinite(t.number)||(t.number=i.number,t.unit=i.unit);const{unit:n}=t;if(n==null)return t;const s=e[n];return s==null?i:s(t)}})();/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends WI{constructor(e){super(document.createElement("div")),this.normal=new B(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=ss(e)[0].terms;for(let i=0;i<3;++i)this.position.setComponent(i,Bi(t[i]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=ss(e)[0].terms;for(let i=0;i<3;++i)this.normal.setComponent(i,Bi(t[i]).number)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){e?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const i=t,n=i.dataset.visibilityAttribute;if(n!=null){const s=`data-${n}`;e?i.setAttribute(s,""):i.removeAttribute(s)}i.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=(a,e,t)=>{let i=t;const n=new B;return a.traverseVisible(s=>{let r,o;s.updateWorldMatrix(!1,!1);const l=s.geometry;if(l!==void 0){if(l.isGeometry){const c=l.vertices;for(r=0,o=c.length;r<o;r++)n.copy(c[r]),s.isSkinnedMesh?s.boneTransform(r,n):n.applyMatrix4(s.matrixWorld),i=e(i,n)}else if(l.isBufferGeometry){const{position:c}=l.attributes;if(c!==void 0)for(r=0,o=c.count;r<o;r++)n.fromBufferAttribute(c,r),s.isSkinnedMesh?s.boneTransform(r,n):n.applyMatrix4(s.matrixWorld),i=e(i,n)}}}),i},ew={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},tw={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function SA(a,e,t){return(1-t)*a+t*e}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=9,iw=6,Hl=2,nw=.3;class sw extends Ke{constructor(e,t,i){super(),this.camera=new rr,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new hp,this.horizontalBlurMaterial=new mi(ew),this.verticalBlurMaterial=new mi(tw),this.intensity=0,this.softness=1,this.boundingBox=new ni,this.size=new B,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:n}=this;n.rotation.x=Math.PI/2,n.left=-.5,n.right=.5,n.bottom=-.5,n.top=.5,this.add(n);const s=new cs,r=new di({opacity:1,transparent:!0,side:wt});this.floor=new _e(s,r),this.floor.userData.shadow=!0,n.add(this.floor),this.blurPlane=new _e(s),this.blurPlane.visible=!1,n.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,i)}setScene(e,t,i){const{boundingBox:n,size:s,rotation:r,position:o}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(s.x,s.y,s.z)*(this.isAnimated?Hl:1),this.boundingBox.getCenter(o),i==="back"){const{min:l,max:c}=n;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[s.y,s.z]=[s.z,s.y],r.x=Math.PI/2,r.y=Math.PI}else r.x=0,r.y=0;if(this.isAnimated){const l=n.min.y,c=n.max.y;s.y=this.maxDimension,n.expandByVector(s.subScalar(this.maxDimension).multiplyScalar(-.5)),n.min.y=l,n.max.y=c,s.set(this.maxDimension,c-l,this.maxDimension)}i==="bottom"?o.y=n.min.y:o.z=n.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:i}=this,n=this.isAnimated?Hl:1,s=n*Math.pow(2,MA-e*(MA-iw));this.setMapSize(s);const r=t.y/2,o=t.y*n;i.near=0,i.far=SA(o,r,e),this.depthMaterial.opacity=1/e,i.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=Hl);const i=Math.floor(t.x>t.z?e:e*t.x/t.z),n=Math.floor(t.x>t.z?e*t.z/t.x:e),s=10,r=s+i,o=s+n;if(this.renderTarget!=null&&(this.renderTarget.width!==r||this.renderTarget.height!==o)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const l={format:ot};this.renderTarget=new gi(r,o,l),this.renderTargetBlur=new gi(r,o,l),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+s/i),t.z*(1+s/n),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*SA(nw,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+.001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const i=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const n=e.xr.enabled;e.xr.enabled=!1;const s=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=n,e.setRenderTarget(s),e.setClearAlpha(i)}blurShadow(e){const{camera:t,horizontalBlurMaterial:i,verticalBlurMaterial:n,renderTarget:s,renderTargetBlur:r,blurPlane:o}=this;o.visible=!0,o.material=i,i.uniforms.h.value=1/this.renderTarget.width,i.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(r),e.render(o,t),o.material=n,n.uniforms.v.value=1/this.renderTarget.height,n.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(s),e.render(o,t),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=100,ql=new B,bA=new B,BA=new B,rw=new Cx,ow=new B,Cr=new Be;class aw extends Cn{constructor({canvas:e,element:t,width:i,height:n}){super(),this.annotationRenderer=new qI,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new yt(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Ke,this.animationNames=[],this.boundingBox=new ni,this.boundingSphere=new bn,this.size=new B,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.canScale=!0,this.isDirty=!1,this.goalTarget=new B,this.targetDamperX=new Xt,this.targetDamperY=new Xt,this.targetDamperZ=new Xt,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new yt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(i,n),this.target.name="Target",this.mixer=new Ix(this.target);const{domElement:s}=this.annotationRenderer,{style:r}=s;r.display="none",r.pointerEvents="none",r.position="absolute",r.top="0",this.element.shadowRoot.querySelector(".default").appendChild(s),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._model=e,this.target.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url){t(1);return}if(this.reset(),this.url=e,this.externalRenderer!=null){const o=await this.externalRenderer.load(t);this.boundingSphere.radius=o.framedRadius,this.idealAspect=o.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let i;try{i=await new Promise(async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{const c=await this.element[Xe].loader.load(e,this.element,t);o(c)}catch(c){l(c)}})}catch(o){if(o==null)return;throw o}this.cancelPendingSourceChange=null,this.reset(),this.url=e,this._currentGLTF=i,i!=null&&(this._model=i.scene,this.target.add(i.scene));const{animations:n}=i,s=new Map,r=[];for(const o of n)s.set(o.name,o),r.push(o.name);this.animations=n,this.animationsByName=s,this.animationNames=r,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity)}reset(){this.url=null,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:e}=this;e!=null&&(e.removeFromParent(),this._model=null);const t=this._currentGLTF;t!=null&&(t.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[Vr]=null,this.element[fa]=null,this.element[Yn]=null}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(!(this.width===e&&this.height===t)){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const i=Wc();this.externalRenderer.resize(e*i,t*i)}this.queueRender()}}markBakedShadow(e){e.userData.shadow=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.shadow=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){const t=new ni;e.traverse(i=>{const n=i;if(!n.isMesh||!n.material.transparent)return;t.setFromObject(n);const r=t.getSize(ow),o=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<Wl*o||this.markBakedShadow(n)})}checkBakedShadows(){const{min:e,max:t}=this.boundingBox,i=new ni;this.boundingBox.getSize(this.size);for(const n of this.bakedShadows)i.setFromObject(n),!(i.min.y<e.y+this.size.y/Wl&&i.min.x<=e.x&&i.max.x>=t.x&&i.min.z<=e.z&&i.max.z>=t.z)&&(i.min.z<e.z+this.size.z/Wl&&i.min.x<=e.x&&i.max.x>=t.x&&i.min.y<=e.y&&i.max.y>=t.y||this.unmarkBakedShadow(n))}applyTransform(){const{model:e}=this;if(e==null)return;const t=ss(this.element.orientation)[0].terms,i=Bi(t[0]).number,n=Bi(t[1]).number,s=Bi(t[2]).number;e.quaternion.setFromEuler(new ls(n,s,i,"YXZ"));const r=ss(this.element.scale)[0].terms;e.scale.set(r[0].number,r[1].number,r[2].number)}updateBoundingBox(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.findBakedShadows(e);const t=(i,n)=>i.expandByPoint(n);this.setBakedShadowVisibility(!1),this.boundingBox=Go(e,t,new ni),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(i=>this.unmarkBakedShadow(i)),this.boundingBox=Go(e,t,new ni)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(e)}async updateFraming(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,t.copy(this.getTarget());const i=(s,r)=>Math.max(s,t.distanceToSquared(r));this.boundingSphere.radius=Math.sqrt(Go(e,i,0));const n=(s,r)=>{r.sub(t);const o=Math.sqrt(r.x*r.x+r.z*r.z);return Math.max(s,o/(this.idealCameraDistance()-Math.abs(r.y)))};this.idealAspect=Go(e,n,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(e)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)Cr.set(e/window.screen.width,t/window.screen.height);else{const i=this.element.getBoundingClientRect();Cr.set((e-i.x)/this.width,(t-i.y)/this.height)}return Cr.multiplyScalar(2).subScalar(1),Cr.y*=-1,Cr}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[Xe].arRenderer.presentedScene!==this&&(this.environment=e,this.background=t,this.queueRender())}setTarget(e,t,i){this.goalTarget.set(-e,-t,-i)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(kp)}updateTarget(e){const t=this.goalTarget,i=this.target.position;if(t.equals(i))return!1;{const n=this.boundingSphere.radius/10;let{x:s,y:r,z:o}=i;return s=this.targetDamperX.update(s,t.x,e,n),r=this.targetDamperY.update(r,t.y,e,n),o=this.targetDamperZ.update(o,t.z,e,n),this.target.position.set(s,r,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){const{x:i,z:n}=this.position;this.yaw=Math.atan2(e-i,t-n)}get model(){return this._model}set yaw(e){this.rotation.y=e,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===dh&&(e&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,i=uh,n=1/0){if(this._currentGLTF==null)return;const{animations:s}=this;if(s==null||s.length===0){console.warn("Cannot play animation (model does not have any animations)");return}let r=null;if(e!=null&&(r=this.animationsByName.get(e),r==null)){const o=parseInt(e);!isNaN(o)&&o>=0&&o<s.length&&(r=s[o])}r==null&&(r=s[0]);try{const{currentAnimationAction:o}=this,l=this.mixer.clipAction(r,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,o!=null&&l!==o?l.crossFadeFrom(o,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(i,n),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(o){console.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==!0&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new sw(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}get raycaster(){return rw}positionAndNormalFromPoint(e,t=this){this.raycaster.setFromCamera(e,this.getCamera());const n=this.raycaster.intersectObject(t,!0).find(s=>s.object.visible&&!s.object.userData.shadow);return n==null||n.face==null?null:n.uv==null?{position:n.point,normal:n.face.normal,uv:null}:(n.face.normal.applyNormalMatrix(new Ft().getNormalMatrix(n.object.matrixWorld)),{position:n.point,normal:n.face.normal,uv:n.uv})}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let i=0,n=t.length;i<n;i++){const s=t[i];s instanceof lg&&e(s)}}updateHotspots(e){this.forHotspots(t=>{ql.copy(e),bA.setFromMatrixPosition(t.matrixWorld),ql.sub(bA),BA.copy(t.normal).transformDirection(this.target.matrixWorld),ql.dot(BA)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:i,element:n}=this,{alt:s,poster:r,iosSrc:o}=n;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:r??void 0,name:s??void 0,encoding:l};i.textContent=JSON.stringify(c),document.head.appendChild(i)}else i.parentElement!=null&&i.parentElement.removeChild(i)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=async a=>new Promise((e,t)=>{const n=a.match(/data:(.*);/);if(!n)return t(new Error(`${a} is not a valid data Url`));const s=n[1],r=a.replace(/data:image\/\w+;base64,/,""),o=atob(r),l=[];for(let c=0;c<o.length;c+=512){const h=o.slice(c,c+512),u=new Array(h.length);for(let A=0;A<h.length;A++)u[A]=h.charCodeAt(A);const d=new Uint8Array(u);l.push(d)}e(new Blob(l,{type:s}))});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0),t=>{let i;return i=Math.max(Ii(t,0,1),e.progress),i!==e.progress&&this.announceTotalProgress(e,i),e.progress}}announceTotalProgress(e,t){let i=0,n=0;t==1&&(e.completed=!0);for(const o of this.ongoingActivities){const{progress:l}=o;i+=1-l,o.completed===!0&&n++}const s=e.progress;e.progress=t,this.totalProgress+=(t-s)*(1-this.totalProgress)/i;const r=n===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:r}})),n===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qa=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},TA,RA,LA,DA,QA,PA,NA,FA,UA,OA,kA,GA,zA;const hw=1e3,uw=50,dw=0,Aw=300,fw=150,ti=document.createElement("canvas"),Yl=Symbol("fallbackResizeHandler"),VA=Symbol("defaultAriaLabel"),zo=Symbol("resizeObserver"),Ls=Symbol("clearModelTimeout"),Xl=Symbol("onContextLost"),Ds=Symbol("loaded"),Kl=Symbol("status"),Jl=Symbol("onFocus"),$l=Symbol("onBlur"),zs=Symbol("updateSize"),Vo=Symbol("intersectionObserver"),Xn=Symbol("isElementInViewport"),wa=Symbol("announceModelVisibility"),Kr=Symbol("ariaLabel"),th=Symbol("altDefaulted"),wr=Symbol("statusElement"),ih=Symbol("updateStatus"),Hr=Symbol("loadedTime"),Js=Symbol("updateSource"),HA=Symbol("markLoaded"),Jr=Symbol("container"),Si=Symbol("input"),nh=Symbol("canvas"),ne=Symbol("scene"),Vt=Symbol("needsRender"),Ti=Symbol("tick"),Mn=Symbol("onModelLoad"),oo=Symbol("onResize"),Xe=Symbol("renderer"),rs=Symbol("progressTracker"),WA=Symbol("getLoaded"),os=Symbol("getModelIsVisible"),nr=Symbol("shouldAttemptPreload"),En=a=>({x:a.x,y:a.y,z:a.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),pw=a=>({u:a.x,v:a.y,toString(){return`${this.u} ${this.v}`}});class co extends Ng{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[TA]=!1,this[RA]=!1,this[LA]=0,this[DA]="",this[QA]=null,this[PA]=ld(()=>{const n=this.getBoundingClientRect();this[zs](n)},uw),this[NA]=ld(n=>{const s=this.modelIsVisible;s!==n&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:s}}))},dw),this[FA]=null,this[UA]=null,this[OA]=new cw,this[kA]=()=>{this[wr].textContent=this[Kl]},this[GA]=()=>{this[wr].textContent=""},this[zA]=n=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:n.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;Xx(e),this[Jr]=e.querySelector(".container"),this[Si]=e.querySelector(".userInput"),this[nh]=e.querySelector("canvas"),this[wr]=e.querySelector("#status"),this[VA]=this[Si].getAttribute("aria-label");let t,i;if(this.isConnected){const n=this.getBoundingClientRect();t=n.width,i=n.height}else t=Aw,i=fw;this[ne]=new aw({canvas:this[nh],element:this,width:t,height:i}),Promise.resolve().then(()=>{this[zs](this.getBoundingClientRect())}),gl&&(this[zo]=new ResizeObserver(n=>{if(!this[Xe].isPresenting)for(let s of n)s.target===this&&this[zs](s.contentRect)})),ml?this[Vo]=new IntersectionObserver(n=>{for(let s of n)if(s.target===this){const r=this.modelIsVisible;this[Xn]=s.isIntersecting,this[wa](r),this[Xn]&&!this.loaded&&this[Js]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[Xn]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){ft[_n].evictionThreshold=e}static get modelCacheSize(){return ft[_n].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),tn.singleton.minScale=e}static get minimumRenderScale(){return tn.singleton.minScale}get loaded(){return this[WA]()}get[(TA=Xn,RA=Ds,LA=Hr,DA=Kl,QA=Ls,PA=Yl,NA=wa,FA=zo,UA=Vo,OA=rs,Xe)](){return tn.singleton}get modelIsVisible(){return this[os]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),gl?this[zo].observe(this):self.addEventListener("resize",this[Yl]),ml&&this[Vo].observe(this),this.addEventListener("focus",this[Jl]),this.addEventListener("blur",this[$l]);const e=this[Xe];e.addEventListener("contextlost",this[Xl]),e.registerScene(this[ne]),this[Ls]!=null&&(self.clearTimeout(this[Ls]),this[Ls]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),gl?this[zo].unobserve(this):self.removeEventListener("resize",this[Yl]),ml&&this[Vo].unobserve(this),this.removeEventListener("focus",this[Jl]),this.removeEventListener("blur",this[$l]);const e=this[Xe];e.removeEventListener("contextlost",this[Xl]),e.unregisterScene(this[ne]),this[Ls]=self.setTimeout(()=>{this[ne].dispose(),this[Ls]=null},hw)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[Ds]=!1,this[Hr]=0,this[ne].reset()):this.src!==this[ne].url&&(this[Ds]=!1,this[Hr]=0,this[Js]())),e.has("alt")&&this[Si].setAttribute("aria-label",this[Kr]),e.has("withCredentials")&&(ft.withCredentials=this.withCredentials),e.has("generateSchema")&&(this.generateSchema?this[ne].updateSchema(this.src):this[ne].updateSchema(null))}toDataURL(e,t){return this[Xe].displayCanvas(this[ne]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,i=e?e.qualityArgument:void 0,n=e?e.idealAspect:void 0,{width:s,height:r,idealAspect:o,aspect:l}=this[ne],{dpr:c,scaleFactor:h}=this[Xe];let u=s*h*c,d=r*h*c,A=0,g=0;if(n===!0)if(o>l){const p=d;d=Math.round(u/o),g=(p-d)/2}else{const p=u;u=Math.round(d*o),A=(p-u)/2}ti.width=u,ti.height=d;try{return new Promise(async(p,f)=>{if(ti.getContext("2d").drawImage(this[Xe].displayCanvas(this[ne]),A,g,u,d,0,0,u,d),ti.msToBlob&&(!t||t==="image/png"))return p(ti.msToBlob());if(!ti.toBlob)return p(await lw(ti.toDataURL(t,i)));ti.toBlob(m=>{if(!m)return f(new Error("Unable to retrieve canvas blob"));p(m)},t,i)})}finally{this[zs]({width:s,height:r})}}registerRenderer(e){this[ne].externalRenderer=e}unregisterRenderer(){this[ne].externalRenderer=null}get[Kr](){return this[th]}get[th](){return this.alt==null||this.alt==="null"?this[VA]:this.alt}[WA](){return this[Ds]}[os](){return this.loaded&&this[Xn]}[nr](){return!!this.src&&this[Xn]}[zs]({width:e,height:t}){this[Jr].style.width=`${e}px`,this[Jr].style.height=`${t}px`,this[oo]({width:parseFloat(e),height:parseFloat(t)})}[Ti](e,t){}[HA](){this[Ds]||(this[Ds]=!0,this[Hr]=performance.now())}[Vt](){this[ne].queueRender()}[Mn](){}[ih](e){this[Kl]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[wr].textContent!=e&&(this[wr].textContent=e)}[(kA=Jl,GA=$l,oo)](e){this[ne].setSize(e.width,e.height)}async[(zA=Xl,Js)](){const e=this[ne];if(this.loaded||!this[nr]()||this.src===e.url)return;this.generateSchema&&e.updateSchema(this.src),this[ih]("Loading"),e.stopAnimation();const t=this[rs].beginActivity(),i=this.src;try{const n=e.setSource(i,r=>t(Ii(r,0,1)*.95)),s=this[xa]();await Promise.all([n,s]),this[HA](),this[Mn](),await new Promise(r=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:i}})),r()})})})}catch(n){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:n}}))}finally{t(1)}}}Qa([Ee({type:String})],co.prototype,"alt",void 0);Qa([Ee({type:String})],co.prototype,"src",void 0);Qa([Ee({type:Boolean,attribute:"with-credentials"})],co.prototype,"withCredentials",void 0);Qa([Ee({type:Boolean,attribute:"generate-schema"})],co.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jl=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const qA=1e3,Zl=Symbol("changeAnimation"),Wi=Symbol("paused"),gw={repetitions:1/0,pingpong:!1},mw=a=>{var e;class t extends a{constructor(...n){super(n),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[ne].subscribeMixerEvent("loop",s=>{const r=s.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:r}}))}),this[ne].subscribeMixerEvent("finished",()=>{this[Wi]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[ne].animationNames:[]}get duration(){return this[ne].duration}get paused(){return this[Wi]}get currentTime(){return this[ne].animationTime}set currentTime(n){this[ne].animationTime=n,this[Vt]()}get timeScale(){return this[ne].animationTimeScale}set timeScale(n){this[ne].animationTimeScale=n}pause(){this[Wi]||(this[Wi]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(n){this.availableAnimations.length>0&&(this[Wi]=!1,this[Zl](n),this.dispatchEvent(new CustomEvent("play")))}[(e=Wi,Mn)](){super[Mn](),this[Wi]=!0,this.autoplay&&this.play()}[Ti](n,s){super[Ti](n,s),!(this[Wi]||!this[os]()&&!this[Xe].isPresenting)&&(this[ne].updateAnimation(s/qA),this[Vt]())}updated(n){super.updated(n),n.has("autoplay")&&this.autoplay&&this.play(),n.has("animationName")&&this[Zl]()}[Zl](n=gw){var s;const r=(s=n.repetitions)!==null&&s!==void 0?s:1/0,o=n.pingpong?dh:r===1?qf:uh;this[ne].playAnimation(this.animationName,this.animationCrossfadeDuration/qA,o,r),this[Wi]&&(this[ne].updateAnimation(0),this[Vt]())}}return jl([Ee({type:Boolean})],t.prototype,"autoplay",void 0),jl([Ee({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),jl([Ee({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=Symbol("hotspotMap"),ec=Symbol("mutationCallback"),Sr=Symbol("observer"),tc=Symbol("addHotspot"),YA=Symbol("removeHotspot"),ic=new we,XA=new Ft,vw=a=>{var e,t,i;class n extends a{constructor(){super(...arguments),this[e]=new Map,this[t]=r=>{r.forEach(o=>{(!(o instanceof MutationRecord)||o.type==="childList")&&(o.addedNodes.forEach(l=>{this[tc](l)}),o.removedNodes.forEach(l=>{this[YA](l)}),this[Vt]())})},this[i]=new MutationObserver(this[ec])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[tc](this.children[o]);const{ShadyDOM:r}=self;r==null?this[Sr].observe(this,{childList:!0}):this[Sr]=r.observeChildren(this,this[ec])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:r}=self;r==null?this[Sr].disconnect():r.unobserveChildren(this[Sr])}[(e=On,t=ec,i=Sr,Ti)](r,o){super[Ti](r,o);const l=this[ne],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.updateHotspots(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(r){const o=this[On].get(r.name);o!=null&&(o.updatePosition(r.position),o.updateNormal(r.normal),this[Vt]())}queryHotspot(r){const o=this[On].get(r);if(o==null)return null;const l=En(o.position),c=En(o.normal),h=o.facingCamera,u=this[ne],d=u.getCamera(),A=new B;A.setFromMatrixPosition(o.matrixWorld),A.project(d);const g=u.width/2,p=u.height/2;A.x=A.x*g+g,A.y=-(A.y*p)+p;const f=En(new B(A.x,A.y,A.z));return!Number.isFinite(f.x)||!Number.isFinite(f.y)?null:{position:l,normal:c,canvasPosition:f,facingCamera:h}}positionAndNormalFromPoint(r,o){const l=this[ne],c=l.getNDC(r,o),h=l.positionAndNormalFromPoint(c);if(h==null)return null;ic.copy(l.target.matrixWorld).invert();const u=En(h.position.applyMatrix4(ic));XA.getNormalMatrix(ic);const d=En(h.normal.applyNormalMatrix(XA));let A=null;return h.uv!=null&&(A=pw(h.uv)),{position:u,normal:d,uv:A}}[tc](r){if(!(r instanceof HTMLElement&&r.slot.indexOf("hotspot")===0))return;let o=this[On].get(r.slot);o!=null?o.increment():(o=new lg({name:r.slot,position:r.dataset.position,normal:r.dataset.normal}),this[On].set(r.slot,o),this[ne].addHotspot(o)),this[ne].queueRender()}[YA](r){if(!(r instanceof HTMLElement))return;const o=this[On].get(r.slot);o&&(o.decrement()&&(this[ne].removeHotspot(o),this[On].delete(r.slot)),this[ne].queueRender())}}return n};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var KA=function(a){return URL.createObjectURL(new Blob([a],{type:"text/javascript"}))};try{URL.revokeObjectURL(KA(""))}catch{KA=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Ht=Uint8Array,Ut=Uint16Array,sr=Uint32Array,Qh=new Ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ph=new Ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),JA=new Ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cg=function(a,e){for(var t=new Ut(31),i=0;i<31;++i)t[i]=e+=1<<a[i-1];for(var n=new sr(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},hg=cg(Qh,2),_w=hg[0],sh=hg[1];_w[28]=258,sh[258]=28;var yw=cg(Ph,0),$A=yw[1],rh=new Ut(32768);for(var Je=0;Je<32768;++Je){var gn=(Je&43690)>>>1|(Je&21845)<<1;gn=(gn&52428)>>>2|(gn&13107)<<2,gn=(gn&61680)>>>4|(gn&3855)<<4,rh[Je]=((gn&65280)>>>8|(gn&255)<<8)>>>1}var $r=function(a,e,t){for(var i=a.length,n=0,s=new Ut(e);n<i;++n)++s[a[n]-1];var r=new Ut(e);for(n=0;n<e;++n)r[n]=r[n-1]+s[n-1]<<1;var o;if(t){o=new Ut(1<<e);var l=15-e;for(n=0;n<i;++n)if(a[n])for(var c=n<<4|a[n],h=e-a[n],u=r[a[n]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[rh[u]>>>l]=c}else for(o=new Ut(i),n=0;n<i;++n)a[n]&&(o[n]=rh[r[a[n]-1]++]>>>15-a[n]);return o},as=new Ht(288);for(var Je=0;Je<144;++Je)as[Je]=8;for(var Je=144;Je<256;++Je)as[Je]=9;for(var Je=256;Je<280;++Je)as[Je]=7;for(var Je=280;Je<288;++Je)as[Je]=8;var Sa=new Ht(32);for(var Je=0;Je<32;++Je)Sa[Je]=5;var Ew=$r(as,9,0),xw=$r(Sa,5,0),ug=function(a){return(a/8|0)+(a&7&&1)},dg=function(a,e,t){(t==null||t>a.length)&&(t=a.length);var i=new(a instanceof Ut?Ut:a instanceof sr?sr:Ht)(t-e);return i.set(a.subarray(e,t)),i},qi=function(a,e,t){t<<=e&7;var i=e/8|0;a[i]|=t,a[i+1]|=t>>>8},Mr=function(a,e,t){t<<=e&7;var i=e/8|0;a[i]|=t,a[i+1]|=t>>>8,a[i+2]|=t>>>16},nc=function(a,e){for(var t=[],i=0;i<a.length;++i)a[i]&&t.push({s:i,f:a[i]});var n=t.length,s=t.slice();if(!n)return[Ag,0];if(n==1){var r=new Ht(t[0].s+1);return r[t[0].s]=1,[r,1]}t.sort(function(x,C){return x.f-C.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=n-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var d=s[0].s,i=1;i<n;++i)s[i].s>d&&(d=s[i].s);var A=new Ut(d+1),g=oh(t[h-1],A,0);if(g>e){var i=0,p=0,f=g-e,m=1<<f;for(s.sort(function(C,b){return A[b.s]-A[C.s]||C.f-b.f});i<n;++i){var E=s[i].s;if(A[E]>e)p+=m-(1<<g-A[E]),A[E]=e;else break}for(p>>>=f;p>0;){var v=s[i].s;A[v]<e?p-=1<<e-A[v]++-1:++i}for(;i>=0&&p;--i){var _=s[i].s;A[_]==e&&(--A[_],++p)}g=e}return[new Ht(A),g]},oh=function(a,e,t){return a.s==-1?Math.max(oh(a.l,e,t+1),oh(a.r,e,t+1)):e[a.s]=t},jA=function(a){for(var e=a.length;e&&!a[--e];);for(var t=new Ut(++e),i=0,n=a[0],s=1,r=function(l){t[i++]=l},o=1;o<=e;++o)if(a[o]==n&&o!=e)++s;else{if(!n&&s>2){for(;s>138;s-=138)r(32754);s>2&&(r(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(r(n),--s;s>6;s-=6)r(8304);s>2&&(r(s-3<<5|8208),s=0)}for(;s--;)r(n);s=1,n=a[o]}return[t.subarray(0,i),e]},br=function(a,e){for(var t=0,i=0;i<e.length;++i)t+=a[i]*e[i];return t},ah=function(a,e,t){var i=t.length,n=ug(e+2);a[n]=i&255,a[n+1]=i>>>8,a[n+2]=a[n]^255,a[n+3]=a[n+1]^255;for(var s=0;s<i;++s)a[n+s+4]=t[s];return(n+4+i)*8},ZA=function(a,e,t,i,n,s,r,o,l,c,h){qi(e,h++,t),++n[256];for(var u=nc(n,15),d=u[0],A=u[1],g=nc(s,15),p=g[0],f=g[1],m=jA(d),E=m[0],v=m[1],_=jA(p),x=_[0],C=_[1],b=new Ut(19),y=0;y<E.length;++y)b[E[y]&31]++;for(var y=0;y<x.length;++y)b[x[y]&31]++;for(var S=nc(b,7),T=S[0],U=S[1],Y=19;Y>4&&!T[JA[Y-1]];--Y);var N=c+5<<3,R=br(n,as)+br(s,Sa)+r,P=br(n,d)+br(s,p)+r+14+3*Y+br(b,T)+(2*b[16]+3*b[17]+7*b[18]);if(N<=R&&N<=P)return ah(e,h,a.subarray(l,l+c));var z,G,F,D;if(qi(e,h,1+(P<R)),h+=2,P<R){z=$r(d,A,0),G=d,F=$r(p,f,0),D=p;var k=$r(T,U,0);qi(e,h,v-257),qi(e,h+5,C-1),qi(e,h+10,Y-4),h+=14;for(var y=0;y<Y;++y)qi(e,h+3*y,T[JA[y]]);h+=3*Y;for(var j=[E,x],J=0;J<2;++J)for(var ee=j[J],y=0;y<ee.length;++y){var se=ee[y]&31;qi(e,h,k[se]),h+=T[se],se>15&&(qi(e,h,ee[y]>>>5&127),h+=ee[y]>>>12)}}else z=Ew,G=as,F=xw,D=Sa;for(var y=0;y<o;++y)if(i[y]>255){var se=i[y]>>>18&31;Mr(e,h,z[se+257]),h+=G[se+257],se>7&&(qi(e,h,i[y]>>>23&31),h+=Qh[se]);var he=i[y]&31;Mr(e,h,F[he]),h+=D[he],he>3&&(Mr(e,h,i[y]>>>5&8191),h+=Ph[he])}else Mr(e,h,z[i[y]]),h+=G[i[y]];return Mr(e,h,z[256]),h+G[256]},Iw=new sr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ag=new Ht(0),Cw=function(a,e,t,i,n,s){var r=a.length,o=new Ht(i+r+5*(1+Math.ceil(r/7e3))+n),l=o.subarray(i,o.length-n),c=0;if(!e||r<8)for(var h=0;h<=r;h+=65535){var u=h+65535;u<r?c=ah(l,c,a.subarray(h,u)):(l[h]=s,c=ah(l,c,a.subarray(h,r)))}else{for(var d=Iw[e-1],A=d>>>13,g=d&8191,p=(1<<t)-1,f=new Ut(32768),m=new Ut(p+1),E=Math.ceil(t/3),v=2*E,_=function(it){return(a[it]^a[it+1]<<E^a[it+2]<<v)&p},x=new sr(25e3),C=new Ut(288),b=new Ut(32),y=0,S=0,h=0,T=0,U=0,Y=0;h<r;++h){var N=_(h),R=h&32767,P=m[N];if(f[R]=P,m[N]=R,U<=h){var z=r-h;if((y>7e3||T>24576)&&z>423){c=ZA(a,l,0,x,C,b,S,T,Y,h-Y,c),T=y=S=0,Y=h;for(var G=0;G<286;++G)C[G]=0;for(var G=0;G<30;++G)b[G]=0}var F=2,D=0,k=g,j=R-P&32767;if(z>2&&N==_(h-j))for(var J=Math.min(A,z)-1,ee=Math.min(32767,h),se=Math.min(258,z);j<=ee&&--k&&R!=P;){if(a[h+F]==a[h+F-j]){for(var he=0;he<se&&a[h+he]==a[h+he-j];++he);if(he>F){if(F=he,D=j,he>J)break;for(var X=Math.min(j,he-2),Fe=0,G=0;G<X;++G){var ge=h-j+G+32768&32767,ye=f[ge],le=ge-ye+32768&32767;le>Fe&&(Fe=le,P=ge)}}}R=P,P=f[R],j+=R-P+32768&32767}if(D){x[T++]=268435456|sh[F]<<18|$A[D];var ze=sh[F]&31,Se=$A[D]&31;S+=Qh[ze]+Ph[Se],++C[257+ze],++b[Se],U=h+F,++y}else x[T++]=a[h],++C[a[h]]}}c=ZA(a,l,s,x,C,b,S,T,Y,h-Y,c)}return dg(o,0,i+ug(c)+n)},ww=function(){for(var a=new sr(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&3988292384)^t>>>1;a[e]=t}return a}(),Sw=function(){var a=-1;return{p:function(e){for(var t=a,i=0;i<e.length;++i)t=ww[t&255^e[i]]^t>>>8;a=t},d:function(){return~a}}},Mw=function(a,e,t,i,n){return Cw(a,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):12+e.mem,t,i,!n)},fg=function(a,e){var t={};for(var i in a)t[i]=a[i];for(var i in e)t[i]=e[i];return t},vt=function(a,e,t){for(;t;++e)a[e]=t,t>>>=8};function bw(a,e){return Mw(a,e||{},0,0)}var pg=function(a,e,t,i){for(var n in a){var s=a[n],r=e+n;s instanceof Ht?t[r]=[s,i]:Array.isArray(s)?t[r]=[s[0],fg(i,s[1])]:pg(s,r+"/",t,i)}},ef=typeof TextEncoder<"u"&&new TextEncoder,Bw=typeof TextDecoder<"u"&&new TextDecoder,Tw=0;try{Bw.decode(Ag,{stream:!0}),Tw=1}catch{}function Ma(a,e){var t;if(ef)return ef.encode(a);for(var i=a.length,n=new Ht(a.length+(a.length>>1)),s=0,r=function(c){n[s++]=c},t=0;t<i;++t){if(s+5>n.length){var o=new Ht(s+8+(i-t<<1));o.set(n),n=o}var l=a.charCodeAt(t);l<128||e?r(l):l<2048?(r(192|l>>6),r(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|a.charCodeAt(++t)&1023,r(240|l>>18),r(128|l>>12&63),r(128|l>>6&63),r(128|l&63)):(r(224|l>>12),r(128|l>>6&63),r(128|l&63))}return dg(n,0,s)}var lh=function(a){var e=0;if(a)for(var t in a){var i=a[t].length;if(i>65535)throw"extra field too long";e+=i+4}return e},tf=function(a,e,t,i,n,s,r,o){var l=i.length,c=t.extra,h=o&&o.length,u=lh(c);vt(a,e,r!=null?33639248:67324752),e+=4,r!=null&&(a[e++]=20,a[e++]=t.os),a[e]=20,e+=2,a[e++]=t.flag<<1|(s==null&&8),a[e++]=n&&8,a[e++]=t.compression&255,a[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),A=d.getFullYear()-1980;if(A<0||A>119)throw"date not in range 1980-2099";if(vt(a,e,A<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,s!=null&&(vt(a,e,t.crc),vt(a,e+4,s),vt(a,e+8,t.size)),vt(a,e+12,l),vt(a,e+14,u),e+=16,r!=null&&(vt(a,e,h),vt(a,e+6,t.attrs),vt(a,e+10,r),e+=14),a.set(i,e),e+=l,u)for(var g in c){var p=c[g],f=p.length;vt(a,e,+g),vt(a,e+2,f),a.set(p,e+4),e+=4+f}return h&&(a.set(o,e),e+=h),e},Rw=function(a,e,t,i,n){vt(a,e,101010256),vt(a,e+8,t),vt(a,e+10,t),vt(a,e+12,i),vt(a,e+16,n)};function Lw(a,e){e||(e={});var t={},i=[];pg(a,"",t,e);var n=0,s=0;for(var r in t){var o=t[r],l=o[0],c=o[1],h=c.level==0?0:8,u=Ma(r),d=u.length,A=c.comment,g=A&&Ma(A),p=g&&g.length,f=lh(c.extra);if(d>65535)throw"filename too long";var m=h?bw(l,c):l,E=m.length,v=Sw();v.p(l),i.push(fg(c,{size:l.length,crc:v.d(),c:m,f:u,m:g,u:d!=r.length||g&&A.length!=p,o:n,compression:h})),n+=30+d+f+E,s+=76+2*(d+f)+(p||0)+E}for(var _=new Ht(s+22),x=n,C=s-n,b=0;b<i.length;++b){var u=i[b];tf(_,u.o,u,u.f,u.u,u.c.length);var y=30+u.f.length+lh(u.extra);_.set(u.c,u.o+y),tf(_,n,u,u.f,u.u,u.c.length,u.o,u.m),n+=16+y+(u.m?u.m.length:0)}return Rw(_,n,i.length,C,x),_}class Dw{async parse(e){const t={},i="model.usda";t[i]=null;let n=gg();const s={},r={};e.traverseVisible(l=>{if(l.isMesh){const c=l.geometry,h=l.material;if(h.isMeshStandardMaterial){const u="geometries/Geometry_"+c.id+".usd";if(!(u in t)){const d=Fw(c);t[u]=Pw(d)}h.uuid in s||(s[h.uuid]=h),n+=Nw(l,c,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(n+=Hw(l))}),n+=zw(s,r),t[i]=Ma(n),n=null;for(const l in r){const c=r[l],h=l.split("_")[1],u=c.format===1023,d=Qw(c.image,h),A=await new Promise(g=>d.toBlob(g,u?"image/png":"image/jpeg",1));t[`textures/Texture_${l}.${u?"png":"jpg"}`]=new Uint8Array(await A.arrayBuffer())}let o=0;for(const l in t){const c=t[l],h=34+l.length;o+=h;const u=o&63;if(u!==4){const d=64-u,A=new Uint8Array(d);t[l]=[c,{extra:{12345:A}}]}o=c.length}return Lw(t,{level:0})}}function Qw(a,e){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&a instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){const t=1024/Math.max(a.width,a.height),i=document.createElement("canvas");i.width=a.width*Math.min(1,t),i.height=a.height*Math.min(1,t);const n=i.getContext("2d");if(n.drawImage(a,0,0,i.width,i.height),e!==void 0){const s=parseInt(e,16),r=(s>>16&255)/255,o=(s>>8&255)/255,l=(s&255)/255,c=n.getImageData(0,0,i.width,i.height),h=c.data;for(let u=0;u<h.length;u+=4)h[u+0]=h[u+0]*r,h[u+1]=h[u+1]*o,h[u+2]=h[u+2]*l;n.putImageData(c,0,0)}return i}}const jr=7;function gg(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function Pw(a){let e=gg();return e+=a,Ma(e)}function Nw(a,e,t){const i="Object_"+a.id,n=mg(a.matrixWorld);return a.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",a),`def Xform "${i}" (
    prepend references = @./geometries/Geometry_${e.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${n}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${t.id}>
}

`}function mg(a){const e=a.elements;return`( ${Ho(e,0)}, ${Ho(e,4)}, ${Ho(e,8)}, ${Ho(e,12)} )`}function Ho(a,e){return`(${a[e+0]}, ${a[e+1]}, ${a[e+2]}, ${a[e+3]})`}function Fw(a){return`
def "Geometry"
{
  ${Uw(a)}
}
`}function Uw(a){const e="Geometry",t=a.attributes,i=t.position.count;return`
    def Mesh "${e}"
    {
        int[] faceVertexCounts = [${Ow(a)}]
        int[] faceVertexIndices = [${kw(a)}]
        normal3f[] normals = [${nf(t.normal,i)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${nf(t.position,i)}]
        float2[] primvars:st = [${Gw(t.uv,i)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}function Ow(a){const e=a.index!==null?a.index.count:a.attributes.position.count;return Array(e/3).fill(3).join(", ")}function kw(a){const e=a.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{const i=a.attributes.position.count;for(let n=0;n<i;n++)t.push(n)}return t.join(", ")}function nf(a,e){if(a===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let i=0;i<a.count;i++){const n=a.getX(i),s=a.getY(i),r=a.getZ(i);t.push(`(${n.toPrecision(jr)}, ${s.toPrecision(jr)}, ${r.toPrecision(jr)})`)}return t.join(", ")}function Gw(a,e){if(a===void 0)return console.warn("USDZExporter: UVs missing."),Array(e).fill("(0, 0)").join(", ");const t=[];for(let i=0;i<a.count;i++){const n=a.getX(i),s=a.getY(i);t.push(`(${n.toPrecision(jr)}, ${1-s.toPrecision(jr)})`)}return t.join(", ")}function zw(a,e){const t=[];for(const i in a){const n=a[i];t.push(Vw(n,e))}return`def "Materials"
{
${t.join("")}
}

`}function Vw(a,e){const t="            ",i=[],n=[];function s(r,o,l){const c=r.id+(l?"_"+l.getHexString():""),h=r.format===1023;return e[c]=r,`
        def Shader "Transform2d_${o}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${a.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${rf(r.repeat)}
            float2 inputs:translation = ${rf(r.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${r.id}_${o}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${c}.${h?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${a.id}/Transform2d_${o}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${a.transparent||a.alphaTest>0?"float outputs:a":""}
        }`}return a.side===zt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",a),a.map!==null?(i.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${a.id}/Texture_${a.map.id}_diffuse.outputs:rgb>`),a.transparent?i.push(`${t}float inputs:opacity.connect = </Materials/Material_${a.id}/Texture_${a.map.id}_diffuse.outputs:a>`):a.alphaTest>0&&(i.push(`${t}float inputs:opacity.connect = </Materials/Material_${a.id}/Texture_${a.map.id}_diffuse.outputs:a>`),i.push(`${t}float inputs:opacityThreshold = ${a.alphaTest}`)),n.push(s(a.map,"diffuse",a.color))):i.push(`${t}color3f inputs:diffuseColor = ${sf(a.color)}`),a.emissiveMap!==null?(i.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${a.id}/Texture_${a.emissiveMap.id}_emissive.outputs:rgb>`),n.push(s(a.emissiveMap,"emissive"))):a.emissive.getHex()>0&&i.push(`${t}color3f inputs:emissiveColor = ${sf(a.emissive)}`),a.normalMap!==null&&(i.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${a.id}/Texture_${a.normalMap.id}_normal.outputs:rgb>`),n.push(s(a.normalMap,"normal"))),a.aoMap!==null&&(i.push(`${t}float inputs:occlusion.connect = </Materials/Material_${a.id}/Texture_${a.aoMap.id}_occlusion.outputs:r>`),n.push(s(a.aoMap,"occlusion"))),a.roughnessMap!==null&&a.roughness===1?(i.push(`${t}float inputs:roughness.connect = </Materials/Material_${a.id}/Texture_${a.roughnessMap.id}_roughness.outputs:g>`),n.push(s(a.roughnessMap,"roughness"))):i.push(`${t}float inputs:roughness = ${a.roughness}`),a.metalnessMap!==null&&a.metalness===1?(i.push(`${t}float inputs:metallic.connect = </Materials/Material_${a.id}/Texture_${a.metalnessMap.id}_metallic.outputs:b>`),n.push(s(a.metalnessMap,"metallic"))):i.push(`${t}float inputs:metallic = ${a.metalness}`),a.alphaMap!==null?(i.push(`${t}float inputs:opacity.connect = </Materials/Material_${a.id}/Texture_${a.alphaMap.id}_opacity.outputs:r>`),i.push(`${t}float inputs:opacityThreshold = 0.0001`),n.push(s(a.alphaMap,"opacity"))):i.push(`${t}float inputs:opacity = ${a.opacity}`),a.isMeshPhysicalMaterial&&(i.push(`${t}float inputs:clearcoat = ${a.clearcoat}`),i.push(`${t}float inputs:clearcoatRoughness = ${a.clearcoatRoughness}`),i.push(`${t}float inputs:ior = ${a.ior}`)),`
    def Material "Material_${a.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${i.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${a.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${a.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${n.join(`
`)}

    }
`}function sf(a){return`(${a.r}, ${a.g}, ${a.b})`}function rf(a){return`(${a.x}, ${a.y})`}function Hw(a){const e=a.name?a.name:"Camera_"+a.id,t=mg(a.matrixWorld);return a.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",a),a.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${a.near}, ${a.far})
			float horizontalAperture = ${(Math.abs(a.left)+Math.abs(a.right))*10}
			float verticalAperture = ${(Math.abs(a.top)+Math.abs(a.bottom))*10}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${a.near}, ${a.far})
			float focalLength = ${a.getFocalLength()}
			float focusDistance = ${a.focus}
			float horizontalAperture = ${a.getFilmWidth()}
			token projection = "perspective"
			float verticalAperture = ${a.getFilmHeight()}
		}
	
	`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=a=>e=>{try{const t=ss(e),i=(t.length?t[0].terms:[]).filter(s=>s&&s.type==="ident").map(s=>s.value).filter(s=>a.indexOf(s)>-1),n=new Set;for(const s of i)n.add(s);return n}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qs=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};let of=!1,af=!1;const lf="#model-viewer-no-ar-fallback",qw=Ww(["quick-look","scene-viewer","webxr","none"]),Yw="webxr scene-viewer quick-look",Zt={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},Yi=Symbol("arButtonContainer"),cf=Symbol("enterARWithWebXR"),hf=Symbol("openSceneViewer"),uf=Symbol("openIOSARQuickLook"),Xw=Symbol("canActivateAR"),Wo=Symbol("arMode"),sc=Symbol("arModes"),Ps=Symbol("arAnchor"),qo=Symbol("preload"),Yo=Symbol("onARButtonContainerClick"),rc=Symbol("onARStatus"),oc=Symbol("onARTracking"),ac=Symbol("onARTap"),Br=Symbol("selectARMode"),lc=Symbol("triggerLoad"),Kw=a=>{var e,t,i,n,s,r,o,l,c,h;class u extends a{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=Yw,this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[n]=new Set,this[s]=Zt.NONE,this[r]=!1,this[o]=A=>{A.preventDefault(),this.activateAR()},this[l]=({status:A})=>{(A===yn.NOT_PRESENTING||this[Xe].arRenderer.presentedScene===this[ne])&&(this.setAttribute("ar-status",A),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:A}})),A===yn.NOT_PRESENTING?this.removeAttribute("ar-tracking"):A===yn.SESSION_STARTED&&this.setAttribute("ar-tracking",Jc.TRACKING))},this[c]=({status:A})=>{this.setAttribute("ar-tracking",A),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:A}}))},this[h]=A=>{A.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Wo]!==Zt.NONE}connectedCallback(){super.connectedCallback(),this[Xe].arRenderer.addEventListener("status",this[rc]),this.setAttribute("ar-status",yn.NOT_PRESENTING),this[Xe].arRenderer.addEventListener("tracking",this[oc]),this[Ps].addEventListener("message",this[ac])}disconnectedCallback(){super.disconnectedCallback(),this[Xe].arRenderer.removeEventListener("status",this[rc]),this[Xe].arRenderer.removeEventListener("tracking",this[oc]),this[Ps].removeEventListener("message",this[ac])}update(A){super.update(A),A.has("arScale")&&(this[ne].canScale=this.arScale!=="fixed"),A.has("arPlacement")&&(this[ne].updateShadow(),this[Vt]()),A.has("arModes")&&(this[sc]=qw(this.arModes)),(A.has("ar")||A.has("arModes")||A.has("src")||A.has("iosSrc"))&&this[Br]()}async activateAR(){switch(this[Wo]){case Zt.QUICK_LOOK:this[uf]();break;case Zt.WEBXR:await this[cf]();break;case Zt.SCENE_VIEWER:this[hf]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(e=Xw,t=Yi,i=Ps,n=sc,s=Wo,r=qo,o=Yo,l=rc,c=oc,h=ac,Br)](){let A=Zt.NONE;if(this.ar){if(this.src!=null)for(const g of this[sc]){if(g==="webxr"&&Ip&&!of&&await this[Xe].arRenderer.supportsPresentation()){A=Zt.WEBXR;break}if(g==="scene-viewer"&&Lx&&!af){A=Zt.SCENE_VIEWER;break}if(g==="quick-look"&&od){A=Zt.QUICK_LOOK;break}}A===Zt.NONE&&this.iosSrc!=null&&od&&(A=Zt.QUICK_LOOK)}if(A!==Zt.NONE)this[Yi].classList.add("enabled"),this[Yi].addEventListener("click",this[Yo]);else if(this[Yi].classList.contains("enabled")){this[Yi].removeEventListener("click",this[Yo]),this[Yi].classList.remove("enabled");const g=yn.FAILED;this.setAttribute("ar-status",g),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:g}}))}this[Wo]=A}async[cf](){console.log("Attempting to present in AR with WebXR..."),await this[lc]();try{this[Yi].removeEventListener("click",this[Yo]);const{arRenderer:A}=this[Xe];A.placeOnWall=this.arPlacement==="wall",await A.present(this[ne],this.xrEnvironment)}catch(A){console.warn("Error while trying to present in AR with WebXR"),console.error(A),await this[Xe].arRenderer.stopPresenting(),of=!0,console.warn("Falling back to next ar-mode"),await this[Br](),this.activateAR()}finally{this[Br]()}}async[lc](){this.loaded||(this[qo]=!0,this[Js](),await Ux(this,"load"),this[qo]=!1)}[nr](){return super[nr]()||this[qo]}[hf](){const A=self.location.toString(),g=new URL(A),p=new URL(this.src,A),f=new URLSearchParams(p.search);if(g.hash=lf,f.set("mode","ar_preferred"),f.has("disable_occlusion")||f.set("disable_occlusion","true"),this.arScale==="fixed"&&f.set("resizable","false"),this.arPlacement==="wall"&&f.set("enable_vertical_placement","true"),f.has("sound")){const v=new URL(f.get("sound"),A);f.set("sound",v.toString())}if(f.has("link")){const v=new URL(f.get("link"),A);f.set("link",v.toString())}const m=`intent://arvr.google.com/scene-viewer/1.0?${f.toString()+"&file="+encodeURIComponent(p.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(g.toString())};end;`,E=()=>{self.location.hash===lf&&(af=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[Br]())};self.addEventListener("hashchange",E,{once:!0}),this[Ps].setAttribute("href",m),console.log("Attempting to present in AR with Scene Viewer..."),this[Ps].click()}async[uf](){const A=!this.iosSrc;this[Yi].classList.remove("enabled");const g=A?await this.prepareUSDZ():this.iosSrc,p=new URL(g,self.location.toString());if(A){const E=self.location.toString(),v=new URL(E),_=new URL(this.src,v);_.hash&&(p.hash=_.hash)}this.arScale==="fixed"&&(p.hash&&(p.hash+="&"),p.hash+="allowsContentScaling=0");const f=this[Ps];f.setAttribute("rel","ar");const m=document.createElement("img");f.appendChild(m),f.setAttribute("href",p.toString()),A&&f.setAttribute("download","model.usdz"),f.style.display="none",f.isConnected||this.shadowRoot.appendChild(f),console.log("Attempting to present in AR with Quick Look..."),f.click(),f.removeChild(m),A&&URL.revokeObjectURL(g),this[Yi].classList.add("enabled")}async prepareUSDZ(){const A=this[rs].beginActivity();await this[lc]();const{model:g,shadow:p}=this[ne];if(g==null)return"";let f=!1;p!=null&&(f=p.visible,p.visible=!1),A(.2);const E=await new Dw().parse(g),v=new Blob([E],{type:"model/vnd.usdz+zip"}),_=URL.createObjectURL(v);return A(1),p!=null&&(p.visible=f),_}}return Qs([Ee({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Qs([Ee({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Qs([Ee({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Qs([Ee({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Qs([Ee({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Qs([Ee({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vg,df,Af;const cr=Symbol("evaluate"),pa=Symbol("lastValue");class Ze{constructor(){this[vg]=null}static evaluatableFor(e,t=Sn){if(e instanceof Ze)return e;if(e.type==="number")return e.unit==="%"?new Jw(e,t):e;switch(e.name.value){case"calc":return new Zw(e,t);case"env":return new $w(e)}return Sn}static evaluate(e){return e instanceof Ze?e.evaluate():e}static isConstant(e){return e instanceof Ze?e.isConstant:!0}static applyIntrinsics(e,t){const{basis:i,keywords:n}=t,{auto:s}=n;return i.map((r,o)=>{const l=s[o]==null?r:s[o];let c=e[o]?e[o]:l;if(c.type==="ident"){const h=c.value;h in n&&(c=n[h][o])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?Mt(c.number/100*r.number,r.unit):(c=Bi(c,r),c.unit!==r.unit?r:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[pa]==null)&&(this[pa]=this[cr]()),this[pa]}}vg=pa;const ff=Symbol("percentage"),cc=Symbol("basis");class Jw extends Ze{constructor(e,t){super(),this[ff]=e,this[cc]=t}get isConstant(){return!0}[cr](){return Mt(this[ff].number/100*this[cc].number,this[cc].unit)}}const Xo=Symbol("identNode");class $w extends Ze{constructor(e){super(),this[df]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[Xo]=t)}get isConstant(){return!1}[(df=Xo,cr)](){if(this[Xo]!=null)switch(this[Xo].value){case"window-scroll-y":const e=window.pageYOffset,t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:e/(t-window.innerHeight)||0,unit:null}}return Sn}}const jw=/[\*\/]/,Ns=Symbol("evaluator");class Zw extends Ze{constructor(e,t=Sn){if(super(),this[Af]=null,e.arguments.length!==1)return;const i=e.arguments[0].terms.slice(),n=[];for(;i.length;){const s=i.shift();if(n.length>0){const r=n[n.length-1];if(r.type==="operator"&&jw.test(r.value)){const o=n.pop(),l=n.pop();if(l==null)return;n.push(new gf(o,Ze.evaluatableFor(l,t),Ze.evaluatableFor(s,t)));continue}}n.push(s.type==="operator"?s:Ze.evaluatableFor(s,t))}for(;n.length>2;){const[s,r,o]=n.splice(0,3);if(r.type!=="operator")return;n.unshift(new gf(r,Ze.evaluatableFor(s,t),Ze.evaluatableFor(o,t)))}n.length===1&&(this[Ns]=n[0])}get isConstant(){return this[Ns]==null||Ze.isConstant(this[Ns])}[(Af=Ns,cr)](){return this[Ns]!=null?Ze.evaluate(this[Ns]):Sn}}const pf=Symbol("operator"),hc=Symbol("left"),uc=Symbol("right");class gf extends Ze{constructor(e,t,i){super(),this[pf]=e,this[hc]=t,this[uc]=i}get isConstant(){return Ze.isConstant(this[hc])&&Ze.isConstant(this[uc])}[cr](){const e=Bi(Ze.evaluate(this[hc])),t=Bi(Ze.evaluate(this[uc])),{number:i,unit:n}=e,{number:s,unit:r}=t;if(r!=null&&n!=null&&r!=n)return Sn;const o=n||r;let l;switch(this[pf].value){case"+":l=i+s;break;case"-":l=i-s;break;case"/":l=i/s;break;case"*":l=i*s;break;default:return Sn}return{type:"number",number:l,unit:o}}}const dc=Symbol("evaluatables"),mf=Symbol("intrinsics");class _g extends Ze{constructor(e,t){super(),this[mf]=t;const i=e[0],n=i!=null?i.terms:[];this[dc]=t.basis.map((s,r)=>{const o=n[r];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:Ze.evaluatableFor(o,s)})}get isConstant(){for(const e of this[dc])if(!Ze.isConstant(e))return!1;return!0}[cr](){const e=this[dc].map(t=>Ze.evaluate(t));return Ze.applyIntrinsics(e,this[mf]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yg,Eg,xg,Ig;const Fs=Symbol("instances"),vf=Symbol("activateListener"),_f=Symbol("deactivateListener"),Ac=Symbol("notifyInstances"),yf=Symbol("notify"),Ef=Symbol("callback");class Ei{constructor(e){this[Ef]=e}static[Ac](){for(const e of Ei[Fs])e[yf]()}static[(yg=Fs,vf)](){window.addEventListener("scroll",this[Ac],{passive:!0})}static[_f](){window.removeEventListener("scroll",this[Ac])}observe(){Ei[Fs].size===0&&Ei[vf](),Ei[Fs].add(this)}disconnect(){Ei[Fs].delete(this),Ei[Fs].size===0&&Ei[_f]()}[yf](){this[Ef]()}}Ei[yg]=new Set;const xf=Symbol("computeStyleCallback"),Cg=Symbol("astWalker"),Wr=Symbol("dependencies"),wg=Symbol("onScroll");class eS{constructor(e){this[Eg]={},this[xg]=new ZC(["function"]),this[Ig]=()=>{this[xf]({relatedState:"window-scroll"})},this[xf]=e}observeEffectsFor(e){const t={},i=this[Wr];this[Cg].walk(e,n=>{const{name:s}=n,o=n.arguments[0].terms[0];if(!(s.value!=="env"||o==null||o.type!=="ident"))switch(o.value){case"window-scroll-y":if(t["window-scroll"]==null){const l="window-scroll"in i?i["window-scroll"]:new Ei(this[wg]);l.observe(),delete i["window-scroll"],t["window-scroll"]=l}break}});for(const n in i)i[n].disconnect();this[Wr]=t}dispose(){for(const e in this[Wr])this[Wr][e].disconnect()}}Eg=Wr,xg=Cg,Ig=wg;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=a=>{const e=a.observeEffects||!1,t=a.intrinsics instanceof Function?a.intrinsics:()=>a.intrinsics;return(i,n)=>{const s=i.updated,r=i.connectedCallback,o=i.disconnectedCallback,l=Symbol(`${n}StyleEffector`),c=Symbol(`${n}StyleEvaluator`),h=Symbol(`${n}UpdateEvaluator`),u=Symbol(`${n}EvaluateAndSync`);Object.defineProperties(i,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=ss(this[n]);this[c]=new _g(d,t(this)),this[l]==null&&e&&(this[l]=new eS(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[a.updateHandler](d)}},updated:{value:function(d){d.has(n)&&(this[h](),this[u]()),s.call(this,d)}},connectedCallback:{value:function(){r.call(this),this.requestUpdate(n,this[n])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=.018,If=2,iS=300,nS=new Be,Cf=new B,wf=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),Ko=Math.PI/8,Jo=.04,$o=10,Dt={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class sS extends ri{constructor(e,t,i){super(),this.camera=e,this.element=t,this.scene=i,this.orbitSensitivity=1,this.inputSensitivity=1,this.changeSource=Dt.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Ft,this.panPerPixel=0,this.spherical=new la,this.goalSpherical=new la,this.thetaDamper=new Xt,this.phiDamper=new Xt,this.radiusDamper=new Xt,this.logFov=Math.log(wf.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Xt,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=n=>{if(this.enablePan)n.preventDefault();else for(const s of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:s.id})))},this.touchModeZoom=(n,s)=>{if(!this._disableZoom){const r=this.twoTouchDistance(this.pointers[0],this.pointers[1]),o=Jo*(this.lastSeparation-r)*50/this.scene.height;this.lastSeparation=r,this.userAdjustOrbit(0,0,o)}this.panPerPixel>0&&this.movePan(n,s)},this.disableScroll=n=>{n.preventDefault()},this.touchModeRotate=(n,s)=>{const{touchAction:r}=this._options;if(!this.touchDecided&&r!=="none"){this.touchDecided=!0;const o=Math.abs(n),l=Math.abs(s);if(this.changeSource===Dt.USER_INTERACTION&&(r==="pan-y"&&l>o||r==="pan-x"&&o>l)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(n,s)},this.onPointerDown=n=>{if(this.pointers.length>2)return;const{element:s}=this;this.pointers.length===0&&(s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=n.clientX,this.startPointerPosition.clientY=n.clientY,this.startTime=performance.now());try{s.setPointerCapture(n.pointerId)}catch{}this.pointers.push({clientX:n.clientX,clientY:n.clientY,id:n.pointerId}),this.isUserPointing=!1,n.pointerType==="touch"?(this.changeSource=n.altKey?Dt.AUTOMATIC:Dt.USER_INTERACTION,this.onTouchChange(n)):(this.changeSource=Dt.USER_INTERACTION,this.onMouseDown(n))},this.onPointerMove=n=>{const s=this.pointers.find(c=>c.id===n.pointerId);if(s==null)return;const r=this.pointers.length,o=(n.clientX-s.clientX)/r,l=(n.clientY-s.clientY)/r;o===0&&l===0||(s.clientX=n.clientX,s.clientY=n.clientY,n.pointerType==="touch"?(this.changeSource=n.altKey?Dt.AUTOMATIC:Dt.USER_INTERACTION,this.touchMode!==null&&this.touchMode(o,l)):(this.changeSource=Dt.USER_INTERACTION,this.panPerPixel>0?this.movePan(o,l):this.handleSinglePointerMove(o,l)))},this.onPointerUp=n=>{const{element:s}=this,r=this.pointers.findIndex(o=>o.id===n.pointerId);r!==-1&&this.pointers.splice(r,1),this.panPerPixel>0&&!n.altKey&&this.resetRadius(),this.pointers.length===0?(s.removeEventListener("pointermove",this.onPointerMove),s.removeEventListener("pointerup",this.onPointerUp),s.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(n)):this.touchMode!==null&&this.onTouchChange(n),this.scene.element[ga].style.opacity=0,s.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=n=>{this.changeSource=Dt.USER_INTERACTION;const s=n.deltaY*(n.deltaMode==1?18:1)*Jo/30;this.userAdjustOrbit(0,0,s),n.preventDefault()},this.onKeyDown=n=>{const{changeSource:s}=this;this.changeSource=Dt.USER_INTERACTION,(n.shiftKey&&this.enablePan?this.panKeyCodeHandler(n):this.orbitZoomKeyCodeHandler(n))?n.preventDefault():this.changeSource=s},this._options=Object.assign({},wf),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchmove",()=>{},{passive:!1}),e.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("contextmenu",this.onContext),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new la){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.near=Math.max(e,t/1e3),this.camera.far=t,this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,i=this.goalSpherical.radius){const{minimumAzimuthalAngle:n,maximumAzimuthalAngle:s,minimumPolarAngle:r,maximumPolarAngle:o,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,A=Ii(e,n,s);!isFinite(n)&&!isFinite(s)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-A)+A);const g=Ii(t,r,o),p=Ii(i,l,c);return A===h&&g===u&&p===d?!1:(this.goalSpherical.theta=A,this.goalSpherical.phi=g,this.goalSpherical.radius=p,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:i}=this._options;e=Ii(e,t,i),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,i){const{theta:n,phi:s,radius:r}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-n,d=Math.PI-.001,A=n-Ii(e,-d-u,d-u),g=s-t,p=i===0?0:((i>0?l:o)-r)/(Math.log(i>0?h:c)-this.goalLogFov),f=r+i*(isFinite(p)?p:(l-o)*2);if(this.setOrbit(A,g,f),i!==0){const m=this.goalLogFov+i;this.setFieldOfView(Math.exp(m))}}jumpToGoal(){this.update(0,kp)}update(e,t){if(this.isStationary())return;const{maximumPolarAngle:i,maximumRadius:n}=this._options,s=this.spherical.theta-this.goalSpherical.theta;Math.abs(s)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(s)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,i),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,n),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera()}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}dispatchChange(){this.dispatchEvent({type:"change",source:this.changeSource})}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new ls(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix()),this.dispatchChange()}userAdjustOrbit(e,t,i){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,i*this.inputSensitivity),this.dispatchChange()}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return(t-Math.floor(t))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.element.clientHeight}twoTouchDistance(e,t){const{clientX:i,clientY:n}=e,{clientX:s,clientY:r}=t,o=s-i,l=r-n;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(e,t){const i=this.pixelLengthToSphericalAngle(e),n=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(i,n,0)}initializePan(){const{theta:e,phi:t}=this.spherical,i=e-this.scene.yaw;this.panPerPixel=tS/this.scene.height,this.panProjection.set(-Math.cos(i),-Math.cos(t)*Math.sin(i),0,0,Math.sin(t),0,Math.sin(i),-Math.cos(t)*Math.cos(i),0)}movePan(e,t){const{scene:i}=this,n=Cf.set(e,t,0).multiplyScalar(this.inputSensitivity),s=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;n.multiplyScalar(s);const r=i.getTarget();r.add(n.applyMatrix3(this.panProjection)),i.boundingSphere.clampPoint(r,r),i.setTarget(r.x,r.y,r.z),this.dispatchChange()}recenter(e){if(performance.now()>this.startTime+iS||Math.abs(e.clientX-this.startPointerPosition.clientX)>If||Math.abs(e.clientY-this.startPointerPosition.clientY)>If)return;const{scene:t}=this,i=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(i==null){const{cameraTarget:n}=t.element;t.element.cameraTarget="",t.element.cameraTarget=n,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(i.position),t.setTarget(i.position.x,i.position.y,i.position.z)}resetRadius(){const{scene:e}=this,t=e.positionAndNormalFromPoint(nS.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const i=e.getTarget(),{theta:n,phi:s}=this.spherical,r=n-e.yaw,o=Cf.set(Math.sin(s)*Math.sin(r),Math.cos(s),Math.sin(s)*Math.cos(r)),l=o.dot(t.position.sub(i));i.add(o.multiplyScalar(l)),e.setTarget(i.x,i.y,i.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[ga].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[ga].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case"PageUp":this.userAdjustOrbit(0,0,Jo);break;case"PageDown":this.userAdjustOrbit(0,0,-1*Jo);break;case"ArrowUp":this.userAdjustOrbit(0,-Ko,0);break;case"ArrowDown":this.userAdjustOrbit(0,Ko,0);break;case"ArrowLeft":this.userAdjustOrbit(-Ko,0,0);break;case"ArrowRight":this.userAdjustOrbit(Ko,0,0);break;default:t=!1;break}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case"ArrowUp":this.movePan(0,-1*$o);break;case"ArrowDown":this.movePan(0,$o);break;case"ArrowLeft":this.movePan(-1*$o,0);break;case"ArrowRight":this.movePan($o,0);break;default:t=!1;break}return t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=a=>a<.5?2*a*a:-1+(4-2*a)*a,rS=(a,e,t=Sg)=>i=>a+(e-a)*t(i),oS=(a,e)=>{const t=n=>s=>n+=s,i=e.map(t(0));return n=>{n=Ii(n,0,1),n*=i[i.length-1];const s=i.findIndex(l=>l>=n),r=s<1?0:i[s-1],o=i[s];return a[s]((n-r)/(o-r))}},Ys=a=>{const e=[],t=[];let i=a.initialValue;for(let n=0;n<a.keyframes.length;++n){const s=a.keyframes[n],{value:r,frames:o}=s,l=s.ease||Sg,c=rS(i,r,l);e.push(c),t.push(o),i=r}return oS(e,t)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const aS=5e3,lS=Ys({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),cS=Ys({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),hS=30,uS=12,Mg="0deg 75deg 105%",dS="auto auto auto",AS="auto",fS=2.2,pS=["front","right","back","left"],gS=["upper-","","lower-"],mS=3e3,vS=". Use mouse, touch or arrow keys to move.",jo={AUTO:"auto",NONE:"none"},fc={BASIC:"basic",WIGGLE:"wiggle"},_S={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},Sf=()=>({basis:[Da(Mt(hS,"deg"))],keywords:{auto:[null]}}),yS=()=>({basis:[Da(Mt(uS,"deg"))],keywords:{auto:[null]}}),bg=(()=>{const a=ss(Mg)[0].terms,e=Bi(a[0]),t=Bi(a[1]);return i=>{const n=i[ne].idealCameraDistance();return{basis:[e,t,Mt(n,"m")],keywords:{auto:[null,null,Mt(105,"%")]}}}})(),ES=a=>{const e=fS*a[ne].boundingSphere.radius;return{basis:[Mt(-1/0,"rad"),Mt(Math.PI/8,"rad"),Mt(e,"m")],keywords:{auto:[null,null,null]}}},xS=a=>{const e=bg(a),i=new _g([],e).evaluate()[2];return{basis:[Mt(1/0,"rad"),Mt(Math.PI-Math.PI/8,"rad"),Mt(i,"m")],keywords:{auto:[null,null,null]}}},IS=a=>{const e=a[ne].boundingBox.getCenter(new B);return{basis:[Mt(e.x,"m"),Mt(e.y,"m"),Mt(e.z,"m")],keywords:{auto:[null,null,null]}}},Bg=Math.PI/2,CS=Math.PI/3,wS=Bg/2,SS=2*Math.PI,Ve=Symbol("controls"),ga=Symbol("panElement"),pc=Symbol("promptElement"),Zo=Symbol("promptAnimatedContainer"),gc=Symbol("fingerAnimatedContainers"),ea=Symbol("deferInteractionPrompt"),Mf=Symbol("updateAria"),bf=Symbol("updateCameraForRadius"),ta=Symbol("onChange"),Tr=Symbol("onPointerChange"),kn=Symbol("waitingToPromptUser"),ia=Symbol("userHasInteracted"),Us=Symbol("promptElementVisibleTime"),Rr=Symbol("lastPromptOffset"),mc=Symbol("lastSpherical"),Lr=Symbol("jumpCamera"),vc=Symbol("initialized"),Dr=Symbol("maintainThetaPhi"),Bf=Symbol("syncCameraOrbit"),Tf=Symbol("syncFieldOfView"),Rf=Symbol("syncCameraTarget"),Lf=Symbol("syncMinCameraOrbit"),Df=Symbol("syncMaxCameraOrbit"),Qf=Symbol("syncMinFieldOfView"),Pf=Symbol("syncMaxFieldOfView"),MS=a=>{var e,t,i,n,s,r,o,l,c,h,u,d,A,g,p;class f extends a{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=Mg,this.cameraTarget=dS,this.fieldOfView=AS,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=mS,this.interactionPrompt=jo.AUTO,this.interactionPromptStyle=fc.WIGGLE,this.orbitSensitivity=1,this.touchAction=_S.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=Gp,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector("#prompt"),this[i]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[n]=this.shadowRoot.querySelector(".pan-target"),this[s]=0,this[r]=1/0,this[o]=!1,this[l]=!1,this[c]=new sS(this[ne].camera,this[Si],this[ne]),this[h]=new la,this[u]=!1,this[d]=!1,this[A]=!1,this[g]=({source:E})=>{this[Mf](),this[Vt](),E===Dt.USER_INTERACTION&&(this[ia]=!0,this[ea]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:E}}))},this[p]=E=>{E.type==="pointer-change-start"?this[Jr].classList.add("pointer-tumbling"):this[Jr].classList.remove("pointer-tumbling")}}get inputSensitivity(){return this[Ve].inputSensitivity}set inputSensitivity(E){this[Ve].inputSensitivity=E}getCameraOrbit(){const{theta:E,phi:v,radius:_}=this[mc];return{theta:E,phi:v,radius:_,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return En(this[Xe].isPresenting?this[Xe].arRenderer.target:this[ne].getTarget())}getFieldOfView(){return this[Ve].getFieldOfView()}getMinimumFieldOfView(){return this[Ve].options.minimumFieldOfView}getMaximumFieldOfView(){return this[Ve].options.maximumFieldOfView}getIdealAspect(){return this[ne].idealAspect}jumpCameraToGoal(){this[Lr]=!0,this.requestUpdate(Lr,!1)}resetInteractionPrompt(){this[Rr]=0,this[Us]=1/0,this[ia]=!1,this[kn]=this.interactionPrompt===jo.AUTO&&this.cameraControls}zoom(E){const v=new WheelEvent("wheel",{deltaY:-30*E});this[Si].dispatchEvent(v)}connectedCallback(){super.connectedCallback(),this[Ve].addEventListener("change",this[ta]),this[Ve].addEventListener("pointer-change-start",this[Tr]),this[Ve].addEventListener("pointer-change-end",this[Tr])}disconnectedCallback(){super.disconnectedCallback(),this[Ve].removeEventListener("change",this[ta]),this[Ve].removeEventListener("pointer-change-start",this[Tr]),this[Ve].removeEventListener("pointer-change-end",this[Tr])}updated(E){super.updated(E);const v=this[Ve],_=this[ne];if(E.has("cameraControls")&&(this.cameraControls?(v.enableInteraction(),this.interactionPrompt===jo.AUTO&&(this[kn]=!0)):(v.disableInteraction(),this[ea]()),this[Si].setAttribute("aria-label",this[Kr])),E.has("disableZoom")&&(v.disableZoom=this.disableZoom),E.has("disablePan")&&(v.enablePan=!this.disablePan),E.has("disableTap")&&(v.enableTap=!this.disableTap),(E.has("interactionPrompt")||E.has("cameraControls")||E.has("src"))&&(this.interactionPrompt===jo.AUTO&&this.cameraControls&&!this[ia]?this[kn]=!0:this[ea]()),E.has("interactionPromptStyle")&&(this[Zo].style.opacity=this.interactionPromptStyle==fc.BASIC?"1":"0"),E.has("touchAction")){const x=this.touchAction;v.applyOptions({touchAction:x}),v.updateTouchActionStyle()}E.has("orbitSensitivity")&&(v.orbitSensitivity=this.orbitSensitivity),E.has("interpolationDecay")&&(v.setDamperDecayTime(this.interpolationDecay),_.setTargetDamperDecayTime(this.interpolationDecay)),this[Lr]===!0&&Promise.resolve().then(()=>{v.jumpToGoal(),_.jumpToGoal(),this[Lr]=!1})}async updateFraming(){const E=this[ne],v=E.adjustedFoV(E.framedFoVDeg);await E.updateFraming();const _=E.adjustedFoV(E.framedFoVDeg),x=this[Ve].getFieldOfView()/v;this[Ve].setFieldOfView(_*x),this[Dr]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(E,v,_){const x=this[Si],C=this[gc];if(C[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const b=new Array;b.push({x:Ys(v.x),y:Ys(v.y)});const y=[{x:b[0].x(0),y:b[0].y(0)}];_!=null&&(b.push({x:Ys(_.x),y:Ys(_.y)}),y.push({x:b[1].x(0),y:b[1].y(0)}));let S=performance.now();const{width:T,height:U}=this[ne],Y=P=>{for(const[z,G]of y.entries()){const{style:F}=C[z];F.transform=`translateX(${T*G.x}px) translateY(${U*G.y}px)`,P==="pointerdown"?F.opacity="1":P==="pointerup"&&(F.opacity="0");const D={pointerId:z-5678,pointerType:"touch",target:x,clientX:T*G.x,clientY:U*G.y,altKey:!0};x.dispatchEvent(new PointerEvent(P,D))}},N=()=>{const{changeSource:P}=this[Ve];if(P!==Dt.AUTOMATIC||!x.isConnected){for(const G of this[gc])G.style.opacity="0";Y("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:P}})),document.removeEventListener("visibilitychange",R);return}const z=Math.min(1,(performance.now()-S)/E);for(const[G,F]of y.entries())F.x=b[G].x(z),F.y=b[G].y(z);Y("pointermove"),z<1?requestAnimationFrame(N):(Y("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:P}})),document.removeEventListener("visibilitychange",R))},R=()=>{let P=0;document.visibilityState==="hidden"?P=performance.now()-S:S=performance.now()-P};document.addEventListener("visibilitychange",R),Y("pointerdown"),requestAnimationFrame(N)}[(e=pc,t=Zo,i=gc,n=ga,s=Rr,r=Us,o=ia,l=kn,c=Ve,h=mc,u=Lr,d=vc,A=Dr,Tf)](E){const v=this[ne];v.framedFoVDeg=E[0]*180/Math.PI,this[Ve].setFieldOfView(v.adjustedFoV(v.framedFoVDeg))}[Bf](E){const v=this[Ve];if(this[Dr]){const{theta:_,phi:x}=this.getCameraOrbit();E[0]=_,E[1]=x,this[Dr]=!1}v.changeSource=Dt.NONE,v.setOrbit(E[0],E[1],E[2])}[Lf](E){this[Ve].applyOptions({minimumAzimuthalAngle:E[0],minimumPolarAngle:E[1],minimumRadius:E[2]}),this.jumpCameraToGoal()}[Df](E){this[Ve].applyOptions({maximumAzimuthalAngle:E[0],maximumPolarAngle:E[1],maximumRadius:E[2]}),this[bf](E[2]),this.jumpCameraToGoal()}[Qf](E){this[Ve].applyOptions({minimumFieldOfView:E[0]*180/Math.PI}),this.jumpCameraToGoal()}[Pf](E){const v=this[ne].adjustedFoV(E[0]*180/Math.PI);this[Ve].applyOptions({maximumFieldOfView:v}),this.jumpCameraToGoal()}[Rf](E){const[v,_,x]=E;this[Xe].arRenderer.isPresenting||this[ne].setTarget(v,_,x),this[Ve].changeSource=Dt.NONE,this[Xe].arRenderer.updateTarget()}[Ti](E,v){if(super[Ti](E,v),this[Xe].isPresenting||!this[os]())return;const _=this[Ve],x=this[ne],C=performance.now();if(this[kn]&&this.loaded&&C>this[Hr]+this.interactionPromptThreshold&&(this[kn]=!1,this[Us]=C,this[pc].classList.add("visible")),isFinite(this[Us])&&this.interactionPromptStyle===fc.WIGGLE){const b=(C-this[Us])/aS%1,y=lS(b),S=cS(b);if(this[Zo].style.opacity=`${S}`,y!==this[Rr]){const T=y*x.width*.05,U=(y-this[Rr])*Math.PI/16;this[Zo].style.transform=`translateX(${T}px)`,_.changeSource=Dt.AUTOMATIC,_.adjustOrbit(U,0,0),this[Rr]=y}}_.update(E,v),x.updateTarget(v)&&this[ta]({type:"change",source:_.changeSource})}[ea](){this[kn]=!1,this[pc].classList.remove("visible"),this[Us]=1/0}[bf](E){const v=Math.max(this[ne].boundingSphere.radius,E),_=0,x=2*v;this[Ve].updateNearFar(_,x)}[Mf](){const{theta:E,phi:v}=this[Ve].getCameraSpherical(this[mc]),_=(4+Math.floor((E%SS+wS)/Bg))%4,x=Math.floor(v/CS),C=pS[_],b=gS[x];this[ih](`View from stage ${b}${C}`)}get[Kr](){return super[Kr]+(this.cameraControls?vS:"")}async[oo](E){const v=this[Ve],_=this[ne],x=_.adjustedFoV(_.framedFoVDeg);super[oo](E);const C=_.adjustedFoV(_.framedFoVDeg)/x,b=v.getFieldOfView()*(isFinite(C)?C:1);v.updateAspect(this[ne].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[Ve].setFieldOfView(b),this.jumpCameraToGoal()}[Mn](){super[Mn](),this[vc]?this[Dr]=!0:this[vc]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return g=ta,p=Tr,mt([Ee({type:Boolean,attribute:"camera-controls"})],f.prototype,"cameraControls",void 0),mt([vn({intrinsics:bg,observeEffects:!0,updateHandler:Bf}),Ee({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],f.prototype,"cameraOrbit",void 0),mt([vn({intrinsics:IS,observeEffects:!0,updateHandler:Rf}),Ee({type:String,attribute:"camera-target",hasChanged:()=>!0})],f.prototype,"cameraTarget",void 0),mt([vn({intrinsics:Sf,observeEffects:!0,updateHandler:Tf}),Ee({type:String,attribute:"field-of-view",hasChanged:()=>!0})],f.prototype,"fieldOfView",void 0),mt([vn({intrinsics:ES,updateHandler:Lf}),Ee({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],f.prototype,"minCameraOrbit",void 0),mt([vn({intrinsics:xS,updateHandler:Df}),Ee({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],f.prototype,"maxCameraOrbit",void 0),mt([vn({intrinsics:yS,updateHandler:Qf}),Ee({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],f.prototype,"minFieldOfView",void 0),mt([vn({intrinsics:Sf,updateHandler:Pf}),Ee({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],f.prototype,"maxFieldOfView",void 0),mt([Ee({type:Number,attribute:"interaction-prompt-threshold"})],f.prototype,"interactionPromptThreshold",void 0),mt([Ee({type:String,attribute:"interaction-prompt"})],f.prototype,"interactionPrompt",void 0),mt([Ee({type:String,attribute:"interaction-prompt-style"})],f.prototype,"interactionPromptStyle",void 0),mt([Ee({type:Number,attribute:"orbit-sensitivity"})],f.prototype,"orbitSensitivity",void 0),mt([Ee({type:String,attribute:"touch-action"})],f.prototype,"touchAction",void 0),mt([Ee({type:Boolean,attribute:"disable-zoom"})],f.prototype,"disableZoom",void 0),mt([Ee({type:Boolean,attribute:"disable-pan"})],f.prototype,"disablePan",void 0),mt([Ee({type:Boolean,attribute:"disable-tap"})],f.prototype,"disableTap",void 0),mt([Ee({type:Number,attribute:"interpolation-decay"})],f.prototype,"interpolationDecay",void 0),f};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c=function(a,e,t,i){var n=arguments.length,s=n<3?e:i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const bS=100,BS="https://www.gstatic.com/draco/versioned/decoders/1.4.1/",TS="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",yc={AUTO:"auto",MANUAL:"manual"},Nf={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},Gn=Symbol("defaultProgressBarElement"),Ec=Symbol("posterContainerElement"),Os=Symbol("defaultPosterElement"),Qr=Symbol("shouldDismissPoster"),xc=Symbol("hidePoster"),na=Symbol("modelIsRevealed"),Ic=Symbol("updateProgressBar"),RS=Symbol("ariaLabelCallToAction"),Cc=Symbol("onProgress"),LS=a=>{var e,t,i,n,s,r,o,l;class c extends a{constructor(...u){super(...u),this.poster=null,this.reveal=yc.AUTO,this.loading=Nf.AUTO,this[e]=!1,this[t]=!1,this[i]=this.shadowRoot.querySelector(".slot.poster"),this[n]=this.shadowRoot.querySelector("#default-poster"),this[s]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[r]=this[Os].getAttribute("aria-label"),this[o]=Px(p=>{const f=this[Gn].parentNode;requestAnimationFrame(()=>{this[Gn].style.transform=`scaleX(${p})`,p===0&&(f.removeChild(this[Gn]),f.appendChild(this[Gn])),p===1?this[Gn].classList.add("hide"):this[Gn].classList.remove("hide")})},bS),this[l]=p=>{const f=p.detail.totalProgress;f===1&&(this[Ic].flush(),this.loaded&&(this[Qr]||this.reveal===yc.AUTO)&&this[xc]()),this[Ic](f),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:f}}))};const d=self.ModelViewerElement||{},A=d.dracoDecoderLocation||BS;ft.setDRACODecoderLocation(A);const g=d.ktx2TranscoderLocation||TS;ft.setKTX2TranscoderLocation(g),d.meshoptDecoderLocation&&ft.setMeshoptDecoderLocation(d.meshoptDecoderLocation)}static set dracoDecoderLocation(u){ft.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return ft.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){ft.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return ft.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){ft.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return ft.getMeshoptDecoderLocation()}static mapURLs(u){tn.singleton.loader[Wn].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[xc]():(this[Qr]=!0,this[Js]())}showPoster(){const u=this[Ec];if(u.classList.contains("show"))return;u.classList.add("show"),this[Si].classList.remove("show");const d=this[Os];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const A=this.modelIsVisible;this[na]=!1,this[wa](A)}getDimensions(){return En(this[ne].size)}getBoundingBoxCenter(){return En(this[ne].boundingBox.getCenter(new B))}connectedCallback(){super.connectedCallback(),this.showPoster(),this[rs].addEventListener("progress",this[Cc])}disconnectedCallback(){super.disconnectedCallback(),this[rs].removeEventListener("progress",this[Cc])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Os].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Os].setAttribute("aria-label",this[th]),(u.has("reveal")||u.has("loading"))&&this[Js]()}[(e=na,t=Qr,i=Ec,n=Os,s=Gn,r=RS,o=Ic,l=Cc,nr)](){return!!this.src&&(this[Qr]||this.loading===Nf.EAGER||this.reveal===yc.AUTO&&this[Xn])}[xc](){this[Qr]=!1;const u=this[Ec];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[Si].classList.add("show");const d=this.modelIsVisible;this[na]=!0,this[wa](d);const A=this.getRootNode();A&&A.activeElement===this&&this[Si].focus();const g=this[Os];g.setAttribute("aria-hidden","true"),g.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[os](){return super[os]()&&this[na]}}return _c([Ee({type:String})],c.prototype,"poster",void 0),_c([Ee({type:String})],c.prototype,"reveal",void 0),_c([Ee({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wc=function(a,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,i);else for(var o=a.length-1;o>=0;o--)(r=a[o])&&(s=(n<3?r(s):n>3?r(e,t,s):r(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};const DS=Math.PI/32,QS=3e3,PS={basis:[Da(Mt(DS,"rad"))],keywords:{auto:[null]}},ks=Symbol("autoRotateStartTime"),Sc=Symbol("radiansPerSecond"),Ff=Symbol("syncRotationRate"),Mc=Symbol("onCameraChange"),NS=a=>{var e,t,i;class n extends a{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=QS,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[i]=r=>{this.autoRotate&&r.detail.source==="user-interaction"&&(this[ks]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Mc]),this[ks]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Mc]),this[ks]=performance.now()}updated(r){super.updated(r),r.has("autoRotate")&&(this[ks]=performance.now())}[(e=ks,t=Sc,Ff)](r){this[Sc]=r[0]}[Ti](r,o){if(super[Ti](r,o),!this.autoRotate||!this[os]()||this[Xe].isPresenting)return;const l=Math.min(o,r-this[ks]-this.autoRotateDelay);l>0&&(this[ne].yaw=this.turntableRotation+this[Sc]*l*.001)}get turntableRotation(){return this[ne].yaw}resetTurntableRotation(r=0){this[ne].yaw=r}}return i=Mc,wc([Ee({type:Boolean,attribute:"auto-rotate"})],n.prototype,"autoRotate",void 0),wc([Ee({type:Number,attribute:"auto-rotate-delay"})],n.prototype,"autoRotateDelay",void 0),wc([vn({intrinsics:PS,updateHandler:Ff}),Ee({type:String,attribute:"rotation-per-second"})],n.prototype,"rotationPerSecond",void 0),n},FS=a=>{var e;const t=s=>{if(s.shadowRoot==null||s.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(s.shadowRoot);else{const r=()=>{self.applyFocusVisiblePolyfill(s.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",r,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",r)}}return()=>{}},i=Symbol("endPolyfillCoordination");class n extends a{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[i]==null&&(this[i]=t(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[i]!=null&&(this[i](),this[i]=null)}}return e=i,n};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=vw(KC(NS(Vx(MS(Kw(LS(mw(FS(co)))))))));customElements.define("model-viewer",US);const KS=Qg.forwardRef(function({src:e,alt:t,poster:i,style:n,className:s},r){return Uh.jsx("div",{style:{...n},className:s,ref:r,children:e?Uh.jsx("model-viewer",{src:e,alt:t||"3D Model","camera-controls":!0,poster:i||null,style:{width:"100%",height:"100%"}}):null})});export{KS as default};
