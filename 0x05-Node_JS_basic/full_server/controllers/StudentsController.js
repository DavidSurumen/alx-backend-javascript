import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Controller for handling student related functionality
 * @class
 * @author David Surumen <https://github.com/DavidSurumen
 */
class StudentsController {
  /**
   * Retrieves all students
   */
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((fieldStudents) => {
        const resParts = ['This is the list of our students'];

        // order list of strings by alphabetic order, case insensitive
        // using a comparison function
        const compare = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, students] of Object.entries(fieldStudents).sort(compare)) {
          resParts.push([
            `Number of students in ${field}: ${students.length}.`,
            'List:',
            students.join(', '),
          ].join(' '));
        }
        response.status(200).send(resParts.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error.message);
      });
  }

  /**
   * Retrieves all students by major
   */
  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
    }
    readDatabase(path)
      .then((fieldStudents) => {
        let resText;

        if (Object.keys(fieldStudents).includes(major)) {
          const students = fieldStudents[major];
          resText = `List: ${students.join(', ')}`;
        }
        response.status(200).send(resText);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error.message);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
