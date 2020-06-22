var mongoose = require('mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Plat
 * */

var PlatSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: ""
    }
})


var Plat = mongoose.model('Plat', PlatSchema)
module.exports = Plat