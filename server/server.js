const express = require('express')
const app = express()
const port = 3000
const host = '0.0.0.0'

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name', (req, res) => res.send(process.env.myname || 'No name provided'))
app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))