const router = require('express').Router();

const userRoutes = require('./user-routes');
const userFeedRoutes = require('./userFeed-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/user-feed', userFeedRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
