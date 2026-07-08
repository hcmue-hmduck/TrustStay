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

    async getLocation() {
        const locations = await LocationModel.find({
            trang_thai: 'active'
        });
        return locations;
    }

    async createLocation(locationData) {
        const newLocation = new LocationModel(locationData);
        newLocation.ma_dia_diem = newLocation._id.toString();
        return await newLocation.save();
    }

    async editLocation(ma_dia_diem, locationData) {
        const updatedLocation = await LocationModel.findOneAndUpdate(
            { ma_dia_diem: ma_dia_diem },
            locationData,
            {
                returnDocument: 'after',
                runValidators: true
            }
        )
        return updatedLocation;
    }

    async getLocationFavourite(limit) {
        let query = LocationModel.find({
            trang_thai: 'active'
        });
        if (limit) {
            query = query.limit(limit);
        }
        const location = await query;
        return location;
    }
};

module.exports = new LocationService();