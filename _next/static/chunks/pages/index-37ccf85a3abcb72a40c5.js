(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{55456:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var t=i(85893),r=i(40980),a=i(50051),s=i(48017),o=i(64593),c=i(64115),l=i(67294),h=function(e){var n=e.publicAddress;return(0,t.jsx)(r.chakra.div,{paddingY:"12rem",children:(0,t.jsxs)(a.gC,{alignItems:"center",w:"100%",children:[(0,t.jsx)(c.x,{color:"nfpGreys.400",fontSize:"3.2rem",mb:"3.2rem",children:"Coming soon"}),(0,t.jsx)(c.x,{color:"nfpGreys.400",fontSize:"1.6rem",mb:"3.2rem",children:"Minting button,seeing current price, your galleries will be shown here."}),(0,t.jsxs)(c.x,{color:"nfpGreys.400",fontSize:"1.6rem",mb:"3.2rem",children:["Your Address: ",n]})]})})},d={greenFilled:{bg:"nfpGreen",border:"nfpGreen",text:"white"},greenFilledWhiteOutlined:{bg:"nfpGreen",border:"rgba(255, 255, 255, 0.5)",text:"white"},greenOutlined:{bg:"white",border:"nfpGreen",text:"nfpGreen"},orangeFilledWhiteOutlined:{bg:"nfpOrange",border:"rgba(255, 255, 255, 0.5)",text:"white"},redFilled:{bg:"nfpRed",border:"rgba(255, 255, 255, 0.5)",text:"white"},whiteTransparent:{bg:"transparent",border:"rgba(255, 255, 255, 0.5)",text:"white"}};function x(e){var n=e.disabled,i=void 0!==n&&n,a=e.icon,s=e.kind,o=void 0===s?"greenFilled":s,c=e.label,l=e.onClick,h=e.style,x=e.type,p=d[o];return(0,t.jsxs)(r.chakra.button,{_disabled:{bg:"nfpGreys.200"},_hover:{boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"},alignItems:"center",backgroundColor:p.bg,border:"1px solid ".concat(p.border),borderRadius:"8px",color:p.text,cursor:"pointer",disabled:i,display:"inline-flex",fontSize:"20px",height:"60px",justifyContent:"center",lineHeight:"60px",style:h,textAlign:"center",type:x,w:"300px",onClick:l,children:[a&&(0,t.jsx)(r.chakra.div,{mr:"5px",children:a}),c]})}var p=function(e){var n=e.requestMetamask,i=(0,r.useToast)();return(0,t.jsx)(r.chakra.div,{paddingY:"12rem",children:(0,t.jsx)(a.gC,{alignItems:"center",w:"100%",children:(0,t.jsx)(x,{kind:"greenFilled",label:"Connect Metamask",onClick:function(){n({onEnabled:function(){i({status:"success",title:"metamask activated"})},onFailed:function(){i({status:"error",title:"metamask activation failed"})}})}})})})},u=i(3283),g=i.n(u);function f(e,n){var i=(0,l.useState)(),t=i[0],r=i[1],a=function(e){var n=(0,l.useState)(!0),i=n[0],t=n[1];return(0,l.useEffect)((function(){e||t(!1)}),[e]),{isMetamaskInstalled:i}}(e).isMetamaskInstalled,s=(0,l.useState)(!1),o=s[0],c=s[1],h=(0,l.useState)(!1),d=h[0],x=h[1],p=(0,l.useState)(),u=p[0],f=p[1];console.log(t),console.log(o);var m=(0,l.useCallback)((function(e){var n=e.onEnabled,i=e.onFailed;if(t)try{window.ethereum.enable().then((function(){c(!0),null===n||void 0===n||n()}))}catch(s){c(!1),null===i||void 0===i||i()}else if(window.ethereum){var a=new(g())(window.ethereum);r(a);try{window.ethereum.enable().then((function(){c(!0),null===n||void 0===n||n()}))}catch(s){c(!1),null===i||void 0===i||i()}}else window.web3?r(new(g())(window.web3.currentProvider)):window.alert("You have to install MetaMask")}),[t,n,e]);return(0,l.useEffect)((function(){var e;t?null===t||void 0===t||null===(e=t.eth)||void 0===e||e.getCoinbase().then((function(e){console.log("coinbase",e),f(e.toLowerCase()),x(!0)})).catch((function(e){console.error(e),console.log("coinbasefail"),f(void 0),x(!1)})):(f(void 0),x(!1))}),[t]),{isMetamaskActivated:d,isMetamaskApproved:o,isMetamaskInstalled:a,publicAddress:u,requestMetamask:m,web3:t}}var m=i(39227),b=i(71768);function k(){var e=(0,b.a)("(max-width: 800px)");return{isSp:(0,m.Z)(e,1)[0]}}function w(){var e=f(window.ethereum,window.web3),n=e.isMetamaskApproved,i=e.publicAddress,c=e.requestMetamask,l=(e.web3,k().isSp);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.q,{children:[(0,t.jsx)("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),(0,t.jsx)("link",{crossOrigin:"crossorigin",href:"https://fonts.gstatic.com",rel:"preconnect"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Monofett&display=swap",rel:"stylesheet"})]}),(0,t.jsx)(r.chakra.section,{bg:"linear-gradient(132deg, rgba(206,109,255,0.2539390756302521) 0%, rgba(255,0,63,0.24273459383753504) 100%)",children:(0,t.jsx)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:(0,t.jsxs)(a.Kq,{alignItems:"center",direction:l?"column":"row",spacing:0,children:[(0,t.jsx)(s.xu,{margin:"30px",children:(0,t.jsx)(r.chakra.img,{alt:"polygon logo",src:"/images/sample.gif",w:"300px"})}),(0,t.jsxs)(r.chakra.h1,{className:"gaming",fontFamily:"Monofett",fontSize:l?"60px":"100px",lineHeight:l?"50px":"80px",padding:"32px",children:["Non ",(0,t.jsx)("br",{}),"Fungible ",(0,t.jsx)("br",{}),"Person ",(0,t.jsx)("br",{}),"NFT"]})]})})}),(0,t.jsx)(r.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,t.jsxs)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,t.jsxs)(r.chakra.h2,{fontSize:"28px",mb:"20px",children:[(0,t.jsx)("i",{children:"Non Fungible Person NFT"})," is"," ",(0,t.jsx)(r.chakra.span,{fontWeight:"bold",children:"Completely On-chain Generative NFT"}),"."]}),(0,t.jsxs)(r.chakra.article,{children:[(0,t.jsx)(r.chakra.p,{fontSize:"16px",mb:"20px",minW:"300px",whiteSpace:"unset",width:"60%",children:"Most of NFTs currently issued are more or less depends on off-chain something. They are generated outside the contracts and their binaries are stored outside the chain (typically, in the conventional Web system). Therefore, the lifetime of such token is much shorter than the lifetime of the blockchain."}),(0,t.jsxs)(r.chakra.p,{fontSize:"16px",mb:"20px",minW:"300px",whiteSpace:"unset",width:"60%",children:["As of ",(0,t.jsx)("i",{children:"Non Fungible Person NFT"}),", tokens are"," ",(0,t.jsx)("b",{children:"generated on the chain"})," and ",(0,t.jsx)("b",{children:"stored in the contract itself"}),". Even metadata is hosted on the chain! This means that"," ",(0,t.jsx)("i",{children:"Non Fungible Person NFT"})," is practically everlasting token ecosystem."]}),(0,t.jsxs)(r.chakra.p,{fontSize:"16px",minW:"300px",whiteSpace:"unset",width:"60%",children:["What is more is that ",(0,t.jsx)("i",{children:"Non Fungible Person NFT"})," is ",(0,t.jsx)("b",{children:"generative"}),". The token images are not adhoc. You mint a token and you get new pattern everytime."]})]})]})}),(0,t.jsx)(r.chakra.div,{bg:"linear-gradient(132deg, rgba(54,255,251,0.2539390756302521) 0%, rgba(0,255,1,0.24273459383753504) 100%)",children:(0,t.jsxs)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:[!n&&(0,t.jsx)(p,{requestMetamask:c}),n&&(0,t.jsx)(h,{publicAddress:i})]})}),(0,t.jsx)(r.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,t.jsxs)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,t.jsx)(r.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Chain"}),(0,t.jsxs)(r.chakra.article,{children:[(0,t.jsx)(r.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"Polygon Chain."}),(0,t.jsx)(s.xu,{my:"30px",children:(0,t.jsx)(r.chakra.img,{alt:"polygon logo",src:"/images/polygon-matic-logo.svg",w:"200px"})})]})]})}),(0,t.jsx)(r.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,t.jsxs)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,t.jsx)(r.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Roadmap"}),(0,t.jsx)(r.chakra.article,{children:(0,t.jsx)(r.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"Will be launched in Sept. 2021."})})]})}),(0,t.jsx)(r.chakra.section,{bg:"#eee",padding:"32px",w:"100%",children:(0,t.jsxs)(r.chakra.div,{margin:"0 auto",maxW:"1400px",children:[(0,t.jsx)(r.chakra.h2,{color:"nfpGreys.400",fontSize:"52px",fontWeight:"bold",mb:"32px",children:"Token Price"}),(0,t.jsxs)(r.chakra.article,{children:[(0,t.jsx)(r.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:"The price of tokens are determined as follows:"}),(0,t.jsx)(s.xu,{my:"30px",children:(0,t.jsx)(r.chakra.img,{alt:"price constraints",src:"/images/prices.png",w:"400px"})}),(0,t.jsxs)(r.chakra.p,{fontSize:"14px",mb:"20px",whiteSpace:"unset",width:"60%",children:["For tokens whose tokenID is less than 200, 1MATIC.",(0,t.jsx)("br",{}),"Next 100 tokens are 5MATIC each.",(0,t.jsx)("br",{}),"After that, the price goes up by 0.2MATIC for each token."]}),(0,t.jsx)(s.xu,{my:"30px",children:(0,t.jsx)(r.chakra.img,{alt:"price chart",src:"/images/chart.svg",width:"600px"})})]})]})})]})}},45301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(55456)}])},88677:function(){},62808:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},6567:function(){},43503:function(){},55896:function(){},87500:function(){}},function(e){e.O(0,[774,673,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);