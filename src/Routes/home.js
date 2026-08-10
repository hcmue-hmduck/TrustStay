const express = require('express');
const router = express.Router();

const HomeController = require('../Controllers/webControllers/HomeController');

router.use((req, res, next) => {
    res.locals.layout = 'layouts/homeLayout';
    next();
});

router.get('/', HomeController.getHomePage);
router.get('/rooms', HomeController.getHomeRooms);
router.get('/room-details/:ma_phong', HomeController.getRoomDetail);
router.get('/blogs', HomeController.getHomeBlog);
router.get('/blogs/:ma_bai_viet', HomeController.getHomeBlogDetail);
router.get('/contacts', HomeController.getHomeContact);

module.exports = router;