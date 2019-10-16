(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1040:function(e,t,n){},1042:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(995),i=n(1004),l=n.n(i),c=n(161),u=n.n(c),s=n(857),f=n(1032);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return(S=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var E=function(e){function t(e){var n;return p(this,t),(n=h(this,g(t).call(this,e))).state={},n}return v(t,e),b(t,[{key:"render",value:function e(){var t=[{month:"01/01",SiteA:7e3,SiteB:3900},{month:"02/01",SiteA:6900,SiteB:4200},{month:"03/01",SiteA:9500,SiteB:5700},{month:"04/01",SiteA:14500,SiteB:8500},{month:"05/01",SiteA:18400,SiteB:11900},{month:"06/01",SiteA:21500,SiteB:15200},{month:"07/01",SiteA:25200,SiteB:17e3},{month:"08/01",SiteA:26500,SiteB:16600},{month:"09/01",SiteA:23300,SiteB:14200},{month:"10/01",SiteA:18300,SiteB:10300},{month:"11/01",SiteA:13900,SiteB:6600},{month:"12/01",SiteA:9600,SiteB:4800}],n,r=(new f.DataSet).createView().source(t);r.transform({type:"fold",fields:["SiteA","SiteB"],key:"city",value:"temperature"}),console.log(r);var a={month:{range:[0,1]}};return o.a.createElement(s.Chart,{height:350,data:r,scale:a,forceFit:!0,padding:[30,30,30,60]},o.a.createElement(s.Axis,{name:"month"}),o.a.createElement(s.Axis,{name:"temperature",label:{formatter:function e(t){return"".concat(t)}}}),o.a.createElement(s.Tooltip,{crosshairs:{type:"y"}}),o.a.createElement(s.Geom,{type:"line",position:"month*temperature",size:2,color:"city"}),o.a.createElement(s.Geom,{type:"point",position:"month*temperature",size:4,shape:"circle",color:"city",style:{stroke:"#fff",lineWidth:1}}))}}]),t}(r.Component);E.displayName="LineChart",E.propTypes={},E.defaultProps={};var x=n(774),w=n(773),O=n(1033),_=n(1036),T=n.n(_);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t&&I(e.prototype,t),n&&I(e,n),e}function k(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}function A(e,t){return(A=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var U=function(e){function t(e){var n;return C(this,t),(n=k(this,N(t).call(this,e))).state={},n}return B(t,e),P(t,[{key:"render",value:function e(){var t=this.props.color,n=[{year:"1951 \u5e74",sales:38},{year:"1952 \u5e74",sales:52},{year:"1956 \u5e74",sales:61},{year:"1957 \u5e74",sales:145},{year:"1958 \u5e74",sales:48},{year:"1959 \u5e74",sales:38},{year:"1960 \u5e74",sales:38},{year:"1962 \u5e74",sales:38}],r={sales:{tickInterval:20}};return o.a.createElement(s.Chart,{height:30,width:60,padding:[2,3,2,3],data:n,scale:r},o.a.createElement(s.Geom,{type:"interval",position:"year*sales",color:t||"#3fa1ff"}))}}]),t}(r.Component);U.displayName="ColumnChart",U.propTypes={},U.defaultProps={};var D=n(760),M=n(761);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),e}function H(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}function F(e,t){return(F=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var $=T.a.Row,G=T.a.Col,K=function(e){function t(e){var n;return z(this,t),(n=H(this,V(t).call(this,e))).state={},n.state.data=null,n}return q(t,e),J(t,[{key:"componentDidMount",value:function e(){}},{key:"componentWillMount",value:function e(){var t=this;Object(D.a)(function(e){t.state.data=e,t.setState(e)})}},{key:"renderTextColum",value:function e(t,n){return o.a.createElement("li",{style:Q.infoItemBody},o.a.createElement("span",{style:Q.infoItemLabel},t,":"),o.a.createElement("span",{style:Q.infoItemValue},n))}},{key:"renderCpuUse",value:function e(t,n,r){return t+"%"+"(".concat(M.a.formatUtcTime(r.cpuTime,0),")")}},{key:"renderMemoryUse",value:function e(t,n,r){return t+"%"+"(".concat(M.a.formatUtcTime(r.memoryTime,0),")")}},{key:"render",value:function e(){var t=this.state.data;return null===t||void 0===t?o.a.createElement("div",null):o.a.createElement("div",null,o.a.createElement($,{type:"wrap"},o.a.createElement(G,{xxs:"12",s:"12",l:"6"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},"\u623f\u95f4\u521b\u5efa\u6b21\u6570"),o.a.createElement("h2",{style:Q.counterNum},t.createRoom))),o.a.createElement(G,{xxs:"12",s:"12",l:"6"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},"\u63a8\u6d41\u6b21\u6570"),o.a.createElement("h2",{style:Q.counterNum},t.sharedVideo))),o.a.createElement(G,{xxs:"12",s:"12",l:"6"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},"\u62c9\u6d41\u6b21\u6570"),o.a.createElement("h2",{style:Q.counterNum},t.pullVideo))),o.a.createElement(G,{xxs:"12",s:"12",l:"6"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},"\u603b\u5a92\u4f53\u6d41\u8fd0\u884c\u65f6\u957f"),o.a.createElement("h2",{style:Q.counterNum},t.wholeRuntime)))),o.a.createElement("h4",{style:Q.title},"\u5cf0\u503c\u4fe1\u606f"),o.a.createElement($,{type:"wrap"},o.a.createElement(G,{xxs:"12",s:"12",l:"8"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},M.a.formatUtcTime(t.maxUse.mediaTime,0)),o.a.createElement("p",{style:Q.textLabel},"\u6700\u5927\u5e76\u53d1\u5a92\u4f53\u6d41"),o.a.createElement("h2",{style:Q.counterNum},"".concat(t.maxUse.media)))),o.a.createElement(G,{xxs:"12",s:"12",l:"8"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},M.a.formatUtcTime(t.maxUse.roomTime,0)),o.a.createElement("p",{style:Q.textLabel},"\u6700\u5927\u623f\u95f4\u6570\u76ee"),o.a.createElement("h2",{style:Q.counterNum},t.maxUse.room))),o.a.createElement(G,{xxs:"12",s:"12",l:"8"},o.a.createElement("div",{style:Q.box},o.a.createElement("p",{style:Q.textLabel},M.a.formatUtcTime(t.maxUse.userTime,0)),o.a.createElement("p",{style:Q.textLabel},"\u6700\u5927\u5728\u7ebf\u4eba\u6570"),o.a.createElement("h2",{style:Q.counterNum},t.maxUse.user)))),o.a.createElement(w.a,{dataSource:t.maxUse.devices,className:"basic-table",style:Q.basicTable,hasBorder:!1},o.a.createElement(w.a.Column,{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"hostname",width:150,alignHeader:"left",align:"left"}),o.a.createElement(w.a.Column,{title:"\u6700\u5927CPU\u4f7f\u7528\u7387",dataIndex:"cpu",width:150,alignHeader:"left",align:"left",cell:this.renderCpuUse}),o.a.createElement(w.a.Column,{title:"\u6700\u5927\u5185\u5b58\u4f7f\u7528\u7387",dataIndex:"memory",width:120,alignHeader:"center",align:"center",cell:this.renderMemoryUse})),o.a.createElement("h3",{style:Q.subTitle},"\u8fdb\u7a0b\u91cd\u542f\u6b21\u6570:"),o.a.createElement($,{style:Q.anchorCard},o.a.createElement(G,{l:"10"},this.renderTextColum("apps",t.processRestart.apps),this.renderTextColum("web",t.processRestart.web),this.renderTextColum("sfu_process",t.processRestart.sfu_process),this.renderTextColum("html5",t.processRestart.html5)),o.a.createElement(G,{l:"10"},this.renderTextColum("RMD",t.processRestart.RMD),this.renderTextColum("nginx",t.processRestart.nginx),this.renderTextColum("redis",t.processRestart.redis))))}}]),t}(r.Component);K.displayName="Head",K.propTypes={},K.defaultProps={};var Q={box:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"10px"},textLabel:{margin:0,color:"#666"},counterNum:{margin:"10px",fontSize:"28px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",fontWeight:"bold",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},X=n(1040);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t,n){return t&&te(e.prototype,t),n&&te(e,n),e}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?oe(e):t}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function ie(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}function le(e,t){return(le=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var ce=l.a.TabPane,ue={threeMonths:{visits:"4,677",unique_users:"3,621",ip:"5,690",click:"6,583"},halfYear:{visits:"6,688",unique_users:"8,339",ip:"7,989",click:"9,832"},nearlyYear:{visits:"10,323",unique_users:"9,262",ip:"12,639",click:"26,386"}},se=function(e){function t(e){var n;return ee(this,t),(n=re(this,ae(t).call(this,e))).state={},n}return ie(t,e),ne(t,[{key:"render",value:function e(){return o.a.createElement(u.a,{className:"flow-statistics"},o.a.createElement("h4",{style:fe.title},"\u623f\u95f4\u7edf\u8ba1"),o.a.createElement(l.a,{type:"text",size:"small"},o.a.createElement(ce,{tab:"\u4eca\u5929",key:"1"},o.a.createElement(K,{data:ue.threeMonths})),o.a.createElement(ce,{tab:"\u8fd1\u4e09\u5929",key:"2"},o.a.createElement(K,{data:ue.halfYear})),o.a.createElement(ce,{tab:"\u8fd1\u4e00\u5468",key:"3"},o.a.createElement(K,{data:ue.nearlyYear}))))}}]),t}(r.Component);se.displayName="FlowStatistics",se.propTypes={},se.defaultProps={};var fe={title:{margin:"0",fontSize:"16px",paddingBottom:"15px",fontWeight:"bold",color:"#333"}},me=se;function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function ye(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t,n){return t&&be(e.prototype,t),n&&be(e,n),e}function de(e,t){return!t||"object"!==pe(t)&&"function"!=typeof t?ge(e):t}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function Se(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}function Ee(e,t){return(Ee=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return xe});var xe=function(e){function t(e){var n;return ye(this,t),(n=de(this,ve(t).call(this,e))).state={},n}return Se(t,e),he(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"count-info-page"},o.a.createElement(me,null))}}]),t}(r.Component)},760:function(e,t,n){"use strict";n.d(t,"i",function(){return p}),n.d(t,"d",function(){return y}),n.d(t,"e",function(){return b}),n.d(t,"f",function(){return h}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return g}),n.d(t,"g",function(){return v}),n.d(t,"h",function(){return E}),n.d(t,"b",function(){return x});var r=n(42),o=n.n(r),a=n(129),i=n.n(a),l=n(766),c=n.n(l),u=n(160);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var f=[],m=[],p=function e(t){o.a.get("/rimpmanage/roomList").then(function(e){var n=e.data;"SUCCESS"===(n=n.response).returncode?(t(n),"object"==s(n.meetings.meeting)&&(f=n.meetings.meeting.constructor!=Array?[n.meetings.meeting]:f)):(f=[],t(null)),sessionStorage.setItem("meetingsData",JSON.stringify(f))}).catch(function(e){console.log("fetch course appprove list error.",e),t(null)})},y=function e(t,n){o.a.get("/rimpmanage/eventList?meetId="+t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},b=function e(t,n){o.a.post("/rimpmanage/mediaInfo/getMediaInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},h=function e(t,n){o.a.post("/rimpmanage/mediaInfo/mediaServers",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},d=function e(t){o.a.get("/rimpmanage/DeviceInfo").then(function(e){var n=e.data;t(n),m=n,sessionStorage.setItem("DeviceInfo",JSON.stringify(n))}).catch(function(e){console.log("getDeviceInfosfromServer error.",e),t(null)})},g=function e(t){o.a.get("/rimpmanage/countInfo").then(function(e){var n=e.data;t(n)}).catch(function(e){console.log("getCountInfosfromServer error.",e),t(null)})},v=function e(t){var n=null,r=[];if(f.length<=0){var o=sessionStorage.getItem("meetingsData");r=JSON.parse(o)}else r=f;return r.forEach(function(e){e.internalMeetingID==t&&(n=e)}),n},S=function e(t,n){var r=null,o=[];if(f.length<=0){var a=sessionStorage.getItem("meetingsData");o=JSON.parse(a)}else o=f;return o.forEach(function(e){var o;e.voiceBridge.toString()===t&&u.a.tranObjToArr(e.attendees.attendee).forEach(function(e){e.userID===n&&(r=e.fullName)})}),r},E=function e(t){var n=[];if(f.length<=0){var r=sessionStorage.getItem("meetingsData");n=JSON.parse(r)}else n=f;var o="";return n.forEach(function(e){e.voiceBridge.toString()===t&&(o=e.meetingName)}),o},x=function e(t){var n=null,r=[];if(m.length<=0){var o=sessionStorage.getItem("deviceInfo");r=JSON.parse(o)}else r=m;return null==r?null:(r.forEach(function(e){e.hostname===t&&(n=e)}),n)},w=p},761:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a}};t.a=a}}]);