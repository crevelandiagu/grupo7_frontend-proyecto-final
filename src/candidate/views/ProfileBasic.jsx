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
import { useTranslation } from 'react-i18next';

const formData = {
  name:'',
  lastName: '',
  numberId: '',
  location: '',
  phone: '',
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
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValidations =  {
    name: [ (value) => value.length>= 3, t('message.inputName') ],
    lastName: [ (value) => value.length>= 3, t('message.inputlastname') ],
    numberId: [ (value) => value.length>= 8, t('message.inputId') ],
    location: [ (value) => value.length>= 3, t('message.inputLocation') ],
    phone: [ (value) => value.length >= 6, t('message.inputPhone') ],
  }

  const {
    formState, name, lastName, numberId, location, phone,  onInputChange, isFormValid, 
    nameValid, lastNameValid, numberIdValid, locationValid, phoneValid } = useForm( formData, formValidations );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
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
            {t('basic.title')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={t('basic.nameTextFieldLabel')}
                  type="text"
                  placeholder={t('basic.nameTextFieldPlaceholder')}
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
                  label={t('basic.lastnameTextFieldLabel')}
                  type="text"
                  placeholder={t('basic.lastnameTextFieldPlaceholder')}
                  fullWidth
                  name= "lastName"
                  value= {lastName}
                  onChange={onInputChange}
                  error = {!!lastNameValid && formSubmitted}
                  helperText = {formSubmitted? lastNameValid: ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={t('basic.idTextFieldLabel')}
                  type="number"
                  placeholder={t('basic.idTextFieldPlaceholder')}
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
                  label={t('basic.locationTextFieldLabel')}
                  type="text"
                  placeholder={t('basic.locationTextFieldPlaceholder')}
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
                  label={t('basic.phoneTextFieldPlaceholder')}
                  type="number"
                  placeholder={t('basic.phoneTextFieldLabel')}
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
              {t('basic.saveBtn')}
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
