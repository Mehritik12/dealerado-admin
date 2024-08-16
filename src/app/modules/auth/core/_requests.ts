import axios from 'axios'
import { AuthModel } from './_models'

const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/admin/profile`
export const LOGIN_URL = `${API_URL}/auth/loginAdmin`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {  email,
    password,
  }).then((response: any) => {
    return response
  })
}

export function getUserByToken() {
  return axios.get(GET_USER_BY_ACCESSTOKEN_URL, {})
}
