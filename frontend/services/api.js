import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken'
});

export default api;