var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestions des notifications : publications dans les communautés non lues
 */

 var NotificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    publication: {
        type: [Schema.Types.ObjectId],
        ref: "Publication",
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
 })

 var Notification = mongoose.Model('Notification', NotificationSchema)
 module.exports = Notification