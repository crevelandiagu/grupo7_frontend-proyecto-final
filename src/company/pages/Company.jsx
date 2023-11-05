import { useCompanyStore } from '../../hooks';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, Project, Search } from '../views';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';


import { CompanyDashboard, SearchCandidateExperience } from '../views';
import { CompanyLayout } from '../layout/CompanyLayout';

export const Company = () => {

 const { view } = useCompanyStore();

  return (
    
    <CompanyLayout>
      <CompanyDashboard/>
      <Project />
      <CreateEmployeeAccount />
      <CreateInterview />
      <Search />
    </CompanyLayout>
  )
}