const UserServices = require('../Services/UserServices');
const TourServices = require('../Services/TourServices');

class AdminController {
    async getDashboard(req, res) {
        const tours = await TourServices.getAllTours();
        res.render('adminUI/dashboardPage', {
            title: 'Trang quản trị',
            page: 'admin_dashboard',
            data: tours
        })
    }

    async getTours(req, res) {
        const tours = await TourServices.getAllTours();
        res.render('adminUI/adminToursPage', {
            title: 'Trang quản lý Tours',
            page: 'admin_tours',
            data: tours
        })
    }
}

module.exports = new AdminController();