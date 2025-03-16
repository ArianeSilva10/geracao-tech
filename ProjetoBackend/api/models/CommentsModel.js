// models/CommentsModel.js

const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class CommentsModel extends Model {
  static associate () {
    CommentsModel.hasOne(CommentsModel, {
      foreignKey: "parent_id",
      as: "children"
    });

    CommentsModel.belongsTo(CommentsModel, {
      foreignKey: "parents_id",
      as: "parents"
    });
  }
}

CommentsModel.init({

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      onDelete: 'NO ACTION'
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
      model: CommentsModel,
      key: 'id',
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'comments',
  sequelize: connection,
});

module.exports = CommentsModel;