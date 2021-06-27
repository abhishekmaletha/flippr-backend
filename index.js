const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/emailRoutes");
require("dotenv").config();
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
});

// app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

module.exports = app;
