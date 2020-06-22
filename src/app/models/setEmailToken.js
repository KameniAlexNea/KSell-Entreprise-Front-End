var mongoose = require('mongoose');


const tokenSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique : true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200,
    },
    newEmail : {
        type : String,
        required : true,
        unique : true
    }
});

var SetEmailToken = mongoose.model('SetEmailToken' , tokenSchema);

module.exports = SetEmailToken;
