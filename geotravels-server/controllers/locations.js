import LocationInfo from '../models/locationInfo.js';

export const getLocations = async (req, res) => {
    try {
        const locationInfo = await LocationInfo.find();
        res.status(200).json(locationInfo);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createLocation = async (req, res) => {
    const location = req.body;

    const newLocation = new LocationInfo(location);
    try {
        await newLocation.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}