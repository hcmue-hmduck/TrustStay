const UserServices = require('../Services/UserServices');

// 1. CÁCH TẠO MỘT MIDDLEWARE
const checkAuth = (req, res, next) => {
    try {
        // Ví dụ: Lấy token từ Header của request
        const token = req.headers.authorization;

        // Nếu không có token -> Đuổi cổ (Không cho đi tiếp)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Bạn chưa đăng nhập! (Thiếu Token)'
            });
        }

        // Tưởng tượng đoạn này bạn giải mã token và kiểm tra hợp lệ...
        // Nếu hợp lệ, bạn có thể gán thông tin user vào req để các API phía sau dùng ké
        req.user = { id: '123', role: 'admin' };

        // MỌI THỨ OK -> Cho phép đi qua chốt kiểm duyệt bằng lệnh next()
        next();
        
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Lỗi xác thực' });
    }
};

const checkRoleAdmin = (req, res, next) => {
    // Middleware này giả sử phải chạy SAU checkAuth
    if (req.user && req.user.role === 'admin') {
        next(); // Cho qua
    } else {
        return res.status(403).json({ success: false, message: 'Bạn không phải là Admin!' }); // Đuổi cổ
    }
}

module.exports = {
    checkAuth,
    checkRoleAdmin
};