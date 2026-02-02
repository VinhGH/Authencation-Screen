import api from './api';

// Lấy tất cả users
export const getAllUsers = async () => {
    const response = await api.get('/api/users');
    return response.data;
};

// Lấy user theo ID
export const getUserById = async (id) => {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
};

// Tạo user mới
export const createUser = async (userData) => {
    const response = await api.post('/api/users', userData);
    return response.data;
};

// Cập nhật user
export const updateUser = async (id, userData) => {
    const response = await api.put(`/api/users/${id}`, userData);
    return response.data;
};

// Xóa user
export const deleteUser = async (id) => {
    const response = await api.delete(`/api/users/${id}`);
    return response.data;
};
