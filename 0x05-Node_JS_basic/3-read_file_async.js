const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      // split into rows, and exclude the data header
      const results = data.trim().split('\n').map((row) => row.split(',')).slice(1);
      console.log(`Number of students: ${results.length}`);

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
        console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      });

      resolve(true); // resolve the promise when processing is complete
    }
  });
});

module.exports = countStudents;
