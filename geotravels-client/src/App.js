import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { getLocations } from './actions/locations'
import Map from './components/Map/Map'
import CreateLocation from './components/CreateLocation/CreateLocation'
import UploadForm from './components/UploadForm/UploadForm'
import travels from './images/travels.jpg';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Travels</Typography>
                <img className={classes.image} src={travels} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Map />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CreateLocation />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <UploadForm />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        
        </Container>
    );
}

export default App;