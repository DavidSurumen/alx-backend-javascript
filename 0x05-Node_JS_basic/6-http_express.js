const express = require('express')

const app = express();
const port = 1245;

app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
