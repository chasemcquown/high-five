// import dependecies
const router = require("express").Router();

//const { like } = require("sequelize/types/lib/operators");
const { User, Post, Comment, Likes } = require("../../models");

// get all users for main page cards
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((userInfo) => res.json(userInfo))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // get a single user for a user's profile page
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        // include user's post
        model: Post,
        attributes: ["id", "title", "content"],
      },
      {
        // include user's post comments
        model: Comment,
        attributes: ["id", "comment_text", "post_id"],
      },
      // 	{
      // 		// include user's post likes
      // 		model: Likes,
      // 		attributes: ['id', 'post_id'],
      // 	},
    ],
  })
    .then((userInfo) => {
      if (!userInfo) {
        res.status(404).json({ message: "No user found with this id" });
      }
      res.json(userInfo);
    })
    .catch((err) => {
      console.log("Opps! " + err);
      res.status(500).json(err);
    });
});

// add the ability to create a user
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    interestOne: req.body.interestOne,
    interestTwo: req.body.interestTwo,
    interestThree: req.body.interestThree,
    interestFour: req.body.interestFour,
    interestFive: req.body.interestFive,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add ability for user to login

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// add the ability for user to logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// add the ability to delte a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((userInfo) => {
      if (!userInfo) {
        res.status(404).json({ message: "No user found with this id" });
      }
      res.json(userInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
