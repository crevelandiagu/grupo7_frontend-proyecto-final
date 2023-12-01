import { useState } from "react";
import { Alert, Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useFetch, useForm } from "../../hooks";
import performanceApi from "../../api/performanceApi";
import { getEnvPerformance } from "../../helpers/getEnvVaribles";
import { useTranslation } from "react-i18next";

const formData = {
  score: 0,
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

export const Performance = ({ idPerformance }) => {

  const [message, setMessage] = useState('');
  const { t } = useTranslation();


  const formValidations = {
    score: [(value) => value >= 0, 'name must be at least 5 characters long'],
  }
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { score, onInputChange, isFormValid, scoreValid } = useForm(formData, formValidations);

  const handledClick = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    sendScore(score, idPerformance);
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
          {t('performance.title')}
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            label={t('performance.scoreTextFieldLabel')}
            type="number"
            placeholder={t('performance.scoreTextFieldPlaceholder')}
            fullWidth
            name="score"
            value={score}
            onChange={onInputChange}
            error={!!scoreValid && formSubmitted}
            helperText={formSubmitted ? scoreValid : ''}
          />

          <Button fullWidth onClick={handledClick} variant="contained" sx={{ mt: 3 }}>{t('performance.evaluateBtn')}</Button>
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
