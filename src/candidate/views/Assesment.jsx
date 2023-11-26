import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthStore, useFetch } from '../../hooks';
import { Alert, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';



const sendAssesment = async (answer) => {
  try {
    const { data } = await selectionProcessApi.post(`/assement/take-exam/1/candidate`, { answer })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}



const questions = [
  {
    "choices": [
      "JavaScript Object Notation",
      "JavaScript Object Normalization",
      "JavaScript Object-Oriented Notation"
    ],
    "id": 0,
    "question": "JSON stands for "
  },
  {
    "choices": [
      "xml format",
      "text format",
      "JavaScript"
    ],
    "id": 1,
    "question": " JSON is a _____ for storing and transporting data."
  },
  {
    "choices": [
      "Ajax",
      "JavaScript",
      "Php"
    ],
    "id": 2,
    "question": "The JSON syntax is a subset of the _____ syntax."
  },
  {
    "choices": [
      "Commas",
      "Colons",
      "Hyper"
    ],
    "id": 3,
    "question": "In the JSON syntax, data is separated by _____."
  },
  {
    "choices": [
      "True",
      "False",
      "None"
    ],
    "id": 4,
    "question": " JSON names (keys) require double quotes?"
  }
]
const answerList = [];
const selectionProcessApi = getEnvSelectionProcess()

export const Assesment = () => {
  // const [ answerList, setAnswerList ] = useState([]);
  const { id, errorMessage } = useAuthStore();
  const { data, loading } = useFetch(`${selectionProcessApi}/assement/take-exam/1/candidate`)

  function handleClick(event) {
    const selectedAnswer = event.target.value;
    const selectedAnswerId = event.target.id;
    const questionId = event.target.name.split('-')[1];
    const answerObject = { id: parseInt(questionId), answer: selectedAnswerId };
    answerList[questionId] = answerObject;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (questions.length !== answerList.length) return
    sendAssesment(answerList);
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
                  onClick={handleClick}
                >
                  {question.choices.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio id={optionIndex} size="small" onClick={handleClick} />}
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
