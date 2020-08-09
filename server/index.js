var express = require("express")
var app = express()
const path = require('path');
const fs = require("fs")
const axios = require('axios')
const database = require('./database');
const vk=require('./src/vk-api')

const port=80

const client_id = 7554191
const client_secret = 'DCYdzqPteiEvnUOJrFEs'


app.listen(port, function () {
  console.log("Example app listening on port 80!");
  database.load('./database.json');
})

app.get("/", function (req, res) {
  res.sendFile(__dirname+ "/index.html")
})


app.use("/api/auth", function (req, res) {
  res.redirect("https://oauth.vk.com/authorize?client_id=7554191&display=popup&revoke=1&redirect_uri=http://sunbro.ru/api/getvktoken&scope=stats&state="+req.query.id+"&response_type=code&v=5.120")
})

app.get("/api/getvktoken", function (req, res) {
    //res.status(201).json({ message: 'Пользователь авторизован' })
    res.redirect(201,"http://sunbro.ru?auth=true")
    console.log("code:"+req.query.code + " state:" + req.query.state);
    let url = `https://oauth.vk.com/access_token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://sunbro.ru/api/getvktoken&code=${req.query.code}`
    console.log(url);
    axios.get(url)
  .then((response) => {
    
    let newUser = {
      id: req.query.state,
      vk_id: response.data.user_id,
      access_token: response.data.access_token
    }
    console.log(newUser)
    database.getUserData(newUser)
  
  })
  
})

//http://sunbro.ru/api/getvkpost?uid=sunbromarko&url=https://vk.com/boroda4_gaming?w=wall-129804174_122028

//https://vk.com/boroda4_gaming?w=wall-129804174_122028

app.get("/api/getvkpost",async function (req,res) {
  let uid = req.query.uid
  let url = req.query.url  
  let token =  database.getUserToken(uid)

  let postdata=vk.getpostdata(url)

  let postinfo = await vk.call(token,"wall.getById",{
    posts:postdata.group_id+"_"+postdata.post_id,
    extended:0,
    copy_history_depth:1
  })
  
  res.send({
    uid:uid,
    url:url,
    token:token,
    group_id:postdata.group_id,
    post_id:postdata.post_id,
    post_info:postinfo
  })
})


function getUserData(token) {
  
  
}

process.on('SIGINT', () => {
  console.log('Log that Ctrl + C has been pressed');
  database.save('./database.json')
  
})

