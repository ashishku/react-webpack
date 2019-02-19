const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

const app = express();

app.use(morgan('combined'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use('/api', jwt());

// api routes
app.use('/api/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 4000;
const host = process.env.IP || '0.0.0.0';
const server = app.listen(port, host, function() {
  console.log(`Server listening on port ${host}:${port}`);
});
