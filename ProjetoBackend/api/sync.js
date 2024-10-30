const sequelize = require('./config/database');
const User = require('./models/User');
const Tag = require('./models/Tag');
const UserType = require('./models/UserTypesModel'); // Importando o novo modelo
async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Força a recriação da tabela
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();