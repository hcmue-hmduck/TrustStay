const mongoose = require('mongoose');

const RoomModel = new mongoose.Schema({
    ma_phong: {
        type: String,
        required: true,
        unique: true
    },

    ma_danh_muc: {
        type: String,
        required: true,
        ref: 'Category'
    },

    ma_dia_diem: {
        type: String,
        required: true,
        ref: 'Location'
    },

    ma_chu_tro: {
        type: String,
        ref: 'User'
    },

    ten_phong: {
        type: String,
        required: true
    },

    mo_ta_ngan: String,
    mo_ta_chi_tiet: String,

    gia_thue: {
        type: Number,
        required: true
    },

    tien_coc: {
        type: Number,
        default: 0
    },

    dien_tich: {
        type: Number,
        default: 0
    },

    so_nguoi_toi_da: {
        type: Number,
        default: 2
    },

    dia_chi_chi_tiet: String,

    hinh_anh_dai_dien: String,

    tien_nghi: [{
        type: String
    }],

    la_noi_bat: {
        type: Boolean,
        default: false
    },

    trang_thai: {
        type: String,
        default: 'active'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Room', RoomModel);
