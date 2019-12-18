import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
  deleteBlogs = (e) => {
    e.preventDefault();
    this.props.deleteBlog(this.props.id);
  }

  render() {
    return (
      <div className="blogs container">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>

        {this.props.user ?
          this.props.user.Role === 'Admin' ?
            <button href="#" onClick={this.deleteBlogs}>Delete</button>
            : false
          : false}
        <Link
          to={{
            pathname: "/blogs/editBlog",

            state: { info: this.props.blog }
          }}
        >
          <h3>Edit Blog</ h3> </ Link>

      </div>
    );
  }
}

export default Blog; 