(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/AgletLogoOutline.d1e90b88.png"},36:function(e,t,n){e.exports=n(53)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(28),c=n.n(o),i=n(35),l=n(5),u=n(12),s=n.n(u),m=n(14),d=n(18),p=n(19),f=n(23),v=n(22),h=n(54),b=n(16),E=n(13),g=n.n(E);function x(){var e=Object(b.a)(["\n  mutation($id: ID!) {\n    removeTodo(id:$id)\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(b.a)(["\n  mutation($id: ID!, $complete: Boolean!) {\n    updateTodo(id: $id, complete: $complete)\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(b.a)(["\n{\n  todos {\n    id\n    text \n    complete\n  }\n}\n"]);return j=function(){return e},e}function y(){var e=Object(b.a)(["\n  mutation($text: String!) {\n    createTodo(text: $text) {\n      text\n      id\n      complete\n    }\n  }\n"]);return y=function(){return e},e}var w=g()(y()),T=g()(j()),k=g()(O()),N=g()(x()),C=(n(42),n(29)),$=n.n(C);var S=function(){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("img",{src:$.a,alt:"Aglet Logo",className:"header-image"}),r.a.createElement("h2",null,"Your Sneaker Wishlist"),r.a.createElement("div",{className:"under-bar"}))};n(43);var A=function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.complete.toString()),r.a.createElement("button",{onClick:e.update},"Update"),r.a.createElement("button",{onClick:e.delete},"Delete"))},I=(n(44),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={itemtext:""},e.handleChange=function(t){var n=t.target.value;e.setState({itemtext:n})},e.createTodo=function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.createTodo({variables:{text:n},refetchQueries:[{query:T}]});case 2:e.inputName.value="";case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"over-bar"}),r.a.createElement("div",{className:"entry-box"},r.a.createElement("div",{className:"elements"},r.a.createElement("h1",{className:"create-header"},"Create"),r.a.createElement("label",null,"Item Name"),r.a.createElement("input",{className:"item-name",type:"text",onChange:this.handleChange,ref:function(t){return e.inputName=t}}),r.a.createElement("div",{className:"create-button"},r.a.createElement("button",{onClick:function(){return e.createTodo(e.state.itemtext)}},"Create")))))}}]),n}(r.a.Component)),q=Object(h.a)(w,{name:"createTodo"})(I),B=n(34),D=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).updateTodo=function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateTodo({variables:{id:n.id,complete:!n.complete},refetchQueries:[{query:T}]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteTodo=function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.deleteTodo({variables:{id:n.id},refetchQueries:[{query:T}]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data,n=t.loading,a=t.todos;return n?null:r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{margin:"auto",width:"80%"}},a.map((function(t){return r.a.createElement(A,{key:"".concat(t.id,"-todo-item"),name:t.text,complete:t.complete,update:function(){return e.updateTodo(t)},delete:function(){return e.deleteTodo(t)}})})))),r.a.createElement(q,null))}}]),n}(r.a.Component),Q=Object(B.flowRight)(Object(h.a)(T),Object(h.a)(k,{name:"updateTodo"}),Object(h.a)(N,{name:"deleteTodo"}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=new i.a({uri:"http://localhost:4000"});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.b,{client:W},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f0a126e6.chunk.js.map