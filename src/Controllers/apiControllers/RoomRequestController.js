const RoomRequestServices = require('../../Services/RoomRequestServices');

class RoomRequestController {
    async postRoomRequest(req, res) {
        try {
            const requestData = req.body;
            const newReq = await RoomRequestServices.createRoomRequest(requestData);
            res.json({
                success: true,
                message: 'Gửi yêu cầu liên hệ hẹn xem phòng thành công!',
                data: newReq
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getRoomRequests(req, res) {
        try {
            const list = await RoomRequestServices.getAllRoomRequests();
            res.json({ success: true, data: list });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async putRoomRequestStatus(req, res) {
        try {
            const { ma_yeu_cau } = req.params;
            const { trang_thai } = req.body;
            const updated = await RoomRequestServices.updateRoomRequestStatus(ma_yeu_cau, trang_thai);
            res.json({ success: true, data: updated });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new RoomRequestController();
