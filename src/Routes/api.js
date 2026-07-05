const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');
const CategoryController = require('../Controllers/apiControllers/CategoryController');
const TourController = require('../Controllers/apiControllers/TourController');

router.get('/user', UserController.getAllUser);

router.get('/tours/:ma_tour', TourController.getTourDetails)
router.post('/tours/create', TourController.postTours)
router.put('/tours/update/:ma_tour', TourController.putTours)
router.delete('/tours/delete/:ma_tour', TourController.deleteTour)

router.get('/category', CategoryController.getCategory)
router.post('/category', CategoryController.postCategory)
router.put('/category/:ma_danh_muc', CategoryController.putCategory)
router.delete('/category/:ma_danh_muc', CategoryController.deleteCategory)

module.exports = router;