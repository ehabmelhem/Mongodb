const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(
  "+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/mongodbexample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
app.get("/", (req, res) => {
  res.send({ Ok: true });
});

const port = 3003;
app.listen(port, () => {
  console.log("listen on port ", port);
});
