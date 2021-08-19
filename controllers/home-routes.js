const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// this will render the login page
router.get('/', (req, res) => {
	res.render('layouts/homepage');
});

// routes to user-feed if they have account
// get all users for user-feed page
router.get('/user-feed', (req, res) => {
	User.findAll({
		attributes: ['id', 'username'],
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
