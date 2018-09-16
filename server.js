const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const app = express();

const port = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({ extended: true }));

// Import all routes in the main file
require('./config/config.js')(app, mongoose);
require('./utils/helper')(app);
require('./models')(app, mongoose);
require('./controllers')(app, jwt);
require('./routes.js')(app, passport);
require('./config/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());


app.listen(port, () => {
    console.log('We are on live on ' + port);
});