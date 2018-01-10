// Dependencies
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// Authentication Configuration
var authConfig = require('./authConfig.json');
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = authConfig.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  console.log(jwt_payload);
  return done(null, JSON.stringify(jwt_payload));
    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
}));


// Authentication Handler Function
module.exports = jwtHandler = function (req, res, next) {
	passport.authenticate('jwt', {session: false})(req, res, next);

};