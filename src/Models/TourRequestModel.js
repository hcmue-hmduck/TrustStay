const mongoose = require('mongoose');

const TourRequestModel = new mongoose.Schema({
    ma_yeu_cau: {
        type: String,
        required: true,
        unique: true
    },

    ma_tour: {
        type: String,
        required: true,
        ref: 'Tour'
    },

    ma_lich_khoi_hanh: {
        type: String,
        ref: 'LichKhoiHanh'
    },

    ho_ten_khach: {
        type: String,
        required: true
    },

    email_khach: String,

    so_dien_thoai_khach: {
        type: String,
        required: true
    },

    so_luong_nguoi_lon: {
        type: Number,
        default: 1
    },

    so_luong_tre_em: {
        type: Number,
        default: 0
    },

    ghi_chu: String,

    trang_thai: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tour_Request', TourRequestModel);