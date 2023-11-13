import { Alert, Autocomplete, Box, Button, CircularProgress, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import { projectsApi } from "../../api";
import { useAuthStore, useFetch } from "../../hooks";
import { getEnvCompanyEmployees, getEnvProjects } from "../../helpers/getEnvVaribles";
import { Fragment, useState } from "react";

const assignProject = async (projectId, employeeId) => {
  try {
    const { data } = await projectsApi.post('/project-employe', { projectId, employeeId })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const defaultTheme = createTheme();

const projects = getEnvProjects();
const companyEmployees = getEnvCompanyEmployees();

export const AssignEvaluator = () => {

  const { id } = useAuthStore();

  const [message, setMessage] = useState('');
  const [openProjects, setopenProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openEmployees, setopenEmployees] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { data: dataProjects, loading:loadingDataProject } = useFetch(`${projects}?companyId=${id}`)
  const { data: dataEmployees, loading:loadingDataEmployees } = useFetch(`${companyEmployees}/employee/${id}`)

  const handledClick = (event) => {
    event.preventDefault();
    if (!selectedProject || !selectedEmployee) return;
    console.log('validated', selectedProject, selectedEmployee)
    assignProject(selectedProject, selectedEmployee);
    setMessage('Employee was link with the project');
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
            Assign Evaluator
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container direction="column" spacing={2} justifyContent="space-around" alignItems="start" sx={{ width: '396px' }}>
              <Autocomplete
                id="projects"
                sx={{ width: '100%', marginBottom: '15px' }}
                onChange={(event, value) => {
                  setSelectedProject(value.id);
                }}
                open={openProjects}
                onOpen={() => {
                  setopenProjects(true);
                }}
                onClose={() => {
                  setopenProjects(false);
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
              <Autocomplete
                id="employees"
                sx={{ width: '100%', marginBottom: '15px' }}
                onChange={(event, value) => {
                  console.log('employees', value.employeeId)
                  setSelectedEmployee(value.employeeId);
                }}
                open={openEmployees}
                onOpen={() => {
                  setopenEmployees(true);
                }}
                onClose={() => {
                  setopenEmployees(false);
                }}
                isOptionEqualToValue={(option, value) => option.email === value.email}
                getOptionLabel={(option) => option.email}
                options={dataEmployees}
                loading={loadingDataEmployees}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="employees"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <Fragment>
                          {loadingDataEmployees ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </Fragment>
                      ),
                    }}
                  />
                )}
              />
               <Autocomplete
                id="employees"
                sx={{ width: '100%', marginBottom: '15px' }}
                onChange={(event, value) => {
                  console.log('employees', value.employeeId)
                  setSelectedEmployee(value.employeeId);
                }}
                open={openEmployees}
                onOpen={() => {
                  setopenEmployees(true);
                }}
                onClose={() => {
                  setopenEmployees(false);
                }}
                isOptionEqualToValue={(option, value) => option.email === value.email}
                getOptionLabel={(option) => option.email}
                options={dataEmployees}
                loading={loadingDataEmployees}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="candidate"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <Fragment>
                          {loadingDataEmployees ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </Fragment>
                      ),
                    }}
                  />
                )}
              />
              <TextField
                label="Score"
                placeholder="Score"
                fullWidth
              >

              </TextField>

              <Button fullWidth onClick={handledClick} variant="contained">Evaluate</Button>
              <Grid item sx={{ width: '380px' }}
                display={message ? '' : 'none'}
              >
                <Alert severity="success">{message}</Alert>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
