const TourModel = require('../Models/TourModel');

class TourService {
    async getAllTours() {
        try {
            const tours = await TourModel.find();
            return tours;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getTourDetails(tour_id) {
        try {
            const tour_details = await TourModel.findById(tour_id);
            return tour_details;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new TourService();