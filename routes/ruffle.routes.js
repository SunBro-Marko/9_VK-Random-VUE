const {Router} = require('express')
const router = Router()
const User = require('../models/user.model')

var winners = [
    {name:"Пётр Петрович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true},
    {name:"Иван Иванович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true},
    {name:"Бородач Бородович",img_url:"https://via.placeholder.com/150x200",isonline:true,isfollower:true,isopened:true}
]

/*
rout: baseurl/api/ruffle?url='https://vk.com/boroda4_gaming?w=wall-129804174_122028'

*/
router.get('/',async (req,res)=>{
    try {
        
        const user = req.user
        fetchdata = req.query

        User.findOne({ vk_id: user.vk_id }, (err, obj) => {
            if (!err) {
                const reposts = obj.ruffle.reposts
                let blacklist = obj.ruffle.blacklist
                const winners = FindWinners(reposts,blacklist,fetchdata.count)

                obj.ruffle.blacklist=blacklist
                obj.ruffle.winners = winners
                obj.save()
                res.send(winners)  
            }
          })        
    } catch (error) {
        
    }
})

router.get("/newroll",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

router.get("/winners",async (req,res)=>{
    try{
        const user = req.user
        res.set('Access-Control-Allow-Origin','*')
        User.findOne({ vk_id: user.vk_id }, (err, obj) => {
            if (!err) {
                res.send(obj.ruffle.winners);  
            }
          })
        
    }
    catch(e){

    }
})

let FindWinners=  (reposts,blacklist,count)=>{
    let winners = []
    for (let i=0;i<count;i++){
      let winner = Math.ceil(Math.random()*reposts.length)
      if(!blacklist.includes(reposts[winner].id)){
        console.log("Победитель выбран")
          blacklist.push(reposts[winner].id)
          winners.push(reposts[winner])
      }
      else{
        console.log("Победитель не выбран")
          i--
      }  
    }
    return winners
  }

/*Для организации розыгрыша нужны следющие методы
1. Получить исходные данные и выгрузить всех участников розыгрыша
2. Выбрать из участников розыгрыша заданное колличество победителей, и создать массив данных для выгрузки на фронт
3. Перевыбрать победителя с учётом уже выбранных людей, заменить "проблемного" победителя на нового в массиве для фронта.
*/
module.exports = router