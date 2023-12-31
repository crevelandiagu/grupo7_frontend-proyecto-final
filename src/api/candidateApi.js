import axios from 'axios';
import { getEnvCandidate } from '../helpers/getEnvVaribles';

const VITE_API_CANDIDATE = getEnvCandidate()

const candidateApi = axios.create({
    baseURL: VITE_API_CANDIDATE,
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