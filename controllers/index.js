const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const feedRoutes = require('./feed-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/feed-routes', feedRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
