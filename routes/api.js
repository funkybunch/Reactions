const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
let path = require('path');

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({status:"it works!"}));
});

router.get('/test', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  let output = "";
  exec(path.resolve(__dirname, '..') + '/scripts/test.sh', (err, stdout, stderr) => {
    if (err) {
      output = err;
    } else {
      output = stdout;
    }
    res.send(JSON.stringify({status: output}));
  });
});

router.get('*', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.send("Not Found");
});

module.exports = router;
