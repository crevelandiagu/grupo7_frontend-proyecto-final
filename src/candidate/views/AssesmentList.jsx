import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import { useTranslation } from 'react-i18next';

const selectionProcess = getEnvSelectionProcess();

export const AssesmentList = () => {
  const { id } = useAuthStore();
  const { t } = useTranslation(); 
  const { data } = useFetch(`${selectionProcess}/assement/candidate/${id}`)

  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'companyId', headerName: 'Id' },
    { field: 'company', headerName: t('assesmentList.companyColumn') },
    { field: 'project', headerName: t('assesmentList.projectColumn') },
    { field: 'idAssesment', headerName: t('assesmentList.assesmentColumn') },
    {
      field: 'score',
      headerName: t('assesmentList.scoreColumn'),
      type: 'number',
      editable: false,
    },
  ];

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
          {t('assesmentList.title')}
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
            score: item.score || t('assesmentList.pendingLabel'),
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