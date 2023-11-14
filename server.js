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

app.get("/about", function(req,res){
  res.sendFile("./about.html", {root: __dirname});
});

app.get("/contact", function(req,res){
  res.sendFile("./contact.html", {root: __dirname});
});

app.use(function(req,res,next){
  res.status(404).sendFile("./404.html", {root: __dirname});
});


