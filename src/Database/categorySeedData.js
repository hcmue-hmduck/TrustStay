const CategoryModel = require('../Models/CategoryModel');

const categorySeed = [
    {
        ten_danh_muc: 'Du Lịch Biển Đảo',
        mo_ta: 'Tận hưởng ánh nắng vàng, cát trắng và làn nước trong xanh tại những bãi biển và đảo ngọc đẹp nhất Việt Nam.',
        hinh_anh: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Du Lịch Nghỉ Dưỡng & Núi',
        mo_ta: 'Hòa mình vào thiên nhiên hoang sơ, tận hưởng không khí trong lành se lạnh nơi núi cao và nghỉ dưỡng đẳng cấp.',
        hinh_anh: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Du Lịch Văn Hóa & Lịch Sử',
        mo_ta: 'Khám phá các di sản văn hóa thế giới, di tích lịch sử lâu đời và nét đẹp truyền thống địa phương độc đáo.',
        hinh_anh: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    },
    {
        ten_danh_muc: 'Du Lịch Khám Phá & Mạo Hiểm',
        mo_ta: 'Thử thách bản thân với các hoạt động ngoài trời, trekking leo núi, khám phá hang động kỳ vĩ.',
        hinh_anh: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        trang_thai: 'active'
    }
];

async function seedCategories() {
    console.log('Đang xóa toàn bộ danh mục cũ...');
    await CategoryModel.deleteMany({});
    console.log('Đang thêm danh mục mới...');
    const categoryIdMap = {};
    const prepCategories = categorySeed.map((cat, index) => {
        const doc = new CategoryModel(cat);
        doc.ma_danh_muc = doc._id.toString();
        const oldCode = String(index + 1).padStart(2, '0');
        categoryIdMap[oldCode] = doc.ma_danh_muc;
        return doc;
    });
    await CategoryModel.insertMany(prepCategories);
    console.log('Seed danh mục thành công.');
    return categoryIdMap;
}

module.exports = { seedCategories };
