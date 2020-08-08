var express = require("express")
var app = express()
const path = require('path');
const fs = require("fs")
const axios = require('axios')
const database = require('./database');

const port=80

const client_id = 7554191
const client_secret = 'DCYdzqPteiEvnUOJrFEs'

var users = {}

var users = {}

app.listen(port, function () {
  console.log("Example app listening on port 80!");
  database.load('./database.json');
})

app.get("/", function (req, res) {
  res.sendfile(__dirname+ "/index.html")
})

app.get("/vk/token", function (req, res) {
    res.sendfile(__dirname+ "/index.html")
    console.log("code:"+req.query.code + " state:" + req.query.state);
    let url = "https://oauth.vk.com/access_token?client_id="+client_id+"&client_secret="+client_secret+"&redirect_uri=http://sunbro.ru/vk/token&code=" + req.query.code
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


function getUserData(token) {
  
  
}

process.on('SIGINT', () => {
  console.log('Log that Ctrl + C has been pressed');
  database.save('./database.json')
  
})