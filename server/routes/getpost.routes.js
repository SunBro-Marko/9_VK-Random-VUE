const { Router } = require("express");
const router = Router();
const vk = require ('../src/vk-api')

// /api/auth/
router.post("/", async (req, res) => {
  try {
    let uid = req.query.uid;
    let url = req.query.url;
    let token = database.getUserToken(uid);

    let postdata = vk.getpostdata(url);

    let postinfo = await vk.call(token, "wall.getById", {
      posts: postdata.group_id + "_" + postdata.post_id,
      extended: 0,
      copy_history_depth: 1,
    });

    res.send({
      uid: uid,
      url: url,
      token: token,
      group_id: postdata.group_id,
      post_id: postdata.post_id,
      post_info: postinfo,
    });
  } catch (e) {}
});

module.exports = router;
