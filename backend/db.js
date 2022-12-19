const mongoos = require('mongoose');

const mongoURL = "mongodb://localhost:27017/Chat"

const connectToDB = () => {
    mongoos.connect(mongoURL, ()=>{
        console.log("Connected to MongoDB Successfully");
    })
}

module.exports = connectToDB;