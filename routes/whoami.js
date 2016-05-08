var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');
var requestIp = require('request-ip');

router.use(useragent.express());
router.use(requestIp.mw());


router.get('/', function(req, res, next) {
  console.log(req.ip);

  console.log(req.headers["accept-language"]);
  var templateObj = {
    // ipaddress: req.clientIp,
    ipaddress: req.ip,
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
