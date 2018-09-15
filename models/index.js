module.exports = (app, mongoose) => {
    require('./user')(app, mongoose);
};