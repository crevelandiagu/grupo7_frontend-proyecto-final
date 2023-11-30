import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import selectionProcessApi from '../../api/selectionProcess';
import { useTranslation } from 'react-i18next';



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

const selectionProcess = getEnvSelectionProcess();

export const Interview = () => {

  const { id } = useAuthStore();
  const { t } = useTranslation();
  const { data } = useFetch(`${selectionProcess}/interviews/company/${id}`)

  const columns = [
    { field: 'id', headerName: '#', width: 20 },
    { field: 'idInterview', headerName: t('interviewList.inteviewColumn'), width: 80 },
    { field: 'project', headerName: t('interviewList.projectColumn'), width: 150},
    {
      field: 'candidate',
      headerName: t('interviewList.candidateColumn'),
      type: 'text',
      width: 150,
      editable: false,
    },
    {
      field: 'date',
      headerName: t('interviewList.dateColumn'),
      width: 180,
      editable: false,
    },
    {
      field: 'score',
      headerName: t('interviewList.scoreColumn'),
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'click',
      headerName: t('interviewList.actionColumn'),
      type: 'click',
      width: 110,
      renderCell: (params) => {
        return (
          <strong>
            <Button variant='contained' size='small' onClick={sendScore(params)} >{t('interviewList.btnColumn')}</Button>
          </strong>
        )
      }
    },
  ];

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          {t('interviewList.title')}
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
            score: item.score || t('interviewList.pendingLabel'),
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