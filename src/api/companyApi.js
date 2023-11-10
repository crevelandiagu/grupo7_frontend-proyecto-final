import axios from 'axios';
import { getEnvCompany } from '../helpers/getEnvVaribles';

const VITE_API_COMPANY = getEnvCompany()

const companyApi = axios.create({
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


export default companyApi;