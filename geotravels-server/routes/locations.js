import express from 'express';
import { getLocations, createLocation } from '../controllers/locations.js'
import homeController from '../controllers/home.js'
import uploadController from '../controllers/upload.js'

const router = express.Router()

let routes = app => {
    router.get("/", homeController.getHome);
    router.post("/upload", uploadController.uploadFiles);
    router.get("/files", uploadController.getListFiles);
    router.get("/files/:name", uploadController.download);
    return app.use("/", router);
  };

export default routes;