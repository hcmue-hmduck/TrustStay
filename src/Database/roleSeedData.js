const RoleModel = require('../Models/RoleModel');

const roleSeed = [
    {
        ten_vai_tro: 'Administrator',
        mo_ta: 'Quản trị viên hệ thống có toàn quyền quản lý tài nguyên và cấu hình.',
        trang_thai: 'active'
    },
    {
        ten_vai_tro: 'Employee',
        mo_ta: 'Nhân viên quản lý nội dung tour, bài viết và xử lý các yêu cầu từ khách hàng.',
        trang_thai: 'active'
    },
    {
        ten_vai_tro: 'Customer',
        mo_ta: 'Khách hàng sử dụng dịch vụ đặt tour trên website.',
        trang_thai: 'active'
    }
];

async function seedRoles() {
    console.log('Đang xóa toàn bộ vai trò cũ...');
    await RoleModel.deleteMany({});
    console.log('Đang thêm vai trò mới...');
    const roleIdMap = {};
    const prepRoles = roleSeed.map((role, index) => {
        const doc = new RoleModel(role);
        doc.ma_vai_tro = doc._id.toString();
        // Ánh xạ vai trò cũ theo thứ tự index (0: Admin, 1: Employee, 2: Customer)
        const oldCode = index === 0 ? 'admin' : (index === 1 ? 'employee' : 'customer');
        roleIdMap[oldCode] = doc.ma_vai_tro;
        return doc;
    });
    await RoleModel.insertMany(prepRoles);
    console.log('Seed vai trò thành công.');
    return roleIdMap;
}

module.exports = { seedRoles };
