const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectdb = require("./connectdb/connectdb");
const cors = require("cors");
const router = require("./routes/users");
connectdb();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, (err) => {
  err
    ? console.log("err", err)
    : console.log("server is running on port", port);
});
