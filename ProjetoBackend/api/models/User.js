const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definindo o modelo User
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
});

module.exports = User;