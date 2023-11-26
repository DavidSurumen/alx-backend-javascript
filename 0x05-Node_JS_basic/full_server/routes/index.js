import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds the routes to the appropriate handler
 * @param {Express} app The Express application.
 * @author David Surumen <https://github.com/DavidSurumen>
 */
const linkRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default linkRoutes;
module.exports = linkRoutes;
