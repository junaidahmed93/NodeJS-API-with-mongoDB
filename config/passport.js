const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (app,passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = app.constants.JWT_Secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        app.db.models.User.findOne({ email: jwt_payload.email }, (err, user) => {
            console.log('jwt_payload',jwt_payload);
            console.log('err',err);
            console.log('user',user)
            if (err) {
                return done(err, false);
            }
            if (user) {
                let authUser = {
                    email: user.email
                }
                return done(null, authUser);
            } else {
                return done(null, false)
            }
        }); 
    }));
}