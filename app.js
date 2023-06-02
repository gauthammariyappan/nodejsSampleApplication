const express = require('express');
const app = express();
app.use('/', (req, res, next) => {
  res.setHeader('x-sourcemap-url', 'https://gauthammariyappan.github.io/coursera-test/module5-solution/case1.js.map');
  next();
}, express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


