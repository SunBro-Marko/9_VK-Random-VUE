const {Router} = require('express')
const router = Router()

// /api/session/
router.get('/', async (req, res) => {
  if (req.user) {
    const user = req.user
    res.send({
      AuthState: true,
      vk_id: user.vk_id,
      vk_displayName: user.vk_displayName,
      vk_photo: user.vk_photo,
      vk_profileUrl: user.vk_profileUrl,
    })
  } else {
    res.send({
      AuthState: false,
      vk_id: '',
      vk_displayName: '',
      vk_photo: '',
      vk_profileUrl: '',
    })
  }
})

// /api/session/new
router.get('/logout',async (req,res)=>{
    try{

    }
    catch(e){

    }
})

module.exports = router