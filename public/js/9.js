(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1049:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(771),i=n(772),c=n(770),u=n(769),s=n(161),l=n.n(s),f=n(759),g=n(760),p=n(160),m=n(763),d=n(761);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?w(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function I(e,t){return(I=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var j=function(e){function t(e){var n;return b(this,t),(n=S(this,O(t).call(this,e))).fetchMediaInfoListData=function(e){var t="newest",r={timeRange:{start:"newest"}};Object(g.g)(r,function(t){n.updateMediaData(t,e)})},n.fetchMeetingsListData=function(e){var t=w(n),r=n.state.tableData;t.setLoadingVisible(!0),Object(g.f)(function(t){if(null!=t&&t.length>0){var o=[];p.a.ganerateListFromTree(t,o,1),r.total=o.length,r.currentPage=e,r.org=t;var a=(e-1)*r.pageSize,i=r.pageSize*e,c=[];if(o.length>a)for(var u=a;u<i&&void 0!==o[u];u++)c.push(o[u]);r.list=c,n.setState({tableData:r,isLoading:!1})}else r.total=0,r.currentPage=1,r.org=[],r.list=[],n.setState({tableData:r,isLoading:!1}),console.log("fetch course appprove list failed.",t)})},n.renderCourseSeriesName=function(e,t,n){if(!n||n<=1)return o.a.createElement("div",{style:D.titleCol},o.a.createElement("span",{style:D.titleText},t.meetName))},n.renderOperations=function(e,t,n){return o.a.createElement("div",{className:"operation-table-operation",style:D.operationTable},o.a.createElement(f.a,{to:"/HistroyRoomInfo?meetingId="+n.meetId,className:D.action},"\u67e5\u770b\u8be6\u60c5"))},n.setLoadingVisible=function(e){n.setState({isLoading:e})},n.onChangePage=function(e){n.fetchMeetingsListData(e)},n.state={tableData:{org:[],total:0,pageSize:8,currentPage:1,list:[]},isLoading:!1},n}return E(t,e),h(t,[{key:"componentDidMount",value:function e(){}},{key:"componentWillMount",value:function e(){this.fetchMeetingsListData(1)}},{key:"render",value:function e(){var t=this.state,n=t.tableData,r=t.isLoading;return o.a.createElement("div",{className:"operation-table"},o.a.createElement(l.a,{style:D.cardContainer},o.a.createElement(u.a,{dataSource:n.list,loading:r,className:"basic-table",style:D.basicTable,hasBorder:!1},o.a.createElement(u.a.Column,{title:"\u623f\u95f4\u540d\u79f0",dataIndex:"meetName",width:200,alignHeader:"left",align:"center"}),o.a.createElement(u.a.Column,{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"createTime",width:120,alignHeader:"center",align:"center",cell:function e(t,n,r){return Object(m.a)(r.createTime,0)}}),o.a.createElement(u.a.Column,{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endTime",width:150,alignHeader:"center",align:"center",cell:function e(t,n,r){return Object(m.a)(r.endTime,0)}}),o.a.createElement(u.a.Column,{title:"\u64cd\u4f5c",dataIndex:"operation",width:150,align:"center",cell:this.renderOperations})),o.a.createElement("div",{style:D.paginationContainer},o.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage}))))}}]),t}(r.Component);j.displayName="RoomListInfo",j.propTypes={},j.defaultProps={};var D={cardContainer:{padding:"10px 10px 20px 10px"},titleCol:{display:"flex",flexDirection:"row"},titleText:{marginLeft:"10px",lineHeight:"20px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},paginationContainer:{textAlign:"right",paddingTop:"26px"}};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),e}function M(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return k});var k=function(e){function t(e){var n;return P(this,t),(n=M(this,L(t).call(this,e))).state={},n}return R(t,e),C(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"RoomList-page"},o.a.createElement(j,null))}}]),t}(r.Component)},760:function(e,t,n){"use strict";n.d(t,"k",function(){return m}),n.d(t,"f",function(){return d}),n.d(t,"d",function(){return y}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return h}),n.d(t,"c",function(){return S}),n.d(t,"a",function(){return O}),n.d(t,"l",function(){return w}),n.d(t,"e",function(){return E}),n.d(t,"i",function(){return I}),n.d(t,"j",function(){return D}),n.d(t,"b",function(){return x});var r=n(42),o=n.n(r),a=n(129),i=n.n(a),c=n(764),u=n.n(c),s=n(160);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var f=[],g=[],p=[],m=function e(t){o.a.get("/rimpmanage/roomList").then(function(e){var n=e.data;"SUCCESS"===(n=n.response).returncode?(t(n),"object"==l(n.meetings.meeting)&&(f=n.meetings.meeting.constructor!=Array?[n.meetings.meeting]:f)):(f=[],t(null)),sessionStorage.setItem("meetingsData",JSON.stringify(f))}).catch(function(e){console.log("fetch course appprove list error.",e),t(null)})},d=function e(t){o.a.get("/rimpmanage/roomList/historyRoomList").then(function(e){var n=e.data;g=n,t(n),sessionStorage.setItem("historyMeetings",JSON.stringify(g))}).catch(function(e){console.log("getHistoryMeetingsfromServer list error.",e),t(null)})},y=function e(t,n){o.a.get("/rimpmanage/eventList?meetId="+t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},b=function e(t,n){o.a.post("/rimpmanage/mediaInfo/getMediaInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},v=function e(t){return new Promise(function(e,n){o.a.post("/rimpmanage/DeviceInfo/processesRestartInfo",t).then(function(t){var n=t.data;e(n)}).catch(function(e){console.log("getProcessRestartInfo error.",e),n(e)})})},h=function e(t,n){o.a.post("/rimpmanage/mediaInfo/mediaServers",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getEventsfromServer error.",e),n(null)})},S=function e(t){o.a.get("/rimpmanage/DeviceInfo").then(function(e){var n=e.data;t(n),p=n,sessionStorage.setItem("DeviceInfo",JSON.stringify(n))}).catch(function(e){console.log("getDeviceInfosfromServer error.",e),t(null)})},O=function e(t,n){o.a.post("/rimpmanage/countInfo",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("getCountInfosfromServer error.",e),n(null)})},w=function e(t,n){o.a.post("/rimpmanage/countInfo/processRestartEvent",t).then(function(e){var t=e.data;n(t)}).catch(function(e){console.log("geProcessRestartEvent error.",e),n(null)})},E=function e(t){var n=null,r=[];if(g.length<=0){var o=sessionStorage.getItem("historyMeetings");r=JSON.parse(o)}else r=g;return r.forEach(function(e){e.meetId==t&&(n=e)}),n},I=function e(t){var n=null,r=[];if(f.length<=0){var o=sessionStorage.getItem("meetingsData");r=JSON.parse(o)}else r=f;return r.forEach(function(e){e.internalMeetingID==t&&(n=e)}),n},j=function e(t,n){var r=null,o=[];if(f.length<=0){var a=sessionStorage.getItem("meetingsData");o=JSON.parse(a)}else o=f;return o.forEach(function(e){var o;e.voiceBridge.toString()===t&&s.a.tranObjToArr(e.attendees.attendee).forEach(function(e){e.userID===n&&(r=e.fullName)})}),r},D=function e(t){var n=[];if(f.length<=0){var r=sessionStorage.getItem("meetingsData");n=JSON.parse(r)}else n=f;var o="";return n.forEach(function(e){e.voiceBridge.toString()===t&&(o=e.meetingName)}),o},x=function e(t){var n=null,r=[];if(p.length<=0){var o=sessionStorage.getItem("deviceInfo");r=JSON.parse(o)}else r=p;return null==r?null:(r.forEach(function(e){e.hostname===t&&(n=e)}),n)},P=m},761:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){void 0===n&&(n=0);var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a},getTimeBeforeDays:function e(t){return t<1?0:new Date((new Date).setHours(0,0,0,0)).getTime()-24*(t-1)*60*60*1e3;var n,r}};t.a=a},763:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(761);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return e?a.a.formatUtcTime(e,0):o.a.createElement("span",{style:c({},l.contentText)},"No Time")}var l={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=s}}]);