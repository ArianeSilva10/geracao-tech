const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('blog', 'root', '0012',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;