(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{761:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a}};t.a=a},762:function(e,t,n){"use strict";n.d(t,"g",function(){return p}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return g}),n.d(t,"b",function(){return y}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return b}),n.d(t,"a",function(){return x});var r=n(46),o=n.n(r),a=n(129),i=n.n(a),l=n(771),c=n.n(l),u=n(161);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var f=[],m=[],p=function e(t){o.a.get("/rimpmanage/roomList").then(function(e){var n=e.data;"SUCCESS"===(n=n.response).returncode?(t(n),"object"==s(n.meetings.meeting)&&(f=n.meetings.meeting.constructor!=Array?[n.meetings.meeting]:f)):(f=[],t(null)),sessionStorage.setItem("meetingsData",JSON.stringify(f))}).catch(function(e){console.log("fetch course appprove list error.",e),t(null)})},d=function e(t,n){o.a.get("/rimpmanage/eventList?meetId="+t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},g=function e(t,n){o.a.post("/rimpmanage/mediaInfo/getMediaInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},y=function e(t){o.a.get("/rimpmanage/DeviceInfo").then(function(e){var n=e.data;t(n),m=n,sessionStorage.setItem("DeviceInfo",JSON.stringify(n))}).catch(function(e){console.log("getDeviceInfosfromServer error.",e),t(null)})},h=function e(t){var n=null,r=[];if(f.length<=0){var o=sessionStorage.getItem("meetingsData");r=JSON.parse(o)}else r=f;return r.forEach(function(e){e.internalMeetingID==t&&(n=e)}),n},v=function e(t,n){var r=null,o=[];if(f.length<=0){var a=sessionStorage.getItem("meetingsData");o=JSON.parse(a)}else o=f;return o.forEach(function(e){var o;e.voiceBridge.toString()===t&&u.a.tranObjToArr(e.attendees.attendee).forEach(function(e){e.userID===n&&(r=e.fullName)})}),r},b=function e(t){var n=[];if(f.length<=0){var r=sessionStorage.getItem("meetingsData");n=JSON.parse(r)}else n=f;var o="";return n.forEach(function(e){e.voiceBridge.toString()===t&&(o=e.meetingName)}),o},x=function e(t){var n=null,r=[];if(m.length<=0){var o=sessionStorage.getItem("deviceInfo");r=JSON.parse(o)}else r=m;return null==r?null:(r.forEach(function(e){e.hostname===t&&(n=e)}),n)},S=p},767:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(761);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return e?a.a.formatUtcTime(e,0):o.a.createElement("span",{style:l({},s.contentText)},"No Time")}var s={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=u},984:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(773),i=n(778),l=n(779),c=n(777),u=n(163),s=n(63),f=n(162),m=n.n(f),p=n(762),d=n(761),g=n(161),y=n(767),h=n(92),v=n(771);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return(T=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var P=s.a.Row,D=s.a.Col,j=function(e){function t(e){var n;x(this,t),(n=w(this,C(t).call(this,e))).renderDevieInfo=function(e){if(null!=e)return o.a.createElement("div",null,o.a.createElement("h3",{style:k.subTitle},"\u4e3b\u673a\u8be6\u7ec6\u4fe1\u606f:"),o.a.createElement(P,{style:k.anchorCard},o.a.createElement(D,{l:"10"},n.renderTextColum("\u4e3b\u673a\u540d\u79f0",e.hostname),n.renderTextColum("\u7cfb\u7edf",e.systemType+e.release),n.renderTextColum("\u8fd0\u884c\u65f6\u957f","".concat(n.secondsToDhms(e.uptime))),n.renderTextColum("CPU\u4f7f\u7528\u7387","".concat(e.cpuUsage))),o.a.createElement(D,{l:"10"},n.renderTextColum("CPU loadavg","".concat(e.loadavg[0]," ").concat(e.loadavg[1]," ").concat(e.loadavg[2])),n.renderTextColum("\u603b\u5185\u5b58","".concat(e.totalMem)),n.renderTextColum("\u7a7a\u95f2\u5185\u5b58","".concat(e.freeMem)),n.renderTextColum("\u5185\u5b58\u4f7f\u7528\u7387","".concat(e.memUsage))),o.a.createElement(D,{l:"10"},n.renderTextColum("\u786c\u76d8\u603b\u5bb9\u91cf","".concat(e.disk.total)),n.renderTextColum("\u786c\u76d8\u4f7f\u7528","".concat(e.disk.used)),n.renderTextColum("\u786c\u76d8\u7a7a\u95f4","".concat(e.disk.free)),n.renderTextColum("\u786c\u76d8\u4f7f\u7528\u7387","".concat(e.diskUsage)))))},n.renderPushMediaState=function(e){return!0===e?o.a.createElement("label",{inverse:!1,status:"default"},"\u662f"):o.a.createElement("label",{inverse:!1,status:"default"},"\u5426")},n.onChangePage=function(e){n.fetchUsersListData(e)},n.onChangeEventPage=function(e){n.fetchEventListData(e)};var r=n.getQueryVariable("deviceName");n.state={};var a=Object(p.a)(r);return n.state.deviceInfo=a,n.state.tableData={org:[],total:0,pageSize:5,currentPage:1},n.state.tableData.list=null!=a?a.rimpProcessArr:[],h.a.registeDeviceInfoDataChang(function(e){for(var t=JSON.parse(e),o=0;o<t.length&&t[o].hostname!==r;o++);o!==t.length&&(n.state.tableData.list=t[o].rimpProcessArr,n.setState({deviceInfo:t[o]}))}),n}return I(t,e),E(t,[{key:"componentDidMount",value:function e(){}},{key:"getQueryVariable",value:function e(t){for(var n,r,o=window.location.toString().split("?")[1].split("&"),a=0;a<o.length;a++){var i=o[a].split("=");if(i[0]==t)return i[1]}return!1}},{key:"renderTextColum",value:function e(t,n){return o.a.createElement("li",{style:k.infoItemBody},o.a.createElement("span",{style:k.infoItemLabel},t,":"),o.a.createElement("span",{style:k.infoItemValue},n&&""!=n?n:"\u2014"))}},{key:"secondsToDhms",value:function e(t){t=Number(t);var n=Math.floor(t/86400),r=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),a=Math.floor(t%60),i,l,c,u;return(n>0?n+"\u5929":"")+(r>0?r+"\u65f6":"")+(o>0?o+"\u5206":"")+(a>0?a+"\u79d2":"")}},{key:"renderProcessName",value:function e(t){var n;return n=g.a.mappedProcessName(t),o.a.createElement("div",{style:k.titleCol},o.a.createElement("span",{style:k.titleText},n))}},{key:"renderRSS",value:function e(t){var n=t/1024;return n=n.toFixed(2)+"MB",o.a.createElement("div",{style:k.titleCol},o.a.createElement("span",{style:k.titleText},n))}},{key:"renderProcessList",value:function e(){var t=this,n=this.state.tableData;return o.a.createElement(m.a,{style:k.cardContainer},o.a.createElement("h3",{style:k.subTitle},"RIMP\u8fdb\u7a0b\u5217\u8868:"),o.a.createElement(c.a,{dataSource:n.list,className:"basic-table",style:k.basicTable,hasBorder:!1},o.a.createElement(c.a.Column,{title:"\u8fdb\u7a0b\u540d\u79f0",dataIndex:"name",width:150,alignHeader:"left",align:"left",cell:function e(n,r,o){return t.renderProcessName(n)}}),o.a.createElement(c.a.Column,{title:"\u8fdb\u7a0bPID",dataIndex:"pid",width:120,alignHeader:"center",align:"center"}),o.a.createElement(c.a.Column,{title:"CPU\u4f7f\u7528\u7387",dataIndex:"cpu",width:85}),o.a.createElement(c.a.Column,{title:"\u5185\u5b58\u4f7f\u7528\u7387",width:150,dataIndex:"mem",alignHeader:"center",align:"center"}),o.a.createElement(c.a.Column,{title:"\u5b9e\u9645\u5185\u5b58\u4f7f\u7528",dataIndex:"rss",width:90,alignHeader:"center",align:"center",cell:this.renderRSS}),o.a.createElement(c.a.Column,{title:"\u8fdb\u884c\u72b6\u6001",width:85,dataIndex:"stat",align:"center"}),o.a.createElement(c.a.Column,{title:"\u5f00\u59cb\u65f6\u95f4",width:85,dataIndex:"startTime",align:"center"})),o.a.createElement("div",{style:k.paginationContainer},o.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage})))}},{key:"rendeEventType",value:function e(t,n,r){return o.a.createElement("div",null,g.a.mappedEventMsg(t))}},{key:"render",value:function e(){return o.a.createElement(m.a,{style:k.cardContainer},o.a.createElement("div",{style:{width:"95%",height:"95%"}},o.a.createElement("hr",null),this.renderDevieInfo(this.state.deviceInfo),o.a.createElement("hr",null),this.renderProcessList()))}}]),t}(r.Component);j.displayName="DeviceDetailInfo",j.propTypes={},j.defaultProps={};var k={cardContainer:{padding:"10px 10px 20px 10px"},editDialog:{display:"inline-block",marginRight:"5px"},loading:{width:"100%"},header:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #999"},title:{fontSize:20,margin:0,paddingBottom:10},subTitle:{fontSize:16,fontWeight:"bold",margin:0,marginTop:"20px"},anchorCard:{marginTop:"10px",marginLeft:"20px",background:"#fff",overflow:"hidden",textOverflow:"ellipsis",borderRadius:"4px",display:"flex"},anchorAvatar:{display:"block"},anchorInfoBody:{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",textAlign:"center",fontSize:"12px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",fontWeight:"bold",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function L(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return(B=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return J});var J=function(e){function t(e){var n;return N(this,t),(n=L(this,U(t).call(this,e))).state={},n}return A(t,e),_(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"RoomList-page"},o.a.createElement(j,null))}}]),t}(r.Component)}}]);