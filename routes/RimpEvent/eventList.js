var express = require('express');
const Hook =  require('./hook');


var router = express.Router();
var debug = require('debug')('rimp:server');

let hook;
try {
    hook = new Hook();
    hook.start();
}catch (e) {
    debug(e);
}


/* GET users listing. */
router.get('/', function(req, res, next) {
    let meetId = req.query.meetId;
    hook.getEventBymeetId(meetId,(error,event)=>{
        if(error){
            console.log("getEventBymeetId" + error.toString());
            res.write(JSON.stringify([]));
        }else {
            res.write(JSON.stringify(event));
        }
         res.end();
    });

});

module.exports = router;





