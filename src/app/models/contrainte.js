var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Utilisateur
 * */

var ContrainteSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: ""
    },
})


var Contrainte = mongoose.model('Contrainte', ContrainteSchema)
module.exports = Contrainte