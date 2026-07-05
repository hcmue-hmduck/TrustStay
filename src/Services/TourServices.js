const TourModel = require('../Models/TourModel');

class TourService {
    async getAllTours() {
        try {
            const tours = await TourModel.find({
                trang_thai: {
                    $ne: 'deleted'
                }
            });
            return tours;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getTourDetails(ma_tour) {
        try {
            const tour_details = await TourModel.findOne({
                ma_tour: ma_tour
            });
            return tour_details;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createTour(tourData) {
        const newTour = new TourModel(tourData);
        newTour.ma_tour = newTour._id.toString();
        return await newTour.save();
    }

    async editTour(ma_tour, tourData) {
        const updatedTour = await TourModel.findOneAndUpdate(
            { ma_tour: ma_tour },
            tourData,
            {
                returnDocument: 'after',
                runValidators: true
            }
        );
        return updatedTour;
    }
}

module.exports = new TourService();