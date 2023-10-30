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
  name:"",
  description: ""
}

const formValidations =  {
name: [ (value) => value.length>= 3, 'name must be at least 8 characters long' ],
description: [(value) => value.length >= 5, 'description must be at least 5 characters long']
}

const defaultTheme = createTheme();

export const Project = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, name, description, onInputChange, isFormValid, 
    nameValid, descriptionValid, } = useForm( formData, formValidations );

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
            Create Project
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="name of project"
                  type="text"
                  placeholder='name of project'
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
                  label="description of project"
                  type="description"
                  placeholder="description of project"
                  fullWidth
                  name="descrition"
                  value= {description}
                  onChange={onInputChange}
                  error = {!!descriptionValid && formSubmitted}
                  helperText = {descriptionValid}
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
              Create Project
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
