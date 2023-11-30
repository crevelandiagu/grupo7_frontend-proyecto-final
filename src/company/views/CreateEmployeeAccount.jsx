import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';
import { companyEmployeesApi } from '../../api';
import { useTranslation } from 'react-i18next';

const formData = {
  name: "",
  position: "",
}

const saveAccount = async (companyId, name, position) => {
  try {
    const password = '$Qq123456';
    const email = `${name}@company_${companyId}.com`;
    const { data } = await companyEmployeesApi.post('/create-employee', { companyId, name, position, email, password })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const CreateEmployeeAccount = () => {

  const { id } = useAuthStore();
  const {t} = useTranslation();

  const [message] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValidations = {
    name: [(value) => value.length >= 3, t('message.inputName')],
    position: [(value) => value.length >= 3, t('message.inputPosition')]
  }

  const {
    name, position, onInputChange, isFormValid,
    nameValid, positionValid } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    saveAccount(id, name, position);
  }

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
          {t('employee.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={t('employee.nameTextFieldLabel')}
                type="text"
                placeholder={t('employee.nameTextFieldPlaceholder')}
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
                label={t('employee.positionTextFieldLabel')}
                type="text"
                placeholder={t('employee.positionTextFieldLabel')}
                fullWidth
                name="position"
                value={position}
                onChange={onInputChange}
                error={!!positionValid && formSubmitted}
                helperText={formSubmitted? positionValid: ''}
              />
            </Grid>
          </Grid>
          <Grid item sx={{ mt: 2 }}
            xs={12}
            display={message ? '' : 'none'}
          // display={ errorMessage ? '' : 'none' }
          >
            <Alert severity="success">{message}</Alert>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('employee.createBtn')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
