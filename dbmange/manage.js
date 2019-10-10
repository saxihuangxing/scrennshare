var config = require("../config/config");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = config.dbUrl;


const addOneData = (colName, obj = {}) => {
    MongoClient.connect(dbUrl,  function (err, db) {
        if (err) throw err;
        var dbo = db.db("rimp");
        dbo.collection(colName).insert(obj, function (err, res) {
            if (err) throw err;
            console.log("insert document: " );
            db.close();
        });
    })
};

const addData = (colName, objArr = []) => {
    MongoClient.connect(dbUrl,  function (err, db) {
        if (err) throw err;
        var dbo = db.db("rimp");
        dbo.collection(colName).insertMany(objArr, function (err, res) {
            if (err) throw err;
            console.log("insert document: " + res.insertedCount);
            db.close();
        });
    })
};

const findData = (colName,query,callback) => {
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db("rimp");
            dbo.collection(colName).find(query).toArray(function(err, result) {
                if (err) throw err;
                console.log("hxtest findData:" + JSON.stringify(result));
                callback(result);
                db.close();
            });
        });
}

const  mange = {
    addOneData,
    addData,
    findData,
}

module.exports = mange;
