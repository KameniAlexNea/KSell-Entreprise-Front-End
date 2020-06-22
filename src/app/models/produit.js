var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Produit
 * */

var ProduitSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: ""
    },
    prix: {
        type: Number,
        required: true
    }
})


var Produit = mongoose.model('Produit', ProduitSchema)
module.exports = Produit