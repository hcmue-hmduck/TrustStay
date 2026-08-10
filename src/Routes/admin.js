const express = require('express');
const router = express.Router();

const AdminController = require('../Controllers/webControllers/AdminController');
const RoomController = require('../Controllers/webControllers/RoomController'); 

router.use((req, res, next) => {
    res.locals.layout = 'layouts/adminLayout';
    next();
});

router.get('/dashboard', AdminController.getDashboard);

// Rooms Management
router.get('/rooms', RoomController.getRooms);
router.get('/rooms/:ma_phong', RoomController.getRoomDetails);

// Categories & Locations Management
router.get('/categories', AdminController.getCategoriesPage);
router.get('/locations', AdminController.getLocationsPage);

// Viewing Requests Management
router.get('/requests', AdminController.getRequestsPage);

// Customer Reviews Management
router.get('/reviews', AdminController.getReviewsPage);

// Blog Posts Management
router.get('/blogs', AdminController.getBlogsPage);

module.exports = router;