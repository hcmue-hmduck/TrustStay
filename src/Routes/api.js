const express = require('express');
const router = express.Router();

const upload = require('../Configs/configMulter');

const UserController = require('../Controllers/apiControllers/UserController');
const CategoryController = require('../Controllers/apiControllers/CategoryController');
const TourController = require('../Controllers/apiControllers/TourController');
const LocationController = require('../Controllers/apiControllers/LocationController');
// const TourScheduleController = require('../Controllers/apiControllers/TourScheduleController');

const UploadController = require('../Controllers/apiControllers/UploadController');

router.get('/user', UserController.getAllUser);

router.get('/tours/:ma_tour', TourController.getTourDetails)
router.post('/tours/create', TourController.postTours)
router.put('/tours/update/:ma_tour', TourController.putTours)
router.delete('/tours/delete/:ma_tour', TourController.deleteTour)

// router.get('/tour-schedules/:ma_tour', TourScheduleController.getTourSchedule);
// router.post('/tour-schedules/create', TourScheduleController.postTourSchedule);
// router.put('/tour-schedules/update/:ma_lich_trinh', TourScheduleController.putTourSchedule);
// router.delete('/tour-schedules/:ma_lich_trinh', TourScheduleController.deleteTourSchedule);

router.get('/category', CategoryController.getCategory)
router.post('/category', CategoryController.postCategory)
router.put('/category/:ma_danh_muc', CategoryController.putCategory)
router.delete('/category/:ma_danh_muc', CategoryController.deleteCategory)

router.get('/location', LocationController.getAllLocation)
router.post('/location', LocationController.postLocation)
router.put('/location/:ma_dia_diem', LocationController.putLocation)
router.delete('/location/:ma_dia_diem', LocationController.deleteLocation)

router.post('/upload-file', upload.single('file'), UploadController.postFile)
router.post('/upload-files', upload.array('files'), UploadController.postFiles)


router.get('/images/:fileId', UploadController.getImage)

module.exports = router;