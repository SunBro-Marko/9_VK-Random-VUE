const express = require("express");
const config = require("config");
const mongoose = require ("mongoose")
const path = require("path");
const database = require('./database');

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/session", require(".routes/session.routes"))
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/getpost", require("./routes/getpost.routes"));
app.use("/api/ruffle", require("./routes/ruffle.routes"));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client-vue', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client-vue', 'build', 'index.html'))
    })
  }

const PORT = config.get("port") || 5000;

async function start() {
  try {
    console.log('Пытаемся подключится к базе данных')
    database.load('./database.json')
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error: ', e.message)
    process.exit(1)
  }
}

start()

process.on("SIGINT", () => {
  console.log("Log that Ctrl + C has been pressed");
  database.save("./database.json");
});


