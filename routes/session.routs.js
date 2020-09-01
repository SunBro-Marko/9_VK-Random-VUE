const {Router} = require('express')
const router = Router()

// /api/session/
router.get('/',async (req,res)=>{
    try{
        if(req.cookies.id){
            //Значит пользователь есть, и его нужно проверить в базе данных, а так-же на "протухший" токен.
            if(req.cookies.session){

            }
            
        }
        else{
            //Выдать статус что пользователь не авторизован
        }

    }
    catch(e){

    }
})

// /api/session/new
router.get('/new',async (req,res)=>{
    try{

    }
    catch(e){

    }
})

module.exports = router