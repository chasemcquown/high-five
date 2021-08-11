// import dependecie(s)
const router = require('express').Router();

// import the necessary models
const { User } = require('../../models');

// get all users for main page cards
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userInfo => res.json(userInfo))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get a single user for a user's profile page 
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(userInfo => {
        if (!userInfo) {
            res.status(404).json({ message: 'No user found with this id' })
        }
        res.json(userInfo);;
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// add the ability to create a user
router.post('/', (req, res) => {
    User.create({})
    .then(userInfo => )

});

// add ability for user to login 
router.post('/login', (req, res) => {

});

// add the ability for user to logout
router.post('/logout', (req, res) => {

});

// add the ability to delte a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userInfo => {
        if (!userInfo) {
            res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(userInfo);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}); 

module.exports = router;
