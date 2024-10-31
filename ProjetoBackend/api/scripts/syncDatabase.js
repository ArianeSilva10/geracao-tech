// scripts/syncDatabase.js

const sequelize = require('../config/database');
const { Post, Tag, PostTag } = require('../models');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();