const mongoose = require('mongoose');

const TourImageModel = new mongoose.Schema({
    ma_hinh_anh: {
        type: String,
        required: true,
        unique: true
    },

    ma_tour: {
        type: String,
        required: true,
        ref: 'Tour'
    },

    duong_dan_anh: {
        type: String,
        required: true
    },

    mo_ta: String,

    la_anh_chinh: {
        type: Boolean,
        default: false
    },

    thu_tu: {
        type: Number,
        default: 0
    },

    trang_thai: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tour_Image', TourImageModel);