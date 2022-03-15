import axios from 'axios'

const url = 'http://localhost:5000/locations';

export const fetchLocations = () => axios.get(url);
export const createLocation = (newLocation) => axios.post(url, )

export const uploadFiles = () => axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
});