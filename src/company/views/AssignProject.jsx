import { Alert, Autocomplete, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import { useState } from "react";

const defaultTheme = createTheme();

export const AssingProject = () => {

  const [message, setMessage] = useState('');

  const handledClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setMessage('Project assigned successfully');
    }, 1500)

  }

  const projects = [
    { label: 'SAS project', year: 2023 },
    { label: 'Assurance project', year: 2023 },
    { label: 'Upgrade project', year: 2023 },
    { label: 'Project 11', year: 2023 },
    { label: 'Projct empty', year: 2023 },
    { label: "Schindler's List", year: 2023 },
  ]

  const candidates = [
    { label: 'Arturo Castro', year: 2023 },
    { label: 'Cristian Velandia', year: 2023 },
    { label: 'Daniel Huertas', year: 2023 },
    { label: "Jose Bedoya", year: 2023 },
    { label: 'Sandra Romero', year: 2023 },
    { label: 'Stefanny Soto', year: 2023 },
    { label: 'Andres Diaz', year: 2023 },
  ]

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
            Assign Project
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container direction="column" spacing={2} justifyContent="space-around" alignItems="start" sx={{ width: '396px'}}>
              <Autocomplete 
                disablePortal
                fullWidth
                id="prjects"
                options={projects}
                sx={{marginBottom: '20px' }}
                renderInput={(params) => <TextField {...params} label="Project" />}
              />
              <Autocomplete
                disablePortal
                fullWidth
                id="canidates"
                options={candidates}
                sx={{marginBottom: '20px' }}
                renderInput={(params) => <TextField {...params} label="Candidate" />}
              />
              <Button fullWidth onClick={handledClick} variant="contained">Assign Project</Button>
              <Grid item sx={{ width: '380px'}}
                display={ message ? '' : 'none' }
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