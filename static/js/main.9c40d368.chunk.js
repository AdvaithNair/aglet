(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/AgletLogoOutline.d1e90b88.png"},36:function(e,t,n){e.exports=n(52)},42:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(23),c=n.n(r),i=n(33),l=n(5),u=n(18),m=n.n(u),d=n(24),s=n(25),p=n(26),f=n(35),v=n(34),h=n(13),b=n(12),g=n.n(b),E=n(53);n(42);function w(){var e=Object(h.a)(["\n  mutation($id: ID!, $complete: Boolean!) {\n    updateTodo(id: $id, complete: $complete)\n  }\n"]);return w=function(){return e},e}var O=g()(w());var j=Object(E.a)(O,{name:"updateTodo"})((function(e){return o.a.createElement("div",{className:"item"},o.a.createElement("h1",null,e.name),o.a.createElement("p",null,e.complete.toString()),o.a.createElement("button",{onClick:e.click},"Update"))})),k=(n(49),n(31)),y=n.n(k);var $=function(){return o.a.createElement("div",{className:"header-bar"},o.a.createElement("img",{src:y.a,alt:"Aglet Logo",className:"header-image"}),o.a.createElement("h2",null,"Your Sneaker Wishlist"))},T=n(32);function x(){var e=Object(h.a)(["\n  mutation($id: ID!, $complete: Boolean!) {\n    updateTodo(id: $id, complete: $complete)\n  }\n"]);return x=function(){return e},e}function B(){var e=Object(h.a)(["\n  {\n    todos {\n      id\n      text \n      complete\n    }\n  }\n"]);return B=function(){return e},e}var A=g()(B()),I=g()(x()),N=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).updateTodo=function(){var t=Object(d.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateTodo({variables:{id:n.id,name:n.name+" updated",complete:!n.complete}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.removeTodo=function(e){},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data,n=t.loading,a=t.todos;return n?null:o.a.createElement("div",null,o.a.createElement($,null),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{margin:"auto",width:"80%"}},a.map((function(t){return o.a.createElement(j,{name:t.text,complete:t.complete,click:function(){return e.updateTodo(t)}})})))))}}]),n}(o.a.Component),S=Object(T.flowRight)(Object(E.a)(A),Object(E.a)(I,{name:"updateTodo"}))(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=new i.a({uri:"http://localhost:4000"});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.b,{client:W},o.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9c40d368.chunk.js.map