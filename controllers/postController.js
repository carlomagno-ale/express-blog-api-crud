

function index(req, res) {
    res.send('visualizza tutti i post');
}
function show(req, res) {
    res.send(`visualizza solo i post con id:${req.params.id}`)
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
