// export const getEnvVariables = () => {
//   return {
//     ...import.meta.env,
//   };
// };

export const getEnvCandidate = () => {
  return import.meta.env.VITE_API_CANDIDATE || import.meta.env.VITE_API_CANDIDATE_LOCAL
}

export const getEnvCompany = () => {
  return import.meta.env.VITE_API_COMPANY || import.meta.env.VITE_API_COMPANY_LOCAL
}

export const getEnvCompanyEmployees = () => {
  return import.meta.env.VITE_API_COMPANY_EMPLOYEES || import.meta.env.VITE_API_COMPANY_EMPLOYEES_LOCAL
}

export const getEnvProjects = () => {
  return import.meta.env.VITE_API_PROJECTS || import.meta.env.VITE_API_PROJECTS_LOCAL
}

export const getEnvSearchTool = () => {
  return import.meta.env.VITE_API_SEARCH_TOOL || import.meta.env.VITE_API_SEARCH_TOOL_LOCAL
}
export const getEnvSelectionProcess = () => {
  return import.meta.env.VITE_API_SELECTION_PROCESS || import.meta.env.VITE_API_SELECTION_PROCESS_LOCAL
}
