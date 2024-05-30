const db = require('./db');

// criando uma tabela (models)
const Produto = db.sequelize.define('produtos',{
    nome:{
        type: db.Sequelize.STRING
    },
    preco:{
        type: db.Sequelize.INTEGER
    },
    imagem:{
        type: db.Sequelize.BLOB
    }
});

// Produto.sync({force:true})

module.exports = Produto;

