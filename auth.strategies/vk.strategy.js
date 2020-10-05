const config = require("config");
const passport = require("passport");
const User = require("../models/user.model");
const VKontakteStrategy = require("passport-vkontakte").Strategy;

passport.use(
  new VKontakteStrategy(
    {
      clientID: config.get("client_id"),
      clientSecret: config.get("client_secret"),
      callbackURL: `http://${config.get("base_url")}/api/auth/token`,
    },
    function (accessToken, refreshToken, params, profile, done) {
      var candidate = new User({
        vk_id: profile.id,
        vk_token: params.access_token,
        token_expires_in: params.expires_in,
        token_recived_in: 123,
      });

      let result  = User.findOne({ vk_id: profile.id })
        
      if (result) {
          return done(null, candidate, { message: "Пользователь найден" });            
        }  
          return done(null, false);
    }
  )
);

passport.serializeUser(function(user, done) {

  done(null, user);
});

passport.deserializeUser(function(user, done) {

  done(null, user);
});

