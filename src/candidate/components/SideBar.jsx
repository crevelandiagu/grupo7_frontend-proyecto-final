import { Box, Collapse, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Approval, ExpandLess, ExpandMore, Feed, School, StarBorder, TurnedInNot, Work } from '@mui/icons-material';
import { useState } from 'react';
import { useCandidateStore } from '../../hooks/useCandidateStore';



export const SideBar = ({ drawerWidth = 240 }) => {


    // const { startActiveView } = useCandidateStore();

    const startActiveView = (view) => () => {
        console.log(view)
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

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
                <List>
                    <ListItem key='Dashboard' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Dashboard' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={startActiveView('basic')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Feed />
                                </ListItemIcon>
                                <ListItemText primary="Basic" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={startActiveView('expirience')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Work />
                                </ListItemIcon>
                                <ListItemText primary="Experience" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={startActiveView('education')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <School />
                                </ListItemIcon>
                                <ListItemText primary="Education" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={startActiveView('certificates')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Approval />
                                </ListItemIcon>
                                <ListItemText primary="Certificates" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem key='Assesment' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary='Assesment' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Sign contract' disablePadding>
                        <ListItemButton>
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