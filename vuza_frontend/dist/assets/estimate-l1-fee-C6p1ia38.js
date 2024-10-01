import{bn as l,cM as E,cF as P,bG as O,cN as J,br as w,by as z,fb as Q,fc as X,bK as a,fd as I,fe as k,c4 as Z,cc as ee,bM as te}from"./index-wmwbL88i.js";import{s as se,b as A,t as y}from"./sha256-nPk2zwXn.js";const oe={ether:-9,wei:9};function ne(e,t){let s=e.toString();const o=s.startsWith("-");o&&(s=s.slice(1)),s=s.padStart(t,"0");let[n,r]=[s.slice(0,s.length-t),s.slice(s.length-t)];return r=r.replace(/(0+)$/,""),`${o?"-":""}${n||"0"}${r?`.${r}`:""}`}function L(e,t="wei"){return ne(e,oe[t])}function re(e){const t=Object.entries(e).map(([o,n])=>n===void 0||n===!1?null:[o,n]).filter(Boolean),s=t.reduce((o,[n])=>Math.max(o,n.length),0);return t.map(([o,n])=>`  ${`${o}:`.padEnd(s+1)}  ${n}`).join(`
`)}class ie extends l{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",re(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class ae extends l{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}class F extends l{constructor({cause:t,maxFeePerGas:s}={}){super(`The fee cap (\`maxFeePerGas\`${s?` = ${L(s)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t,name:"FeeCapTooHighError"})}}Object.defineProperty(F,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class U extends l{constructor({cause:t,maxPriorityFeePerGas:s,maxFeePerGas:o}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${s?` = ${L(s)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${L(o)} gwei`:""}).`].join(`
`),{cause:t,name:"TipAboveFeeCapError"})}}Object.defineProperty(U,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function _(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),o=typeof e.blobs[0]=="string"?e.blobs.map(r=>E(r)):e.blobs,n=[];for(const r of o)n.push(Uint8Array.from(t.blobToKzgCommitment(r)));return s==="bytes"?n:n.map(r=>P(r))}function R(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),o=typeof e.blobs[0]=="string"?e.blobs.map(i=>E(i)):e.blobs,n=typeof e.commitments[0]=="string"?e.commitments.map(i=>E(i)):e.commitments,r=[];for(let i=0;i<o.length;i++){const c=o[i],f=n[i];r.push(Uint8Array.from(t.computeBlobKzgProof(c,f)))}return s==="bytes"?r:r.map(i=>P(i))}function ce(e){const{commitment:t,version:s=1}=e,o=e.to??(typeof t=="string"?"hex":"bytes"),n=se(t,"bytes");return n.set([s],0),o==="bytes"?n:P(n)}function fe(e){const{commitments:t,version:s}=e,o=e.to??(typeof t[0]=="string"?"hex":"bytes"),n=[];for(const r of t)n.push(ce({commitment:r,to:o,version:s}));return n}const K=6,D=32,B=4096,N=D*B,j=N*K-1-1*B*K,W=1;class de extends l{constructor({maxSize:t,size:s}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${s} bytes`],name:"BlobSizeTooLargeError"})}}class Y extends l{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class le extends l{constructor({hash:t,size:s}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${s}`],name:"InvalidVersionedHashSizeError"})}}class ue extends l{constructor({hash:t,version:s}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${W}`,`Received: ${s}`],name:"InvalidVersionedHashVersionError"})}}function he(e){const t=e.to??(typeof e.data=="string"?"hex":"bytes"),s=typeof e.data=="string"?E(e.data):e.data,o=O(s);if(!o)throw new Y;if(o>j)throw new de({maxSize:j,size:o});const n=[];let r=!0,i=0;for(;r;){const c=J(new Uint8Array(N));let f=0;for(;f<B;){const d=s.slice(i,i+(D-1));if(c.pushByte(0),c.pushBytes(d),d.length<31){c.pushByte(128),r=!1;break}f++,i+=31}n.push(c)}return t==="bytes"?n.map(c=>c.bytes):n.map(c=>P(c.bytes))}function be(e){const{data:t,kzg:s,to:o}=e,n=e.blobs??he({data:t,to:o}),r=e.commitments??_({blobs:n,kzg:s,to:o}),i=e.proofs??R({blobs:n,commitments:r,kzg:s,to:o}),c=[];for(let f=0;f<n.length;f++)c.push({blob:n[f],commitment:r[f],proof:i[f]});return c}function me(e){if(e.type)return e.type;if(typeof e.authorizationList<"u")return"eip7702";if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new ie({transaction:e})}class G extends l{constructor({chainId:t}){super(typeof t=="number"?`Chain ID "${t}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function xe(e){const{authorizationList:t}=e;if(t)for(const s of t){const{contractAddress:o,chainId:n}=s;if(!w(o))throw new z({address:o});if(n<=0)throw new G({chainId:n})}H(e)}function ye(e){const{blobVersionedHashes:t}=e;if(t){if(t.length===0)throw new Y;for(const s of t){const o=O(s),n=Q(X(s,0,1));if(o!==32)throw new le({hash:s,size:o});if(n!==W)throw new ue({hash:s,version:n})}}H(e)}function H(e){const{chainId:t,maxPriorityFeePerGas:s,maxFeePerGas:o,to:n}=e;if(t<=0)throw new G({chainId:t});if(n&&!w(n))throw new z({address:n});if(o&&o>A)throw new F({maxFeePerGas:o});if(s&&o&&s>o)throw new U({maxFeePerGas:o,maxPriorityFeePerGas:s})}function pe(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:o,maxFeePerGas:n,to:r}=e;if(t<=0)throw new G({chainId:t});if(r&&!w(r))throw new z({address:r});if(s||n)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(o&&o>A)throw new F({maxFeePerGas:o})}function ge(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:o,maxFeePerGas:n,to:r}=e;if(r&&!w(r))throw new z({address:r});if(typeof t<"u"&&t<=0)throw new G({chainId:t});if(s||n)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(o&&o>A)throw new F({maxFeePerGas:o})}function Pe(e){if(!e||e.length===0)return[];const t=[];for(const s of e){const{contractAddress:o,chainId:n,nonce:r,...i}=s;t.push([a(n),o,r?a(r):"0x",...T({},i)])}return t}function $(e){if(!e||e.length===0)return[];const t=[];for(let s=0;s<e.length;s++){const{address:o,storageKeys:n}=e[s];for(let r=0;r<n.length;r++)if(n[r].length-2!==64)throw new ae({storageKey:n[r]});if(!w(o,{strict:!1}))throw new z({address:o});t.push([o,n])}return t}function we(e,t){const s=me(e);return s==="eip1559"?ve(e,t):s==="eip2930"?Ee(e,t):s==="eip4844"?Te(e,t):s==="eip7702"?ze(e,t):Ie(e)}function ze(e,t){const{authorizationList:s,chainId:o,gas:n,nonce:r,to:i,value:c,maxFeePerGas:f,maxPriorityFeePerGas:d,accessList:b,data:m}=e;xe(e);const h=$(b),u=Pe(s);return I(["0x04",y([a(o),r?a(r):"0x",d?a(d):"0x",f?a(f):"0x",n?a(n):"0x",i??"0x",c?a(c):"0x",m??"0x",h,u,...T(e,t)])])}function Te(e,t){const{chainId:s,gas:o,nonce:n,to:r,value:i,maxFeePerBlobGas:c,maxFeePerGas:f,maxPriorityFeePerGas:d,accessList:b,data:m}=e;ye(e);let h=e.blobVersionedHashes,u=e.sidecars;if(e.blobs&&(typeof h>"u"||typeof u>"u")){const x=typeof e.blobs[0]=="string"?e.blobs:e.blobs.map(g=>P(g)),v=e.kzg,p=_({blobs:x,kzg:v});if(typeof h>"u"&&(h=fe({commitments:p})),typeof u>"u"){const g=R({blobs:x,commitments:p,kzg:v});u=be({blobs:x,commitments:p,proofs:g})}}const q=$(b),S=[a(s),n?a(n):"0x",d?a(d):"0x",f?a(f):"0x",o?a(o):"0x",r??"0x",i?a(i):"0x",m??"0x",q,c?a(c):"0x",h??[],...T(e,t)],V=[],C=[],M=[];if(u)for(let x=0;x<u.length;x++){const{blob:v,commitment:p,proof:g}=u[x];V.push(v),C.push(p),M.push(g)}return I(["0x03",u?y([S,V,C,M]):y(S)])}function ve(e,t){const{chainId:s,gas:o,nonce:n,to:r,value:i,maxFeePerGas:c,maxPriorityFeePerGas:f,accessList:d,data:b}=e;H(e);const m=$(d),h=[a(s),n?a(n):"0x",f?a(f):"0x",c?a(c):"0x",o?a(o):"0x",r??"0x",i?a(i):"0x",b??"0x",m,...T(e,t)];return I(["0x02",y(h)])}function Ee(e,t){const{chainId:s,gas:o,data:n,nonce:r,to:i,value:c,accessList:f,gasPrice:d}=e;pe(e);const b=$(f),m=[a(s),r?a(r):"0x",d?a(d):"0x",o?a(o):"0x",i??"0x",c?a(c):"0x",n??"0x",b,...T(e,t)];return I(["0x01",y(m)])}function Ie(e,t){const{chainId:s=0,gas:o,data:n,nonce:r,to:i,value:c,gasPrice:f}=e;ge(e);let d=[r?a(r):"0x",f?a(f):"0x",o?a(o):"0x",i??"0x",c?a(c):"0x",n??"0x"];return s>0&&(d=[...d,a(s),"0x","0x"]),y(d)}function T(e,t){const s=t??e,{v:o,yParity:n}=s;if(typeof s.r>"u")return[];if(typeof s.s>"u")return[];if(typeof o>"u"&&typeof n>"u")return[];const r=k(s.r),i=k(s.s);return[typeof n=="number"?n?a(1):"0x":o===0n?"0x":o===1n?a(1):o===27n?"0x":a(1),r==="0x00"?"0x":r,i==="0x00"?"0x":i]}const Fe="0x420000000000000000000000000000000000000F";async function Le(e){const{transaction:t,gasPriceOracleAddress:s}=e,o=Z({client:t.client,address:s||Fe,chain:t.chain}),{gasPrice:n,...r}=await ee({transaction:t}),i=we({...r,type:"eip1559"});return te({contract:o,method:"function getL1Fee(bytes memory _data) view returns (uint256)",params:[i]})}export{Le as estimateL1Fee};
