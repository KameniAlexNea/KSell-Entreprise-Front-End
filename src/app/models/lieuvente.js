var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Lieu Vente
 * */

var LieuVenteSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: ""
    },
    plage_min: {
        type: Number,
        required: true
    },
    plage_max: {
        type: Number,
        required: true
    },
    taux: {
        type: Number,
        required: true
    },
    contrainte: {
        type: Schema.Types.ObjectId,
        ref: "Contrainte"
    }
})


var LieuVente = mongoose.model('LieuVente', LieuVenteSchema)
module.exports = LieuVente