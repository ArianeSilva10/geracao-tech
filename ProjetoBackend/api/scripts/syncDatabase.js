// scripts/syncDatabase.js

const sequelize = require('../config/database');
const { User, Post, Comment, Tag, PostTag, Profile } = require('../models');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized with alter true');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();