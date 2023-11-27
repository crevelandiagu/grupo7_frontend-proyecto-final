import { AppBar, Grid, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import {
    AccountCircle,
    Language,
    LogoutOutlined,
    MenuOutlined,
    Notifications,
} from "@mui/icons-material";
import { blueTheme } from "../../theme/blueTheme";
import { useAuthStore } from "../../hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const NavBar = ({ drawerWidth = 240 }) => {

    const { startLogout } = useAuthStore();
    const { i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "EN" ? "ES" : "EN";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <ThemeProvider theme={blueTheme}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
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
                            onClick={handleChangeLanguage}
                            color="inherit"
                        >
                            <Language />
                            <Typography ml={1}>{language} </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Notifications />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
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
