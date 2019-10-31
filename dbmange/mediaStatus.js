var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var MediaStatusSchema = new Schema({
    mediaId: {type: String},
    roomId: {type: String},
    userId: {type:String},
    userSelfId:{type:String},
    shared: {type: Boolean},
    meetingName: {type:String},
    userName:{type:String},
    selfUserName: {type: String},
    info: {
        status: {type: String},
        startTime: {type: Number},
        endTime: {type: Number},
    },
    statsmaps:[],
});

module.exports = mongoose.model('MediaStatus', MediaStatusSchema);
