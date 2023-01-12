const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },  // l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    name: { type: String, required: true },  // nom de la sauce
    manufacturer: { type: String, required: true },  // fabricant de la sauce
    description: { type: String, required: true },  // description de la sauce
    mainPepper: { type: String, required: true },  // le principale ingédient épicé de la sauce
    imageUrl: { type: String, required: true },  //l'URL de l'image de la sauce téléchargé par l'utilisateur
    heat: { type: Number, required: true },  // nombre entre 1 et 10 décrivant la sauce
    likes: { type: Number, required: false },  // nombre d'utilisateurs qui aiment
    dislikes: { type: Number, required: false },  // nombre d'utilisateurs qui n'aiment pas
    usersLiked: { type: ["String<userId>"], required: false },  // tableau des identifiants utilisateurs qui ont aimé
    usersDisliked: { type: ["String<userId>"], required: false },  // tableau des identifiants utilisateurs qui n'ont pas aimé
});



module.exports = mongoose.model('Sauce', sauceSchema);