import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Blogs
export const getAllBlogs = function() {
  return axios.get(`${apiUrl}/blogs`);
}

// Delete Blog By ID
export const deleteBlogByID = function(id) {
  return axios.delete(`${apiUrl}/blogs/${id}`);
} 