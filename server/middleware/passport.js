const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/User');
const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.jwt;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      User.findById(payload.userId)
        .select('email id')
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => done(err, false));
    }),
  );
};
