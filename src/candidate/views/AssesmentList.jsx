import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';

const columns = [
  { field: 'id', headerName: '#' },
  { field: 'companyId', headerName: 'Id' },
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

const selectionProcess = getEnvSelectionProcess();

export const AssesmentList = () => {
  const { id } = useAuthStore();
  const { data } = useFetch(`${selectionProcess}/assement/candidate/${id}`)

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          Assesments
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          data?.map((item, index) => ({
            id: index + 1,
            companyId: item.company_id,
            company: item.company_name,
            project: item.project_name,
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