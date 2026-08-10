const ReviewModel = require('../Models/ReviewModel');

class ReviewServices {
    async createReview(reviewData) {
        const newReview = new ReviewModel(reviewData);
        if (!newReview.ma_danh_gia) {
            newReview.ma_danh_gia = 'DG' + Date.now();
        }
        if (!newReview.so_sao || newReview.so_sao < 1 || newReview.so_sao > 5) {
            newReview.so_sao = 5;
        }
        return await newReview.save();
    }

    async getReviewsByRoom(ma_phong) {
        return await ReviewModel.find({ ma_phong, trang_thai: 'approved' }).sort({ createdAt: -1 });
    }

    async getAverageRating(ma_phong) {
        const reviews = await ReviewModel.find({ ma_phong, trang_thai: 'approved' });
        if (!reviews || reviews.length === 0) {
            return { avgRating: 5.0, totalReviews: 0 };
        }
        const totalStars = reviews.reduce((sum, r) => sum + (r.so_sao || 5), 0);
        const avg = (totalStars / reviews.length).toFixed(1);
        return {
            avgRating: parseFloat(avg),
            totalReviews: reviews.length
        };
    }
}

module.exports = new ReviewServices();
