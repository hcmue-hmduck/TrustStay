const BlogModel = require('../Models/BlogModel')

class BlogServices {
    async getAllBlog() {
        const blog = await BlogModel.find({
            trang_thai: 'published'
        })
        return blog;
    }
}

module.exports = new BlogServices();