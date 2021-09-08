(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{33547:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var a,r,i=t(85893),s=t(40980),o=t(50051),c=t(48017),u=t(67294),l=t(64593),d=t(809),p=t.n(d),h=t(92447),f=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalTip","type":"uint256"}],"name":"tipped","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenPurchased","type":"event"},{"inputs":[],"name":"amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTipTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"generateVec","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"to_","type":"address"}],"name":"mintReservedNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tip","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');(r=a||(a={})).ContractAddress="0x5b474962E24D5948410741a1689d0D36e938b2B7",r.ChainType="polygon",r.ChainSettings={polygon:{blockExplorerUrls:["https://polygonscan.com/"],chainId:"0x89",chainName:"Polygon",nativeCurrency:{decimals:18,name:"MATIC",symbol:"MATIC"},openSeaUrlBase:"https://opensea.io/assets/matic/",rpcUrls:["https://rpc-mainnet.matic.network"]},rinkeby:{chainId:"0x4",openSeaUrlBase:"https://testnets.opensea.io/assets/"}};var y=t(64115),m=function(e){var n=e.text;return(0,i.jsx)(s.chakra.div,{borderBottom:"1px solid inherit",color:"#00be89",fontSize:"6rem",fontWeight:700,mb:"1.6rem",textAlign:"center",children:n})},b={greenFilled:{bg:"nfpGreen",border:"nfpGreen",text:"white"},greenFilledWhiteOutlined:{bg:"nfpGreen",border:"rgba(255, 255, 255, 0.5)",text:"white"},greenOutlined:{bg:"white",border:"nfpGreen",text:"nfpGreen"},orangeFilledWhiteOutlined:{bg:"nfpOrange",border:"rgba(255, 255, 255, 0.5)",text:"white"},redFilled:{bg:"nfpRed",border:"rgba(255, 255, 255, 0.5)",text:"white"},whiteTransparent:{bg:"transparent",border:"rgba(255, 255, 255, 0.5)",text:"white"}};function x(e){var n=e.disabled,t=void 0!==n&&n,a=e.icon,r=e.kind,o=void 0===r?"greenFilled":r,c=e.label,u=e.onClick,l=e.style,d=e.type,p=b[o];return(0,i.jsxs)(s.chakra.button,{_active:{bg:"nfpGreys.400"},_disabled:{bg:"nfpGreys.200"},_hover:{boxShadow:"rgba(17, 17, 26, 0.3) 0px 1px 0px, rgba(17, 17, 26, 0.3) 0px 0px 8px"},alignItems:"center",backgroundColor:p.bg,border:"1px solid ".concat(p.border),borderRadius:"8px",color:p.text,cursor:"pointer",disabled:t,display:"inline-flex",fontSize:"20px",height:"60px",justifyContent:"center",lineHeight:"60px",style:l,textAlign:"center",type:d,w:"300px",onClick:u,children:[a&&(0,i.jsx)(s.chakra.div,{mr:"5px",children:a}),c]})}var v=t(59999);function g(e){var n=e.contract,t=e.publicAddress,a=e.web3;return{call:(0,u.useCallback)((function(e){n.methods.balanceOf(t).call({from:t}).then((function(n){var t;console.log(n),null===(t=e.onSuccess)||void 0===t||t.call(e,n)})).catch((function(n){var t;console.error(n),null===(t=e.onError)||void 0===t||t.call(e)}))}),[n,t,a])}}var k=function(e,n){return{payload:{tokenId:e,vec:n},type:"onTokenAdded"}},w=function(e,n){return{payload:{svg:n,tokenId:e},type:"onOtherTokenFetched"}},T=function(e){return{payload:{balance:e},type:"onChangeBalance"}},j=function(e){return{payload:{tip:e},type:"onChangeTotalTip"}},S=function(e){var n=e.contract,t=e.dispatch,r=e.publicAddress,o=e.state,c=g({contract:n,publicAddress:r,web3:e.web3}).call;return(0,u.useEffect)((function(){c({onSuccess:function(e){t(T(Number(e))),console.log(e)}})}),[r]),(0,i.jsx)(i.Fragment,{children:0!==o.tokens.length&&(0,i.jsxs)(s.chakra.div,{mb:"6.4rem",children:[(0,i.jsx)(m,{text:"Your Collections"}),(0,i.jsx)(s.chakra.div,{display:"flex",flexWrap:"wrap",justifyContent:"center",w:"100%",children:(0,v.Z)(o.tokens).reverse().map((function(e){return(0,i.jsx)(s.chakra.a,{href:"".concat(a.ChainSettings[a.ChainType].openSeaUrlBase).concat(a.ContractAddress,"/").concat(e.tokenId),target:"_blank",children:(0,i.jsx)(s.chakra.div,{dangerouslySetInnerHTML:{__html:e.svg},h:"200px",mb:"20px",mr:"20px",w:"200px"})},e.tokenId)}))})]})})};function I(e){var n=e.contract,t=e.publicAddress,a=e.web3;return{call:(0,u.useCallback)((function(e){n.methods.generateVec(e.tokenId).call({from:t}).then((function(n){var t;console.log(n),null===(t=e.onSuccess)||void 0===t||t.call(e,n)})).catch((function(n){var t;console.error(n),null===(t=e.onError)||void 0===t||t.call(e)}))}),[n,t,a])}}var C=function(e){var n=e.contract,t=e.dispatch,r=e.publicAddress,o=e.state,c=I({contract:n,publicAddress:r,web3:e.web3}).call;return(0,u.useEffect)((function(){Array.from({length:24}).forEach((function(e,n){var a=o.latestTokenId-n;a<30||c({onSuccess:function(e){t(w(a,e))},tokenId:a})}))}),[r]),(0,i.jsx)(i.Fragment,{children:0!==o.otherTokens.length&&(0,i.jsxs)(s.chakra.div,{mb:"6.4rem",children:[(0,i.jsx)(m,{text:"Gallery"}),(0,i.jsx)(s.chakra.div,{display:"flex",flexWrap:"wrap",justifyContent:"center",w:"100%",children:(0,v.Z)(o.otherTokens).reverse().map((function(e){return(0,i.jsx)(s.chakra.a,{href:"".concat(a.ChainSettings[a.ChainType].openSeaUrlBase).concat(a.ContractAddress,"/").concat(e.tokenId),target:"_blank",children:(0,i.jsx)(s.chakra.div,{dangerouslySetInnerHTML:{__html:e.svg},h:"150px",mb:"20px",mr:"20px",w:"150px"})},e.tokenId)}))})]})})};var A=function(e){var n=e.contract,t=e.dispatch,a=e.publicAddress,r=e.state,c=e.web3,l=function(e){var n=e.contract,t=e.publicAddress,a=e.web3;return{call:(0,u.useCallback)((function(e){n.methods.mint().send({from:t,value:String(e.value)}).catch((function(n){var t;console.error(n),null===(t=e.onError)||void 0===t||t.call(e)}))}),[n,t,a])}}({contract:n,publicAddress:a,web3:c}).call;return(0,i.jsxs)(s.chakra.div,{mb:"6.4rem",children:[(0,i.jsx)(m,{text:"Mint NFT"}),(0,i.jsx)(y.x,{color:"nfpGreys.400",fontSize:"2rem",lineHeight:"4rem",mb:"1.6rem",textAlign:"center",children:"Now Mintable!"}),(0,i.jsx)(o.Ug,{justifyContent:"center",mb:"1rem",children:(0,i.jsx)(x,{label:"Mint",onClick:function(){l({value:r.currentPrice})}})}),r.latestTokenId&&(0,i.jsxs)(y.x,{color:"nfpGreys.400",fontSize:"1.6rem",mb:"1rem",textAlign:"center",children:["latestTokenId: ",r.latestTokenId]}),(0,i.jsxs)(y.x,{color:"nfpGreys.400",fontSize:"1.6rem",mb:"3.2rem",textAlign:"center",children:["Your Address: ",a]}),(0,i.jsx)(S,{contract:n,dispatch:t,publicAddress:a,state:r,web3:c}),r.latestTokenId&&(0,i.jsx)(C,{contract:n,dispatch:t,publicAddress:a,state:r,web3:c})]})},M=function(e){var n=e.publicAddress;return(0,i.jsxs)(o.gC,{children:[(0,i.jsxs)(y.x,{color:"nfpGreys.400",fontSize:"3.2rem",lineHeight:"4rem",mb:"3.2rem",textAlign:"center",children:["Currently not mintable.",(0,i.jsx)("br",{}),"Wait for a while."]}),(0,i.jsxs)(y.x,{color:"nfpGreys.400",fontSize:"1.6rem",mb:"3.2rem",textAlign:"center",children:["Your Address: ",n]})]})};function O(e){return F.apply(this,arguments)}function F(){return(F=(0,h.Z)(p().mark((function e(n){var t,a,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.contract,a=n.publicAddress,r=n.value,e.abrupt("return",t.methods.tip().send({from:a,value:String(r)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,h.Z)(p().mark((function e(n){var t,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.contract,a=n.publicAddress,e.abrupt("return",t.methods.currentTipTotal().call({from:a}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){var n=e.contract,t=e.dispatch,a=e.publicAddress,r=e.state,c=(0,u.useRef)(null),l=(0,s.useToast)();(0,u.useEffect)((function(){(function(e){return E.apply(this,arguments)})({contract:n,publicAddress:a}).then((function(e){t(j(e))})),n.events.tipped({}).on("data",function(){var e=(0,h.Z)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(j(n.returnValues.totalTip));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]);var d=(0,u.useCallback)(function(){var e=(0,h.Z)(p().mark((function e(t){var r,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i=1e18*Number(null===(r=c.current)||void 0===r?void 0:r.value),e.next=4,O({contract:n,publicAddress:a,value:i});case 4:l({status:"success",title:"Thank you!"});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,i.jsxs)(s.chakra.div,{children:[(0,i.jsx)(m,{text:"Tip to Developer"}),(0,i.jsxs)(s.chakra.div,{children:[(0,i.jsx)("form",{onSubmit:d,children:(0,i.jsxs)(o.Ug,{alignItems:"center",justifyContent:"center",spacing:"3.2rem",children:[(0,i.jsxs)(o.Ug,{alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(s.chakra.input,{ref:c,_placeholder:{color:"#ccc",fontSize:"2xl"},border:"1px solid #bdbdbd",borderRadius:"5px",boxSizing:"border-box",defaultValue:1,fontSize:"2xl",height:"53px",min:0,padding:"0 16px",placeholder:"Tip amount",required:!0,type:"number",w:"100%"}),(0,i.jsx)(s.chakra.span,{fontSize:"2xl",children:"MATIC"})]}),(0,i.jsx)(x,{kind:"orangeFilledWhiteOutlined",label:"Send Tip to Dev",type:"submit"})]})}),(0,i.jsxs)(y.x,{fontSize:"1.6rem",mt:"2rem",textAlign:"center",children:["Accumulated Chip Amount: ",(r.totalTip/1e18).toFixed(1)," ","MATIC"]})]})]})};var P=t(26265);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,P.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n){var t=function(n){return N(N({},e),n)};switch(n.type){case"onTokenAdded":return t({tokens:[].concat((0,v.Z)(e.tokens),[{svg:n.payload.vec,tokenId:n.payload.tokenId}])});case"onTokenFetched":return t({tokens:e.tokens.map((function(e){return e.tokenId===n.payload.tokenId?N(N({},e),{},{svg:n.payload.svg}):e}))});case"onOtherTokenFetched":return t({otherTokens:[].concat((0,v.Z)(e.otherTokens.slice(-23)),[{svg:n.payload.svg,tokenId:n.payload.tokenId}])});case"onChangeBalance":return t({balance:n.payload.balance});case"onChangeCurrentPrice":return t({currentPrice:n.payload.price});case"onChangeLatestTokenId":return t({latestTokenId:n.payload.tokenId});case"onChangeTotalTip":return t({totalTip:n.payload.tip});case"onChangeTipForm":return t({tipForm:n.payload.tip})}}var G={balance:0,currentPrice:0,latestTokenId:0,mintedTokensCount:0,otherTokens:[],tipForm:0,tokens:[],totalTip:0},q=function(e){var n=e.publicAddress,t=e.web3,r=(0,u.useReducer)(W,G),o=r[0],c=r[1],l=new t.eth.Contract(f,a.ContractAddress),d=function(e){var n=e.contract,t=e.publicAddress,a=e.web3;return{call:(0,u.useCallback)((function(e){n.methods.currentPrice().call({from:t}).then((function(n){var t;console.log(n),null===(t=e.onSuccess)||void 0===t||t.call(e,n)})).catch((function(n){var t;console.error(n),null===(t=e.onError)||void 0===t||t.call(e)}))}),[n,t,a])}}({contract:l,publicAddress:n,web3:t}).call,y=function(e){var n=e.contract,t=e.publicAddress,a=e.web3;return{call:(0,u.useCallback)((function(e){n.methods.getLatestTokenId().call({from:t}).then((function(n){var t;console.log(n),null===(t=e.onSuccess)||void 0===t||t.call(e,n)})).catch((function(n){var t;console.error(n),null===(t=e.onError)||void 0===t||t.call(e)}))}),[n,t,a])}}({contract:l,publicAddress:n,web3:t}).call,m=g({contract:l,publicAddress:n,web3:t}).call,b=function(e){var n=e.contract,t=e.publicAddress,a=e.web3,r=(0,u.useState)(!1),i=r[0],s=r[1];return(0,u.useEffect)((function(){n.methods.isMintable().call({from:t}).then((function(e){s(e)})).catch((function(e){console.error(e)}))}),[n,a,t]),{isMintable:i}}({contract:l,publicAddress:n,web3:t}).isMintable,x=function(e){var n=e.contract,t=e.publicAddress,a=e.web3,r=I({contract:n,publicAddress:t,web3:a}).call;return{call:(0,u.useCallback)((function(e){n.methods.tokenByIndex(e.index).call({from:t}).then((function(n){console.log(n),r({onSuccess:function(t){e.onSuccess(t,n)},tokenId:n})})).catch((function(e){console.error(e)}))}),[n,a,t])}}({contract:l,publicAddress:n,web3:t}).call,v=I({contract:l,publicAddress:n,web3:t}).call,j=(0,s.useToast)(),S=(0,u.useCallback)((function(){d({onSuccess:function(e){c(function(e){return{payload:{price:e},type:"onChangeCurrentPrice"}}(e))}}),y({onSuccess:function(e){c({payload:{tokenId:e},type:"onChangeLatestTokenId"})}})}),[d,y]);return(0,u.useEffect)((function(){S(),m({onSuccess:function(e){c(T(e)),Array.from({length:e}).forEach((function(e,n){return x({index:n,onSuccess:function(e,n){c(k(n,e))}})}))}}),l.events.tokenPurchased({}).on("data",function(){var e=(0,h.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(),t.returnValues.buyer.toLowerCase()===n.toLowerCase()?(j({status:"success",title:"Token ID ".concat(t.returnValues.tokenId," Minted!")}),v({onSuccess:function(e){c(k(t.returnValues.tokenId,e))},tokenId:t.returnValues.tokenId})):v({onSuccess:function(e){c(w(t.returnValues.tokenId,e))},tokenId:t.returnValues.tokenId});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),(0,i.jsxs)(s.chakra.div,{paddingY:"12rem",children:[b?(0,i.jsx)(A,{contract:l,dispatch:c,publicAddress:n,state:o,web3:t}):(0,i.jsx)(M,{contract:l,publicAddress:n,web3:t}),(0,i.jsx)(_,{contract:l,dispatch:c,publicAddress:n,state:o,web3:t})]})},Z=function(e){var n=e.requestMetamask,t=(0,s.useToast)();return(0,i.jsx)(s.chakra.div,{paddingY:"12rem",children:(0,i.jsx)(o.gC,{alignItems:"center",w:"100%",children:(0,i.jsx)(x,{kind:"greenFilled",label:"Connect Metamask",onClick:function(){n({onEnabled:function(){t({status:"success",title:"metamask activated"})},onFailed:function(){t({status:"error",title:"metamask activation failed"})}})}})})})};var B=t(3283),D=t.n(B);function V(e,n){var t=(0,u.useState)(),a=t[0],r=t[1],i=function(e){var n=(0,u.useState)(!0),t=n[0],a=n[1];return(0,u.useEffect)((function(){e||a(!1)}),[e]),{isMetamaskInstalled:t}}(e).isMetamaskInstalled,s=(0,u.useState)(!1),o=s[0],c=s[1],l=(0,u.useState)(!1),d=l[0],p=l[1],h=(0,u.useState)(),f=h[0],y=h[1],m=(0,u.useCallback)((function(e){var n=e.onEnabled,t=e.onFailed;if(a)try{window.ethereum.enable().then((function(){c(!0),null===n||void 0===n||n()}))}catch(s){c(!1),null===t||void 0===t||t()}else if(window.ethereum){var i=new(D())(window.ethereum);r(i);try{window.ethereum.enable().then((function(){c(!0),null===n||void 0===n||n()}))}catch(s){c(!1),null===t||void 0===t||t()}}else window.web3?r(new(D())(window.web3.currentProvider)):window.alert("You have to install MetaMask")}),[a,n,e]);return(0,u.useEffect)((function(){var e;a?null===a||void 0===a||null===(e=a.eth)||void 0===e||e.getCoinbase().then((function(e){y(e.toLowerCase()),p(!0)})).catch((function(e){console.error(e),y(void 0),p(!1)})):(y(void 0),p(!1))}),[a]),{isMetamaskActivated:d,isMetamaskApproved:o,isMetamaskInstalled:i,publicAddress:f,requestMetamask:m,web3:a}}var L=t(64121),U=t(71768);function R(){var e=(0,U.a)("(max-width: 800px)");return{isSp:(0,L.Z)(e,1)[0]}}function Y(){var e,n,t,r=V(window.ethereum,window.web3),d=r.isMetamaskApproved,f=r.publicAddress,y=r.requestMetamask,m=r.web3,b=R().isSp,x={request:(0,u.useCallback)(function(){var e=(0,h.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=10;break}return e.prev=1,e.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:a.ChainSettings[a.ChainType].chainId}]});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),null===(t=n.onError)||void 0===t||t.call(n);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),[window.ethereum])}.request,v={request:(0,u.useCallback)((function(e){if(window.ethereum)try{window.ethereum.request({method:"wallet_addEthereumChain",params:[a.ChainSettings[a.ChainType]]})}catch(t){var n;null===(n=e.onError)||void 0===n||n.call(e)}}),[window.ethereum])}.request;return(0,u.useEffect)((function(){x({onError:function(){v({})}})}),[null===(e=window)||void 0===e||null===(n=e.ethereum)||void 0===n?void 0:n.chainId]),(0,u.useEffect)((function(){y({})}),[]),null===(t=window.ethereum)||void 0===t||t.on("accountsChanged",(function(){y({})})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.q,{children:[(0,i.jsx)("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),(0,i.jsx)("link",{crossOrigin:"crossorigin",href:"https://fonts.gstatic.com",rel:"preconnect"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Monofett&display=swap",rel:"stylesheet"})]}),(0,i.jsx)(s.chakra.section,{bg:"linear-gradient(132deg, rgba(206,109,255,0.2539390756302521) 0%, rgba(255,0,63,0.24273459383753504) 100%)",children:(0,i.jsx)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:(0,i.jsxs)(o.Kq,{alignItems:"center",direction:b?"column":"row",spacing:0,children:[(0,i.jsx)(c.xu,{margin:"30px",children:(0,i.jsx)(s.chakra.img,{alt:"polygon logo",src:"/images/sample.gif",w:"300px"})}),(0,i.jsxs)(s.chakra.h1,{className:"gaming",fontFamily:"Monofett",fontSize:b?"60px":"100px",lineHeight:b?"50px":"80px",padding:"32px",children:["Non ",(0,i.jsx)("br",{}),"Fungible ",(0,i.jsx)("br",{}),"Person ",(0,i.jsx)("br",{}),"NFT"]})]})})}),(0,i.jsx)(s.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,i.jsxs)(s.chakra.h2,{fontSize:"28px",mb:"20px",children:[(0,i.jsx)("i",{children:"Non Fungible Person NFT"})," is"," ",(0,i.jsx)(s.chakra.span,{fontWeight:"bold",children:"Completely On-chain Generative NFT"}),"."]}),(0,i.jsxs)(s.chakra.article,{children:[(0,i.jsx)(s.chakra.p,{fontSize:"16px",mb:"20px",minW:"300px",whiteSpace:"unset",width:"60%",children:"Most of NFTs currently issued are more or less depends on off-chain something. They are generated outside the contracts and their binaries are stored outside the chain (typically, in the conventional Web system). Therefore, the lifetime of such token is much shorter than the lifetime of the blockchain."}),(0,i.jsxs)(s.chakra.p,{fontSize:"16px",mb:"20px",minW:"300px",whiteSpace:"unset",width:"60%",children:["As of ",(0,i.jsx)("i",{children:"Non Fungible Person NFT"}),", tokens are"," ",(0,i.jsx)("b",{children:"generated on the chain"})," and ",(0,i.jsx)("b",{children:"stored in the contract itself"}),". Even metadata is hosted on the chain! This means that"," ",(0,i.jsx)("i",{children:"Non Fungible Person NFT"})," is practically everlasting token ecosystem."]}),(0,i.jsxs)(s.chakra.p,{fontSize:"16px",minW:"300px",whiteSpace:"unset",width:"60%",children:["What is more is that ",(0,i.jsx)("i",{children:"Non Fungible Person NFT"})," is ",(0,i.jsx)("b",{children:"generative"}),". The token images are not adhoc. You mint a token and you get new pattern everytime."]})]})]})}),(0,i.jsx)(s.chakra.div,{bg:"linear-gradient(132deg, rgba(54,255,251,0.2539390756302521) 0%, rgba(0,255,1,0.24273459383753504) 100%)",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[!d&&(0,i.jsx)(Z,{requestMetamask:y}),d&&m&&f&&(0,i.jsx)(q,{publicAddress:f,web3:m})]})}),(0,i.jsx)(s.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,i.jsx)(s.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Chain"}),(0,i.jsxs)(s.chakra.article,{children:[(0,i.jsx)(s.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"Polygon Chain."}),(0,i.jsx)(c.xu,{my:"30px",children:(0,i.jsx)(s.chakra.img,{alt:"polygon logo",src:"/images/polygon-matic-logo.svg",w:"200px"})})]})]})}),(0,i.jsx)(s.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,i.jsx)(s.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"OpenSea"}),(0,i.jsx)(s.chakra.article,{children:(0,i.jsx)(s.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:(0,i.jsx)(s.chakra.a,{color:"blue",fontSize:"2rem",href:"https://opensea.io/collection/non-fungible-person",target:"_blank",textDecoration:"underline",children:"View on OpenSea"})})})]})}),(0,i.jsx)(s.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,i.jsx)(s.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Roadmap"}),(0,i.jsx)(s.chakra.article,{children:(0,i.jsx)(s.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"Launched on 9th Sept. 2021."})})]})}),(0,i.jsx)(s.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,i.jsxs)(s.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,i.jsx)(s.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Token Price"}),(0,i.jsx)(s.chakra.article,{children:(0,i.jsx)(s.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"Free. You can tip."})})]})})]})}},45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(33547)}])},88677:function(){},62808:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},6567:function(){},43503:function(){},55896:function(){},87500:function(){}},function(e){e.O(0,[774,871,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);