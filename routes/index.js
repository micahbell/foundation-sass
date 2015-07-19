var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/glazebook', function(req, res, next) {
  res.render('glazebook');
});

router.get('/', function(req, res, next) {
  res.redirect('glazebook');
});

module.exports = router;
