var express = require('express');
const Hook =  require('./hook');
var commonUtils = require("./../../utils/commonUtil");

var router = express.Router();
var debug = require('debug')('rimp:server');

let hook;
let meetings
try {
    hook = new Hook();
    hook.start();
    meetings = hook.meetings;
}catch (e) {
    debug(e);
}


/* GET users listing. */
router.get('/', function(req, res, next) {
    let meetId = req.query.meetId;
    hook.getEventBymeetId(meetId,(error,events)=>{
        if(error){
            console.log("getEventBymeetId" + error.toString());
            res.write(JSON.stringify([]));
        }else {
/*            events.forEach((event)=>{
                event.fakeType = commonUtils.mappedEventMsg(event.type);
            })*/
            res.write(JSON.stringify(events));
        }
         res.end();
    });

});

module.exports = {router,meetings};





