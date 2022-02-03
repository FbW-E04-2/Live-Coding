const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy=require("passport-github2").Strategy;
const UserSchema = require("./UserSchema.js")

//it will store userid in session cookie
//receive user from strategy callback function
passport.serializeUser((user,done)=>{
    done(null, user.id)
})

//getting id from session and finding that user in database
passport.deserializeUser(async (id,done)=>{
    const user = await UserSchema.findOne({id:id})
    done(null,user)
})


passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret:process.env.clientSecret,
    callbackURL: process.env.callbackURL
  },
  async function(accessToken,refreshToken,profile,done) {
      const existingUser= await UserSchema.findOne({id:profile.id})
      if(existingUser){
        done(null, existingUser)
      }else{
           let user = new UserSchema({
        id:profile.id,
        displayName:profile.displayName,
        image:profile.photos[0].value
      })
      await user.save()

      done(null, user)
      }
  }
));


console.log("Passport js file")



//github
passport.use(new GitHubStrategy({

    clientID: process.env.githubClientId,
    clientSecret:  process.env.githubSecretKey,
    callbackURL:  process.env.githubCallbackURL
  },
  async function(accessToken, refreshToken, profile, done) {
      console.log(profile); const existingUser= await UserSchema.findOne({id:profile.id})
      if(existingUser){
        done(null, existingUser)
      }else{
           let user = new UserSchema({
        id:profile.id,
        displayName:profile.displayName,
        image:profile.photos[0].value
      })
      await user.save()

      done(null, user)
      }  

  }
));