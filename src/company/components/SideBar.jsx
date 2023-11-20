import { Box, Drawer,List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useCompanyStore } from '../../hooks';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { startActiveView } = useCompanyStore();

    const items = [
        {
            "name": "Dashboard",
            "to": "/company/dashboard",
            view: 'dashboard'
        
        },
        {
            "name": "Search candidate",
            "to": "/company/search",
            view: 'search'
        },
        {
            "name": "Create Account",
            "to": "/company/interview",
            view: 'CreateEmployeeAccount'
        },
        {
            "name": "Project",
            "to": "/company/project",
            view: 'project',
        },
        {
            "name": "Assing Project",
            "to": "/company/project",
            view: 'assingproject',
        },
        {
            "name": "Assesment",
            "to": "/company/assesment",
            view: 'assesment'
        },
        {
            "name": "Interview",
            "to": "/company/interview",
            view: 'interview'
        },
        {
            "name": "Evaluate Interview",
            "to": "/company/interview",
            view: 'listInterview'
        },
        {
            "name": "Assign Evaluator",
            "to": "/company/interview",
            view: 'assignEvaluator'
        },
        {
            "name": "Performance",
            "to": "/company/performance",
            view: 'performance'
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