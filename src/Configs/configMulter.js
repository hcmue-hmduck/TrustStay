const multer = require('multer');
const fs = require('fs');

const tempDir = 'temp_uploads';
if (!fs.existsSync(tempDir)){
    fs.mkdirSync(tempDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage: storage });

module.exports = upload