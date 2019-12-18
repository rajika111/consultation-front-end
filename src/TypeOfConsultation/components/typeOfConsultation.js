import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          to={{
            pathname: "/typeOfConsultations/editTypeOfConsultation",

            state: { info: this.props.typeOfConsultation }
          }}
        >
          <h3>Edit Type Of Consultation</ h3> </ Link>
      </div>
    );
  }
}

export default TypeOfConsultation; 