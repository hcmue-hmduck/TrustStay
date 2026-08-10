const ContactModel = require('../Models/ContactModel');

const contactSeed = [
    {
        ho_ten: 'Chuyên Viên 1',
        email: 'hoainam@gmail.com',
        so_dien_thoai: '0966554433',
        tieu_de: 'Tư vấn phòng trọ khu vực Bách Khoa - Hà Nội',
        noi_dung: 'Em là sinh viên năm nhất chuẩn bị nhập học ĐH Bách Khoa, muốn tìm phòng trọ khép kín tầm 3 - 4 triệu/tháng gần trường. Nhờ TrustStay tư vấn giúp em!',
        trang_thai: 'new'
    },
    {
        ho_ten: 'Chuyên Viên 2',
        email: 'ngocanh@gmail.com',
        so_dien_thoai: '0933221100',
        tieu_de: 'Hỏi về quy trình hẹn xem phòng trực tiếp',
        noi_dung: 'Tôi muốn hẹn xem căn hộ Studio tại Quận 7 vào cuối tuần này. Dịch vụ hẹn xem phòng có mất phí không ạ?',
        trang_thai: 'read'
    }
];

async function seedContacts() {
    console.log('Đang xóa toàn bộ liên hệ cũ...');
    await ContactModel.deleteMany({});
    console.log('Đang thêm liên hệ mới...');
    const prepContacts = contactSeed.map(c => {
        const doc = new ContactModel(c);
        doc.ma_lien_he = doc._id.toString();
        return doc;
    });
    await ContactModel.insertMany(prepContacts);
    console.log('Seed liên hệ thành công.');
}

module.exports = { seedContacts };
