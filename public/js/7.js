(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1048:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(775),i=n(778),c=n(774),l=n(773),u=n(162),f=n(60),s=n(161),p=n.n(s),g=n(760),m=n(761),d=n(160),h=n(765),y=n(759);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}function D(e,t){return(D=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var P=f.a.Row,j=f.a.Col,C=function(e){function t(e){var n;return v(this,t),(n=w(this,E(t).call(this,e))).setLoadingVisible=function(e){n.setState({isLoading:e})},n.fetchDeviceInfoListData=function(e){Object(g.c)(function(t){var r=n.state.tableData;if(null!=t){var o=[];d.a.ganerateListFromTree(t,o,1),r.total=o.length,r.currentPage=e,r.org=t,r.list=d.a.getCurrentPageDataList(o,e,r.pageSize),n.setState({tableData:r,isLoading:!1})}else r.total=0,r.currentPage=1,r.org=[],r.list=[],n.setState({tableData:r,isLoading:!1}),console.log("fetch course appprove list failed.",t)})},n.onChangePage=function(e){n.fetchDeviceInfoListData(e)},n.renderOperations=function(e,t,n){return o.a.createElement("div",{className:"operation-table-operation",style:T.operationTable},o.a.createElement(y.a,{to:"/DeviceDetailInfo?deviceName="+n.hostname,className:T.action},"\u67e5\u770b\u8be6\u60c5"))},n.state={isLoading:!1},n.state.tableData={org:[],total:0,pageSize:5,currentPage:1,list:[]},n}return I(t,e),x(t,[{key:"componentDidMount",value:function e(){var t=this;this.setLoadingVisible(!0),this.fetchDeviceInfoListData(this.state.tableData.currentPage);var n=function e(){t.fetchDeviceInfoListData(t.state.tableData.currentPage)};this.interval=setInterval(n,3e3)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.interval)}},{key:"renderPackgeReceive",value:function e(t,n,r){if(!(r.statsMap.length<=0)){var a=r.statsMap[r.statsMap.length-1],i="-";for(var c in a)if(a.hasOwnProperty(c)){var l=a[c];if("RTCInboundRTPStreamStats"===l.__type__){i=l.bytesReceived;break}}return o.a.createElement("div",null,i)}console.error("hxtest renderPackgeReceive record.statsMap.length = ".concat(r.statsMap.length))}},{key:"renderDeviceList",value:function e(){var t=this.state,n=t.tableData,r=t.isLoading;return o.a.createElement(p.a,{style:T.cardContainer},o.a.createElement("h3",{style:T.subTitle},"\u8bbe\u5907\u5217\u8868:"),o.a.createElement(l.a,{dataSource:n.list,className:"basic-table",style:T.basicTable,hasBorder:!1,loading:r},o.a.createElement(l.a.Column,{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"hostname",width:150,alignHeader:"left",align:"left"}),o.a.createElement(l.a.Column,{title:"CPU\u4f7f\u7528\u7387",dataIndex:"cpuUsage",width:150,alignHeader:"left",align:"left"}),o.a.createElement(l.a.Column,{title:"\u603b\u5185\u5b58",dataIndex:"totalMem",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u7a7a\u95f2\u5185\u5b58",dataIndex:"freeMem",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u5185\u5b58\u4f7f\u7528\u7387",dataIndex:"memUsage",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u786c\u76d8\u4f7f\u7528\u7387",dataIndex:"diskUsage",width:85}),o.a.createElement(l.a.Column,{title:"\u64cd\u4f5c",dataIndex:"operation",width:150,align:"center",cell:this.renderOperations})),o.a.createElement("div",{style:T.paginationContainer},o.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage})))}},{key:"render",value:function e(){return o.a.createElement(p.a,{style:T.cardContainer},o.a.createElement("div",{style:{width:"95%",height:"95%"}},o.a.createElement("hr",null),this.renderDeviceList()))}}]),t}(r.Component);C.displayName="WebrtcMediaInfo",C.propTypes={},C.defaultProps={};var T={cardContainer:{padding:"10px 10px 20px 10px"},editDialog:{display:"inline-block",marginRight:"5px"},loading:{width:"100%"},header:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #999"},title:{fontSize:20,margin:0,paddingBottom:10},subTitle:{fontSize:16,fontWeight:"bold",margin:0,marginTop:"20px"},anchorCard:{marginTop:"10px",marginLeft:"20px",background:"#fff",overflow:"hidden",textOverflow:"ellipsis",borderRadius:"4px",display:"flex"},anchorAvatar:{display:"block"},anchorInfoBody:{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",textAlign:"center",fontSize:"12px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",fontWeight:"bold",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function R(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return(J=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return U});var U=function(e){function t(e){var n;return M(this,t),(n=R(this,z(t).call(this,e))).state={},n}return H(t,e),k(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"MediaList-page"},o.a.createElement(C,null))}}]),t}(r.Component)},760:function(e,t,n){"use strict";n.d(t,"i",function(){return g}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return h}),n.d(t,"c",function(){return y}),n.d(t,"a",function(){return b}),n.d(t,"g",function(){return v}),n.d(t,"h",function(){return x}),n.d(t,"b",function(){return w});var r=n(42),o=n.n(r),a=n(129),i=n.n(a),c=n(766),l=n.n(c),u=n(160);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var s=[],p=[],g=function e(t){o.a.get("/rimpmanage/roomList").then(function(e){var n=e.data;"SUCCESS"===(n=n.response).returncode?(t(n),"object"==f(n.meetings.meeting)&&(s=n.meetings.meeting.constructor!=Array?[n.meetings.meeting]:s)):(s=[],t(null)),sessionStorage.setItem("meetingsData",JSON.stringify(s))}).catch(function(e){console.log("fetch course appprove list error.",e),t(null)})},m=function e(t,n){o.a.get("/rimpmanage/eventList?meetId="+t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},d=function e(t,n){o.a.post("/rimpmanage/mediaInfo/getMediaInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},h=function e(t,n){o.a.post("/rimpmanage/mediaInfo/mediaServers",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},y=function e(t){o.a.get("/rimpmanage/DeviceInfo").then(function(e){var n=e.data;t(n),p=n,sessionStorage.setItem("DeviceInfo",JSON.stringify(n))}).catch(function(e){console.log("getDeviceInfosfromServer error.",e),t(null)})},b=function e(t){o.a.get("/rimpmanage/countInfo").then(function(e){var n=e.data;t(n)}).catch(function(e){console.log("getCountInfosfromServer error.",e),t(null)})},v=function e(t){var n=null,r=[];if(s.length<=0){var o=sessionStorage.getItem("meetingsData");r=JSON.parse(o)}else r=s;return r.forEach(function(e){e.internalMeetingID==t&&(n=e)}),n},S=function e(t,n){var r=null,o=[];if(s.length<=0){var a=sessionStorage.getItem("meetingsData");o=JSON.parse(a)}else o=s;return o.forEach(function(e){var o;e.voiceBridge.toString()===t&&u.a.tranObjToArr(e.attendees.attendee).forEach(function(e){e.userID===n&&(r=e.fullName)})}),r},x=function e(t){var n=[];if(s.length<=0){var r=sessionStorage.getItem("meetingsData");n=JSON.parse(r)}else n=s;var o="";return n.forEach(function(e){e.voiceBridge.toString()===t&&(o=e.meetingName)}),o},w=function e(t){var n=null,r=[];if(p.length<=0){var o=sessionStorage.getItem("deviceInfo");r=JSON.parse(o)}else r=p;return null==r?null:(r.forEach(function(e){e.hostname===t&&(n=e)}),n)},O=g},761:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a}};t.a=a},765:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(761);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return e?a.a.formatUtcTime(e,0):o.a.createElement("span",{style:c({},f.contentText)},"No Time")}var f={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=u}}]);