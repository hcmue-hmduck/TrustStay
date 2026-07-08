const TourScheduleServices = require('../../Services/TourScheduleServices')

class TourScheduleController{
    async getTourSchedule(req, res) {
        const ma_tour = req.params.ma_tour;
        const tour_schedule = await TourScheduleServices.getTourSchedule(ma_tour);
        return res.status(201).json({
            success: true,
            tour_schedule: tour_schedule
        })
    }

    async postTourSchedule(req, res) {
        const scheduleData = { ...req.body }; 
        const newSchedule = await TourScheduleServices.createTourSchedule(scheduleData);
        return res.status(201).json({
            success: true,
            data: newSchedule
        })
    }

    async putTourSchedule(req, res) {
        const ma_lich_trinh = req.params.ma_lich_trinh;
        const scheduleData = { ...req.body };
        const updatedSchedule = await TourScheduleServices.editTourSchedule(ma_lich_trinh, scheduleData);
        return res.status(201).json({
            success: true,
            data: updatedSchedule
        })
    }

    async deleteTourSchedule(req, res) {
        const ma_lich_trinh = req.params.ma_lich_trinh;
    }
};

module.exports = new TourScheduleController();