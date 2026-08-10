const RoomRequestModel = require('../Models/RoomRequestModel');

async function seedRoomRequests(rooms) {
    console.log('Đang xóa dữ liệu yêu cầu hẹn xem phòng cũ...');
    await RoomRequestModel.deleteMany({});
    if (!rooms || rooms.length === 0) return;

    console.log('Đang thêm yêu cầu hẹn xem phòng mẫu...');
    const reqSeed = [
        {
            ho_ten_khach: 'Nguyễn Văn Minh',
            email_khach: 'minh.nguyen@gmail.com',
            so_dien_thoai_khach: '0908123456',
            ngay_hen_xem: new Date(Date.now() + 86400000 * 2),
            so_nguoi_o: 2,
            ghi_chu: 'Em muốn hẹn xem phòng vào tầm 5h chiều sau giờ làm được không ạ?',
            trang_thai: 'pending'
        },
        {
            ho_ten_khach: 'Trần Thị Thu Hà',
            email_khach: 'thuha.tran@gmail.com',
            so_dien_thoai_khach: '0912345678',
            ngay_hen_xem: new Date(Date.now() + 86400000 * 3),
            so_nguoi_o: 1,
            ghi_chu: 'Phòng này còn trống cho nuôi mèo nhỏ không anh/chị?',
            trang_thai: 'contacted'
        }
    ];

    const prep = reqSeed.map((item, index) => {
        const doc = new RoomRequestModel({
            ...item,
            ma_phong: rooms[index % rooms.length].ma_phong
        });
        doc.ma_yeu_cau = 'YCX' + (1000 + index);
        return doc;
    });

    await RoomRequestModel.insertMany(prep);
    console.log('Seed yêu cầu hẹn xem phòng thành công.');
}

module.exports = { seedRoomRequests };
