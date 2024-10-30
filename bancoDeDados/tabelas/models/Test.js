const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Test = sequelize.define('Test', {
    coluna_teste: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'Test' // Define explicitamente o nome da tabela
});

module.exports = Test;