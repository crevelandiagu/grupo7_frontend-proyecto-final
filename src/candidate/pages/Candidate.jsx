import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { CandidateLayout } from '../layout/CandidateLayout';
import { CandidateDashboard, ProfileBasic, ProfileCertificates, ProfileEducation, ProfileExperience  } from '../views';
import { Project } from '../../company/views/Project';
import { useCandidateStore } from '../../hooks/useCandidateStore';



export const Candidate = () => {

  // const { view } = useCandidateStore();

  return (
    <CandidateLayout>
      <CandidateDashboard />
      <ProfileBasic />
      <ProfileCertificates />
      <ProfileEducation />
      <ProfileExperience />
      <CandidateDashboard />
      <Project />

    {/* </CandidateLayout>
      {
        view === 'dashboard' ? <CandidateDashboard /> :
        view === 'basic' ? <ProfileBasic /> :
        view === 'expirience' ? <ProfileCertificates /> :
        view === 'education' ? <ProfileEducation /> :
        view === 'certificates' ? <ProfileExperience /> :
        <CandidateDashboard />
      } */}
       
      {/* <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton> */}

    </CandidateLayout>
  )
}