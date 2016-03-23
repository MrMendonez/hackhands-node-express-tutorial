var express = require('express');
module.exports = function() {
  var app = express();

  // Handlebars setup
  var expressHandlebars = require('express-handlebars');
  app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
  }));
  app.set('view engine', 'handlebars');

  require('../routes/index.server.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};