var express = require("express");
var request = require('request')
var app = express();
var bodyParser = require('body-parser')

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
}

app.use(allowCrossDomain)
app.use(bodyParser.json())

app.post('/', function(req, res){
  console.log(req.query.url)
  console.log(req.body.hex)

  request({
    method: 'POST',
    uri: req.query.url,
    body: JSON.stringify({hex: req.body.hex})
  }, function(err, response, body){
    console.log(response.statusCode)
    console.log(body)
    res.statusCode = response.statusCode
    res.send(body);
  })
});

app.listen(process.env.PORT || 9009);
