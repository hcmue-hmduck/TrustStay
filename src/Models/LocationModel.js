const mongoose = require('mongoose');

const LocationModel = new mongoose.Schema({
    ma_dia_diem: {
        type: String,
        required: true,
        unique: true
    },
    ten_dia_diem: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    quoc_gia: String,
    tinh_thanh: String,
    mo_ta: String,
    hinh_anh: String,
    trang_thai: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', LocationModel);