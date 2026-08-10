const RoomModel = require('../Models/RoomModel');

class RoomServices {
    async getAllRooms() {
        try {
            const rooms = await RoomModel.find({
                trang_thai: {
                    $ne: 'deleted'
                }
            });
            return rooms;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getRoomDetails(ma_phong) {
        try {
            const room_details = await RoomModel.findOne({
                ma_phong: ma_phong
            });
            return room_details;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createRoom(roomData) {
        const newRoom = new RoomModel(roomData);
        if (!newRoom.ma_phong) {
            newRoom.ma_phong = newRoom._id.toString();
        }
        return await newRoom.save();
    }

    async editRoom(ma_phong, roomData) {
        const updatedRoom = await RoomModel.findOneAndUpdate(
            { ma_phong: ma_phong },
            roomData,
            {
                returnDocument: 'after',
                runValidators: true
            }
        );
        return updatedRoom;
    }

    async getRoomFavourite(limit) {
        let query = RoomModel.find({
            trang_thai: 'active',
            la_noi_bat: true
        });
        if (limit) {
            query = query.limit(limit);
        }
        const room_favourites = await query;
        return room_favourites;
    }

    async getRoomsByFilter({ ma_danh_muc, ma_dia_diem, gia_max, min_price, max_price }) {
        let filter = { trang_thai: { $ne: 'deleted' } };
        if (ma_danh_muc) filter.ma_danh_muc = ma_danh_muc;
        if (ma_dia_diem) filter.ma_dia_diem = ma_dia_diem;
        if (gia_max) filter.gia_thue = { $lte: Number(gia_max) };
        if (min_price || max_price) {
            filter.gia_thue = {};
            if (min_price) filter.gia_thue.$gte = Number(min_price);
            if (max_price) filter.gia_thue.$lte = Number(max_price);
        }
        return await RoomModel.find(filter);
    }
}

module.exports = new RoomServices();
