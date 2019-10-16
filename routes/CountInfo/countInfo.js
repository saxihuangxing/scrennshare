var express = require('express');

var router = express.Router();
var debug = require('debug')('rimp:server');
const eventDb = require("../../dbmange/operator")('event');
const maxDb = require("../../dbmange/operator")('max');
const mediaStatusDb = require("../../dbmange/operator")('mediaStatus');
const processDb = require("../../dbmange/operator")('process');
const config = require("../../config/config");
const deviceInfo = require("../deviceInfo");
const countApp = deviceInfo.countApp;

/* GET users listing. */
router.get('/', async function(req, res, next) {
    //let meetId = req.query.meetId;
    let count = {"createRoom":"unkown"};
    try {
        count.createRoom = await eventDb.count({"type": config.event.createdMeeting});
        count.sharedVideo = await eventDb.count({"type": config.event.sharedVideo});
        count.pullVideo = await mediaStatusDb.count({"shared":false});
        let medias = await mediaStatusDb.findPromise({});
        let wholeTime = 0;
        medias.forEach((media)=>{
            let runTime = 0;
            if(media.info.status === "end"){
                runTime = media.info.endTime -media.info.startTime;
            }else{
                runTime = Date.now() - media.info.startTime;
            }
            wholeTime += runTime;
        });
        count.wholeRuntime = parseInt(wholeTime/1000) + "秒";
        count.processRestart = {};
        countApp.forEach(async (app) =>{
            count.processRestart[app] = await  processDb.count({name:app}); //processCounts[key].count;
        });
        count.maxUse = {};
        count.maxUse.devices = [];
        let maxs = await maxDb.findPromise({});
/*        if(maxs.length > 1) {
            maxs = maxs.map((max) => {
                return max.model;
            });
        }*/
       // let cpu =  commonUtils.getMaxValueInSubArrObj(maxs,"devices","cpu");
      //  let memory=  commonUtils.getMaxValueInSubArrObj(maxs,"devices","memory");
        let maxDevices = [];
        let devices = [];
        let maxRoom = 0,maxUser = 0,maxMedia = 0;
        let maxRoomTime = 0,maxUserTime = 0,maxMediaTime = 0;

        maxs.forEach((max)=>{
            max.devices.forEach(device=>{
                device.time = max.time;
                devices.push(device);
            })

            if(max.room > maxRoom){
                maxRoom = max.room;
                maxRoomTime = max.time;
            }

            if(max.user > maxUser){
                maxUser = max.user;
                maxUserTime = max.time;
            }

            if(max.media > maxMedia){
                maxMedia = max.media;
                maxMediaTime = max.time;
            }

        })
        devices.forEach((device)=>{
            let i;
            for(i = 0;i< maxDevices.length;i++){
                if(maxDevices[i].hostname === device.hostname){
                    if(maxDevices[i].cpu < device.cpu){
                        maxDevices[i].cpu = device.cpu;
                        maxDevices[i].cpuTime = device.time;
                    }
                    if(maxDevices[i].memory < device.memory){
                        maxDevices[i].memory = device.memory;
                        maxDevices[i].memoryTime = device.time;
                    }
                    break;
                }
            }
            if(i === maxDevices.length){
                maxDevices.push({hostname:device.hostname,cpu:device.cpu,memory:device.memory,cpuTime:device.time,memoryTime:device.time});
            }
        });
        count.maxUse.devices = maxDevices;
        count.maxUse.room =  maxRoom; //commonUtils.getMaxValueInObjArr(maxs,"room");
        count.maxUse.user=  maxUser;//commonUtils.getMaxValueInObjArr(maxs,"user");
        count.maxUse.media= maxMedia; //commonUtils.getMaxValueInObjArr(maxs,"media");
        count.maxUse.roomTime =  maxRoomTime;
        count.maxUse.userTime =  maxUserTime;
        count.maxUse.mediaTime =  maxMediaTime;

    }catch (e) {
        console.log("countInfo "+ e.toString());
    }
    res.write(JSON.stringify(count));
    res.end();
});

module.exports = router;
