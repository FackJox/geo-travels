require('dotenv').config()
const mongoUser = process.env.DB_USER
const mongoPass = process.env.DB_PASS

export default {
    url: `mongodb+srv://${mongoUser}:${mongoPass}@locationscluster.8kdff.mongodb.net/`,
    database: "locations_files_db",
    imBucket: "photos",
}