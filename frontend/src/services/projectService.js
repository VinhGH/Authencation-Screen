import api from './api';

// Lấy tất cả projects
export const getAllProjects = async () => {
    const response = await api.get('/api/projects');
    return response.data;
};

// Lấy project theo ID
export const getProjectById = async (id) => {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
};

// Tạo project mới
export const createProject = async (projectData) => {
    const response = await api.post('/api/projects', projectData);
    return response.data;
};

// Cập nhật project
export const updateProject = async (id, projectData) => {
    const response = await api.put(`/api/projects/${id}`, projectData);
    return response.data;
};

// Xóa project
export const deleteProject = async (id) => {
    const response = await api.delete(`/api/projects/${id}`);
    return response.data;
};
