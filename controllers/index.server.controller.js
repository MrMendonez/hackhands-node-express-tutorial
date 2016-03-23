exports.home = function(req, res) {
  res.render('index', {
    title: 'Howdy World'
  });
};