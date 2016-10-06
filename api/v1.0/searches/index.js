var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to API');
});
router.get('/find', require('./services/find'));
router.get('/test', require('./services/test'));

module.exports = router;