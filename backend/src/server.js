import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Nhớ đuôi .js
import { swaggerDocs } from './swagger.js';
import userRoutes from './routes/userRoutes.js'; // Nhớ đuôi .js
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

// Load biến môi trường
dotenv.config();

const app = express();

// Middleware quan trọng: Giúp Express hiểu được dữ liệu JSON
// Nếu thiếu dòng này, req.body sẽ bị undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
    origin: "https://authencation-screen.vercel.app" || 'http://localhost:5173',
    credentials: true
}));

// Kết nối Database
connectDB();

// Swagger Documentation
swaggerDocs(app);

// Route gốc
// Mọi request bắt đầu bằng /api/users sẽ đi vào userRoutes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Authentication & User Management API',
        version: '1.0.0',
        documentation: '/api-docs',
        endpoints: {
            auth: '/api/auth',
            users: '/api/users',
            projects: '/api/projects'
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
    console.log(`📚 Swagger docs: http://localhost:${PORT}/api-docs`);
});

export default app;
