let mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/livres", {useNewUrlParser:true})
let db= mongoose.connection

db.on('error', console.error.bind(console,'erreur connection :'));
db.once('open', function() {
    console.log("Connecté")
})
let Schema = mongoose.Schema;
let livresSchema = new Schema({
    numero: Number,
    titre: String,
    pages: [String]
});

var LivreModele = mongoose.model("livre", livresSchema);

module.exports = LivreModele