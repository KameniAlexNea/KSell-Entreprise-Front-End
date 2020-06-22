var mongoose = require('mongoose');
var Schema = mongoose.Schema

/**
 * Gestion Des Communaute
 * typeCommunaute: abonnes, private(quelques invitations)
 * */

var CommunauteSchema = new Schema({
    users: [{
        // Tous les utilisateurs de la communaute de jeu
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    nbreUser: {
        type: Number,
        default: 1
    },
    idAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    joueurs: [{
        // Tous ceux qui ont accpete de jouer
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    nbreJoueur: {
        type: Number,
        default: 1
    },
    typeCommunaute: {
        type: String,
        default: "abonnes"
    },
    pays: {
        type: String,
        required: false
    },
    nbrePublications: {
        type: Number,
        default: 0
    },
    listePublications: [{
        type: Schema.Types.ObjectId,
        ref: 'Publication',
    }]
}, {timestamps: true})


var Communaute = mongoose.model('Communaute', CommunauteSchema)
module.exports = Communaute