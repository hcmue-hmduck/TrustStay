const ContactModel = require('../Models/ContactModel');

const contactSeed = [
    {
        ho_ten: 'Lê Hoài Nam',
        email: 'hoainam@gmail.com',
        so_dien_thoai: '0966554433',
        tieu_de: 'Tư vấn tour tập thể cho công ty 50 người',
        noi_dung: 'Chào công ty, chúng tôi muốn đặt tour đi Phú Quốc vào tháng 9 tới cho khoảng 50 nhân viên. Xin vui lòng gửi báo giá và lịch trình chi tiết.',
        trang_thai: 'new'
    },
    {
        ho_ten: 'Hoàng Ngọc Ánh',
        email: 'ngocanh@gmail.com',
        so_dien_thoai: '0933221100',
        tieu_de: 'Hỏi về chính sách hoàn huỷ tour',
        noi_dung: 'Tôi muốn hỏi nếu huỷ tour do lý do bất khả kháng trước 7 ngày thì chính sách hoàn tiền như thế nào?',
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
