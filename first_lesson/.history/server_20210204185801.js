const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/myfirstdblesson",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const firstsechma = new mongoose.Schema({
  name: String,
});

const firstCollection=mongoose.model("firstCollection")

app.get("/", (req, res) => {
  res.send({ hello: "hello" });
});

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
