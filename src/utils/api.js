import axios from 'axios';

// const API_URL = 'https://young-wave-45819-4c488469177c.herokuapp.com/api'; // API의 기본 URL 설정
const API_URL = 'http://localhost:3030/api'; // API의 기본 URL 설정
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.data && error.response.data.error) {
        error.message = error.response.data.error.message;
      }
      error.status = error.response.status;
    }
    return Promise.reject(error);
  }
);
export default api;

