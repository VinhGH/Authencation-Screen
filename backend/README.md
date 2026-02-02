# Authentication & Notes Backend API

Backend API cho ứng dụng Authentication & Notes, được xây dựng với Node.js, Express, và MongoDB.

## 📁 Cấu Trúc Dự Án

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # Cấu hình kết nối MongoDB
│   ├── models/
│   │   ├── userModel.js       # Schema User (name, email, password)
│   │   └── noteModel.js       # Schema Note (title, content, tag, userId)
│   ├── services/
│   │   ├── userService.js     # Logic nghiệp vụ User (register, login, JWT)
│   │   └── noteService.js     # Logic nghiệp vụ Note (CRUD operations)
│   ├── controllers/
│   │   ├── userController.js  # Xử lý HTTP requests cho User
│   │   └── noteController.js  # Xử lý HTTP requests cho Note
│   ├── routes/
│   │   ├── userRoutes.js      # Định nghĩa API endpoints cho User
│   │   └── noteRoutes.js      # Định nghĩa API endpoints cho Note
│   ├── middleware/
│   │   ├── authMiddleware.js       # JWT authentication middleware
│   │   └── validationMiddleware.js # Input validation middleware
│   └── server.js              # File chạy chính
├── .env                       # Biến môi trường
├── .env.example              # Template biến môi trường
├── .gitignore                # Git ignore file
└── package.json              # Dependencies và scripts
```

## 🚀 Cài Đặt

### 1. Cài đặt dependencies

```bash
cd backend
npm install
```

### 2. Cấu hình môi trường

File `.env` đã được tạo sẵn với cấu hình mặc định:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-notes-db
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
```

**Lưu ý:** 
- Đổi `JWT_SECRET` thành một chuỗi bảo mật khi deploy production
- Nếu dùng MongoDB Atlas, cập nhật `MONGODB_URI` với connection string của bạn

### 3. Cài đặt MongoDB

**Option 1: MongoDB Local**
- Download và cài đặt MongoDB Community Edition
- Khởi động MongoDB service

**Option 2: MongoDB Atlas (Cloud)**
- Tạo tài khoản tại [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Tạo cluster miễn phí
- Lấy connection string và cập nhật vào `.env`

### 4. Chạy server

```bash
# Development mode (auto-restart với nodemon)
npm run dev

# Production mode
npm start
```

Server sẽ chạy tại: `http://localhost:5000`

## 📚 API Endpoints

### User Authentication

#### Register User
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

#### Login User
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

---

### Notes Management

**Tất cả endpoints Note yêu cầu authentication (Bearer token)**

#### Create Note
```http
POST /api/notes
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note",
  "tag": "PERSONAL"
}
```

**Tags:** `WORK`, `PERSONAL`, `TRAVEL`, `SENSITIVE`

#### Get All Notes
```http
GET /api/notes
Authorization: Bearer <token>

# Filter by tag (optional)
GET /api/notes?tag=WORK
```

#### Get Single Note
```http
GET /api/notes/:id
Authorization: Bearer <token>
```

#### Update Note
```http
PUT /api/notes/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content",
  "tag": "WORK"
}
```

#### Delete Note
```http
DELETE /api/notes/:id
Authorization: Bearer <token>
```

#### Get Notes Statistics
```http
GET /api/notes/stats
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalNotes": 10,
    "notesByTag": [
      { "_id": "WORK", "count": 5 },
      { "_id": "PERSONAL", "count": 3 },
      { "_id": "TRAVEL", "count": 2 }
    ]
  }
}
```

---

### Health Check
```http
GET /api/health
```

## 🔐 Authentication

API sử dụng JWT (JSON Web Tokens) để xác thực.

1. Register hoặc Login để nhận token
2. Thêm token vào header cho các protected routes:
   ```
   Authorization: Bearer <your-token>
   ```

Token có thời hạn 30 ngày.

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **express-validator** - Input validation
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables

## 📝 Validation Rules

### User Registration
- Name: 2-50 characters
- Email: Valid email format
- Password: Minimum 6 characters

### Note Creation
- Title: Required, max 200 characters
- Content: Required
- Tag: Must be one of: WORK, PERSONAL, TRAVEL, SENSITIVE

## 🔄 Testing với Postman/Thunder Client

1. Import collection hoặc tạo requests thủ công
2. Register một user mới
3. Copy token từ response
4. Sử dụng token để test các Note endpoints

## 🚨 Error Handling

API trả về error responses với format:

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [] // Validation errors (nếu có)
}
```

Status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.1.5",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "cors": "^2.8.5",
  "express-validator": "^7.0.1",
  "dotenv": "^17.2.3"
}
```

## 🔜 Next Steps

- [ ] Kết nối frontend với backend
- [ ] Test các API endpoints
- [ ] Deploy lên production (Render, Railway, etc.)
- [ ] Thêm unit tests
- [ ] Thêm API documentation (Swagger)

## 📄 License

This project is for educational purposes.
