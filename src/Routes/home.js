const express = require('express');
const router = express.Router();

const HomeController = require('../Controllers/HomeController');

router.use((req, res, next) => {
    res.locals.layout = 'layouts/homeLayout';
    next();
});

router.get('/', HomeController.getHomePage);
router.get('/tours', HomeController.getHomeTours);

router.get('/tour-details/:tour_id', HomeController.getTourDetail);

module.exports = router;