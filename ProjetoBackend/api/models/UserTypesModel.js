const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definindo o modelo userType
const UserType = sequelize.define('UserType', {
    type: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: 'user_types' // Define explicitamente o nome da tabela
});

module.exports = UserType;