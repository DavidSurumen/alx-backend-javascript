import express from 'express';
import linkRoutes from './routes';

const app = express();
const PORT = 1245;

linkRoutes(app);
app.listen(PORT);

export default app;
module.exports = app;
