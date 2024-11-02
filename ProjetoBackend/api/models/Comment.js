// models/Comment.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      onDelete: 'CASCADE'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id',
      onDelete: 'CASCADE'
    }
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Comment,
      key: 'id',
      onDelete: 'CASCADE'
    }
  }
}, {
  sequelize,
  modelName: 'Comment'
});

Comment.associate = ({ User, Post }) => {
  Comment.belongsTo(User, { foreignKey: 'userId' });
  Comment.belongsTo(Post, { foreignKey: 'postId' });
  Comment.hasMany(Comment, { as: 'Replies', foreignKey: 'parentId' });
  Comment.belongsTo(Comment, { as: 'Parent', foreignKey: 'parentId' });
};

module.exports = Comment;