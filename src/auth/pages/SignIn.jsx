import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';


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
  email: "usuario-a@gmail.com",
  password: "$Qq12345"
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Enter a valid email'],
  password: [(value) => value.length >= 8, 'password must be at least 8 characters long']
}


export const SignIn = () => {

  const { startSignIn, errorMessage, status } = useAuthStore();
  const { t } = useTranslation();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, email, password, onInputChange, isFormValid,
    emailValid, passwordValid, } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    startSignIn(formState);
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
          {t('signin.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={t('signin.emailTextFieldLabel')}
                type="email"
                placeholder={t('signin.emailTextFieldPlaceholder')}
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid : ''}
              />
            </Grid>
            <Grid item xs justifySelf="flex-end">
              <Link href="#" variant="body2">
                {t('signin.forgotPassword')}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('signin.passwordTextFieldLabel')}
                type="password"
                placeholder={t('signin.passwordTextFieldPlaceholder')}
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
            {t('signin.signupBtn')}
          </Button>
          <Grid container>
            <Grid item>
              {t('signin.dontHaveAnAccount')}
              <Link component={RouterLink} variant="body2" to="/auth/signup">
                {t('signin.signupLink')}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
