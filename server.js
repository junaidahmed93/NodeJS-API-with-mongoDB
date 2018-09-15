const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

// Import all routes in the main file
require('./config/config.js')(app, mongoose);
require('./models')(app, mongoose);
require('./controllers')(app);
require('./routes.js')(app, {});


app.listen(port, () => {
    console.log('We are on live on ' + port);
});