const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/emailRoutes");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

module.exports = app;
