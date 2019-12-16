import React from 'react';

class Consultation extends React.Component {
  deleteConsultation = (e) => {
    e.preventDefault();
    this.props.deleteConsultation(this.props.id);
  }

  render() {
    return (
      <div className="consultation">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>
        <a href="#" onClick={this.deleteConsultation}>Delete</a>
      </div>
    );
  }
}

export default Consultation; 