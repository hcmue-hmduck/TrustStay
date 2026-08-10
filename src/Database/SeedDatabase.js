const mongoose = require('mongoose');
const path = require('path');

// Load environment variables from the root .env file
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Import sub-seeders
const { seedRoles } = require('./roleSeedData');
const { seedUsers } = require('./userSeedData');
const { seedCategories } = require('./categorySeedData');
const { seedLocations } = require('./locationSeedData');
const { seedRooms } = require('./roomsSeedData');
const { seedRoomImages } = require('./roomImageSeedData');
const { seedRoomRequests } = require('./roomRequestSeedData');
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

        // 3. Danh mục Phòng Trọ (Categories)
        const categoryIdMap = await seedCategories();
        console.log('--------------------------------------------------');

        // 4. Khu vực / Quận Huyện (Locations)
        const locationIdMap = await seedLocations(categoryIdMap);
        console.log('--------------------------------------------------');

        // 5. Phòng Trọ (Rooms)
        const rooms = await seedRooms(categoryIdMap, locationIdMap);
        console.log('--------------------------------------------------');

        // 6. Hình ảnh Phòng Trọ (Room Images)
        await seedRoomImages(rooms);
        console.log('--------------------------------------------------');

        // 7. Yêu cầu Hẹn Xem Phòng (Room Requests)
        await seedRoomRequests(rooms);
        console.log('--------------------------------------------------');

        // 8. Bài viết Blog (Blogs)
        await seedBlogs(userIdMap);
        console.log('--------------------------------------------------');

        // 9. Liên hệ (Contacts)
        await seedContacts();
        console.log('--------------------------------------------------');

        console.log('🎉🎉🎉 HOÀN TẤT QUÁ TRÌNH SEED DỮ LIỆU PHÒNG TRỌ (TRUSTSTAY)! 🎉🎉🎉');

    } catch (error) {
        console.error('Đã xảy ra lỗi nghiêm trọng khi chạy seeder:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Đã đóng kết nối cơ sở dữ liệu.');
    }
}

runSeed();
