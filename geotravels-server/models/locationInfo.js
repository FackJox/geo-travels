import mongoose from 'mongoose';

const locationSchema = mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    coordinates: String,
    pictures: [{    
        id: Number,
        fileLocation: String,
        uploader: String,
        dateUpload: {
            type: Date,
            default: new Date()
    }}],
    selectedFile: String,
    dateCreated: {
        type: Date,
        default: new Date()
    },
});

const LocationInfo = mongoose.model('LocationInfo', locationSchema);

export default LocationInfo