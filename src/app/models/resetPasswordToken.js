var mongoose = require('mongoose');
var maxAge = require('../conf').authExpiryAfter*60*60;

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: maxAge,
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
});

var ResetPasswordToken = mongoose.model('ResetPasswordToken' , tokenSchema);

module.exports = ResetPasswordToken;
