import React from 'react';
import { getAllConsultation, deleteConsultationByID } from '../api';
import Consultation from './consultation';

class Consultations extends React.Component {
  componentDidMount() {
    getAllConsultation()
      .then((response) => {
        this.props.setConsultations(response.data.consultations);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteConsultation = (id) => {
    deleteConsultationByID(id,this.props.user)
      .then((response) => {
        const newConsultationsList = this.props.consultations.filter((consultation) => {
          return consultation._id !== id;
        });

        this.props.setConsultations(newConsultationsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allConsultations = <div className="main-home">
    <div className="list">
        <h1>Legal Consultation</h1>
        <p> Legal advice is advice given to a person that seeks the advice from an attorney, the advice given pertains to matters within the attorney’s competence, and the attorney expressly or impliedly agrees to give advice or their assistance in the matter. If such legal advice is given an implied attorney-client relationship may be formed between you and the attorney, even at the initial consultation</p></div>      
      <div className="list">
<h1>What we do</h1>

<li>Our platform is region-specific and supports the unique set of features, including</li>

<li>multilingual support.</li>
<li>anonymity for consumers.</li>
<li>lawyers licensing check.</li>
<li>two-level attorneys control system</li>
<li>multiple channels for lawyer-consumer communication</li>
<li>support for remote rendering of legal services</li>
<li>local legal knowledge bas</li>
</div>
</div>   

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