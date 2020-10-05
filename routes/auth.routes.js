const {Router} = require('express')
const router = Router()
const passport = require("passport");


require("../auth.strategies/vk.strategy")

router.use(function(req, res, next) {
  console.log('Я тут был')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// /api/auth/
router.get(
    "/",
       async (req, res) => {
         res.redirect('https://oauth.vk.com/authorize?display=page&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A80%2Fapi%2Fauth%2Ftoken&scope=status%2Cemail%2Cfriends%2Cnotify&client_id=7554191')
      
    }
  );
  
  // /api/auth/token
  router.get(
    "/token",
    passport.authenticate("vkontakte", {failureRedirect: "/auth" }),
    async (req, res) => {
      res.redirect(`http://localhost:8080/`)   
    }
  );
  
  module.exports = router;
  