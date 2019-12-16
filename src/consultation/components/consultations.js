import React from 'react';
import { getAllConsultation, deleteConsultationByID } from '../api';
import Consultation from './consultation';

class Consultations extends React.Component {
  componentDidMount() {
    getAllConsultation()
      .then((response) => {
        this.props.setConsultations(response.data.Consultations);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteConsultation = (id) => {
    deleteConsultationByID(id)
      .then((response) => {
        const newConsultationsList = this.props.consultations.filter((consultation) => {
          return consultation._id !== id;
        });

        this.props.setConsultation(newConsultationsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allConsultations = <h2>No Consultations</h2>;

    if (this.props.consultations.length > 0) {
      allConsultations = this.props.consultations.map((consultation, index) => {
        return <Consultation title={consultation.title}
                        author={consultation.author}
                        content={consultation.content}
                        id={consultation._id}
                        deleteConsultation={this.deleteConsultation}
                        key={index} />;
      });
    }

    return allConsultations;
  }
}

export default Consultations; 