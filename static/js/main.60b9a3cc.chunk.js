(this["webpackJsonpcoincaps-assessment"]=this["webpackJsonpcoincaps-assessment"]||[]).push([[0],{204:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),l=(n(88),n(27)),s=n(3),i=(n(89),n(19)),u=n(20),m=n(23),h=n(21),f={color:"white"},p=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav-links"},c.a.createElement(l.b,{style:f,to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(l.b,{style:f,to:"/Details"},c.a.createElement("li",null,"Details"))))}}]),n}(a.Component),b=n(36),d=n(38),g=n.n(d),v=n(221),E=n(224),y=n(222),C=n(223),O={height:"70px",width:"70px"},k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={cryptoCurrencies:[],numberOfColumns:3,changeColumnsNumber:4},a.changeNumberOfColumns=a.changeNumberOfColumns.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchCurrencies()}},{key:"fetchCurrencies",value:function(){var e=this;g.a.get("https://api.coincap.io/v2/assets").then((function(t){console.log(t),e.setState({cryptoCurrencies:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"changeNumberOfColumns",value:function(){3===this.state.numberOfColumns?this.setState({numberOfColumns:4,changeColumnsNumber:3}):this.setState({numberOfColumns:3,changeColumnsNumber:4})}},{key:"render",value:function(){var e=this.state.cryptoCurrencies,t=this.state.numberOfColumns;return c.a.createElement(c.a.Fragment,null,e.length?c.a.createElement(v.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start"},e.map((function(e){return c.a.createElement(v.a,{item:!0,xs:12,sm:6,md:t,key:e.id},c.a.createElement(E.a,null,c.a.createElement("div",null,"Name : ".concat(e.name)),c.a.createElement("div",null,"Percentage Change : ",c.a.createElement("span",{className:e.changePercent24Hr>0?"green":"red"},e.changePercent24Hr)),c.a.createElement(y.a,null,c.a.createElement("div",null,c.a.createElement("img",{style:O,src:"https://static.coincap.io/assets/icons/".concat(e.symbol.toLowerCase(),"@2x.png"),alt:e.symbol})))))}))):"",c.a.createElement(C.a,{onClick:this.changeNumberOfColumns,variant:"outlined",color:"primary"},"Switch to ",t," col's per row"))}}]),n}(a.Component),j=n(81),w=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={historyData:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchCurrencies()}},{key:"fetchCurrencies",value:function(){var e=this,t=[],n={labels:[],datasets:[{label:"Bitcoin",data:t,fill:!0,backgroundColor:"rgba(75,192,192,0.2)",borderColor:"rgba(75,192,192,1)"}]};g.a.get("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1").then((function(a){console.log(a),a.data.data&&a.data.data.map((function(e){return t.push(e.time/1e8),n.labels.push(e.priceUsd/10)})),e.setState({historyData:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"bitcoin-line-chart"},c.a.createElement(j.Line,{data:this.state.historyData?this.state.historyData:[]}))}}]),n}(a.Component);var N=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:k}),c.a.createElement(s.a,{path:"/Details",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n(204)},88:function(e,t,n){},89:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.60b9a3cc.chunk.js.map