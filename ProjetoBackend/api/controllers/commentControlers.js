// controllers/commentsController.js

const { Comment, User, Post } = require('../models');

class CommentsController {
  constructor() {
    Comment.associate({ User, Post });
  }

  async list(req, res) {
    try {
      const comments = await Comment.findAll({
        include: [
          { model: User, attributes: ['id', 'email'] },
          { model: Post, attributes: ['id', 'title'] },
          { model: Comment, as: 'Replies' },
          { model: Comment, as: 'Parent' }
        ]
      });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { content, userId, postId, parentId } = req.body;
      const comment = await Comment.create({ content, userId, postId, parentId });
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CommentsController();