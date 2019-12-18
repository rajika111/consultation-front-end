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
