var createError = require('http-errors');
var express = require('express');
const session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const roomListRouter = require('./routes/roomList');
const eventListRouter = require('./routes/RimpEvent/eventList').router;
const countInfoRouter = require('./routes/CountInfo/countInfo');
const mediaInfo = require('./routes/mediaInfo');
const diviceInfo = require('./routes/deviceInfo').router;
const logInfo = require('./routes/LogManage/logRouter');
const user = require('./routes/user/login');
var debug = require('debug')('rimp:server');
var app = express();

app.use(function (req, res, next) {
    req.url = req.url.replace("/rimpmanage/","/");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 },
    rolling: true
}));



app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    const currPath = req.url;
    if (currPath == "/user/doLogin"  || currPath == "/user/logout" ||
        currPath == "/mediaInfo/report" ||
        currPath.indexOf("/socket.io/socket.io.js") !== -1) {
        next();
    } else {
        if (req.session.userInfo && req.session.userInfo.name && req.session.userInfo.name != "") {
            // app.locals["userInfo"] = req.session.userInfo.username;
            //如果已经登录，继续执行
            next();
        } else {
            //如果未登录，重定向回去
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(`{"code":"403","reson":"Not authorized."}`);
        }
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/eventList', eventListRouter);
app.use('/countInfo', countInfoRouter);
app.use('/roomList', roomListRouter);
app.use('/mediaInfo', mediaInfo);
app.use('/DeviceInfo', diviceInfo);
app.use('/logInfo', logInfo);
app.use('/user', user);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
/*app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});*/


module.exports = app;
