const { Router } = require('express')
const router = Router()
const User = require('../models/user.model')
const easyvk = require('easyvk')
const vkapi = require('../src/vk-api')

// /api/getpost/
router.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin','*')
  try {
    const vk = await easyvk({
      token: req.user.vk_token,
      save: false, //Не вести лог файл для сессий
    })
    const url = req.query.url

    const postdata = vkapi.getpostdata(url)

    post = await vk.call('wall.getById', {
      posts: `${postdata.group_id}_${postdata.post_id}`,
      extended: 1,
    })

    const parsedpost = vkapi.parsepostinfo(post)

    const reposts = await vk.call('wall.getReposts', {
      owner_id: postdata.group_id,
      post_id: postdata.post_id,
      offset: 0,
      count: 1000,
    })

    const user = req.user

    User.findOne({ vk_id: user.vk_id }, (err, obj) => {
      if (!err) {
        obj.ruffle.post = parsedpost
        obj.ruffle.reposts = reposts.profiles
        obj.ruffle.blacklist=[]
        obj.ruffle.winners=[]
        obj.save()
      }
    })

    res.send({
      post: parsedpost,
      reposts: reposts.profiles,
    })
  } catch (e) {
    if (e.error_msg) {
      console.log(e.error_msg)
    } else {
      console.log(e)
    }
  }
})

module.exports = router
