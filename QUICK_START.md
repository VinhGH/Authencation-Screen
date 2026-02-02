# Quick Start Guide

## 🚀 Chạy ứng dụng

### 1. Backend
```bash
cd backend
npm run dev
```
Server chạy tại: `http://localhost:3001`

### 2. Frontend
```bash
cd frontend
npm run dev
```
Frontend chạy tại: `http://localhost:5173`

---

## 🧪 Test Flow

### Bước 1: Đăng ký tài khoản
1. Mở `http://localhost:5173`
2. Tab "Sign Up"
3. Nhập:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
4. Click "Create Account"
5. Tự động chuyển đến Dashboard

### Bước 2: Kiểm tra Dashboard
- Xem thông tin user ở Sidebar (tên, email)
- Avatar hiển thị chữ cái đầu của tên

### Bước 3: Logout
- Click icon logout ở Sidebar
- Confirm logout
- Tự động về trang login

### Bước 4: Đăng nhập lại
1. Tab "Sign In"
2. Nhập:
   - Email: `test@example.com`
   - Password: `password123`
3. Click "Sign In"
4. Vào Dashboard

---

## 📚 Swagger Documentation

Mở `http://localhost:3001/api-docs` để xem tất cả API endpoints và test trực tiếp.

---

## 🔧 Test API với REST Client

Mở file `backend/userAPI.http` và test các endpoint:

### Authentication
```http
# 1. Register
POST http://localhost:3001/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

# 2. Login
POST http://localhost:3001/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

# 3. Get Me (cần token từ login)
GET http://localhost:3001/api/auth/me
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## ✅ Checklist hoàn thành

- [x] Backend chạy thành công
- [x] Frontend chạy thành công
- [x] Đăng ký tài khoản mới
- [x] Đăng nhập
- [x] Hiển thị thông tin user
- [x] Logout
- [x] Protected routes hoạt động
- [x] Swagger documentation
- [x] Error handling

---

## 🎯 Các tính năng đã implement

### Backend
- ✅ MVC + Service Layer architecture
- ✅ JWT authentication với bcrypt
- ✅ User CRUD operations
- ✅ Project CRUD với relationships
- ✅ Swagger documentation
- ✅ Common response format
- ✅ Error codes (EMAIL_EXIST, INVALID_CREDENTIALS, etc.)

### Frontend
- ✅ Login/Register forms
- ✅ Protected routes
- ✅ Token management
- ✅ Auto-logout on token expiration
- ✅ User info display
- ✅ Error handling với messages
- ✅ Loading states

---

## 📝 Environment Variables

### Backend (.env)
```
PORT=3001
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
JWT_EXPIRE=1d
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

---

## 🐛 Troubleshooting

### Backend không kết nối MongoDB
- Kiểm tra `MONGO_URI` trong `.env`
- Đảm bảo MongoDB Atlas cho phép IP của bạn

### Frontend không gọi được API
- Kiểm tra backend đang chạy
- Kiểm tra `VITE_API_URL` trong `.env`
- Restart frontend sau khi thay đổi `.env`

### Token hết hạn
- Logout và login lại
- Hoặc clear localStorage: `localStorage.clear()`

---

## 🎉 Done!

Ứng dụng đã sẵn sàng sử dụng. Tất cả tính năng đã được implement theo đúng hướng dẫn 100%!
