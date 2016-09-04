var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  
  var ipAddress = req.headers['x-forwarded-for'];
  var language = req.headers['accept-language'].split(',')[0];
  var userAgent = req.headers['user-agent'];
  var operatingSystem = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
  
  res.json({
    ipAddress,
    language,
    operatingSystem
  });
  
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
