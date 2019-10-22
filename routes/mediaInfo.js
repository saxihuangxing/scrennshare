var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
let config = require("../config/config");
var debug = require('debug')('rimp:server');
var CommonUtil = require("../utils/commonUtil");
var dbManage = require("../dbmange/manage");
let  mediaInfos = [];
var roomList = require('./roomList');
var serverInfo = require('../utils/serverInfo');
const mediaStatusDb = require("../dbmange/operator")('mediaStatus');
/* GET users listing. */

const updateMediaInfo = async (mediaInfo) => {
    mediaInfo = JSON.parse(mediaInfo);
    if(roomList.roomsInfo != undefined){
        const roomsInfo = roomList.roomsInfo;
        for(let i = 0;i<roomsInfo.length;i++){
            if (roomsInfo[i].voiceBridge.toString() === mediaInfo.voiceBridge) {
                mediaInfo.meetingName = roomsInfo[i].meetingName;
                let users = CommonUtil.tranObjToArr(roomsInfo[i].attendees.attendee);
                for(let j = 0;j< users.length;j++) {
                    if (users[j].userID === mediaInfo.userId) {
                        mediaInfo.userName = users[j].fullName;
                    }

                    if (users[j].userID === mediaInfo.selfUserId) {
                        mediaInfo.selfUserName = users[j].fullName;
                    }
                }
                break;
            }
        }
    }



    for(let i = 0;i<mediaInfos.length;i++ ){
        if(mediaInfos[i].voiceBridge === mediaInfo.voiceBridge
            && mediaInfos[i].userId === mediaInfo.userId
            && mediaInfos[i].mediaId === mediaInfo.mediaId
            && mediaInfos[i].mediaType === mediaInfo.mediaType
        ){
            Object.assign(mediaInfos[i],mediaInfo);
            debug(`mediaInfos report update  mediaInfo map for user ${mediaInfos[i].userId}`);
            saveMediaStats(mediaInfo);
            return;
        }
    }

    debug("mediaInfos report push new mediaInfo");
    saveMediaStats(mediaInfo);
    mediaInfos.push(mediaInfo);
}

async  function saveMediaStats(mediaInfo){
    if(mediaInfo.saveTime !== undefined && (Date.now() - mediaInfo.saveTime) < config.dbSaveInterval.mediaStatsDb){
        return;
    }
    let roomId =  serverInfo.getMeetingIdByVoiceBridge(mediaInfo.voiceBridge);
    let param = {roomId,"userId": mediaInfo.userId,"selfUserId": mediaInfo.selfUserId,"mediaId":mediaInfo.mediaId};
    let mediaStatus =  await  mediaStatusDb.findOnePromise(param);
    if(mediaStatus !== undefined){
        mediaStatus.statsmaps.push(mediaInfo.statsMap);
        mediaStatus.save();
        mediaInfo.saveTime = Date.now();
    }
}

router.updateMediaInfo = updateMediaInfo;

router.updateStatus  = async (event) =>{
    if(typeof event === 'string') {
        event = JSON.parse(event);
    }
   const {status,mediaId,time,shared,userId,userSelfId} = event;
    let {roomId} = event;
     roomId =  serverInfo.getMeetingIdByVoiceBridge(roomId);
    let obj = {mediaId,roomId,shared,userId,userSelfId};
   if(status === "start"){
       obj.info = {startTime:time,status:"started"};
       mediaStatusDb.add(obj);
   }else if(status === "end"){
       let res =  await  mediaStatusDb.findOnePromise(obj);
       if(res === undefined){
           console.error("updateStatus err: res" + res );
           return;
       }
       res.info.status = "end";
       res.info.endTime = time;
       res.save();
   }

    // mediaStatusDb.add(JSON.parse(event));
}

let maxUse = {
    "size":0,
}

router.maxUse = maxUse;

let hosts = null;
router.updateCount  = async (event) =>{
    if(typeof event === 'string') {
        event = JSON.parse(event);
    }
    const {size,time} = event;
    if(size > maxUse.size){
        maxUse.size = size;
    }
    hosts = event.hosts;
    if(hosts !== undefined && hosts.constructor === Array){
        hosts.forEach(host=>{
            host.videoLimit = event.videoLimit;
            host.audioLimit = event.audioLimit;
        })
    }

    // mediaStatusDb.add(JSON.parse(event));
}


router.post('/report', function(req, res, next) {
      debug(`mediaInfos report voicebridge:${ req.body.voiceBridge}`);
        let mediaInfo = req.body;
        updateMediaInfo(mediaInfo);
       res.writeHead(200, {
            'Content-Type': 'text/html',
            'cache-control': 'cache-control'
        });
        //  发送响应数据
        res.end();
    });

router.post('/getMediaInfo', function(req, res, next) {
    const search = req.body;
    debug(`mediaInfos getMediaInfo voicebridge:${ req.query.voiceBridge}`);
/*    search.voiceBridge = req.body.voiceBridge;
    search.userId = req.body.userId;
    search.timeRange = req.body.timeRange;*/
    search.share = true;
    const newMediaInfos = [];
    try {
        const query = {};
        if(typeof(search.meetId) == "string"){
            query.meetId = search.meetId;
        }

        if(typeof(search.userId) == "string"){
            query.userId = search.userId;
        }

        if(typeof(search.timeRange) == 'object') {
            if(search.timeRange.start === "newest"){
              //  query.time = {$gte: Date.now()-3000}; //recent 2 second reports

                mediaInfos.forEach(mediaInfo =>{
                    if(typeof(search.voiceBridge) == "string") {
                        if (mediaInfo.voiceBridge != search.voiceBridge) {
                            return;
                        }
                    }

                    if(typeof(search.userId) == "string"){
                        if (mediaInfo.userId != search.userId) {
                            return;
                        }
                    }
         /*           if(mediaInfo.statsMap.length > 1){
                        mediaInfo.statsMap = [mediaInfo.statsMap[mediaInfo.statsMap.length-1]];
                    }*/
                    let now = Date.now();
                    console.log("hxtest Date.now() = " + Date.now() + " mediaInfo.time = " + mediaInfo.time+ " dis="+(Date.now() - mediaInfo.time));
                    if((Date.now() - mediaInfo.time) > 3*1000 ){ //over 3 seconds don't refresh,maybe the media was dead.
                        return;
                    }
                    newMediaInfos.push(mediaInfo);
                });
                res.write(JSON.stringify(newMediaInfos));
                //  发送响应数据
                res.end();
                return;

            }else {
                if (typeof (search.timeRange.start) == "number" && typeof (search.timeRange.end) == "number") {
                    query.time = {$gte: search.timeRange.start, $lte: search.timeRange.end};
                } else if (typeof (search.timeRange.start) == "number" && typeof (search.timeRange.end) != "number") {
                    query.time = {$gte: search.timeRange.start};
                } else if (typeof (search.timeRange.start) != "number" && typeof (search.timeRange.end) == "number") {
                    query.time = {$lte: search.timeRange.end};
                }
            }
        }

        dbManage.findData("mediaInfo", query, (newMediaInfos) => {
            res.write(JSON.stringify(newMediaInfos));
            //  发送响应数据
            res.end();
        });
    }catch (e) {
        res.write(e.toString());
        res.end();
    }
   /* mediaInfos.forEach(mediaInfo =>{
        if(typeof(search.voiceBridge) == "string") {
            if (mediaInfo.voiceBridge != search.voidBridge) {
                return;
            }
        }

        if(typeof(search.userId) == "string"){
            if (mediaInfo.userId != search.userId) {
                return;
            }
        }
        if(mediaInfo.statsMap.length > 1){
            mediaInfo.statsMap = [mediaInfo.statsMap[mediaInfo.statsMap.length-1]];
        }

        if((Date.now() - mediaInfo.time) > 5*1000 ){ //over 3 seconds don't refresh,maybe the media was dead.
            return;
        }
        newMediaInfos.push(mediaInfo);
    });
    res.write(JSON.stringify(newMediaInfos));
    //  发送响应数据
    res.end();*/
});



router.post('/mediaServers', function(req, res, next) {
    const search = req.body;
    try{
            let nhosts = [];
            let adeviceInfo = require('./deviceInfo');
           if(hosts != null){
               nhosts = hosts.map((host)=>{
                   return {hostname:adeviceInfo.getHostNameByIp(host.ip),ip:host.ip,video:host.video,audio:host.audio,"audioLimit":host.audioLimit,"videoLimit":host.videoLimit};
               })
           }
            res.write(JSON.stringify(nhosts));
            res.end();
    }catch (e) {
        res.write(e.toString());
        res.end();
    }
});


module.exports = router;
