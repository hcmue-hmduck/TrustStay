const RoomServices = require('../../Services/RoomServices');
const RoomRequestServices = require('../../Services/RoomRequestServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');
const ReviewServices = require('../../Services/ReviewServices');
const BlogServices = require('../../Services/BlogServices');

class AdminController {
    async getDashboard(req, res) {
        const [rooms, requests, categories, locations, blogs] = await Promise.all([
            RoomServices.getAllRooms(),
            RoomRequestServices.getAllRoomRequests(),
            CategoryServices.getAllCategory(),
            LocationServices.getAllLocation(),
            BlogServices.getAllBlog()
        ]);
        res.render('adminUI/dashboardPage', {
            title: 'Trang Quản Trị - TrustStay',
            page: 'admin_dashboard',
            data: rooms,
            requests: requests,
            categories: categories,
            locations: locations,
            blogs: blogs
        });
    }

    async getCategoriesPage(req, res) {
        const categories = await CategoryServices.getAllCategory();
        res.render('adminUI/adminCategoriesPage', {
            title: 'Quản Lý Danh Mục Phòng Trọ - TrustStay Admin',
            page: 'admin_categories',
            data: categories
        });
    }

    async getLocationsPage(req, res) {
        const locations = await LocationServices.getAllLocation();
        res.render('adminUI/adminLocationsPage', {
            title: 'Quản Lý Khu Vực / Địa Điểm - TrustStay Admin',
            page: 'admin_locations',
            data: locations
        });
    }

    async getRequestsPage(req, res) {
        const requests = await RoomRequestServices.getAllRoomRequests();
        res.render('adminUI/adminRequestsPage', {
            title: 'Quản Lý Yêu Cầu Hẹn Xem Phòng - TrustStay Admin',
            page: 'admin_requests',
            data: requests
        });
    }

    async getReviewsPage(req, res) {
        const RoomModel = require('../../Models/RoomModel');
        const ReviewModel = require('../../Models/ReviewModel');
        const [reviews, rooms] = await Promise.all([
            ReviewModel.find({}).sort({ createdAt: -1 }),
            RoomModel.find({})
        ]);

        res.render('adminUI/adminReviewsPage', {
            title: 'Quản Lý Đánh Giá Khách Hàng - TrustStay Admin',
            page: 'admin_reviews',
            data: reviews,
            rooms: rooms
        });
    }

    async getBlogsPage(req, res) {
        const blogs = await BlogServices.getAllBlog();
        res.render('adminUI/adminBlogsPage', {
            title: 'Quản Lý Bài Viết Kinh Nghiệm - TrustStay Admin',
            page: 'admin_blogs',
            data: blogs
        });
    }
}

module.exports = new AdminController();