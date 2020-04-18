(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/AgletLogoOutline.d1e90b88.png"},47:function(e,t,n){e.exports=n(66)},53:function(e,t,n){},54:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(31),l=n.n(i),c=n(45),o=n(5),s=n(11),u=n.n(s),m=n(17),p=n(19),d=n(20),h=n(22),f=n(21),E=n(77),b=n(23),v=n(14),w=n.n(v);function k(){var e=Object(b.a)(["\n  mutation($id: ID!) {\n    deleteSneaker(id:$id)\n  }\n"]);return k=function(){return e},e}function g(){var e=Object(b.a)(["\n  mutation($id: ID!, $ownership: Boolean!) {\n    updateOwnership(id: $id, ownership: $ownership)\n  }\n"]);return g=function(){return e},e}function N(){var e=Object(b.a)(["\n  mutation($id: ID!, $name: String, $ranking: Int, $price: Float, $colorway: String, $ownership: Boolean) {\n    updateSneaker(id: $id, name: $name, ranking: $ranking, price: $price, colorway: $colorway, ownership: $ownership)\n  }\n"]);return N=function(){return e},e}function y(){var e=Object(b.a)(["\n  query {\n    getList{\n      id\n      name\n      ranking\n      price\n      colorway\n      ownership\n    }\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(b.a)(["\n  mutation($name: String!, $ranking: Int!, $price: Float!, $colorway: String!, $ownership: Boolean!) {\n    createSneaker(name: $name, ranking: $ranking, price: $price, colorway: $colorway, ownership: $ownership){\n      name\n      ranking\n      price\n      colorway\n      ownership\n    }\n  }\n"]);return O=function(){return e},e}var C=w()(O()),$=w()(y()),S=w()(N()),j=w()(g()),P=w()(k()),x=(n(53),n(32)),I=n.n(x);var A=function(){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("img",{src:I.a,alt:"Aglet Logo",className:"header-image"}),r.a.createElement("h2",{className:"header-title"},"Your Sneaker Wishlist"),r.a.createElement("div",{className:"under-bar"}))},B=(n(54),n(39)),F=n.n(B),q=n(33),L=n.n(q),Q=n(37),R=n.n(Q),W=n(38),D=n.n(W),J=n(34),U=n.n(J),M=n(35),V=n.n(M),Y=n(36),z=n.n(Y),G=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={edit:!0,itemName:e.props.sneaker.name,itemRank:e.props.sneaker.ranking,itemPrice:e.props.sneaker.price,itemColor:e.props.sneaker.colorway,itemOwnership:e.props.sneaker.ownership},e.updateSneaker=function(){var t=Object(m.a)(u.a.mark((function t(n,a,r,i,l,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.edit){t.next=8;break}if(""===a&&(a=e.props.sneaker.name),!isNaN(i)){t.next=5;break}return alert("Please Update With a Floating Point Number"),t.abrupt("return");case 5:return""===l&&(l=e.props.sneaker.colorway),t.next=8,e.props.updateSneaker({variables:{id:n,name:a,ranking:r,price:i,colorway:l,ownership:c},refetchQueries:[{query:$}]});case 8:case"end":return t.stop()}}),t)})));return function(e,n,a,r,i,l){return t.apply(this,arguments)}}(),e.toggleButton=function(){e.setState((function(e){return{edit:!e.edit}})),e.updateSneaker(e.props.sneaker.id,e.state.itemName,e.state.itemRank,parseFloat(e.state.itemPrice),e.state.itemColor,e.state.itemOwnership)},e.getEditIcon=function(){return e.state.edit?r.a.createElement(L.a,{className:"in-button"}):r.a.createElement(U.a,{className:"in-button"})},e.getOwnership=function(){return e.props.sneaker.ownership?r.a.createElement(V.a,null):r.a.createElement(z.a,null)},e.getNameElement=function(){return e.state.edit?r.a.createElement("h1",{className:"item-name"},e.props.sneaker.name):r.a.createElement("input",{className:"edit-name",onChange:e.handleName,ref:function(t){return e.inputName=t}})},e.handleName=function(t){var n=t.target.value;e.setState({itemName:n})},e.getPriceElement=function(){return e.state.edit?r.a.createElement("h1",{className:"item-price"},"$",e.props.sneaker.price.toFixed(2)):r.a.createElement("input",{className:"edit-price",onChange:e.handlePrice,ref:function(t){return e.inputPrice=t}})},e.handlePrice=function(t){var n=t.target.value;e.setState({itemPrice:n})},e.getColorwayElement=function(){return e.state.edit?e.props.sneaker.colorway:r.a.createElement("input",{className:"edit-color",onChange:e.handleColor,ref:function(t){return e.inputColor=t}})},e.handleColor=function(t){var n=t.target.value;e.setState({itemColor:n})},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"primary-info"},r.a.createElement("div",{className:"item-rank"},r.a.createElement("h1",null,this.props.sneaker.ranking)),r.a.createElement("div",null,this.getNameElement()),r.a.createElement("div",null,this.getPriceElement()),r.a.createElement("div",{className:"clear-primary"})),r.a.createElement("div",{className:"secondary-info"},r.a.createElement("table",{className:"secondary-table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Colorway"),r.a.createElement("td",null,this.getColorwayElement())),r.a.createElement("tr",null,r.a.createElement("th",null,"Owned"),r.a.createElement("td",null,this.getOwnership())),r.a.createElement("button",{className:"update-button",onClick:this.props.updateOwnership},"Update Ownership")),r.a.createElement("table",{className:"button-array"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{className:"list-button"},r.a.createElement(R.a,{className:"in-button"}))),r.a.createElement("td",null,r.a.createElement("button",{id:"edit",className:"list-button",onClick:this.toggleButton},this.getEditIcon()))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{className:"list-button"},r.a.createElement(D.a,{className:"in-button"}))),r.a.createElement("td",null,r.a.createElement("button",{className:"list-button",onClick:this.props.delete},r.a.createElement(F.a,{className:"in-button"}))))))))}}]),n}(r.a.Component),H=Object(E.a)(S,{name:"updateSneaker"})(G),K=(n(62),1),T=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={itemName:"",itemRank:0,itemPrice:0,itemColor:"",itemOwnership:!1},e.handleName=function(t){var n=t.target.value;e.setState({itemName:n})},e.handlePrice=function(t){var n=t.target.value;e.setState({itemPrice:n})},e.handleColor=function(t){var n=t.target.value;e.setState({itemColor:n})},e.createSneaker=function(){var t=Object(m.a)(u.a.mark((function t(n,a,r,i,l){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n){t.next=3;break}return alert("Please Enter Variables"),t.abrupt("return");case 3:if(!isNaN(r)){t.next=7;break}return alert("Please Enter a Floating Point Number"),e.inputPrice.value="",t.abrupt("return");case 7:return""===i&&(i="N/A"),t.next=10,e.props.createSneaker({variables:{name:n,ranking:a,price:r,colorway:i,ownership:l},refetchQueries:[{query:$}]});case 10:K++,e.inputName.value="",e.inputPrice.value="",e.inputColor.value="";case 14:case"end":return t.stop()}}),t)})));return function(e,n,a,r,i){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"over-bar"}),r.a.createElement("div",{className:"entry-box"},r.a.createElement("div",{className:"elements"},r.a.createElement("br",null),r.a.createElement("h1",{className:"create-header"},"Add New Sneaker"),r.a.createElement("div",{className:"entry-element"},r.a.createElement("label",{className:"entry-label"},"Name"),r.a.createElement("input",{className:"entry-name",type:"text",onChange:this.handleName,ref:function(t){return e.inputName=t}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"entry-label"},"Price"),r.a.createElement("input",{className:"entry-price",type:"text",onChange:this.handlePrice,ref:function(t){return e.inputPrice=t}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"entry-label"},"Colorway"),r.a.createElement("input",{className:"entry-color",type:"text",onChange:this.handleColor,ref:function(t){return e.inputColor=t}}),r.a.createElement("div",null,r.a.createElement("button",{className:"create-button",onClick:function(){return e.createSneaker(e.state.itemName,K,parseFloat(e.state.itemPrice),e.state.itemColor,!1)}},"Create"))),r.a.createElement("br",null))))}}]),n}(r.a.Component),X=Object(E.a)(C,{name:"createSneaker"})(T),Z=n(44),_=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).updateOwnership=function(){var t=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateOwnership({variables:{id:n.id,ownership:!n.ownership},refetchQueries:[{query:$}]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteSneaker=function(){var t=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.deleteSneaker({variables:{id:n.id},refetchQueries:[{query:$}]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.data,n=t.loading,a=t.getList;return n?null:r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{margin:"auto",width:"80%"}},a.map((function(t){return r.a.createElement(H,{key:"".concat(t.id,"-item"),sneaker:t,updateOwnership:function(){return e.updateOwnership(t)},delete:function(){return e.deleteSneaker(t)}})})))),r.a.createElement(X,null))}}]),n}(r.a.Component),ee=Object(Z.flowRight)(Object(E.a)($),Object(E.a)(j,{name:"updateOwnership"}),Object(E.a)(P,{name:"deleteSneaker"}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=new c.a({uri:"http://localhost:4000"});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.b,{client:te},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.170f8a3b.chunk.js.map