import { useSelector } from 'react-redux';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, Project, Search, SearchCandidateExperience } from '../views';

export const Company = () => {
  const {view} = useSelector( state => state.company );
  console.log('view', view)

  
 const children = view === 'dashboard' &&<CompanyDashboard />
  || view === 'search' && <SearchCandidateExperience />
  || view === 'project' && <Project />
  || view === 'assesment' && <Search />
  || view === 'interview' && <CreateInterview />
  || view === 'create-employee-account' && <CreateEmployeeAccount />

  console.log('view', view,  children);
  return (
    
    <CompanyLayout>
      { 
        children
      }
    </CompanyLayout>
  )
}