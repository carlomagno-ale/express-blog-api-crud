const express = require('express')
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')

app.use(express.static('images'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use('/api/v1/posts', postsRouter)