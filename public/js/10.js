(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1078:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(975),i=n(976),c=n(974),l=n(973),u=n(184),s=n.n(u),f=n(969),p=n(122),g=n(88),m=n(972),y=n(970);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function O(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?j(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var S=function(e){function t(e){var n;return d(this,t),(n=O(this,w(t).call(this,e))).fetchMediaInfoListData=function(e){var t="newest",r={timeRange:{start:"newest"}};Object(p.h)(r,function(t){n.updateMediaData(t,e)})},n.fetchMeetingsListData=function(e){var t=j(n),r=n.state.tableData;t.setLoadingVisible(!0),Object(p.f)(function(t){if(null!=t&&t.length>0){var o=[];g.a.ganerateListFromTree(t,o,1),o.sort(function(e,t){return t.createTime-e.createTime}),r.total=o.length,r.currentPage=e,r.org=t;var a=(e-1)*r.pageSize,i=r.pageSize*e,c=[];if(o.length>a)for(var l=a;l<i&&void 0!==o[l];l++)c.push(o[l]);r.list=c,n.setState({tableData:r,isLoading:!1})}else r.total=0,r.currentPage=1,r.org=[],r.list=[],n.setState({tableData:r,isLoading:!1}),console.log("fetch course appprove list failed.",t)})},n.renderCourseSeriesName=function(e,t,n){if(!n||n<=1)return o.a.createElement("div",{style:T.titleCol},o.a.createElement("span",{style:T.titleText},t.meetName))},n.renderOperations=function(e,t,n){return o.a.createElement("div",{className:"operation-table-operation",style:T.operationTable},o.a.createElement(f.a,{to:"/HistroyRoomInfo?meetingId="+n.meetId,className:T.action},"\u67e5\u770b\u8be6\u60c5"))},n.setLoadingVisible=function(e){n.setState({isLoading:e})},n.onChangePage=function(e){n.fetchMeetingsListData(e)},n.state={tableData:{org:[],total:0,pageSize:8,currentPage:1,list:[]},isLoading:!1},n}return x(t,e),v(t,[{key:"componentDidMount",value:function e(){}},{key:"componentWillMount",value:function e(){this.fetchMeetingsListData(1)}},{key:"render",value:function e(){var t=this.state,n=t.tableData,r=t.isLoading;return o.a.createElement("div",{className:"operation-table"},o.a.createElement(s.a,{style:T.cardContainer},o.a.createElement(l.a,{dataSource:n.list,loading:r,className:"basic-table",style:T.basicTable,hasBorder:!1},o.a.createElement(l.a.Column,{title:"\u623f\u95f4\u540d\u79f0",dataIndex:"meetName",width:200,alignHeader:"left",align:"center"}),o.a.createElement(l.a.Column,{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"createTime",width:120,alignHeader:"center",align:"center",cell:function e(t,n,r){return Object(m.a)(r.createTime,0)}}),o.a.createElement(l.a.Column,{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endTime",width:150,alignHeader:"center",align:"center",cell:function e(t,n,r){return Object(m.a)(r.endTime,0)}}),o.a.createElement(l.a.Column,{title:"\u64cd\u4f5c",dataIndex:"operation",width:150,align:"center",cell:this.renderOperations})),o.a.createElement("div",{style:T.paginationContainer},o.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage}))))}}]),t}(r.Component);S.displayName="RoomListInfo",S.propTypes={},S.defaultProps={};var T={cardContainer:{padding:"10px 10px 20px 10px"},titleCol:{display:"flex",flexDirection:"row"},titleText:{marginLeft:"10px",lineHeight:"20px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},paginationContainer:{textAlign:"right",paddingTop:"26px"}};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return(N=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return k});var k=function(e){function t(e){var n;return D(this,t),(n=_(this,I(t).call(this,e))).state={},n}return R(t,e),M(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"RoomList-page"},o.a.createElement(S,null))}}]),t}(r.Component)},970:function(e,t,n){"use strict";var r=n(14),o=n.n(r),a={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},formatUtcTime:function e(t,n){void 0===n&&(n=0);var r=null,a="\u2014";if(r=new Date(t)){var i=o()(r.getTime()+6e4*n);a=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else a={convertTime:t}+" "+{offset:n};return a},getTimeBeforeDays:function e(t){return t<1?0:new Date((new Date).setHours(0,0,0,0)).getTime()-24*(t-1)*60*60*1e3;var n,r},ConvertSectoDay:function e(t){var n="",r=Math.floor(t/86400);t-=3600*r*24;var o=Math.floor(t/3600);t-=3600*o;var a=Math.floor(t/60);return t-=60*a,r>0&&(n+=r+"\u5929 "),o>0&&(n+=o+"\u5c0f\u65f6"),n+=a+"\u5206",n+=t+"\u79d2"}};t.a=a},972:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(970);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return e?a.a.formatUtcTime(e,0):o.a.createElement("span",{style:c({},s.contentText)},"No Time")}var s={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=u}}]);