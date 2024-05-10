const Sequelize = require('sequelize')

//conexao com o bancode dados mysql
const sequelize = new Sequelize('pratica1', 'root', '56vagu33',{
    host: 'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}