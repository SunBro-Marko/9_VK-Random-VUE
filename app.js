const express = require('express')
const session = require('express-session')
const config = require('config')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const passport = require('passport')

const app = express()

app.use(
  session({
    secret: config.get('session_secret'),
    cookie: { 
      maxAge: 86400000 //Милисекунды ! Срок жизни токена ВК (В любом случае токен будет просрочер позже получения нового)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: require('mongoose').connection }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/session', require('./routes/session.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/getpost', require('./routes/getpost.routes'))
app.use('/api/ruffle', require('./routes/ruffle.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client-vue', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-vue', 'dist', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(config.get('http_port'), () => console.log(`HTTP has been started on port ${config.get('http_port')}...`));
  } catch (e) {
    console.log('Server Error: ', e.message)
    process.exit(1)
  }
}

start()
