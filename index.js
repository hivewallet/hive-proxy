var express = require("express");
var request = require('request')
var app = express();

app.get('/*', function(req, res){
  var url = "https://blockchain.info" + req.url
  console.log(url)
  request.get({
    url: url
  }, function (error, response, body) {
    res.send(body);
  });
});

app.listen(process.env.PORT || 9009);
