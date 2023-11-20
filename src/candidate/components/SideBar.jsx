import { Box, Collapse, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Approval, ExpandLess, ExpandMore, Feed, School, TurnedInNot, Work } from '@mui/icons-material';
import { useState } from 'react';
import { useCandidateStore } from '../../hooks/useCandidateStore';



export const SideBar = ({ drawerWidth = 240 }) => {

    const { startActiveView } = useCandidateStore();

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const items = [
        {
            "name": "Dashboard",
            view: 'dashboard'

        },
        {
            "name": "Profile",
            view: 'basic',
            subMenu: ['basic', 'experience', 'education', 'certificates']
        },
        {
            "name": "Assesment",
            view: 'project'
        },
        {
            "name": "Sign contract",
            view: 'assesment'
        },
        {
            "name": "Interview",
            view: 'interview'
        },
        {
            "name": "Sign contract",
            view: 'signcontract'
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, drawerWidth, bgcolor: 'primary.main', color: 'white' },
                }}
            >
                <Toolbar sx={{ bgcolor: 'primary.main' }} >
                    <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, color: 'white' }} >
                        ABC Jobs
                    </Typography>
                </Toolbar>
                <List>
                    {/* {
                        items.map(item => (
                            <ListItemButton key={item.name} onClick={() => { startActiveView(item.view) }}>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        ))
                    } */}
                    <ListItem key='Dashboard' disablePadding sx={{ bgcolor: 'primary.main', color: 'white' }}>
                        <ListItemButton onClick={() => { startActiveView('dashboard') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Dashboard' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton onClick={handleClick} >
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('basic') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Feed />
                                </ListItemIcon>
                                <ListItemText primary="Basic" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('experience') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Work />
                                </ListItemIcon>
                                <ListItemText primary="Experience" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('education') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <School />
                                </ListItemIcon>
                                <ListItemText primary="Education" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('certificates') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Approval />
                                </ListItemIcon>
                                <ListItemText primary="Certificates" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem key='Interview' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('interview') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Interview' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Assesment' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('assesment') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Assesment' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Sign contract' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('signcontract') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Sign contract' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    )
}