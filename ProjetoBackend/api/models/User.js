const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definindo o modelo User
class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;