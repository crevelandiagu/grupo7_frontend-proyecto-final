import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';
import { projectsApi } from '../../api';

const formData = {
  name: "",
  description: ""
}

const formValidations = {
  name: [(value) => value.length >= 3, 'name must be at least 8 characters long'],
  description: [(value) => value.length >= 5, 'description must be at least 5 characters long']
}

const saveProject = async (companyId, projectName, description) => {
  try {
    const { data } = await projectsApi.post('/', { companyId, projectName, description })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const Project = () => {

  const [message, setMessage] = useState('');

  const { id, errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, name, description, onInputChange, isFormValid,
    nameValid, descriptionValid, } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    saveProject(id, name, description);

  };

  return (
    <Container component="main" maxWidth="xs">
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
        {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
        <Box component="div" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="name of project"
                type="text"
                placeholder='name of project'
                fullWidth
                name="name"
                value={name}
                onChange={onInputChange}
                error={!!nameValid && formSubmitted}
                helperText={formSubmitted? nameValid: ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="description"
                type="text"
                placeholder="description of project"
                fullWidth
                name="description"
                value={description}
                onChange={onInputChange}
                error={!!descriptionValid && formSubmitted}
                helperText={formSubmitted? descriptionValid: ''}
              />
            </Grid>

          </Grid>
          <Grid item sx={{ mt: 2 }}
            xs={12}
            display={message ? '' : 'none'}
          >
            {/* <Alert severity="error">{errorMessage}</Alert> */}
            <Alert severity="success">{message}</Alert>
          </Grid>
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Project
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
