const Comment = require('./comment');
const Follower=require('./Follower');
const Interest=require('./interest');
const Likes=require('./likes');
const Post=require('./Post');
const UserInterest=require('./user-interest');
const User = require('./User');

/*==============================================*/
/*================User Relations================*/
/*==============================================*/

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment };