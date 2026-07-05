const LocationModel = require('../Models/LocationModel');

class LocationService {
    async getAllLocation() {
        try {
            const locations = await LocationModel.find({
                trang_thai: {
                    $ne: 'deleted'
                }
            });
            return locations;
        } catch(error) {
            throw new Error(error.message);
        }
    }
};

module.exports = new LocationService();