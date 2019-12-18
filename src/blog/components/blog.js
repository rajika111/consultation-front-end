import React from 'react';

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

       
        <button href="#" onClick={this.deleteBlogs}>Delete</button>
      </div>
    );
  }
}

export default Blog; 