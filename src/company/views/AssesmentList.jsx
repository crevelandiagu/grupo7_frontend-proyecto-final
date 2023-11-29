import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useCompanyStore, useFetch } from '../../hooks';

const selectionProcess = getEnvSelectionProcess();

export const AssesmentList = () => {

  const { id } = useAuthStore();
  const { startActiveView,startSelectCandidate, startSetIdProcess } = useCompanyStore();
  const { data, loading } = useFetch(`${selectionProcess}/selection-process/company/${id}`)

  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'project', headerName: 'Project' },
    { field: 'idAssesment', headerName: 'Assesment' },
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
          <Button variant='contained' size='small' onClick={() => { startActiveView('assesment'); startSelectCandidate(params.row.idCandidate); startSetIdProcess(params.row.idAssesment) }} >
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
          data?.map((item, index) => ({
            id: index + 1,
            project: item.project_name,
            idAssesment: item.id,
            idCandidate: item.candidate_id,
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