import axios from 'axios';
import { getEnvSearchTool } from '../helpers/getEnvVaribles';

const VITE_API_SEARCH_TOOL = getEnvSearchTool()

const searchToolApi = axios.create({
    baseURL: VITE_API_SEARCH_TOOL,
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


export default searchToolApi;