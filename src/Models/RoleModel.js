const mongoose = require('mongoose');

const RoleModel = new mongoose.Schema({
    ma_vai_tro: {
        type: String,
        required: true,
        unique: true
    },
    ten_vai_tro: {
        type: String,
        required: true
    },
    mo_ta: String,
    trang_thai: {
        type: String,
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Role', RoleModel);