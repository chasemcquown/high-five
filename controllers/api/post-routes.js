const router = require("express").Router();
//import necessary models
const { Post } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll()
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
