import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore } from '../../hooks';
import { Alert, TextField } from '@mui/material';
import { candidateApi } from '../../api';


const signContract = async (candidateId, { birthdate = '01/01/1999', lastName: lastname, location: nacionality, name, numberId, phone: phone_number }) => {
  try {
    const { data } = await candidateApi.post(`/profile/basicinfo/${candidateId}`, { birthdate, lastname, nacionality, name, numberId, phone_number })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const defaultTheme = createTheme();

export const SignContract = () => {

  const { id, errorMessage } = useAuthStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    signContract(id);
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
            Sign Contract
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              id="outlined-multiline-static"
              label="Contract"
              multiline
              fullWidth
              rows={10}
              readOnly
              defaultValue={`CONTRATO DE TRABAJO ENTRE (Company ABC) Y (${id}) Entre las partes, por un lado (nombre completo del empleador), domiciliado en la ciudad de (lugar actual de domicilio), representante legal de (nombre de la empresa), con NIT (número de NIT) (en caso que el empleador sea una persona jurídica), quien en adelante y para los efectos del presente contrato se denomina como EL EMPLEADOR, y por el otro, (nombre completo del trabajador), domiciliado en la ciudad de (lugar actual de domicilio), quien en adelante y para los efectos del presente contrato se denomina como EL TRABAJADOR, ambos mayores de edad (las partes deben ser mayores de 18 años; especialmente el trabajador, salvo que se trate de un menor de edad con permiso de trabajo expedido por el Inspector del Trabajo), identificados como aparece al pie de las firmas, hemos acordado suscribir este contrato de trabajo`
            }
            />

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
              Sign contract
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
