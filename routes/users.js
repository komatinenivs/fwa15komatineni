var express = require('express');
var router = express.Router();
var beta = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  beta = beta+1;
  res.send(`User accesses are: ${beta}`);
  
});

module.exports = router;
