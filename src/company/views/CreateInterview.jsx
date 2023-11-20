import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthStore, useFetch, useForm } from '../../hooks';
import selectionProcessApi from '../../api/selectionProcess';
import { getEnvProjects } from '../../helpers/getEnvVaribles';

const formData = {
  date: "",
  hour: "",
}

const formValidations = {
  date: [(value) => value.length >= 0, 'date is not valid'],
  hour: [(value) => value.length >= 5, 'hour is not valid '],
}

const createInterview = async (companyId,  projectId, candidateId, dateTime, candidateName = `candidato_${candidateId}`, companyEmployeeId = 1, interviewStatus = 'create') => {
  try {
    const { data } = await selectionProcessApi.post('', {companyId,  projectId, candidateId, dateTime, candidateName, companyEmployeeId, interviewStatus })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const defaultTheme = createTheme();

const projects = getEnvProjects();

export const CreateInterview = () => {

  const { id } = useAuthStore();

  const [message, setMessage] = useState('');
  const [openProjects, setOpenProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openCandidates, setOpenCandidates] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { data: dataProjects, loading: loadingDataProject } = useFetch(`${projects}?companyId=${id}`)

  const {
    formState, date, hour, onInputChange, isFormValid,
    dateValid, hourValid } = useForm(formData, formValidations);

  console.log(!selectedCandidate, selectedCandidate?.length == 0, !selectedCandidate && selectedCandidate?.length == 0)
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    let dateTime = `${formState.date}T${formState.hour}:00`;
    
    console.log(id, selectedProject, selectedCandidate, dateTime )
    createInterview(id, selectedProject, selectedCandidate, dateTime);
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
            Create Interview
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  id="projects"
                  sx={{ width: '100%', marginBottom: '15px' }}
                  onChange={(event, value) => {
                    setSelectedProject(value.id);
                    setSelectedCandidate(value.candidate_project_id);
                  }}
                  open={openProjects}
                  onOpen={() => {
                    setOpenProjects(true);
                  }}
                  onClose={() => {
                    setOpenProjects(false);
                  }}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  getOptionLabel={(option) => option.projectName}
                  options={dataProjects}
                  loading={loadingDataProject}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="projects"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <Fragment>
                            {loadingDataProject ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disabled={!selectedCandidate}
                  id="candidates"
                  sx={{ width: '100%', marginBottom: '15px' }}
                  onChange={(event, value) => {
                    setSelectedCandidate(value);
                  }}
                  // open={openCandidates}
                  // onOpen={() => {
                  //   setOpenCandidates(true);
                  // }}
                  // onClose={() => {
                  //   setOpenCandidates(false);
                  // }}
                  // isOptionEqualToValue={(option, value) => option === value}
                  // getOptionLabel={(option) => option.projectName}
                  options={selectedCandidate}
                  // loading={loadingDataProject}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="candidates"
                    // InputProps={{
                    //   ...params.InputProps,
                    //   endAdornment: (
                    //     <Fragment>
                    //       {loadingDataProject ? <CircularProgress color="inherit" size={20} /> : null}
                    //       {params.InputProps.endAdornment}
                    //     </Fragment>
                    //   ),
                    // }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="date"
                  type="date"
                  fullWidth
                  name="date"
                  value={date || new Date().toISOString().slice(0, 10)}
                  onChange={onInputChange}
                  error={!!dateValid && formSubmitted}
                  helperText={dateValid}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="hour"
                  type="time"
                  fullWidth
                  name="hour"
                  value={hour || '00:00'}
                  onChange={onInputChange}
                  error={!!hourValid && formSubmitted}
                  helperText={hourValid}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}
              xs={12}
              display={message ? '' : 'none'}
            >
              <Alert severity="success">{message}</Alert>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Schedule
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}
