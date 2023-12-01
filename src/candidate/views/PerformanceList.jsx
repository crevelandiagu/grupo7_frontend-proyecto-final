import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvPerformance } from '../../helpers/getEnvVaribles';
import { useAuthStore, useFetch } from '../../hooks';
import { useTranslation } from 'react-i18next';

const columns = [
  { field: 'id', headerName: '#' },
  { field: 'company', headerName: 'Company' },
  { field: 'project', headerName: 'Project' },
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
  const { t } = useTranslation();
  const { data } = useFetch(`${performance}/candidate/${id}/evaluation`)

  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'company', headerName: t('performanceList.companyColumn') },
    { field: 'project', headerName: t('performanceList.projectColumn') },
    {
      field: 'score',
      headerName: t('performanceList.scoreColumn'),
      type: 'number',
      editable: false,
    },
  ];

  return (
    <Box>
      <Grid container justifyContent="center" mt={3} mb={3} >
        <Typography component="h1" variant="h4">
        {t('performanceList.title')}
        </Typography>
      </Grid>
      <DataGrid
        columns={columns}
        rows={
          data?.map((item, index) => ({
            id: index + 1,
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