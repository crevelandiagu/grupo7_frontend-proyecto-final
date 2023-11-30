import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import { useTranslation } from 'react-i18next';

const selectionProcess = getEnvSelectionProcess();

export const Interview = () => {
  const { id } = useAuthStore();
  const { t } = useTranslation();
  const { data, loading } = useFetch(`${selectionProcess}/interviews/candidate/${id}`)

  const columns = [
    { field: 'id', headerName: '#', width: 30 },
    { field: 'companyId', headerName: 'Id', width: 30 },
    { field: 'company', headerName: t('interviewList.companyColumn'), width: 130 },
    {
      field: 'score',
      headerName: t('interviewList.scoreColumn'),
      type: 'number',
      width: 80,
    },
    {
      field: 'date',
      headerName: t('interviewList.dateColumn'),
      width: 130,
    },
    {
      field: 'time',
      headerName: t('interviewList.timeColumn'),
      type: 'time',
      width: 80,
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
            companyId: item.company_id,
            company: item.company_name,
            score: item.score || t('interviewList.title'),
            date: item.date_interview.split('T')[0],
            time: item.date_interview.split('T')[1]
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