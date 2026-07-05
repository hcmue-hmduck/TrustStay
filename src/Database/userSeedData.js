const UserModel = require('../Models/UserModel');

const userSeed = [
    {
        roleKey: 'admin',
        ho_ten: 'Nguyễn Văn Admin',
        email: 'admin@travel.com',
        so_dien_thoai: '0912345678',
        mat_khau: '$2b$10$xyz...', // Mật khẩu mẫu hoặc hash
        anh_dai_dien: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        trang_thai: 'active'
    },
    {
        roleKey: 'employee',
        ho_ten: 'Trần Thị Nhân Viên',
        email: 'staff@travel.com',
        so_dien_thoai: '0987654321',
        mat_khau: '$2b$10$xyz...',
        anh_dai_dien: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        trang_thai: 'active'
    },
    {
        roleKey: 'customer',
        ho_ten: 'Lê Văn Khách Hàng',
        email: 'khachhang@gmail.com',
        so_dien_thoai: '0905123456',
        mat_khau: '$2b$10$xyz...',
        anh_dai_dien: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
        trang_thai: 'active'
    }
];

async function seedUsers(roleIdMap) {
    console.log('Đang xóa toàn bộ người dùng cũ...');
    await UserModel.deleteMany({});
    console.log('Đang thêm người dùng mới...');
    const userIdMap = {};
    const prepUsers = userSeed.map((u, index) => {
        const { roleKey, ...userData } = u;
        const doc = new UserModel({
            ...userData,
            ma_vai_tro: roleIdMap[roleKey] || roleKey
        });
        doc.ma_nguoi_dung = doc._id.toString();
        const oldCode = index === 0 ? 'admin_user' : (index === 1 ? 'staff_user' : 'customer_user');
        userIdMap[oldCode] = doc.ma_nguoi_dung;
        return doc;
    });
    await UserModel.insertMany(prepUsers);
    console.log('Seed người dùng thành công.');
    return userIdMap;
}

module.exports = { seedUsers };
