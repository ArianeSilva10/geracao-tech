const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database'); // Importa  a conexão com o banco de dados

// Definindo a classe Tag que estende Model
class Tag extends Model{}

// Inicializando a classe Tag com suas colunas e configurações
Tag.init({
    name: {
        type: DataTypes.STRING(45),
        allowNull: true // Permite valores nulos
    }
}, {
    sequelize, // Conexão passada para a classe
    modelName: 'Tag', // Nome do modelo
    tableName: 'tags', // Nome da tabela
    timestamps: false // desabilita os timestamps `createAt` e `updateAt`
});

module.exports = Tag;