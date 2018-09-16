module.exports = (app, mongoose) => {
    var config = {
        development: {
            // mongoDbURL: "mongodb://localhost:27017/billfox"
            mongoDbURL: "mongodb://billfox:billfox1234@ds139904.mlab.com:39904/billfox"
        },
    };

    app.config = config['development'];

    require('./mongoose')(app, mongoose);

}