# 🌟 Thuận Phong Việt Travel - Hệ Thống Quản Lý & Đặt Tour Du Lịch

[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D%2018.0.0-emerald.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-%5E5.2.1-blue.svg?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB Mongoose](https://img.shields.io/badge/database-mongodb%20%7C%20mongoose-green.svg?style=for-the-badge&logo=mongodb)](https://mongoosejs.com/)
[![EJS Templates](https://img.shields.io/badge/view--engine-ejs--layouts-red.svg?style=for-the-badge&logo=html5)](https://ejs.co/)

Một hệ thống website du lịch cao cấp tích hợp cả giao diện hiển thị cho khách hàng (Client UI) và trang quản trị trực quan chuyên nghiệp (Admin Control Panel). Ứng dụng được thiết kế theo phong cách hiện đại với tông màu tối huyền ảo (Obsidian Glassmorphism Theme) cùng hiệu ứng tương tác mượt mà.

---

## 🚀 Tính Năng Nổi Bật

### 🌐 Phân Hệ Client (Khách Hàng)
* **Trang chủ & Chi tiết Tour**: Hiển thị thông tin tour du lịch trực quan sinh động với hình ảnh đại diện lớn và thông tin rõ ràng.
* **Bộ lọc & Tìm kiếm**: Tìm kiếm nhanh theo mã tour, địa điểm, hành trình thuận tiện.
* **Đặt tour trực tuyến**: Hệ thống biểu mẫu đặt tour tiện lợi.

### 👑 Phân Hệ Admin (Quản Trị Viên)
* **Bảng điều khiển tổng quan (Dashboard)**:
  * Thống kê số lượng Tour đang lưu trữ trong cơ sở dữ liệu MongoDB.
  * Đếm tự động các Tours đang hoạt động công khai ngoài Client.
  * Lọc nhanh số lượng Tours nổi bật (`la_noi_bat === true`).
  * Danh sách rút gọn các Tours nổi bật đang hoạt động theo thời gian thực.
  * Phân mục phím tắt điều hướng nhanh chóng.
* **Quản lý danh sách Tours nâng cao**:
  * Giao diện bảng biểu sắc nét, chữ to rõ ràng, bố cục cân đối.
  * Bộ lọc tìm kiếm thời gian thực (Live Search) bằng JavaScript.
  * Trực tiếp xóa Tour khỏi MongoDB (xác nhận bảo mật qua hộp thoại).
  * Đồng bộ hóa chỉ mục trạng thái (Hoạt động / Tạm ẩn), Tour nổi bật (Huy hiệu Ngôi sao).

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Thư viện chính | Vai trò |
| :--- | :--- | :--- |
| **Backend** | `Node.js`, `Express (v5)` | Máy chủ xử lý yêu cầu và điều phối dữ liệu |
| **Database** | `MongoDB`, `Mongoose` | Cơ sở dữ liệu NoSQL lưu trữ và mô hình hóa dữ liệu Tour |
| **Frontend** | `EJS`, `Express EJS Layouts` | Cơ chế tạo khuôn mẫu giao diện động (Server-Side Rendering) |
| **Styling** | `TailwindCSS (via CDN)` | Thư viện CSS thiết kế giao diện Glassmorphism hiện đại |
| **Icons** | `Lucide Icons` | Bộ icon SVG tối giản, tải nhanh |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
WebsiteTravel/
├── node_modules/             # Thư mục chứa thư viện dependencies
├── src/
│   ├── Controllers/          # Bộ điều khiển (Xử lý request/response & gọi Services)
│   │   ├── AdminController.js
│   │   └── HomeController.js
│   ├── Database/             # Kết nối Database & Dữ liệu Seeder mẫu
│   │   ├── connect.js
│   │   └── SeedDatabase.js
│   ├── Models/               # Định nghĩa Schema cấu trúc dữ liệu MongoDB
│   │   └── Tour.js
│   ├── Routes/               # Quản lý định tuyến liên kết các Pages
│   │   ├── admin.js
│   │   └── web.js
│   ├── Services/             # Tách biệt logic xử lý nghiệp vụ với Database
│   │   └── TourServices.js
│   └── Views/                # Các tệp giao diện động EJS
│       ├── adminUI/          # Giao diện dành riêng cho Quản trị viên
│       │   ├── adminToursPage.ejs
│       │   └── dashboardPage.ejs
│       ├── homeUI/           # Giao diện phía khách hàng
│       └── layouts/          # Layout bọc dùng chung (Admin / Client)
│           ├── adminLayout.ejs
│           └── main.ejs
├── .env                      # Lưu biến môi trường (PORT, MONGO_URI)
├── package.json              # File quản lý cấu hình và script dự án
├── server.js                 # Entry point khởi chạy ứng dụng chính
└── Doc.md                    # Hướng dẫn chi tiết từng bước xây dựng từ đầu
```

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Yêu Cầu Hệ Thống
* Đã cài đặt [Node.js](https://nodejs.org/) (Khuyến nghị phiên bản 18 LTS trở lên).
* Cơ sở dữ liệu [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hoặc MongoDB chạy ở máy cục bộ (Local MongoDB).

### 2. Cài Đặt Dependencies
Mở Terminal tại thư mục gốc của dự án và chạy lệnh sau để cài đặt toàn bộ gói thư viện:
```bash
npm install
```

### 3. Cấu Hình Biến Môi Trường (`.env`)
Tạo một file mang tên `.env` tại thư mục gốc của dự án (cùng cấp với `server.js`) và thiết lập các thông số sau:
```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/websitetravel
```
> 💡 *Thay đổi cổng `PORT` hoặc đường dẫn kết nối `MONGO_URI` phù hợp với cấu hình máy chủ của bạn.*

### 4. Khởi Tạo Dữ Liệu Mẫu (Seeding Database)
Để nạp dữ liệu mẫu của các chuyến du lịch vào cơ sở dữ liệu MongoDB phục vụ việc chạy thử nghiệm, thực hiện lệnh:
```bash
npm run seed
```

### 5. Khởi Chạy Chế Độ Phát Triển (Development Mode)
Sử dụng công cụ `nodemon` tự động reload server khi thay đổi mã nguồn bằng cách chạy:
```bash
npm run dev
```

Sau khi khởi chạy thành công, truy cập trình duyệt theo địa chỉ:
* **Giao diện Client (Người dùng):** `http://localhost:8080`
* **Giao diện Admin (Quản trị viên):** `http://localhost:8080/admin` (hoặc `/admin/tours`)

---

## 📝 Quy Ước Thiết Kế Layout Admin

Giao diện quản trị (Admin) sử dụng cấu trúc kế thừa từ file layout chung `src/Views/layouts/adminLayout.ejs`:
* Tông màu chủ đạo: Dark Mode (`#070b19` & `#0b1329`) kết hợp hiệu ứng kính làm mờ (`backdrop-blur-md`).
* Sidebar nằm cố định bên trái tự động hiển thị trạng thái đang được chọn dựa trên biến `page` truyền từ Controller (`admin_dashboard`, `admin_tours`).
* Phần nội dung con được tự động bơm vào thẻ `<%- body %>` chiếm trọn toàn bộ không gian còn trống bên phải màn hình một cách linh hoạt.
