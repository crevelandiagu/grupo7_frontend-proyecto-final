import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore } from '../../hooks';
import { Alert, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
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

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Madrid", "Rome"]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"]
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"]
  }
];

const defaultTheme = createTheme();

export const Assesment = () => {

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
            Logic Test
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {
              questions.map((question, index) => (
                <FormControl key={index} component="fieldset" sx={{ mb: 3 }}>
                  <FormLabel component="legend">{question.question}</FormLabel>
                  <RadioGroup
                    aria-label={`question-${index}`}
                    name={`question-${index}`}
                    defaultValue=""
                    
                  >
                    {question.options.map((option, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        value={option}
                        control={<Radio size="small"/>}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              ))
            }
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
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
