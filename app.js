const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const app = express();


app.use(function (req, res, next) {
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  next();
});


app.use(express.static(path.join(__dirname, '/dist/site')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/site/index.html'))
});

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Bushfire Server running on', port);
});
