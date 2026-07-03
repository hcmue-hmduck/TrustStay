const mongoose = require('mongoose');

const StartTourModel = new mongoose.Schema({
    ma_lich_khoi_hanh: {
        type: String,
        required: true,
        unique: true
    },

    ma_tour: {
        type: String,
        required: true,
        ref: 'Tour'
    },

    ngay_bat_dau: {
        type: Date,
        required: true
    },

    ngay_ket_thuc: {
        type: Date,
        required: true
    },

    gia_ap_dung: {
        type: Number,
        default: 0
    },

    so_cho_con_lai: {
        type: Number,
        default: 0
    },

    trang_thai: {
        type: String,
        enum: ['available', 'full', 'cancelled'],
        default: 'available'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Start_Tour', StartTourModel);