const { sequelize } = require(".");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define('test', {
        
        name: Datatypes.STRING(100)

    }, {
        tableName: 'test'
    })
}