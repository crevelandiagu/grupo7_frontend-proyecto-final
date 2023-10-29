import axios from 'axios';
import { getEnvVariablesCandidate, getEnvVariablesCompany } from '../helpers/getEnvVaribles';

// const VITE_API_CANDIDATE = getEnvVariablesCandidate()

const setEnvVariable = () => {
  const typeClient = localStorage.getItem("typeClient");

  if (typeClient === "candidate") {
    return getEnvVariablesCandidate();
  } else if (typeClient === "company") {
    return getEnvVariablesCompany();
  }

};



const candidateApi = axios.create({
    baseURL: setEnvVariable()
});

console.log('baseUrl: ', setEnvVariable() )

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