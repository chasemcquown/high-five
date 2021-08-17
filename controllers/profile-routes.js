// imports
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment, Like, user_Interest } = require("../models");
const withAuth = require("../utils/auth");

// get all user's posts, an inlcude comments and likes for each post
router.get("/", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "title",
      "content",
      "user_id",
      "created_at",
      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)"
      //   ),
      //   "like_count",
      // ],
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "text", "user_id", "post_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((postInfo) => {
      const posts = postInfo.map((post) => post.get({ plain: true }));
      res.render("user-profile", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one post to allow for editing of a post
router.get("/edit/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      "id",
      "title",
      "content",
      "user_id"[
        (sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count")
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((postInfo) => {
      if (postInfo) {
        const post = postInfo.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get all of user's interests
router.get("/", (req, res) => {
  userInterest
    .findAll({
      where: {
        user_id: req.params.user_id,
      },
      attributes: ["id", "user_id", "interest_id"],
    })
    .then((interestData) => {
      const interests = interestData.map((interest) =>
        interest.get({ plain: true })
      );
      res.render("user-profile", { interests, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// export router
module.exports = router;
