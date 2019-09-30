var express = require('express');

const logFileMange  = require('./logFileManage');

var router = express.Router();
var debug = require('debug')('rimp:server');


router.post('/', function(req, res, next) {
    let option = req.body;
    debug(`post loginfo ${option.type} ${option.time}`);
    logFileMange.getContent(option.type,option.time,function (err, data) {

        if (err) {
            console.error(err.toString());
            res.write(err.toString());
            res.end();
            return;
        }
        console.log("异步读取: " + data.toString());
        res.write(data.toString());
        //  发送响应数据
        res.end();
    })

});





module.exports = router;
