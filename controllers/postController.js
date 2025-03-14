const posts = require('../data/posts-data');

function index(req, res) {
    res.json(posts);
}
function show(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo tramite id
    const postSingle = posts.find(postSingle => postSingle.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(postSingle);
}
function store(req, res) {
    res.send('crea un nuovo post')
}
function update(req, res) {
    res.send(`modifica totalemnte un post con id:${req.params.id}`)
}

function modify(req, res) {
    res.send(`modifica parzialmente un post con id ${req.params.id}`)
}

function destroy(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo tramite id
    const postSingle = posts.find(postSingle => postSingle.id === id);
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
