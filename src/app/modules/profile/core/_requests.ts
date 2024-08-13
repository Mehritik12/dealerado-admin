import axios from 'axios'
import { updateProfileModal } from './_models'
const API_URL = process.env.REACT_APP_AUTH_API_URL
export const GET_PROFILE_URL = `${API_URL}/admin/profile`

// Server should return AuthModel
export function getUserProfile() {
  return axios.get(GET_PROFILE_URL, {})
}

export function updateProfile(formData: any) {
  return axios.put<updateProfileModal>(GET_PROFILE_URL, formData)
}

