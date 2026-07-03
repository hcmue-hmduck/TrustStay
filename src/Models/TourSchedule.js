const mongoose = require('mongoose');

const TourSchedule = new mongoose.Schema({
    ma_lich_trinh: {
        type: String,
        required: true,
        unique: true
    },

    ma_tour: {
        type: String,
        required: true,
        ref: 'Tour'
    },

    ngay_thu: {
        type: Number,
        required: true
    },

    tieu_de: {
        type: String,
        required: true
    },

    noi_dung: String,
    bua_an: String,
    khach_san: String,

    dia_diem_tham_quan: [{
        type: String
    }],

    trang_thai: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tour_Schedule', TourSchedule);