import { useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore, useCandidateStore, useForm } from '../../hooks';
import { candidateApi } from '../../api';
import { skillsListSelect } from '../../helpers/skillsListSelect';

const formData = {
  school:'',
  degree:'',
  startDate:'',
  endDate:'',
  location:'',
}

const formValidations =  {
  school: [ (value) => value.length>= 3, 'school must be at least 3 characters long' ],
  degree: [ (value) => value.length>= 3, 'degree must be at least 5 characters long' ],
  startDate: [(value) => value.length >= 0, 'star date must be a date valid'],
  endDate: [(value) => value.length >= 0, 'end date must be a date valid'],
  location: [ (value) => value.length>= 5, 'location must be at least 5 characters long' ],
}

const saveEducationInfo = async (candidateId, { school: univerisity, endDate: end_date, degree:subject, skills, startDate: start_date }) => {
  try {
    const { data } = await candidateApi.post(`/profile/education/${candidateId}`, { univerisity, end_date,  subject, skills, start_date })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}


const defaultTheme = createTheme();

export const ProfileEducation = () => {

  const { id } = useAuthStore();
  const { errorMessage } = useCandidateStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [skillsList, setSkillsList] = useState(null);

  const {
    formState, school, degree, startDate, endDate, location, onInputChange, isFormValid, 
    schoolValid, degreeValid, startDateValid, endDateValid, locationValid } = useForm( formData, formValidations );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    console.log('formState', formState);
    saveEducationInfo(id, { ...formState, skills: skillsList });

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
            Education
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="school"
                  type="text"
                  placeholder='school'
                  fullWidth
                  name="school"
                  value= {school}
                  onChange={onInputChange}
                  error = {!!schoolValid && formSubmitted}
                  helperText = {schoolValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="degree"
                  type="text"
                  placeholder="degree"
                  fullWidth
                  name="degree"
                  value= {degree}
                  onChange={onInputChange}
                  error = {!!degreeValid && formSubmitted}
                  helperText = {degreeValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="startDate"
                  type="date"
                  fullWidth
                  name="startDate"
                  value= {startDate || "2023-01-01" }
                  onChange={onInputChange}
                  error = {!!startDateValid && formSubmitted}
                  helperText = {startDateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="endDate"
                  type="date"
                  fullWidth
                  name="endDate"
                  value= {endDate || "2023-01-01" }
                  onChange={onInputChange}
                  error = {!!endDateValid && formSubmitted}
                  helperText = {endDateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="location"
                  type="text"
                  placeholder="location"
                  fullWidth
                  name="location"
                  value= {location}
                  onChange={onInputChange}
                  error = {!!locationValid && formSubmitted}
                  helperText = {locationValid}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id="skills"
                  multiple
                  limitTags={4}
                  onChange={(event, value) => {
                    console.log('skills', value)
                    setSkillsList(value);
                  }}
                  options={skillsListSelect}
                  getOptionLabel={(option) => option}
                  // defaultValue={[skillList[1]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      placeholder="Select your skills"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}
              xs={12}
              display={ errorMessage ? '' : 'none' }
            >
                <Alert severity="error">{errorMessage}</Alert>
            </Grid> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
