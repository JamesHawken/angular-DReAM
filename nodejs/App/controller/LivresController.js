let LivreModele = require("../model/LivresModele")

var LivresController = {
    liste: function (req, res) { // méthode qui renvoie la liste des sportifs
        LivreModele.find(function (err, livres) {
            console.log(livres)
            if (err) {
                console.log(err);
                res.json({
                    status: false,
                    message: err.message
                });
            }
            else {
                res.json({ status: true, livres: livres });
            }
        });
    },

    getLivreNumero: function (req, res) {
        console.log(req.params.numlivre)
        LivreModele.findOne({ numero: req.params.numlivre }, {})
            .then((livre) => {
                console.log(livre)
                if (livre == null)
                    res.json({ message: "erreur" })
                else
                    res.json({ "livre": livre });
            })
            .catch((err) => console.error(err.message))

        /* const livre = biblio.filter(livre => livre.numero == req.params.numlivre);
         console.log(livre)
         res.json(livre[0].titre)
         res.send('Le livre numéro' + req.params.numlivre);*/
    },
    titreDesLivres: function (req,res) {
        LivreModele.find ({affichage: req.query = titre}, {_id:0})
        .then ((livres) => res.json (livres))
        .catch((err) => res.json (err.message))
    },

    GetPagesLivre: function (req, res) {
        LivreModele.findOne({ numero: req.params.numlivre }, {})
            .then((livre) => {
                console.log(livre)
                let pages = livre.pages
                if (pages == null)
                    res.json({ message: "erreur" })
                else
                    res.json({ "pages": pages });
            })
            .catch((err) => console.error(err.message))
    },
    GetPageDeLivre: function (req, res) {
        LivreModele.findOne({ numero: req.params.numlivre }, {})
            .then((livre) => {
                let pages = livre.pages
                if (req.params.numpage<= pages.length-1) {
                    res.json({ "page": pages[req.params.numpage] });
                }
                else {
                    res.json({ message:"page n'existe pas"});
                }
            })
            .catch((err) => console.error(err.message))
    },

    PostLivre : function (req, res) {
        var livre = new LivreModele( {
            numero: req.body.numero,
            titre: req.body.titre,
            pages: req.body.pages

        } );

        livre.save()
        .then(
            (livre) => 
        res.send(livre)
        )
        .catch((err) => err.message)

    },
    delete:  function (req,res) {
        LivreModele.deleteOne( {numero:req.params.numlivre})
        .then ((status) => {
            if (status.n == 0) {
                res.json ({message:"Il n'y a pas de livre"})
            }
            else {
                res.json({message:"Livre supprimé"})
            }
        }
        
        )
        .catch((err) => console.error(err.message))
    },

    modifier: function (req,res) {
        LivreModele.updateOne({numero: req.params.numlivre}, req.body)
        .the ((status)=> {
            if (status.n == 0) {
                res.json({message:"Le livre n'existe pas"})
            }
            else {
                res.json ({message:"Le livrea été modifié"})
            }
        })
        .catch ((err) => res.json ({message: err.message}))
    }

} // interface du module
module.exports = LivresController;