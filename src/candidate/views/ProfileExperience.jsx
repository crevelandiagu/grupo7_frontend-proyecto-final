import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Alert } from '@mui/material';
import { useAuthStore, useCandidateStore, useForm } from '../../hooks';
import { candidateApi } from '../../api';
import { skillsListSelect } from '../../helpers/skillsListSelect';

const formData = {
  position: '',
  company: '',
  startDate: '',
  endDate: '',
  location: '',
}

const formValidations = {
  position: [(value) => value.length >= 3, 'name must be at least 8 characters long'],
  company: [(value) => value.length >= 3, 'last name must be at least 8 characters long'],
  startDate: [(value) => value.length >= 0, 'star date must be a date valid'],
  endDate: [(value) => value.length >= 0, 'end date must be a date valid'],
  location: [(value) => value.length >= 3, 'location must be at least 8 characters long'],
}

const saveExperienceInfo = async (candidateId, { company: company_name, endDate: end_date, location: place, position, skills, startDate: start_date }) => {
  try {
    const { data } = await candidateApi.post(`/profile/experience/${candidateId}`, { company_name, end_date, place, position, skills, start_date })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const defaultTheme = createTheme();

export const ProfileExperience = () => {

  const { id } = useAuthStore();
  const { startSaveProfile, errorMessage } = useCandidateStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [skillsList, setSkillsList] = useState(null);

  const {
    formState, position, company, startDate, endDate, location, onInputChange, isFormValid,
    positionValid, companyValid, startDateValid, endDateValid, locationValid, } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('formState', formState.startDate.length);
    setFormSubmitted(true);

    if (!isFormValid) return;
    saveExperienceInfo(id, { ...formState, skills: skillsList });
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
            Experience
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="position"
                  type="text"
                  placeholder='position'
                  fullWidth
                  name="position"
                  value={position}
                  onChange={onInputChange}
                  error={!!positionValid && formSubmitted}
                  helperText={positionValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="company"
                  type="text"
                  placeholder="company"
                  fullWidth
                  name="company"
                  value={company}
                  onChange={onInputChange}
                  error={!!companyValid && formSubmitted}
                  helperText={companyValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="startDate"
                  type="date"
                  // placeholder="start date"
                  fullWidth
                  name="startDate"
                  value={startDate || "2023-01-01"}
                  onChange={onInputChange}
                  error={!!startDateValid && formSubmitted}
                  helperText={startDateValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="endDate"
                  type="date"
                  // placeholder="end date"
                  fullWidth
                  name="endDate"
                  value={endDate || '2023-01-01'}
                  onChange={onInputChange}
                  error={!!endDateValid && formSubmitted}
                  helperText=""
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="location"
                  type="text"
                  placeholder="location"
                  fullWidth
                  name="location"
                  value={location}
                  onChange={onInputChange}
                  error={!!locationValid && formSubmitted}
                  helperText={locationValid}
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
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

