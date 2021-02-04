const express = require("express");
const body_parser = require("body-parser");
const app = express();
app.use(body_parser);
app.post("/send-data", (req, res) => {
  const { name, age, url } = req.body;
  
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
