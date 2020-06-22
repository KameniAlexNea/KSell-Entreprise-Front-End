var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Carte
 * */

var CarteSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: ""
    },
    valeur: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    prixPartie: {
        type: Number,
        required: true
    },
})


var Carte = mongoose.model('Carte', CarteSchema)
module.exports = Carte