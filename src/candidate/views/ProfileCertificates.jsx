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
import { useTranslation } from 'react-i18next';

const formData = {
  certification: '',
  issuingOrganization: '',
  startDate: '',
  endDate: '',
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
  const { t } = useTranslation();
  const { errorMessage } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValidations = {
    certification: [(value) => value.length >= 3, t('message.inputCertification') ],
    issuingOrganization: [(value) => value.length >= 3, t('message.inputIssuing') ],
    startDate: [(value) => value.length >= 0, t('message.inputStartDate') ],
    endDate: [(value) => value.length >= 0, t('message.inputEndDate')],
  }

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
          {t('certificates.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={t('certificates.certificationTextFieldLabel')}
                type="text"
                placeholder={t('certificates.certificationTextFieldPlaceholder')}
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
                label={t('certificates.issuingTextFieldLabel')}
                type="text"
                placeholder={t('certificates.issuingTextFieldPlaceholder')}
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
                label={t('certificates.startDateTextFieldLabel')}
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
                label={t('certificates.endDateTextFieldLabel')}
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
            {t('certificates.saveBtn')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
