import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All TypeOfConsultations
export const getAllTypeOfConsultations = function() {
  return axios.get(`${apiUrl}/typeOfConsultations`);
}

// Delete TypeOfConsultation By ID
export const deleteTypeOfConsultationByID = function(id) {
  return axios.delete(`${apiUrl}/typeOfConsultations/${id}`);
} 