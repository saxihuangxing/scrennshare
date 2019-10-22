var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var Processchema = new Schema({
    name : { type: String },
    time : { type: Number},
    event : {type: String},
    hostname:{type: String},
});

module.exports =   mongoose.model('Process',Processchema);
