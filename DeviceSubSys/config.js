const config = {}

config.socketIoUrl = "http://192.168.1.124:8890";
config.processCommand = {
    "apps": "bbb-apps-akka",
    "web": "bbb-web",
    "sfu_process": "process.js",
    "sfu_video": "VideoProcess.js",
    "sfu_screenshare": "ScreenshareProcess",
    "html5": "/usr/share/node-v8.15.1-linux-x64/bin/node main.js",
    "RMD": "kurento-media-server",
    "nginx": "/usr/sbin/nginx",
    "mongod": "/usr/bin/mongod",
    "redis": "/usr/bin/redis",
    "rimpManage": "rimpMangeServer",
}
config.reportInterval = 1000*2;
config.test = false;
module.exports = config;

