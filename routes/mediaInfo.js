var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');

let  mediaInfos = [];
/* GET users listing. */
router.post('/report', function(req, res, next) {

        let mediaInfo = req.query;
       mediaInfos.push(mediaInfo);
       res.writeHead(200, {
            'Content-Type': 'text/html',
            'cache-control': 'cache-control'
        });
        //  发送响应数据
        res.end();
    });

router.get('/getMediaInfo', function(req, res, next) {

    let voidBrigge = req.query.voiceBridge;
    const newMediaInfos = [];
    mediaInfos.forEach(mediaInfo =>{
        if(mediaInfo.voiceBridge == voidBrigge){
            newMediaInfos.push(mediaInfo);
        }
    });
    res.write(JSON.stringify(newMediaInfos));
    //  发送响应数据
    res.end();
});





module.exports = router;
