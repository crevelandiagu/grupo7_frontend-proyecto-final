import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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

const rows = [
  { id: 1, project: 'Assurence project', candidate: 'Jose Sandoval',  date: '10-12-2023', score: 100},
  { id: 2, project: 'Assurence project', candidate: 'Diana Garcia', date: '12:12-2023', score: 90, },
  { id: 3, project: 'Assurence project', candidate: 'Andres Sicoariza', date: '12-11-2023', score: 80},
  { id: 4, project: 'Assurence project', candidate: 'Alejandro Tafur', date: '12-12-2023', score: 80,},
  { id: 5, project: 'Modernization project', candidate: 'Adriana Vasquez', date: '12-12-2023', score: 85,},
  { id: 6, project: 'Modernization project', candidate: 'Monica Carvajal', date: '12-12-2023', score: 80},
  { id: 7, project: 'Modernization project', candidate: 'Fernando Moya',  date: '12-12-2023', score: 98 },
  { id: 8, project: 'Importan project', candidate: 'Andres Riaño',  date: '12-12-2023', score: 100},
  { id: 9, project: 'Other project', candidate: 'Daniel Huertas',  date: '12-12-2023', score: 10},
  { id: 10, project: 'Assurence project', candidate: 'Arturo Castro',  date: '12-12-2023', score: null},
];

export const Interview = () => {
  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
      <Typography component="h1" variant="h4">
            List Interviews
      </Typography>
      </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
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
    </Box>
  );
}