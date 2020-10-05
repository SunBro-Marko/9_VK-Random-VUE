const {Router} = require('express')
const router = Router()

// /api/session/
router.get('/',async (req,res)=>{
    if(req.user){
        res.send({AuthState:true})
        console.log('В меня постучали и я сказал что пользователь авторизован') 
    }
    else{
        res.send({AuthState:false})
        console.log('В меня постучали и я сказал что пользователь не авторизован')  
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