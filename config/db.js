const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection Succesfull");
    })
    .catch((error) => {
        console.log("Issue in DB conection");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;