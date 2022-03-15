import React, { useState } from 'react';
import useStyles from './styles';
// import FileBase from 'react-file-base64'
import {  TextField, Button, Typography, Paper  } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createLocation } from '../../actions/locations';

const CreateLocation = () => {
    const [locationData, setLocationData] = useState({creator: '', name: '', coordinates: '', description: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createLocation(locationData));
    }
    const clear = () => {
        
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off"noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Location</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={locationData.creator}onChange={(e) => setLocationData({ ...locationData, creator: e.target.value })} />
            <TextField name="name" variant="outlined" label="Name" fullWidth value={locationData.name}onChange={(e) => setLocationData({ ...locationData, name: e.target.value })} />
            <TextField name="coordinates" variant="outlined" label="Coordinates" fullWidth value={locationData.coordinates}onChange={(e) => setLocationData({ ...locationData, coordinates: e.target.value })} />
            <TextField name="description" variant="outlined" label="Description" fullWidth value={locationData.description}onChange={(e) => setLocationData({ ...locationData, description: e.target.value })} />
            {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setLocationData({ ... locationData, selectedFile: base64})/></div> */}
            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>             
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>             
            </form>       
        </Paper>
    );
}

export default CreateLocation;
