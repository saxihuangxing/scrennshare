const config =  require("../config/config");
var dbManage = require("../dbmange/manage");
var express = require('express');
const checksum = require('../utils/encrypt');
const request = require("request");;
const fxp = require("fast-xml-parser");

var router = express.Router();
var debug = require('debug')('rimp:server');

let updateTime = 0;
const options = {
    url:  checksum(config.serverUrl+config.api_getMeetings),
};

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


const saveMeetingsInfo = (json)=>{
    data = json.response;
    if (data.returncode === "SUCCESS") {
        if(typeof(data.meetings.meeting) == 'object'){
            if(data.meetings.meeting.constructor != Array) {
                router.roomsInfo = [data.meetings.meeting];
            }else{
                router.roomsInfo = meetingsData;
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




module.exports = router;
