const TourServices = require('../../Services/TourServices');
const TourScheduleServices = require('../../Services/TourScheduleServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');
const BlogServices = require('../../Services/BlogServices');
const ContactServices = require('../../Services/ContactServices');

class HomeController {
    async getHomePage(req, res) {
        try {
            const [tour_noi_bat, category, location] = await Promise.all([
                TourServices.getTourFavourite(4),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation()
            ]);
            res.render('homeUI/homePage', {
                title: 'Du lịch Thuẩn Phong Việt',
                page: 'home',
                tour_noi_bat: tour_noi_bat,
                category: category,
                location: location
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getHomeTours(req, res) {
        try {
            const [tours, category, location] = await Promise.all([
                TourServices.getAllTours(),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation()
            ]);
            res.render('homeUI/toursPage', {
                title: 'Danh sách các Tours',
                page: 'list_tours',
                data: tours,
                category: category,
                location: location
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getTourDetail(req, res) {
        try {
            const ma_tour = req.params.ma_tour;
            
            const [tour_details, tour_schedule, category, location] = await Promise.all([
                TourServices.getTourDetails(ma_tour),
                TourScheduleServices.getTourSchedule(ma_tour),
                CategoryServices.getAllCategory(),
                LocationServices.getAllLocation()
            ]);
            console.log(tour_schedule);
            res.render('homeUI/tourDetails', {
                title: 'Chi tiết về Tour',
                page: 'tour_details',
                data: tour_details,
                tour_schedule: tour_schedule,
                category: category,
                location: location
            });
        } catch(error) {
            console.error(error);
            res.status(500).send("Lỗi khi tải trang");
        }
    }

    async getHomeBlog(req, res) {
        const blogs = await BlogServices.getAllBlog();
        return res.render('homeUI/blogPage', {
            title: 'Blog Du lịch',
            page: 'blogs',
            data: blogs
        });
    }

    async getHomeContact(req, res) {
        const contacts = await ContactServices.getContact();
        return res.render('homeUI/contactPage', {
            title: 'Liên hệ',
            page: 'contacts',
            data: contacts
        })
    }
}

module.exports = new HomeController();