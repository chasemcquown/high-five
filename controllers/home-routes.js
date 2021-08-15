const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
	console.log(req.session);
	Post.findAll({
		attributes: ['id', 'post_body', 'title', 'created_at'],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
		.then((dbPostData) => {
			console.log(dbPostData[0]);
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			// pass a single post object into the homepage template
			res.render('homepage', {
				posts,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

router.get('/post/:id', (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ['id', 'post_body', 'title', 'created_at'],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}

			// serialize the data
			const post = dbPostData.get({ plain: true });

			// pass data to template
			res.render('single-post', {
				post,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
