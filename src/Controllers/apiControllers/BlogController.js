const BlogServices = require('../../Services/BlogServices');

class BlogController {
    async postBlog(req, res) {
        try {
            const { tieu_de, tom_tat, noi_dung, hinh_anh_dai_dien, ma_nguoi_dung } = req.body;
            if (!tieu_de || !noi_dung) {
                return res.status(400).json({
                    success: false,
                    message: 'Vui lòng điền đầy đủ tiêu đề và nội dung bài viết.'
                });
            }

            const newBlog = await BlogServices.createBlog({
                tieu_de,
                tom_tat: tom_tat || tieu_de,
                noi_dung,
                hinh_anh_dai_dien: hinh_anh_dai_dien || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
                ma_nguoi_dung: ma_nguoi_dung || 'user_guest',
                trang_thai: 'published'
            });

            res.json({
                success: true,
                message: 'Đăng bài viết chia sẻ kinh nghiệm thành công!',
                data: newBlog
            });
        } catch (error) {
            console.error('Error posting blog:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getBlogs(req, res) {
        try {
            const list = await BlogServices.getAllBlog();
            res.json({ success: true, data: list });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new BlogController();
