const {Router} = require('express')
const router = Router()
const passport = require("passport");
const config = require('config')


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
    passport.authenticate("vkontakte", { failureRedirect: `${config.get('frontend_url')}/auth` }),
    async (req, res) => {
      res.redirect(config.get('frontend_url'))   
    }
  );
  
  module.exports = router;
  