var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Sanctio
 * */

var SanctionSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
})


var Sanction = mongoose.model('Sanction', SanctionSchema)
module.exports = Sanction