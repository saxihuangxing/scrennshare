(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1056:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(184),a=n(64),l=n(183),u=n.n(l),c=n(122),s=n(968),f=n(88),p=n(969),m=n(185),d=n(390);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?w(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var T=a.a.Row,C=a.a.Col,S=function(e){function t(e){var n;b(this,t),(n=g(this,x(t).call(this,e))).renderPushMediaState=function(e){return!0===e?o.a.createElement("label",{inverse:!1,status:"default"},"\u662f"):o.a.createElement("label",{inverse:!1,status:"default"},"\u5426")};var r,i,a,l={voiceBridge:n.getQueryVariable("voiceBridge"),userId:n.getQueryVariable("userId"),mediaId:n.getQueryVariable("mediaId"),timeRange:{start:"newest"}};return n.queryParam=l,n.state={},Object(c.h)(n.queryParam,n.updateMediaInfo.bind(w(n))),n}return O(t,e),v(t,[{key:"componentDidMount",value:function e(){var t=this,n=function e(){Object(c.h)(t.queryParam,t.updateMediaInfo.bind(t))};this.interval=setInterval(n,3e3)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.interval)}},{key:"updateMediaInfo",value:function e(t){if(null!=t&&t.length>0){var n=t[0];this.setState({mediaInfo:n})}}},{key:"getQueryVariable",value:function e(t){for(var n,r,o=window.location.toString().split("?")[1].split("&"),i=0;i<o.length;i++){var a=o[i].split("=");if(a[0]==t)return a[1]}return!1}},{key:"renderTextColum",value:function e(t,n){return o.a.createElement("li",{style:j.infoItemBody},o.a.createElement("span",{style:j.infoItemLabel},t,":"),o.a.createElement("span",{style:j.infoItemValue},n))}},{key:"renderRtpMapStats",value:function e(t,n){var r;if(null!=n)return"VIDEO"===t?r="\u89c6\u9891\u4fe1\u606f":"AUDIO"===t&&(r="\u97f3\u9891\u4fe1\u606f"),o.a.createElement("div",null,o.a.createElement("h3",{style:j.subTitle},r),o.a.createElement(T,{style:j.anchorCard},o.a.createElement(C,{l:"10"},this.renderTextColum("bytesReceived",n.bytesReceived),this.renderTextColum("firCount",n.firCount),this.renderTextColum("fractionLost",n.fractionLost),this.renderTextColum("jitter",n.jitter)),o.a.createElement(C,{l:"10"},this.renderTextColum("nackCount",n.nackCount),this.renderTextColum("packetsLost",n.packetsLost),this.renderTextColum("packetsReceived",n.packetsReceived),this.renderTextColum("pliCount",n.pliCount)),o.a.createElement(C,{l:"10"},this.renderTextColum("remb",n.remb),this.renderTextColum("sliCount",n.sliCount),this.renderTextColum("ssrc",n.ssrc))))}},{key:"renderWebrtcStats",value:function e(t){for(var n=t.statsMap,r=null,i=null,a=0;a<n.length;a++){if("VIDEO"===n[a].mediaType){var l=n[a];for(var u in l)if(l.hasOwnProperty(u)){r=l[u];break}}if("AUDIO"===n[a].mediaType){var c=n[a];for(var u in c)if(c.hasOwnProperty(u)){i=c[u];break}}}return o.a.createElement("div",null,this.renderRtpMapStats("VIDEO",r),this.renderRtpMapStats("AUDIO",i))}},{key:"renderMediaInfo",value:function e(t){if(null!=t)return o.a.createElement("div",null,o.a.createElement("h3",{style:j.subTitle},"\u57fa\u672c\u4fe1\u606f:"),o.a.createElement(T,{style:j.anchorCard},o.a.createElement(C,{l:"10"},this.renderTextColum("\u623f\u95f4",t.meetingName)),o.a.createElement(C,{l:"10"},this.renderTextColum("\u7528\u6237",t.userName)),o.a.createElement(C,{l:"10"},this.renderTextColum("\u65b9\u5f0f",t.shared?"\u63a8":"\u62c9"))),this.renderWebrtcStats(t))}},{key:"renderProcessName",value:function e(t){var n;return n=f.a.mappedProcessName(t),o.a.createElement("div",{style:j.titleCol},o.a.createElement("span",{style:j.titleText},n))}},{key:"renderRSS",value:function e(t){var n=t/1024;return n=n.toFixed(2)+"MB",o.a.createElement("div",{style:j.titleCol},o.a.createElement("span",{style:j.titleText},n))}},{key:"render",value:function e(){return o.a.createElement(u.a,{style:j.cardContainer},o.a.createElement("div",{style:{width:"95%",height:"95%"}},o.a.createElement("hr",null),this.renderMediaInfo(this.state.mediaInfo),o.a.createElement("hr",null)))}}]),t}(r.Component);S.displayName="MediaDetailInfo",S.propTypes={},S.defaultProps={};var j={cardContainer:{padding:"10px 10px 20px 10px"},editDialog:{display:"inline-block",marginRight:"5px"},loading:{width:"100%"},header:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #999"},title:{fontSize:20,margin:0,paddingBottom:10},subTitle:{fontSize:16,fontWeight:"bold",margin:0,marginTop:"20px"},anchorCard:{marginTop:"10px",marginLeft:"20px",background:"#fff",overflow:"hidden",textOverflow:"ellipsis",borderRadius:"4px",display:"flex"},anchorAvatar:{display:"block"},anchorInfoBody:{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",textAlign:"center",fontSize:"12px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),e}function M(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}function L(e,t){return(L=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return V});var V=function(e){function t(e){var n;return P(this,t),(n=M(this,_(t).call(this,e))).state={},n}return B(t,e),R(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"RoomList-page"},o.a.createElement(S,null))}}]),t}(r.Component)},968:function(e,t,n){"use strict";var r=n(14),o=n.n(r),i={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){void 0===n&&(n=0);var r=null,i="\u2014";if(r=new Date(t)){var a=o()(r.getTime()+6e4*n);i=a?a.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else i={convertTime:t}+" "+{offset:n};return i},getTimeBeforeDays:function e(t){return t<1?0:new Date((new Date).setHours(0,0,0,0)).getTime()-24*(t-1)*60*60*1e3;var n,r}};t.a=i},969:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(968);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return e?i.a.formatUtcTime(e,0):o.a.createElement("span",{style:l({},s.contentText)},"No Time")}var s={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=c}}]);