const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectToDB = require("./db");

const PORT = 5000;

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

connectToDB();

app.use('/api/auth', require('./routes/auth'))
app.use('/api/message', require('./routes/message'))

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server is running at Port: ${process.env.PORT}`);
});