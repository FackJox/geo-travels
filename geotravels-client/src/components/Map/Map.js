import React from 'react';
import { useSelector } from 'react-redux';

import Location from './Location/Location.js'
import useStyles from './styles';

const Map = () => {
    const locations = useSelector((state) => state.locations);
    const classes = useStyles();
    
    console.log(locations);
    
    return (
        <>
        <h1>MAP</h1>
        <Location />
        <Location />
        </>
    );
}

export default Map;