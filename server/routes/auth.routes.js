const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/
router.post('/',async (req,res)=>{
    try{

    }
    catch(e){

    }
})

// /api/auth/token
router.post('/token',async(res,req)=>{
    try{

    }
    catch(e){

    }
})

module.exports = router