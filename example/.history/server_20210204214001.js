const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/",(req,res)=>{
    res.send({})
})

const port = 3003;
app.listen(port, () => {
  console.log("listen on port ", port);
});
