export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://todo-4pi.herokuapp.com'
    : 'http://localhost:4000'
