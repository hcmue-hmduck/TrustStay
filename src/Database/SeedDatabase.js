const mongoose = require('mongoose');
const path = require('path');

// Load environment variables from the root .env file
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const TourModel = require('../Models/TourModel');
const tourPackagesSeed = require('./toursSeedData');

async function runSeed() {
    if (!process.env.DB_URL) {
        console.error('Lỗi: DB_URL không được định nghĩa trong file .env!');
        process.exit(1);
    }

    try {
        console.log('Bắt đầu kết nối MongoDB...');
        await mongoose.connect(process.env.DB_URL);
        console.log('Kết nối MongoDB thành công.');

        // 1. Seed dữ liệu cho bảng Tours
        console.log('Đang xóa toàn bộ danh sách tours cũ...');
        await TourModel.deleteMany({});
        console.log('Xóa thành công.');

        console.log('Đang thêm dữ liệu seed tours mới...');
        const seededTours = await TourModel.insertMany(tourPackagesSeed);
        console.log(`Đã thêm thành công ${seededTours.length} tours vào cơ sở dữ liệu!`);

        // Sau này bạn có thể thêm các seeder khác tại đây, ví dụ:
        // await seedUsers();
        // await seedLocations();

    } catch (error) {
        console.error('Đã xảy ra lỗi khi chạy seeder:', error);
    } finally {
        // Đóng kết nối
        await mongoose.connection.close();
        console.log('Đã đóng kết nối cơ sở dữ liệu.');
    }
}

// Chạy seeder
runSeed();
