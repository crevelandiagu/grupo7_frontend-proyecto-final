import { useSelector } from 'react-redux';
import { CandidateLayout } from '../layout/CandidateLayout';
import { CandidateDashboard, Interview, PerformanceList, ProfileBasic, ProfileCertificates, ProfileEducation, ProfileExperience, SignContract } from '../views';
import { AssesmentList } from '../views/AssesmentList';

export const Candidate = () => {

  const {view} = useSelector( state => state.candidate );

  const children = view === 'dashboard' &&<CandidateDashboard />
  || view === 'basic' && <ProfileBasic />
  || view === 'certificates' && <ProfileCertificates />
  || view === 'education' && <ProfileEducation />
  || view === 'experience' && <ProfileExperience />
  || view === 'interview' && <Interview />
  || view === 'signcontract' && <SignContract />
  || view === 'assesmentList' && <AssesmentList />
  || view === 'performanceList' && <PerformanceList />

  return (
    <CandidateLayout>
      { 
        children
      }
    </CandidateLayout>
  )
}