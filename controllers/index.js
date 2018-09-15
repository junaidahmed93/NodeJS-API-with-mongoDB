module.exports = (app) => {

    app.api = {};

    require('./users')(app);
}