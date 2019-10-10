var express = require('express');
var router = express.Router();
var debug = require('debug')('rimp:server');
var config =require("../../config/config");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = config.dbUrl;

MongoClient.connect(dbUrl,function (err,db) {
    if (err) {
        console.log(err);
        return;
    }
    var dbase = db.db("rimp");
    dbase.listCollections({name: "users"})
        .next(function(err, collinfo) {
            if (!collinfo) {
                dbase.createCollection("users",function (err,res) {
                    if (err) throw err;
                    var users = dbase.collection('users');
                    var data = {name: 'admin',pwd: '90f8009728ad23d7f97bff29162c5bb8'};
                    users.insertOne(data,function(error, result){
                        if(error)
                        {
                            console.log('Error:'+ error);
                        }else{
                            console.log(result.result.n);
                        }
                        db.close();
                    });
                });
            }
        });


});

router.post('/doLogin', function(req, res, next) {
    //利用bodyParser 获取表单提交的数据
    const param = req.body;
    const pas = param.password;//md5(param.password);
    debug("params=" +JSON.stringify(param));
    MongoClient.connect(dbUrl,function (err,db) {
        if(err){
            console.log(err);
            return;
        }
        var dbo = db.db("rimp");
        const list = [];
        const result = dbo.collection("users").find({"name":param.username,"pwd":pas});
        result.toArray(function (err,data) {
            if(err){
                return;
            }
            if(data&&data.length>0){
                //保存用户信息，用于权限控制;后台一般使用session来保存用户信息
                req.session.userInfo = data[0];
                res.send(`{"code":0}`);
                debug(param.username + " login sucess");
                //res.redirect("/");
            }else{
                res.send(`{"code":-1}`);
                debug(param.username + "login failed");
                // res.send("<script>alert('登录失败');location.href='/login';</script>");
            }
            db.close();
        });
    })
});


router.get("/logout",function (req,res) {
    req.session.destroy(function (err) {
        if(err){

        }else{
            res.redirect("/login");
        }
    });
});


module.exports = router;
