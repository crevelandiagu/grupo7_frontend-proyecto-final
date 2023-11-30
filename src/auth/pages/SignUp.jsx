import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useTranslation } from 'react-i18next';
import { useAuthStore, useForm } from '../../hooks';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link component={RouterLink} color="inherit" to="landing">
        ABC Jobs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const formData = {
  name: "",
  email: "",
  password: ""
}

const formValidations = {
  name: [(value) => value.length >= 3, 'name must be at least 3 characters long'],
  email: [(value) => value.includes('@'), 'enter a valid email'],
  password: [(value) => value.length >= 6, 'password must be at least 8 characters long']
}

export const SignUp = () => {

  const { startSignUp, errorMessage, status, profile } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useTranslation();

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, name, email, password, onInputChange, isFormValid,
    nameValid, emailValid, passwordValid, } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);


    if (!isFormValid) return;
    startSignUp(formState);
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
          {t('signup.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            { profile === 'candidate'? '' :
              <Grid item xs={12}>
                <TextField
                  label={t('signup.nameTextFieldLabel')}
                  type="text"
                  placeholder={t('signup.nameTextFieldPlaceholder')}
                  fullWidth
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  error={!!nameValid && formSubmitted}
                  helperText={formSubmitted ? nameValid : ''}
                />
              </Grid>
            }
            <Grid item xs={12}>
              <TextField
                label={t('signup.emailTextFieldLabel')}
                type="email"
                placeholder={t('signup.emailTextFieldPlaceholder')}
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('signup.passwordTextFieldLabel')}
                type="password"
                placeholder={t('signup.passwordTextFieldPlaceholder')}
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={formSubmitted ? passwordValid : ''}
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
            disabled={isCheckingAuthentication}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('signup.signupBtn')}
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              {t('signup.termsAndConditions')}
            </Grid>
            <Grid item>
              {t('signup.alreadyHaveAnAccount')}
              <Link component={RouterLink} variant="body2" to="/auth/signin">
                {" Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
