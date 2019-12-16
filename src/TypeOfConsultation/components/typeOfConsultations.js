import React from 'react';
import { getAllTypeOfConsultations, deleteTypeOfConsultationsByID } from '../api';
import TypeOfConsultation from './typeOfConsultation';

class TypeOfConsultations extends React.Component {
  componentDidMount() {
    getAllTypeOfConsultations()
      .then((response) => {
        this.props.setTypeOfConsultations(response.data.typeOfConsultations);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTypeOfConsultation = (id) => {
    deleteTypeOfConsultationByID(id)
      .then((response) => {
        const newTypeOfConsultationsList = this.props.typeOfConsultations.filter((typeOfConsultation) => {
          return typeOfConsultation._id !== id;
        });

        this.props.setTypeOfConsultations(newTypeOfConsultationsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allAtypeOfConsultations = <h2>No TypeOfConsultations</h2>;

    if (this.props.typeOfConsultations.length > 0) {
      allTypeOfConsultations = this.props.typeOfConsultations.map((typeOfConsultation, index) => {
        return <typeOfConsultation title={typeOfConsultation.title}
                        author={typeOfConsultation.author}
                        content={typeOfConsultation.content}
                        id={typeOfConsultation._id}
                        deletetypeOfConsultations={this.deleteTypeOfConsultation}
                        key={index} />;
      });
    }

    return allTypeOfConsultations;
  }
}

export default TypeOfConsultations;