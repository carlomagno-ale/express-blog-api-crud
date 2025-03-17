const posts = require('../data/posts-data');

function index(req, res) {
    res.json(posts);
}
function show(req, res) {
    const slug = req.params.slug
    // cerchiamo 
    const postSingle = posts.find(postSingle => postSingle.slug === slug);
    // Restituiamolo sotto forma di JSON
    res.json(postSingle);
}
function store(req, res) {
    
    // Creiamo un nuovo oggetto 
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    // Aggiungiamo 
    posts.push(newPost);
    // controlliamo
    console.log(posts);
    // Restituiamo lo status corretto + il post creato
    res.status(201);
    res.json(newPost);


    /*console.log(req.body);
    res.send('crea un nuovo post')*/
}
function update(req, res) {
    res.send(`modifica totalemnte un post con id:${req.params.slug}`)
}

function modify(req, res) {
    res.send(`modifica parzialmente un post con id ${req.params.slug}`)
}

function destroy(req, res) {

    const slug = req.params.slug;

    const postSingle = posts.find(postSingle => postSingle.slug === slug);

    // controllo
    if (!postSingle) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }
    // Rimuoviamo il post dal menu
    posts.splice(posts.indexOf(postSingle), 1);
    // Restituiamo lo status corretto
    res.sendStatus(204)
    console.log(posts);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
