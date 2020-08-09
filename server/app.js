const express = require("express");
const config = require("config");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/getpost", require("./routes/getpost.routes"));
app.use("/api/ruffle", require("./routes/ruffle.routes"));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }

const PORT = config.get("port") || 5000;

app.listen(port, function () {
  console.log("Example app listening on port 80!");
  database.load("./database.json");
});

process.on("SIGINT", () => {
  console.log("Log that Ctrl + C has been pressed");
  database.save("./database.json");
});
