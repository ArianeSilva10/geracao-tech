const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    database: 'blog', 
    host: 'localhost',
    username: 'root', 
    password: '0012',
    port: 3306
});

module.exports = connection;