const express = require('express');
const router = express.Router();

const AdminController = require('../Controllers/webControllers/AdminController');
const TourController = require('../Controllers/webControllers/TourController'); 

router.use((req, res, next) => {
    res.locals.layout = 'layouts/adminLayout';
    next();
});


router.get('/dashboard', AdminController.getDashboard)


router.get('/tours', TourController.getTours)
router.get('/tours/:ma_tour', TourController.getTourDetails) 


module.exports = router;