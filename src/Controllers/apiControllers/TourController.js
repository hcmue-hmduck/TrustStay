const TourServices = require('../../Services/TourServices');
const TourScheduleServices = require('../../Services/TourScheduleServices');
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
        const [tour_details, category, location] = await Promise.all([
            TourServices.getTourDetails(ma_tour),
            CategoryServices.getCategory(),
            LocationServices.getLocation()
        ]);
        res.json({
            success: true,
            data: tour_details,
            category: category,
            location: location
        })
    }

    async postTours(req, res) {
        const tourData = { ...req.body };
        let scheduleData = req.body.lich_trinh_chi_tiet || {};
        delete tourData.lich_trinh_chi_tiet;


        const newTour = await TourServices.createTour(tourData);

        const createScheduleData = scheduleData.map(item => ({
            ...item,
            ma_tour: newTour.ma_tour
        }));

        console.log(scheduleData);

        const createdSchedule = await TourScheduleServices.createTourSchedule(createScheduleData);

        res.json({
            success: true,
            data: newTour,
            createdSchedule: createdSchedule
        })
    }

    async putTours(req, res) {
        const ma_tour = req.params.ma_tour;
        let scheduleData = req.body.lich_trinh_chi_tiet || {};
        let createScheduleData = {};
        let editScheduleData = {};
        const tourData = {
            ...req.body,
            la_noi_bat: req.body.la_noi_bat ?? false
        };
        delete tourData.lich_trinh_chi_tiet;

        scheduleData = scheduleData.map(item => ({
            ...item,
            ma_tour: ma_tour
        }));
     
        const activeIds = scheduleData.map(item => item.ma_lich_trinh).filter(id => id !== '');
        createScheduleData = scheduleData.filter(item => item.ma_lich_trinh === '');
        editScheduleData = scheduleData.filter(item => item.ma_lich_trinh !== '');

        console.log(scheduleData);
        console.log(activeIds);

        const [updatedTour, createdSchedule, updatedSchedule, deleteSchedule] = await Promise.all([
            TourServices.editTour(ma_tour, tourData),
            createScheduleData.length > 0 ? TourScheduleServices.createTourSchedule(createScheduleData) : Promise.resolve([]),
            editScheduleData.length > 0 ? TourScheduleServices.editTourSchedule(editScheduleData) : Promise.resolve([]),
            TourScheduleServices.deleteTourSchedule(ma_tour, activeIds)
        ]);
        res.json({
            success: true,
            data: updatedTour,
            createdSchedule: createdSchedule,
            updatedSchedule: updatedSchedule,
            deleteSchedule: deleteSchedule
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