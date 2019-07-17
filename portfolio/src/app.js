const express = require("express");
const app   = express();
const port  = process.env.PORT || 4000;

// Set public folder as root
// app.use(express.static("../public/images"));

// Allow front-end access to node_modules folder
// app.use("app.js", express.static(`${__dirname}/node_modules/`));

app.get('/', function(req, res, next) {
  res.render('index');
});
// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("listening on %d", port);
});

// window.onload = function() {
//   Particles.init({
//     selector: '.background'
//   });
// };

module.exports = app;