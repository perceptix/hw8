var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.get('/', function (req, res) {
    res.send('GET index page.');
});

app.POST('/', function (req, res) {
    res.send('POST index page.');
});

app.listen(port);
console.log('The server is listening to ' + port);

app.use('/tweets', function (req, res, next) {
  console.log('these are your tweets');
  next();
});

app.use('/user', function (req, res, next) {
  console.log('this is your user account');
  next();
});

router.get('/?user=rob', function(req, res) {
    res.send('logged in as rob');
});

module.exports = router;