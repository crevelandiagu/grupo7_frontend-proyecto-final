import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';

import { useAuthStore, useCandidateStore, useForm } from '../../hooks';
import { candidateApi } from '../../api';
import { skillsListSelect } from '../../helpers/skillsListSelect';
import { useTranslation } from 'react-i18next';

const formData = {
  school: '',
  degree: '',
  startDate: '',
  endDate: '',
  location: '',
}

const saveEducationInfo = async (candidateId, { school: univerisity, endDate: end_date, degree: subject, skills, startDate: start_date }) => {
  try {
    const { data } = await candidateApi.post(`/profile/education/${candidateId}`, { univerisity, end_date, subject, skills, start_date })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

export const ProfileEducation = () => {

  const { id } = useAuthStore();
  const { t } = useTranslation();
  const { errorMessage } = useCandidateStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [skillsList, setSkillsList] = useState(null);

  const formValidations = {
    school: [(value) => value.length >= 3, t('message.inputSchool')],
    degree: [(value) => value.length >= 3, t('message.inputDegree')],
    startDate: [(value) => value.length >= 0, t('message.inputStartDate')],
    endDate: [(value) => value.length >= 0, t('message.inputEndDate')],
    location: [(value) => value.length >= 3, t('messsage.inputLocation')],
  }

  const {
    formState, school, degree, startDate, endDate, location, onInputChange, isFormValid,
    schoolValid, degreeValid, startDateValid, endDateValid, locationValid } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    saveEducationInfo(id, { ...formState, skills: skillsList });

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
          {t('education.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={t('education.schoolTextFieldLabel')}
                type="text"
                placeholder={t('education.schoolTextFieldPlaceholder')}
                fullWidth
                name="school"
                value={school}
                onChange={onInputChange}
                error={!!schoolValid && formSubmitted}
                helperText={formSubmitted? schoolValid: ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('education.degreeTextFieldLabel')}
                type="text"
                placeholder={t('education.degreeTextFieldPlaceholder')}
                fullWidth
                name="degree"
                value={degree}
                onChange={onInputChange}
                error={!!degreeValid && formSubmitted}
                helperText={formSubmitted? degreeValid:''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('education.startDateTextFieldLabel')}
                type="date"
                fullWidth
                name="startDate"
                value={startDate || "2023-01-01"}
                onChange={onInputChange}
                error={!!startDateValid && formSubmitted}
                helperText={formSubmitted? startDateValid: ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('education.endDateTextFieldLabel')}
                type="date"
                fullWidth
                name="endDate"
                value={endDate || "2023-01-01"}
                onChange={onInputChange}
                error={!!endDateValid && formSubmitted}
                helperText={formSubmitted?endDateValid: ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('education.locationTextFieldLabel')}
                type="text"
                placeholder={t('education.locationTextFieldPlaceholder')}
                fullWidth
                name="location"
                value={location}
                onChange={onInputChange}
                error={!!locationValid && formSubmitted}
                helperText={formSubmitted? locationValid: ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id='skills'
                multiple
                limitTags={4}
                onChange={(event, value) => {
                  setSkillsList(value);
                }}
                options={skillsListSelect}
                getOptionLabel={(option) => option}
                // defaultValue={[skillList[1]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t('education.skillTextFieldLabel')}
                    placeholder={t('education.skillTextFieldPlaceholder')}
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
            {t('education.schoolTextFieldLabel')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
