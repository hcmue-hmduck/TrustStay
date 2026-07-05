const mongoose = require('mongoose');

const CategoryModel = new mongoose.Schema({
    ma_danh_muc: {
        type: String,
        required: true,
        unique: true
    },
    ten_danh_muc: {
        type: String,
        required: true
    },
    mo_ta: String,
    hinh_anh: String,
    trang_thai: {
        type: String,
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategoryModel);