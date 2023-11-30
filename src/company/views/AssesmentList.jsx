import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getEnvSelectionProcess } from '../../helpers/getEnvVaribles';
import { useAuthStore, useCompanyStore, useFetch } from '../../hooks';
import { useTranslation } from 'react-i18next';

const selectionProcess = getEnvSelectionProcess();

export const AssesmentList = () => {

  const { id } = useAuthStore();
  const { t } = useTranslation(); 
  const { startActiveView,startSelectCandidate, startSetIdProcess } = useCompanyStore();
  const { data, loading } = useFetch(`${selectionProcess}/selection-process/company/${id}`)

  const columns = [
    { field: 'id', headerName: '#' },
    { field: 'project', headerName: t('assesmentList.projectColumn') },
    { field: 'idAssesment', headerName: t('assesmentList.assesmentColumn')},
    { field: 'idCandidate', headerName: 'Id', type: 'number' },
    { field: 'candidate', headerName: t('assesmentList.candidateColumn') },
    {
      field: 'score',
      headerName: t('assesmentList.scoreColumn'),
      type: 'number',
      editable: false,
    },
    {
      field: 'click',
      headerName: t('assesmentList.actionColumn'),
      type: 'click',
      renderCell: (params) => {
        return (
          <Button variant='contained' size='small' onClick={() => { startActiveView('assesment'); startSelectCandidate(params.row.idCandidate); startSetIdProcess(params.row.idAssesment) }} >
            {t('assesmentList.btnColumn')}
          </Button>
        )
      }
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
            project: item.project_name,
            idAssesment: item.id,
            idCandidate: item.candidate_id,
            candidate: item.candidate_name,
            score: item.score || t('assesmentList.pendingLabel'),
            action: `${item.id}`
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