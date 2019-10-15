var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var MediaStatusSchema = new Schema({
    mediaId: {type: String},
    roomId: {type: String},
    shared: {type: Boolean},
    info: {
        status: {type: String},
        startTime: {type: Number},
        endTime: {type: Number},
    },
});

module.exports = mongoose.model('MediaStatus', MediaStatusSchema);
