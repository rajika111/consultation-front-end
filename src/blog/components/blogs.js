import React from 'react';
import { getAllBlogs, deleteBlogByID } from '../api';

import Blog from './blog';
import { Link } from 'react-router-dom';

class Blogs extends React.Component {
  componentDidMount() {
    getAllBlogs()
      .then((response) => {
        this.props.setBlogs(response.data.blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBlog = (id) => {
    deleteBlogByID(id, this.props.user)
      .then((response) => {
        const newBlogsList = this.props.blogs.filter((blog) => {
          return blog._id !== id;
        });

        this.props.setBlogs(newBlogsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allBlogs = <div>
    <div class="card-group">
      <div class="card">
          <div class="card-body">
           <h5 class="card-title">Empty</h5>
           
  </div>
</div>
</div>
<br></br>
</div>

    if (this.props.blogs.length > 0) {
      allBlogs = this.props.blogs.map((blog, index) => {
        return <Blog 
        user={this.props.user}
        title={blog.title}
          author={blog.author}
          content={blog.content}
          id={blog._id}
          blog={blog}
          deleteBlog={this.deleteBlog}
          key={index} />
      });
    }
    return (
      <div>
        <Link to='/blog/createBlog'> <button>Create Blog</button> </ Link>
        {allBlogs}
      </ div>
    );
  }
}

export default Blogs; 