var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.ip);

  console.log(req.headers["accept-language"]);
  var templateObj = {
    ipaddress: fixIp(req.ip),
    language: fixLanguage(req.headers["accept-language"])
  };
  res.json(templateObj);

});

var fixIp = function(){
  return ip.split(':').reverse()[0];
};


var fixLanguage = function(lang){
  return lang.split(,)[0];
};

module.exports = router;
