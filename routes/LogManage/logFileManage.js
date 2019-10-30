var fs = require('fs');
const LOG_DIR = '/var/log/';
const MDS_DIR = 'kurento-media-server/';
const SFU_DIR =  'bbb-webrtc-sfu/';
const SFU_NAME =  'bbb-webrtc-sfu.log';
const MANAGE_DIR =  'rimpManage/';
const MANAGE_NAME =  'rimpManage.log';
const WEB_DIR = 'bigbluebutton/';
const WEB_NAME = 'bbb-web';
const logMonitor  = require("./fileTails");
const APPS_DIR = 'bbb-apps-akka/';
const APPS_NAME = 'bbb-apps-akka';
const Logger = require("../../utils/Logger");
//const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-26';
//const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-27';
var localIp = require("../../utils/commonUtil").getLocalIp();
var socketServer = require("../../SocketIo/SocketIoServer");
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


function getFileName(type,time,filename){
    switch (type) {
        case 'MDS':
            return LOG_DIR+MDS_DIR+filename;
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

 const getLogFileContent = (option,callback)=> {
     const {type,time,filename,hostip} = option;

     if(hostip === undefined || hostip === localIp) {
         const fileName = getFileName(type, time, filename);
         fs.readFile(fileName, callback);
     }else{
         let socket =  socketServer.findSocketByIp(hostip);
         if(socket === undefined || socket === null){
             Logger.error("can't find socket by ip " + hostip);
             callback("");
         }

         var listener = function(msg){
             callback(null,msg);
             socketServer.removeListener('onGetMDSFileContent',listener);
         };
         socketServer.addListener('onGetMDSFileContent',listener);

         socket.emit("GetMDSFileContent",option) ;

     }
}

const getMDSFileNames = (params)=>{
        return new Promise((resolve,reject)=>{
            const time = params.time;
            const ip = params.hostip;
            if(ip === localIp) {
                let findFiles = require('file-regex');
                let pattern = time;
                const dir = LOG_DIR + MDS_DIR;
                resolve(findFiles(dir, pattern));
            }else{
                let socket =  socketServer.findSocketByIp(ip);
                if(socket === null){
                    Logger.error("can't find socket by ip " + ip);
                    resolve([]);
                }

                var listener = function(msg){
                    resolve(msg);
                    socketServer.removeListener('onGetMDSFileNames',listener);
                };
                socketServer.addListener('onGetMDSFileNames',listener);

                socket.emit("getMDSFileNames",params) ;
            }
        } )

}

const logFileMange = {
     getContent:getLogFileContent,
    getMDSFileNames,
}

startWatchFile();

module.exports=logFileMange;
