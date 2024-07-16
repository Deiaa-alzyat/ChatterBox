// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// creating an express object
const app = express();

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());

// Parse incoming JSON requests and make the data available in req.body
app.use(express.json());

// Start the server and listen on the port specified in the environment variable PORT
const server = app.listen(process.env.PORT, () =>{
  console.log(`Server started on ${process.env.PORT}`)
});
