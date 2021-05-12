const express = require('express');
const router = express.Router();

//GET home page. 
router.get('/', function(req, res) {
  res.render('index');
});


/* GET Simples. */
router.get('/model', function(req, res) {
  res.render('model');
});

router.get('/first_model', function(req, res) {
  res.render('first_model');
});

router.get('/model', function(req, res) {
  res.render('model');
});

/* GET New. */
router.get('/new', function(req, res) {
  res.render('new');
});

router.get('/geometrics', function(req, res) {
  res.render('geometrics');
});
module.exports = router;
