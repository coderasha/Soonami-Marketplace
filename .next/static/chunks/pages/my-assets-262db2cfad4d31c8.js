(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{9579:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-assets",function(){return t(4113)}])},1838:function(e,n,t){"use strict";t.d(n,{k:function(){return r},A:function(){return a}});var r="0x0c3a5563a4aE4c008593eaDeC24125475e3aa37b",a="0x3d63CC6672Ff08479EadC4606EFD22aeDa592C9E"},4113:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5666),a=t.n(r),o=t(5893),c=t(7477),s=t(6076),i=t(5553),u=t(7294),d=t(9669),l=t.n(d),f=t(2484),h=t.n(f),N=t(5675),w=t(1838);function p(e,n,t,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void t(u)}s.done?n(i):Promise.resolve(i).then(r,a)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function c(e){p(o,r,a,c,s,"next",e)}function s(e){p(o,r,a,c,s,"throw",e)}c(void 0)}))}}function x(){var e=(0,u.useState)([]),n=e[0],t=e[1],r=(0,u.useState)("not-loaded"),d=r[0],f=r[1];function p(){return(p=v(a().mark((function e(){var n,r,o,u,d,N,p,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(h()),e.next=3,n.connect();case 3:return r=e.sent,o=new c.Qg(r),u=o.getSigner(),d=new s.CH(w.A,Object(function(){var e=new Error("Cannot find module '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'");throw e.code="MODULE_NOT_FOUND",e}()),u),N=new s.CH(w.k,Object(function(){var e=new Error("Cannot find module '../artifacts/contracts/NFT.sol/NFT.json'");throw e.code="MODULE_NOT_FOUND",e}()),o),e.next=10,d.fetchMyNFTs();case 10:return p=e.sent,e.next=13,Promise.all(p.map(v(a().mark((function e(n){var t,r,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,l().get(t);case 5:return r=e.sent,o=i.bM(n.price.toString(),"ether"),c={price:o,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))));case 13:x=e.sent,t(x),f("loaded");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),"loaded"!==d||n.length?(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)("div",{className:"p-4",children:(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,o.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,o.jsx)(N.default,{src:e.image,alt:"Picture of the author",className:"rounded",width:350,height:500}),(0,o.jsx)("div",{className:"p-4 bg-black",children:(0,o.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," ETH"]})})]},n)}))})})}):(0,o.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No assets owned"})}Object(function(){var e=new Error("Cannot find module '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'");throw e.code="MODULE_NOT_FOUND",e}()),Object(function(){var e=new Error("Cannot find module '../artifacts/contracts/NFT.sol/NFT.json'");throw e.code="MODULE_NOT_FOUND",e}())},6601:function(){}},function(e){e.O(0,[277,334,713,774,888,179],(function(){return n=9579,e(e.s=n);var n}));var n=e.O();_N_E=n}]);