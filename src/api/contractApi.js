import axios from 'axios';
import { getEnvContract } from '../helpers/getEnvVaribles';

const VITE_API_CONTRACTS = getEnvContract()

const contractApi = axios.create({
    baseURL: VITE_API_CONTRACTS
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


export default contractApi;