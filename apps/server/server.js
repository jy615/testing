//* EXPRESS + Cors
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

//* dotenv
const dotenv = require("dotenv");
require("dotenv").config();

//* middleware
// app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin"); // update to match
  // the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* ROUTES
app.use("/patient", require("./routes/patientList"));
app.use("/auth", require("./routes/authJwt"));

app.listen(5000, () => {
  console.log("server is runnning on port 5000");
});
