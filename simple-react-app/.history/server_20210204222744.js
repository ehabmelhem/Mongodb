const express = require("express");

const app = express();

app.get("/get", (req, res) => {
  res.send({ messege: "hi from server" });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
