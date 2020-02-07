let express = require("express")
var routerLivres = express.Router()
let livresController = require('../controller/LivresController')

routerLivres.get('/livres', livresController.liste)
routerLivres.get('/livres/:numlivre', livresController.getLivreNumero)
routerLivres.get('livres?affichage=titre', livresController.titreDesLivres)
routerLivres.get('/livres/:numlivre/pages', livresController.GetPagesLivre)
routerLivres.get('/livres/:numlivre/pages/:numpage', livresController.GetPageDeLivre)
routerLivres.post('/livres', livresController.PostLivre)
routerLivres.delete('/livres/:numlivre', livresController.delete)
routerLivres.put('/livres/:numlivre', livresController.modifier)
module.exports = routerLivres
