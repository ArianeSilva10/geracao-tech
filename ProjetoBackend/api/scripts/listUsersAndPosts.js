// scripts/listUsersAndPosts.js

const { User, Post } = require('../models');

const listUsersAndPosts = async () => {
  try {
    const users = await User.findAll({
      include: [Post]
    });

    console.log('Users and Posts:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error listing Users and Posts:', error);
  }
};

listUsersAndPosts();