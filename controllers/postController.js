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
    res.send(`elimina un post con id ${req.params.id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
