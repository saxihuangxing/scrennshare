var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var MaxSchema = new Schema({
    devices:[{
        hostname:{type: String},
        cpu : { type: Number },
        memory : { type: Number },
    }],
    room : { type: Number },
    user : { type: Number },
    media: {type:Number},
    time : { type: Number},
});

module.exports =   mongoose.model('Max',MaxSchema);
