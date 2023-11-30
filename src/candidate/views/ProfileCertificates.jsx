import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';
import { candidateApi } from '../../api';

const formData = {
  certification: '',
  issuingOrganization: '',
  startDate: '',
  endDate: '',
}

const formValidations = {
  certification: [(value) => value.length >= 3, 'certification must be at least 3 characters long'],
  issuingOrganization: [(value) => value.length >= 3, 'issuing organization must be at least 3 characters long'],
  startDate: [(value) => value.length >= 0, 'star date must be a date valid'],
  endDate: [(value) => value.length >= 0, 'end date must be a date valid'],
}

const saveCerticatesInfo = async (candidateId, { issuingOrganization: company, certification: name_certificate, endDate: date_expiry, startDate: expedition_date }) => {
  try {
    console.log(expedition_date)
    const { data } = await candidateApi.post(`/profile/certificates/${candidateId}`, { company, name_certificate, date_expiry, expedition_date })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const ProfileCertificates = () => {

  const { id } = useAuthStore();
  const { errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, certification, issuingOrganization, startDate, endDate, onInputChange, isFormValid,
    certificationValid, issuingOrganizationValid, startDateValid, endDateValid } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    console.log('formState', formState);
    saveCerticatesInfo(id, { ...formState });
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
                value={certification}
                onChange={onInputChange}
                error={!!certificationValid && formSubmitted}
                helperText={formSubmitted ? certificationValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="issuingOrganization"
                type="text"
                placeholder='issuing organization'
                fullWidth
                name="issuingOrganization"
                value={issuingOrganization}
                onChange={onInputChange}
                error={!!issuingOrganizationValid && formSubmitted}
                helperText={formSubmitted ? issuingOrganizationValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="startDate"
                type="date"
                fullWidth
                name="startDate"
                value={startDate || '2023-01-01'}
                onChange={onInputChange}
                error={!!startDateValid && formSubmitted}
                helperText={formSubmitted ? startDateValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="endDate"
                type="date"
                fullWidth
                name="endDate"
                value={endDate || '2023-01-01'}
                onChange={onInputChange}
                error={!!endDateValid && formSubmitted}
                helperText={formSubmitted ? endDateValid : ''}
              />
            </Grid>
          </Grid>
          <Grid item sx={{ mt: 2 }}
            xs={12}
            display={errorMessage ? '' : 'none'}
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
