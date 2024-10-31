const sequelize = require("./config/database");
const { User, Profile } = require('./models');

async function syncDatabase() {
  await sequelize.sync({ force: true });
  console.log('Banco de dados sincronizado!');  
}

syncDatabase();