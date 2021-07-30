const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("conected to database"))
    .catch((err) => console.log("failed to connect"));
};
module.exports = connectdb;
