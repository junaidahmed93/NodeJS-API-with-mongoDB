exports = module.exports = (app, mongoose) => {
    mongoose.connect(app.config.mongoDbURL, { useNewUrlParser: true });
    app.db = mongoose.connection;
    app.db.on('error', console.error.bind(console, 'connection error:'));
    app.db.once('open', function () {
        // Wait for the database connection to establish, then start the app.
        console.log('CONNECTION OPENED!!')
    });
}