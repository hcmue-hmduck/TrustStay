const BlogModel = require('../Models/BlogModel');

const blogSeed = [
    {
        userKey: 'admin_user',
        tieu_de: 'Kinh nghiệm du lịch Hội An tự túc từ A đến Z năm 2026',
        tom_tat: 'Chia sẻ toàn bộ kinh nghiệm đi lại, ăn chơi, nghỉ ngơi khi đi du lịch phố cổ Hội An trọn vẹn nhất.',
        noi_dung: 'Phố cổ Hội An luôn là điểm đến hấp dẫn du khách trong và ngoài nước. Bài viết này chia sẻ kinh nghiệm chọn phương tiện di chuyển, các món ngon nên thử như Cao Lầu, cơm gà, bánh mì Phượng và cách săn vé du thuyền sông Hoài cực rẻ.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'published'
    },
    {
        userKey: 'staff_user',
        tieu_de: 'Top 5 du thuyền 5 sao sang xịn mịn nhất Vịnh Hạ Long',
        tom_tat: 'Danh sách tổng hợp những du thuyền sang trọng có dịch vụ tốt nhất hiện nay trên vịnh.',
        noi_dung: 'Nếu bạn đang có ý định nghỉ dưỡng trên vịnh Hạ Long bằng du thuyền, hãy tham khảo ngay top 5 cái tên đình đám như Stellar of the Seas, Ambassador Cruise, Scarlet Pearl... với phòng ốc có ban công riêng và bể bơi ngoài trời cực chất.',
        hinh_anh_dai_dien: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
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
    console.log('Seed bài viết thành công.');
}

module.exports = { seedBlogs };
