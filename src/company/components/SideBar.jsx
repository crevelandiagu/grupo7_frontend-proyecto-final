import { Box, Drawer,List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useCompanyStore } from '../../hooks';
import { useTranslation } from 'react-i18next';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { startActiveView } = useCompanyStore();
    const { t } = useTranslation();

    const items = [
        {   
            "name": t('sidebar.dashboard'),
            view: 'dashboard'
        
        },
        {
            "name": t('sidebar.search'),
            view: 'search'
        },
        {
            "name": t('sidebar.createAccount'),
            view: 'CreateEmployeeAccount'
        },
        {
            "name": t('sidebar.project'),
            view: 'project',
        },
        {
            "name": t('sidebar.assignProject'),
            view: 'assignproject',
        },
        {
            "name": t('sidebar.assesmentList'),
            view: 'assesmentList'
        },
        {
            "name": t('sidebar.Interview'),
            view: 'interview'
        },
        {
            "name": t('sidebar.listInterview'),
            view: 'listInterview'
        },
        {
            "name": t('sidebar.assignEvaluator'),
            view: 'assignEvaluator'
        },
        {
            "name": t('sidebar.contractList'),
            view: 'contractList'
        },
        {
            "name": t('sidebar.performanceList'),
            view: 'performanceList'
        },       
    ]

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'primary.main'},

                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, color: 'white' }} >
                        ABC Jobs
                    </Typography>
                </Toolbar>


                <List sx={{ bgcolor: 'primary.main', color: 'white' }} >

                    {
                        items.map(item => (
                            <ListItemButton key={item.name} onClick={() => {startActiveView(item.view)}}>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}