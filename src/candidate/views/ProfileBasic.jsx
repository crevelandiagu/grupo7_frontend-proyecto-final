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
  name:'',
  numberId: '',
  lastName: '',
  phone: '',
  location: '',
}

const formValidations =  {
  name: [ (value) => value.length>= 3, 'name must be at least 8 characters long' ],
  lastName: [ (value) => value.length>= 3, 'last name must be at least 8 characters long' ],
  numberId: [ (value) => value.length>= 3, 'number must be at least 8 characters long' ],
  location: [ (value) => value.length>= 3, 'location must be at least 8 characters long' ],
  phone: [ (value) => value.length>= 3, 'phone must be at least 8 characters long' ],
}

const defaultTheme = createTheme();

export const ProfileBasic = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, name, lastName, numberId, location, phone,  onInputChange, isFormValid, 
    nameValid, lastNameValid, numberIdValid, locationValid, phoneValid } = useForm( formData, formValidations );

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
            Basic Information
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="name"
                  type="text"
                  placeholder='name'
                  fullWidth
                  name="name"
                  value= {name}
                  onChange={onInputChange}
                  error = {!!nameValid && formSubmitted}
                  helperText = {nameValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="lastName"
                  type="text"
                  placeholder="last name"
                  fullWidth
                  name="lastName"
                  value= {lastName}
                  onChange={onInputChange}
                  error = {!!lastNameValid && formSubmitted}
                  helperText = {lastNameValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="numberId"
                  type="number"
                  placeholder="number id"
                  fullWidth
                  name="numberId"
                  value= {numberId}
                  onChange={onInputChange}
                  error = {!!numberIdValid && formSubmitted}
                  helperText = {numberIdValid}
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
                  label="phone"
                  type="number"
                  placeholder="phone"
                  fullWidth
                  name="phone"
                  value= {phone}
                  onChange={onInputChange}
                  error = {!!phoneValid && formSubmitted}
                  helperText = {phoneValid}
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
