import React from 'react';
import { Link } from 'react-router-dom';
import '../../TypeOfConsultation/components/type.scss';
class Consultation extends React.Component {
  deleteConsultations = (e) => {
    e.preventDefault();
    this.props.deleteConsultation(this.props.id);
  }

  render() {
    return (
      <div className="consultations">
        <div class= "textbox">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>
        </div>
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