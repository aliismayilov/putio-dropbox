var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post(process.env.CALLBACK_PATH || '/callback', function (req, res) {
  console.log(req.body);
  res.send();
});

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;

  console.log('The app is listening on port %s', port);
});
