const express = require('express')
const app = express();
const port = 8000;
const postsRouter = require('./routers/posts')
const serverError = require("./middlewares/serverError");

app.use(express.static('images'));
app.use(express.json());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use('/api/v1/posts', postsRouter)

app.use(serverError)