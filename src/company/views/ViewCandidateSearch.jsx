import { Button, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import axios from "axios";
import { useState } from "react";




const ListCandidates = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCandidates = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get("api-search-candidate")
            setData(res.data)
            
        } catch (error) {
            console.error("Error fetching data", error)
            
        } finally {
            setIsLoading(false)
        }
    }

    
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

export default ListCandidates;