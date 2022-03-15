import * as api from '../api/server';
import UploadFiles from '../components/UploadFiles'

// Action Creators
export const getLocations = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLocations();
        dispatch({ type: 'FETCH_ALL', payload: data });
   
    } catch (error) {
        console.log(error.message);
    }
}

export const createLocation = (location) => async (dispatch) => {
    try {
        const { data } = await api.createLocation(location);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}
const files = UploadFiles;

export const sendFiles = (files) => async (dispatch) => {
    try {
        const { data } = await api.uploadFiles(UploadFiles);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}