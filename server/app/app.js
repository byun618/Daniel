const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log('asd')
    res.send('asd')
})

module.exports = app
