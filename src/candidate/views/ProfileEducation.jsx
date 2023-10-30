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
  school:'',
  degree:'',
  startDate:'',
  endDate:'',
  location:'',
  skills:'',
}

const formValidations =  {
  school: [ (value) => value.length>= 3, 'school must be at least 3 characters long' ],
  degree: [ (value) => value.length>= 3, 'degree must be at least 5 characters long' ],
  startDate: [ (value) => value.length>= 3, 'startDate must be valid date' ],
  endDate: [ (value) => value.length>= 3, 'endDate must be a valid date' ],
  location: [ (value) => value.length>= 5, 'location must be at least 5 characters long' ],
  skills: [ (value) => value.length>= 3, 'skills must be at least 3 characters long' ],
}

const defaultTheme = createTheme();

export const ProfileEducation = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, school, degree, startDate, endDate, location, skills,  onInputChange, isFormValid, 
    schoolValid, degreeValid, startDateValid, endDateValid, locationValid, skillsValid } = useForm( formData, formValidations );

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
            Education
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="school"
                  type="text"
                  placeholder='school'
                  fullWidth
                  name="school"
                  value= {school}
                  onChange={onInputChange}
                  error = {!!schoolValid && formSubmitted}
                  helperText = {schoolValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="degree"
                  type="text"
                  placeholder="degree"
                  fullWidth
                  name="degree"
                  value= {degree}
                  onChange={onInputChange}
                  error = {!!degreeValid && formSubmitted}
                  helperText = {degreeValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="startDate"
                  type="text"
                  placeholder="start date"
                  fullWidth
                  name="startDate"
                  value= {startDate}
                  onChange={onInputChange}
                  error = {!!startDateValid && formSubmitted}
                  helperText = {startDateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="endDate"
                  type="text"
                  placeholder="end date"
                  fullWidth
                  name="endDate"
                  value= {endDate}
                  onChange={onInputChange}
                  error = {!!endDateValid && formSubmitted}
                  helperText = {endDateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="location"
                  type="text"
                  placeholder="location"
                  fullWidth
                  name="location"
                  value= {location}
                  onChange={onInputChange}
                  error = {!!locationValid && formSubmitted}
                  helperText = {locationValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="skills"
                  type="text"
                  placeholder="skills"
                  fullWidth
                  name="skills"
                  value= {skills}
                  onChange={onInputChange}
                  error = {!!skillsValid && formSubmitted}
                  helperText = {skillsValid}
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
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
