import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'company', headerName: 'Company', width: 130 },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 80,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 130,
    editable: true,
  },
  {
    field: 'time',
    headerName: 'Time',
    type: 'time',
    width: 80,
    editable: true,
  },
];

const rows = [
  { id: 1, company: 'Snow', score: 100, date: '12-12-2023', time:'12:00'  },
  { id: 2, company: 'Lannister', score: 90, date: '12-12-2023', time:'12:00' },
  { id: 3, company: 'Lannister', score: 80, date: '12-12-2023', time:'12:00' },
  { id: 4, company: 'Stark', score: 80, date: '12-12-2023', time:'12:00' },
  { id: 5, company: 'Targaryen', score: 85, date: null, time:'12:00' },
  { id: 6, company: 'Melisandre', score: 80, date: '12-12-2023', time:'12:00' },
  { id: 7, company: 'Clifford', score: 100, date: '12-12-2023', time:'12:00' },
  { id: 8, company: 'Frances', score: 100, date: '12-12-2023', time:'12:00' },
  { id: 9, company: 'Roxie', score: 100, date: '12-12-2023', time:'12:00' },
];

export const Interview = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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