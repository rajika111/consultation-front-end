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
      <div>
      <div class="card-group">
        <div class="card">
          <img src={this.props.image} class="card-img-top" alt="..." width="150" height="250" />
            <div class="card-body">
             <h5 class="card-title">{this.props.category}</h5>
              <p class="card-text">{this.props.description}</p>
              <div class="card-footer">
               <button href="#" onClick={this.deleteTypeOfConsultations}>Delete</button>

        <Link
          to={{
            pathname: "/typeOfConsultations/editTypeOfConsultation",
            state: { info: this.props.typeOfConsultation }
          }}
        >
          <button>Edit Type Of Consultation</ button> </ Link>
          </div>
    </div>
  </div>
  </div>
  <br></br>
  </div>
     
    )}
    };

export default TypeOfConsultation; 