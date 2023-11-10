import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'project', headerName: 'Project', width: 200 },
  {
    field: 'candidate',
    headerName: 'Candidate',
    type: 'text',
    width: 200,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 130,
    editable: true,
  },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 80,
    editable: true,
  },
];


const selectionProcess = getEnvSelectionProcess();

export const Interview = () => {

  const { id } = useAuthStore();
  const { data, loading } = useFetch(`${selectionProcess}/company/${id}`)

  console.log(loading, !data,  loading && !data)

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          List Interviews
        </Typography>
      </Grid>
      <DataGrid 
        columns={columns}
        rows={  
            data?.map((item, index) => ({
            id: index+1,
            project: item.project_id,
            candidate: item.candidate_name,
            date: item.date_interview,
            score: item.score,
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box >
  );
}