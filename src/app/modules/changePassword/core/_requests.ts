import axios from 'axios'
import { ChangePasswordModel } from './_models'

const API_URL = process.env.REACT_APP_AUTH_API_URL
export const CHANGE_PASSWORD_URL = `${API_URL}/changePassword`

export function changePassword(values:Object) {
  return axios.post<ChangePasswordModel>(CHANGE_PASSWORD_URL,values)
}

