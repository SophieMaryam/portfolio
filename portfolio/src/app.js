const express = require("express");
const app   = express();
const particles = require('particles.js');
const port  = process.env.PORT || 4000;

// Set public folder as root
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("../public/images"));

// Allow front-end access to node_modules folder
// app.use("app.js", express.static(`${__dirname}/node_modules/`));


// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("listening on %d", port);
});


module.exports = app;