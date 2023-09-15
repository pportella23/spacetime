import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.25.62:3333', // Casa
  // baseURL: 'http://192.168.15.119:3333', // Casa mãe
})
