const RoomServices = require('../../Services/RoomServices');
const RoomImageServices = require('../../Services/RoomImageServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');
const BlogServices = require('../../Services/BlogServices');
const ContactServices = require('../../Services/ContactServices');
const ReviewServices = require('../../Services/ReviewServices');

class HomeController {
    async getHomePage(req, res) {
        try {
            const [room_noi_bat, category, location] = await Promise.all([
                RoomServices.getRoomFavourite(6),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation()
            ]);
            res.render('homeUI/homePage', {
                title: 'TrustStay - Tìm & Cho Thuê Phòng Trọ Uy Tín',
                page: 'home',
                room_noi_bat: room_noi_bat,
                category: category,
                location: location
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getHomeRooms(req, res) {
        try {
            const { ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price } = req.query;
            const [rooms, category, location] = await Promise.all([
                RoomServices.getRoomsByFilter({ ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price }),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation()
            ]);
            res.render('homeUI/roomsPage', {
                title: 'Danh sách Phòng Trọ - TrustStay',
                page: 'list_rooms',
                data: rooms,
                category: category,
                location: location,
                filter: { ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price }
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getRoomDetail(req, res) {
        try {
            const ma_phong = req.params.ma_phong;
            
            const [room_details, room_images, category, location, reviews, ratingStats] = await Promise.all([
                RoomServices.getRoomDetails(ma_phong),
                RoomImageServices.getRoomImage(ma_phong),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation(),
                ReviewServices.getReviewsByRoom(ma_phong),
                ReviewServices.getAverageRating(ma_phong)
            ]);
            
            res.render('homeUI/roomDetails', {
                title: room_details ? room_details.ten_phong : 'Chi tiết Phòng Trọ',
                page: 'room_details',
                data: room_details,
                room_images: room_images,
                category: category,
                location: location,
                reviews: reviews || [],
                ratingStats: ratingStats || { avgRating: 5.0, totalReviews: 0 }
            });
        } catch(error) {
            console.error(error);
            res.status(500).send("Lỗi khi tải trang");
        }
    }

    async getHomeBlog(req, res) {
        const blogs = await BlogServices.getAllBlog();
        return res.render('homeUI/blogPage', {
            title: 'Kinh Nghiệm Thuê Phòng - TrustStay',
            page: 'blogs',
            data: blogs
        });
    }

    async getHomeBlogDetail(req, res) {
        try {
            const ma_bai_viet = req.params.ma_bai_viet;
            const [blog, allBlogs] = await Promise.all([
                BlogServices.getBlogDetails(ma_bai_viet),
                BlogServices.getAllBlog()
            ]);

            res.render('homeUI/blogDetail', {
                title: blog ? blog.tieu_de : 'Chi Tiết Bài Viết - TrustStay',
                page: 'blogs',
                data: blog,
                relatedBlogs: (allBlogs || []).filter(b => b.ma_bai_viet !== ma_bai_viet).slice(0, 3)
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi khi tải bài viết");
        }
    }

    async getHomeContact(req, res) {
        const contacts = await ContactServices.getContact();
        return res.render('homeUI/contactPage', {
            title: 'Liên Hệ Hỗ Trợ - TrustStay',
            page: 'contacts',
            data: contacts
        });
    }
}

module.exports = new HomeController();