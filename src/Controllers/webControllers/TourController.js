const TourServices = require('../../Services/TourServices');
const TourScheduleServices = require('../../Services/TourScheduleServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');

class TourController {
    async getTours(req, res) {
        const [tours, category, location] = await Promise.all([
            TourServices.getAllTours(),
            CategoryServices.getCategory(),
            LocationServices.getLocation()
        ]);
        res.render('adminUI/adminToursPage', {
            title: 'Trang quản lý Tours',
            page: 'admin_tours',
            data: tours,
            category: category,
            location: location
        })
    }

    async getTourDetails(req, res) {
        const ma_tour = req.params.ma_tour;
        const [tour_details, tour_schedule, category, location] = await Promise.all([
            ma_tour !== '' ? await TourServices.getTourDetails(ma_tour) : null,
            ma_tour !== '' ? await TourScheduleServices.getTourSchedule(ma_tour) : null,
            CategoryServices.getCategory(),
            LocationServices.getLocation()
        ]);

        // console.log(ma_tour, tour_schedule)

        res.render('adminUI/formToursPage', {
            title: 'Quản lý Tours',
            page: 'admin_tours',
            data: tour_details,
            tour_schedule: tour_schedule,
            category: category,
            location: location
        })
    }
};

module.exports = new TourController();