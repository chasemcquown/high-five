const Comment = require('./Comment');

const Follow=require('./Follow');
const Likes=require('./likes');
const Post=require('./Post');

const User = require('./User');

/*==============================================*/
/*================User Relations================*/
/*==============================================*/

/*User can create many posts (one to many )*/
User.hasMany(Post, {
	foreignKey: 'user_id',
});

/*creates an association between the post and the user. 
The foreign key is added on the post.*/
Post.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

/*User can comment on many posts (one to many )*/
User.hasMany(Comment, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

/*creates an association between the comment and the user. 
The foreign key is added on the comment.*/
Comment.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

/*User can do one like on each posts (one to one )
Creates an association between this user and the Likes. 
The foreign key is added on the likes.*/
User.hasMany(Likes, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

Likes.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

//User can like many posts (one to many 
User.hasMany(Follow, {
	foreignKey: 'user_id',
	as: 'Followed ',
	onDelete: 'cascade',
});
/*creates an association between the follower and the user. 
The foreign key is added on the follower.*/
Follow.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});

//User can like many posts (one to many
User.hasMany(Follow, {
	foreignKey: 'follower_id',
	as: 'follower ',
	onDelete: 'cascade',
});

/*creates an association between the follower and the user. 
The foreign key is added on the follower.*/
Follow.belongsTo(User, {
	foreignKey: 'follower_id',
	onDelete: 'cascade',
});

/*creates an association between the follower and the user. 
The foreign key is added on the follower.*/
Follow.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade',
});
/*==============================================*/
/*================Post Relations================*/
/*==============================================*/

/*Post can have many likes (1 to many) */
Post.hasMany(Likes, {
	foreignKey: 'post_id',
	onDelete: 'cascade',
});

/*creates an association between the likes and the post. 
The foreign key is added on the likes.*/
Likes.belongsTo(Post, {
	foreignKey: 'post_id',
	onDelete: 'cascade',
});

/*Post can have many comments (1 to many) */
Post.hasMany(Comment, {
	foreignKey: 'post_id',
	onDelete: 'cascade',
});

/*==============================================*/
/*================Comments Relations============*/
/*==============================================*/

/*creates an association between the Comment and the post. 
The foreign key is added on the Comment.*/
Comment.belongsTo(Post, {
	foreignKey: 'post_id',
	onDelete: 'cascade',
});


module.exports = { User, Post, Comment,Likes, Follow};

