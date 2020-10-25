const app = require('../app/app')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
    path: path.join(__dirname, '/.env')
})
const { PORT : port } = process.env
const db = require('./db')

app.listen(port, () => {
    console.log('Connected with port', port)

    db.sequelize.sync({force: true}).then( () => {
        console.log('Database Sync')
    })

    console.log(process.env.NODE_ENV)
})