// models/Post.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Tag = require('./Tag');
const PostTag = require('./PostTag');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Post'
});

Post.associate = ({ User, Tag, PostTag }) => {
  Post.belongsTo(User, { foreignKey: 'userId' });
  Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'postId' });
};

module.exports = Post;