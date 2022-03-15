require('dotenv').config()
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import initRoutes from './routes/locations.js';

// import locationsRoutes from './routes/locations.js';

const app = express();
const mongoUser = process.env.DB_USER
const mongoPass = process.env.DB_PASS

// app.use(bodyParser.json({ limit: "300mb", extended: true }))
// app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }))
app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

// app.use('/locations', locationsRoutes);
// const CONNECTION_URL = `mongodb+srv://${mongoUser}:${mongoUser}@locationscluster.8kdff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

