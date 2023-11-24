const fs = require('fs');

function countStudents(path) {
  // data format: FIRSTNAME, LASTNAME, AGE, FIELD
  try {
    const data = fs.readFileSync(path, 'utf-8'); // read in string format

    // split data into rows.
    const results = data.trim().split('\n').map((row) => row.split(',')).slice(1);
    console.log(`Number of students: ${results.length}`);

    const fieldCounts = {};
    const fieldStudents = {};

    /* eslint-disable no-unused-vars */
    results.forEach((studt) => {
      const [firstname, lastname, age, field] = studt;
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      fieldStudents[field] = fieldStudents[field] || [];
      fieldStudents[field].push(firstname);
    });
    /* eslint-enable no-unused-vars */

    Object.keys(fieldCounts).forEach((field) => {
      const count = fieldCounts[field];
      const students = fieldStudents[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${students}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
