const express = require('express');
const router = express.Router();
const { execSync } = require('child_process');

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({status:"it works!"}));
});

router.get('*', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.send("Not Found");
});

module.exports = router;
