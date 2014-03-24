var express = require("express");
var request = require('request')
var app = express();

app.use(express.urlencoded())

app.get('/*', function(req, res){
  var url = "https://blockchain.info" + req.url
  console.log(url)
  request.get({
    url: url
  }, function (error, response, body) {
    console.log(response.statusCode)
    res.statusCode = response.statusCode
    res.send(body);
  });
});

app.post('/pushtx', function(req, res){
  var url = "https://blockchain.info" + req.url
  console.log(url)
  request.post(url, function(error, response, body){
    console.log(response.statusCode)
    res.statusCode = response.statusCode
    res.send(body);
  }).form({tx: req.body.tx})
});

app.listen(process.env.PORT || 9009);
