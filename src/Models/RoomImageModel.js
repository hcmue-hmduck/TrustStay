const mongoose = require('mongoose');

const RoomImageModel = new mongoose.Schema({
    ma_hinh_anh: {
        type: String,
        required: true,
        unique: true
    },

    ma_phong: {
        type: String,
        required: true,
        ref: 'Room'
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
        default: 'active'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Room_Image', RoomImageModel);
