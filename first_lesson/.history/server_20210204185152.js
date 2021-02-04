const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send({ hello: "hello" });
});

const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
