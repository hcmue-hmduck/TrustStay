const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    ma_nguoi_dung: {
        type: String,
        required: true,
        unique: true
    },
    ma_vai_tro: {
        type: String,
        required: true,
        ref: 'VaiTro'
    },
    ho_ten: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    so_dien_thoai: {
        type: String,
        unique: true,
    },
    mat_khau: {
        type: String,
        required: true
    },
    anh_dai_dien: String,
    trang_thai: {
        type: String,
        enum: ['active', 'inactive', 'blocked'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserModel);