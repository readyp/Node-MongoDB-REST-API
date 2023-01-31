const express = require("express");
const dotenv = require("dotenv");

// load vars in ./config/config.env
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is in ${process.env.NODE_ENV} on PORT: ${PORT}`)
);
