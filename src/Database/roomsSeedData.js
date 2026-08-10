const RoomModel = require('../Models/RoomModel');

const roomsSeed = [
    {
        oldCatCode: '01',
        oldLocCode: 'quanbinhthanh',
        ten_phong: 'Phòng Trọ Khép Kín Gần Đại Học HUTECH Điện Biên Phủ',
        mo_ta_ngan: 'Phòng mới xây 100%, trang bị sẵn gác xép cao, máy lạnh Inverter, lối đi riêng không chung chủ.',
        mo_ta_chi_tiet: 'Cho thuê phòng trọ cao cấp mới xây ngay đường D2 (Nguyễn Gia Trí) kết nối thẳng ra Điện Biên Phủ. Phòng có gác lửng đúc kiên cố, WC riêng thiết bị Viglacera mới tinh. Cửa khóa vân tay an toàn tuyệt đối, hệ thống PCCC đạt chuẩn. Giờ giấc tự do, cho nuôi thú cưng nhỏ.',
        gia_thue: 3800000,
        tien_coc: 3800000,
        dien_tich: 25,
        so_nguoi_toi_da: 3,
        dia_chi_chi_tiet: 'Số 142/8 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Máy lạnh', 'Gác xép', 'WC riêng', 'Wifi tốc độ cao', 'Giờ giấc tự do', 'Camera an ninh', 'Khóa vân tay'],
        la_noi_bat: true,
        trang_thai: 'active'
    },
    {
        oldCatCode: '02',
        oldLocCode: 'quan1',
        ten_phong: 'Studio Căn Hộ Mini Đầy Đủ Nội Thất Trung Tâm Quận 1',
        mo_ta_ngan: 'Căn hộ Studio thiết kế phong cách Scandinavian hiện đại, có ban công thoáng mát ngay Bùi Viện - Trần Hưng Đạo.',
        mo_ta_chi_tiet: 'Căn hộ Studio diện tích 35m2 tràn ngập ánh sáng tự nhiên. Trang bị sẵn giường nệm cao cấp, tủ quần áo kịch trần, bếp riêng trang bị bếp từ & tủ lạnh 180L, máy giặt riêng ngoài ban công. Dịch vụ dọn phòng 1 tuần/lần.',
        gia_thue: 6500000,
        tien_coc: 6500000,
        dien_tich: 35,
        so_nguoi_toi_da: 2,
        dia_chi_chi_tiet: 'Số 85/12 Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Máy lạnh', 'Tủ lạnh', 'Bếp riêng', 'Ban công', 'Máy giặt riêng', 'Nội thất đầy đủ', 'Thang máy', 'Bãi xe'],
        la_noi_bat: true,
        trang_thai: 'active'
    },
    {
        oldCatCode: '03',
        oldLocCode: 'tpthuduc',
        ten_phong: 'Ký Túc Xá Sleepbox Cao Cấp Làng Đại Học Thủ Đức',
        mo_ta_ngan: 'Hộp ngủ riêng tư có rèm kéo, tủ đồ cá nhân khóa riêng, miễn phí điện nước và mạng internet tốc độ cao.',
        mo_ta_chi_tiet: 'Mô hình Ký túc xá Sleepbox hiện đại bậc nhất cho sinh viên Làng Đại Học. Mỗi box trang bị bàn học xếp gọn, đèn đọc sách, ổ cắm USB, nệm cao su non êm ái. Khu vực sinh hoạt chung có phòng khách, tủ lạnh chung, máy giặt sấy miễn phí.',
        gia_thue: 1500000,
        tien_coc: 1500000,
        dien_tich: 10,
        so_nguoi_toi_da: 1,
        dia_chi_chi_tiet: 'Số 45 Đường số 6, Phường Linh Trung, TP. Thủ Đức, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Bao điện nước', 'Máy lạnh 24/7', 'Wifi', 'Máy giặt sấy', 'Tủ đồ riêng', 'Bếp chung', 'Rèm riêng tư'],
        la_noi_bat: true,
        trang_thai: 'active'
    },
    {
        oldCatCode: '01',
        oldLocCode: 'quan7',
        ten_phong: 'Phòng Trọ Ban Công Kính Gần ĐH Tôn Đức Thắng Quận 7',
        mo_ta_ngan: 'Phòng có ban công kính đón gió mát, kệ bếp đá hoa cương rộng rãi, khu vực an ninh yên tĩnh.',
        mo_ta_chi_tiet: 'Vị trí đắc địa ngay hẻm 793 Trần Xuân Soạn, di chuyển 3 phút sang Quận 4 và 5 phút tới ĐH Tôn Đức Thắng, RMIT. Phòng trang bị sẵn kệ bếp rộng, máy lạnh tiết kiệm điện, toilet riêng khép kín sạch sẽ.',
        gia_thue: 4200000,
        tien_coc: 4200000,
        dien_tich: 28,
        so_nguoi_toi_da: 3,
        dia_chi_chi_tiet: 'Số 793/28 Trần Xuân Soạn, Phường Tân Hưng, Quận 7, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Máy lạnh', 'Ban công', 'Kệ bếp', 'WC riêng', 'Bãi xe rộng', 'Camera an ninh'],
        la_noi_bat: false,
        trang_thai: 'active'
    },
    {
        oldCatCode: '04',
        oldLocCode: 'quanbinhthanh',
        ten_phong: 'Nhà Nguyên Căn 1 Trệt 2 Lầu 3 Phòng Ngủ Hoàng Hoa Thám',
        mo_ta_ngan: 'Nhà nguyên căn sạch đẹp, 3 phòng ngủ khép kín, thích hợp nhóm bạn hoặc gia đình ở.',
        mo_ta_chi_tiet: 'Cho thuê nhà nguyên căn hẻm xe hơi đường Hoàng Hoa Thám, Bình Thạnh. Diện tích sàn 45m2, tổng diện tích sử dụng 135m2. Bao gồm 1 phòng khách, 1 bếp, 3 phòng ngủ trang bị máy lạnh, 3 toilet và sân thượng phơi đồ.',
        gia_thue: 14000000,
        tien_coc: 20000000,
        dien_tich: 135,
        so_nguoi_toi_da: 6,
        dia_chi_chi_tiet: 'Số 102/15 Hoàng Hoa Thám, Phường 7, Quận Bình Thạnh, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Nhà nguyên căn', '3 Phòng ngủ', 'Sân thượng', 'Máy lạnh', 'Hẻm xe hơi', 'Giờ giấc tự do'],
        la_noi_bat: true,
        trang_thai: 'active'
    },
    {
        oldCatCode: '02',
        oldLocCode: 'tpthuduc',
        ten_phong: 'Căn Hộ Duplex Cửa Sổ Vòm View Đỉnh Gần ĐH Sư Phạm Kỹ Thuật',
        mo_ta_ngan: 'Căn hộ Duplex thông tầng phong cách Hàn Quốc, cửa sổ vòm lớn tràn ngập ánh sáng, nội thất mới 100%.',
        mo_ta_chi_tiet: 'Cho thuê căn hộ Duplex sang xịn mịn nằm ngay đường Lê Văn Việt, cách Đại Học Sư Phạm Kỹ Thuật 500m. Thiết kế lửng cao 2m đứng thoải mái, sofa phòng khách êm ái, tủ lạnh Inverter, máy lạnh Sharp. Tòa nhà thang máy thẻ từ, bảo vệ 24/7.',
        gia_thue: 5200000,
        tien_coc: 5200000,
        dien_tich: 32,
        so_nguoi_toi_da: 3,
        dia_chi_chi_tiet: 'Số 168 Lê Văn Việt, Phường Tăng Nhơn Phú A, TP. Thủ Đức, TP.HCM',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        tien_nghi: ['Máy lạnh', 'Sofa', 'Tủ lạnh', 'Cửa sổ vòm', 'Thang máy thẻ từ', 'Giờ giấc tự do', 'Bảo vệ 24/7'],
        la_noi_bat: true,
        trang_thai: 'active'
    }
];

async function seedRooms(categoryIdMap, locationIdMap) {
    console.log('Đang xóa toàn bộ dữ liệu phòng trọ cũ...');
    await RoomModel.deleteMany({});
    console.log('Đang thêm danh sách phòng trọ mới...');
    const prepRooms = roomsSeed.map(room => {
        const doc = new RoomModel({
            ten_phong: room.ten_phong,
            mo_ta_ngan: room.mo_ta_ngan,
            mo_ta_chi_tiet: room.mo_ta_chi_tiet,
            gia_thue: room.gia_thue,
            tien_coc: room.tien_coc,
            dien_tich: room.dien_tich,
            so_nguoi_toi_da: room.so_nguoi_toi_da,
            dia_chi_chi_tiet: room.dia_chi_chi_tiet,
            hinh_anh_dai_dien: room.hinh_anh_dai_dien,
            tien_nghi: room.tien_nghi,
            la_noi_bat: room.la_noi_bat,
            trang_thai: room.trang_thai,
            ma_danh_muc: categoryIdMap[room.oldCatCode],
            ma_dia_diem: locationIdMap[room.oldLocCode]
        });
        doc.ma_phong = doc._id.toString();
        return doc;
    });

    const insertedRooms = await RoomModel.insertMany(prepRooms);
    console.log('Seed phòng trọ thành công.');
    return insertedRooms;
}

module.exports = { seedRooms };
