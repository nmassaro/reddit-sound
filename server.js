const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(morgan('tiny'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html')), error => {
    if (error) console.log(error);
  }});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}...`)
});