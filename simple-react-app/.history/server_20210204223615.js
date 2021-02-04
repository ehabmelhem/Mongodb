const express = require("express");

const app = express();

app.post("/send-data",(req,res)=>{
    const {}
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port ", port);
});
