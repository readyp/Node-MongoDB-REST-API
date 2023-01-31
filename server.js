const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const router = require("./router/bootcamps");

// load vars in ./config/config.env
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(morgan("dev"));

// router
app.use("/api/v1/bootcamps", router);

// connect DB
// connectDB();

app.listen(
  PORT,
  console.log(`Server is in ${process.env.NODE_ENV} on PORT: ${PORT}`.yellow)
);
