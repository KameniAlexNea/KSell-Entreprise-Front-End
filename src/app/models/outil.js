var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Outil
 * */

var OutilSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: ""
    },
    cout: {
        type: Number,
        required: true
    },
    capacite: {
        type: Number,
        required: true
    }
})


var Outil = mongoose.model('Outil', OutilSchema)
module.exports = Outil