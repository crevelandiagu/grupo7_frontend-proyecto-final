import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useCandidateStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';
import { candidateApi } from '../../api';

const formData = {
  name:'',
  lastName: '',
  numberId: '',
  location: '',
  phone: '',
}

const formValidations =  {
  name: [ (value) => value.length>= 3, 'name must be at least 8 characters long' ],
  lastName: [ (value) => value.length>= 3, 'last name must be at least 8 characters long' ],
  numberId: [ (value) => value.length>= 3, 'number must be at least 8 characters long' ],
  location: [ (value) => value.length>= 3, 'location must be at least 8 characters long' ],
  phone: [ (value) => value.length>= 3, 'phone must be at least 8 characters long' ],
}

const saveBasicInfo = async (candidateId, { birthdate='01/01/1999', lastName:lastname, location:nacionality, name, numberId, phone: phone_number }) => {
  try {
    const { data } = await candidateApi.post(`/profile/basicinfo/${candidateId}`, { birthdate, lastname, nacionality, name, numberId, phone_number })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const ProfileBasic = () => {

  const { errorMessage } = useCandidateStore();
  const { id } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, name, lastName, numberId, location, phone,  onInputChange, isFormValid, 
    nameValid, lastNameValid, numberIdValid, locationValid, phoneValid } = useForm( formData, formValidations );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    console.log('form:', {...formState})
    saveBasicInfo(id, {...formState});
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
                  helperText = {formSubmitted? nameValid: ''}
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
                  helperText = {formSubmitted? lastNameValid: ''}
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
                  helperText = {formSubmitted? numberIdValid: ''}
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
                  helperText = {formSubmitted? locationValid: ''}
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
                  helperText = {formSubmitted? phoneValid: ''}
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
  );
}
