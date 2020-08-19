const {Router} = require('express')
const router = Router()


var winners = [
    {name:"Пётр Петрович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true},
    {name:"Иван Иванович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true},
    {name:"Бородач Бородович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true}
]

// /api/auth/
router.get('/',async (req,res)=>{
    try{

    }
    catch(e){

    }
})

router.get("/winners",async (req,res)=>{
    try{
        console.log("Сюды стучат")
        res.set('Access-Control-Allow-Origin','*')
        res.send(winners);
    }
    catch(e){

    }
})

module.exports = router