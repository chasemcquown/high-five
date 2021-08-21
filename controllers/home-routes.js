const router = require('express').Router();
const sequelize = require('../config/connection');
const {
	User,
	// Post,
	// Comment,
	// Likes,
	Interest,
	UserInterest,
} = require('../models');

// this will render the login page
router.get('/', (req, res) => {
	res.render('layouts/homepage');
});

// routes to user-feed if they have account
// // get all users for user-feed page
// router.get('/users', (req, res) => {
// 	User.findAll({
// 		attributes: ['id', 'username'],
// 	})
// 		.then((userData) => {
// 			const users = userData.map((user) => user.get({ plain: true }));
// 			console.log(users);
// 			res.render('user-feed', {
// 				users,
// 				loggedIn: req.session.loggedIn,
// 			});
// 			console.log(users);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// get all users for user-feed page
router.get('/users', (req, res) => {
	UserInterest.findAll({
		attributes: ['id', 'user_id', 'interest_id'],
		include: [
			{
				// include users interests (interest model)
				model: Interest,
				attributes: ['Interest_Category'],
			},
			{
				// include users interests (interest model)
				model: UserInterest,
				attributes: ['Interest_Category'],
			},
		],
	})
		.then((userData) => {
			const users = userData.map((user) => user.get({ plain: true }));
			console.log(users);
			res.render('user-feed', {
				users,
				loggedIn: req.session.loggedIn,
			});
			console.log(users);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// user will be routed to the sign-up page if they choose sign-up
router.get('/sign-up', (req, res) => {
	res.render('sign-up');
});

module.exports = router;
