// scripts/createUserAndPosts.js

const { User, Post } = require('../models');

const createUserAndPosts = async () => {
  try {
    const user = await User.create({ email: 'john.doe@example.com', password: '123456' });

    const posts = await Post.bulkCreate([
      { title: 'Aprendendo CSS', content: 'Conteúdo sobre CSS', userId: user.id },
      { title: 'Guia para SASS', content: 'Conteúdo sobre SASS', userId: user.id }
    ]);

    console.log('User and Posts created:', user, posts);
  } catch (error) {
    console.error('Error creating User and Posts:', error);
  }
};

createUserAndPosts();