import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import UploadFiles from '../UploadFiles/UploadFiles'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { sendFiles } from '../../actions/locations';

const UploadForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(sendFiles(UploadFiles));
    }

    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete="off"
                noValidate 
                className={classes.form} 
                onSubmit={handleSubmit}>
            <Typography variant="h6"> Uploading Pictures</Typography>
            </form>
           
        
        <div className="container">
        <div className="mg20">
          <Typography variant="h5">Material UI Image Upload with Preview</Typography>
        </div>
        <UploadFiles />
      </div>
      </Paper>
    );
}

export default UploadForm;