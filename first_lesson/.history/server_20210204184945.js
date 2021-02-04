const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

const app = express();


const port = 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
