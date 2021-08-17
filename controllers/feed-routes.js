const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, userInterest } = require('../models');

// get all users for user-feed page
router.get('/', (req,res) => {
    User.findAll({
        attributes: [
            'id', 
            'username'
        ]
    })
    .then(userData => {
        const posts = userData.map(user => user.get({ plain: true }));
  
        res.render('user-feed', {
          users,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single user and route them to the user-profile page
router.get('/user/:id', (req,res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: userInterst,
                attributes: ['id', 'user_id', 'interest_id']
            }
        ]
    })
    .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
  
        const user = userData.get({ plain: true });
  
        res.render('user-profile', {
          user,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;