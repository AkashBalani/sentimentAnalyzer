(this["webpackJsonpsalogic-front"]=this["webpackJsonpsalogic-front"]||[]).push([[0],{208:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(18),r=t.n(a),c=t(33),s=t(34),l=t(36),u=t(35),h=t(37),f=(t(94),t(85)),d=t.n(f),p=t(86),v=t.n(p),y=t(87),g=t.n(y),m=t(60),w=t.n(m),b=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=Math.round(128*(this.props.polarity+1)),n={backgroundColor:"rgb("+(255-e)+", "+e+", 0)",padding:"15px"};return i.a.createElement("div",{style:n},'"',this.props.sentence,'" has polarity of ',this.props.polarity," ")}}]),n}(o.Component),E={marginLeft:12},j=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).onEnterPress=function(e){"Enter"===e.key&&t.analyzeSentence()},t.state={sentence:"",polarity:void 0},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"analyzeSentence",value:function(){var e=this;fetch("http://localhost:8080/sentiment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:this.textField.getValue()})}).then((function(e){return e.json()})).then((function(n){return e.setState(n)}))}},{key:"render",value:function(){var e=this,n=void 0!==this.state.polarity?i.a.createElement(b,{sentence:this.state.sentence,polarity:this.state.polarity}):null;return i.a.createElement(d.a,null,i.a.createElement("div",{className:"centerize"},i.a.createElement(w.a,{zDepth:1,className:"content"},i.a.createElement("h2",null,"Sentiment Analyser"),i.a.createElement(v.a,{ref:function(n){return e.textField=n},onKeyUp:this.onEnterPress.bind(this),hintText:"Type your sentence."}),i.a.createElement(g.a,{label:"Send",style:E,onClick:this.analyzeSentence.bind(this)}),n)))}}]),n}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()},88:function(e,n,t){e.exports=t(208)},94:function(e,n,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.97db09eb.chunk.js.map