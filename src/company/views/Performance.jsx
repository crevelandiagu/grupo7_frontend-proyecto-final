import { useState } from "react";
import { Alert, Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useFetch,  useForm } from "../../hooks";
import performanceApi from "../../api/performanceApi";
import { getEnvPerformance } from "../../helpers/getEnvVaribles";

const formData = {
  score: "",
}

const formValidations = {
  score: [(value) => value >= 0, 'name must be at least 5 characters long'],
}

const sendScore = async (score, performanceId) => {
  console.log(score, performanceId)
  try {
    const { data } = await performanceApi.post('/make-evaluation', { score, performanceId })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const performance = getEnvPerformance();

export const Performance = ({idCandidate}) => {

  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { score, onInputChange, isFormValid, scoreValid } = useForm(formData, formValidations);
  const {data, loading } = useFetch(`${performance}/candidate/${idCandidate}/evaluation`)
  



  const handledClick = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    console.log('data', data[0].id, 'formData', formData, score)
    sendScore(score, data[0].id);
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
          Performance
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
