var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.ip);
  //console.log(req.headers['x-forwarded-for']);
  //console.log(req.conection);
  res.json(req.ip);

});

module.exports = router;
