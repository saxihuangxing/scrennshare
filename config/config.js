const httpProtocal = "http://";
const serverIp = "192.168.1.124";
const app = "/bigbluebutton/api/";
const Secret = "330a8b08c3b4c61533e1d0c5ce1ac88f";

const oneSecondMs = 1000;
const oneMinuteMs = 1000*60;
const oneHourMs = 1000*60*60;
const oneDayMs = 1000*60*60*24;

const config  = {
    serverUrl:httpProtocal+serverIp+app,
    secret: Secret,
    app : app,
    api_getMeetings : "getMeetings?"
};

config.event = {
   "createdMeeting" :"MeetingCreatedEvtMsg",
    "sharedVideo":"UserBroadcastCamStartedEvtMsg",
}

config.dbSaveTime = {
    "eventDb":oneDayMs*7,
    "historyroomsDb":oneDayMs*7,
    "mediastatusesDb":oneDayMs*7,
    "maxesDb":oneDayMs*7,
    "processDb":oneDayMs*7,
}

config.dbSaveInterval = {
    "maxDb":oneSecondMs*20,
    "mediaStatsDb":oneSecondMs*60,
}

// BigBlueButton configs
config.bbb = {};
config.bbb.sharedSecret = "sharedSecret";
config.bbb.apiPath = "/bigbluebutton/api";
config.server = {};
config.server.port = 8890;
config.dbUrl = "mongodb://127.0.0.1:8889/";
config.roomDbName = "roomInfo";
config.mediaDbName = "mediaInfo";

// Redis
config.redis = {};
config.redis.host = '127.0.0.1';
config.redis.port = 6379;
config.processCommand = {
    "apps":"bbb-apps-akka",
    "web":"/usr/share/bbb-web",
    "sfu_process":"process.js",
    "sfu_video":"VideoProcess.js",
    "sfu_screenshare":"ScreenshareProcess",
    "html5":"/usr/share/node-v8.15.1-linux-x64/bin/node"+ "-"+"main.js" ,
    "RMD":"kurento-media-server",
    "nginx":"/usr/sbin/nginx",
    "mongod":"/usr/bin/mongod",
    "redis":"/usr/bin/redis",
    "rimpManage":"rimpMangeServer",
}

config.processEevnt = {
    "restart":"restart",
}

config.log = {
    "filename": "/var/log/rimpManage/rimpManage.log",
    "level": "verbose"
}

module.exports =  config
