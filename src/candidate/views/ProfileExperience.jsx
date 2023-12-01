import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';

import { Alert } from '@mui/material';
import { useAuthStore, useCandidateStore, useForm } from '../../hooks';
import { candidateApi } from '../../api';
import { skillsListSelect } from '../../helpers/skillsListSelect';
import { useTranslation } from 'react-i18next';

const formData = {
  position: '',
  company: '',
  startDate: '',
  endDate: '',
  location: '',
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

export const ProfileExperience = () => {

  const { id } = useAuthStore();
  const { t } = useTranslation();
  const { errorMessage } = useCandidateStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [skillsList, setSkillsList] = useState(null);

  const formValidations = {
    position: [(value) => value.length >= 3, t('message.inputPosition') ],
    company: [(value) => value.length >= 3, t('message.inputCompany') ],
    startDate: [(value) => value.length >= 0, t('message.inputStartDate') ],
    endDate: [(value) => value.length >= 0, t('message.inputEndDate') ],
    location: [(value) => value.length >= 3, t('messsage.inputLocation')],
  }

  const {
    formState, position, company, startDate, endDate, location, onInputChange, isFormValid,
    positionValid, companyValid, startDateValid, endDateValid, locationValid, } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    saveExperienceInfo(id, { ...formState, skills: skillsList });
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
          {t('experience.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={t('experience.positionTextFieldLabel')}
                type="text"
                placeholder={t('experience.positionTextFieldPlaceholder')}
                fullWidth
                name="position"
                value={position}
                onChange={onInputChange}
                error={!!positionValid && formSubmitted}
                helperText={formSubmitted ? positionValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('experience.companyTextFieldLabel')}
                type="text"
                placeholder={t('experience.companyTextFieldPlaceholder')}
                fullWidth
                name="company"
                value={company}
                onChange={onInputChange}
                error={!!companyValid && formSubmitted}
                helperText={formSubmitted ? companyValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('experience.startDateTextFieldLabel')}
                type="date"
                // placeholder="start date"
                fullWidth
                name="startDate"
                value={startDate || "2023-01-01"}
                onChange={onInputChange}
                error={!!startDateValid && formSubmitted}
                helperText={formSubmitted ? startDateValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('experience.endDateTextFieldLabel')}
                type="date"
                // placeholder="end date"
                fullWidth
                name="endDate"
                value={endDate || '2023-01-01'}
                onChange={onInputChange}
                error={!!endDateValid && formSubmitted}
                helperText={formSubmitted ? endDateValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t('experience.locationTextFieldLabel')}
                type="text"
                placeholder={t('experience.locationTextFieldPlaceholder')}
                fullWidth
                name="location"
                value={location}
                onChange={onInputChange}
                error={!!locationValid && formSubmitted}
                helperText={formSubmitted ? locationValid : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="skills"
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
                    label={t('experience.skillTextFieldLabel')}
                    placeholder={t('experience.skillTextFieldPlaceholder')}
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
            {t('experience.saveBtn')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

