import{ep as c,ev as i,ew as d,eG as s,j as t,eH as o,dd as u,er as m}from"./index-BkwLtTZs.js";function w(e){const{screen:l}=c(),n=i(),a=d(e.connectLocale.id);return e.size==="wide"||l!==s.main&&e.size==="compact"?t.jsx(o,{walletId:e.wallet.id,selectWallet:()=>{n({}),e.select()},client:e.client,connectLocale:e.connectLocale,recommendedWallets:e.recommendedWallets,isActive:l===e.wallet,badge:void 0}):a?t.jsx(m,{disabled:e.disabled,locale:a,wallet:e.wallet,done:e.done,select:e.select,goBack:e.goBack,chain:e.chain,client:e.client,size:e.size}):t.jsx(u,{height:"195px"})}export{w as default};
