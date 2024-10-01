import axios from 'axios';
// config
import { HOST_API_KEY } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || {"message":'Connection Error: Kindly reach out to the Admin'})
// );

axiosInstance.interceptors.request.use(
  async (config) => {
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
        console.log("Here")
          config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response.status === 401 && !window.location.href.includes('/login')) {
          window.location.pathname = '/login';
      }
      return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosInstance;
