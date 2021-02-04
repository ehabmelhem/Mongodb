const express = require("express");

const app = express();

app.post("/send-data")

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
