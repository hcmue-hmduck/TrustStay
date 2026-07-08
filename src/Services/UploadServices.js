require('dotenv').config();
const { google } = require('googleapis');
const stream = require('stream');
const path = require('path');

const fs = require('fs');

// Đọc file cấu hình OAuth
const OAUTH_FILE = path.join(__dirname, '../../oauth.json');
const TOKEN_FILE = path.join(__dirname, '../../token.json');

const oauthData = JSON.parse(fs.readFileSync(OAUTH_FILE));
const { client_secret, client_id } = oauthData.web || oauthData.installed;
const redirect_uri = 'http://localhost:3000/oauth2callback';

// Khởi tạo OAuth2 Client
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

// Nạp Token (sẽ tự động gia hạn khi hết hạn nhờ có refresh_token)
const tokenData = JSON.parse(fs.readFileSync(TOKEN_FILE));
oAuth2Client.setCredentials(tokenData);

class UploadServices {
    async uploadFile(filePath, originalName, mimeType) {
        try {
            const drive = google.drive({ version: 'v3', auth: oAuth2Client });

            const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
            if (!folderId) {
                throw new Error("Missing GOOGLE_DRIVE_FOLDER_ID in .env file");
            }

            const fileMetadata = {
                name: originalName,
                parents: [folderId]
            };

            // Đọc file từ ổ cứng (Stream)
            const media = {
                mimeType: mimeType,
                body: fs.createReadStream(filePath),
            };

            // Upload lên Google Drive (Hỗ trợ Bộ nhớ dùng chung - Shared Drives)
            console.log(`[UploadServices] Bắt đầu upload file: ${originalName} lên Google Drive...`);
            const file = await drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id, webViewLink, webContentLink',
                supportsAllDrives: true // BẮT BUỘC ĐỂ DÙNG SHARED DRIVES
            });

            console.log(`[UploadServices] Đã upload xong. File ID: ${file.data.id}`);

            // Chuyển quyền truy cập file thành Public
            await drive.permissions.create({
                fileId: file.data.id,
                requestBody: {
                    role: 'reader',
                    type: 'anyone',
                },
                supportsAllDrives: true
            });

            // Xóa file tạm trong ổ cứng NodeJS để giải phóng dung lượng
            fs.unlinkSync(filePath);

            // TẠO LINK HIỂN THỊ
            const isImage = mimeType.startsWith('image/');
            let link = '';

            if (isImage) {
                // Trả về link qua Proxy nội bộ của Backend để vượt qua 100% các lớp chặn CORS/429 của Google
                link = `/api/images/${file.data.id}`;
            } else {
                link = file.data.webViewLink || `https://drive.google.com/file/d/${file.data.id}/preview`;
            }

            return [{ link: link }];

        } catch (error) {
            console.error('[UploadServices] Lỗi khi upload lên Drive API:', error.message);
            // Xóa file tạm nếu có lỗi
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            throw error;
        }
    }

    async getImageStream(fileId, res) {
        try {
            const drive = google.drive({ version: 'v3', auth: oAuth2Client });

            const response = await drive.files.get(
                { fileId: fileId, alt: 'media' },
                { responseType: 'stream' }
            );

            // Lấy content-type từ Google Drive trả về (tuỳ phiên bản thư viện có thể in hoa hoặc in thường)
            const contentType = response.headers['content-type'] || response.headers['Content-Type'] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache 1 ngày để web load nhanh
            response.data.pipe(res);
        } catch (error) {
            console.error('[UploadServices] Lỗi khi stream ảnh từ Drive:', error.message);
            res.status(500).send('Lỗi khi tải ảnh');
        }
    }
}

module.exports = new UploadServices();