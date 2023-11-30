import { Box, Collapse, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Approval, ExpandLess, ExpandMore, Feed, School, TurnedInNot, Work } from '@mui/icons-material';
import { useState } from 'react';
import { useCandidateStore } from '../../hooks/useCandidateStore';
import { useTranslation } from 'react-i18next';



export const SideBar = ({ drawerWidth = 240 }) => {

    const { startActiveView } = useCandidateStore();
    const { t } = useTranslation();

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
                    <ListItem key='Dashboard' disablePadding sx={{ bgcolor: 'primary.main', color: 'white' }}>
                        <ListItemButton onClick={() => { startActiveView('dashboard') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={t('sidebar.dashboard')} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton onClick={handleClick} >
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <ListItemText primary={t('sidebar.profile')} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('basic') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Feed />
                                </ListItemIcon>
                                <ListItemText primary={t('sidebar.basic')} />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('experience') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Work />
                                </ListItemIcon>
                                <ListItemText primary={t('sidebar.experience')} />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('education') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <School />
                                </ListItemIcon>
                                <ListItemText primary={t('sidebar.education')} />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => { startActiveView('certificates') }} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Approval />
                                </ListItemIcon>
                                <ListItemText primary={t('sidebar.certificates')} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem key='Interview' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('interview') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={t('sidebar.interview')} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='List Assesment' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('assesmentList') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={t('sidebar.assesmentList')} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Sign contract' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('signcontract') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={t('sidebar.signContract')} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Performance List' disablePadding>
                        <ListItemButton onClick={() => { startActiveView('performanceList') }}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={t('sidebar.performanceList')} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    )
}