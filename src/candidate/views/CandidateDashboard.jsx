import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';


export const CandidateDashboard = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3 }}
    >
        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'primary.main' }} />
        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="primary" variant='h5'>****</Typography>
        </Grid>
    </Grid>
  )
}