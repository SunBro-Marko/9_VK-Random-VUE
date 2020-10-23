const { Router } = require('express')
const router = Router()
const User = require('../models/user.model')

router.get('/', async (req, res) => {
  try {
    const user = req.user
    fetchdata = req.query

    User.findOne({ vk_id: user.vk_id }, (err, obj) => {
      if (!err) {
        try {
          const reposts = obj.ruffle.reposts
          let blacklist = obj.ruffle.blacklist
          const winners = FindWinners(reposts, blacklist, fetchdata.count)
          obj.ruffle.blacklist = blacklist
          obj.ruffle.winners = winners
          obj.save()
          res.send(winners)
        } catch (error) {
          console.log(error.message)
          return res.status(501).json(error.message)
        }
      } else {
        return res.status(501).json('Ошибка базы данных')
      }
    })
  } catch (error) {}
})

router.get('/newroll', async (req, res) => {
  try {
  } catch (error) {}
})

router.get('/winners', async (req, res) => {
  try {
    const user = req.user
    res.set('Access-Control-Allow-Origin', '*')
    User.findOne({ vk_id: user.vk_id }, (err, obj) => {
      if (!err) {
        res.send(obj.ruffle.winners)
      }
    })
  } catch (e) {}
})

function FindWinners(reposts, blacklist, count) {
  let winners = []
  pretendents = reposts.filter((item) => !blacklist.includes(item.id))
  try {
    if (pretendents.length >= count) {
      for (let i = 0; i < count; i++) {
        let winner = getRandomInt(0, pretendents.length)
        blacklist.push(pretendents[winner].id)
        winners.push(pretendents[winner])
        pretendents.splice(winner, 1)        
      }
      console.log(`Было выбрано ${winners.length} победителей, доступно претендентов: ${pretendents.length}`)
      return winners
    } else {
      throw new Error('Участников розыгрыша недостаточно')
    }
  } catch (error) {
    throw error
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}

/*Для организации розыгрыша нужны следющие методы
1. Получить исходные данные и выгрузить всех участников розыгрыша
2. Выбрать из участников розыгрыша заданное колличество победителей, и создать массив данных для выгрузки на фронт
3. Перевыбрать победителя с учётом уже выбранных людей, заменить "проблемного" победителя на нового в массиве для фронта.
*/
module.exports = router
