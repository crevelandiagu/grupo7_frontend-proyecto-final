import { CandidateLayout } from '../layout/CandidateLayout';
import { CandidateDashboard, Interview, ProfileBasic, ProfileCertificates, ProfileEducation, ProfileExperience  } from '../views';

export const Candidate = () => {

  // const { view } = useCandidateStore();

  return (
    <CandidateLayout>
      <CandidateDashboard />
      <ProfileBasic />
      <ProfileCertificates />
      <ProfileEducation />
      <ProfileExperience />
      <Interview />
    </CandidateLayout>
  )
}