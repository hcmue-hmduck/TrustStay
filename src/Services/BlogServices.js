const BlogModel = require('../Models/BlogModel');

class BlogServices {
    async getAllBlog() {
        const blog = await BlogModel.find({
            trang_thai: 'published'
        }).sort({ createdAt: -1 });
        return blog;
    }

    async getBlogDetails(ma_bai_viet) {
        return await BlogModel.findOne({ ma_bai_viet });
    }

    async createBlog(blogData) {
        const newBlog = new BlogModel(blogData);
        if (!newBlog.ma_bai_viet) {
            newBlog.ma_bai_viet = 'BV' + Date.now();
        }
        if (!newBlog.trang_thai) {
            newBlog.trang_thai = 'published';
        }
        return await newBlog.save();
    }
}

module.exports = new BlogServices();