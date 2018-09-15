module.exports = (app, mongoose) => {
    var config = {
        development: {
            mongoDbURL: "mongodb://localhost:27017/billfox"
        },
    };

    app.config = config['development'];

    require('./mongoose')(app, mongoose);

}