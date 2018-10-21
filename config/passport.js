const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  // passport.use(
  //   new FacebookStrategy(
  //     {
  //       clientID: FACEBOOK_APP_ID,
  //       clientSecret: FACEBOOK_APP_SECRET,
  //       callbackURL: "http://localhost:5000/api/users/facebook/callback"
  //     },
  //     (accessToken, profile, cb) => {
  //       User.find;
  //     }
  //   )
  // );
};
