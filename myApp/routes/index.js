var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/* GET Principal. */
router.get('/', function(req, res, next) {
  res.render('principal');
});

/* GET Simples. */
router.get('/simples', function(req, res, next) {
  res.render('simples');
});

/* GET New. */
router.get('/new', function(req, res, next) {
  res.render('curriculonew');
});
module.exports = router;
