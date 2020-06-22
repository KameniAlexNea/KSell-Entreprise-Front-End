var mongoose = require('mongoose');

var Schema = mongoose.Schema
var deepPopulate = require('mongoose-deep-populate')(mongoose);

/**
 * Gestion Des Messages | Publications
 * */
var PublicationSchema = new Schema({
    contenu: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    idCommunaute: {
        type: Schema.Types.ObjectId,
        ref: "Communaute",
    }
}, { timestamps: true })

// var StatutSchema = new Schema({ test: String }, { timestamps: true })

PublicationSchema.plugin(deepPopulate, {});

var Publication = mongoose.model('Publication', PublicationSchema);
module.exports = Publication;
