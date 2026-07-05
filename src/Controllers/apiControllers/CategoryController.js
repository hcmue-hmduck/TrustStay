const CategoryServices = require('../../Services/CategoryServices');

class CategoryController {
    async getCategory(req, res) {
        const category = await CategoryServices.getAllCategory();
        res.json({
            success: true,
            data: category
        })
    }

    async postCategory(req, res) {
        const categoryData = { ...req.body };
        const newCategory = await CategoryServices.postCategory(categoryData);
        res.json({
            success: true,
            data: newCategory
        })
    }

    async putCategory(req, res) {
        const ma_danh_muc = req.params.ma_danh_muc;
        const categoryData = { ...req.body };
        const updatedCategory = await CategoryServices.putCategory(ma_danh_muc, categoryData);
        console.log(updatedCategory);
        res.json({
            success: true,
            data: updatedCategory
        })
    }

    async deleteCategory(req, res) {
        const ma_danh_muc = req.params.ma_danh_muc;
        const categoryData = { 
            'trang_thai': 'deleted'
        }; 
        const updatedCategory = await CategoryServices.putCategory(ma_danh_muc, categoryData);
        res.json({
            success: true,
            data: updatedCategory
        })
    }
}

module.exports = new CategoryController();