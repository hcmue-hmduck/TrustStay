const mongoose = require('mongoose');

const LocationModel = new mongoose.Schema({
    ma_dia_diem: {
        type: String,
        required: true,
        unique: true
    },
    ma_danh_muc: String,
    ten_dia_diem: {
        type: String,
        required: true
    },
    quoc_gia: String,
    tinh_thanh: String,
    mo_ta: String,
    hinh_anh: String,
    trang_thai: {
        type: String,
        default: 'active'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Location', LocationModel);