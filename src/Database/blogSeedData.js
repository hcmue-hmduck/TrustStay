const BlogModel = require('../Models/BlogModel');

const blogSeed = [
    {
        userKey: 'admin_user',
        tieu_de: 'Kinh nghiệm tìm thuê phòng trọ sinh viên gần trường ĐH không lo bị ép giá',
        tom_tat: 'Chia sẻ toàn bộ bí quyết từ bạn Minh Anh (sinh viên năm 3) sau 3 năm đúc kết kinh nghiệm tìm trọ, soi hợp đồng và đàm phán giá điện nước tại TP.HCM.',
        noi_dung: 'Tìm phòng trọ sinh viên luôn là nỗi trăn trở lớn đối với tân sinh viên khi bước chân lên thành phố. Bài viết này hướng dẫn chi tiết cách khảo sát khu vực lân cận trường học, kiểm tra kỹ lưỡng hệ thống điện nước, cửa nẻo an ninh, tính chính xác của hợp đồng đặt cọc và mẹo không bị chủ trọ hét giá nước sinh hoạt.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'staff_user',
        tieu_de: 'Review thực tế 6 tháng sống tại Căn hộ Studio Mini đầy đủ nội thất khu vực Quận 7',
        tom_tat: 'Đánh giá chân thực từ anh Việt Hùng (Nhân viên IT) về chi phí sinh hoạt, an toàn bãi xe, không gian thoáng đãng và trải nghiệm tìm trọ qua hệ thống TrustStay.',
        noi_dung: 'Căn hộ Studio Mini đang trở thành xu hướng tìm kiếm hàng đầu cho người đi làm nhờ sự riêng tư và tiện nghi. Bài viết tổng kết ưu nhược điểm thực tế: chi phí gửi xe, giờ giấc tự do, tốc độ wifi, độ cách âm phòng và dịch vụ hỗ trợ xem phòng miễn phí 24/7 từ đội ngũ TrustStay.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'admin_user',
        tieu_de: 'Checklist 10 điều nhất định phải kiểm tra trước khi đặt cọc tiền thuê phòng trọ',
        tom_tat: 'Tránh xa cạm bẫy lừa đảo cọc online bằng danh sách checklist kiểm tra pháp lý chủ nhà, đồng hồ điện nước riêng biệt và cam kết không có chi phí ẩn.',
        noi_dung: 'Đặt cọc thuê trọ sai cách có thể khiến bạn tiền mất tật mang. Trước khi đặt cọc, hãy luôn yêu cầu xem căn cước công dân của chủ trọ, kiểm tra tình trạng hoạt động của đồng hồ điện nước, ghi rõ điều khoản hoàn tiền cọc trong giấy biên nhận và cam kết từ TrustStay.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'staff_user',
        tieu_de: 'Trải nghiệm tìm trọ ở ghép (Roommate) an toàn và văn minh cho người đi làm',
        tom_tat: 'Bí quyết chọn bạn ở ghép hợp cạ, thống nhất quy tắc sinh hoạt chung và chia sẻ chi phí thuê nhà công bằng, vui vẻ cho dân văn phòng.',
        noi_dung: 'Ở ghép giúp tiết kiệm 50% chi phí thuê phòng trọ nhưng cũng nảy sinh nhiều bất đồng nếu không thống nhất từ đầu. Bài viết chia sẻ bộ quy tắc ứng xử khi ở ghép: chia nhỏ hóa đơn điện nước, phân công dọn dẹp vệ sinh và đăng bài tìm bạn ở ghép uy tín trên TrustStay.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'admin_user',
        tieu_de: 'Bí quyết trang trí decor phòng trọ diện tích 20m² thành không gian sống Chill & Xịn',
        tom_tat: 'Hướng dẫn tối ưu diện tích phòng trọ nhỏ, chọn nội thất lắp ghép thông minh và bài trí ánh sáng giúp căn phòng luôn ngăn nắp và ấm cúng.',
        noi_dung: 'Dù chỉ là phòng trọ thuê lại, bạn hoàn toàn có thể biến nơi đây thành tổ ấm mang phong cách cá nhân. Tham khảo ngay mẹo dán tường giả gỗ, dùng kệ treo đa năng, bố trí cây xanh phong thủy và đèn led trang trí cực chill với ngân sách chỉ từ 500k.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'staff_user',
        tieu_de: 'Mẹo tiết kiệm điện nước tối đa cho người thuê trọ vào mùa nắng nóng',
        tom_tat: 'Bí quyết sử dụng điều hòa, tủ lạnh và các thiết bị điện gia dụng hiệu quả giúp giảm 30-40% tiền điện sinh hoạt hàng tháng.',
        noi_dung: 'Vào mùa hè ngột ngạt, tiền điện phòng trọ thường tăng vọt khiến nhiều người đau đầu. Bài viết chia sẻ kinh nghiệm vệ sinh màng lọc máy lạnh định kỳ, đặt nhiệt độ ở mức 26-27°C kết hợp quạt gió, kiểm tra viền cao su tủ lạnh và sử dụng bóng đèn LED tiết kiệm điện năng cho không gian trọ.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'admin_user',
        tieu_de: 'Quy trình thanh lý hợp đồng trọ và nhận lại 100% tiền đặt cọc êm đẹp',
        tom_tat: 'Hướng dẫn các bước thông báo trả phòng đúng hạn, bàn giao nguyên trạng thiết bị và chốt sổ điện nước với chủ nhà đúng pháp lý.',
        noi_dung: 'Khi đến hạn kết thúc hợp đồng thuê trọ, việc bàn giao lại phòng gọn gàng sạch sẽ là yếu tố quyết định giúp bạn nhận lại nguyên vẹn số tiền đặt cọc. Tham khảo ngay mốc thời gian báo trước 30 ngày, chụp ảnh lại tình trạng sơn tường, dọn dẹp đồ cá nhân và kiểm tra chỉ số đồng hồ điện nước chót.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1000&q=80',
        trang_thai: 'published'
    }
];

async function seedBlogs(userIdMap) {
    console.log('Đang xóa toàn bộ bài viết cũ...');
    await BlogModel.deleteMany({});
    console.log('Đang thêm bài viết mới...');
    const prepBlogs = blogSeed.map(blog => {
        const { userKey, ...blogData } = blog;
        const doc = new BlogModel({
            ...blogData,
            ma_nguoi_dung: userIdMap[userKey] || userKey
        });
        doc.ma_bai_viet = doc._id.toString();
        return doc;
    });
    await BlogModel.insertMany(prepBlogs);
    console.log('Seed bài viết blog phòng trọ thành công.');
}

module.exports = { seedBlogs };
