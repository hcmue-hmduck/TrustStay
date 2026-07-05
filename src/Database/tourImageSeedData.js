const TourImageModel = require('../Models/TourImageModel');

const imageSeed = [
    {
        tourKey: 'hoian',
        duong_dan_anh: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        mo_ta: 'Phố cổ Hội An lung linh đèn lồng buổi tối',
        la_anh_chinh: true,
        thu_tu: 1,
        trang_thai: 'active'
    },
    {
        tourKey: 'hoian',
        duong_dan_anh: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        mo_ta: 'Rừng dừa Bảy Mẫu xanh mát',
        la_anh_chinh: false,
        thu_tu: 2,
        trang_thai: 'active'
    },
    {
        tourKey: 'halong',
        duong_dan_anh: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
        mo_ta: 'Vịnh Hạ Long chụp từ đỉnh đảo Ti Tốp',
        la_anh_chinh: true,
        thu_tu: 1,
        trang_thai: 'active'
    },
    {
        tourKey: 'sapa',
        duong_dan_anh: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80',
        mo_ta: 'Ruộng bậc thang Sa Pa mùa lúa chín vàng',
        la_anh_chinh: true,
        thu_tu: 1,
        trang_thai: 'active'
    }
];

async function seedImages(tourIdMap) {
    console.log('Đang xóa toàn bộ hình ảnh tour cũ...');
    await TourImageModel.deleteMany({});
    console.log('Đang thêm hình ảnh tour mới...');
    const prepImages = imageSeed.map(img => {
        const { tourKey, ...imgData } = img;
        const doc = new TourImageModel({
            ...imgData,
            ma_tour: tourIdMap[tourKey] || tourKey
        });
        doc.ma_hinh_anh = doc._id.toString();
        return doc;
    });
    await TourImageModel.insertMany(prepImages);
    console.log('Seed hình ảnh tour thành công.');
}

module.exports = { seedImages };
