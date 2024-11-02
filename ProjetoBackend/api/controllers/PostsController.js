// controllers/postsController.js

const { Post, User, Tag, PostTag } = require('../models');

class PostsController {
  constructor() {
    Post.associate({ User, Tag, PostTag });
  }

  async list(req, res) {
    try {
      const { columns } = req.query;
      let attributes = null;
      if (columns) {
        const requestedColumns = columns.split(',');
        const excludedColumns = ['password', 'createdAt', 'updatedAt'];
        
        attributes = requestedColumns.filter(column => !excludedColumns.includes(column));
      }
      const posts = await Post.findAll({
        attributes, // Usa o array de colunas filtradas
        include: [
          {
            model: User,
            attributes: ['firstName', 'lastName'] // Exemplo de colunas específicas de User
          },
          {
            model: Tag,
            attributes: ['name'] // Exemplo de colunas específicas de Tag
          }
        ]
      });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, {
        include: [
          { model: User, attributes: ['id', 'email'] },
          { model: Tag }
        ],
        attributes: ['title', 'content']
      });

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { title, content, userId, tags } = req.body;
      const post = await Post.create({ title, content, userId });

      if (tags && tags.length > 0) {
        const tagInstances = await Tag.findAll({
          where: { id: tags }
        });
        await post.addTags(tagInstances);
      }

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const post = await Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      post.title = title || post.title;
      post.content = content || post.content;
      await post.save();

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      await post.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      post.title = title || post.title;
      post.content = content || post.content;
      await post.save();
      res.json({ message: 'Post updated successfully', post });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, {
        include: [{ model: Comment }]
      });
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      await post.destroy();
      res.status(204).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}





module.exports = new PostsController();