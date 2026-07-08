const TourImageModel = require('../Models/TourImageModel');
class TourImageServices {
    async getTourImage(ma_tour) {
        const tourImages = await TourImageModel.find({
            trang_thai: 'active',
            ma_tour: ma_tour
        })
        return tourImages;
    }
}

module.exports = new TourImageServices();