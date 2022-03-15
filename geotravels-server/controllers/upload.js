import upload from '../middleware/upload.js';
import dbConfig from '../config/db.js';
import mongodb from 'mongodb';

const url = dbConfig.url;
const MongoClient = mongodb.MongoClient;
const GridFSBucket = mongodb.GridFSBucket;
const baseUrl = "http://localhost:8080/files/";
const mongoClient = new MongoClient(url);
const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.file);
    if (req.files.length <= 0) {
        return res
            .status(400)
            .send({ message: "You must select at least 1 file."});
    }
    return res.status(200).send({
      message: "Files have been uploaded.",
    });
  } catch (error) {
    console.log(error);
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
        return res.status(400).send({
            message: "Too many files to upload.",
        });
    }
    return res.status(500).send({
      message: `Error when trying upload images: ${error}`,
    });
  }
};
const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    const images = database.collection(dbConfig.imgBucket + ".files");
    const cursor = images.find({});
    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: "No files found!",
      });
    }
    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename,
      });
    });
    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};
const download = async (req, res) => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db(dbConfig.database);
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });
    let downloadStream = bucket.openDownloadStreamByName(req.params.name);
    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });
    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image!" });
    });
    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};
export default { uploadFiles, getListFiles, download };
