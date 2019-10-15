var express = require('express');

var router = express.Router();
var debug = require('debug')('rimp:server');
const eventDb = require("../../dbmange/operator")('event');
const maxDb = require("../../dbmange/operator")('max');
const mediaStatusDb = require("../../dbmange/operator")('mediaStatus');
const config = require("../../config/config");
const deviceInfo = require("../deviceInfo");
const processCounts = deviceInfo.processCounts;

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
        var keys = Object.keys(processCounts);
        count.processRestart = {};
         keys.forEach((key) =>{
            count.processRestart[key] = processCounts[key].count;
        });
        count.maxUse = {};
        let maxs = await maxDb.findPromise({});
/*        if(maxs.length > 1) {
            maxs = maxs.map((max) => {
                return max.model;
            });
        }*/
        count.maxUse.cpu =  commonUtils.getMaxValueInObjArr(maxs,"cpu");
        count.maxUse.memory=  commonUtils.getMaxValueInObjArr(maxs,"memory");
        count.maxUse.room =  commonUtils.getMaxValueInObjArr(maxs,"room");
        count.maxUse.user=  commonUtils.getMaxValueInObjArr(maxs,"user");
        count.maxUse.media=  commonUtils.getMaxValueInObjArr(maxs,"media");
    }catch (e) {
        console.log("countInfo "+ e.toString());
    }
    res.write(JSON.stringify(count));
    res.end();
});

module.exports = router;
