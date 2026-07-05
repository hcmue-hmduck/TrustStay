const TourRequestModel = require('../Models/TourRequestModel');

const requestSeed = [
    {
        tourKey: 'hoian',
        startTourKey: 'hoian_0',
        ho_ten_khach: 'Trần Văn Quyết',
        email_khach: 'tranvanquyet@gmail.com',
        so_dien_thoai_khach: '0977112233',
        so_luong_nguoi_lon: 2,
        so_luong_tre_em: 1,
        ghi_chu: 'Cần phòng hướng vườn nếu có thể.',
        trang_thai: 'pending'
    },
    {
        tourKey: 'halong',
        startTourKey: 'halong_2',
        ho_ten_khach: 'Phạm Minh Đức',
        email_khach: 'minhduc@gmail.com',
        so_dien_thoai_khach: '0911889900',
        so_luong_nguoi_lon: 4,
        so_luong_tre_em: 0,
        ghi_chu: 'Yêu cầu hỗ trợ đồ ăn chay.',
        trang_thai: 'contacted'
    }
];

async function seedTourRequests(tourIdMap, startTourIdMap) {
    console.log('Đang xóa toàn bộ yêu cầu đặt tour cũ...');
    await TourRequestModel.deleteMany({});
    console.log('Đang thêm yêu cầu đặt tour mới...');
    const prepRequests = requestSeed.map(req => {
        const { tourKey, startTourKey, ...reqData } = req;
        const doc = new TourRequestModel({
            ...reqData,
            ma_tour: tourIdMap[tourKey] || tourKey,
            ma_lich_khoi_hanh: startTourIdMap[startTourKey] || null
        });
        doc.ma_yeu_cau = doc._id.toString();
        return doc;
    });
    await TourRequestModel.insertMany(prepRequests);
    console.log('Seed yêu cầu đặt tour thành công.');
}

module.exports = { seedTourRequests };
