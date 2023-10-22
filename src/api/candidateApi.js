import axios from 'axios';
import { getEnvVariablesCandidate } from '../helpers/getEnvVaribles';

const VITE_API_CANDIDATE = getEnvVariablesCandidate()




const candidateApi = axios.create({
    baseURL: VITE_API_CANDIDATE
});

console.log('baseUrl: ', VITE_API_CANDIDATE )

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