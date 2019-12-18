import React from 'react';
import { Link } from 'react-router-dom';

class Consultation extends React.Component {
  deleteConsultations = (e) => {
    e.preventDefault();
    this.props.deleteConsultation(this.props.id);
  }

  render() {
    return (
      <div className="consultations">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>
        <button href="#" onClick={this.deleteConsultations}>Delete</button>
        <Link
          to={{
            pathname: "/consultations/editConsultation",

            state: { info: this.props.consultation }
          }}
        >
          <button>Edit Consultation</ button> </ Link>
      </div>
    );
  }
}

export default Consultation; 