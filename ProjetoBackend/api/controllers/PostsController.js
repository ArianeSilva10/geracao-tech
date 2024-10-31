// controllers/postController.js

const { Post, User, Profile, Tag } = require('../models');

exports.list = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'email'],
          include: [
            {
              model: Profile,
              attributes: ['firstName', 'lastName']
            }
          ]
        },
        {
          model: Tag,
          attributes: ['name']
        }
      ]
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};