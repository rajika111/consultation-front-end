import React from 'react';

class TypeOfConsultation extends React.Component {
  deleteTypeOfConsultations = (e) => {
    e.preventDefault();
    this.props.deleteTypeOfConsultation(this.props.id);
  }

  render() {
    return (
      <div className="typeOfConsultation container-md">
        <h2>{this.props.category}</h2>
        <br></br>
        <img src={this.props.image} alt='' width='250px' ></img>
        <br></br>
        <sub>{this.props.description}</sub>
        <br></br>
       
        <button href="#" onClick={this.deleteTypeOfConsultations}>Delete</button>
      </div>
    );
  }
}

export default TypeOfConsultation; 