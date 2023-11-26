/**
 * Controller for handling app functionality
 * @class
 */
class AppController {
  /**
   * Retrieves the content for the homepage.
   * @static
   * @returns {string} Content to display on the homepage
   * @author David Surumen <https://github.com/DavidSurumen
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
export default AppController;
module.exports = AppController;
