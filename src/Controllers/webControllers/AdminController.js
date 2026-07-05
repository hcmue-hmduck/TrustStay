const TourServices = require('../../Services/TourServices');

class AdminController {
    async getDashboard(req, res) {
        const tours = await TourServices.getAllTours();
        res.render('adminUI/dashboardPage', {
            title: 'Trang quản trị',
            page: 'admin_dashboard',
            data: tours
        });
    }
}

module.exports = new AdminController();