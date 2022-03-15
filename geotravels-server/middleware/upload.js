import util from 'util';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dbConfig from '../config/db.js'

let storage = new GridFsStorage({
    url: dbConfig.url + dbConfig.database,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-LocUpload-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: dbConfig.imBucket,
            filename: `${Date.now()}-LocUpload-${file.originalname}`
        };
    }
});
let uploadFiles = multer({ storage: storage }).array("file", 100);
let uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware
