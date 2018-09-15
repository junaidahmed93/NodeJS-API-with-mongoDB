const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = '#h@12';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log('11', jwt_payload._doc);
        return done(null, { user: 'junaid' })
    }));
}