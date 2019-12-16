import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All TypeOfConsultations
export const getAllTypeOfConsultation = function() {
  return axios.get(`${apiUrl}/api/typeOfConsultation`);
}

// Delete TypeOfConsultation By ID
export const deleteTypeOfConsultationByID = function(id) {
  return axios.delete(`${apiUrl}/api/typeOfConsultation/${id}`);
} 