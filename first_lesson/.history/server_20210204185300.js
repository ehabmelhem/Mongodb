const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/myfirstdb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send({ hello: "hello" });
});

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
