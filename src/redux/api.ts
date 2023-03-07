import axios from 'axios';
import { Post } from './postSlice';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {
  return axios.get(`${API_BASE_URL}/posts`);
};

export const fetchPostById = (id: number) => {
  return axios.get(`${API_BASE_URL}/posts/${id}`);
};

export const createPost = (data: Post) => {
  return axios.post(`${API_BASE_URL}/posts`, data);
};


