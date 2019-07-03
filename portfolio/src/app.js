import 'bootstrap';
var express = require("express");

const app   = express();
const port  = process.env.PORT || 3000;


// Set public folder as root
app.use(express.static("src"));

// Allow front-end access to node_modules folder
app.use("/scripts", express.static(`${__dirname}/node_modules/`));

// Require jsdom and jquery
require("jsdom").env("", function(err, window) {
  if (err) {
      console.error(err);
      return;
  }

  var $ = require("jquery")(window);
});

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("listening on %d", port);
});
