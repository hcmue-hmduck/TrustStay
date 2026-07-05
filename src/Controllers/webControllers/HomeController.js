
const UserServices = require('../../Services/UserServices');
const TourServices = require('../../Services/TourServices');

class HomeController {
    async getHomePage(req, res) {
        try {
            const user = await UserServices.getAllUser();
            res.render('homeUI/homePage', {
                title: 'Du lịch Thuẩn Phong Việt',
                page: 'home',
                data: user
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getHomeTours(req, res) {
        try {
            const tours = await TourServices.getAllTours();
            res.render('homeUI/toursPage', {
                title: 'Danh sách các Tours',
                page: 'tours',
                data: tours
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Lỗi tải trang");
        }
    }

    async getTourDetail(req, res) {
        try {
            const ma_tour = req.params.ma_tour;
            const tour_details = await TourServices.getTourDetails(ma_tour);
            console.log(tour_details);
            res.render('homeUI/tourDetails', {
                title: 'Chi tiết về Tour',
                page: 'tour_details',
                data: tour_details
            });
        } catch(error) {
            console.error(error);
            res.status(500).send("Lỗi khi tải trang");
        }
    }
}

module.exports = new HomeController();