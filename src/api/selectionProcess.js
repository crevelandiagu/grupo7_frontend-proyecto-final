
import axios from 'axios';
import { getEnvSelectionProcess } from '../helpers/getEnvVaribles';

const VITE_API_SELECTION_PROCESS = getEnvSelectionProcess()

const selectionProcessApi = axios.create({
    baseURL: VITE_API_SELECTION_PROCESS,
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


export default selectionProcessApi;