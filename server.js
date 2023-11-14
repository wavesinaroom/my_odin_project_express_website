const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})

app.get("/", function(req,res){
  res.sendFile("./index.html", {root: __dirname});
});
