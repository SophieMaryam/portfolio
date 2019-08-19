const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/allBlogs", (req, res) => {
  res.sendFile(__dirname + "/views/blogs.html");
});

app.get("/bootstrapProjects", (req, res) => {
  res.sendFile(__dirname + "/views/bootstrap.html");
});

app.get("/healthcheck", (req, res) => {
  res.send("I'm Okay!");
});

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("Listening on %d", port);
});

module.exports = app;