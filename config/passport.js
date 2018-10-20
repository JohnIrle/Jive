const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookTokenStrategy = require("passport-facebook-token").Strategy;
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
  //   new FacebookTokenStrategy(
  //     {
  //       clientID: keys.facebookClientID,
  //       clientSecret: keys.facbookSecret
  //     },
  //     (accessToken, refreshToken, profile, done) => {
  //       const errors = {};
  //       User.findOne({ facebookId: profile.id }).then(user => {
  //         if (!user) {
  //           const newUser = new User({
  //             name: profile.name,
  //             email: profile.email,
  //             facebookId: profile.id
  //           });

  //           newUser.save().then(user => res.json(user));
          // }
        // });
      // }
    // )
  // );
};
