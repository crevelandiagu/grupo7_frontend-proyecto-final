import axios from 'axios';
import { getEnvVariablesSearch } from '../helpers/getEnvVaribles';

const VITE_API_SEARCH = getEnvVariablesSearch()

const searchApi = axios.create({
    baseURL: VITE_API_SEARCH,
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


export default searchApi;