import axios from 'axios';
import { getEnvPerformance } from '../helpers/getEnvVaribles';

const VITE_API_PERFORMANCE = getEnvPerformance()

const performanceApi = axios.create({
    baseURL: VITE_API_PERFORMANCE,
});

// axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );


export default performanceApi;