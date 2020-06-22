var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des ProduitPlat
 * */

var ProduitPlatSchema = new Schema({
    plat: {
        type: Schema.Types.ObjectId,
        ref: 'Plat',
    },
    produit: {
        type: Schema.Types.ObjectId,
        ref: "Produit"
    },
    pourcentage: {
        type: Number,
        required: true
    }
})


var ProduitPlat = mongoose.model('ProduitPlat', ProduitPlatSchema)
module.exports = ProduitPlat