# Hướng dẫn Deploy lên Vercel

## 🚀 Deploy Backend (API)

### Bước 1: Chuẩn bị
1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Cài Vercel CLI (tùy chọn):
   ```bash
   npm install -g vercel
   ```

### Bước 2: Deploy Backend
1. Vào thư mục backend:
   ```bash
   cd backend
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Làm theo hướng dẫn:
   - Link to existing project? **No**
   - Project name? **authentication-backend** (hoặc tên bạn muốn)
   - Directory? **./** (Enter)
   - Override settings? **No**

### Bước 3: Cấu hình Environment Variables
Sau khi deploy, vào Vercel Dashboard:
1. Chọn project backend
2. Settings → Environment Variables
3. Thêm các biến:
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: JWT secret key
   - `JWT_EXPIRE`: 1d
   - `FRONTEND_URL`: URL của frontend (sau khi deploy)

4. Redeploy để áp dụng env variables:
   ```bash
   vercel --prod
   ```

---

## 🎨 Deploy Frontend

### Bước 1: Cập nhật API URL
Trong file `frontend/.env`:
```
VITE_API_URL=https://your-backend-url.vercel.app
```

### Bước 2: Deploy Frontend
1. Vào thư mục frontend:
   ```bash
   cd frontend
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Làm theo hướng dẫn tương tự backend

### Bước 3: Cập nhật CORS
Quay lại backend, cập nhật `FRONTEND_URL` environment variable với URL frontend vừa deploy.

---

## ✅ Kiểm tra

1. Mở URL frontend
2. Đăng ký tài khoản mới
3. Đăng nhập
4. Kiểm tra Dashboard

---

## 📝 Lưu ý quan trọng

### Backend
- ✅ File `vercel.json` đã được tạo
- ✅ Entry point: `src/server.js`
- ⚠️ Đảm bảo MongoDB Atlas cho phép kết nối từ mọi IP (0.0.0.0/0)

### Frontend
- ✅ File `vercel.json` đã được tạo với SPA routing
- ✅ Build command: `vite build` (tự động)
- ✅ Output directory: `dist` (tự động)

### CORS
Cập nhật `backend/src/server.js` để chấp nhận origin từ Vercel:
```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    process.env.FRONTEND_URL
  ],
  credentials: true
}));
```

---

## 🔄 Deploy lại khi có thay đổi

```bash
# Production deployment
vercel --prod

# Preview deployment (test trước)
vercel
```

---

## 🌐 Custom Domain (Tùy chọn)

1. Vào Vercel Dashboard
2. Chọn project
3. Settings → Domains
4. Thêm domain của bạn

---

## 🐛 Troubleshooting

### Backend không kết nối MongoDB
- Kiểm tra `MONGO_URI` trong Environment Variables
- Đảm bảo MongoDB Atlas whitelist IP: 0.0.0.0/0

### Frontend không gọi được API
- Kiểm tra `VITE_API_URL` đã đúng chưa
- Kiểm tra CORS settings ở backend

### 404 khi refresh trang
- Đảm bảo `vercel.json` có rewrites cho SPA routing
