const RoomServices = require('../../Services/RoomServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');

class RoomController {
    async getRooms(req, res) {
        try {
            const { ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price } = req.query;
            let rooms;
            if (ma_danh_muc || ma_dia_diem || gia_max || min_price || max_price) {
                rooms = await RoomServices.getRoomsByFilter({ ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price });
            } else {
                rooms = await RoomServices.getAllRooms();
            }
            res.json({
                success: true,
                data: rooms
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getRoomDetails(req, res) {
        try {
            const ma_phong = req.params.ma_phong;
            const [room_details, category, location] = await Promise.all([
                RoomServices.getRoomDetails(ma_phong),
                CategoryServices.getCategory(),
                LocationServices.getLocation()
            ]);
            res.json({
                success: true,
                data: room_details,
                category: category,
                location: location
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async postRooms(req, res) {
        try {
            const roomData = { ...req.body };
            if (typeof roomData.tien_nghi === 'string') {
                roomData.tien_nghi = roomData.tien_nghi.split(',').map(s => s.trim()).filter(Boolean);
            }
            const newRoom = await RoomServices.createRoom(roomData);
            res.json({
                success: true,
                data: newRoom
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async putRooms(req, res) {
        try {
            const ma_phong = req.params.ma_phong;
            const roomData = {
                ...req.body,
                la_noi_bat: req.body.la_noi_bat ?? false
            };
            if (typeof roomData.tien_nghi === 'string') {
                roomData.tien_nghi = roomData.tien_nghi.split(',').map(s => s.trim()).filter(Boolean);
            }
            const updatedRoom = await RoomServices.editRoom(ma_phong, roomData);
            res.json({
                success: true,
                data: updatedRoom
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteRoom(req, res) {
        try {
            const ma_phong = req.params.ma_phong;
            await RoomServices.editRoom(ma_phong, { trang_thai: 'deleted' });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new RoomController();
