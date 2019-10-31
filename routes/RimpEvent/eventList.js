var express = require('express');
const hook =  require('./hook').hook;
var commonUtils = require("./../../utils/commonUtil");

var router = express.Router();
var debug = require('debug')('rimp:server');


/* GET users listing. */
router.get('/', function(req, res, next) {
    let meetId = req.query.meetId;
    hook.getEventBymeetId(meetId,(error,events)=>{
        if(error){
            console.log("getEventBymeetId" + error.toString());
            res.write(JSON.stringify([]));
        }else {
            res.write(JSON.stringify(events));
        }
         res.end();
    });

});

module.exports = {router};





