const path = require('path')
const Sequelize = require('sequelize')

const version = 'development'
const config = require(path.join(__dirname, './db-config.json'))[version]
var db = {}

let sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.Test = require('./test')(sequelize, Sequelize)

module.exports = db