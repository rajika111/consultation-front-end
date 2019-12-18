import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Type Of Consultations
export const getAllTypeOfConsultation = function() {
  return axios.get(`${apiUrl}/api/typeOfConsultation`);
}

// Delete Type Of Consultation By ID
export const deleteTypeOfConsultationByID = function(id,userId) {
  return axios.delete(`${apiUrl}/api/typeOfConsultations/${id}`);
} 

// Create Type Of Consultation 
export const createTypeOfConsultation = (typeOfConsultation, user) => {
  return axios({
    url: apiUrl + '/api/typeOfConsultations',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    },
    data: {
      typeOfConsultation: typeOfConsultation
    }
  })
}

// Edit Type of Consultation
export const editTypeOfConsultationById = function (typeOfConsultation,user) {
  return axios({
    url: `${apiUrl}/api/typeOfConsultations/${typeOfConsultation.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      typeOfConsultation: {
        title: typeOfConsultation.category,
        content: typeOfConsultation.description,
        user: user._id
      }
    }
  })
}