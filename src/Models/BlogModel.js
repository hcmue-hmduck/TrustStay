const mongoose = require('mongoose');

const BlogModel = new mongoose.Schema({
    ma_bai_viet: {
        type: String,
        required: true,
        unique: true
    },

    ma_nguoi_dung: {
        type: String,
        required: true,
        ref: 'NguoiDung'
    },

    tieu_de: {
        type: String,
        required: true
    },

    tom_tat: String,
    noi_dung: String,
    hinh_anh_dai_dien: String,

    trang_thai: {
        type: String,
        enum: ['draft', 'published', 'hidden'],
        default: 'draft'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BaiViet', BlogModel);