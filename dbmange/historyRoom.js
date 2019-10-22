var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var HistoryRoomSchema = new Schema({
    meetId : { type: String },
    meetName : { type: String },
    createTime : { type: Number},
    endTime : { type: Number},
    status: {type:String},
});

module.exports =   mongoose.model('historyRoom',HistoryRoomSchema);
