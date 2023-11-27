import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvPerformance } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'company', headerName: 'Company' },
  { field: 'project', headerName: 'Project' },
  { field: 'idAssesment', headerName: 'Id Assesment' },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    editable: false,
  },
];

const performance = getEnvPerformance();

export const PerformanceList = () => {
  const { id } = useAuthStore();
  const { data } = useFetch(`${performance}/candidate/${id}/evaluation`)

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          List Performace Evaluation
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          data?.map((item, index) => ({
            id: index + 1,
            company: item.company_id,
            project: item.project_id,
            idAssesment: item.id,
            score: item.score || 'Pending',
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