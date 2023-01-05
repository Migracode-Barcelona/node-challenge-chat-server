const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

var id = 1;
const welcomeMessage = {
  id: id,
  from: "Ali",
  text: "Welcome to MigraCode chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

//START OF YOUR CODE...


//...END OF YOUR CODE

module.exports = app