module.exports = (app, passport) => {

    app.post('/signup', app.api.User.signup);
    app.post('/login', app.api.User.login);
    app.get('/profile', passport.authenticate('jwt', { session: false }),  app.api.User.Profile);
    app.get('/history', passport.authenticate('jwt', { session: false }), app.api.User.History);

}