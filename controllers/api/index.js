const router = require("express").Router();
const commentRoutes = require("./comment-routes");
router.use("/comments", commentRoutes);
module.exports = router;
