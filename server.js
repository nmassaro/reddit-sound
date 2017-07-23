const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

 app.use(express.static(path.join(__dirname, 'dist', 'app')));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'dist', 'app', 'index.html'), error => {
    if (error) console.log(error);
    else console.log("Path", path.join(__dirname, 'index.html')); 
})});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});