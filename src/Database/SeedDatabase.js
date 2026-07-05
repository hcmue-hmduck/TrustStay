const mongoose = require('mongoose');
const path = require('path');

// Load environment variables from the root .env file
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Import all sub-seeders
const { seedRoles } = require('./roleSeedData');
const { seedUsers } = require('./userSeedData');
const { seedCategories } = require('./categorySeedData');
const { seedLocations } = require('./locationSeedData');
const { seedTours } = require('./toursSeedData');
const { seedSchedules } = require('./tourScheduleSeedData');
const { seedImages } = require('./tourImageSeedData');
const { seedStartTours } = require('./startTourSeedData');
const { seedTourRequests } = require('./tourRequestSeedData');
const { seedBlogs } = require('./blogSeedData');
const { seedContacts } = require('./contactSeedData');

async function runSeed() {
    if (!process.env.DB_URL) {
        console.error('Lỗi: DB_URL không được định nghĩa trong file .env!');
        process.exit(1);
    }

    try {
        console.log('Bắt đầu kết nối MongoDB...');
        await mongoose.connect(process.env.DB_URL);
        console.log('Kết nối MongoDB thành công.');
        console.log('--------------------------------------------------');

        // 1. Vai trò (Roles)
        const roleIdMap = await seedRoles();
        console.log('--------------------------------------------------');

        // 2. Người dùng (Users)
        const userIdMap = await seedUsers(roleIdMap);
        console.log('--------------------------------------------------');

        // 3. Danh mục (Categories)
        const categoryIdMap = await seedCategories();
        console.log('--------------------------------------------------');

        // 4. Địa điểm (Locations)
        const locationIdMap = await seedLocations();
        console.log('--------------------------------------------------');

        // 5. Tours
        const tourIdMap = await seedTours(categoryIdMap, locationIdMap);
        console.log('--------------------------------------------------');

        // 6. Lịch trình Tour (Schedules)
        await seedSchedules(tourIdMap);
        console.log('--------------------------------------------------');

        // 7. Hình ảnh Tour (Images)
        await seedImages(tourIdMap);
        console.log('--------------------------------------------------');

        // 8. Lịch khởi hành Tour (StartTours)
        const startTourIdMap = await seedStartTours(tourIdMap);
        console.log('--------------------------------------------------');

        // 9. Yêu cầu đặt Tour (TourRequests)
        await seedTourRequests(tourIdMap, startTourIdMap);
        console.log('--------------------------------------------------');

        // 10. Bài viết Blog (Blogs)
        await seedBlogs(userIdMap);
        console.log('--------------------------------------------------');

        // 11. Liên hệ (Contacts)
        await seedContacts();
        console.log('--------------------------------------------------');

        console.log('🎉🎉🎉 HOÀN TẤT QUÁ TRÌNH SEED DỮ LIỆU TOÀN BỘ HỆ THỐNG! 🎉🎉🎉');

    } catch (error) {
        console.error('Đã xảy ra lỗi nghiêm trọng khi chạy seeder:', error);
    } finally {
        // Đóng kết nối
        await mongoose.connection.close();
        console.log('Đã đóng kết nối cơ sở dữ liệu.');
    }
}

// Chạy seeder chính
runSeed();
