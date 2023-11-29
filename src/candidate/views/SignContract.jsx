import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useFetch } from '../../hooks';
import { Alert, TextField } from '@mui/material';
import contractApi  from '../../api/contractApi';
import { getEnvContract } from '../../helpers/getEnvVaribles';


const signContract = async (candidateId) => {
  try {
    const { data } = await contractApi.post(`/candidate/${candidateId}`)
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const contract = getEnvContract();

export const SignContract = () => {

  const { id, errorMessage } = useAuthStore();
  const { data } = useFetch(`${contract}/candidate/${id}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    signContract(id);
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
          Sign Contract
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            id="contract"
            disabled
            multiline
            fullWidth
            rows={10}
            readOnly
            value={ data?.message || data?.contract }
          />

          <Grid item sx={{ mt: 2 }}
            xs={12}
            display={errorMessage ? '' : 'none'}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Button
            type="submit"
            disabled = {data?.message === "We don't have contracts yet" ? true : false}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign contract
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
