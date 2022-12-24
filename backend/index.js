const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectToDB = require("./db");
const socket = require('socket.io')

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

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        Credentials: true
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve", data.msg);
        }
    });
});