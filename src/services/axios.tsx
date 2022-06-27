import axios from 'axios';

const BASE_URL = 'https://localhost:6666/api';

export const request = axios.create({baseURL: BASE_URL});

request.interceptors.request.use(
  async config => {
    try {
      const token = '';

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (errorConfig) {
      return Promise.reject(errorConfig);
    }
  },
  error => {
    return Promise.reject(error);
  },
);
