import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Divider, List, ListItem, ListItemText } from '@mui/material';
import searchApi from '../../api/searchApi';


const formData = {
  experience:"",
  skill: ""
}

const formValidations =  {
  experience: [ (value) => value.length>= 3, 'certification must be at least 3 characters long' ],
  skill: [ (value) => value.length>= 3, 'issuing organization must be at least 3 characters long' ],
}

const defaultTheme = createTheme();

export const SearchCandidateExperience = () => {

   const handleSubmit = (event) => {
    event.preventDefault();

    if (!errorE && !errorS) {

      getCandidates()
    }
    
   }

   const datos = [
    {
    "name": "Daniel",
    "candidateId": "1",
    "lastName": "Huertas"
    },
    {
    "name": "Arturo",
    "candidateId": "3",
    "lastName": "Castro"
    },
    {
    "name": "Jose",
    "candidateId": "4",
    "lastName": "Bedoya"
    },

   ]
 
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [experience, setExperience] = useState("")
  const [skills, setSkills] = useState("")
  const [errorE, setErrorE] = useState(false);
  const [errorS, setErrorS] = useState(false);

  const handleInputChangeE = (event) => {
    const value = event.target.value;

    // Validate if the input contains only numbers
    if (/^[0-9]+$/.test(value)) {
      setExperience(value);
      setErrorE(false);
    } else {
      setExperience(value);
      setErrorE(true);
    }
  };

  const handleInputChangeS = (event) => {
    const value = event.target.value;

    if (/^([a-zA-Z]+(-?)[a-zA-Z]+){1,}$/.test(value)) {
      setSkills(value);
      setErrorS(false)
    } else {
      setSkills(value);
      setErrorS(true);
    }
  

  };

    const getCandidates = async () => {
        setIsLoading(true)
        try {
            // const { data } = await searchApi.get('/search', {params:{skill=${skills}&experienceYears=${experience}`)
            //const { data_r } = await searchApi.get('/search', {params:{skill:skills,experienceYears:experience}})
            const data_r = datos
            console.log(data_r)
            setData(data_r)
            
        } catch (error) {
            console.error("Error fetching data", error)
            
        } finally {
            setIsLoading(false)
        }
    }


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
            Find Candidates
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="experience"
                  type="text"
                  placeholder='experience'
                  fullWidth
                  name="experienceYears"
                  value= {experience}
                  onChange={handleInputChangeE}
                  error = {errorE}
                  helperText = {errorE ? "Please enter numbers only": ""}
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                  label="skill"
                  type="text"
                  placeholder='skill'
                  fullWidth
                  name="skill"
                  value= {skills}
                  onChange={handleInputChangeS}
                   error = {errorS}
                   helperText = {errorS ? "If there is more than a skill put a hyphen between them": ""}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
          
          {isLoading && <p>Loading...</p>}
          {data.length > 0 && (
            <List>
             {data.map(item_r => (
              <>
                <ListItem disablePadding key={item_r.name}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                            <ListItemText
                            primary={item_r.name + " " + item_r.lastName}
                            />                         
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                             color="primary"
                             fullWidth
                             variant="contained"
                             onClick={(e)=> console.log(item_r.candidateId)}
                             sx={{ mt: 3, mb: 2 }}
                            >
                                Contact
                            
                        </Button>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider/>
              </>
                ))}
              </List>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
