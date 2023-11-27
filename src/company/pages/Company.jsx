import { useSelector } from 'react-redux';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, DetailProfile, Project, SearchCandidate, AssingProject, Interview, AssesmentList, ContractList } from '../views';
import { AssignEvaluator } from '../views/AssignEvaluator';
import { Performance } from '../views/Performance';
import { Assesment } from '../views/Assesment';
import { PerformanceList } from '../../candidate/views/performanceList';

export const Company = () => {
  const { view, idCandidate } = useSelector(state => state.company);

  const children = view === 'dashboard' && <CompanyDashboard />
    || view === 'search' && <SearchCandidate />
    || view === 'profile' && <DetailProfile idCandidate={idCandidate} />
    || view === 'CreateEmployeeAccount' && <CreateEmployeeAccount />
    || view === 'project' && <Project />
    || view === 'assignproject' && <AssingProject />
    || view === 'assesmentList' && <AssesmentList />
    || view === 'assesment' && <Assesment />
    || view === 'interview' && <CreateInterview />
    || view === 'listInterview' && <Interview />
    || view === 'assignEvaluator' && <AssignEvaluator />
    || view === 'contractList' && <ContractList />
    || view === 'performanceList' && <PerformanceList />
    || view === 'performance' && <Performance />

  return (
    <CompanyLayout>
      {
        children
      }
    </CompanyLayout>
  )
}