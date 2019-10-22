var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var Eventchema = new Schema({
    meetId : { type: String },
    userId: {type: String},
    userName: {type: String},
    type: {type: String},
    time : { type: Number}
});

module.exports =   mongoose.model('Event',Eventchema);
