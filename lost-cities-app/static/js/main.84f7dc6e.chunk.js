(this["webpackJsonplost-cities-score-app"]=this["webpackJsonplost-cities-score-app"]||[]).push([[0],{19:function(e,r,n){e.exports=n(35)},24:function(e,r,n){},25:function(e,r,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,r,n){},35:function(e,r,n){"use strict";n.r(r);var a=n(0),t=n.n(a),c=n(4),o=(n(24),n(25),n(26),n(3));var l=n(18),i={gold:"warning",white:"secondary",blue:"primary",green:"success",red:"danger",purple:"info"},u=function(e){var r=e.onClick,n=e.playerId,a=e.colorId,c=e.number,o=e.activePlayer;e.playerName;return t.a.createElement("button",{onClick:r,type:"button",className:"p-3 btn btn-".concat("none"===n?"outline-":"").concat(i[a]," btn-lg btn-block"),disabled:"none"!==n&&o!==n},c)},s=n(9),p=n(6),y={gold:"warning",white:"secondary",blue:"primary",green:"success",red:"danger",purple:"info"},d=function(e){var r=e.onClick,n=e.value,a=e.colorId;return t.a.createElement("button",{onClick:r,type:"button",className:"p-3 btn btn-".concat(0===n?"outline-":"").concat(y[a]," btn-lg btn-block")},t.a.createElement(s.a,{size:"sm",icon:0<n?p.a:p.b}),1<n?t.a.createElement(s.a,{className:"ml-md-2",size:"sm",icon:p.a}):"",2<n?t.a.createElement(s.a,{className:"ml-md-2",size:"sm",icon:p.a}):"")},m=function(e){var r=e.numbers,n=e.players,a=e.wagers,c=e.onWagerClick,o=e.onNumberClick;return t.a.createElement("div",{className:"row no-gutters"},Object.entries(r).map((function(e){var i=Object(l.a)(e,2),s=i[0];i[1];return t.a.createElement("div",{key:s,className:"btn-group-vertical col ".concat(s)},t.a.createElement(d,{key:s,onClick:function(){return c(n.activePlayer,s)},value:a[s].value,colorId:s}),r[s].map((function(e,r){return t.a.createElement(u,Object.assign({key:r},e,{activePlayer:n.activePlayer,onClick:function(){return o(n.activePlayer,e.colorId,e.number)},playerName:"none"!==e.playerId?n.playerList.filter((function(r){return r.playerId===e.playerId}))[0].playerName:"None"}))})))})))},b=Object(o.b)((function(e){return{numbers:e.numbers,players:e.players,wagers:e.wagers[e.players.activePlayer]}}),(function(e){return{onWagerClick:function(r,n){e(function(e,r){return{type:"TOGGLE_WAGER",playerId:e,colorId:r}}(r,n))},onNumberClick:function(r,n,a){e(function(e,r,n){return{type:"TOGGLE_NUMBER",playerId:e,colorId:r,number:n}}(r,n,a))}}}))(m),f=function(e){var r=e.players,n=e.onPlayerClick;return t.a.createElement("div",{className:"row no-gutters justify-content-center"},r.playerList.map((function(e,a){return t.a.createElement("div",{className:"col"},t.a.createElement("button",{key:a,type:"button",className:"p-3 btn btn-secondary btn-lg btn-block ".concat(r.activePlayer!==e.playerId?"active":"disabled"),onClick:function(){return n(e.playerId)},disabled:r.activePlayer===e.playerId},e.playerName,t.a.createElement("br",null),e.playerScore))})))},v=function(e,r,n){return e.playerList.forEach((function(e){e.playerScore=function(e,r,n){var a=0;return Object.keys(r).forEach((function(t,c){var o=0,l=r[t].filter((function(r){return r.playerId===e}));l.forEach((function(e){o+=e.number}));var i=l.length+n[t].value;0<i&&(a+=(o-20)*(n[t].value+1),8<=i&&(a+=20))})),a}(e.playerId,r,n[e.playerId])})),e},g=Object(o.b)((function(e){return{players:v(e.players,e.numbers,e.wagers),numbers:e.numbers,wagers:e.wagers}}),(function(e){return{onPlayerClick:function(r){console.log("TOGGLE TO PLAYER: "+r),e(function(e){return{type:"TOGGLE_PLAYER",playerId:e}}(r))}}}))(f);var E=function(){return t.a.createElement("div",{className:"container-fluid px-0"},t.a.createElement(b,null),t.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(2),h=(n(17),n(14)),k=["gold","white","blue","green","red"],w={activePlayer:"player1",playerList:[{playerId:"player1",playerName:"Kyle"},{playerId:"player2",playerName:"Neha"}]},N=[],O={};k.forEach((function(e){O[e]=[]}));var G={};Object.keys(O).forEach((function(e,r){for(var n=2;n<=10;n++)O[e].push({playerId:"none",colorId:e,number:n})})),w.playerList.forEach((function(e){G[e.playerId]={},k.forEach((function(r){G[e.playerId][r]={value:0}}))})),k.forEach((function(e){for(var r=2;r<=10;r++)N.push({playerId:"none",colorId:e,number:r})}));var P=Object(h.a)(O,{TOGGLE_NUMBER:function(e,r){e[r.colorId][r.number-2].playerId="none"===e[r.colorId][r.number-2].playerId?r.playerId:"none"}});var L=Object(h.a)(G,{TOGGLE_WAGER:function(e,r){e[r.playerId][r.colorId].value+=1,3<e[r.playerId][r.colorId].value&&(e[r.playerId][r.colorId].value=0)}});var j=Object(I.c)({numbers:P,wagers:L,players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"TOGGLE_PLAYER":return Object.assign({},e,{activePlayer:e.activePlayer!==r.playerId?r.playerId:"error"});default:return e}}}),C=(n(34),Object(I.e)(j));console.log(C.getState()),C.subscribe((function(){return console.log(C.getState())}))(),Object(c.render)(t.a.createElement(o.a,{store:C},t.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.84f7dc6e.chunk.js.map