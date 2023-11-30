import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvPerformance } from '../../helpers/getEnvVaribles';
import { useAuthStore, useCompanyStore, useFetch } from '../../hooks';

const performance = getEnvPerformance();

export const PerformanceList = () => {

  const { id } = useAuthStore();
  const { startSelectCandidate, startActiveView, startSetIdProcess } = useCompanyStore();
  const { data, loading } = useFetch(`${performance}/company/${id}/evaluation`)


  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'project', headerName: 'Project' },
    { field: 'idCandidate', headerName: 'Id', type: 'number' },
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
          <Button variant='contained' size='small' onClick={() => { startActiveView('performance'); startSelectCandidate(params.row.idCandidate); startSetIdProcess(params.row.idAPerformance)}} >
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
          Performance List
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          data?.map((item, index) => ({
            id: index + 1,
            project: item.project_name,
            idAPerformance: item.id,
            idCandidate: item.candidateId,
            candidate: item.candidate_name,
            score: item.score || 'Pending',
            action: `${item.id}`
          })) || []
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