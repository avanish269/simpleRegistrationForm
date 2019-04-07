const express = require('express'); //exporting express module
const routes = require('./routes/index'); //exporting route files into the app

const app = express(); //Creating a new express app and assign it to app variable or in this case constant
app.use('/',routes);

module.exports = app;