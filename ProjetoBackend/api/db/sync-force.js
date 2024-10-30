const sequelize = require('../config/database');
const User = require('../models/User');
const Tag = require('../models/Tag');
const UserType = require('../models/UserTypesModel'); // Importando o modelo UserType

async function syncDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Banco de dados sincronizado.');        
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados: ', error);        
    }
}

syncDatabase();