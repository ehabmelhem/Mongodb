const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/newmongoose",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const first = mongoose.Schema({
  name: String,
});

const firstCollection = mongoose.model("firstcollection", first);

var add = new firstCollection({ name: "ehab" });
var add1 = new firstCollection({ name: "ehab1" });
var add2 = new firstCollection({ name: "ehab2" });
var add3 = new firstCollection({ name: "ehab3" });

fun


add.save().then(() => {
  console.log("add has been save to the db ");
});

app.get("/", (req, res) => {
  res.send({ Ok: true });
});

const port = 3003;
app.listen(port, () => {
  console.log("listen on port ", port);
});
