const TourScheduleModel = require('../Models/TourSchedule');

const scheduleSeed = [
    // Lịch trình cho Hội An
    {
        tourKey: 'hoian',
        ngay_thu: 1,
        tieu_de: 'Đón khách - Rừng dừa Bảy Mẫu - Phố cổ Hội An',
        noi_dung: 'Xe đón quý khách tại Đà Nẵng khởi hành đi Hội An. Trải nghiệm bơi thuyền thúng tại rừng dừa Bảy Mẫu, tham quan phố cổ Hội An về đêm.',
        bua_an: 'Trưa, Tối',
        khach_san: 'Khách sạn Hội An 3 sao',
        dia_diem_tham_quan: ['Rừng dừa Bảy Mẫu', 'Chùa Cầu', 'Phố cổ Hội An'],
        trang_thai: 'active'
    },
    {
        tourKey: 'hoian',
        ngay_thu: 2,
        tieu_de: 'Làng gốm Thanh Hà - Trải nghiệm làm lồng đèn - Tiễn khách',
        noi_dung: 'Khám phá làng gốm cổ Thanh Hà, tham gia lớp học làm đèn lồng truyền thống Hội An trước khi xe đưa quý khách quay lại Đà Nẵng.',
        bua_an: 'Sáng, Trưa',
        khach_san: 'Không có',
        dia_diem_tham_quan: ['Làng gốm Thanh Hà', 'Xưởng thủ công nghệ thuật'],
        trang_thai: 'active'
    },
    // Lịch trình cho Hạ Long
    {
        tourKey: 'halong',
        ngay_thu: 1,
        tieu_de: 'Hà Nội - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp',
        noi_dung: 'Di chuyển từ Hà Nội đi Hạ Long. Nhận phòng du thuyền 5 sao, ăn trưa ngắm vịnh. Chèo thuyền kayak tại Hang Luồn và leo đỉnh Ti Tốp ngắm toàn cảnh vịnh.',
        bua_an: 'Trưa, Tối',
        khach_san: 'Du thuyền 5 sao',
        dia_diem_tham_quan: ['Vịnh Hạ Long', 'Hang Luồn', 'Đảo Ti Tốp'],
        trang_thai: 'active'
    },
    {
        tourKey: 'halong',
        ngay_thu: 2,
        tieu_de: 'Hang Sửng Sốt - Sunset Party - Hà Nội',
        noi_dung: 'Tập Tai Chi ngắm bình minh trên boong tàu. Tham quan Hang Sửng Sốt - hang động lớn nhất vịnh Hạ Long. Ăn trưa buffet và lên xe về lại Hà Nội.',
        bua_an: 'Sáng, Trưa',
        khach_san: 'Không có',
        dia_diem_tham_quan: ['Hang Sửng Sốt'],
        trang_thai: 'active'
    }
];

async function seedSchedules(tourIdMap) {
    console.log('Đang xóa toàn bộ lịch trình tour cũ...');
    await TourScheduleModel.deleteMany({});
    console.log('Đang thêm lịch trình tour mới...');
    const scheduleIdMap = {};
    const prepSchedules = scheduleSeed.map((sch, index) => {
        const { tourKey, ...schData } = sch;
        const doc = new TourScheduleModel({
            ...schData,
            ma_tour: tourIdMap[tourKey] || tourKey
        });
        doc.ma_lich_trinh = doc._id.toString();
        scheduleIdMap[`schedule_${index}`] = doc.ma_lich_trinh;
        return doc;
    });
    await TourScheduleModel.insertMany(prepSchedules);
    console.log('Seed lịch trình tour thành công.');
    return scheduleIdMap;
}

module.exports = { seedSchedules };
