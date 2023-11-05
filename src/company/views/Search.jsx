
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Search = () => {

  const handledSearch = () => {
    
    console.log('search')
  }

  return (
    <Box
      // sx={{
      //   width: '100%',
      //   maxWidth: '100%',
      // }}
    >
      <Grid container spacing={2} >
        <Grid item xs={4}>
          <TextField label="skill" id="skill" />
        </Grid> 
        <Grid item xs={4}>
          <TextField label="exp" id="exp" />
        </Grid>
        <Grid item xs={4}>
          <Button variant='contained'onClick={handledSearch}>Search</Button>
        </Grid>   
      </Grid>
    </Box>
  );
}