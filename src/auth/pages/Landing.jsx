

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import candidateImg from '../../assets/candidate.svg';
import companiesImg from '../../assets/companies.svg';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const defaultTheme = createTheme();

export const Landing = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            { console.log(import.meta.env) }
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
                  <img src={candidateImg} width="200" alt=""/>
                </Item>
                <Button variant="outlined" href="/auth/signin">
                  You are a company
                </Button>
              </Grid>
              <Grid item xs={6} >
              <Item>
                <img src={companiesImg} width="200" alt="" />
              </Item>
              <Button variant="outlined" href="/auth/signin">
                  You are a candidate
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}