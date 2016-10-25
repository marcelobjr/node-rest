var express    = require('express');
var http       = require('http');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var multiparty = require('connect-multiparty');
var tmp = require('tmp');

var jwt = require("jwt-simple");
var auth = require("./auth.js")();
var users = require("./users.js");
var cfg = require("./config.js");

var app        = express();
var server     = http.createServer(app);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth.initialize());

// database
var mongoDb = mongoose.connect('mongodb://127.0.0.1/ecommerce').connection;

mongoDb.on('connected', function() {
   console.log('MongoDB is connected');
});

mongoDb.on('error', function() {
   console.log('MongoDB ERROR');
});

// add routes
require('./routes')(app);

app.post("/token", function(req, res) {
	console.log(req.body);
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      var payload = {id: user.id};
      var token = jwt.encode(payload, cfg.jwtSecret);
      res.json({token: token});
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.get("/user", auth.authenticate(), function(req, res) {
  return res.status(200)
                      .json({
                          status: true,
                          id: req.user.id,
                          data  : users[req.user.id - 1]
                      });
});

// fire up express
server.listen(3000, function() {
   console.log('Express has been started');
});
