const RoomRequestModel = require('../Models/RoomRequestModel');

class RoomRequestServices {
    async createRoomRequest(requestData) {
        const newReq = new RoomRequestModel(requestData);
        if (!newReq.ma_yeu_cau) {
            newReq.ma_yeu_cau = 'YCX' + Date.now();
        }
        return await newReq.save();
    }

    async getAllRoomRequests() {
        return await RoomRequestModel.find({}).sort({ createdAt: -1 });
    }

    async updateRoomRequestStatus(ma_yeu_cau, trang_thai) {
        return await RoomRequestModel.findOneAndUpdate(
            { ma_yeu_cau: ma_yeu_cau },
            { trang_thai: trang_thai },
            { returnDocument: 'after' }
        );
    }
}

module.exports = new RoomRequestServices();
