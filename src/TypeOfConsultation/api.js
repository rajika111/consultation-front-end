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