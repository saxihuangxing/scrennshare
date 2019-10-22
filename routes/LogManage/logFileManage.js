var fs = require('fs');
const LOG_DIR = '/var/log/';
const SFU_DIR =  'bbb-webrtc-sfu/';
const SFU_NAME =  'bbb-webrtc-sfu.log';
const MANAGE_DIR =  'rimpManage/';
const MANAGE_NAME =  'rimpManage.log';
const WEB_DIR = 'bigbluebutton/';
const WEB_NAME = 'bbb-web';
const logMonitor  = require("./fileTails");
const APPS_DIR = 'bbb-apps-akka/';
const APPS_NAME = 'bbb-apps-akka';
//const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-26';
//const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-27';
var debug = require('debug')('rimp:server');
let currentDate = new Date().toISOString().split('T')[0];
const tails = {
    'SFU_SERVER':null,
    'WEB':null,
    'APPS':null,
    'MANAGE':null,
}

function isToday(time){
   var today =  new Date().toISOString().split('T')[0];
   if(time == today){
       return true;
   }else{
       return false;
   }
}


function getFileName(type,time){
    switch (type) {
        case 'MANAGE':
            return  LOG_DIR + MANAGE_DIR + MANAGE_NAME + `.${time}`;
        case 'SFU_SERVER':
            return LOG_DIR + SFU_DIR + SFU_NAME + `.${time}`;
        case 'HTML5':
        case 'APPS': {
            let fileName = "";
            if (isToday(time)) {
                fileName = APPS_NAME + ".log";
            } else {
                fileName = APPS_NAME + `.${time}.log`;
            }
            return LOG_DIR + APPS_DIR + fileName;
        }
        case 'WEB': {
            let fileName = "";
            if (isToday(time)) {
                fileName = WEB_NAME + ".log";
            } else {
                fileName = WEB_NAME + `.${time}.log`;
            }
            return LOG_DIR + WEB_DIR + fileName;
        }
        case 'RMD':
        default:
            console.error(`mapTypeDir :can't find ${type}`);
    }
}

const startWatchFile = () =>{
    tails.SFU_SERVER =  logMonitor.startTail(getFileName('SFU_SERVER',currentDate),'SFU_SERVER');
    tails.MANAGE  =  logMonitor.startTail(getFileName('MANAGE',currentDate),'MANAGE');
    tails.WEB =  logMonitor.startTail(getFileName('WEB',currentDate),'WEB');
    tails.APPS =  logMonitor.startTail(getFileName('APPS',currentDate),'APPS');
    setInterval(function () {
        let date = new Date().toISOString().split('T')[0];
        if(date !== currentDate){
            currentDate = date;
            console.log(`this new day ${date},reset watch file`);
            if(tails.SFU_SERVER != null){
                tails.SFU_SERVER.unwatch();
                tails.SFU_SERVER = null;
            }
            if(tails.WEB != null){
                tails.WEB.unwatch();
                tails.WEB = null;
            }

            if(tails.APPS != null){
                tails.APPS.unwatch();
                tails.APPS = null;
            }

            if(tails.MANAGE != null){
                tails.MANAGE.unwatch();
                tails.MANAGE = null;
            }

            tails.SFU_SERVER =  logMonitor.startTail(getFileName('SFU_SERVER',currentDate),'SFU_SERVER');
            tails.WEB =  logMonitor.startTail(getFileName('WEB',currentDate),'WEB');
            tails.APPS =  logMonitor.startTail(getFileName('APPS',currentDate),'APPS');
            tails.MANAGE =  logMonitor.startTail(getFileName('MANAGE',currentDate),'MANAGE');
        }
    },60*1);
}

 const getLogFileContent = (type,time,callback)=> {
     debug(`getLogFileContent param = ${type} ${time}`);
      const fileName =    getFileName(type,time);
      debug(`getLogFileContent fileName = ${fileName}`);
    // 异步读取
    fs.readFile(fileName, callback);
}

const logFileMange = {
     getContent:getLogFileContent,
}

startWatchFile();

module.exports=logFileMange;
