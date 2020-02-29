const express = require('express');
const router = express.Router();
const { execSync } = require('child_process');

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({status:"success"}));
});

router.get('/portfolio/build/passed', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const stdout = execSync('ls');
  res.send(JSON.stringify({status:"Build Passed"}));
});

router.get('*', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.send("Not Found");
});

module.exports = router;

// stderr is sent to stdout of parent process
// you can set options.stdio if you want it to go elsewhere
console.error('error', child.error);
console.log('stdout ', child.stdout);
console.error('stderr ', child.stderr);