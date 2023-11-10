import axios from 'axios';
import { getEnvCompanyEmployees } from '../helpers/getEnvVaribles';

const VITE_API_COMPANY_EMPLOYEES = getEnvCompanyEmployees()

const companyEmployeesApi = axios.create({
    baseURL: VITE_API_COMPANY_EMPLOYEES
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


export default companyEmployeesApi;