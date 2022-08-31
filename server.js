//Variables
const express = require("express");
const marsMissions = require("./models/mars_index.js");
const app = express();
const port = 3000;


//routes

app.get("/", (req, res) => {
  res.send("Mars Mission initial route");
})

//Listener
app.listen(port, () => {
  console.log("Listening...port", port);
})