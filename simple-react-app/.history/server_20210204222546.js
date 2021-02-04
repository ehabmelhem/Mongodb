const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send({messege:""})
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
