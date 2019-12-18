import React from 'react';
import { Link } from 'react-router-dom';
import './type.scss';
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
        <Link
          to={{
            pathname: "/typeOfConsultations/editTypeOfConsultation",

            state: { info: this.props.typeOfConsultation }
          }}
        >
          <button>Edit Type Of Consultation</ button> </ Link>
      </div>
    );
  }
}

export default TypeOfConsultation; 