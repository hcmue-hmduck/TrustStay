const RoomImageModel = require('../Models/RoomImageModel');

async function seedRoomImages(rooms) {
    console.log('Đang xóa hình ảnh phòng trọ cũ...');
    await RoomImageModel.deleteMany({});
    if (!rooms || rooms.length === 0) return;

    console.log('Đang thêm hình ảnh phòng trọ mẫu...');
    const sampleImages = [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
    ];

    const prep = [];
    rooms.forEach(room => {
        sampleImages.forEach((imgUrl, index) => {
            const doc = new RoomImageModel({
                ma_phong: room.ma_phong,
                duong_dan_anh: imgUrl,
                mo_ta: `Góc chụp ${index + 1} của ${room.ten_phong}`,
                la_anh_chinh: index === 0,
                thu_tu: index + 1,
                trang_thai: 'active'
            });
            doc.ma_hinh_anh = doc._id.toString();
            prep.push(doc);
        });
    });

    await RoomImageModel.insertMany(prep);
    console.log('Seed hình ảnh phòng trọ thành công.');
}

module.exports = { seedRoomImages };
