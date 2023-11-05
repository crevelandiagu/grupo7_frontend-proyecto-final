import { Button, Divider, Grid, List, ListItem, ListItemButton, ListItemText, TextField, ThemeProvider, createTheme } from "@mui/material"

const defaultTheme = createTheme();


const ListCandidates = () => {
    
    return (
            <List>
                <ListItem disablePadding>
                <Grid container spacing={5} alignItems="center">
                    <Grid item>
                            <ListItemText 
                            primary="nombre candidato fffddddffddd"
                            secondary="descripcion candidato" />
                    </Grid>
                    <Grid item>
                        <Button
                             type="submit"
                             fullWidth
                             variant="contained"
                             sx={{ mt: 3, mb: 2 }}
                            >
                                Contact
                            
                        </Button>
                    </Grid>
                </Grid>
                </ListItem>
                <Divider/>


            </List>
    );

}

export default ListCandidates