const RoomImageModel = require('../Models/RoomImageModel');

class RoomImageServices {
    async getRoomImage(ma_phong) {
        const roomImages = await RoomImageModel.find({
            ma_phong: ma_phong,
            trang_thai: 'active'
        }).sort({ thu_tu: 1 });
        return roomImages;
    }

    async createRoomImages(imagesData) {
        if (Array.isArray(imagesData)) {
            return await RoomImageModel.insertMany(imagesData);
        }
        const newImg = new RoomImageModel(imagesData);
        return await newImg.save();
    }
}

module.exports = new RoomImageServices();
