import{ep as y,r as z,j as l,c_ as m,df as S,dh as I,d2 as A,eq as v,dg as B,er as U,es as W,et as C,eu as T,ev as O,ew as P,dd as b,ex as q,ey as D,ez as F,eA as H,eB as M}from"./index-BkwLtTZs.js";function E(e){var i,d,g,u,x,h,f,w,k,j,r;const o=e.size==="compact",{initialScreen:t,screen:n}=y(),[s,a]=z.useState(!1),L=n===e.wallet&&t===e.wallet,c=L&&!e.isLinking?void 0:e.goBack;return l.jsxs(m,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[o&&(L?l.jsxs(l.Fragment,{children:[l.jsx(S,{onBack:c,leftAligned:!e.isLinking,title:l.jsxs(l.Fragment,{children:[(i=e.meta)!=null&&i.titleIconUrl?l.jsx(I,{src:(d=e.meta)==null?void 0:d.titleIconUrl,width:A.md,height:A.md,client:e.client}):null,l.jsx(v,{children:((g=e.meta)==null?void 0:g.title)??e.inAppWalletLocale.emailLoginScreen.title})]})}),l.jsx(B,{y:"lg"})]}):l.jsx(S,{onBack:c,title:e.inAppWalletLocale.signIn})),l.jsx(m,{expand:!0,flex:"column",center:"y",p:o?void 0:"lg",children:l.jsx(U,{...e,locale:e.inAppWalletLocale,disabled:((u=e.meta)==null?void 0:u.requireApproval)&&!s})}),o&&(((x=e.meta)==null?void 0:x.showThirdwebBranding)!==!1||((h=e.meta)==null?void 0:h.termsOfServiceUrl)||((f=e.meta)==null?void 0:f.privacyPolicyUrl))&&l.jsx(B,{y:"xl"}),l.jsxs(m,{flex:"column",gap:"lg",children:[l.jsx(W,{termsOfServiceUrl:(w=e.meta)==null?void 0:w.termsOfServiceUrl,privacyPolicyUrl:(k=e.meta)==null?void 0:k.privacyPolicyUrl,locale:e.connectLocale.agreement,requireApproval:(j=e.meta)==null?void 0:j.requireApproval,onApprove:()=>{a(!s)},isApproved:s}),((r=e.meta)==null?void 0:r.showThirdwebBranding)!==!1&&l.jsx(C,{})]})]})}function K(e){const o=T(),t=O(),n=o,s=e.connectLocale.id,a=P(s),{initialScreen:L}=y();if(!a)return l.jsx(b,{});const c=()=>{var g;L===e.wallet?t({}):((g=e.goBack)==null||g.call(e),t({}))},i=()=>{e.done(),t({})},d=n!=null&&n.emailLogin?{email:n.emailLogin}:n!=null&&n.phoneLogin?{phone:n.phoneLogin}:void 0;return d?l.jsx(q,{userInfo:d,locale:a,done:i,goBack:c,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.passkeyLogin?l.jsx(D,{locale:e.connectLocale,wallet:e.wallet,done:i,onBack:c,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.walletLogin?l.jsx(F,{meta:e.meta,inAppLocale:a,walletConnect:e.walletConnect,wallet:e.wallet,client:e.client,size:e.size,done:i,onBack:c||(()=>t({})),locale:e.connectLocale}):n!=null&&n.socialLogin?l.jsx(H,{socialAuth:n.socialLogin.type,locale:a,done:i,goBack:c,wallet:e.wallet,state:n,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,isLinking:e.isLinking}):n!=null&&n.guestLogin?l.jsx(M,{locale:a,done:i,goBack:c,wallet:e.wallet,state:n,client:e.client,size:e.size,connectLocale:e.connectLocale}):l.jsx(E,{select:()=>{},connectLocale:e.connectLocale,inAppWalletLocale:a,done:i,goBack:e.goBack,wallet:e.wallet,client:e.client,meta:e.meta,size:e.size,chain:e.chain,isLinking:e.isLinking})}export{K as default};
