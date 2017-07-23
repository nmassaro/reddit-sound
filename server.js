const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

var DIST_DIR = path.resolve(__dirname, "dist");
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(DIST_DIR + '/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});