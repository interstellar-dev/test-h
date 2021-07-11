import axios from 'axios'

const API_HOST = 'https://jsonplaceholder.typicode.com/'

const api = axios.create({
  baseURL: API_HOST,
})

export default api
