/*
    The app starts a server and listens to port 3000 for connections.
    'Hello World!' will be sent to the browser if you request for the
    root url(i.e. /). This is why you see '/' in app.get() function.

    The urls are also known as ROUTE.
    e.g. the root url / is a route.

*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))