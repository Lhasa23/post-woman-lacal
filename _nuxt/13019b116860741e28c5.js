(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{245:function(t,n,e){"use strict";e.d(n,"c",(function(){return $})),e.d(n,"a",(function(){return S})),e.d(n,"b",(function(){return I}));e(100);var o=e(6),c=x("^(wss?:\\/\\/)?"),r=Object(o.a)(c,2),l=r[0],d=r[1],m=x("^(https?:\\/\\/)?"),h=Object(o.a)(m,2),f=h[0],k=h[1],w=x("^((wss?:\\/\\/)|(https?:\\/\\/))?"),y=Object(o.a)(w,2),v=y[0],_=y[1];function x(t){return[new RegExp("".concat(t,"(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")),new RegExp("".concat(t,"(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9/])$"))]}function $(t){return l.test(t)||d.test(t)}function S(t){return f.test(t)||k.test(t)}function I(t){return v.test(t)||_.test(t)}},905:function(t,n,e){"use strict";e.r(n);var o=e(245),c={components:{"pw-section":function(){return e.e(1).then(e.bind(null,358))},realtimeLog:function(){return e.e(2).then(e.bind(null,901))}},data:function(){return{connectionState:!1,url:"wss://echo.websocket.org",socket:null,communication:{log:null,input:""},currentIndex:-1}},computed:{urlValid:function(){return Object(o.c)(this.url)}},methods:{toggleConnection:function(){return this.connectionState?this.disconnect():this.connect()},connect:function(){var t=this;this.communication.log=[{payload:this.$t("connecting_to",{name:this.url}),source:"info",color:"var(--ac-color)"}];try{this.socket=new WebSocket(this.url),this.socket.onopen=function(n){t.connectionState=!0,t.communication.log=[{payload:t.$t("connected_to",{name:t.url}),source:"info",color:"var(--ac-color)",ts:(new Date).toLocaleTimeString()}],t.$toast.success(t.$t("connected"),{icon:"sync"})},this.socket.onerror=function(n){t.handleError()},this.socket.onclose=function(n){t.connectionState=!1,t.communication.log.push({payload:t.$t("disconnected_from",{name:t.url}),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),t.$toast.error(t.$t("disconnected"),{icon:"sync_disabled"})},this.socket.onmessage=function(n){var data=n.data;t.communication.log.push({payload:data,source:"server",ts:(new Date).toLocaleTimeString()})}}catch(t){this.handleError(t),this.$toast.error(this.$t("something_went_wrong"),{icon:"error"})}},disconnect:function(){this.socket.close()},handleError:function(t){this.disconnect(),this.connectionState=!1,this.communication.log.push({payload:this.$t("error_occurred"),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==t&&this.communication.log.push({payload:t,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},sendMessage:function(){var t=this.communication.input;this.socket.send(t),this.communication.log.push({payload:t,source:"client",ts:(new Date).toLocaleTimeString()}),this.communication.input=""},walkHistory:function(t){var n=this.communication.log.filter((function(t){return"client"===t.source})),e=n.length;switch(t){case"up":e>0&&0!==this.currentIndex&&(-1===this.currentIndex?(this.currentIndex=e-1,this.communication.input=n[this.currentIndex].payload):0===this.currentIndex?this.communication.input=n[0].payload:this.currentIndex>0&&(this.currentIndex=this.currentIndex-1,this.communication.input=n[this.currentIndex].payload));break;case"down":e>0&&this.currentIndex>-1&&(this.currentIndex===e-1?(this.currentIndex=-1,this.communication.input=""):this.currentIndex<e-1&&(this.currentIndex=this.currentIndex+1,this.communication.input=n[this.currentIndex].payload))}}}},r=e(42),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("pw-section",{ref:"request",staticClass:"blue",attrs:{label:t.$t("request")}},[e("ul",[e("li",[e("label",{attrs:{for:"websocket-url"}},[t._v(t._s(t.$t("url")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:!t.urlValid},attrs:{id:"websocket-url",type:"url",spellcheck:"false"},domProps:{value:t.url},on:{keyup:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(n){n.target.composing||(t.url=n.target.value)}}})]),t._v(" "),e("div",[e("li",[e("label",{staticClass:"hide-on-small-screen",attrs:{for:"connect"}},[t._v(" ")]),t._v(" "),e("button",{attrs:{disabled:!t.urlValid,id:"connect",name:"connect"},on:{click:t.toggleConnection}},[t._v("\n            "+t._s(t.connectionState?t.$t("disconnect"):t.$t("connect"))+"\n            "),e("span",[e("i",{staticClass:"material-icons"},[t._v("\n                "+t._s(t.connectionState?"sync_disabled":"sync")+"\n              ")])])])])])])]),t._v(" "),e("pw-section",{ref:"response",staticClass:"purple",attrs:{label:t.$t("communication"),id:"response"}},[e("ul",[e("li",[e("realtime-log",{attrs:{title:t.$t("log"),log:t.communication.log}})],1)]),t._v(" "),e("ul",[e("li",[e("label",{attrs:{for:"websocket-message"}},[t._v(t._s(t.$t("message")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.input,expression:"communication.input"}],attrs:{id:"websocket-message",name:"message",type:"text",readonly:!t.connectionState},domProps:{value:t.communication.input},on:{keyup:[function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.connectionState&&t.sendMessage()},function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"]))return null;t.connectionState&&t.walkHistory("up")},function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"]))return null;t.connectionState&&t.walkHistory("down")}],input:function(n){n.target.composing||t.$set(t.communication,"input",n.target.value)}}})]),t._v(" "),e("div",[e("li",[e("label",{staticClass:"hide-on-small-screen",attrs:{for:"send"}},[t._v(" ")]),t._v(" "),e("button",{attrs:{id:"send",name:"send",disabled:!t.connectionState},on:{click:t.sendMessage}},[t._v("\n            "+t._s(t.$t("send"))+"\n            "),e("span",[e("i",{staticClass:"material-icons"},[t._v("send")])])])])])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);