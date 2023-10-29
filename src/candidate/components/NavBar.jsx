import { AppBar, Grid, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import {
    AccountCircle,
    Language,
    LogoutOutlined,
    MenuOutlined,
    Notifications,
} from "@mui/icons-material";

import { blueTheme } from "../../theme/blueTheme";
import { useAuthStore } from "../../hooks";

export const NavBar = ({ drawerWidth = 240 }) => {

    const { startLogout } = useAuthStore();

    return (
    <ThemeProvider theme={blueTheme}>
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px`},
                bgcolor: 'primary.main'
            }}

        >
            <Toolbar >
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleM
                        color="inherit"
                    >
                        <Language />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleM
                        color="inherit"
                    >
                        <Notifications />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleM
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={startLogout}
                        color="inherit"
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    );
};
