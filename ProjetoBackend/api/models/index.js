const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserTypesModel = require('./UserTypesModel');

class User extends Model{
  static associate({Profile}){
    User.hasOne(Profile, {foreignKey: 'user_id'});
  }
}

User.init(
  {
    is_active:{
      type:DataTypes.TINYINT(1),
      defaultValue: 0,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull:false
    }
  }
)

// Relacionamentos de comentários
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

Comment.hasMany(Comment, { as: 'Replies', foreignKey: 'parentId' });
Comment.belongsTo(Comment, { as: 'Parent', foreignKey: 'parentId' });

module.exports = {
  User,
  Post,
  Tag,
  Profile,
  PostTag,
  Comment
};