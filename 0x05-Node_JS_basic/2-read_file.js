const fs = require('fs');

function countStudents(path) {
  // data format: FIRSTNAME, LASTNAME, AGE, FIELD
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }

    // by default readFile reads content of a file as a string
    // ...extract into an array...
    let results = [];
    const lines = data.split('\n'); // the strings in data are delimitted with \n
    // split into rows of data
    lines.forEach((line) => {
      const values = line.split(',');
      results.push(values);
    });
    // first item is label for columns, and the last is a null character. exclude
    results = results.slice(1, -1);
    console.log(`Number of students: ${results.length}`);

    // create list of objects to represent each field, and the students
    // in that field.
    const fields = [];
    for (let i = 0; i < results.length; i += 1) {
      const fieldName = results[i][results[i].length - 1];
      // check if field already added to the fields list
      const findField = fields.find((field) => field.fieldName === fieldName);

      if (findField) {
        findField.count += 1;
        findField.firstnames.push(results[i][0]);
      } else {
        fields.push({
          fieldName,
          count: 1,
          firstnames: [results[i][0]],
        });
      }
    }

    for (const itm in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, itm)) {
        console.log(`Number of students in ${fields[itm].fieldName}: ${fields[itm].count}.`
         + ` List: ${fields[itm].firstnames.join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
