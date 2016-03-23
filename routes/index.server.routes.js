module.exports = function(app) {
  var controller = require('../controllers/index.server.controller.js');
  app.get('/', controller.home);
};