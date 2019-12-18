import React from 'react';

class TypeOfConsultation extends React.Component {
  deleteTypeOfConsultations = (e) => {
    e.preventDefault();
    this.props.deleteTypeOfConsultation(this.props.id);
  }

  render() {
    return (
      <div className="typeOfConsultation">
        <h2>{this.props.category}</h2>
        <sub>{this.props.description}</sub>
       
        <button href="#" onClick={this.deleteTypeOfConsultations}>Delete</button>
      </div>
    );
  }
}

export default TypeOfConsultation; 