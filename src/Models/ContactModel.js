const mongoose = require('mongoose');

const ContactModel = new mongoose.Schema({
    ma_lien_he: {
        type: String,
        required: true,
        unique: true
    },

    ho_ten: {
        type: String,
        required: true
    },

    email: String,
    so_dien_thoai: String,
    tieu_de: String,

    noi_dung: {
        type: String,
        required: true
    },

    trang_thai: {
        type: String,
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('LienHe', ContactModel);