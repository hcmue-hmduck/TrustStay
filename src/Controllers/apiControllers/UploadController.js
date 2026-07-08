const UploadServices = require("../../Services/UploadServices");

class UploadController {
    async postFile(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ success: false, message: 'No file uploaded' });
            }
            
            // Đẩy đường dẫn file (path) sang Service thay vì nhét toàn bộ vào RAM
            const uploadData = await UploadServices.uploadFile(
                req.file.path, 
                req.file.originalname, 
                req.file.mimetype
            );
            
            res.status(200).json({
                success: true,
                data: uploadData
            });
        } catch (error) {
            console.error('[UploadController] postFile error:', error.message);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async postFiles(req, res) {
        try {
            const dataFiles = req.body;
            let uploadData = [];
            for (let i = 0; i < dataFiles.length; i++) {
                const data = await UploadServices.uploadFile(dataFiles[i]);
                uploadData.push(data[0]);
            }
            res.status(200).json({
                success: true,
                data: uploadData
            });
        } catch (error) {
            console.error('[UploadController] postFiles error:', error.message);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getImage(req, res) {
        try {
            const fileId = req.params.fileId;
            if (!fileId) {
                return res.status(400).send('Missing fileId');
            }
            await UploadServices.getImageStream(fileId, res);
        } catch (error) {
            console.error('[UploadController] getImage error:', error.message);
            res.status(500).send('Lỗi máy chủ');
        }
    }
}

module.exports = new UploadController();