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
    for(let i = 0;i<mediaInfos.length;i++ ){
        if(mediaInfos[i].voiceBridge === mediaInfo.voiceBridge
            && mediaInfos[i].userId === mediaInfo.userId
            && mediaInfos[i].mediaId === mediaInfo.mediaId
       //     && mediaInfos[i].mediaType === mediaInfo.mediaType
        ){
            Object.assign(mediaInfos[i],mediaInfo);
            debug(`mediaInfos report update  mediaInfo map for user ${mediaInfos[i].userId}`);
            saveMediaStats(mediaInfos[i]);
            return;
        }
    }

    const meetingName = serverInfo.getMeetNameByVoiceBridge(mediaInfo.voiceBridge);
    const userName = serverInfo.getNameByUserId(mediaInfo.voiceBridge,mediaInfo.userId);
    const selfUserName = serverInfo.getNameByUserId(mediaInfo.voiceBridge,mediaInfo.selfUserId);
    mediaInfo.meetingName = meetingName;
    mediaInfo.userName = userName;
    mediaInfo.selfUserName = selfUserName;
    saveMediaStats(mediaInfo);
    mediaInfos.push(mediaInfo);
}

async  function saveMediaStats(mediaInfo){
   // console.log("hxtest mediaInfo.saveTime = " + mediaInfo.saveTime + "(Date.now() - mediaInfo.saveTime)  =  " + (Date.now() - mediaInfo.saveTime) );
    if(mediaInfo.saveTime !== undefined && ((Date.now() - mediaInfo.saveTime) < config.dbSaveInterval.mediaStatsDb)){
        return;
    }
    let roomId =  serverInfo.getMeetingIdByVoiceBridge(mediaInfo.voiceBridge);
    let param = {roomId,"userId": mediaInfo.userId,"userSelfId": mediaInfo.selfUserId,"mediaId":mediaInfo.mediaId};
    let mediaStatus =  await  mediaStatusDb.findOnePromise(param);
    if(mediaStatus !== undefined && mediaStatus !== null){
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
    let  voiceBridge = roomId;
     roomId =  serverInfo.getMeetingIdByVoiceBridge(roomId);
    let obj = {mediaId,roomId,shared,userId,userSelfId};
   if(status === "start"){
       const meetingName = serverInfo.getMeetNameByVoiceBridge(voiceBridge);
       const userName = serverInfo.getNameByUserId(voiceBridge,userId);
       const selfUserName = serverInfo.getNameByUserId(voiceBridge,userSelfId);
       obj.meetingName = meetingName;
       obj.userName = userName;
       obj.selfUserName = selfUserName;
       obj.info = {startTime:time,status:"started"};
       mediaStatusDb.add(obj);
   }else if(status === "end"){
       let res =  await  mediaStatusDb.findOnePromise(obj);
       if(res === undefined){
           console.error("updateStatus err: res" + res );
           return;
       }
       for(var i in mediaInfos){
           if(mediaInfos[i].voiceBridge === voiceBridge
               && mediaInfos[i].userId === userId
               && mediaInfos[i].mediaId === mediaId)
           {
               if((Date.now() - mediaInfos[i].saveTime) > 3*1000) {
                   res.statsmaps.push(mediaInfos[i].statsMap);
               }
               mediaInfos.splice(i,1);
               break;
           }

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

router.post('/getMediaInfo', async function(req, res, next) {
    const search = req.body;
    search.share = true;
    const newMediaInfos = [];
    try {
        const query = {};
        if(typeof(search.roomId) == "string"){
            query.roomId = search.roomId;
        }

        if(typeof (search.voiceBridge) == "string"){
            query.voiceBridge = search.voiceBridge;
        }

        if(typeof(search.userId) == "string"){
            query.userId = search.userId;
        }

        if(typeof(search.mediaId) == "string"){
            query.mediaId = search.mediaId;
        }

        if(typeof(search.timeRange) == 'object') {
            if(search.timeRange.start === "newest"){
                mediaInfos.forEach(mediaInfo =>{
                    let equal = true;
                    for(var k in query){
                         if(mediaInfo[k] != query[k]){
                             equal = false;
                             break;
                         }
                     }
                    if(equal) {
/*                        if((Date.now() - mediaInfo.time) > 3*1000 ){
                            return;
                        }*/
                        newMediaInfos.push(mediaInfo);
                    }
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
            let medias = await mediaStatusDb.findPromise(query);
            res.write(JSON.stringify(medias));
            res.end();
    }catch (e) {
        res.write(e.toString());
        res.end();
    }
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
