const ContactModel = require('../Models/ContactModel');

class ContactServices {
    async getContact() {
        const contacts = await ContactModel.find({
            trang_thai: 'active'
        })
        return contacts;
    }
}

module.exports = new ContactServices();