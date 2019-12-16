import apiUrl from '../apiConfig'
import axios from 'axios'

// Get All Blogs
export const getAllConsultation = function () {
    return axios.get(`${apiUrl}/api/consultation`);
}

// Delete Blog By ID
export const deleteConsultationByID = function (id) {
    return axios.delete(`${apiUrl}/consultations/${id}`);
} 