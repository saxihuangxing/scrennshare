var express = require('express');

const logFileMange  = require('./logFileManage');

var router = express.Router();
var debug = require('debug')('rimp:server');


router.post('/getMDSFileNames', async function(req, res, next) {
    let query = req.body;
    let time = query.time;
    try {
        let files = await logFileMange.getMDSFileNames(query);
        res.send(files.map((file)=>{return file.file}));
    }catch (e) {
        res.send(e.toString());
    }

});


router.post('/', function(req, res, next) {
    let option = req.body;
    debug(`post loginfo ${option.type} ${option.time}`);
    var a = Date.now();
    console.log("a ========= " + a);
    logFileMange.getContent(option,function (err, data) {
        console.log("now ========= " + Date.now() );
        var b = Date.now() - a;
        console.log("hxtest take time " + b);
        if (err) {
            console.error(err.toString());
            res.write(err.toString());
            res.end();
            return;
        }
        //console.log("异步读取: " + data.toString());
        if(data === undefined || data === null){
            res.send("get data err");
            return;
        }

        res.write(data.toString());
        //  发送响应数据
        res.end();
    })

});





module.exports = router;
