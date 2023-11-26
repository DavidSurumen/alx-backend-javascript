import fs from 'fs';

/**
 * Utility function to read a database file
 * @param {string} path The csv data file
 * @return {array} fieldStudents An array of objects, with field majors and
 * list of students
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
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
        const fieldStudents = {};

        /* eslint-disable no-unused-vars */
        results.forEach((student) => {
          const [firstname, lastname, age, field] = student;
          fieldStudents[field] = fieldStudents[field] || [];
          fieldStudents[field].push(firstname);
        });
        /* eslint-enable no-unused-vars */

        resolve(fieldStudents);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
