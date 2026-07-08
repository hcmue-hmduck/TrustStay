const CategoryModel = require('../Models/CategoryModel');

class CategoryService {
    async getAllCategory() {
        try {
            const category = await CategoryModel.find({
                trang_thai: {
                    $ne: 'deleted'
                }
            });
            return category;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCategory() {
        const category = await CategoryModel.find({
            trang_thai: 'active'
        });
        return category;
    }

    async postCategory(categoryData) {
        const newCategory = new CategoryModel(categoryData);
        newCategory.ma_danh_muc = newCategory._id.toString();
        return await newCategory.save();
    }

    async putCategory(ma_danh_muc, categoryData) {
        const updatedCategory = await CategoryModel.findOneAndUpdate(
            {ma_danh_muc: ma_danh_muc},
            categoryData,
            {
                returnDocument: 'after'
            }
        )
        return updatedCategory;
    }

    async getCategoryFavourite(limit) {
        let query = CategoryModel.find({
            trang_thai: 'active'
        });
        if (limit) {
            query = query.limit(limit);
        }
        const category = await query;
        return category;
    }
};

module.exports = new CategoryService();