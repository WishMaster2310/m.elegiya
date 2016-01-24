var express = require('express');
var router = express.Router();
var path = require('path');
var baseData = require(path.join(__dirname, '../datasource/base.json'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { base: baseData });
});
router.get('/category', function(req, res, next) {
  res.render('category', { base: baseData });
});

router.get('/services', function(req, res, next) {
  res.render('services', { base: baseData });
});
module.exports = router;
