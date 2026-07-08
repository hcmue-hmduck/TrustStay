const UserServices = require('../../Services/UserServices');

class UserController {
    async getAllUser(req, res) {
        try {
            const users = await UserServices.getAllUser();
            return res.status(200).json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new UserController();