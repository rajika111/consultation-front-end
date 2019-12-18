import apiUrl from '../apiConfig'
import axios from 'axios'

// Get All Consultations
export const getAllConsultation = function () {
    return axios.get(`${apiUrl}/api/consultation`);
}

// Delete Consultation By ID
export const deleteConsultationByID = function (id,userId) {
    return axios.delete(`${apiUrl}/api/consultations/${id}`);
} 

// Create Consultation
export const createConsultation = (consultation, user) => {
    return axios({
      url: apiUrl + '/api/consultations',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      },
      data: {
        consultation: consultation
      }
    })
  }