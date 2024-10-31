// models/PostTag.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');
const Tag = require('./Tag');

class PostTag extends Model {}

PostTag.init({
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id'
    },
    primaryKey: true
  },
  tagId: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: 'id'
    },
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'PostTag'
});

module.exports = PostTag;