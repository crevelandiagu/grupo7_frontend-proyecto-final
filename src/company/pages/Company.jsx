import { useSelector } from 'react-redux';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, DetailProfile, Project, SearchCandidateExperience, AssingProject, Interview } from '../views';

export const Company = () => {
  const {view} = useSelector( state => state.company );
  console.log('view', view)

  
 const children = view === 'dashboard' &&<CompanyDashboard />
  || view === 'search' && <SearchCandidateExperience />
  || view === 'project' && <Project />
  || view === 'assesment' && <CompanyDashboard />
  || view === 'interview' && <CreateInterview />
  || view === 'CreateEmployeeAccount' && <CreateEmployeeAccount />
  || view === 'profile' && <DetailProfile />
  || view === 'assingproject' && <AssingProject />
  || view === 'listInterview' && <Interview />


  console.log('view', view,  children);
  return (
    
    <CompanyLayout>
      { 
        children
      }
    </CompanyLayout>
  )
}