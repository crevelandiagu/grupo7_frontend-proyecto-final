import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useFetch } from '../../hooks';
import { Alert, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { candidateApi, selectionProcess } from '../../api';


const sendAssesment = async (id = 1,) => {
  try {
    const { data } = await candidateApi.get(`/assement/take-exam/${id}/candidate`)
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


export const Assesment = () => {

  const { id, errorMessage } = useAuthStore();
  const { data, loading } = useFetch(`${selectionProcess}/assement/take-exam/1/candidate`)

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAssesment(id);
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
                      control={<Radio size="small" />}
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
  );
}
