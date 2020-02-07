let express = require("express")
var cors = require('cors');
let router = require("./App/router/LivreRouter")
var port = 5000;
var app =  express()
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
let bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(router)

app.listen(port);


/*
router.get('/livres', function (req, res) {
    livre.find({}, { _id: 0, numero: 1, titre: 1, pages:1 }, {})
        .then((livre) => {
            console.log(livre)
            //res.send('liste des livres' + livre);

             res.json(livre)
        }
        )
        .catch((err) => console.error(err.message))



    //res.json(biblio)


})

router.get('/livres/:numlivre', function (req, res) {

   livre.findOne( {numero : numlivre}, { })
    .then( (livre) => {
    if (livre == null) 
    console.log('ce sport n existe pas');
else console.log(livre);
})
.catch( (err) => console.error(err.message) )

   /* const livre = biblio.filter(livre => livre.numero == req.params.numlivre);
    console.log(livre)
    res.json(livre[0].titre)
    res.send('Le livre numéro' + req.params.numlivre);
})

router.get('/livres/:numlivre/pages', function (req, res) {
    const livre = biblio.filter(livre => livre.numero == req.params.numlivre);
    res.json(livre[0].pages)
    res.send('Liste des pages du livre ' + req.params.numlivre);
})

router.get('/livres/:numlivre/pages/:numpage', function (req, res) {
    const livre = biblio.filter(livre => (livre.numero == req.params.numlivre))
    const page = livre[0].pages[req.params.numpage]
    res.json(page)
    res.send('Page numéro ' + req.params.numpage + "du livre numéro " + req.params.numlivre);
})

router.post('/livres', function (req, res) {
    console.log(req.body)
    biblio.push(req.body)
    res.json(biblio)
    //  console.log(res)
    res.send("ajout d'un livre");
});
// lancer le serveur pour qu'il écoute sur le port 5000
router.delete('/livres/:numlivre', function (req, res) {
    let index = biblio.findIndex(livre => livre.numero == req.params.numlivre);
    biblio.splice(index, 1)
    res.json(biblio)
    res.send("suppression du livre numéro " + req.params.numlivre);

});



console.log('le serveur REST est lancé sur le port ' + port);
*/