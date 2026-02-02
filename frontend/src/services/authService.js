import api from './api';

// Đăng ký
export const register = async (userData) => {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
};

// Đăng nhập
export const login = async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);

    // Lưu token và user info vào localStorage
    if (response.data.success && response.data.data.token) {
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }

    return response.data;
};

// Lấy thông tin user hiện tại
export const getMe = async () => {
    const response = await api.get('/api/auth/me');
    return response.data;
};

// Đăng xuất
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
};

// Kiểm tra đã đăng nhập chưa
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

// Lấy user từ localStorage
export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};
