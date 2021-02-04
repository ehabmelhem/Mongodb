const express = require("express");
const app = express();
const body_parser = require("body-parser");
app.use(body_parser());

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/simple_app_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const cat = new mongoose.Schema({
  name: String,
  age: Number,
  src: String,
});

const catModel = mongoose.model("catModel", cat);

app.post("/send-data", (req, res) => {
  const { name, age, url } = req.body;
  var add = new catModel({ name: name, age: age, src: url });
  add.save().then(() => {
    console.log("new elemnt in the db");
  });
  res.send({ name, age, url });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
