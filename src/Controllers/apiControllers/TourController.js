const TourServices = require('../../Services/TourServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');

class TourController {
    async getTours(req, res) {
        const tours = await TourServices.getAllTours();
        res.json({
            success: true,
            data: tours
        })
    }

    async getTourDetails(req, res) {
        const ma_tour = req.params.ma_tour;
        const tour_details = await TourServices.getTourDetails(ma_tour);
        const category = await CategoryServices.getAllCategory();
        const location = await LocationServices.getAllLocation();
        res.json({
            success: true,
            data: tour_details,
            category: category,
            location: location
        })
    }

    async postTours(req, res) {
        const tourData = { ...req.body };
        const newTour = await TourServices.createTour(tourData);
        res.json({
            success: true,
            data: newTour
        })
    }

    async putTours(req, res) {
        const ma_tour = req.params.ma_tour;
        const tourData = {
            ...req.body,
            la_noi_bat: req.body.la_noi_bat ?? false
        };
        const updatedTour = await TourServices.editTour(ma_tour, tourData);
        res.json({
            success: true,
            data: updatedTour
        })
    }

    async deleteTour(req, res) {
        const ma_tour = req.params.ma_tour;
        const tourData = {
            'trang_thai': 'deleted'
        };
        await TourServices.editTour(ma_tour, tourData);
        res.json({
            success: true
        });
    }
};

module.exports = new TourController();