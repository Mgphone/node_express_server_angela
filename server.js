//jshint esversion6
const express = require("express");
const app = express();
app.get("/", function(req, res) {
  res.send('<h1>Hello, World');
});
app.get("/contact", function(req, res) {
  res.send('Contact mgphone@gmail.com');
});
app.get("/about", function(req, res) {
  res.send('This is the testing website of Express NPM nodejs');
});
app.get("/hobby",function(req,res){
  res.send("<ol><li>coffee</li><li>code</li></ol>")
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
