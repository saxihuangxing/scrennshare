var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var HashMap = require('hashmap');
var Hook = require('./hook.js');
var userMap = new HashMap();
let deep = 0;
/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/
let userInfo = {};
var screenshareRouter = require('./routes/screenshare');
var debug = require('debug')('test:server');
const SUCCESS = "SUCCESS";
const FAILED = "failed";
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/
//app.use('/screenshare',screenshareRouter);


function getOnlyKey(){
  const random = require('string-random');
  const key = random(5, {letters: false});
  debug(`getOnlyKey ${key}`);
  if(userMap.get(key) !== undefined){
    deep++;
    if(deep > 10){
      deep = 0;
      debug("over 10 times can't get key,retur null");
      return null;
    }
     return getOnlyKey();
  }
  deep = 0;
  return key;
}

function generateResJsonMsg( id, value){
  let json;
  if(id == SUCCESS) {
    json = `{"id":"${id}","key":"${value}"}`;
  }else{
    json = `{"id":"${id}","reson":"${value}"}`;
  }
  return json;
}
app.use('/screenshare/public', express.static('public'));

app.get('/screenshare', function (req, res) {
  const query = req.query;
  debug("screenshare key= " +  query.key);
  let json = userMap.get(query.key);
  if(json === undefined || json === null){
     res.send(generateResJsonMsg(FAILED,`key:${query.key} not found"}`));
    return
  }

  json = JSON.stringify(json);
  var script = `\n<script> var json =  ${json};
         Object.assign(this,json); 
      </script>\n`;
  debug("script = " + script);
  const path = __dirname + "/" + "index.html";
  const fs = require("fs");
  let data = fs.readFileSync(path).toString();
  data = data.replace('<SETENV></SETENV>',script);
  res.send(data);
 // res.send("hellow,world");
});

app.post('/screenshare/postUser',function (req, res) {
  let sessionToken = req.query.sessionToken;
  let exist=false;
  userMap.forEach((value, key) =>{
    if(value.sessionToken === sessionToken){
       res.send(generateResJsonMsg(SUCCESS,key));
      exist = true;
    }
  });
  if(exist){
    return ;
  }
  const key = getOnlyKey();
  if(key === null){
    return  res.send(generateResJsonMsg(FAILED,"generator key failed"));
  }
  userMap.set(key, req.body);
  //debug("post User res =  " + JSON.stringify((json)));
  res.send(generateResJsonMsg(SUCCESS,key));
})

app.get('/screenshare/delUser',function (req, res) {
  const key = req.query.key;
  debug(`screenshare delUser  key= ${key}`);
  if(userMap.has(key)) {
    userMap.delete(key);
    res.send(generateResJsonMsg(SUCCESS, key));
  }else{
    res.send(generateResJsonMsg(FAILED, `can't find key ${key}`));
  }
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

try {
  var hook = new Hook();
}catch (e) {
  debug(e);
}
hook.start(intId =>{
  debug(`meet ${intId} ended`);
  let delKeys = [];
  userMap.forEach(function(value, key) {
    if(value.internalMeetingId === intId){
      delKeys.push(key);
    }
  });
  delKeys.forEach(key=>{
    debug(`delete key ${key}` );
    userMap.delete(key)
  });
});

module.exports = app;
