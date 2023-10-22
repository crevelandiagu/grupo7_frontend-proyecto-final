import axios from 'axios';
import { getEnvVariablesProject } from '../helpers/getEnvVaribles';

const VITE_API_PROJECTS = getEnvVariablesProject()




const candidateApi = axios.create({
    baseURL: VITE_API_PROJECTS
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