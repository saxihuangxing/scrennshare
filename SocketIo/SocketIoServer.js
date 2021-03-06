const mediaRouter = require("../routes/mediaInfo");
const deviceInfo = require("../routes/deviceInfo");
let clients = {};
let clientCount = 0;

class SocketIoServer {

    constructor() {
        this.listeners = {
            'media_report':[],
            'media_change':[],
            'media_count':[],
            'device_info':[],
            'onGetMDSFileNames':[],
            'onGetMDSFileContent':[],
        };
    }

    addListener(type,listener){
        let keys = Object.keys(this.listeners);
        let i = keys.indexOf(type)
        if(i > -1){
            this.listeners[keys[i]].push(listener);
        }
    }

    removeListener(type){
        let keys = Object.keys(this.listeners);
        let i = keys.indexOf(type);
        if(i > -1){
            this.listeners[keys[i]] = [];
        }
    }

    removeListener(type,listener){
        let keys = Object.keys(this.listeners);
        let i = keys.indexOf(type);
        if(i > -1){
            this.listeners[keys[i]].splice(this.listeners[keys[i]].indexOf(listener),1);
        }
    }

    callback(type,msg){
        let keys = Object.keys(this.listeners);
        let i = keys.indexOf(type);
        if(i > -1){
           this.listeners[keys[i]].forEach(listener =>{
               listener(msg);
           })
        }
    }

    startLogModule(server) {
        let io = require('socket.io')(server);
        io.on('connection', function (socket) {
            clients[socket.id] = socket;
            clientCount++;
            console.log("clientCount = " + clientCount);
            socket.emit("connected","start");
            socket.on('disconnect', function () {
                for (var key in clients) {
                    if (key == socket.id) {
                        clientCount--;
                        delete clients[key];
                        console.log("clientCount = " + clientCount);
                    }
                }
            });

            socket.on('setTypeAndIp', function (from, msg) {
                socket.ip = msg.ip;
                socket.type = msg.type;
                if(socket.type === "MDS") {
                    socket.on("onGetMDSFileNames", function (form, msg) {
                        socketIoServer.callback('onGetMDSFileNames', msg);
                    });
                    socket.on("onGetMDSFileContent", function (form, msg) {
                        socketIoServer.callback('onGetMDSFileContent', msg);
                    });
                }
            });

            socket.on('media_report', function (from, msg) {
              //  console.log('MSG', from, ' saying ', msg);
               setTimeout(()=>mediaRouter.updateMediaInfo(msg),0);
              //  callback('media_report',msg);
            });
            socket.on('media_change', function (from, msg) {
                 // console.log('media_change', from, ' saying ', msg);
                 setTimeout(()=>mediaRouter.updateStatus(msg),0);
               // callback('media_change',msg);
            });
            socket.on('media_count', function (from, msg) {
               // console.log('media_count', from, ' saying ', msg);
                setTimeout(()=>mediaRouter.updateCount(msg),0);
              //  this.callback('media_count',msg);
            });
            socket.on('device_info', function (from, msg) {
                // console.log('media_count', from, ' saying ', msg);
               // setTimeout(()=>deviceInfo.updateDeviceStatus(msg),0);
                socketIoServer.callback('device_info',msg);
            });
            socket.subscribers = [];
            socket.on('subscribe',(type)=>{
                    console.log("socket receive subscribe " + type);
                     socket.subscribers.push(type);
                }
            )



        });
    }


    sendNewLog(str) {
        for (let key in clients) {
            let socket = clients[key];
            if(socket.subscribers.indexOf("newLog") > -1)
            {
                socket.emit('newLog', str);
                //console.log("send new log " + str);
            }
        }
    }

    sendDeviceInfo(str) {
        for (let key in clients) {
            let socket = clients[key];
            if(socket.subscribers.indexOf("deviceInfo") > -1)
            {
                socket.emit('deviceInfo', str);
                //console.log("send new deviceInfo" + str);
            }
        }
    }

    findSocketByIp(ip){
        for (let key in clients) {
            let socket = clients[key];
            if(socket.ip === ip)
            {
                return socket;
            }
        }
        return null ;
    }

}

const socketIoServer = new SocketIoServer();
module.exports = socketIoServer;
