module.exports = (app, mongoose) => {
    var config = {
        development: {
            // mongoDbURL: "mongodb://localhost:27017/billfox"
            mongoDbURL: "mongodb://brian:teleCalmTestPassword@ds013599.mlab.com:13599/telecalm"
        },
    };

    app.config = config['development'];

    require('./mongoose')(app, mongoose);

}