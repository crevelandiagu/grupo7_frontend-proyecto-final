import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVaribles';

const { VITE_API_COMPANY, VITE_API_COMPANY_LOCAL } = getEnvVariables()




const candidateApi = axios.create({
    baseURL: VITE_API_COMPANY || VITE_API_COMPANY_LOCAL
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