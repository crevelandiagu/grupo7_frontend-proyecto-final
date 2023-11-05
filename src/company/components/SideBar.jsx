import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const SideBar = ({ drawerWidth = 240 }) => {

    const items = [
        {
        "name": "Dashboard",
        "to": "/company/dashboard"
        },
        {
        "name": "Search candidate",
        "to": "/company/search"
        },
        {
        "name": "Project",
        "to": "/company/project"
        },
        {
        "name": "Assesment",
        "to": "/company/assesment"
        },
        {
        "name": "Interview",
        "to": "/company/interview"
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar sx={{ bgcolor: 'primary.main' }} >
                    <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, color: 'white' }} >
                        ABC Jobs
                    </Typography>
                </Toolbar>


                <List sx={{ bgcolor: 'primary.main', color: 'white' }} >

                    {
                        items.map(item => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton component={RouterLink} to={item.to}>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={item.name} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}