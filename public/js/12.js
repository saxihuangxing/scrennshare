(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1050:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(972),i=n(973),l=n(971),c=n(970),u=n(184),s=n(64),f=n(183),m=n.n(f),p=n(122),d=n(968),g=n(88),y=n(969),h=n(145),b=n(43),v=n(123),E=n(25),x=n(385),T=n(146),C=n(386),w=n(187),S=n(387),P=n(188),O=n(27),D=n(124),j=n(14),k=n(185);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function M(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?z(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return(B=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var A=P.a.Panel,V=w.a.Item,W=s.a.Row,F=s.a.Col,Y=function(e){function t(e){var n;return _(this,t),(n=M(this,U(t).call(this,e))).searchReset=function(){n.field.reset(),n.onEventTextChange()},n.field=new T.a(z(n)),n}return H(t,e),N(t,[{key:"componentDidMount",value:function e(){console.log("search >>> componentDidMount")}},{key:"onEventTextChange",value:function e(){var t=this;this.field.validate(function(e,n){if(e)console.log("Errors in form!!!");else{console.log("searchSubmit=>",n);var r={};r.eventText=n.eventText,r.userName=n.userName,t.props.setEventSearchParam(r)}})}},{key:"render",value:function e(){var t=this.field.init;return a.a.createElement(P.a,{defaultExpandedKeys:["0"]},a.a.createElement(A,{title:"EVENT\u7b5b\u9009"},a.a.createElement(w.a,{field:this.field,labelTextAlign:"left"},a.a.createElement(W,{wrap:!0},a.a.createElement(F,{xxs:"24",l:"10",style:$.formCol},a.a.createElement(V,L({},$.formItemLayout,{label:"\u4e8b\u4ef6\u7c7b\u578b:"}),a.a.createElement(E.a,L({hasClear:!0},t("eventText"),{maxLength:100})))),a.a.createElement(F,{xxs:"24",l:"10",style:$.formCol},a.a.createElement(V,L({},$.formItemLayout,{label:"\u7528\u6237\u540d\u79f0:"}),a.a.createElement(E.a,L({hasClear:!0},t("userName"),{maxLength:100})))),a.a.createElement(F,{xxs:"24",l:"8",style:$.formCol},a.a.createElement(b.a,{onClick:this.onEventTextChange.bind(this),type:"primary",style:{marginLeft:60}},"\u641c\u7d22"),"\xa0\xa0\xa0",a.a.createElement(b.a,{onClick:this.searchReset,type:"primary"},"\u91cd\u7f6e"))))))}}]),t}(r.Component);Y.displayName="RoomSearch",Y.propTypes={},Y.defaultProps={};var $={formCol:{display:"flex",alignItems:"left"},label:{lineHeight:"28px",paddingRight:"10px"},formItemLayout:{labelCol:{fixedSpan:4},wrapperCol:{span:22}}};function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),e}function G(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function ee(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}function te(e,t){return(te=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var ne=s.a.Row,re=s.a.Col,ae=function(e){function t(e){var n;Q(this,t),(n=G(this,Z(t).call(this,e))).fetchUsersListData=function(e){var t=n.state.tableData;if(null!==n.state.meeting&&void 0!==n.state.meeting){var r=n.state.meeting.attendees.attendee;if(null!=r){var a=[];g.a.ganerateListFromTree(r,a,1),t.total=a.length,t.currentPage=e,t.org=a,t.list=g.a.getCurrentPageDataList(a,e,t.pageSize),n.setState({tableData:t})}else t.total=0,t.currentPage=1,t.org=[],t.list=[],n.setState({tableData:t}),console.log("fetch course appprove list failed.",r)}},n.fetchEventListData=function(e){Object(p.d)(n.state.meeting.internalMeetingID,function(t){var r=n.state.tableEventData;if(null!=t){var a=[];g.a.ganerateListFromTree(t,a,1),a.forEach(function(e){e.fakeType=g.a.mappedEventMsg(e.type)}),a.sort(function(e,t){return t.time-e.time}),r.total=a.length,r.currentPage=e,r.org=a,r.filterList=a,r.list=g.a.getCurrentPageDataList(a,e,r.pageSize),n.setState({tableEventData:r})}else r.total=0,r.currentPage=1,r.org=[],r.list=[],n.setState({tableEventData:r}),console.log("fetch course appprove list failed.",t)})},n.onOpen=function(){},n.renderRoomInfo=function(e){return void 0===e||null===e?a.a.createElement("div",null):a.a.createElement("div",null,a.a.createElement("h3",{style:oe.subTitle},"\u623f\u95f4\u8be6\u7ec6\u4fe1\u606f:"),a.a.createElement(ne,{style:oe.anchorCard},a.a.createElement(re,{l:"6"},n.renderTextColum("\u623f\u95f4\u540d\u79f0",e.meetingName),n.renderTextColum("\u4e3b\u6301\u8005\u5bc6\u7801",e.moderatorPW),n.renderTextColum("\u53c2\u4e0e\u8005\u5bc6\u7801",e.attendeePW),n.renderTextColum("\u521b\u5efa\u65f6\u95f4",d.a.formatUtcTime(e.createTime,0))),a.a.createElement(re,{l:"6"},n.renderTextColum("\u8fd0\u884c\u72b6\u6001",n.booleanToStatus(e.running)),n.renderTextColum("\u662f\u5426\u6709\u7528\u6237\u52a0\u5165\u8fc7",n.booleanToText(e.hasUserJoined)),n.renderTextColum("\u5f55\u5236\u72b6\u6001",n.booleanToText(e.recording)),n.renderTextColum("\u662f\u5426\u88ab\u5f3a\u5236\u7ed3\u675f\u8fc7",n.booleanToText(e.hasBeenForciblyEnded))),a.a.createElement(re,{l:"6"},n.renderTextColum("\u4e0a\u884c\u5a92\u4f53\u6d41\u6570",e.videoCount),n.renderTextColum("\u5f00\u59cb\u65f6\u95f4",d.a.formatUtcTime(e.startTime,0)),n.renderTextColum("\u7ed3\u675f\u65f6\u95f4",d.a.formatUtcTime(e.endTime,0)),n.renderTextColum("\u53c2\u4e0e\u4eba\u6570",e.participantCount)),a.a.createElement(re,{l:"6"},n.renderTextColum("\u4eba\u6570\u9650\u5236",n.tranMaxUserLimit(e.maxUsers)),n.renderTextColum("\u4e3b\u6301\u4eba\u6570",e.moderatorCount),n.renderTextColum("\u662f\u5426\u662f\u5b50\u4f1a\u8bae",n.booleanToText(e.isBreakout)))))},n.renderPushMediaState=function(e){return!0===e?a.a.createElement("label",{inverse:!1,status:"default"},"\u662f"):a.a.createElement("label",{inverse:!1,status:"default"},"\u5426")},n.onChangePage=function(e){n.fetchUsersListData(e)},n.onChangeEventPage=function(e){var t=n.state.tableEventData;t.currentPage=e,t.list=g.a.getCurrentPageDataList(t.filterList,e,t.pageSize),n.setState({tableEventData:t})};var r=n.getQueryVariable("meetingId");n.state={};var o=Object(p.j)(r);return n.state.meeting=o,n.state.tableData={org:[],total:0,pageSize:5,currentPage:1,list:[]},n.state.tableEventData={org:[],total:0,pageSize:5,currentPage:1,list:[]},n}return ee(t,e),K(t,[{key:"componentDidMount",value:function e(){this.fetchUsersListData(1),this.fetchEventListData(1)}},{key:"getQueryVariable",value:function e(t){for(var n,r,a=window.location.toString().split("?")[1].split("&"),o=0;o<a.length;o++){var i=a[o].split("=");if(i[0]==t)return i[1]}return!1}},{key:"renderTextColum",value:function e(t,n){return a.a.createElement("li",{style:oe.infoItemBody},a.a.createElement("span",{style:oe.infoItemLabel},t,":"),a.a.createElement("span",{style:oe.infoItemValue},n&&""!=n?n:"\u2014"))}},{key:"booleanToText",value:function e(t){return t?"\u662f":"\u5426"}},{key:"booleanToStatus",value:function e(t){return t?"\u8fd0\u884c\u4e2d":"\u505c\u6b62"}},{key:"tranMaxUserLimit",value:function e(t){return 0==t?"\u65e0\u9650\u5236":t}},{key:"renderUserPermission",value:function e(t){var n;return n=1==t.isPresenter?"\u4e3b\u8bb2":1==t.isSpeaker?"\u53d1\u8a00\u8005":"\u666e\u901a",a.a.createElement("div",{style:oe.titleCol},a.a.createElement("span",{style:oe.titleText},n))}},{key:"setEventSearchParam",value:function e(t){var n=this.state.tableEventData;n.filterList=n.org.filter(function(e){var n=!1,r=!1;return null==t||null==t.eventText||""===t.eventText?n=!0:e.fakeType.indexOf(t.eventText)>-1&&(n=!0),null==t.userName||""===t.userName?r=!0:"string"==typeof e.userName&&e.userName.indexOf(t.userName)>-1&&(r=!0),n&&r}),n.currentPage=1,n.total=n.filterList.length,n.list=g.a.getCurrentPageDataList(n.filterList,n.currentPage,n.pageSize),this.setState({tableEventData:n})}},{key:"renderUsersList",value:function e(){var t=this,n=this.state.tableData;return a.a.createElement(m.a,{style:oe.cardContainer},a.a.createElement("h3",{style:oe.subTitle},"\u7528\u6237\u5217\u8868:"),a.a.createElement(c.a,{dataSource:n.list,className:"basic-table",style:oe.basicTable,hasBorder:!1},a.a.createElement(c.a.Column,{title:"\u7528\u6237\u540d\u79f0",dataIndex:"fullName",width:150,alignHeader:"left",align:"left"}),a.a.createElement(c.a.Column,{title:"\u7528\u6237ID",dataIndex:"userID",width:120,alignHeader:"center",align:"center"}),a.a.createElement(c.a.Column,{title:"\u7528\u6237\u89d2\u8272",dataIndex:"role",width:85}),a.a.createElement(c.a.Column,{title:"\u7528\u6237\u6743\u9650",width:150,alignHeader:"center",align:"center",cell:function e(n,r,a){return t.renderUserPermission(a)}}),a.a.createElement(c.a.Column,{title:"\u662f\u5426\u63a8\u6d41",dataIndex:"hasVideo",width:85,alignHeader:"center",align:"center",cell:this.renderPushMediaState}),a.a.createElement(c.a.Column,{title:"\u767b\u5f55\u7c7b\u578b",width:85,dataIndex:"clientType",align:"center"})),a.a.createElement("div",{style:oe.paginationContainer},a.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangePage})))}},{key:"rendeEventType",value:function e(t,n,r){return a.a.createElement("div",null,g.a.mappedEventMsg(t))}},{key:"rendeEventUserName",value:function e(t,n,r){for(var o=this.state.tableData.org,i="\u65e0",l=0;l<o.length;l++)if(o[l].userID==t){i=o[l].fullName,r.userName=i;break}return a.a.createElement("div",null,i)}},{key:"renderEventList",value:function e(){var t,n=this.state.tableEventData;return a.a.createElement(m.a,{style:oe.cardContainer},a.a.createElement(Y,{setEventSearchParam:this.setEventSearchParam.bind(this)}),a.a.createElement("h3",{style:oe.subTitle},"\u4e8b\u4ef6\u5217\u8868:"),a.a.createElement(c.a,{dataSource:n.list,className:"basic-table",style:oe.basicTable,hasBorder:!1},a.a.createElement(c.a.Column,{title:"\u65f6\u95f4",dataIndex:"time",width:120,alignHeader:"center",align:"center",cell:function e(t,n,r){return Object(y.a)(r.time,0)}}),a.a.createElement(c.a.Column,{title:"\u7528\u6237",dataIndex:"userId",width:120,alignHeader:"center",align:"center",cell:this.rendeEventUserName.bind(this)}),a.a.createElement(c.a.Column,{title:"\u4e8b\u4ef6",dataIndex:"fakeType",width:150,alignHeader:"left",align:"left"})),a.a.createElement("div",{style:oe.paginationContainer},a.a.createElement(i.a,{current:n.currentPage,pageSize:n.pageSize,total:n.total,onChange:this.onChangeEventPage})))}},{key:"render",value:function e(){return a.a.createElement(m.a,{style:oe.cardContainer},a.a.createElement("div",{style:{width:"95%",height:"95%"}},a.a.createElement("hr",null),this.renderRoomInfo(this.state.meeting),a.a.createElement("hr",null),this.renderUsersList(),a.a.createElement("hr",null),this.renderEventList()))}}]),t}(r.Component);ae.displayName="RoomInfo",ae.propTypes={},ae.defaultProps={};var oe={cardContainer:{padding:"10px 10px 20px 10px"},editDialog:{display:"inline-block",marginRight:"5px"},loading:{width:"100%"},header:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #999"},title:{fontSize:20,margin:0,paddingBottom:10},subTitle:{fontSize:16,fontWeight:"bold",margin:0,marginTop:"20px"},anchorCard:{marginTop:"10px",marginLeft:"20px",background:"#fff",overflow:"hidden",textOverflow:"ellipsis",borderRadius:"4px",display:"flex"},anchorAvatar:{display:"block"},anchorInfoBody:{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",textAlign:"center",fontSize:"12px"},infoItemBody:{display:"flex",margin:"11px 0"},infoItemLabel:{color:"#000",fontSize:"14px",fontWeight:"bold",marginRight:"2px",minWidth:"64px"},infoItemValue:{marginLeft:"5px",color:"#333",fontSize:"14px"},infoItemTitle:{float:"left",maxWidth:"240px",padding:"0 20px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},infoItemPrice:{float:"right",width:"100px",textAlign:"right",color:"#fe5c38",fontSize:"20px",marginRight:"10px"},contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t,n){return t&&ce(e.prototype,t),n&&ce(e,n),e}function se(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?fe(e):t}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function pe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}function de(e,t){return(de=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.d(t,"default",function(){return ge});var ge=function(e){function t(e){var n;return le(this,t),(n=se(this,me(t).call(this,e))).state={},n}return pe(t,e),ue(t,[{key:"render",value:function e(){return a.a.createElement("div",{className:"RoomList-page"},a.a.createElement(ae,null))}}]),t}(r.Component)},968:function(e,t,n){"use strict";var r=n(14),a=n.n(r),o={dateFormat:function e(t,n){var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t},formatUtcTime:function e(t,n){void 0===n&&(n=0);var r=null,o="\u2014";if(r=new Date(t)){var i=a()(r.getTime()+6e4*n);o=i?i.format("YYYY-MM-DD HH:mm:ss"):{convertTime:t}+" "+{offset:n}}else o={convertTime:t}+" "+{offset:n};return o},getTimeBeforeDays:function e(t){return t<1?0:new Date((new Date).setHours(0,0,0,0)).getTime()-24*(t-1)*60*60*1e3;var n,r}};t.a=o},969:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(968);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return e?o.a.formatUtcTime(e,0):a.a.createElement("span",{style:l({},s.contentText)},"No Time")}var s={contentText:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}};t.a=u}}]);