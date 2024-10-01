import{bN as _,c6 as L}from"./index-wmwbL88i.js";const V="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",U=V.length,M=V.charAt(0),z=Math.log(256)/Math.log(U);function F(t){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length===0)return"";let e=0,i=0,n=0;const s=t.length;for(;n!==s&&t[n]===0;)n++,e++;const c=(s-n)*z+1>>>0,a=new Uint8Array(c);for(;n!==s;){let d=t[n]||0,w=0;for(let h=c-1;(d!==0||w<i)&&h!==-1;h--,w++)d+=256*(a[h]||0)>>>0,a[h]=d%U>>>0,d=d/U>>>0;if(d!==0)throw new Error("Non-zero carry");i=w,n++}let l=c-i;for(;l!==c&&a[l]===0;)l++;let u=M.repeat(e);for(;l<c;++l)u+=V.charAt(a[l]||0);return u}let o,E,r=0,j={},b,$;const D=0;let C=0,S,R,I;const N={useRecords:!1,mapsAsObjects:!0};function v(t){let e;if(t<16&&(e=T(t)))return e;if(t>64&&decoder)return decoder.decode(o.subarray(r,r+=t));const i=r+t,n=[];for(e="";r<i;){const s=o[r++];if(!(s&128))n.push(s);else if((s&224)===192){const c=o[r++]&63;n.push((s&31)<<6|c)}else if((s&240)===224){const c=o[r++]&63,a=o[r++]&63;n.push((s&31)<<12|c<<6|a)}else if((s&248)===240){const c=o[r++]&63,a=o[r++]&63,l=o[r++]&63;let u=(s&7)<<18|c<<12|a<<6|l;u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|u&1023),n.push(u)}else n.push(s);n.length>=4096&&(e+=x.apply(String,n),n.length=0)}return n.length>0&&(e+=x.apply(String,n)),e}class O{constructor(){Object.assign(this,N)}decodeKey(e){return e}decode(e,i=-1){E=i>-1?i:e.length,r=0,C=0,$=null,S=null,o=e;try{I=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw o=null,e instanceof Uint8Array?n:new Error(`Source must be a Uint8Array or Buffer but was a ${e&&typeof e=="object"?e.constructor.name:typeof e}`)}return this instanceof O?(j=this,this.sharedValues&&(this.pack?new Array(this.maxPrivatePackedValues||16).concat(this.sharedValues):this.sharedValues),(!b||b.length>0)&&(b=[])):(j=N,(!b||b.length>0)&&(b=[])),H()}}function H(){try{const t=g();if(S){if(r>=S.postBundlePosition){const e=new Error("Unexpected bundle position");throw e.incomplete=!0,e}r=S.postBundlePosition,S=null}if(r===E)b=null,o=null,R&&(R=null);else if(r>E){const e=new Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}else throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw q(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function g(){let t=o[r++];const e=t>>5;if(t=t&31,t>23)switch(t){case 24:t=o[r++];break;default:throw new Error(`Unknown token ${t}`)}switch(e){case 0:return t;case 1:return~t;case 2:return W(t);case 3:if(C>=r)return $.slice(r-D,(r+=t)-D);if(C===0&&E<140&&t<32){const i=t<16?T(t):K(t);if(i!==null)return i}return v(t);case 4:{const i=new Array(t);for(let n=0;n<t;n++)i[n]=g();return i}case 5:{const i={};for(let n=0;n<t;n++)i[J(g())]=g();return i}default:if(Number.isNaN(t)){const i=new Error("Unexpected end of CBOR data");throw i.incomplete=!0,i}throw new Error(`Unknown CBOR token ${t}`)}}function J(t){if(typeof t=="string")return t==="__proto__"?"__proto_":t;if(typeof t!="object")return t.toString();throw new Error(`Invalid property name type ${typeof t}`)}const x=String.fromCharCode;function K(t){const e=r,i=new Array(t);for(let n=0;n<t;n++){const s=o[r++];if((s&128)>0){r=e;return}i[n]=s}return x.apply(String,i)}function T(t){if(t<4){if(t<2){if(t===0)return"";const k=o[r++];if((k&128)>1){r-=1;return}return x(k)}const f=o[r++],p=o[r++];if((f&128)>0||(p&128)>0){r-=2;return}if(t<3)return x(f,p);const y=o[r++];if((y&128)>0){r-=3;return}return x(f,p,y)}const e=o[r++],i=o[r++],n=o[r++],s=o[r++];if((e&128)>0||(i&128)>0||(n&128)>0||(s&128)>0){r-=4;return}if(t<6){if(t===4)return x(e,i,n,s);const f=o[r++];if((f&128)>0){r-=5;return}return x(e,i,n,s,f)}if(t<8){const f=o[r++],p=o[r++];if((f&128)>0||(p&128)>0){r-=6;return}if(t<7)return x(e,i,n,s,f,p);const y=o[r++];if((y&128)>0){r-=7;return}return x(e,i,n,s,f,p,y)}const c=o[r++],a=o[r++],l=o[r++],u=o[r++];if((c&128)>0||(a&128)>0||(l&128)>0||(u&128)>0){r-=8;return}if(t<10){if(t===8)return x(e,i,n,s,c,a,l,u);const f=o[r++];if((f&128)>0){r-=9;return}return x(e,i,n,s,c,a,l,u,f)}if(t<12){const f=o[r++],p=o[r++];if((f&128)>0||(p&128)>0){r-=10;return}if(t<11)return x(e,i,n,s,c,a,l,u,f,p);const y=o[r++];if((y&128)>0){r-=11;return}return x(e,i,n,s,c,a,l,u,f,p,y)}const d=o[r++],w=o[r++],h=o[r++],m=o[r++];if((d&128)>0||(w&128)>0||(h&128)>0||(m&128)>0){r-=12;return}if(t<14){if(t===12)return x(e,i,n,s,c,a,l,u,d,w,h,m);const f=o[r++];if((f&128)>0){r-=13;return}return x(e,i,n,s,c,a,l,u,d,w,h,m,f)}const A=o[r++],B=o[r++];if((A&128)>0||(B&128)>0){r-=14;return}if(t<15)return x(e,i,n,s,c,a,l,u,d,w,h,m,A,B);const P=o[r++];if((P&128)>0){r-=15;return}return x(e,i,n,s,c,a,l,u,d,w,h,m,A,B,P)}function W(t){return j.copyBuffers?Uint8Array.prototype.slice.call(o,r,r+=t):o.subarray(r,r+=t)}function q(){o=null,R=null,b=null}const G=new Array(147);for(let t=0;t<256;t++)G[t]=+`1e${Math.floor(45.15-t*.30103)}`;const Q=new O,X=Q.decode;function Y(t){return _(t,{strict:!1})?t:`0x${t}`}function tt(t){const e=L(Y(t)),i=e[e.length-2]*256+e[e.length-1],n=e.length-2-i;if(n<0||n>e.length)return;const s=e.slice(n,-2),c=X(s);if("ipfs"in c)return`ipfs://${F(c.ipfs)}`}export{tt as extractIPFSUri};
