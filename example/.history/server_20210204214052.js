const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
app.get("/", (req, res) => {
  res.send({ Ok: true });
});

const port = 3003;
app.listen(port, () => {
  console.log("listen on port ", port);
});
