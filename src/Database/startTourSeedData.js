const StartTourModel = require('../Models/StartTourModel');

const startTourSeed = [
    {
        tourKey: 'hoian',
        ngay_bat_dau: new Date('2026-08-10T08:00:00Z'),
        ngay_ket_thuc: new Date('2026-08-12T17:00:00Z'),
        gia_ap_dung: 2500000,
        so_cho_con_lai: 12,
        trang_thai: 'available'
    },
    {
        tourKey: 'hoian',
        ngay_bat_dau: new Date('2026-08-20T08:00:00Z'),
        ngay_ket_thuc: new Date('2026-08-22T17:00:00Z'),
        gia_ap_dung: 2600000,
        so_cho_con_lai: 8,
        trang_thai: 'available'
    },
    {
        tourKey: 'halong',
        ngay_bat_dau: new Date('2026-08-15T08:00:00Z'),
        ngay_ket_thuc: new Date('2026-08-16T17:00:00Z'),
        gia_ap_dung: 3800000,
        so_cho_con_lai: 20,
        trang_thai: 'available'
    },
    {
        tourKey: 'sapa',
        ngay_bat_dau: new Date('2026-09-01T06:00:00Z'),
        ngay_ket_thuc: new Date('2026-09-04T18:00:00Z'),
        gia_ap_dung: 4200000,
        so_cho_con_lai: 6,
        trang_thai: 'available'
    }
];

async function seedStartTours(tourIdMap) {
    console.log('Đang xóa toàn bộ lịch khởi hành cũ...');
    await StartTourModel.deleteMany({});
    console.log('Đang thêm lịch khởi hành mới...');
    const startTourIdMap = {};
    const prepStartTours = startTourSeed.map((st, index) => {
        const { tourKey, ...stData } = st;
        const doc = new StartTourModel({
            ...stData,
            ma_tour: tourIdMap[tourKey] || tourKey
        });
        doc.ma_lich_khoi_hanh = doc._id.toString();
        // Ánh xạ sang mã của start tour cũ theo tour key
        const oldCode = tourKey + '_' + index;
        startTourIdMap[oldCode] = doc.ma_lich_khoi_hanh;
        return doc;
    });
    await StartTourModel.insertMany(prepStartTours);
    console.log('Seed lịch khởi hành thành công.');
    return startTourIdMap;
}

module.exports = { seedStartTours };
