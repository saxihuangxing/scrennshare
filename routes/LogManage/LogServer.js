const monitor  = require("./fileTails");
let clients = {};
let clientCount = 0;

class sysLogClass  {

constructor(){

}
 startLogModule(server)
{
    let io = require('socket.io')(server);
    io.on('connection', function (socket) {
/*        socket.emit('news', {hello: 'world'});
        socket.on('my other event', function (data) {
            console.log(data);
        });*/
        clients[socket.id] = socket;
        clientCount++;
        console.log("clientCount = " + clientCount);
        socket.on('disconnect',function () {
            for(var key in clients) {
                if(key == socket.id) {
                    clientCount--;
                    delete clients.key;
                    console.log("clientCount = " + clientCount);
                }
            }
        });
    });
    monitor.start(this.sendNewLog);
}


sendNewLog(str){
    for(let key in clients){
        clients[key].emit('newLog', str);
        console.log("send new log " + str);
    }
}

}

const sysLog = new sysLogClass();
module.exports = sysLog;
