import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Circle } from '@mui/icons-material';

import { useCompanyStore, useFetch, useForm } from '../../hooks';
import { skillsListSelect } from '../../helpers/skillsListSelect';
import { getEnvSearchTool } from '../../helpers/getEnvVaribles';


const setQueryParams = (skillsList, experience) => {
  let queryParams = '?';
  if (skillsList && skillsList.length > 0) {
    queryParams += `skill=${skillsList.join('-')}&`;
  }
  if (experience) {
    queryParams += `experienceYears=${experience}`;
  }
  return queryParams;
}
const searchTool = getEnvSearchTool();

const defaultTheme = createTheme();

export const SearchCandidate = () => {

  const { startActiveView, startSelectCandidate } = useCompanyStore();

  const [skillsList, setSkillsList] = useState(null);
  const [queryString, setQueryString] = useState('?experienceYears=100')

  const { data, loading } = useFetch(`${searchTool}/search${queryString}`)
  const { experience, onInputChange } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!skillsList && !experience) return;
    setQueryString(setQueryParams(skillsList, experience))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'flex-start',
              gap: '5px',
            }}>
            <Autocomplete
              id="skills"
              sx={{ width: '70%' }}
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
                  placeholder="Select skills"
                />
              )}
            />
            <TextField
              label="years"
              sx={{ width: '90px' }}
              type="number"
              placeholder='2'
              name="experience"
              value={experience}
              onChange={onInputChange}
            />

            <Button
              type='submit'
              variant="contained"
              sx={{ width: '95px' }}
            >
              Search
            </Button>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container display={loading ? 'flex' : 'none'} justifyContent={'flex-star'} mt={8}>
            {loading ? <CircularProgress color="inherit" size={40} /> : null}
          </Grid>
          <Grid container display={loading && data?.length > 0 ? 'none' : 'flex'} mt={2}
            sx={{
              flexFlow: 'row wrap',
              justifyContent: 'flex-start',
              gap: '5px',
            }}>
            {
              data?.map((candidate) => (
                <Card key={candidate.candidateId} container sx={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  justifyContent: 'flex',
                  gap: '5px',
                }}>
                  <CardContent >
                    <Typography sx={{ fontSize: 14, color: 'primary' }} gutterBottom>
                      <strong>Name: </strong>{candidate.name} {candidate.lastName} <Circle sx={{ widh: "10px", height: "10px" }} color="primary" />  <strong>Exp: </strong> {candidate.years_exp}
                    </Typography>
                    {candidate.skills.skills.map((skill) => (
                      <Chip key={skill} label={skill} size='small' sx={{ margin: '3px' }} />

                    ))
                    }
                  </CardContent>
                  <CardActions >
                    <Button size="small" variant='contained' onClick={() => { startActiveView('profile'); startSelectCandidate(candidate.candidateId) }}>contact</Button>
                  </CardActions>
                </Card>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
