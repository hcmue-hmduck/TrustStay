const CategoryModel = require('../Models/CategoryModel');

const categorySeed = [
    {
        ten_danh_muc: 'Phòng Trọ Khép Kín',
        mo_ta: 'Phòng trọ có WC riêng, lối đi riêng, giờ giấc tự do, phù hợp cho sinh viên và người đi làm.',
        hinh_anh: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Căn Hộ Mini / Studio',
        mo_ta: 'Căn hộ nhỏ đầy đủ nội thất, khu vực bếp riêng, máy lạnh, máy giặt, an ninh 24/7.',
        hinh_anh: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Ký Túc Xá / Ở Ghép (Sleepbox)',
        mo_ta: 'Giường tầng hoặc sleepbox cao cấp giá rẻ, bao trọn chi phí điện nước, phù hợp tiết kiệm chi phí.',
        hinh_anh: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Nhà Nguyên Căn Cho Thuê',
        mo_ta: 'Nhà riêng nhiều phòng ngủ, thích hợp cho hộ gia đình hoặc nhóm bạn ở chung lâu dài.',
        hinh_anh: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    }
];

async function seedCategories() {
    console.log('Đang xóa toàn bộ danh mục cũ...');
    await CategoryModel.deleteMany({});
    console.log('Đang thêm danh mục phòng trọ mới...');
    const categoryIdMap = {};
    const prepCategories = categorySeed.map((cat, index) => {
        const doc = new CategoryModel(cat);
        doc.ma_danh_muc = doc._id.toString();
        const oldCode = String(index + 1).padStart(2, '0');
        categoryIdMap[oldCode] = doc.ma_danh_muc;
        return doc;
    });
    await CategoryModel.insertMany(prepCategories);
    console.log('Seed danh mục phòng trọ thành công.');
    return categoryIdMap;
}

module.exports = { seedCategories };
