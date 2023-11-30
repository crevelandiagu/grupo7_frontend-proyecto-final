import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import selectionProcessApi from '../../api/selectionProcess';



const sendScore = (params) => {
  const score = params.row.score;
  const idInterview = params.row.id;
  if(score === 'Pending') return;
  assignScoreInterview(idInterview, score)
}

const assignScoreInterview = async (idInterview, score) => {
  try {
    const { data } = await selectionProcessApi.post(`/interviews/score/${idInterview}`, { score: score })
    console.log('data', data);
    return data.message;
  } catch (error) {
    console.log('error', error);
  }
}

const columns = [
  { field: 'id', headerName: '#', width: 20 },
  { field: 'idInterview', headerName: 'Interview', width: 80 },
  { field: 'project', headerName: 'Project', width: 150},
  {
    field: 'candidate',
    headerName: 'Candidate',
    type: 'text',
    width: 150,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 180,
    editable: false,
  },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'click',
    headerName: 'Action',
    type: 'click',
    width: 110,
    renderCell: (params) => {
      return (
        <strong>
          <Button variant='contained' size='small' onClick={sendScore(params)} >Evaluate</Button>
        </strong>
      )
    }
  },
];

const selectionProcess = getEnvSelectionProcess();

export const Interview = () => {

  const { id } = useAuthStore();
  const { data } = useFetch(`${selectionProcess}/interviews/company/${id}`)

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
            idInterview: item.id,
            project: item.project_name,
            candidate: item.candidate_name,
            date: item.date_interview,
            score: item.score || 'Pending',
            click: item.id
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
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box >
  );
}