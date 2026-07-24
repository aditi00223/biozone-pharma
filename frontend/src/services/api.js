import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

// Helper to attach auth token to protected requests
const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// Public routes
export const getProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);

// Admin (protected) routes
export const addProduct = (data, token) => API.post('/products', data, authHeader(token));
export const updateProductById = (id, data, token) => API.put(`/products/${id}`, data, authHeader(token));
export const deleteProductById = (id, token) => API.delete(`/products/${id}`, authHeader(token));

// Auth routes
export const loginAdmin = (data) => API.post('/auth/login', data);
export const registerAdmin = (data) => API.post('/auth/register', data);

export default API;