const { Router } = require("express");
const router = Router();
const vk = require("../src/vk-api");
const database = require("../database");

// /api/getpost/
router.get("/", async (req, res) => {
  try {
    let time = new Date();
    console.log(`${time} на адрес: ${req.baseUrl}- поступил запрос:, ${JSON.stringify(req.query)}`);

    let uid = req.query.uid;
    let url = req.query.url;
    let token = database.getUserToken(uid);

    let postdata = vk.getpostdata(url);

    await vk
      .call(token, "wall.getById", {
        posts: postdata.group_id + "_" + postdata.post_id,
        extended: 1,
        copy_history_depth: 1,
      })
      .then((data) => vk.parsepostinfo(data))
      .then((parse) => res.send(parse));

    //.then(data =>parsepostinfo(data))
  } catch (e) {
    res.send(e);
  }
});

router.get("/reposts",async(req,res)=>{
  
})

module.exports = router;
