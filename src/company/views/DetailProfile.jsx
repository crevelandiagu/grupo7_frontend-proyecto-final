import { Circle, Email, Phone, Place } from "@mui/icons-material";
import { Autocomplete, Avatar, Box, Button, Grid, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material"
import { useCompanyStore } from "../../hooks";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const projects = [
  { label: 'SAS project', year: 2023 },
  { label: 'Assurance project', year: 2023 },
  { label: 'Upgrade project', year: 2023 },
  { label: 'Project 11', year: 2023 },
  { label: 'Projct empty', year: 2023 },
  { label: "Schindler's List", year: 2023 },
]

export const DetailProfile = () => {

  const { startActiveView } = useCompanyStore();

  return (
    <Box>
      <Grid container xs={12} direction="row" spacing={2} sx={{ marginTop:'10px' }} justifyContent="end">
        <Autocomplete
          disablePortal
          id="project"
          options={projects}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Project" />}
        />
        <Button variant="contained" onClick={() => {setTimeout(() => {startActiveView('dashboard')
  }, 1500)}}>Start process</Button>
      </Grid>
      <Grid sx={{ width: '90%', background: '#F9F9FB', marginTop: '15px', padding: '25px', borderRadius: '16px' }} container xs={12} direction="column" alignItems="center">
        <Avatar sx={{ width: 150, height: 100 }} {...stringAvatar('Arturo Castro')} />
        <Typography variant="h5" >Arturo Castro</Typography>
        <Grid container xs={12} direction="row" justifyContent="center">
          <Phone color="primary" /><Typography variant="bodt" >31155700</Typography>
          <Email color="primary" /><Typography variant="body2" >ca.castrov@uniandes.edu.co</Typography>
          <Place color="primary" /><Typography variant="body2" >Bogotá</Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} sx={{ width:'90%', marginTop: '15px', padding: '25px'}} spacing={2} direction="row" justifyContent="center">
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '25px', borderRadius: '16px' }}>
          <Typography variant="h5" >Experience</Typography>
          <Typography variant="h6" >Company sas </Typography>
          <Typography variant="body1" >Full time<Circle sx={{widh:"10px", height:"10px" }} color="primary"/> 3 yars  <Circle sx={{widh:"10px", height:"10px" }} color="primary"/> 4mos</Typography>
        </Grid>
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '20px', borderRadius: '16px' }}>
          <Typography variant="h5" >Education</Typography>
          <Typography variant="h6" >Libre University </Typography>
          <Typography variant="body1" >System Engineer <Circle sx={{widh:"10px", height:"10px" }} color="primary"/> 2022</Typography>
        </Grid>
        <Grid item direction="column" alignItems="start" xs={3} sx={{ background: '#F9F9FB', margin: '15px', padding: '25px', borderRadius: '16px' }}>
          <Typography variant="h5" >Skill and certification</Typography>
          <Typography variant="h6" >GCP Professional </Typography>
          <Typography variant="body1" >Inssued<Circle sx={{widh:"10px", height:"10px" }} color="primary"/> 2021</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}