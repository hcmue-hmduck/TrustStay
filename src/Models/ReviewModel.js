const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    ma_danh_gia: {
        type: String,
        required: true,
        unique: true
    },
    ma_phong: {
        type: String,
        required: true,
        ref: 'Room'
    },
    ho_ten: {
        type: String,
        required: true
    },
    so_dien_thoai: {
        type: String
    },
    so_sao: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 5
    },
    noi_dung: {
        type: String,
        required: true
    },
    trang_thai: {
        type: String,
        default: 'approved'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Review', ReviewSchema);
