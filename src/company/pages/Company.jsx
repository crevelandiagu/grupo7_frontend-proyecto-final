import { useSelector } from 'react-redux';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, PerformanceList, Performance, CreateInterview, DetailProfile, Project, SearchCandidate, AssingProject, Interview, AssesmentList, Assesment, ContractList } from '../views';

export const Company = () => {
  const { view, idCandidate, idProcess } = useSelector(state => state.company);

  const children = view === 'dashboard' && <CompanyDashboard />
    || view === 'search' && <SearchCandidate />
    || view === 'profile' && <DetailProfile idCandidate={idCandidate} />
    || view === 'CreateEmployeeAccount' && <CreateEmployeeAccount />
    || view === 'project' && <Project />
    || view === 'assignproject' && <AssingProject />
    || view === 'assesmentList' && <AssesmentList />
    || view === 'assesment' && <Assesment idCandidate={idCandidate} idAssesment={idProcess} />
    || view === 'interview' && <CreateInterview />
    || view === 'listInterview' && <Interview />
    || view === 'contractList' && <ContractList />
    || view === 'performanceList' && <PerformanceList />
    || view === 'performance' && <Performance idCandidate={idCandidate} idPerformance={idProcess} />

  return (
    <CompanyLayout>
      {
        children
      }
    </CompanyLayout>
  )
}