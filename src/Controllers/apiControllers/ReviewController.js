const ReviewServices = require('../../Services/ReviewServices');

class ReviewController {
    async postReview(req, res) {
        try {
            const { ma_phong, ho_ten, so_dien_thoai, so_sao, noi_dung } = req.body;
            if (!ma_phong || !ho_ten || !noi_dung) {
                return res.status(400).json({
                    success: false,
                    message: 'Vui lòng nhập đầy đủ thông tin bắt buộc (họ tên, nội dung đánh giá).'
                });
            }

            const newReview = await ReviewServices.createReview({
                ma_phong,
                ho_ten,
                so_dien_thoai,
                so_sao: parseInt(so_sao) || 5,
                noi_dung
            });

            res.json({
                success: true,
                message: 'Cảm ơn bạn đã gửi đánh giá! Đánh giá của bạn đã được ghi nhận.',
                data: newReview
            });
        } catch (error) {
            console.error('Error posting review:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getRoomReviews(req, res) {
        try {
            const { ma_phong } = req.params;
            const list = await ReviewServices.getReviewsByRoom(ma_phong);
            const stats = await ReviewServices.getAverageRating(ma_phong);
            res.json({ success: true, data: list, stats });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new ReviewController();
