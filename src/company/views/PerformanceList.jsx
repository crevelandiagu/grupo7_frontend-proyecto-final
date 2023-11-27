import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvPerformance } from '../../helpers/getEnvVaribles';
import { useAuthStore, useCompanyStore, useFetch } from '../../hooks';

const performance = getEnvPerformance();

const datas = [
  { id: 1, project_id: 'Big project', candidate_name: 'Peter Parker',  score: 35 },
  { id: 2, project_id: 'Small project', candidate_name: 'Harry Osborn',  score: 42 },
  { id: 3, project_id: 'Medium Project', candidate_name: 'Ben Parker',  score: 45 },
 
];

export const AssesmentList = () => {
  const { id } = useAuthStore();
  const { startActiveView } = useCompanyStore();
  const { data, loading } = useFetch(`${performance}/company/${id}/evaluation`)

  const columns = [
    { field: 'id', headerName: 'IDs' },
    { field: 'project', headerName: 'Project' },
    { field: 'candidate', headerName: 'Candidate' },
    {
      field: 'score',
      headerName: 'Score',
      type: 'number',
      editable: false,
    },
    {
      field: 'click',
      headerName: 'Action',
      type: 'click',
      renderCell: (params) => {
        return (
          <Button variant='contained' size='small' onClick={() => { startActiveView('performance') }} >
            Evaluate
          </Button>
        )
      }
    },
  ];

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          List Assesment
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          datas?.map((item, index) => ({
            id: index + 1,
            project: item.project_id,
            candidate: item.candidate_id,
            score: item.score || 'Pending',
            action: `${item.id}`
          })) 
        }
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box >
  );
}