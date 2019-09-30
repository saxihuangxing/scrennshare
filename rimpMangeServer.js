var http = require('http');
var app = require('./app');
var config = require('./config/config');
var debug = require('debug')('rimp:rimpMangeServer');
var port = normalizePort(process.env.PORT || config.server.port);
app.set('port', port);


var rimpMangeServer = http.createServer(app);
rimpMangeServer.listen(port);
rimpMangeServer.on('error', onError);
rimpMangeServer.on('listening', onListening);

var sysLog = require("./routes/LogManage/LogServer");
sysLog.startLogModule(rimpMangeServer);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}



function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}



function onListening() {
    var addr = rimpMangeServer.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
