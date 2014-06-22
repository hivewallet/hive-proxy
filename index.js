var express = require("express")
var request = require('request')
var morgan  = require('morgan')
var bodyParser = require('body-parser')

var app = express()

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGINS)
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
}

app.use(morgan())
app.use(allowCrossDomain)
app.use(bodyParser.json())

app.post('/', function(req, res){
  request({
    method: 'POST',
    uri: req.query.url,
    body: JSON.stringify({hex: req.body.hex}),
    header: { "Content-Type": "application/json" }
  }, function(err, response, body){
    res.statusCode = response.statusCode
    res.send(body);
  })
});

app.listen(process.env.PORT || 9009);
