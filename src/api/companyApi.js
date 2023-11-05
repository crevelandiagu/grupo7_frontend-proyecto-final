import axios from 'axios';
import { getEnvVariablesCompany } from '../helpers/getEnvVaribles';

const VITE_API_COMPANY = getEnvVariablesCompany()

const candidateApi = axios.create({
    baseURL: VITE_API_COMPANY
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


export default candidateApi;