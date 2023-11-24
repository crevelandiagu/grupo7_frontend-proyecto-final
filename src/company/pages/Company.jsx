import { useSelector } from 'react-redux';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, DetailProfile, Project, SearchCandidate, AssingProject, Interview } from '../views';
import { AssignEvaluator } from '../views/AssignEvaluator';
import { Performance } from '../views/Performance';

export const Company = () => {
  const { view, idCandidate } = useSelector(state => state.company);
  console.log('view', view)


  const children = view === 'dashboard' && <CompanyDashboard />
    || view === 'search' && <SearchCandidate />
    || view === 'project' && <Project />
    || view === 'assesment' && <CompanyDashboard />
    || view === 'interview' && <CreateInterview />
    || view === 'CreateEmployeeAccount' && <CreateEmployeeAccount />
    || view === 'profile' && <DetailProfile idCandidate={idCandidate} />
    || view === 'assingproject' && <AssingProject />
    || view === 'listInterview' && <Interview />
    || view === 'assignEvaluator' && <AssignEvaluator />
    || view === 'performance' && <Performance />


  console.log('view', view, children);
  return (
    <CompanyLayout>
      {
        children
      }
    </CompanyLayout>
  )
}