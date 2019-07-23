const express = require("express");
const app   = express();
const path = require('path');
const port  = process.env.PORT || 4000;

var bodyParser = require('body-parser');
app.use('/', bodyParser.urlencoded({extended:true}));

// Set src folder as root
app.use(express.static(__dirname + "/../public"));

app.get("/", (req, res, next) => {
  res.sendFile("src/views/index.html");
});

app.post("/form", (req, res, next) => {

})
// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("listening on %d", port);
});

module.exports = app;