var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');
/* GET users listing. */

router.use(useragent.express());

router.get('/', function(req, res, next) {
  console.log(req.ip);

  console.log(req.headers["accept-language"]);
  var templateObj = {
    ipaddress: fixIp(req.ip),
    language: fixLanguage(req.headers["accept-language"]),
    software: req.useragent.os
  };
  res.json(templateObj);

});

var fixIp = function(ip){
  return ip.split(':').reverse()[0];
};


var fixLanguage = function(lang){
  return lang.split(',')[0];
};

module.exports = router;
