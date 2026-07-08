const LocationService = require('../../Services/LocationServices');

class LocationController {
    async getAllLocation(req, res) {
        const location = await LocationService.getAllLocation();
        return res.status(200).json({
            success: true,
            data: location
        })
    }

    async postLocation(req, res) {
        const locationData = { ...req.body };
        const newLocation = await LocationService.createLocation(locationData);
        return res.status(200).json({
            success: true,
            data: newLocation
        })
    }

    async putLocation(req, res) {
        const ma_dia_diem = req.params.ma_dia_diem;
        const locationData = { ...req.body };
        const updatedLocation = await LocationService.editLocation(ma_dia_diem, locationData);
        return res.status(200).json({
            success: true,
            data: updatedLocation
        })
    }

    async deleteLocation(req, res) {
        const ma_dia_diem = req.params.ma_dia_diem;
        const locationData = {
            trang_thai: 'deleted'
        };
        const updatedLocation = await LocationService.editLocation(ma_dia_diem, locationData);
        return res.status(200).json({
            success: true,
        })
    }
};

module.exports = new LocationController();