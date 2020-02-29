# Reactions.js
Reactions is a webhook API Server written in Node JS and runs on [Express](https://github.com/expressjs/express).
 
## Installation
**Clone using:**
```shell
git clone https://github.com/funkybunch/Reactions.git
```
 
**Install**
```shell
npm install
```

**Run**
```shell
npm start
```

## Example Configuration
The server runs on port 3001.  This can be modified to fit your needs under `./bin/api`.

This is really a boilerplate to let you do whatever you need to on the backend, but includes an example on how to run `shell` scripts on your server upon calling an API endpoint.

In this example, the `./scripts/test.sh` script will be run when there is a `GET` request to `localhost:3001/test`.  The routers to configure these endpoints are located at `./routes/api.js`.

The router uses standard [ExpressJS](https://github.com/expressjs/express) syntax.
```javascript
router.get('/test', function(req, res, next) {
  // Set Output type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Create `output` variable
  let output = "";

  // Execute test script in `../scripts` directory
  exec(path.resolve(__dirname, '..') + '/scripts/test.sh', (err, stdout, stderr) => {
    if (err) {
      // If error
      output = err;
    } else {
      // Shell output if successful
      output = stdout;
    }
    // Send response as JSON object
    res.send(JSON.stringify({status: output}));
  });
});
```

If you use a `shell` script, you will need to make it executable, otherwise you will receive an error.
```shell
chmod +x [file]
```