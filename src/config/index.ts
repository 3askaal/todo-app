export const API_URL =
  process.env.NODE_ENV === 'production' ? 'https://t0d0-4p1.herokuapp.com' : 'http://localhost:4000'
export const BASE_URL = process.env.NODE_ENV === 'production' ? '/todo-app' : ''
