import React from 'react';

class Blog extends React.Component {
  deleteBlogs = (e) => {
    e.preventDefault();
    this.props.deleteBlog(this.props.id);
  }

  render() {
    return (
      <div className="blogs">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>

        {this.props.user ?
          this.props.user.Role === 'Admin' ?
            <a href="#" onClick={this.deleteBlogs}>Delete</a>
            :false
            :false}
            <Link to='/blog/editBlog'> <h3>Edit Blog</ h3> </ Link>
      </div>
    );
  }
}

export default Blog; 