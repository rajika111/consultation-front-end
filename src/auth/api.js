import apiUrl from '../apiConfig'
import axios from 'axios'

export const add = req => {
  return axios({
    method: 'GET',
    url: apiUrl + `api/typeOfConsultation/${req.id}`
   
  })
}

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        fullName: credentials.fullName,
        phoneNum: credentials.phoneNum,
        role: credentials.role,
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

// Create blog 
export const createBlog = (blog, user) => {
  return axios({
    url: apiUrl + '/api/blogs',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      blog: blog
    }
  })
}

// Create Consultation
export const createConsultation = (consultation, user) => {
  return axios({
    url: apiUrl + '/api/consultations',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      consultation: consultation
    }
  })
}

// Create Type Of Consultation 
export const createTypeOfConsultation = (typeOfConsultation, user) => {
  return axios({
    url: apiUrl + '/api/typeOfConsultations',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      typeOfConsultation: typeOfConsultation
    }
  })
}

export const editBlogById = function (blog,user) {
  return axios({
    url: `${apiUrl}/api/blogs/${blog.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      blog: {
        title: blog.title,
        content: blog.content,
        author: blog.author,
        user: user._id
      }
    }
  })
}

export const editConsultationById = function (consultation,user) {
  return axios({
    url: `${apiUrl}/api/consultations/${consultation.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      consultation: {
        title: consultation.title,
        content: consultation.content,
        author: consultation.author,
        user: user._id
      }
    }
  })
}

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

