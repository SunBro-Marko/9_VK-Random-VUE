const express = require("express");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
//const User = require("../models/User");
const router = Router();
const axios = require('axios')
const database = require('../database');

const app = express()

// /api/auth/
router.get("/", async (req, res) => {
  try {
    res.redirect(
      "https://oauth.vk.com/authorize?client_id=7554191&display=popup&revoke=1&redirect_uri=http://sunbro.ru/api/auth/token&scope=stats&state=" +
        req.query.id +
        "&response_type=code&v=5.120"
    );
  } catch (e) {}
});

// /api/auth/token
router.get("/token", async (req, res) => {
  try {        
    res.redirect("http://sunbro.ru?auth=true");
    console.log("code:" + req.query.code + " state:" + req.query.state);
    let url = `https://oauth.vk.com/access_token?client_id=${config.get("client_id")}&client_secret=${config.get("client_secret")}&redirect_uri=http://sunbro.ru/api/auth/token&code=${req.query.code}`;
    console.log(url);
    axios.get(url).then((response) => {
      let newUser = {
        id: req.query.state,
        vk_id: response.data.user_id,
        access_token: response.data.access_token,
      };
      console.log(newUser);
      database.getUserData(newUser);
    });
  } catch (e) {
    console.log(e)
  }
});

module.exports = router;
