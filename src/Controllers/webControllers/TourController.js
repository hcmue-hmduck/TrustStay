const TourServices = require('../../Services/TourServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');

class TourController {
    async getTours(req, res) {
        const tours = await TourServices.getAllTours();
        res.render('adminUI/adminToursPage', {
            title: 'Trang quản lý Tours',
            page: 'admin_tours',
            data: tours
        })
    }

    async getTourDetails(req, res) {
        const ma_tour = req.params.ma_tour;
        const tour_details = ma_tour !== 'create' ? await TourServices.getTourDetails(ma_tour) : null;
        const category = await CategoryServices.getAllCategory();
        const location = await LocationServices.getAllLocation();
        res.render('adminUI/formToursPage', {
            title: 'Quản lý Tours',
            page: 'admin_tours',
            data: tour_details,
            category: category,
            location: location
        })
    }
};

module.exports = new TourController();