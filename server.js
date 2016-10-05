'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var app = express();
var port = process.env.PORT;

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(port, function () {
  console.log('Node.js listening on port 3000...');
});
