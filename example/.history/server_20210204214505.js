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

const first=mongoose.Schema()

app.get("/", (req, res) => {
  res.send({ Ok: true });
});

const port = 3003;
app.listen(port, () => {
  console.log("listen on port ", port);
});
