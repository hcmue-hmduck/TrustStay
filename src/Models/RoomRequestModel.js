const mongoose = require('mongoose');

const RoomRequestModel = new mongoose.Schema({
    ma_yeu_cau: {
        type: String,
        required: true,
        unique: true
    },

    ma_phong: {
        type: String,
        required: true,
        ref: 'Room'
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

    ngay_hen_xem: {
        type: Date
    },

    so_nguoi_o: {
        type: Number,
        default: 1
    },

    ghi_chu: String,

    trang_thai: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Room_Request', RoomRequestModel);
