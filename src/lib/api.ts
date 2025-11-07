import axios from 'axios';
import { Product, ProductsResponse, Category } from '@/types/product';

const API_BASE_URL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API functions
export const productApi = {
  // Get all products with pagination
  getProducts: async (limit: number = 30, skip: number = 0) => {
    const { data } = await api.get<ProductsResponse>(`/products?limit=${limit}&skip=${skip}`);
    return data;
  },

  // Search products
  searchProducts: async (query: string, limit: number = 30, skip: number = 0) => {
    const { data } = await api.get<ProductsResponse>(`/products/search?q=${query}&limit=${limit}&skip=${skip}`);
    return data;
  },

  // Get single product
  getProductById: async (id: number) => {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },

  // Get all categories
  getCategories: async () => {
    const { data } = await api.get<Category[]>('/products/categories');
    return data;
  },

  // Get category list
  getCategoryList: async () => {
    const { data } = await api.get<string[]>('/products/category-list');
    return data;
  },

  // Get products by category
  getProductsByCategory: async (category: string) => {
    const { data } = await api.get<ProductsResponse>(`/products/category/${category}`);
    return data;
  },

  // Create product
  createProduct: async (product: Partial<Product>) => {
    const { data } = await api.post<Product>('/products/add', product);
    return data;
  },

  // Update product
  updateProduct: async (id: number, product: Partial<Product>) => {
    const { data } = await api.put<Product>(`/products/${id}`, product);
    return data;
  },

  // Delete product
  deleteProduct: async (id: number) => {
    const { data } = await api.delete<Product & { isDeleted: boolean; deletedOn: string }>(`/products/${id}`);
    return data;
  },
};
