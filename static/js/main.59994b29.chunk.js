(this.webpackJsonpemployeehw=this.webpackJsonpemployeehw||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bert","image":"assets/img/betov1.jpg"},{"id":2,"name":"Fozzie Bear","image":"assets/img/bearv1.jpg"},{"id":3,"name":"Animal","image":"assets/img/animalv1.jpg"},{"id":4,"name":"Gonzo","image":"assets/img/gonzov1.jpg"},{"id":5,"name":"Sweetums","image":"assets/img/sweetumsv1.jpg"},{"id":6,"name":"Ernie","image":"assets/img/erniev1.jpg"},{"id":7,"name":"Kermit the Frog","image":"assets/img/kermitv1.jpg"},{"id":8,"name":"Big Bird","image":"assets/img/bigbirdv1.jpg"},{"id":9,"name":"Oscar","image":"assets/img/oscarv1.jpg"},{"id":10,"name":"elmo","image":"assets/img/elmov1.jpg"},{"id":11,"name":"Dracula","image":"assets/img/draculav1.jpg"},{"id":12,"name":"Cookie Monster","image":"assets/img/cookiemonsterv1.jpg"}]')},,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(4),c=t.n(r),s=(t(11),t(5)),o=t(1);t(12),t(13);var m=function(e){return i.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"characterContainer ".concat(e.classShake)},i.a.createElement("div",{className:"imgDiv"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("p",null,e.name)))};t(14);var l=function(e){return i.a.createElement("div",{className:"mainContainer"},i.a.createElement("div",{className:"displayComp"},e.children))};t(15);var g=function(e){return i.a.createElement("div",{className:"title"},i.a.createElement("h2",null,e.header1))};t(16);var u=function(e){return i.a.createElement("header",{id:"navbar",className:"navContainer"},i.a.createElement("p",{className:"score"},"Score = ",e.counter),i.a.createElement("div",{className:"titleContainer"},i.a.createElement("img",{src:"./assets/img/sslogov1.png",className:"sslogo",alt:"Sesame Street Logo"}),i.a.createElement("h2",{className:"gameTitle"}," Clicky - Game")),i.a.createElement("p",{className:"topScore"},"Top Score = ",e.topScore))},d=t(2);var v=function(){var e=Object(n.useState)(d),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(0),v=Object(o.a)(c,2),p=v[0],f=v[1],h=Object(n.useState)(0),j=Object(o.a)(h,2),E=j[0],b=j[1],k=Object(n.useState)(d),O=Object(o.a)(k,2),S=O[0],N=O[1],w=Object(n.useState)("Click on an image to earn points. But don't click on any more than once!"),y=Object(o.a)(w,2),C=y[0],B=y[1],z=Object(n.useState)("shakeOff"),x=Object(o.a)(z,2),J=x[0],M=x[1],T=function(e){D(e),A(t),r(Object(s.a)(t))},A=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},D=function(e){M("shakeOff");var a=S.map((function(e){return e.id}));-1===a.indexOf(e)?(M("shakeOn"),N(t),f(0),b(E),B("You guessed incorrectly..!")):(a=S.filter((function(a){return a.id!==e})),N(a),f(p+1),B("You guessed correctly..! Try Again."),b(E>p?E:p+1))};return i.a.createElement("div",null,i.a.createElement(u,{counter:p,topScore:E}),i.a.createElement(l,null,i.a.createElement(g,{header1:C}),t.map((function(e){return i.a.createElement(m,{handleClick:T,id:e.id,key:e.id,name:e.name,image:e.image,classShake:J})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.59994b29.chunk.js.map