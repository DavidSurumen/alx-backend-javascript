const http = require('http');
const fs = require('fs');

const PORT = 1245;
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a csv file, reading asynchronously
 * @param {string} path The path to the csv data file
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      // split the string data into rows, and exclude the header row
      const results = data.trim().split('\n').map((row) => row.split(',')).slice(1);
      const report = [`Number of students: ${results.length}`];

      const fieldCounts = {};
      const fieldStudents = {};

      // eslint-disable no-unused-vars
      results.forEach((student) => {
        const [firstname, lastname, age, field] = student;
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        fieldStudents[field] = fieldStudents[field] || [];
        fieldStudents[field].push(firstname);
      });
      // eslint-enable no-usued-vars

      Object.keys(fieldCounts).forEach((field) => {
        const count = fieldCounts[field];
        const studentsList = fieldStudents[field].join(', ');
        report.push(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      });

      resolve(report.join('\n')); // resolve the promise when processing is complete
    }
  });
});

// server route handlers
const SERVER_ROUTE = [
  {
    route: '/',
    handler(_, res) {
      const resText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      countStudents(DB_FILE)
        .then((report) => {
          const resParts = ['This is the list of our students'];
          resParts.push(report);

          const resText = resParts.join('\n');

          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', resText.length);
          res.statusCode = 200;
          res.write(Buffer.from(resText));
        })
        .catch((error) => {
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', error.message.length);
          res.statusCode = 404;
          res.write(Buffer.from(error.message));
        });
    },
  },
];

// server event listener
app.on('request', (req, res) => {
  // get the URL path from the request
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // respond based on the URL path
  for (const routeHandler of SERVER_ROUTE) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT);

module.exports = app;
