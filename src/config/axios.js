import axios from 'axios';
import { getAccessToken } from '../services/localStorage';
import { API_URL } from './env';

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => response,
  err => {
    if (err.response.status === 401) {
    }
    return Promise.reject(err);
  }
);

export default axios;
