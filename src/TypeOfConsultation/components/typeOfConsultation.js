import React from 'react';

class TypeOfConsultation extends React.Component {
  deleteTypeOfConsultation = (e) => {
    e.preventDefault();
    this.props.deleteTypeOfConsultation(this.props.id);
  }

  render() {
    return (
      <div className="typeOfConsultation">
        <h2>{this.props.category}</h2>
        <sub>{this.props.description}</sub>
       
        <a href="#" onClick={this.deleteTypeOfConsultation}>Delete</a>
      </div>
    );
  }
}

export default TypeOfConsultation; 