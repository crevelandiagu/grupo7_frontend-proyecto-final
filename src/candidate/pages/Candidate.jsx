import { useSelector } from 'react-redux';
import { CandidateLayout } from '../layout/CandidateLayout';
import { CandidateDashboard, Interview, ProfileBasic, ProfileCertificates, ProfileEducation, ProfileExperience  } from '../views';

export const Candidate = () => {

  const {view} = useSelector( state => state.candidate );

  const children = view === 'dashboard' &&<CandidateDashboard />
  || view === 'basic' && <ProfileBasic />
  || view === 'certificates' && <ProfileCertificates />
  || view === 'education' && <ProfileEducation />
  || view === 'experience' && <ProfileExperience />
  || view === 'interview' && <Interview />

  return (
    <CandidateLayout>
      { 
        children
      }
    </CandidateLayout>
  )
}