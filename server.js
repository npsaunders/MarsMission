//Variables
const express = require("express");
const marsMissions = require("./models/mars_index.js");
const app = express();
const port = 3000;


//routes

app.get("/", (req, res) => {
  res.render("index.ejs", {
    missions: marsMissions,
  });
})

app.get("/marsmission/:index", (req, res) => {
  res.render("show.ejs", {
    missions: marsMissions[req.params.index],
  })
})

//Listener
app.listen(port, () => {
  console.log("Listening...port", port);
})