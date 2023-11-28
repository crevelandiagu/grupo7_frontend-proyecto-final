import 'whatwg-fetch';

require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/helpers/getEnvVaribles.js', () => {
  return {
    getEnvCandidate: () => {
      return 'http://localhost:3000/candidate';
    },
    getEnvCompany: () => {
      return 'http://localhost:3001/company';
    },
    getEnvCompanyEmployees: () => {
      return 'http://localhost:3002/api/company/employees';
    },
    getEnvProjects: () => {
      return 'http://localhost:3007/projects';
    },
    getEnvSearchTool: () => {
      return 'http://localhost:3008/search-tool';
    },
    getEnvSelectionProcess: () => {
      return 'http://localhost:3010';
    },
    getEnvPerformance: () => {
      return 'http://localhost:3006/performance';
    },
    getEnvContract: () => {
      return 'http://localhost:3003/contracts';
    },
  };
});
