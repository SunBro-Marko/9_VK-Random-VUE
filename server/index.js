var express = require("express")
const axios = require('axios')
var app = express()

const port=80

const client_id = 7554191
const client_secret = 'DCYdzqPteiEvnUOJrFEs'

app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.get("/vk/token", function (req, res) {
    res.send(req.query.code)
    console.log(req.query.code);
    let url = "https://oauth.vk.com/access_token?client_id=7554191&client_secret=DCYdzqPteiEvnUOJrFEs&redirect_uri=http://sunbro.ru/vk/token&code=" + req.query.code
    console.log(url);
    axios.get(url)
  .then(response => console.log("access_token:", response.data.access_token))       
  })

app.listen(port, function () {
  console.log("Example app listening on port 80!");
})


//https://oauth.vk.com/authorize?client_id=7554191&display=page&redirect_uri=http://sunbro.ru/vk/token&scope=friends&response_type=code&v=5.120

//https://oauth.vk.com/access_token?client_id=7554191&client_secret=DCYdzqPteiEvnUOJrFEs&redirect_uri=http://sunbro.ru/vk/token&code=e6720a8c12a3a2145c

//https://oauth.vk.com/access_token?client_id=7554191&client_secret=DCYdzqPteiEvnUOJrFEs&redirect_uri=http://sunbro.ru/vk/token&code=58bdccd317a3966e64

//https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=code&v=5.120

//https://oauth.vk.com/authorize?client_id=7554191&display=page&redirect_uri=http://sunbro.ru/vk/token&scope=friends&response_type=token&v=5.120&state=123456