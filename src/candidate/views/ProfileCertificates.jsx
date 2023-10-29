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
  certification:'',
  issuingOrganization: '',
  startDate: '',
  endDate: '',
}

const formValidations =  {
  certification: [ (value) => value.length>= 3, 'certification must be at least 3 characters long' ],
  issuingOrganization: [ (value) => value.length>= 3, 'issuing organization must be at least 3 characters long' ],
  startDate: [ (value) => value.length>= 3, 'startDate must be valid date' ],
  endDate: [ (value) => value.length>= 3, 'endDate must be a valid date' ],
}

const defaultTheme = createTheme();

export const ProfileCertificates = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, certification, issuingOrganization, startDate, endDate, onInputChange, isFormValid, 
    certificationValid, issuingOrganizationValid, startDateValid, endDateValid } = useForm( formData, formValidations );

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
            Certificates
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="certification"
                  type="text"
                  placeholder='certification'
                  fullWidth
                  name="certification"
                  value= {certification}
                  onChange={onInputChange}
                  error = {!!certificationValid && formSubmitted}
                  helperText = {certificationValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="issuingOrganization"
                  type="text"
                  placeholder='issuing organization'
                  fullWidth
                  name="issuingOrganization"
                  value= {issuingOrganization}
                  onChange={onInputChange}
                  error = {!!issuingOrganizationValid && formSubmitted}
                  helperText = {issuingOrganizationValid}
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
