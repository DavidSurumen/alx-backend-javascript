const http = require('http');

const PORT = 1245;
const app = http.createServer();

app.on('request', (_, response) => {
  const text = 'Hello Holberton School!';

  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', text.length);
  response.statusCode = 200;
  response.write(Buffer.from(text));
});

app.listen(PORT);

module.exports = app;
