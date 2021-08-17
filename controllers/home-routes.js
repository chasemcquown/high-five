const router = require('express').Router();
const sequelize = require('../config/connection');

// this will render the login page 
router.get('/', (req, res) => {
	res.render('homepage');
});

// routes to user-feed if they have account
router.get('/user-feed', (req, res) => {
	res.render('user-feed');
});

// user will be routed to the sign-up page if they choose sign-up 
router.get('/sign-up', (req, res) => {
    res.render('sign-up')
});

module.exports = router;
