import axios from 'axios'
import { BASE_URL, Mime } from '../constant'

export const testInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': Mime.Json,
  },
})
