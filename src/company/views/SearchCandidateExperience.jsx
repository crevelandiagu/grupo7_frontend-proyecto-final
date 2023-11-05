import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore, useForm } from '../../hooks';
import { Alert, Divider, List, ListItem, ListItemText } from '@mui/material';
import { CompanyLayout } from '../layout/CompanyLayout';


const formData = {
  name:"",
  description: ""
}

const formValidations =  {
  experience: [ (value) => value.length>= 3, 'certification must be at least 3 characters long' ],
  skill: [ (value) => value.length>= 3, 'issuing organization must be at least 3 characters long' ],
}

const defaultTheme = createTheme();

export const SearchCandidateExperience = () => {

  // const { startSignIn, errorMessage } = useAuthStore();
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const {
  //   formState, experience, skill, onInputChange, isFormValid, 
  //   isExperienceValid, isSkillValid,} = useForm( formData, formValidations );

   const handleSubmit = (event) => {
   //  event.preventDefault();
     getCandidates()
   }
  //   setFormSubmitted(true);

  //   if ( !isFormValid ) return;
  //   startSignIn(formState);
  // };


  const [data, setData] = useState([{}])
  const [isLoading, setIsLoading] = useState(false)
  const [experience, setExperience] = useState("")
  const [skills, setSkills] = useState("")

    const getCandidates = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`api-search-candidate/`)
            setData(res.data)
            
        } catch (error) {
            console.error("Error fetching data", error)
            
        } finally {
            setIsLoading(false)
        }
    }


  return (
   
    <CompanyLayout>
    
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
          <Box component="form" method={'GET'} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="experience"
                  type="text"
                  placeholder='experience'
                  fullWidth
                  name="experienceYears"
                  value= {experience}
                  onChange={(e) => setExperience(e.target.value)}
                  // error = {!!isExperienceValid && formSubmitted}
                  //helperText = {isExperienceValid}
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
                  onChange={(e)=> setSkills(e.target.value)}
                  // error = {!!isSkillValid && formSubmitted}
                  // helperText = {isSkillValid}
                />
              </Grid>
            </Grid>
            {/* <Grid item sx={{ mt: 2 }}n
              xs={12}
              display={ errorMessage ? '' : 'none' }
            >
                <Alert severity="error">{errorMessage}</Alert>
            </Grid>  */}
            <Button
              type='submit'
              fullWidth
              variant="contained"
              // onClick={getCandidates}
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>

          {isLoading && <p>Loading...</p>}
          {data.length > 0 && (
            <List>
                <ListItem disablePadding>
                <Grid container spacing={5} alignItems="center">
                    <Grid item>
                            <ListItemText
                            primary="nombre candidato fffddddffddd"
                            secondary="descripcion candidato" />
                    </Grid>
                    <Grid item>
                        <Button
                             color="primary"
                             fullWidth
                             variant="contained"
                             sx={{ mt: 3, mb: 2 }}
                            >
                                Contact
                            
                        </Button>
                    </Grid>
                </Grid>
                </ListItem>
                <Divider/>
            </List>
          )}
          
          


        </Box>
      </Container>
    </ThemeProvider>

    </CompanyLayout>
  );
}
