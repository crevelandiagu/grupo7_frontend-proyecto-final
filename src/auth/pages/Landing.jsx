import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import candidateImg from '../../assets/candidate.svg';
import companiesImg from '../../assets/companies.svg';
import { getEnvCandidate, getEnvCompany, getEnvProjects } from '../../helpers/getEnvVaribles';
import { useAuthStore } from '../../hooks/useAuthStore';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Landing = () => {

  const { startSetProfile } = useAuthStore();

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Select your profile
          {console.log(getEnvCandidate(), getEnvCompany(), getEnvProjects())}
        </Typography>
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <Item>
                <img src={candidateImg} width="200" alt="" />
              </Item>
              <Button onClick={() => { startSetProfile('company') }} component={RouterLink} variant="outlined" to="/auth/signin">
                You are a company
              </Button>
            </Grid>
            <Grid item xs={6} >
              <Item>
                <img src={companiesImg} width="200" alt="" />
              </Item>
              <Button onClick={() => { startSetProfile('candidate') }} component={RouterLink} variant="outlined" to="/auth/signin">
                You are a candidate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}