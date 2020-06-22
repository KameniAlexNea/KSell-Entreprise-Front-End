var mongoose = require('mongoose');

var passwordLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema

/**
 * Gestion Des Utilisateur
 * */

var UserSchema = new Schema({
    mail: {
        type: String,
        required: true,
        unique: true,
    },
    pays: {
        type: String,
        required: true
    },
    profil: {
        type: String,
        default: ""
    },
    dateNaissance: {
        type: Schema.Types.Date,
        required: true,
        // min: new Date("")
    },
    nbreCompetition: {
        type: Number,
        default: 0
    },
    nbreEtoile: {
        type: Number,
        default: 0
    },
    fortune: {
        type: Number,
        default: 0
    },
    nbreCarte: {
        type: Number,
        default: 0
    },
    listeCarte: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    nbreAbonnes: {
        type: Number,
        default: 0
    },
    listeAbonnes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    nbreAbonnemments: {
        type: Number,
        default: 0
    },
    listeAbonnements: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

UserSchema.plugin(passwordLocalMongoose, {
    usernameUnique: true,
    usernameField: 'pseudo',
    findByUsername: function (model, queryParameters) {
        // Add additional query parameter - AND condition - active: true
        queryParameters.actif = true;
        return model.findOne(queryParameters)
    }
});

var User = mongoose.model('User', UserSchema)
module.exports = User