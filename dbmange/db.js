var mongoose = require('mongoose');
var config = require("../config/config");
let    DB_URL = config.dbUrl + 'rimp';
const MongoClient = require("mongodb").MongoClient;
/*MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    db.close();
});*/
/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
