const mongoose = require('mongoose');

const TourModel = new mongoose.Schema({
    ma_tour: {
        type: String,
        required: true,
        unique: true
    },

    ma_danh_muc: {
        type: String,
        required: true,
        ref: 'DanhMucTour'
    },

    ma_dia_diem: {
        type: String,
        required: true,
        ref: 'DiaDiem'
    },

    ten_tour: {
        type: String,
        required: true
    },

    mo_ta_ngan: String,
    mo_ta_chi_tiet: String,

    gia_nguoi_lon: {
        type: Number,
        required: true
    },

    gia_tre_em: {
        type: Number,
        default: 0
    },

    gia_khuyen_mai: {
        type: Number,
        default: 0
    },

    thoi_gian: String,
    diem_khoi_hanh: String,

    so_nguoi_toi_da: {
        type: Number,
        default: 20
    },

    hinh_anh_dai_dien: String,

    diem_noi_bat: [{
        type: String
    }],

    dich_vu_bao_gom: [{
        type: String
    }],

    dich_vu_khong_bao_gom: [{
        type: String
    }],

    la_noi_bat: {
        type: Boolean,
        default: false
    },

    trang_thai: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tour', TourModel);