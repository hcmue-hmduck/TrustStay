const UserModel = require('../Models/UserModel');

class UserServices {
    async getAllUser() {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new UserServices();