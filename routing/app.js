const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('GET: Hello World! at /'))
app.get('/hello', (req, res) => res.send('GET: Hello World! at /hello'))

app.post('/', (req, res) => res.send('POST: Hello World! at /'))

app.put('/hello', (req, res) => res.send('PUT: Hello World! at /hello'))

app.delete('/hello', (req, res) => res.send('DELETE: Hello World! at /hello'))

/*
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))