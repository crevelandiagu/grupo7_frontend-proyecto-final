import { useState } from 'react';

import '../../i18n.js';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';



export const CompanyDashboard = () => {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3 }}
    >
      <Grid item xs={12}>
        <Typography color="primary" variant='h5'>{t('headerTitle')}</Typography>
        <StarOutline sx={{ fontSize: 100, color: 'prumary' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary" variant='h5'>****</Typography>
      </Grid>
    </Grid>
  )
}