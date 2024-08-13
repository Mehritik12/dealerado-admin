import axios from 'axios'
import { AuthModel } from './_models'

const API_URL = process.env.REACT_APP_AUTH_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/admin/profile`
export const LOGIN_URL = `${API_URL}/loginAdmin`
export const REGISTER_URL = `${API_URL}/registerAdmin`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  console.log("url",LOGIN_URL)
  return axios.post<AuthModel>(LOGIN_URL, {  email,
    password,
  }).then((response: any) => {
    return response
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: any) {
  return axios.get(GET_USER_BY_ACCESSTOKEN_URL, {})
}
