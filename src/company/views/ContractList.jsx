import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import selectionProcessApi from '../../api/selectionProcess';

const sendContract = async (id,{projectId, candidateId} ) => {
  try {
    const { data } = await selectionProcessApi.post('/selection-process/sign-contract/', { companyId: id, projectId, candidateId })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const selectionProcess = getEnvSelectionProcess();

export const ContractList = () => {
  const { id } = useAuthStore();
  const { data } = useFetch(`${selectionProcess}/selection-process/company/${id}`)

  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'projectId', headerName: 'Id' },
    { field: 'project', headerName: 'Project' },
    { field: 'candidateId', headerName: 'Id' },
    { field: 'candidate', headerName: 'Candidate' },
    {
      field: 'click',
      headerName: 'Action',
      type: 'click',
      renderCell: ({row}) => {
        return (
          <Button variant='contained' size='small' onClick={() => { sendContract(id, row) }} >
            Sign
          </Button>
        )
      }
    },
  ];

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          Contracts List
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          data?.map((item, index) => ({
            id: index + 1,
            projectId: item.project_id,
            project: item.project_name,
            candidateId: item.candidate_id,
            candidate: item.candidate_name,
            action: `${item.id, item.project_id, item.candidate_id}`
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