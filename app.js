const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Create a new Express app
const app = express();

// Set up Auth0 configuration
const authConfig = {
  domain: "bnhcrclfmc.au.auth0.com",
  audience: "https://www.bushfire.school/protected"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from bnhcrclfmc.au.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

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

// Define an endpoint that must be called with an access token
app.get("/ena.html", checkJwt, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/site/assets/ena.html'))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/site/index.html'))
});

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Bushfire Server running on', port);
});
