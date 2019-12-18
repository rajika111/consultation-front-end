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

// Create blog 
export const createBlog = (blog, user) => {
  return axios({
    url: apiUrl + '/api/blogs',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    },
    data: {
      blog: blog
    }
  })
}
// Edit blog
export const editBlogById = function (blog,user) {
  return axios({
    url: `${apiUrl}/api/blogs/${blog.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      blog: {
        title: blog.title,
        content: blog.content,
        author: blog.author,
        user: user._id
      }
    }
  })
}