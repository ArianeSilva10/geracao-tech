const sequelize = require('./config/database');
const Test = require('./models/Test');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Força a recriação da tabela
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();