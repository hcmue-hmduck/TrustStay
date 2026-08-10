const express = require('express');
const router = express.Router();

const upload = require('../Configs/configMulter');

const UserController = require('../Controllers/apiControllers/UserController');
const CategoryController = require('../Controllers/apiControllers/CategoryController');
const RoomController = require('../Controllers/apiControllers/RoomController');
const RoomRequestController = require('../Controllers/apiControllers/RoomRequestController');
const ReviewController = require('../Controllers/apiControllers/ReviewController');
const BlogController = require('../Controllers/apiControllers/BlogController');
const LocationController = require('../Controllers/apiControllers/LocationController');
const UploadController = require('../Controllers/apiControllers/UploadController');

router.get('/user', UserController.getAllUser);

// Room routes
router.get('/rooms', RoomController.getRooms);
router.get('/rooms/:ma_phong', RoomController.getRoomDetails);
router.post('/rooms/create', RoomController.postRooms);
router.put('/rooms/update/:ma_phong', RoomController.putRooms);
router.delete('/rooms/delete/:ma_phong', RoomController.deleteRoom);

// Room Request routes (Liên hệ xem phòng)
router.post('/room-requests/create', RoomRequestController.postRoomRequest);
router.get('/room-requests', RoomRequestController.getRoomRequests);
router.put('/room-requests/update/:ma_yeu_cau', RoomRequestController.putRoomRequestStatus);

// Review routes (Đánh giá phòng)
router.post('/reviews/create', ReviewController.postReview);
router.get('/reviews/room/:ma_phong', ReviewController.getRoomReviews);

// Blog routes (Chia sẻ kinh nghiệm thuê trọ)
router.get('/blogs', BlogController.getBlogs);
router.post('/blogs/create', BlogController.postBlog);

// Category routes
router.get('/category', CategoryController.getCategory);
router.post('/category', CategoryController.postCategory);
router.put('/category/:ma_danh_muc', CategoryController.putCategory);
router.delete('/category/:ma_danh_muc', CategoryController.deleteCategory);

// Location routes
router.get('/location', LocationController.getAllLocation);
router.post('/location', LocationController.postLocation);
router.put('/location/:ma_dia_diem', LocationController.putLocation);
router.delete('/location/:ma_dia_diem', LocationController.deleteLocation);

// Upload routes
router.post('/upload-file', upload.single('file'), UploadController.postFile);
router.post('/upload-files', upload.array('files'), UploadController.postFiles);
router.get('/images/:fileId', UploadController.getImage);

module.exports = router;