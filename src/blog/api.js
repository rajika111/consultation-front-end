import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Blogs
export const getAllBlogs = function() {
  return axios.get(`${apiUrl}/api/blog`);
}

// Delete Blog By ID
export const deleteBlogByID = function(id,userId) {
  return axios.delete(`${apiUrl}/api/blogs/${id}`);
} 
// Create Blog By ID
export const createBlogByID = function(id,userId) {
  return axios.create(`${apiUrl}/api/blogs/${id}`);
}