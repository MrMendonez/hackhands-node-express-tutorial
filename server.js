var PORT = 1337;
var express = require('./config/express');
var app = express();

module.exports = app;

app.listen(PORT, function() {
  console.log("Listening on PORT: ", PORT);
});