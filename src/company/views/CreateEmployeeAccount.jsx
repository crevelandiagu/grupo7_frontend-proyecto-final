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
  name: "",
  position: "",
}

const formValidations =  {
// project: [ (value) => value.length>= 3, 'project must be at least 3 characters long' ],
name: [(value) => value.length >= 3, 'name must be at least 5 characters long'],
position: [(value) => value.length >= 5, 'position must be at least 5 characters long']
}

const defaultTheme = createTheme();

export const CreateEmployeeAccount = () => {

  const { startSignIn, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, project, name, position, onInputChange, isFormValid, 
    nameValid, positionValid, } = useForm( formData, formValidations );

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
                  label="project"
                  type="text"
                  placeholder='project'
                  fullWidth
                  name="project"
                  value= {project}
                  onChange={onInputChange}
                  // error = {!!nameValid && formSubmitted}
                  // helperText = {nameValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="name"
                  type="text"
                  placeholder='employee name'
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
                  label="position"
                  type="text"
                  placeholder="position"
                  fullWidth
                  name="position"
                  value= {position}
                  onChange={onInputChange}
                  error = {!!positionValid && formSubmitted}
                  helperText = {positionValid}
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
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
