var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '4LL3N', id: '208417138' });
});

module.exports = router;
