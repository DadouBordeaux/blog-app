/*
  This file is the server
*/

'use strict'

// Set up ======================================================================
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let favicon = require('serve-favicon');
let methodOverride = require('method-override');
let logger = require('morgan');
let fs = require('fs');
let path = require('path');

let routes = require('./app/routes');

let app = express();

const ENV = require('./config/env')[process.env.NODE_ENV || 'development'];

// Set a static folder used by express. This folder contains our Angular application
// Take a look at: expressjs.com/en/starter/static-files.html
console.log(__dirname);
app.use(express.static(path.join(__dirname + '/angular-apps/public')));

// Set logs
// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
});
app.use(logger('dev', {
  stream: accessLogStream
}));

// https://www.npmjs.com/package/serve-favicon
// Uncomment after placing your favicon in /public:
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Set parser to get the body data request
// ref: https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

// Set parser for cookies, same logic as bodyParser but for cookies
// Has some extra options, take a look at: https://www.npmjs.com/package/cookie-parser
app.use(cookieParser());

// Override HTTP methods to support DELETE PUT, if client device doesn't support them
app.use(methodOverride('X-HTTP-Method-Override'));

//Load all api routes
app.use('/api', routes());

// Connect to mongodb
let mongoose = require('mongoose');
mongoose.connect(ENV.db);

// Make clean angular url works - urls without #!
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/angular-apps/public/index.html'));
});

// Catch 404 not found errors and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  console.log("Were here");
  err.status = 404;
  next(err);
})

// To better understand middlewares:
// http://expressjs.com/en/guide/writing-middleware.html
// And: http://expressjs.com/en/guide/using-middleware.html
// Middleware to catch all errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  console.log("Were also here");
  res.status(err.status || 500).send(err.message);
})

exports.startServer = (port) => {
  // Listening
  port = process.env.PORT || port;
  app.listen(port);
  console.log(`server listening on port ${port}`);

  // Intercept when application killed
  process.on('SIGINT', () => {
    console.log("\nStopping...");
    process.exit();
  });
}
