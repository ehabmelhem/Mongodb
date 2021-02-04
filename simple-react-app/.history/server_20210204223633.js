
const express = require("express");

const app = express();
app.use()
app.post("/send-data", (req, res) => {
  const { name, age, url } = req.body;
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
