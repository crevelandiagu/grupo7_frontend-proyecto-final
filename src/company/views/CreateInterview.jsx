import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';

const formData = {
  project:"",
  candidate: "",
  // date: "",
  hour: "",
}

const formValidations =  {
  project: [ (value) => value.length>= 3, 'name must be at least 8 characters long' ],
  candidate: [(value) => value.length >= 5, 'description must be at least 5 characters long'],
  // date: [(value) => value.length >= 5, 'date not valid format'],
  hour: [(value) => value.length >= 5, 'hour not valid format'],
}

const defaultTheme = createTheme();

export const CreateInterview = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, project, candidate, hour, onInputChange, isFormValid, 
    projectValid, candidateValid, hourValid } = useForm( formData, formValidations );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    startSignIn(formState);
  };

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
            Create Interview
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="name of project"
                  type="text"
                  placeholder='name of project'
                  fullWidth
                  name="project"
                  value= {project}
                  onChange={onInputChange}
                  error = {!!projectValid && formSubmitted}
                  helperText = {projectValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="candidate"
                  type="text"
                  placeholder="candidate name"
                  fullWidth
                  name="candidate"
                  value= {candidate}
                  onChange={onInputChange}
                  error = {!!candidateValid && formSubmitted}
                  helperText = {candidateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="date"
                  type="date"
                  // placeholder="date"
                  fullWidth
                  name="date"
                  // value= {date}
                  onChange={onInputChange}
                  // error = {!!dateValid && formSubmitted}
                  // helperText = {dateValid}
                />
                <TextField
                  label="hour"
                  type="text"
                  placeholder="hour"
                  fullWidth
                  name="hour"
                  value= {hour}
                  onChange={onInputChange}
                  error = {!!hourValid && formSubmitted}
                  helperText = {hourValid}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}
              xs={12}
              display={ errorMessage ? '' : 'none' }
            >
                <Alert severity="error">{errorMessage}</Alert>
            </Grid> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Schedule
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
