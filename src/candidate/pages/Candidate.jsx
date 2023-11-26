import { useSelector } from 'react-redux';
import { CandidateLayout } from '../layout/CandidateLayout';
import { CandidateDashboard, Interview, ProfileBasic, ProfileCertificates, ProfileEducation, ProfileExperience, SignContract, Assesment  } from '../views';

export const Candidate = () => {

  const {view} = useSelector( state => state.candidate );

  const children = view === 'dashboard' &&<CandidateDashboard />
  || view === 'basic' && <ProfileBasic />
  || view === 'certificates' && <ProfileCertificates />
  || view === 'education' && <ProfileEducation />
  || view === 'experience' && <ProfileExperience />
  || view === 'interview' && <Interview />
  || view === 'signcontract' && <SignContract />
  || view === 'assesment' && <Assesment />

  return (
    <CandidateLayout>
      { 
        children
      }
    </CandidateLayout>
  )
}