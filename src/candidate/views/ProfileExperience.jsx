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
  position:'',
  company:'',
  startDate:'',
  location:'',
  skills:'',
}

const formValidations =  {
  position: [ (value) => value.length>= 3, 'name must be at least 8 characters long' ],
  company: [ (value) => value.length>= 3, 'last name must be at least 8 characters long' ],
  startDate: [ (value) => value.length>= 3, 'number must be at least 8 characters long' ],
  location: [ (value) => value.length>= 3, 'location must be at least 8 characters long' ],
  skills: [ (value) => value.length>= 3, 'phone must be at least 8 characters long' ],
}

const defaultTheme = createTheme();

export const ProfileExperience = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, position, company, startDate, endDate, location, skills,  onInputChange, isFormValid, 
    positionValid, companyValid, startDateValid, locationValid, skillsValid } = useForm( formData, formValidations );

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
            Experience 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="position"
                  type="text"
                  placeholder='position'
                  fullWidth
                  name="position"
                  value= {position}
                  onChange={onInputChange}
                  error = {!!positionValid && formSubmitted}
                  helperText = {positionValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="company"
                  type="text"
                  placeholder="company"
                  fullWidth
                  name="company"
                  value= {company}
                  onChange={onInputChange}
                  error = {!!companyValid && formSubmitted}
                  helperText = {companyValid}
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
                  error = "false"
                  helperText = ""
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
