const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const rfs =require("rotating-file-stream");
const connectDB = require("./config/db");

// app iin tohirgoog achaallah 
dotenv.config({path:'./config/config.env'});

connectDB();

const morgan = require("morgan");
const logger = require('./middleware/logger');
// Router oruulj ireh 
const categoriesRoutes = require("./routes/categories");

//create a write stream 
var accessLogStream = rfs.createStream("access.log", {
    interval: "1d", // route daily
    path: path.join(__dirname, "log"),
});

const app = express();
// body parser
app.use(express.json());

app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));

app.use('/api/v1/categories',categoriesRoutes);

const server = app.listen(
    process.env.PORT, console.log(`Express server ${process.env.PORT} deer aslaa`)
    );
    process.on("unhandledRejection", (err , promise) => {
        console.log(`aldaa garlaa:${err.message}`);
        server.close(() => {
            process.exit(1);
        });
    });
