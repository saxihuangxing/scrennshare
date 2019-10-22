commonUtils = {
    transKBToG : (value) =>{
        var valueForG = value/1024/1024;
        return valueForG.toFixed(2) + "G";
    },

    tranObjToArr: (obj) =>{
        let res = obj;
        if(typeof(obj) == 'object') {
            if (obj.constructor != Array){
                res = [obj];
            }
        }
        return res;
    },

    getSpecialValueInObjArr: (objArr,key,value) =>{
        if(objArr === null || objArr === undefined || objArr.constructor !== Array || objArr.length <= 0 || !(key in objArr[0])){
            return undefined;
        }
        let i = 0;
        for(;i<objArr.length;i++){
            if(objArr[i][key] === value){
                return objArr[i];
            }
        }
        return undefined;
    },

    getMaxValueInObjArr: (objArr,key) =>{
        if(objArr === null || objArr === undefined || objArr.constructor !== Array || objArr.length <= 0 || !(key in objArr[0])){
            return -1;
        }
        let values = objArr.map((obj)=>{
            return obj[key];
        })
        return Math.max(...values);
    },

    getMaxValueInSubArrObj: (objArr,key1,key2) =>{
        if(objArr === null || objArr === undefined || objArr.constructor !== Array || objArr.length <= 0 || !(key1 in objArr[0]) ){
            return -1;
        }

        if( objArr[0][key1].length <= 0 || !(key2 in objArr[0][key1][0])){
            return -1;
        }

        let values = objArr.map((obj)=>{
           let subObjArr =   obj[key1];
            return subObjArr[0][key2];
        })
        return Math.max(...values);
    }
    ,
    getLocalIp: () =>{
        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    },
    getQueryByTimeRange: (timeRange)=>{
        let query = {};
        if(timeRange === undefined){
            return query;
        }
        if (typeof (timeRange.start) == "number" && typeof (timeRange.end) == "number") {
            query.time = {$gte: timeRange.start, $lte: timeRange.end};
        } else if (typeof (timeRange.start) == "number" && typeof (timeRange.end) != "number") {
            query.time = {$gte: timeRange.start};
        } else if (typeof (timeRange.start) != "number" && typeof (timeRange.end) == "number") {
            query.time = {$lte: timeRange.end};
        }
        return query;
    },

    getTimeRange: (timeRange)=>{
        let newTimeRange = {startTime:0,endTime:Number.MAX_VALUE};
        if(timeRange === undefined){
            return newTimeRange;
        }
        if(typeof (timeRange.start) == "number"){
            newTimeRange.startTime = timeRange.start;
        }
        if(typeof (timeRange.end) == "number"){
            newTimeRange.endTime = timeRange.start;
        }
        return newTimeRange;
    },

    mappedEventMsg :  (name) => { switch (name) {
        case "MeetingCreatedEvtMsg": return "房间已创建";
        case "MeetingDestroyedEvtMsg": return "房间已结束";
        case "RecordingStatusChangedEvtMsg": return "录制状态改变";
        case "ScreenshareRtmpBroadcastStartedEvtMsg": return "开始分享屏幕";
        case "ScreenshareRtmpBroadcastStoppedEvtMsg": return "结束分享屏幕";
        case "SetCurrentPresentationEvtMsg": return "设置主讲";
        case "UserJoinedMeetingEvtMsg": return "用户加入";
        case "UserLeftMeetingEvtMsg": return "用户离开";
        case "UserJoinedVoiceConfToClientEvtMsg": return "开启音频";
        case "UserLeftVoiceConfToClientEvtMsg": return "结束音频";
        case "UserBroadcastCamStartedEvtMsg": return "开启视频";
        case "UserBroadcastCamStoppedEvtMsg": return "结束视频";
        case "PresenterAssignedEvtMsg": return "主讲被指定";
        case "PresenterUnassignedEvtMsg": return "主进被取消";
        case "UserEmojiChangedEvtMsg": return "user-emoji-changed";
        case "GroupChatMessageBroadcastEvtMsg": return "发送公共消息";
        case "SendPrivateMessageEvtMsg": return "发送私有消息";
        case "archive_started": return "打包回放开始";
        case "archive_ended": return "打包回话结束";
        case "sanity_started": return "rap-sanity-started";
        case "sanity_ended": return "rap-sanity-ended";
        case "post_archive_started": return "rap-post-archive-started";
        case "post_archive_ended": return "rap-post-archive-ended";
        case "process_started": return "rap-process-started";
        case "process_ended": return "rap-process-ended";
        case "post_process_started": return "rap-post-process-started";
        case "post_process_ended": return "rap-post-process-ended";
        case "publish_started": return "rap-publish-started";
        case "publish_ended": return "rap-publish-ended";
        case "published": return "rap-published";
        case "unpublished": return "rap-unpublished";
        case "deleted": return "回放被删除";
        case "PublishedRecordingSysMsg": return "rap-published";
        case "UnpublishedRecordingSysMsg": return "rap-unpublished";
        case "DeletedRecordingSysMsg": return "rap-deleted";
        case "post_publish_started": return "rap-post-publish-started";
        case "post_publish_ended": return "rap-post-publish-ended";
        default: return name;
    } },
}

module.exports =  commonUtils;
