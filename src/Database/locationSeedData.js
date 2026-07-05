const LocationModel = require('../Models/LocationModel');

const locationSeed = [
    {
        ten_dia_diem: 'Hội An',
        slug: 'hoi-an',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'Quảng Nam',
        mo_ta: 'Phố cổ Hội An - di sản văn hóa thế giới với nét đẹp cổ kính trầm mặc giăng đầy đèn lồng rực rỡ.',
        hinh_anh: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_dia_diem: 'Hạ Long',
        slug: 'ha-long',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'Quảng Ninh',
        mo_ta: 'Vịnh Hạ Long - kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi kỳ vĩ vươn lên giữa làn nước xanh lục bảo.',
        hinh_anh: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_dia_diem: 'Sa Pa',
        slug: 'sa-pa',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'Lào Cai',
        mo_ta: 'Thị trấn Sa Pa mờ sương, điểm đến lý tưởng để săn mây và chinh phục đỉnh Fansipan - Nóc nhà Đông Dương.',
        hinh_anh: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_dia_diem: 'Phú Quốc',
        slug: 'phu-quoc',
        quoc_gia: 'Việt Nam',
        tinh_thanh: 'Kiên Giang',
        mo_ta: 'Đảo Ngọc Phú Quốc - thiên đường nhiệt đới với những bãi cát trắng mịn màng và nước biển trong vắt như pha lê.',
        hinh_anh: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    }
];

async function seedLocations() {
    console.log('Đang xóa toàn bộ địa điểm cũ...');
    await LocationModel.deleteMany({});
    console.log('Đang thêm địa điểm mới...');
    const locationIdMap = {};
    const prepLocations = locationSeed.map(loc => {
        const doc = new LocationModel(loc);
        doc.ma_dia_diem = doc._id.toString();
        const oldCode = loc.slug.replace(/-/g, '');
        locationIdMap[oldCode] = doc.ma_dia_diem;
        return doc;
    });
    await LocationModel.insertMany(prepLocations);
    console.log('Seed địa điểm thành công.');
    return locationIdMap;
}

module.exports = { seedLocations };
