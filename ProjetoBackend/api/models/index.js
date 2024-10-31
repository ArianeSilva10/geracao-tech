// models/index.js

const Post = require('./Post');
const Tag = require('./Tag');
const User = require('./User');
const Profile = require('./Profile');
const PostTag = require('./PostTag');

// Relacionamentos existentes
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// Relacionamento muitos-para-muitos
Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'postId' });
Tag.belongsToMany(Post, { through: PostTag, foreignKey: 'tagId' });

module.exports = {
  Post,
  Tag,
  User,
  Profile,
  PostTag
};