import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore, useForm } from '../../hooks';
import { Alert } from '@mui/material';

// import { checkingAuthentication } from '../../store/auth/thunks';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link component={ RouterLink } color="inherit" to ="landing">
        ABC Jobs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const formData = {
  email:"",
  password: ""
}

const formValidations =  {
email: [ (value) => value.includes('@'), 'Enter a valid email' ],
password: [(value) => value.length >= 8, 'password must be at least 8 characters long']
}

const defaultTheme = createTheme();

export const SignIn = () => {

  const { startSignIn, errorMessage, status } = useAuthStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);
  // console.log('isCheckingAuthentication', isCheckingAuthentication, status === 'checking' )
  
  const {
    formState, email, password, onInputChange, isFormValid, 
    emailValid, passwordValid, } = useForm( formData, formValidations );
  // const dispatch =  useDispatch(); cuando se usan thunks

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    // dispatch(checkingAuthentication()); cunado se usan thunks

    if ( !isFormValid ) return;
    startSignIn(formState);//({email, password});
    
    /*Navigate('/', {
      replace: true
    })
    */

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
            Welcome Back!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  type="email"
                  placeholder='yourmail@domain.com'
                  fullWidth
                  name="email"
                  value= {email}
                  onChange={onInputChange}
                  error = {!!emailValid && formSubmitted}
                  helperText = {emailValid}
                  // autoComplete="email"
                  // id="email"
                  // required
                />
              </Grid>
              <Grid item xs justifySelf="flex-end">
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="your password"
                  fullWidth
                  name="password"
                  value= {password}
                  onChange={onInputChange}
                  error = {!!passwordValid && formSubmitted}
                  helperText = {passwordValid}
                  // id="password"
                  // required

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
              disabled = { isCheckingAuthentication }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                {"Don't have an account?"}
                <Link component={ RouterLink } variant="body2" to="/auth/signup">
                  {" Sign Up"}
                </Link>
                {/* <Link href="/auth/signup" >
                  con error
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
