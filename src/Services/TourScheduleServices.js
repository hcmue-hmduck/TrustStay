const TourScheduleModel = require('../Models/TourSchedule');

class TourScheduleServices{
    async getTourSchedule(ma_tour) {
        const tour_schedule = await TourScheduleModel.find({
            ma_tour: ma_tour,
            trang_thai: 'active'
        })
        return tour_schedule;
    }

    async createTourSchedule(scheduleData) {
        if (Array.isArray(scheduleData)) {
            // Nếu là mảng (nhiều object)
            const schedulesToSave = scheduleData.map(item => {
                const doc = new TourScheduleModel(item);
                doc.ma_lich_trinh = doc._id.toString();
                return doc;
            });
            return await TourScheduleModel.insertMany(schedulesToSave);
        } else {
            // Nếu chỉ là 1 object
            const newSchedule = new TourScheduleModel(scheduleData);
            newSchedule.ma_lich_trinh = newSchedule._id.toString();
            return await newSchedule.save();
        }
    }

    async editTourSchedule(scheduleData) {
        if (Array.isArray(scheduleData)) {
            const schedulesToEdit = await Promise.all(
                scheduleData.map(async (item) => {
                    return await TourScheduleModel.findOneAndUpdate(
                        { ma_lich_trinh: item.ma_lich_trinh },
                        item,
                        {
                            returnDocument: 'after',
                            runValidators: true
                        }
                    );
                })
            );
            return schedulesToEdit;
            
        } else {
            const updatedSchedule = await TourScheduleModel.findOneAndUpdate(
                { ma_lich_trinh: scheduleData.ma_lich_trinh },
                scheduleData,
                {
                    returnDocument: 'after',
                    runValidators: true
                }
            );
            return updatedSchedule;
        }
    }

    async deleteTourSchedule(ma_tour, activeIds) {
        const deletedSchedule = await TourScheduleModel.updateMany(
            { 
                ma_tour: ma_tour, 
                ma_lich_trinh: { $nin: activeIds } 
            },
            { trang_thai: 'deleted' }
        );
        return deletedSchedule;
    }
};

module.exports = new TourScheduleServices();