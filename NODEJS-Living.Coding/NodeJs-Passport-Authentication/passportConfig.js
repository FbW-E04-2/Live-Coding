const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserSchema = require("./UserSchema.js")
passport.use(new GoogleStrategy({
    clientID: "636059554388-p681g50otu6444s6ldvn8t7ahfplh0tl.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:4000/auth/google/redirect"
  },
  async function(accessToken,refreshToken,profile,done) {
      console.log(accessToken, "accessToken");
      console.log(profile);
      let user = new UserSchema({
        googleId:profile.id,
        displayName:profile.displayName,
        image:profile.photos[0].value
      })
      await user.save()

      done(null, user)

  }
));


console.log("Passport js file")