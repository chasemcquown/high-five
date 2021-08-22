// imports
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment, Like } = require('../models');

// get all user's posts, an inlcude comments and likes for each post
router.get('/', (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: [
			'id',
			'title',
			'content',
			'user_id',
			'created_at',
			// [
			//   sequelize.literal(
			//     "(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)"
			//   ),
			//   "like_count",
			// ],
		],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
				include: {
					model: User,
					attributes: ['username'],
				},
			},
			{
				model: User,
				attributes: ['username'],
			},
		],
	})
		.then((postInfo) => {
			const posts = postInfo.map((post) => post.get({ plain: true }));
			res.render('user-profile', { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/user/:id', (req, res) => {
	Post.findAll({
		// where: {
		//   user_id: req.params.user_id,
		// },
		attributes: [
			'id',
			'title',
			'content',
			'user_id',
			'created_at',
			// [
			//   sequelize.literal(
			//     "(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)"
			//   ),
			//   "like_count",
			// ],
		],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
				include: {
					model: User,
					attributes: ['username'],
				},
			},
			{
				model: User,
				attributes: ['username'],
			},
		],
	})
		.then((postInfo) => {
			const posts = postInfo.map((post) => post.get({ plain: true }));
			res.render('user-profile', { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get a single user and route them to the user-profile page
router.get('/', (req, res) => {
	User.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((userData) => {
			if (!userData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}

			const user = userData.get({ plain: true });

			res.render('user-profile', {
				user,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/user/:id', (req, res) => {
	User.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((userData) => {
			if (!userData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}

			const user = userData.get({ plain: true });

			res.render('user-profile', {
				user,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// export router
module.exports = router;
