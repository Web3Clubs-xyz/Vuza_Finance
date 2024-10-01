import{eO as r,eP as a,eQ as i,bJ as o}from"./index-wmwbL88i.js";const c=`Ethereum Signed Message:
`;function u(t,n){const e=typeof t=="string"?r(t):t.raw instanceof Uint8Array?t.raw:a(t.raw),s=r(`${c}${e.length}`);return i(o([s,e]),n)}export{u as hashMessage};
