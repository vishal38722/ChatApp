const express = require('express');
// const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Message = require('../models/Message')

// ROUTE 3 : Get loggedIn user details using POST method : api/auth/getuser - Login required
router.post('/addMessage', async (req, res) => {

  try {
      const {from, to , message} = req.body;
      const data = await Message.create({
        message : {text : message},
        users : [from, to],
        sender : from
      });
      if(data) return res.json({msg : "Message added successfully to the database."});
      else return res.json({msg : "Failed to add message to the database"});
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


router.post('/getMessage', async (req, res) => {
  try {
    const { from, to } = req.body;

    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        forUser: msg.sender.toString() === to,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
});

module.exports = router