var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');

let  mediaInfos = [];
/* GET users listing. */
router.post('/report', function(req, res, next) {
      debug(`mediaInfos report voicebridge:${ req.body.voiceBridge}`);
        let mediaInfo = req.body;
        for(let i = 0;i<mediaInfos.length;i++ ){
            if(mediaInfos[i].voiceBridge === mediaInfo.voiceBridge
                && mediaInfos[i].userId === mediaInfo.userId
                && mediaInfos[i].mediaId === mediaInfo.mediaId
                && mediaInfos[i].mediaType === mediaInfo.mediaType
            ){
                mediaInfos[i].statsMap.push(mediaInfo.statsMap);
                debug(`mediaInfos report update  mediaInfo map for user ${mediaInfos[i].userId}`);
                return;
            }
        }
        mediaInfo.statsMap = [mediaInfo.statsMap];
        debug("mediaInfos report push new mediaInfo");
       mediaInfos.push(mediaInfo);
       res.writeHead(200, {
            'Content-Type': 'text/html',
            'cache-control': 'cache-control'
        });
        //  发送响应数据
        res.end();
    });

router.get('/getMediaInfo', function(req, res, next) {
    const search = {};
    debug(`mediaInfos getMediaInfo voicebridge:${ req.query.voiceBridge}`);
    search.voidBridge = req.query.voiceBridge;
    search.userId = req.query.userId;
    search.timeRange = {"start":"","end":""};
    search.share = true;
    const newMediaInfos = [];
    mediaInfos.forEach(mediaInfo =>{
        if(typeof(search.voidBridge) == "string") {
            if (mediaInfo.voiceBridge != search.voidBridge) {
                return;
            }
        }

        if(typeof(search.userId) == "string"){
            if (mediaInfo.userId != search.userId) {
                return;
            }
        }
        if(mediaInfo.statsMap.length > 1){
            mediaInfo.statsMap = [mediaInfo.statsMap[mediaInfo.statsMap.length-1]];
        }
        newMediaInfos.push(mediaInfo);
    });
    res.write(JSON.stringify(newMediaInfos));
    //  发送响应数据
    res.end();
});





module.exports = router;
