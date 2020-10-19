const express = require('express')
const session = require('express-session')
const config = require('config')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const database = require('./database')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


app.use(
  session({
    secret: 'cats',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: require('mongoose').connection }),
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())


app.use('/api/session', require('./routes/session.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/getpost', require('./routes/getpost.routes'))
app.use('/api/ruffle', require('./routes/ruffle.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client-vue', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-vue', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(config.get('port'), () =>
      console.log(`App has been started on port ${config.get('port')}...`)
    )
  } catch (e) {
    console.log('Server Error: ', e.message)
    process.exit(1)
  }
}


start()

process.on('SIGINT', () => {
  console.log('Log that Ctrl + C has been pressed')
  database.save('./database.json')
})
