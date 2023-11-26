const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const results = data.trim().split('\n')
        .map((row) => row.split(',')).slice(1);
      const report = [`Number of students: ${results.length}`];

      const fieldCounts = {};
      const fieldStudents = {};

      /* eslint-disable no-unused-vars */
      results.forEach((student) => {
        const [firstname, lastname, age, field] = student;

        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        fieldStudents[field] = fieldStudents[field] || [];
        fieldStudents[field].push(firstname);
      });
      /* eslint-enable no-unused-vars */

      Object.keys(fieldCounts).forEach((field) => {
        const count = fieldCounts[field];
        const studentsList = fieldStudents[field].join(', ');
        report.push(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      });

      resolve(report.join('\n'));
    }
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const resParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      resParts.push(report);
      const resText = resParts.join('\n');

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resText));
    })
    .catch((error) => {
      resParts.push(error.message);
      const resText = resParts.join('\n');

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resText.length);
      res.statusCode = 200;
      res.write(Buffer.from(resText));
    });
});

app.listen(port);

module.exports = app;
