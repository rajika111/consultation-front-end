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
        <sub>{this.props.content}</sub>
       
        <a href="#" onClick={this.deleteBlogs}>Delete</a>
      </div>
    );
  }
}

export default Blog; 