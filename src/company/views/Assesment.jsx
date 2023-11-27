import { Alert, Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { projectsApi } from "../../api";
import { useAuthStore,  useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  score: "",
}

const formValidations = {
  score: [(value) => value >= 0, 'name must be at least 5 characters long'],
}

const sendScore = async (score, assesmentId) => {
  try {
    const { data } = await projectsApi.post(`/assement/take-exam/${assesmentId}}/candidate`, { score })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const Assesment = () => {

  const { id } = useAuthStore();

  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { score, onInputChange, isFormValid, scoreValid } = useForm(formData, formValidations);


  const handledClick = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    sendScore(formData);
    setMessage('Send score');
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
          Assesment
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            label="score"
            type="number"
            placeholder='score'
            fullWidth
            name="score"
            value={score}
            onChange={onInputChange}
            error={!!scoreValid && formSubmitted}
            helperText={formSubmitted ? scoreValid : ''}
          />

          <Button fullWidth onClick={handledClick} variant="contained" sx={{ mt: 3 }}>Evaluate</Button>
          <Grid item sx={{ width: '380px' }}
            display={message ? '' : 'none'}
          >
            <Alert severity="success">{message}</Alert>
          </Grid>
        </Box>
      </Box>
    </Container >
  )
}
