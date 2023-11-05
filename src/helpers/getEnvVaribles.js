// export const getEnvVariables = () => {
//   return {
//     ...import.meta.env,
//   };
// };

export const getEnvVariablesCandidate = () => {
  return import.meta.env.VITE_API_CANDIDATE || import.meta.env.VITE_API_CANDIDATE_LOCAL
}

export const getEnvVariablesCompany = () => {
  return import.meta.env.VITE_API_COMPANY || import.meta.env.VITE_API_COMPANY_LOCAL
}

export const getEnvVariablesProject = () => {
  return import.meta.env.VITE_API_PROJECTS || import.meta.env.VITE_API_PROJECTS_LOCAL
}

export const getEnvVariablesSearch = () => {
  return import.meta.env.VITE_API_SEARCH || import.meta.env.VITE_API_SEARCH_LOCAL
}

export const getEnvVariablesProcess = () => {
  return import.meta.env.VITE_API_SELECTION_PROCESS || import.meta.env.VITE_API_SELECTION_PROCESS_LOCAL
}


