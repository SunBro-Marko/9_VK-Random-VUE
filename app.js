const express = require('express')
const session = require('express-session')
const config = require('config')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const fs = require('fs')
const passport = require('passport')
const https = require('https')
const http = express()

http.get('*', function (req, res) {
  res.redirect('https://' + req.headers.host + req.url)
})

const app = express()

app.use(
  session({
    secret: config.get('session_secret'),
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

const options = {
  key: fs.readFileSync('ssl-sertificate/key.pem'),
  cert: fs.readFileSync('ssl-sertificate/cert.pem'),
}

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client-vue', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-vue', 'dist', 'index.html'))
  })
}

const server = https.createServer(options, app)

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    http.listen(config.get('http_port'), () => console.log(`HTTP has been started on port ${config.get('http_port')}...`));
    server.listen(config.get('https_port'), () => console.log(`HTTPS has been started on port ${config.get('https_port')}...`))
  } catch (e) {
    console.log('Server Error: ', e.message)
    process.exit(1)
  }
}

start()
