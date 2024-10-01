const __vite__fileDeps=["assets/biconomy-BxwnHGLW.js","assets/index-wmwbL88i.js","assets/index-C45Ffc9u.css","assets/openzeppelin-Bq7gp7OQ.js","assets/engine-BjsMSn6j.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c9 as a,eJ as d}from"./index-wmwbL88i.js";async function _({account:n,transaction:t,serializableTransaction:e,gasless:r}){if(e.value&&e.value>0n)throw new Error("Gasless transactions cannot have a value");let o;if(r.provider==="biconomy"){const{relayBiconomyTransaction:i}=await a(()=>import("./biconomy-BxwnHGLW.js"),__vite__mapDeps([0,1,2]));o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:i}=await a(()=>import("./openzeppelin-Bq7gp7OQ.js"),__vite__mapDeps([3,1,2]));o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:i}=await a(()=>import("./engine-BjsMSn6j.js"),__vite__mapDeps([4,1,2]));o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(!o)throw new Error("Unsupported gasless provider");return d({address:n.address,transactionHash:o.transactionHash,chainId:t.chain.id}),o}export{_ as sendGaslessTransaction};
