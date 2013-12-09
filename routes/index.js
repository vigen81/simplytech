
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'The Big Bang > The Dawn of Man > Javascript' });
};