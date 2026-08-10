const LocationModel = require('../Models/LocationModel');

const locationSeed = [
    {
        oldCategoryCode: '01',
        ten_dia_diem: 'Quận 1',
        slug: 'quan-1',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'TP. Hồ Chí Minh',
        mo_ta: 'Khu vực trung tâm TP.HCM, thuận tiện di chuyển, nhiều tiện ích cao cấp và văn phòng làm việc.',
        hinh_anh: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        oldCategoryCode: '02',
        ten_dia_diem: 'Quận Bình Thạnh',
        slug: 'quan-binh-thanh',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'TP. Hồ Chí Minh',
        mo_ta: 'Gần các trường đại học lớn (HUTECH, Ngoại Thương, GTVT), nhiều phòng trọ sinh viên giá tốt.',
        hinh_anh: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        oldCategoryCode: '03',
        ten_dia_diem: 'TP. Thủ Đức',
        slug: 'tp-thu-duc',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'TP. Hồ Chí Minh',
        mo_ta: 'Khu đô thị sáng tạo, làng đại học quốc gia, nhiều loại hình phòng trọ, ký túc xá mọc lên sầm uất.',
        hinh_anh: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        oldCategoryCode: '04',
        ten_dia_diem: 'Quận 7',
        slug: 'quan-7',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'TP. Hồ Chí Minh',
        mo_ta: 'Khu vực Phú Mỹ Hưng, Đại học RMIT, Tôn Đức Thắng, căn hộ dịch vụ và phòng trọ hiện đại, thoáng mát.',
        hinh_anh: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    }
];

async function seedLocations(categoryIdMap) {
    console.log('Đang xóa toàn bộ địa điểm cũ...');
    await LocationModel.deleteMany({});
    console.log('Đang thêm khu vực quận/huyện mới...');
    const locationIdMap = {};
    const prepLocations = locationSeed.map(loc => {
        const doc = new LocationModel({
            ten_dia_diem: loc.ten_dia_diem,
            quoc_gia: loc.quoc_gia,
            tinh_thanh: loc.tinh_thanh,
            mo_ta: loc.mo_ta,
            hinh_anh: loc.hinh_anh,
            trang_thai: loc.trang_thai,
            ma_danh_muc: categoryIdMap ? categoryIdMap[loc.oldCategoryCode] : null
        });
        doc.ma_dia_diem = doc._id.toString();
        const oldCode = loc.slug.replace(/-/g, '');
        locationIdMap[oldCode] = doc.ma_dia_diem;
        return doc;
    });
    await LocationModel.insertMany(prepLocations);
    console.log('Seed khu vực thành công.');
    return locationIdMap;
}

module.exports = { seedLocations };
