import axios from 'axios';
import { getEnvProjects } from '../helpers/getEnvVaribles';

const VITE_API_PROJECTS = getEnvProjects()




const projectsApi = axios.create({
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


export default projectsApi;