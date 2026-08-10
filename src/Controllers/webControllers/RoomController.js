const RoomServices = require('../../Services/RoomServices');
const CategoryServices = require('../../Services/CategoryServices');
const LocationServices = require('../../Services/LocationServices');

class RoomController {
    async getRooms(req, res) {
        const [rooms, category, location] = await Promise.all([
            RoomServices.getAllRooms(),
            CategoryServices.getAllCategory(),
            LocationServices.getAllLocation()
        ]);
        res.render('adminUI/adminRoomsPage', {
            title: 'Quản lý Phòng Trọ',
            page: 'admin_rooms',
            data: rooms,
            category: category,
            location: location
        });
    }

    async getRoomDetails(req, res) {
        const ma_phong = req.params.ma_phong || '';
        const [room_details, category, location] = await Promise.all([
            ma_phong !== '' && ma_phong !== 'create' ? await RoomServices.getRoomDetails(ma_phong) : null,
            CategoryServices.getAllCategory(),
            LocationServices.getAllLocation()
        ]);

        res.render('adminUI/formRoomsPage', {
            title: ma_phong && ma_phong !== 'create' ? 'Chỉnh sửa Phòng Trọ' : 'Thêm Phòng Trọ Mới',
            page: 'admin_rooms',
            data: room_details,
            category: category,
            location: location
        });
    }
}

module.exports = new RoomController();
