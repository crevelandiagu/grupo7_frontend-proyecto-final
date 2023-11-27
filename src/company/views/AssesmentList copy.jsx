import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useCompanyStore, useFetch } from '../../hooks';

const selectionProcess = getEnvSelectionProcess();

export const AssesmentList = () => {
  const { id } = useAuthStore();
  const { startActiveView } = useCompanyStore();
  const { data, loading } = useFetch(`${selectionProcess}/selection-process/company/${id}`)

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'project', headerName: 'Project' },
    { field: 'idAssesment', headerName: 'Id Assesment' },
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
          <Button variant='contained' size='small' onClick={() => { startActiveView('assesment') }} >
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
            project: item.project_id,
            idAssesment: item.id,
            candidate: item.candidate_id,
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