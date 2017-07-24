const path = require('path');
const express = require('express');
const app = express();

 app.use(express.static(path.join(__dirname, 'dist', 'app')));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html')), error => {
    if (error) console.log(error);
  }});

app.listen(process.env.PORT || 3000, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening ...`)
});