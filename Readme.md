# 🌟 TrustStay - Hệ Thống Quản Lý & Đặt Phòng Khách Sạn / Homestay

[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D%2018.0.0-emerald.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-%5E5.2.1-blue.svg?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB Mongoose](https://img.shields.io/badge/database-mongodb%20%7C%20mongoose-green.svg?style=for-the-badge&logo=mongodb)](https://mongoosejs.com/)
[![EJS Templates](https://img.shields.io/badge/view--engine-ejs--layouts-red.svg?style=for-the-badge&logo=html5)](https://ejs.co/)

**TrustStay** là hệ thống website đặt phòng và quản lý lưu trú cao cấp (Khách sạn, Homestay, Căn hộ dịch vụ), tích hợp đầy đủ giao diện tìm kiếm đặt phòng dành cho Khách hàng (Client UI) và Trang quản trị trực quan chuyên nghiệp dành cho Admin (Admin Control Panel). Ứng dụng được thiết kế hiện đại, tinh tế với phong cách giao diện kính mờ mượt mà (Glassmorphism UI) cùng trải nghiệm người dùng tối ưu.

---

## 🚀 Tính Năng Nổi Bật

### 🌐 Phân Hệ Client (Khách Hàng)
* **Trang chủ (Home Page)**: Hiển thị danh sách địa điểm nổi bật, phòng xem nhiều, đánh giá trải nghiệm thực tế từ khách hàng và các bài viết tin tức mới nhất.
* **Tìm kiếm & Bộ lọc phòng**: Tìm kiếm phòng nhanh chóng theo từ khóa, lọc linh hoạt theo địa điểm, loại hình lưu trú (Category) và mức giá.
* **Chi tiết phòng (Room Details)**: Xem chi tiết tiện nghi, bộ sưu tập hình ảnh sắc nét, thông tin vị trí, quy định lưu trú và danh sách đánh giá.
* **Gửi yêu cầu đặt phòng (Room Request)**: Biểu mẫu đặt phòng tiện lợi, gửi yêu cầu lưu trú nhanh chóng tới ban quản trị.
* **Tin tức & Kinh nghiệm (Blog)**: Đọc bài viết chia sẻ kinh nghiệm du lịch, hướng dẫn chọn phòng nghỉ dưỡng.
* **Trang liên hệ (Contact)**: Gửi thông tin thắc mắc và đóng góp ý kiến trực tiếp.

### 👑 Phân Hệ Admin (Quản Trị Viên)
* **Bảng điều khiển tổng quan (Dashboard)**:
  * Thống kê tổng số lượng Phòng, Yêu cầu đặt phòng, Đánh giá, Địa điểm, Danh mục và Bài viết.
  * Hiển thị danh sách yêu cầu đặt phòng mới nhất và phòng nổi bật theo thời gian thực.
  * Các lối tắt điều hướng nhanh tới trang quản lý chuyên sâu.
* **Quản lý danh mục & Địa điểm (Categories & Locations)**: Thêm mới, chỉnh sửa, xóa và quản lý hình ảnh đại diện cho các địa điểm du lịch và loại hình phòng.
* **Quản lý phòng (Rooms Management)**:
  * Thêm, sửa, xóa phòng lưu trú, cập nhật thông tin giá, sức chứa, tiện ích.
  * Tải lên và quản lý thư viện ảnh phòng (`RoomImageModel`).
  * Bật/Tắt trạng thái hiển thị công khai và đánh dấu phòng nổi bật (`la_noi_bat`).
* **Quản lý yêu cầu đặt phòng (Requests Management)**: Tiếp nhận, duyệt và cập nhật trạng thái xử lý các yêu cầu đặt phòng từ khách hàng.
* **Quản lý đánh giá & Bài viết (Reviews & Blogs)**: Duyệt bài đánh giá của người dùng và quản lý nội dung các bài viết blog.

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Thư viện chính | Vai trò |
| :--- | :--- | :--- |
| **Backend** | `Node.js`, `Express (v5)` | Máy chủ xử lý yêu cầu, điều hướng và cung cấp API |
| **Database** | `MongoDB`, `Mongoose` | Cơ sở dữ liệu NoSQL lưu trữ thông tin phòng, đặt phòng, địa điểm |
| **Frontend** | `EJS`, `Express EJS Layouts` | Render giao diện phía máy chủ (Server-Side Rendering) |
| **Styling** | `TailwindCSS` / `Vanilla CSS` | Thiết kế giao diện hiện đại, responsive và Glassmorphism |
| **Media & File** | `Multer`, `Google APIs` | Xử lý nạp và quản lý tập tin truyền thông |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
TrustStay/
├── src/
│   ├── Configs/              # Cấu hình hệ thống & môi trường
│   ├── Controllers/          # Xử lý Controller (Web Controller & API Controller)
│   │   ├── apiControllers/   # Controllers phục vụ RESTful API (Blog, Review, Room, RoomRequest...)
│   │   └── webControllers/   # Controllers phục vụ Render trang EJS (Home, Admin, Room...)
│   ├── Database/             # Kết nối Database & Dữ liệu Seed mẫu
│   │   ├── connect.js        # Kết nối Mongoose tới MongoDB
│   │   ├── SeedDatabase.js   # Script khởi chạy nạp dữ liệu Seed
│   │   ├── roomsSeedData.js  # Dữ liệu phòng mẫu
│   │   └── ...               # Các file dữ liệu mẫu (RoomImage, RoomRequest...)
│   ├── Middlewares/          # Các Middleware xử lý xác thực, phân quyền, upload...
│   ├── Models/               # Định nghĩa Schema cấu trúc dữ liệu MongoDB
│   │   ├── RoomModel.js      # Cấu trúc thông tin phòng lưu trú
│   │   ├── RoomImageModel.js # Thư viện hình ảnh của phòng
│   │   ├── RoomRequestModel.js # Yêu cầu đặt phòng từ khách
│   │   ├── CategoryModel.js  # Phân loại loại hình phòng
│   │   ├── LocationModel.js  # Địa điểm / Khu vực lưu trú
│   │   ├── BlogModel.js      # Bài viết tin tức / kinh nghiệm
│   │   ├── ReviewModel.js    # Đánh giá của khách hàng
│   │   └── UserModel.js      # Thông tin tài khoản người dùng
│   ├── Routes/               # Quản lý định tuyến (Routes)
│   │   ├── admin.js          # Định tuyến phân hệ Admin
│   │   ├── home.js           # Định tuyến trang Client công khai
│   │   ├── api.js            # Định tuyến RESTful API
│   │   └── web.js            # Định tuyến chung
│   ├── Services/             # Logic nghiệp vụ làm việc với Database
│   │   ├── RoomServices.js
│   │   ├── RoomRequestServices.js
│   │   └── ...
│   ├── Views/                # Giao diện EJS Template
│   │   ├── adminUI/          # Giao diện Quản trị viên (Dashboard, Rooms, Requests...)
│   │   ├── homeUI/           # Giao diện Khách hàng (Home, Rooms, RoomDetails, Blog...)
│   │   └── layouts/          # Layout dùng chung (main.ejs, adminLayout.ejs)
│   └── public/               # Tài nguyên tĩnh (CSS, JS, Images, Uploads)
├── .env                      # Lưu biến môi trường (PORT, MONGO_URI...)
├── package.json              # Khai báo dependencies và scripts dự án
└── server.js                 # Entry point khởi chạy ứng dụng
```

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Yêu Cầu Hệ Thống
* Đã cài đặt [Node.js](https://nodejs.org/) (Khuyến nghị phiên bản 18 LTS trở lên).
* Đã cài đặt [MongoDB](https://www.mongodb.com/) (Chạy local hoặc kết nối MongoDB Atlas).

### 2. Cài Đặt Dependencies
Mở Terminal tại thư mục gốc của dự án và chạy lệnh:
```bash
npm install
```

### 3. Cấu Hình Biến Môi Trường (`.env`)
Tạo file `.env` tại thư mục gốc dự án (cùng cấp với `server.js`) với nội dung:
```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/truststay
```

### 4. Khởi Tạo Dữ Liệu Mẫu (Seeding Database)
Để nạp dữ liệu phòng, địa điểm và danh mục mẫu vào cơ sở dữ liệu MongoDB:
```bash
npm run seed
```

### 5. Khởi Chạy Ứng Dụng (Development Mode)
Chạy ứng dụng với `nodemon` để tự động reload khi thay đổi code:
```bash
npm run dev
```

Truy cập ứng dụng trên trình duyệt:
* **Trang khách hàng (Client):** `http://localhost:8080`
* **Trang quản trị (Admin):** `http://localhost:8080/admin`

---

## 📝 Quy Ước Giao Diện & Layout

* Giao diện Client & Admin sử dụng hệ thống Layout của `express-ejs-layouts` (`main.ejs` cho Client, `adminLayout.ejs` cho Admin).
* Thiết kế tối giản, trực quan, hỗ trợ hiển thị tốt trên các thiết bị (Responsive Design).

