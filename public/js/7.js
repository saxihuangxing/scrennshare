(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1051:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(771),i=n(772),c=n(770),l=n(769),s=n(162),u=n(60),f=n(161),g=n.n(f),p=n(760),m=n(761),d=n(160),h=n(763),y=n(759);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function x(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}function D(e,t){return(D=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var P=u.a.Row,j=u.a.Col,C=function(e){function t(e){var n;return b(this,t),(n=x(this,I(t).call(this,e))).setLoadingVisible=function(e){n.setState({isLoading:e})},n.fetchDeviceInfoListData=function(e){Object(p.c)(function(t){var r=n.state.tableData;if(null!=t){var o=[];d.a.ganerateListFromTree(t,o,1),r.total=o.length,r.currentPage=e,r.org=t,r.list=d.a.getCurrentPageDataList(o,e,r.pageSize),n.setState({tableData:r,isLoading:!1})}else r.total=0,r.currentPage=1,r.org=[],r.list=[],n.setState({tableData:r,isLoading:!1}),console.log("fetch course appprove list failed.",t)})},n.onChangePage=function(e){n.fetchDeviceInfoListData(e)},n.renderOperations=function(e,t,n){return o.a.createElement("div",{className:"operation-table-operation",style:T.operationTable},o.a.createElement(y.a,{to:"/DeviceDetailInfo?deviceName="+n.hostname,className:T.action},"\u67e5\u770b\u8be6\u60c5"))},n.state={isLoading:!1},n.state.tableData={org:[],total:0,pageSize:5,currentPage:1,list:[]},n}return E(t,e),w(t,[{key:"componentDidMount",value:function e(){var t=this;this.setLoadingVisible(!0),this.fetchDeviceInfoListData(this.state.tableData.currentPage);var n=function e(){t.fetchDeviceInfoListData(t.state.tableData.currentPage)};this.interval=setInterval(n,3e3)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.interval)}},{key:"renderPackgeReceive",value:function e(t,n,r){if(!(r.statsMap.length<=0)){var a=r.statsMap[r.statsMap.length-1],i="-";for(var c in a)if(a.hasOwnProperty(c)){var l=a[c];if("RTCInboundRTPStreamStats"===l.__type__){i=l.bytesReceived;break}}return o.a.createElement("div",null,i)}console.error("hxtest renderPackgeReceive record.statsMap.length = ".concat(r.statsMap.length))}},{key:"renderDeviceList",value:function e(){var t=this.state,n=t.tableData,r=t.isLoading;return o.a.createElement(g.a,{style:T.cardContainer},o.a.createElement("h3",{style:T.subTitle},"\u8bbe\u5907\u5217\u8868:"),o.a.createElement(l.a,{dataSource:n.list,className:"basic-table",style:T.basicTable,hasBorder:!1,loading:r},o.a.createElement(l.a.Column,{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"hostname",width:150,alignHeader:"left",align:"left"}),o.a.createElement(l.a.Column,{title:"CPU\u4f7f\u7528\u7387",dataIndex:"cpuUsage",width:150,alignHeader:"left",align:"left"}),o.a.createElement(l.a.Column,{title:"\u603b\u5185\u5b58",dataIndex:"totalMem",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u7a7a\u95f2\u5185\u5b58",dataIndex:"freeMem",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u5185\u5b58\u4f7f\u7528\u7387",dataIndex:"memUsage",width:120,alignHeader:"center",align:"center"}),o.a.createElement(l.a.Column,{title:"\u786c\u76d8\u4f7f\u7528\u7387",dataIndex:"diskUsage",width:85}),o.a.createElement(l.a.Column,{title:"\u64cd\u4f5c",dataIndex:"operation",width:150,align:"center",cell:this.renderOperations})),o.a.createElement("div",{style:T.paginationContainer},o.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage})))}},{key:"render",value:function e(){return o.a.createElement(g.a,{style:T.cardContainer},o.a.createElement("div",{style:{width:"95%",height:"95%"}},o.a.createElement("hr",null),this.renderDeviceList()))}}]),t}(r.Component);C.displayName="WebrtcMediaInfo",C.propTypes={},C.defaultProps={};var T={cardContainer:{padding:"10px 10px 20px 10px"},editDialog:{display:"inline-block",marginRight:"5px"},loading:{width:"100%"},header:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #999"},title:{fontSize:20,margin:0,paddingBottom:10},subTitle:{fontSize:16,fontWeight:"bold",margin:0,marginTop:"20px"},anchorCard:{marginTop:"10px",marginLeft:"20px",background:"#fff",overflow:"hidden",textOverflow:"ellipsis",borderRadius:"4px",display:"flex"},anchorAvatar:{display:"block"},anchorInfoBody:{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",textAlign:"center",fontSize:"12px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",fontWeight:"bold",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function k(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return(J=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return B});var B=function(e){function t(e){var n;return M(this,t),(n=k(this,z(t).call(this,e))).state={},n}return H(t,e),_(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"MediaList-page"},o.a.createElement(C,null))}}]),t}(r.Component)},760:function(e,t,n){"use strict";n.d(t,"k",function(){return m}),n.d(t,"f",function(){return d}),n.d(t,"d",function(){return h}),n.d(t,"g",function(){return y}),n.d(t,"h",function(){return b}),n.d(t,"c",function(){return S}),n.d(t,"a",function(){return w}),n.d(t,"l",function(){return x}),n.d(t,"e",function(){return O}),n.d(t,"i",function(){return I}),n.d(t,"j",function(){return D}),n.d(t,"b",function(){return P});var r=n(42),o=n.n(r),a=n(129),i=n.n(a),c=n(764),l=n.n(c),s=n(160);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var f=[],g=[],p=[],m=function e(t){o.a.get("/rimpmanage/roomList").then(function(e){var n=e.data;"SUCCESS"===(n=n.response).returncode?(t(n),"object"==u(n.meetings.meeting)&&(f=n.meetings.meeting.constructor!=Array?[n.meetings.meeting]:f)):(f=[],t(null)),sessionStorage.setItem("meetingsData",JSON.stringify(f))}).catch(function(e){console.log("fetch course appprove list error.",e),t(null)})},d=function e(t){o.a.get("/rimpmanage/roomList/historyRoomList").then(function(e){var n=e.data;g=n,t(n),sessionStorage.setItem("historyMeetings",JSON.stringify(g))}).catch(function(e){console.log("getHistoryMeetingsfromServer list error.",e),t(null)})},h=function e(t,n){o.a.get("/rimpmanage/eventList?meetId="+t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},y=function e(t,n){o.a.post("/rimpmanage/mediaInfo/getMediaInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},v=function e(t){return new Promise(function(e,n){o.a.post("/rimpmanage/DeviceInfo/processesRestartInfo",t).then(function(t){var n=t.data;e(n)}).catch(function(e){console.log("getProcessRestartInfo error.",e),n(e)})})},b=function e(t,n){o.a.post("/rimpmanage/mediaInfo/mediaServers",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},S=function e(t){o.a.get("/rimpmanage/DeviceInfo").then(function(e){var n=e.data;t(n),p=n,sessionStorage.setItem("DeviceInfo",JSON.stringify(n))}).catch(function(e){console.log("getDeviceInfosfromServer error.",e),t(null)})},w=function e(t,n){o.a.post("/rimpmanage/countInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getCountInfosfromServer error.",e),n(null)})},x=function e(t,n){o.a.post("/rimpmanage/countInfo/processRestartEvent",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("geProcessRestartEvent error.",e),n(null)})},O=function e(t){var n=null,r=[];if(g.length<=0){var o=sessionStorage.getItem("historyMeetings");r=JSON.parse(o)}else r=g;return r.forEach(function(e){e.meetId==t&&(n=e)}),n},I=function e(t){var n=null,r=[];if(f.length<=0){var o=sessionStorage.getItem("meetingsData");r=JSON.parse(o)}else r=f;return r.forEach(function(e){e.internalMeetingID==t&&(n=e)}),n},E=function e(t,n){var r=null,o=[];if(f.length<=0){var a=sessionStorage.getItem("meetingsData");o=JSON.parse(a)}else o=f;return o.forEach(function(e){var o;e.voiceBridge.toString()===t&&s.a.tranObjToArr(e.attendees.attendee).forEach(function(e){e.userID===n&&(r=e.fullName)})}),r},D=function e(t){var n=[];if(f.length<=0){var r=sessionStorage.getItem("meetingsData");n=JSON.parse(r)}else n=f;var o="";return n.forEach(function(e){e.voiceBridge.toString()===t&&(o=e.meetingName)}),o},P=function e(t){var n=null,r=[];if(p.length<=0){var o=sessionStorage.getItem("deviceInfo");r=JSON.parse(o)}else r=p;return null==r?null:(r.forEach(function(e){e.hostname===t&&(n=e)}),n)},j=m},761:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){void 0===n&&(n=0);var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a},getTimeBeforeDays:function e(t){return t<1?0:new Date((new Date).setHours(0,0,0,0)).getTime()-24*(t-1)*60*60*1e3;var n,r}};t.a=a},763:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(761);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return e?a.a.formatUtcTime(e,0):o.a.createElement("span",{style:c({},u.contentText)},"No Time")}var u={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=s}}]);