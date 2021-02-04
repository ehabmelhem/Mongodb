const express = require("express");
const body_parser = require("body-parser");
const app = express();
app.post("/send-data", (req, res) => {
  const { name, age, url } = req.body;
  res.send({ name, age, url });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
