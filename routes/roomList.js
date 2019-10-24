const config =  require("../config/config");
var dbManage = require("../dbmange/manage");
var express = require('express');
const checksum = require('../utils/encrypt');
const request = require("request");;
const fxp = require("fast-xml-parser");
const CommonUtil = require("../utils/commonUtil");
var router = express.Router();
var debug = require('debug')('rimp:server');
const historyRoomDb = require("../dbmange/operator")('historyRoom');

let updateTime = 0;
roomsInfo = [];
const options = {
    url:  checksum(config.serverUrl+config.api_getMeetings),
};

router.get('/historyRoomList',async function(req, res, next) {
   let meetings = await historyRoomDb.findPromise({status:"end"});
    res.send(meetings);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    debug(`get roomList , url = ${options.url}`);
    request.get(options, function(err, response, body){
        debug(`res err = ${err},body = ${body}`);
        if (!err && response.statusCode == 200) {
            const json = fxp.parse(body);
            saveMeetingsInfo(json);
           // dbManage.addOneData(config.roomDbName,json);
            updateTime = Date.now();
            res.write(JSON.stringify(json));
        }
        res.end();
    });
});

let maxUse = {
    "room":0,
    "user":0,
}

//router.maxUse = maxUse;

const saveMeetingsInfo = (json)=>{
    data = json.response;
    if (data.returncode === "SUCCESS") {
        if(typeof(data.meetings.meeting) == 'object'){
         /*   if(data.meetings.meeting.constructor != Array) {
                roomsInfo = [data.meetings.meeting];
            }else{
                roomsInfo = meetingsData;
            }*/
            roomsInfo.length = 0;

            if (data.meetings.meeting.constructor === Array)
                data.meetings.meeting.forEach((room) => roomsInfo.push(room))
            else
                roomsInfo.push(data.meetings.meeting)
            if(roomsInfo.length > maxUse.room){
                maxUse.room = roomsInfo.length;
            }
            let allUser = 0;
            roomsInfo.forEach(room =>{
                if(room.attendees === undefined){
                    return;
                }
                let users = CommonUtil.tranObjToArr(room.attendees.attendee);
                if(users === undefined){
                    return;
                }
                allUser += users.length;
            })
            if(allUser > maxUse.user){
                maxUse.user = allUser;
            }
        }
    } else {

    }
}


const upadteRoomInfo = () =>{
    request.get(options, function(err, response, body){
        if (!err && response.statusCode == 200) {
            const json = fxp.parse(body);
            saveMeetingsInfo(json);
            // dbManage.addOneData(config.roomDbName,json);
        }
    });
}

upadteRoomInfo();

setInterval(function () {
    if(Date.now() - updateTime < 10000){
        return;
    }
    upadteRoomInfo()
}, 10000);




module.exports = {router,roomsInfo,maxUse};
