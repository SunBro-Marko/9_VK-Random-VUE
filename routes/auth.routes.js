const {Router} = require('express')
const router = Router()
const passport = require("passport");


require("../auth.strategies/vk.strategy")

// /api/auth/
router.get(
    "/",passport.authenticate('vkontakte', { scope: ['status', 'stats'] }),
       async (req, res) => {         
    }
  );
  
  // /api/auth/token
  router.get(
    "/token",
    passport.authenticate("vkontakte", { failureRedirect: "http://localhost:8080/auth" }),
    async (req, res) => {
      res.redirect(`http://localhost:8080/`)   
    }
  );
  
  module.exports = router;
  