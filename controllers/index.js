module.exports = (app, jwt) => {

    app.api = {};

    require('./users')(app, jwt);
}